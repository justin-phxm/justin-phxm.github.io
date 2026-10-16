# justin-phxm.github.io

<p align="center">
	<a href="https://justin-phxm-github-io.vercel.app/">
		<img src="https://github.com/justin-phxm/justin-phxm.github.io/assets/113923596/150994bc-1553-4722-8822-781dac13d00f" alt="Visit the live portfolio" />
	</a>
</p>

<p align="center">Justin Pham's portfolio website, built to showcase projects, skills, and contact links in one place.</p>

<p align="center">
	<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
	<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
	<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
	<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

## Hi, I’m Justin 👋

<img src="https://user-images.githubusercontent.com/113923596/202375268-e6499fbd-1221-4926-9d7b-ea586e2da08c.png" alt="Justin Pham" width="500" />

I’m a full-stack web developer focused on building clean, practical interfaces with modern tooling. I enjoy working across front-end experiences, developer tooling, and product-focused web apps.

## Tech Stack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Contact form database

Contact submissions are validated by a Next.js server action and stored in Neon Postgres using
Drizzle's [Neon HTTP driver](https://orm.drizzle.team/docs/get-started/neon-new).
The `contact_submissions` table stores a UUID, name, email, message, and creation time.

1. Install dependencies with `pnpm install` (Node.js 20.19+).
2. Copy `.env.example` to `.env.local` and supply the Neon connection strings.
3. Run `pnpm db:migrate` to apply the committed migrations.
4. Run `pnpm dev` and submit the contact form.

After changing `src/db/schema.ts`, run `pnpm db:generate`, review the SQL in
`drizzle/`, and run `pnpm db:migrate`. `pnpm db:studio` opens the database browser.
For Vercel, set `DATABASE_URL` and `DATABASE_URL_UNPOOLED` in the project's server
environment and apply migrations before deploying. Never prefix these variables
with `NEXT_PUBLIC_` or commit `.env.local`.

## Around the Web

- University of Calgary, Class of 2027
- [LinkedIn](https://www.linkedin.com/in/justin-pham-32a309153/) for professional updates
- [Website](https://justin-phxm-github-io.vercel.app/) for projects and portfolio content
- [Calgary Solar Car](https://calgarysolarcar.ca/) for the team I’m currently working with

## What I’m Working On

I’m currently helping build [Calgary Solar Car](https://calgarysolarcar.ca/) and continuing to grow this portfolio with new projects and updates.
