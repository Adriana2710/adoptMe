import pets from "../models/Pets.js"

class PetsController {

    //GET Method
    static listPets = async (req, res) => {
        const allPets = await pets.find({});
        res.status(200).json(allPets)
    }

    //GET Method (By Id)
    static listPetsById = async (req, res) => {
        const id = req.params.id;

        const petById = await pets.findById(id);
        res.status(200).json(petById)
    }

    //POST Method
    static addPet = async (req, res) => {
        const newPet = new pets({...req.body, image: req.file.filename});
        await newPet.save();
        res.status(201).send({message: 'Pet Added'})
    }

    //PUT Method
    static updatePet = async (req, res) => {
        const id = req.params.id;

        await pets.findByIdAndUpdate(id, {$set: {...req.body, image: req.body.image ? req.body.image : req.file.filename}})
        res.status(200).send({message: 'Pet updated'})
    }

    //DELETE Method
    static deletePet = async (req, res) => {
        const id = req.params.id;

        await pets.findByIdAndDelete(id)
        res.status(200).send({message: 'Pet deleted'})
    }

}

export default PetsController