const express = require("express");
const { PythonShell } = require('python-shell');
const connectDb = require("./db");
const jwt = require("jsonwebtoken");
const User = require("./model/user-model");
const cors = require("cors");
const mongoose = require("mongoose");
const Purchase = require("./model/purchase-model");
const Sales = require("./model/sale-model");
const app = express();
const PORT = 5000;
const Jwt_key = "your_secret_key";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pythonOptions = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: 'E:\\Projects\\hakathon\\server\\',
};

const Prediction = mongoose.model('Prediction', new mongoose.Schema({}, { strict: false }));

// Route to generate predictions by running the Python script
app.get("/generate-predictions", (req, res) => {
    PythonShell.run('predictions.py', pythonOptions, (err, results) => {
        if (err) {
            console.error("Error running Python script:", err);
            return res.status(500).json({ msg: "Error generating predictions" });
        }
        
        try {
            const predictions = JSON.parse(results[0]);
            res.status(200).json(predictions);
        } catch (parseError) {
            console.error("Error parsing JSON from Python script:", parseError);
            res.status(500).json({ msg: "Error processing predictions" });
        }
    });
});

// Route to fetch predictions from MongoDB
app.get("/predictions", async (req, res) => {
    try {
        const predictions = await Prediction.find().sort({ _id: -1 }).limit(1);
        if (predictions.length === 0) {
            return res.status(404).json({ msg: "No predictions found" });
        }
        res.status(200).json(predictions[0]);
    } catch (error) {
        console.error("Error fetching predictions:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
});





// Your existing routes
app.get("/purchase", (req, res) => {
    Purchase.find()
    .then(Purchase => {
        res.status(200).json(Purchase);
    })
    .catch(error => {
        console.error("Error fetching purchases:", error); 
        res.status(400).json({ msg: "ERROR" });
    });
});

app.get("/sales", (req, res) => {
    Sales.find()
    .then(Sales => {
        res.status(200).json(Sales);
    })
    .catch(error => {
        console.error("Error fetching sales:", error); 
        res.status(400).json({ msg: "ERROR" });
    });
});

app.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || password !== user.password) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        const token = generateToken(user);
        console.log(user._id);
        
        res.status(200).json({ userId: user._id, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, Jwt_key, { expiresIn: '1h' });
};

connectDb().then(() => {
    app.listen(PORT, () => console.log("Server running on port " + PORT));
});
