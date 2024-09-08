Welcome to Quiz Application
By executing this step one can run frontend and backend
 
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
  
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following content:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=4001
   TOKEN_SECRET_KEY=your_secret_key
   ```
   - `MONGO_URI`: your mongo db connection string
   - `PORT`: The port on which the backend server will run. Default is `4001`.
   - `TOKEN_SECRET_KEY`: Secret key for JWT authentication..

4. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend server will run on port `4001` by default.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   cd vite-project
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend development server will run on port `5173` by default.

