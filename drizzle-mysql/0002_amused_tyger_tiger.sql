CREATE TABLE `page_views` (
	`id` int AUTO_INCREMENT NOT NULL,
	`visitor_id` varchar(64) NOT NULL,
	`path` varchar(255) NOT NULL,
	`referrer` varchar(500),
	`user_agent` varchar(500),
	`created_at` varchar(40) NOT NULL,
	CONSTRAINT `page_views_id` PRIMARY KEY(`id`)
);
