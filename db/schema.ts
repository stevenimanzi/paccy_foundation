import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const volunteers = sqliteTable("volunteers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  district: text("district").notNull(),
  skills: text("skills").notNull(),
  availability: text("availability").notNull(),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull(),
});

export const donations = sqliteTable("donations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  amount: text("amount").notNull(),
  currency: text("currency").notNull(),
  method: text("method").notNull(),
  frequency: text("frequency").notNull().default("One-time"),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: text("created_at").notNull(),
});

export const messages = sqliteTable("messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("unread"),
  createdAt: text("created_at").notNull(),
});

export const content = sqliteTable("site_content", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  page: text("page").notNull(),
  field: text("field").notNull(),
  value: text("value").notNull(),
  updatedBy: text("updated_by").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const activity = sqliteTable("activity", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  actor: text("actor").notNull(),
  action: text("action").notNull(),
  entity: text("entity").notNull(),
  entityId: integer("entity_id"),
  createdAt: text("created_at").notNull(),
});
