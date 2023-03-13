import mongoose from "mongoose";

mongoose.connect("mongodb+srv://petadmin:daB37Pb436GbXNab@adoptme.cddj5by.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;