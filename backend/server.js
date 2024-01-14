import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
dotenv.config();    //configure env to use in this file


//database connection using mongoose
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());


//rest API
app.get('/', (req, res) => {
    res.send({
        message: "Shimmmmmmmerrsssssss",
    });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan.white);
});
