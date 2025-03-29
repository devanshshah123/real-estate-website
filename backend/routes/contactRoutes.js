const express = require("express");
const { createContact } = require("../controllers/contactController"); // Import the function

const router = express.Router();

router.post("/contacts", createContact); // Just call the function

module.exports = router;
