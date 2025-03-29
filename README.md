Real Estate Website 🏡
This is a full-stack real estate website built with React.js (Frontend) and Node.js with Express (Backend), using MongoDB as the database.

📂 Project Structure

real-estate-website/
│── frontend/       # React frontend (UI components)
│── backend/        # Node.js backend (API and database interactions)
│── README.md       # Project documentation
│── .gitignore      # Ignore unnecessary files in Git

🛠 Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/devanshshah123/real-estate-website.git
cd real-estate-website

🖥️ Frontend Setup (React)
Navigate to the frontend folder:
cd frontend

Install dependencies:
npm install

Start the frontend:
npm start
The frontend will run at:
👉 http://localhost:3000


⚙️ Backend Setup (Node.js + Express + MongoDB)

Navigate to the backend folder:
cd ../backend

Install dependencies:
npm install

Start the backend server:
npx nodemon server.js
The backend will run at:
👉 http://localhost:5000 (or the port you configured in server.js)

🗄️ MongoDB Setup
MongoDB is used to store project data and user-submitted contact form details.

1️⃣ Install MongoDB
Windows: Download MongoDB

2️⃣ Start MongoDB Service
Windows:
net start MongoDB

Linux/macOS:
sudo systemctl start mongod

3️⃣ Verify MongoDB Is Running
Check MongoDB status with:
mongo
mongosh


📂 Database Setup via MongoDB Compass (GUI)

Open MongoDB Compass and click "New Connection".
Use the default connection string:
mongodb://localhost:27017

Create a new database named real_estate_db.
Inside the database, create two collections:
projects (for storing real estate projects)
contacts (for storing user inquiries)

Insert sample data into collections using the UI.