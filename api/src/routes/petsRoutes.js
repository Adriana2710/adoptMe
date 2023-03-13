import express from "express";
import PetsController from "../controllers/petsController.js";
import multer from 'multer'

// Set up multer storage and file filter options
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const fileFilter = function(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload = multer({ storage: storage, fileFilter })

const router = express.Router();

router
    .get("/pets", PetsController.listPets)
    .get("/pets/:id", PetsController.listPetsById)
    .post("/pets", upload.single('image'), PetsController.addPet)
    .put("/pets/:id", upload.single('image'), PetsController.updatePet)
    .delete("/pets/:id", PetsController.deletePet)


export default router