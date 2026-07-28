CREATE TABLE `gallery_items` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(190) NOT NULL,
	`image_url` varchar(500) NOT NULL,
	`caption` text,
	`status` varchar(30) NOT NULL DEFAULT 'published',
	`created_by` varchar(190) NOT NULL,
	`created_at` varchar(40) NOT NULL,
	CONSTRAINT `gallery_items_id` PRIMARY KEY(`id`)
);
