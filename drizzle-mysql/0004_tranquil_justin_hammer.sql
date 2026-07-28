CREATE TABLE `message_replies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`message_id` int NOT NULL,
	`recipient_email` varchar(190) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`body` text NOT NULL,
	`status` varchar(30) NOT NULL DEFAULT 'sent',
	`provider_message_id` varchar(255),
	`error_message` text,
	`sent_by` varchar(190) NOT NULL,
	`sent_at` varchar(40) NOT NULL,
	CONSTRAINT `message_replies_id` PRIMARY KEY(`id`)
);
