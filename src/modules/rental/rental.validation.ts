import { RentalStatus } from '../../generated/prisma/index.js';
import { BadRequestError } from '../../errors';

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface RentalItemInput {
  gearItemId: string;
  quantity: number;
}

export interface RentalCreateInput {
  startDate: string;
  endDate: string;
  items: RentalItemInput[];
}

export function validateRentalCreateInput(
  body: Record<string, unknown>,
): RentalCreateInput {
  const errors: string[] = [];

  if (
    body.startDate === undefined ||
    body.startDate === null ||
    String(body.startDate).trim() === ''
  ) {
    errors.push('startDate is required');
  }

  if (
    body.endDate === undefined ||
    body.endDate === null ||
    String(body.endDate).trim() === ''
  ) {
    errors.push('endDate is required');
  }

  if (body.items === undefined || body.items === null) {
    errors.push('items is required');
  } else if (!Array.isArray(body.items)) {
    errors.push('items must be an array');
  } else if (body.items.length === 0) {
    errors.push('items array cannot be empty');
  } else {
    body.items.forEach((item: any, index: number) => {
      if (typeof item !== 'object' || item === null) {
        errors.push(`item at index ${index} must be an object`);
        return;
      }
      if (
        item.gearItemId === undefined ||
        item.gearItemId === null ||
        String(item.gearItemId).trim() === ''
      ) {
        errors.push(`gearItemId is required for item at index ${index}`);
      } else if (!UUID_REGEX.test(String(item.gearItemId).trim())) {
        errors.push(`gearItemId at index ${index} must be a valid UUID`);
      }

      if (item.quantity === undefined || item.quantity === null) {
        errors.push(`quantity is required for item at index ${index}`);
      } else {
        const qty = Number(item.quantity);
        if (!Number.isInteger(qty) || qty < 1) {
          errors.push(
            `quantity for item at index ${index} must be a positive integer`,
          );
        }
      }
    });
  }

  if (errors.length > 0) {
    throw new BadRequestError('Validation failed', errors);
  }

  const startStr = String(body.startDate).trim();
  const endStr = String(body.endDate).trim();

  const startDateObj = new Date(startStr);
  const endDateObj = new Date(endStr);

  if (Number.isNaN(startDateObj.getTime())) {
    throw new BadRequestError('Invalid start date format');
  }
  if (Number.isNaN(endDateObj.getTime())) {
    throw new BadRequestError('Invalid end date format');
  }

  // Calculate difference to verify logical sequence
  if (endDateObj.getTime() < startDateObj.getTime()) {
    throw new BadRequestError('End date cannot be before start date');
  }

  // Calculate if dates are in the past
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startCompare = new Date(startDateObj);
  startCompare.setHours(0, 0, 0, 0);

  if (startCompare.getTime() < today.getTime()) {
    throw new BadRequestError('Start date cannot be in the past');
  }

  return {
    startDate: startStr,
    endDate: endStr,
    items: (body.items as any[]).map((item) => ({
      gearItemId: String(item.gearItemId).trim(),
      quantity: Number(item.quantity),
    })),
  };
}

export function validateRentalIdParam(id: unknown): string {
  if (!id || typeof id !== 'string' || !UUID_REGEX.test(id)) {
    throw new BadRequestError('Invalid rental order ID');
  }
  return id;
}

export function validateRentalListQuery(query: Record<string, unknown>): {
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
