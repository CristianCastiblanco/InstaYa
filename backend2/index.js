require("dotenv").config();
const express = require ("express");
//const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
//const asyncHandler = require("express-async-handler");
const conn = require("./db");
const privateRoutes = require("./routes/privateRoutes.js");
const authRoutes = require("./routes/authRoutes.js")

// Se llaman middleware
app.use(express.json());
app.use(cookieParser());


// Rutas de autenticaciòn
app.use("/auth", authRoutes);
app.use("/private", privateRoutes);

// Puerto y Conexion BD
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado sobre el puerto ${process.env.PORT}`);
    conn();
});

