# Link Resolver

Link Resolver is an open-source implementation of a link resolver based on the ISO-18975 standard. It allows the resolution of identifiers to their associated links, supporting various link types and structured URI approaches.

## Features

- Resolve identifiers to associated links
- Support for structured path and query string approaches
- Easy to set up and extend
- Built with NestJS, Prisma, and PostgreSQL

## Development

### Getting Started

Follow these steps to set up the development environment.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 20 or later)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [pnpm](https://pnpm.io/)

### Setup Instructions

1. **Clone the repository:**

```bash
$ git clone https://github.com/trust-stack/link-resolver.git
$ cd link-resolver
```

2. **Copy the example environment file**

```bash
$ cp .env.sample .env
```

3. **(Optional) Update the `.env` file**
   If you are going to use a database outside of the one provided in `docker-compose.yaml`, update `.env` to include the necessary connection string.

```
DATABASE_URL="postgresql://youruser:yourpassword@localhost:5432/yourdatabase?schema=public"
```

4. **(Optional) Deploy the postgres database**

Make sure you have Docker installed and running. Then, start the database container:

```bash
$ docker-compose up -d
```

5. **Install dependencies**

```bash
$ pnpm install
```

6. **Generate the prisma client**

```bash
$ pnpm prisma generate
```

7. **Run database migrations**

```bash
$ pnpm prisma migrate dev
```

8. **Start the development server**

```bash
$ pnpm run start
```

## Configuration

| Key          | Description                                         |
| ------------ | --------------------------------------------------- |
| DATABASE_URL | Postgres connection string for database connection. |
