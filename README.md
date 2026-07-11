# GearUp — Sports & Outdoor Gear Rental API

Backend API for a sports and outdoor equipment rental platform. Customers browse
gear, place rental orders, and pay online; providers manage their inventory and
fulfill orders; admins moderate the platform.

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (ESM), TypeScript |
| Framework | Express 5 |
| Database | PostgreSQL |
| ORM | Prisma 7 (with `@prisma/adapter-pg`) |
| Auth | JWT (access + refresh tokens), bcrypt password hashing |
| Payments | Stripe (Checkout Sessions + signed webhooks) |
| API Docs | OpenAPI 3 spec, served via Swagger UI at `/api-docs` |
| Tooling | pnpm, tsx, Biome (lint/format) |

## Roles & Permissions

| Role | Description | Key Permissions |
|---|---|---|
| Customer | Rents gear | Browse gear, place rental orders, pay, track status, leave reviews |
| Provider | Gear vendor/rental shop | Manage inventory, view incoming orders, update order status |
| Admin | Platform moderator | Manage users, oversee all rentals/gear, manage categories |

Role is chosen at registration (`CUSTOMER` or `PROVIDER`). Admin accounts are
seeded, not self-registered.

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm
- PostgreSQL database
- A Stripe account (test mode is fine) for `STRIPE_SECRET_KEY` and
  `STRIPE_WEBHOOK_SECRET`

### 1. Install dependencies
```bash
pnpm install
```

### 2. Configure environment variables
Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/gearup"

# App
PORT=3000
APP_URL="http://localhost:5173"
CLIENT_URL="http://localhost:5173"

# Auth
JWT_ACCESS_SECRET="replace-with-a-long-random-string"
JWT_REFRESH_SECRET="replace-with-a-different-long-random-string"
JWT_ACCESS_EXPIRES_IN="1d"
JWT_REFRESH_EXPIRES_IN="30d"
BCRYPT_SALT_ROUND=12

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

> ⚠️ **`JWT_ACCESS_SECRET` and `JWT_REFRESH_SECRET` are required.** Do not
> leave them unset — the app must not run with a default/fallback secret in
> any environment other than local scratch testing.

### 3. Set up the database
```bash
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed
```
The seed script creates an admin account (see [Admin Access](#admin-access)
below) and is safe to re-run — it skips creation if the admin already exists.

### 4. Run the server
```bash
pnpm dev
```
The API is available at `http://localhost:3000/api`.

### 5. Stripe webhooks (local development)
Forward Stripe events to your local server with the Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/payments/webhook
```
Use the `whsec_...` value it prints as your `STRIPE_WEBHOOK_SECRET`.

## Admin Access

| Field | Value |
|---|---|
| Email | `admin@example.com` |
| Password | `admin123` |

Created by `pnpm prisma:seed`. Change this password before any real deployment.

## API Documentation

Full OpenAPI 3 documentation is served at:
```
GET /api-docs
```
The raw spec lives in `gearup-openapi.yaml` at the project root.

## API Overview

| Group | Base Path | Description |
|---|---|---|
| Auth | `/api/auth` | Register, login, current user profile |
| Gear (public) | `/api/gear`, `/api/categories` | Browse/search/filter gear, categories |
| Rentals | `/api/rentals` | Create/list/view/cancel rental orders |
| Payments | `/api/payments` | Stripe Checkout session, webhook, payment history |
| Provider | `/api/provider` | Gear inventory CRUD, order management |
| Reviews | `/api/reviews` | Post-return gear reviews |
| Admin | `/api/admin` | User, gear, rental, and category oversight |

See `/api-docs` for full request/response schemas.

## Rental Order Status Flow

```
PLACED → CONFIRMED → PAID → PICKED_UP → RETURNED
   |
   └──→ CANCELLED (customer, while still PLACED)
```
- `PLACED → CONFIRMED`: provider confirms the order
- `CONFIRMED → PAID`: customer completes Stripe Checkout
- `PAID → PICKED_UP → RETURNED`: provider updates status as gear moves
- Reviews can only be left on a gear item once its order reaches `RETURNED`

## Payments

Payments are processed exclusively through **Stripe Checkout Sessions**:
1. `POST /api/payments/create` — creates a Checkout Session for a `CONFIRMED`
   order and returns a hosted `checkoutUrl`
2. Stripe redirects the customer through hosted checkout
3. `POST /api/payments/webhook` — Stripe notifies the server; the order is
   marked `PAID` once the signature-verified webhook confirms payment
4. `POST /api/payments/confirm` — fallback manual confirmation if the webhook
   hasn't landed yet

No cash-on-delivery or simulated payment path exists.

## Error Response Format

All error responses share a consistent shape:
```json
{
  "success": false,
  "message": "Human-readable error message",
  "errorDetails": null
}
```
For validation failures, `errorDetails` is an array of individual field
errors instead of `null`:
```json
{
  "success": false,
  "message": "Validation failed",
  "errorDetails": [
    "startDate is required",
    "quantity for item at index 0 must be a positive integer"
  ]
}
```

## Project Structure

```
src/
├── app.ts                  # Express app setup, middleware, route mounting
├── index.ts                 # Server entrypoint
├── config/                  # Environment variable loading
├── errors/                  # AppError and typed error subclasses
├── lib/                     # Prisma client, Stripe client
├── middlewares/             # Auth (JWT + RBAC), centralized error handler
├── modules/
│   ├── auth/                 # Register, login, profile
│   ├── gear/                 # Public gear browsing, categories
│   ├── provider/             # Provider gear + order management
│   ├── rental/                # Rental order lifecycle
│   ├── payments/              # Stripe checkout + webhook
│   ├── review/                # Post-rental reviews
│   ├── admin/                 # Platform administration
│   └── healths/                # Health check
├── routes/                  # Route aggregation
└── utils/                   # bcrypt, JWT, response helpers

prisma/
├── schema/                  # Modular Prisma schema (per-model files)
├── migrations/               # SQL migrations
└── seed.ts                   # Admin user seed script
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Run the API with hot reload |
| `pnpm build` | Compile TypeScript to `dist/` |
| `pnpm start` | Run the compiled build |
| `pnpm prisma:generate` | Generate the Prisma client |
| `pnpm prisma:migrate` | Run database migrations |
| `pnpm prisma:seed` | Seed the admin account |
| `pnpm prisma:studio` | Open Prisma Studio |
| `pnpm type:check` | Type-check without emitting |
| `pnpm biome:lint` | Lint the codebase |
