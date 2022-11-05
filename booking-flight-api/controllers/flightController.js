const { flight } = require('../models/Flight.js')
const {v4: uuidv4} = require('uuid');

// Create New Flight

exports.createFlight = async (req, res) => {
    try {
            const newFlight = await req.body;
            newFlight.id = uuidv4();
            flight.push(newFlight);

            res.status(200).json({
                message: "flight booked",
                flightID: newFlight.id
            });

        } catch (err) {

            res.status(404).json({ message: err.message });
        }
    }

// Get All Flight

exports.GetFlight = async (req, res) => {
    try {
            res.status(200).json(flight)

        } catch (err) {

            res.status(404).json({ message: err.message});
        }
}

// Get Single Flight

exports.singleFlight = async (req, res) => {
    try {
            const id = req.params.id;
            const singleFlight = flight.find((singleFlight) => singleFlight.id === id)

            res.status(200).json(singleFlight);

    } catch (err) {

        res.status(404).json({ message: err.message });
    }
}

// Update Flight
exports.updateFlight = async (req, res) => {
    try { 
            const id = req.params.id;
            const flightUpdate = flight.find((flightUpdate) => flightUpdate.id === id);
            const bodyUpdate = await req.body;
            bodyUpdate.id = uuidv4();
            flight.splice(flight.indexOf(flightUpdate), 1, bodyUpdate);


            res.status(200).json(
                { message: "Flight data updated", newID: bodyUpdate.id});

    } catch (err) {

    res.status(404).json({ message: err.message });
    }
} 

// Delete Flight
exports.deleteFlight = async (req, res) => {
    try { 
            let id = req.params.id;
            const flightDelete = flight.find((flightDelete) => flightDelete.id === id);
            flight.splice(flight.indexOf(flightDelete), 1);

            res.status(200).json({message: "flight cancelled"});

    } catch (err) {

    res.status(404).json({ message: err.message });
    }
} 