import { BadRequestError } from '../../errors';
import { RentalStatus } from '../../generated/prisma';

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface GearItemInput {
  name: string;
  categoryId: string;
  description?: string;
  brand?: string;
  price: number;
  stockQuantity: number;
  isAvailable?: boolean;
  images?: string[];
}

export function validateGearItemInput(
  body: Record<string, unknown>,
): GearItemInput {
  const errors: string[] = [];

  if (
    body.name === undefined ||
    body.name === null ||
    String(body.name).trim() === ''
  ) {
    errors.push('name is required');
  }

  if (
    body.categoryId === undefined ||
    body.categoryId === null ||
    String(body.categoryId).trim() === ''
  ) {
    errors.push('categoryId is required');
  } else if (!UUID_REGEX.test(String(body.categoryId).trim())) {
    errors.push('categoryId must be a valid UUID');
  }

  if (body.price === undefined || body.price === null) {
    errors.push('price is required');
  } else {
    const priceVal = Number(body.price);
    if (Number.isNaN(priceVal) || priceVal <= 0) {
      errors.push('price must be a positive number');
    }
  }

  if (body.stockQuantity === undefined || body.stockQuantity === null) {
    errors.push('stockQuantity is required');
  } else {
    const qty = Number(body.stockQuantity);
    if (!Number.isInteger(qty) || qty < 0) {
      errors.push('stockQuantity must be a non-negative integer');
    }
  }

  if (
    body.isAvailable !== undefined &&
    body.isAvailable !== null &&
    typeof body.isAvailable !== 'boolean'
  ) {
    errors.push('isAvailable must be a boolean');
  }

  if (body.images !== undefined && body.images !== null) {
    if (!Array.isArray(body.images)) {
      errors.push('images must be an array');
    } else {
      for (const img of body.images) {
        if (typeof img !== 'string' || img.trim() === '') {
          errors.push('each image must be a non-empty string');
        }
      }
    }
  }

  if (errors.length > 0) {
    throw new BadRequestError('Validation failed', errors);
  }

  return {
    name: String(body.name).trim(),
    categoryId: String(body.categoryId).trim(),
    description:
      body.description !== undefined && body.description !== null
        ? String(body.description).trim()
        : undefined,
    brand:
      body.brand !== undefined && body.brand !== null
        ? String(body.brand).trim()
        : undefined,
    price: Number(body.price),
    stockQuantity: Number(body.stockQuantity),
    isAvailable:
      body.isAvailable !== undefined ? Boolean(body.isAvailable) : true,
    images: Array.isArray(body.images)
      ? body.images.map((img) => String(img).trim())
      : [],
  };
}

export function validateOrderStatusUpdate(body: Record<string, unknown>): {
  status: 'CONFIRMED' | 'PICKED_UP' | 'RETURNED';
} {
  const status = body.status;
  if (
    status !== 'CONFIRMED' &&
    status !== 'PICKED_UP' &&
    status !== 'RETURNED'
  ) {
    throw new BadRequestError(
      "Status must be one of 'CONFIRMED', 'PICKED_UP', 'RETURNED'",
    );
  }
  return { status };
}

export function validateOrderIdParam(id: unknown): string {
  if (!id || typeof id !== 'string' || !UUID_REGEX.test(id)) {
    throw new BadRequestError('Invalid order ID');
  }
  return id;
}

export function validateGearIdParam(id: unknown): string {
  if (!id || typeof id !== 'string' || !UUID_REGEX.test(id)) {
    throw new BadRequestError('Invalid gear item ID');
  }
  return id;
}

export function validateOrderListQuery(query: Record<string, unknown>): {
  status?: RentalStatus;
  page: number;
  limit: number;
} {
  const errors: string[] = [];
  let status: RentalStatus | undefined;

  if (query.status !== undefined && query.status !== '') {
    const statusStr = String(query.status).toUpperCase();
    if (Object.values(RentalStatus).includes(statusStr as RentalStatus)) {
      status = statusStr as RentalStatus;
    } else {
      errors.push(
        `status must be a valid RentalStatus: ${Object.values(RentalStatus).join(', ')}`,
      );
    }
  }

  let page = 1;
  if (query.page !== undefined && query.page !== '') {
    const parsedPage = Number(query.page);
    if (!Number.isInteger(parsedPage) || parsedPage < 1) {
      errors.push('page must be a positive integer');
    } else {
      page = parsedPage;
    }
  }

  let limit = 20;
  if (query.limit !== undefined && query.limit !== '') {
    const parsedLimit = Number(query.limit);
    if (
      !Number.isInteger(parsedLimit) ||
      parsedLimit < 1 ||
      parsedLimit > 100
    ) {
      errors.push('limit must be an integer between 1 and 100');
    } else {
      limit = parsedLimit;
    }
  }

  if (errors.length > 0) {
    throw new BadRequestError('Validation failed', errors);
  }

  return { status, page, limit };
}
