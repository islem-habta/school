School Dashboard (Next.js Project)
This is a Next.js project bootstrapped with create-next-app.

🚀 Features
✅ Authentication with Google OAuth
✅ Admin Dashboard
✅ Secure API Routes
✅ MongoDB Database (Prisma ORM)
✅ Stripe Payments

📥 Installation
Clone the repository:

bash
Copier
Modifier
git clone https://github.com/islem-habta/school.git
cd school
Install dependencies:

bash
Copier
Modifier
npm install
# or
yarn install
# or
pnpm install
🛠️ Configuration
Create a .env.local file in the root directory and add:

env
Copier
Modifier
NODE_ENV=development
PORT=3000
DATABASE_URL=your_database_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
Note: Replace values with your actual credentials.

🚀 Running the Project
Start the development server:

bash
Copier
Modifier
npm run dev
Visit http://localhost:3000 in your browser.

🚀 Deployment on Vercel
1️⃣ Push your code to GitHub:

bash
Copier
Modifier
git add .
git commit -m "Updated project"
git push origin main
2️⃣ Go to Vercel Dashboard
3️⃣ Select your project and redeploy