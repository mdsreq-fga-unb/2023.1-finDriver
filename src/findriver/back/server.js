const env = require("dotenv");
const express = require("express");
const cors = require('cors');

const user_routes = require('./routes/userRoutes');
const ride_routes = require('./routes/rideRoutes');
const expense_routes = require('./routes/expenseRoutes');
const goal_routes = require('./routes/goalRoutes');
const car_routes = require('./routes/carRoutes');

env.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => 
    res.json({ info: "Express app with Supabase" })
);

const corsOptions = {
    methods: ["GET", "POST", "PUT", "DELETE"],
};
  
app.use(cors(corsOptions));

app.use("/api/user", user_routes);
app.use("/api/ride", ride_routes);
app.use("/api/expense", expense_routes);
app.use("/api/goal", goal_routes);
app.use("/api/car", car_routes);


module.exports = app