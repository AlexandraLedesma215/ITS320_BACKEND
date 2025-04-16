// todolist/db.js
import { connect } from 'mongoose';

async function connectDB() {
  try {
    const conn = await connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected to ${conn.connection.host}`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

export default connectDB;
