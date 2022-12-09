const Order = require("../models/order.js");


const OrderService = async(req, res)=> {
    try{
        const order = await Order.findOne({codigo: req.body.codigo});
        if (order){
            return res.status(401).json({message: "Ese Número de orden ya esta registrado"});
        }
        if(req.body.nomDest){
            
            const newOrder = new Order({
                
                fecha: req.body.fecha,
                dirRem: req.body.dirRem,
                ciuRem: req.body.ciuRem,
                telRem: req.body.telRem,
                nomRem: req.body.nomRem,
                docRem: req.body.docRem,
                dirDest: req.body.dirDest,
                ciuDest: req.body.ciuDest,
                telDest: req.body.telDest,
                nomDest: req.body.nomDest,
                ancho: req.body.ancho,
                largo: req.body.largo,
                alto: req.body.alto,
                peso: req.body.peso,
                estadoOrden: req.body.estadoOrden,
                delicado: req.body.delicado,
                codigo: req.body.codigo,
            });
            await newOrder.save();
            return res.status(200).json({message: "Orden registrada"});
        }else{
            return res.status(403).json({message: "Ingrese nombre del estinatario"});
        }
    }catch(e){
        return res.status(500).json({message: e.message});
    }
};

//Select todos
const Mostrar = async (req, res) => {
    try{
        const order = await Order.find();
       

        return res.status(200).json(order);

    }catch(e){
        return res.status(500).json({message: e.message});                    
    }
};

module.exports = {Mostrar, OrderService};