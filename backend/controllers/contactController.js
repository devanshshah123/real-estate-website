const Contact = require("../models/Contact");

// Function to create a new contact
const createContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Create and save the contact
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();

        res.status(201).json({ message: "Contact saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error saving contact", details: error.message });
    }
};

module.exports = { createContact };
