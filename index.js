const express = require("express");
const app = express();

app.use(express.json());

// Fake database
let users = [];

// SIGN UP
app.post("/signup", (req, res) => {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: "All fields required" });
    }

    users.push({ name, email, password, phone });

    return res.status(200).json({
        message: "Signup successful",
        user: { name, email, phone }
    });
});

// SIGN IN
app.post("/signin", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({
        success: true,
        name: user.name
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
