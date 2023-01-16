import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";

var cors = require('cors')

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");

    const app = express();
    app.use(cors())
    app.use(express.json());

    app.use(routes);

    return app.listen(process.env.PORT, () => {
        console.log("Application running on port " + process.env.PORT);
    });
})
