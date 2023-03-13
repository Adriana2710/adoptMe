import express from "express";
import pets from "../routes/petsRoutes.js";

const routes = (app) =>{{
    app.use(
        express.json(),
        pets
    )
}}

export default routes