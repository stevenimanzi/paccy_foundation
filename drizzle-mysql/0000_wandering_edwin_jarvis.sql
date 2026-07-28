CREATE TABLE `activity` (
	`id` int AUTO_INCREMENT NOT NULL,
	`actor` varchar(190) NOT NULL,
	`action` varchar(190) NOT NULL,
	`entity` varchar(190) NOT NULL,
	`entity_id` int,
	`created_at` varchar(40) NOT NULL,
	CONSTRAINT `activity_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `site_content` (
	`id` int AUTO_INCREMENT NOT NULL,
	`page` varchar(100) NOT NULL,
	`field` varchar(100) NOT NULL,
	`value` text NOT NULL,
	`updated_by` varchar(190) NOT NULL,
	`updated_at` varchar(40) NOT NULL,
	CONSTRAINT `site_content_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `donations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(150) NOT NULL,
	`email` varchar(190) NOT NULL,
	`phone` varchar(40),
	`amount` varchar(40) NOT NULL,
	`currency` varchar(10) NOT NULL,
	`method` varchar(80) NOT NULL,
	`frequency` varchar(40) NOT NULL DEFAULT 'One-time',
	`message` text,
	`status` varchar(30) NOT NULL DEFAULT 'pending',
	`created_at` varchar(40) NOT NULL,
	CONSTRAINT `donations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(150) NOT NULL,
	`email` varchar(190) NOT NULL,
	`message` text NOT NULL,
	`status` varchar(30) NOT NULL DEFAULT 'unread',
	`created_at` varchar(40) NOT NULL,
	CONSTRAINT `messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `volunteers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(150) NOT NULL,
	`email` varchar(190) NOT NULL,
	`phone` varchar(40) NOT NULL,
	`district` varchar(100) NOT NULL,
	`skills` text NOT NULL,
	`availability` varchar(100) NOT NULL,
	`status` varchar(30) NOT NULL DEFAULT 'new',
	`created_at` varchar(40) NOT NULL,
	CONSTRAINT `volunteers_id` PRIMARY KEY(`id`)
);
