const env = require("dotenv");
const express = require("express");
const user_routes = require('./routes/userRoutes');
const ride_routes = require('./routes/rideRoutes');

env.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => 
	console.log('Servidor iniciado na porta 3000')
);

app.get('/', (req, res) => 
res.json({ info: "Express app with Supabase" })
);

app.use("/api/user", user_routes);
app.use("/api/ride", ride_routes);