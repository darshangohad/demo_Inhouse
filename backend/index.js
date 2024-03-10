const express = require('express');
const cors = require("cors");

const Studentrouter = require('./routes/StudentRoutes');
const Adminrouter = require('./routes/AdminRoutes');

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth/student', Studentrouter);
app.use('/auth/admin', Adminrouter);

app.get("/", (req, res) => {
    res.send("Chal raha hu bhai...");
})

app.listen(port, () => {
    console.log("Helloooowww... 8000");
})

