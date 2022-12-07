const mongoose = require ("mongoose");
//const joi = require("joi");

const schemaOrder = new mongoose.Schema({
    fecha:{ type: String, required: true,},
    dirRem:{type: String, required: true,},
    ciuRem:{type: String, required: true,},
    telRem:{ type: Number, required: true,},
    nomRem:{type: String, required: true,},
    docRem:{type: String, required: true,},
    dirDest:{type: String, required: true,},
    ciuDest:{type: String, required: true,},
    telDest:{ type: Number, required: true,},
    nomDest:{type: String, required: true,},
    ancho:{type: Number, required: true,},
    largo:{type: Number, required: true,},
    peso:{type: Number, required: true,},
    estadoOrden:{type: String, required: true,},
    delicado:{type: Boolean, required: true,},
    codigo:{type: Number, required: true,},
});

const Order = mongoose.model("Order", schemaOrder);


module.exports = Order;