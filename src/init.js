import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Series";
import "./models/Post";

const PORT = process.env.PORT;

const handleListening = () => {
  console.log(`👍 Listening to http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
