# e-commerce-store-api

API for e-commerce shop, built using typescript, express and postgres. It is integrated with client application - e-commerce-store-client.

- Register, login, and logout functionality using jwt with http-only cookies.
- Automatic session renewal on client app opening.
- Get products with search and filter capabilities.
- Node.js and Express for building the server.
- Knex.js as a query builder for PostgreSQL.
- JWT for user authentication.
- bcrypt for password hashing.
- docker containers for app and pg db.

**Other features are in progress.**

Demo is being currently hosted below:
https://e-commerce-store-api-7iow.onrender.com

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/skjyrte/e-commerce-store-api.git
   ```

2. Navigate into the project directory:

   ```bash
   cd e-commerce-store-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables (explained below).

5. Prepare husky

   ```bash
   npm run husky
   ```

6. Build postgres db:

   6.1) If you want to build docker container with dev settings:

   ```bash
   docker-compose -f compose.dev.yaml --env-file .env.dev up -d
   ```

   6.2) If you want to build docker container with prod settings:

   ```bash
   docker-compose -f compose.prod.yaml --env-file .env.prod up --build -d
   ```

7. Running the app:

   7.1) If you want to run dev server:

   ```bash
   npm run nodemondev
   ```

   7.2) If you want to run production server:

   ```bash
   npm run prod
   ```

## Environment Variables

The app requires some environment variables to function. You can define them in the root directory. A sample `.env.dev` file is provided inside repository. For production builds`.env.prod`shall be created.

```bash
NODE_ENV=development
PORT=4000
USER=your_username
HOST=localhost
DATABASE=your_database_name
PASSWORD=your_password
POSTGRES_PORT=5432
JWT_SECRET=your_jwt_secret_key
ORIGIN=http://localhost:8080
CONNECTION_SECURE=FALSE
```

## API ENDPOINTS

### Authentication

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Login user, set HttpOnly JWT cookie.
- `POST /auth/logout`: Logout user and clear JWT cookie.
- `GET /auth/check-session`: Check user session, renew JWT if valid.

### Products

- `GET /product`: Get list of all products.
- `GET /product/:id`: Get a single product by ID.

### Gender

- `GET /:gender?`: Get list of all products by gender.
- `GET /:gender?/category/:category`: Get list of all products by gender and category
- `GET /:gender?/category/:category/:variants`: Get list of all products by gender, category and specific variants.

Variants currently are: Brand, Color, Size, Material, Season with syntax as below:

```bash
http://localhost:4000/gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-40.41.46.48?material=mesh&season=winter
```

Brand, color and size are handled like below:

```bash
Brand1.Brand2.Brand3_color1.color2.color3__size-size1.size2.size3
```

While material, season are being sent by query params.
