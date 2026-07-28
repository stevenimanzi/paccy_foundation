CREATE DATABASE IF NOT EXISTS `paccy_foundation`
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `paccy_foundation`;

CREATE TABLE IF NOT EXISTS `volunteers` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `phone` VARCHAR(40) NOT NULL,
  `district` VARCHAR(100) NOT NULL,
  `skills` TEXT NOT NULL,
  `availability` VARCHAR(100) NOT NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'new',
  `created_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `volunteers_email_idx` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `donations` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `phone` VARCHAR(40) NULL,
  `amount` VARCHAR(40) NOT NULL,
  `currency` VARCHAR(10) NOT NULL,
  `method` VARCHAR(80) NOT NULL,
  `frequency` VARCHAR(40) NOT NULL DEFAULT 'One-time',
  `message` TEXT NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'pending',
  `created_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `donations_status_idx` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `messages` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `message` TEXT NOT NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'unread',
  `created_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `messages_status_idx` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `message_replies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message_id` INT NOT NULL,
  `recipient_email` VARCHAR(190) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `body` TEXT NOT NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'sent',
  `provider_message_id` VARCHAR(255) NULL,
  `error_message` TEXT NULL,
  `sent_by` VARCHAR(190) NOT NULL,
  `sent_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `message_replies_message_id_idx` (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `site_content` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `page` VARCHAR(100) NOT NULL,
  `field` VARCHAR(100) NOT NULL,
  `value` TEXT NOT NULL,
  `updated_by` VARCHAR(190) NOT NULL,
  `updated_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `site_content_page_idx` (`page`),
  INDEX `site_content_page_field_idx` (`page`, `field`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `activity` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `actor` VARCHAR(190) NOT NULL,
  `action` VARCHAR(190) NOT NULL,
  `entity` VARCHAR(190) NOT NULL,
  `entity_id` INT NULL,
  `created_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `activity_created_idx` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` VARCHAR(40) NOT NULL DEFAULT 'admin',
  `status` VARCHAR(30) NOT NULL DEFAULT 'active',
  `last_login_at` VARCHAR(40) NULL,
  `created_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `user_sessions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `token_hash` VARCHAR(64) NOT NULL,
  `expires_at` VARCHAR(40) NOT NULL,
  `created_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_sessions_token_unique` (`token_hash`),
  KEY `user_sessions_user_idx` (`user_id`),
  CONSTRAINT `user_sessions_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `page_views` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `visitor_id` VARCHAR(64) NOT NULL,
  `path` VARCHAR(255) NOT NULL,
  `referrer` VARCHAR(500) NULL,
  `user_agent` VARCHAR(500) NULL,
  `created_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `page_views_visitor_idx` (`visitor_id`),
  KEY `page_views_created_idx` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `gallery_items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(190) NOT NULL,
  `image_url` VARCHAR(500) NOT NULL,
  `caption` TEXT NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'published',
  `created_by` VARCHAR(190) NOT NULL,
  `created_at` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gallery_status_idx` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
