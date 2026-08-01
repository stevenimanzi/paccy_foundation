# Paccy Foundation

The Paccy Foundation website and administration system, built with Vinext,
Drizzle ORM and MySQL.

## Prerequisites

- Node.js `>=22.13.0`
- MySQL 8.0 or newer

## Quick Start

```powershell
npm install
Copy-Item .dev.vars.example .dev.vars
# Set DATABASE_URL in .dev.vars, then create the schema:
mysql -u root -p < database/mysql/001_initial_schema.sql
npm run dev
npm run build
```

`DATABASE_URL` uses this format:

```text
mysql://USER:PASSWORD@HOST:3306/paccy_foundation
```

Keep `.dev.vars` private. Production must provide `DATABASE_URL` as a protected
runtime secret. MySQL stores volunteer requests, donation requests, contact
messages, editable page content and admin activity.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle MySQL Guide](https://orm.drizzle.team/docs/get-started/mysql-new)
