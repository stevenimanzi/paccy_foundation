import { int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const volunteers = mysqlTable("volunteers", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  email: varchar("email", { length: 190 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  district: varchar("district", { length: 100 }).notNull(),
  skills: text("skills").notNull(),
  availability: varchar("availability", { length: 100 }).notNull(),
  status: varchar("status", { length: 30 }).notNull().default("new"),
  createdAt: varchar("created_at", { length: 40 }).notNull(),
});

export const donations = mysqlTable("donations", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  email: varchar("email", { length: 190 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  amount: varchar("amount", { length: 40 }).notNull(),
  currency: varchar("currency", { length: 10 }).notNull(),
  method: varchar("method", { length: 80 }).notNull(),
  frequency: varchar("frequency", { length: 40 }).notNull().default("One-time"),
  message: text("message"),
  status: varchar("status", { length: 30 }).notNull().default("pending"),
  createdAt: varchar("created_at", { length: 40 }).notNull(),
});

export const messages = mysqlTable("messages", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  email: varchar("email", { length: 190 }).notNull(),
  message: text("message").notNull(),
  status: varchar("status", { length: 30 }).notNull().default("unread"),
  createdAt: varchar("created_at", { length: 40 }).notNull(),
});

export const content = mysqlTable("site_content", {
  id: int("id").autoincrement().primaryKey(),
  page: varchar("page", { length: 100 }).notNull(),
  field: varchar("field", { length: 100 }).notNull(),
  value: text("value").notNull(),
  updatedBy: varchar("updated_by", { length: 190 }).notNull(),
  updatedAt: varchar("updated_at", { length: 40 }).notNull(),
});

export const activity = mysqlTable("activity", {
  id: int("id").autoincrement().primaryKey(),
  actor: varchar("actor", { length: 190 }).notNull(),
  action: varchar("action", { length: 190 }).notNull(),
  entity: varchar("entity", { length: 190 }).notNull(),
  entityId: int("entity_id"),
  createdAt: varchar("created_at", { length: 40 }).notNull(),
});

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  email: varchar("email", { length: 190 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  role: varchar("role", { length: 40 }).notNull().default("admin"),
  status: varchar("status", { length: 30 }).notNull().default("active"),
  lastLoginAt: varchar("last_login_at", { length: 40 }),
  createdAt: varchar("created_at", { length: 40 }).notNull(),
});

export const userSessions = mysqlTable("user_sessions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  tokenHash: varchar("token_hash", { length: 64 }).notNull().unique(),
  expiresAt: varchar("expires_at", { length: 40 }).notNull(),
  createdAt: varchar("created_at", { length: 40 }).notNull(),
});

export const pageViews = mysqlTable("page_views", {
  id: int("id").autoincrement().primaryKey(),
  visitorId: varchar("visitor_id", { length: 64 }).notNull(),
  path: varchar("path", { length: 255 }).notNull(),
  referrer: varchar("referrer", { length: 500 }),
  userAgent: varchar("user_agent", { length: 500 }),
  createdAt: varchar("created_at", { length: 40 }).notNull(),
});

export const galleryItems = mysqlTable("gallery_items", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 190 }).notNull(),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  caption: text("caption"),
  status: varchar("status", { length: 30 }).notNull().default("published"),
  createdBy: varchar("created_by", { length: 190 }).notNull(),
  createdAt: varchar("created_at", { length: 40 }).notNull(),
});
