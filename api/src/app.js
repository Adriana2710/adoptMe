import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";
import cors from "cors";


db.on("error", console.log.bind(console, 'Failed to connect to the database'))
db.once("open", () => {
    console.log('successful connection to the database')
})

const app = express();
app.use(express.static('./public'));
app.use(cors());
routes(app);



export default app