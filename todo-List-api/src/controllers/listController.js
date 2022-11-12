// Import Mongoose model from models folder

const listItems = require('../models/ToDoList.js');

// Add item to To-Do list

exports.addItem = async(req, res) => {
    try {
            const getBody = await new listItems (req.body); // defines request body object with the listItems Model

            getBody.save(); // saves the request body to database

            res.status(200).json(
                { 
                        message: "Your Item has been added!",
                        id: getBody._id,
                        newItem: getBody
                }
        );
    } catch (err) {
            res.status(404).send(err.message);
        }
}

// Retreive all items in the list

exports.getAllItems = async(req, res) => {
        try {
                let getList = await listItems.find({}); // find() takes object as filter parameter

                res.status(200).json(
                        {
                                message: "List of items found!",
                                listItems: getList
                        }
                );
        } catch (err) {
                res.status(404).send(err.message);
        }
}

// Get single item from list 

exports.getSingleItem = async(req, res) => {
    try {
            const id = { _id: req.params.id };
            const singleItem = await listItems.findOne(id); // findOne() takes the "id" object as filter parameter

            res.status(200).json(
                {
                        message: "Your Item has been found!",
                        listItem: singleItem
                }
        );
    } catch (err) {
        res.status(404).send(err.message);
        }
}

// Update Item in list

exports.updateList = async(req, res) => {
        try {
                const id = { _id: req.params.id };

                const bodyUpdate = req.body;

                await listItems.findOneAndUpdate(id, bodyUpdate, {new: true});

                res.status(200).json(
                        {
                                message: "Your to-do list has been updated!",
                                id: bodyUpdate._id,
                                newItem: bodyUpdate
                        }
                );
        } catch (err) {
                res.status(404).send(err.message);
        }
}

// Remove Item from list

exports.removeItem = async(req, res) => {
        try {
                const id = { _id: req.params.id };

                listItems.findByIdAndDelete(id);

                res.status(200).json(
                        {
                                message: "Your item has been removed!"
                        }
                );
        } catch (err) {
                res.status(404).send(err.message);
        }
}
