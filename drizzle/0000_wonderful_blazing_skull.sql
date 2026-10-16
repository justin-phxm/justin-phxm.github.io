CREATE TABLE "contact_submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(254) NOT NULL,
	"message" varchar(5000) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
