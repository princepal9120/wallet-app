# **Full-Stack Wallet App**

Welcome to the **Full-Stack Wallet App**! This project includes a **React Native mobile app**, an **Express API backend**, and a **Next.js admin panel**. It uses **Prisma ORM**, **tRPC** for type-safe APIs, and modern development tools for seamless functionality.

---

## **Table of Contents**

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup Guide](#setup-guide)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend Setup (Express API)](#2-backend-setup-express-api)
  - [3. Database Setup](#3-database-setup)
  - [4. Mobile App Setup (React Native)](#4-mobile-app-setup-react-native)
  - [5. Web Admin Panel Setup (Next.js)](#5-web-admin-panel-setup-nextjs)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## **Project Structure**

```plaintext
wallet-app/
|
├── apps/
│   ├── mobile/         # React Native Mobile App
│   ├── server/         # Express Backend (API with Prisma)
│   └── web/            # Next.js Web Admin Panel
|
├── packages/
│   ├── types/          # Shared TypeScript Types
│   └── config/         # Shared ESLint & tsconfig
|
├── prisma/             # Prisma Configuration
│   ├── schema.prisma   # Prisma Models
│   └── seed.ts         # Initial Database Seed
|
├── docs/               # Documentation
└── ...                 # Configuration Files
```

---

## **Prerequisites**

Ensure the following tools are installed on your system:

- **Node.js** (v16+)
- **npm** or **Yarn**
- **PostgreSQL** (or your preferred database)
- **React Native CLI** (for mobile development)
- **Expo CLI** (optional, if using Expo)
- **Prisma CLI**

---

## **Setup Guide**

### **1. Clone the Repository**

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/wallet-app.git
cd wallet-app
```

Install dependencies for all workspaces:

```bash
npm install
```

---

### **2. Backend Setup (Express API)**

1. Navigate to the server directory:

   ```bash
   cd apps/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an `.env` file in `apps/server`:

   ```plaintext
   DATABASE_URL="postgresql://username:password@localhost:5432/wallet_db"
   PORT=5000
   ```

4. Apply the Prisma schema and seed data:

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   npx ts-node prisma/seed.ts
   ```

5. Run the server:

   ```bash
   npm run dev
   ```

Your server will start on `http://localhost:5000`.

---

### **3. Database Setup**

Ensure PostgreSQL (or your chosen database) is running. Update the `DATABASE_URL` in the `.env` file with your credentials.

Example for PostgreSQL:
```plaintext
DATABASE_URL="postgresql://user:password@localhost:5432/db_name"
```

---

### **4. Mobile App Setup (React Native)**

1. Navigate to the mobile app directory:

   ```bash
   cd apps/mobile
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React Native app:

   - For Android:
     ```bash
     npx react-native run-android
     ```

   - For iOS:
     ```bash
     npx react-native run-ios
     ```

4. Ensure the API URL in `src/utils/trpc.ts` points to your local backend:

   ```ts
   export const trpc = createTRPCProxyClient<AppRouter>({
     links: [
       httpBatchLink({
         url: 'http://localhost:5000/trpc',
       }),
     ],
   });
   ```

---

### **5. Web Admin Panel Setup (Next.js)**

1. Navigate to the web directory:

   ```bash
   cd apps/web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in `apps/web` (if needed).

4. Run the Next.js app:

   ```bash
   npm run dev
   ```

The web app will be available at `http://localhost:3000`.

---

## **Running the Application**

To run the entire application:

1. **Start the Backend Server:**

   ```bash
   cd apps/server
   npm run dev
   ```

2. **Start the Mobile App:**

   ```bash
   cd apps/mobile
   npx react-native start
   ```

   Use `run-android` or `run-ios` depending on your environment.

3. **Start the Web Admin Panel:**

   ```bash
   cd apps/web
   npm run dev
   ```

---

## **Environment Variables**

Ensure the following environment variables are configured:

### **Backend (.env in `apps/server`)**

```plaintext
DATABASE_URL="postgresql://username:password@localhost:5432/wallet_db"
PORT=5000
```

### **Web Admin Panel**

Add any required variables such as API URLs.

### **Mobile App**

Verify the tRPC API endpoint in `src/utils/trpc.ts`:

```ts
url: 'http://localhost:5000/trpc'
```

---

## **Troubleshooting**

1. **Database Connection Issues:**
   - Verify the `DATABASE_URL` in the `.env` file.
   - Ensure PostgreSQL is running.

2. **React Native Setup:**
   - Ensure `react-native` CLI is installed.
   - Check Android/iOS simulators are running.

3. **API Not Connecting:**
   - Confirm the backend server is running on `localhost:5000`.
   - Update the API URL in mobile/web configurations.

4. **Missing Dependencies:**
   - Run `npm install` in each project directory.

---

## **Contributing**

Contributions are welcome! Please create a pull request and adhere to the existing project structure.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

**Happy Coding! 🚀**

