const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bookRoute = require("./routes/bookRoutes");
const authRoute = require("./routes/authRoutes");
const bodyParser = require("body-parser"); //to identify json data

require('./db');
const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());


// Configure CORS
const corsOptions = {
  origin: '*', // Allow all origins (for development). For production will have to specify domains
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use("/api/books", bookRoute);
app.use("/api/auth", authRoute);

app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
