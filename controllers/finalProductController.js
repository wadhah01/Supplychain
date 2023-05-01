const FinalProduct = require('../models/finalProduct');

const createFP = async (req,res)=>{

    try{

        const FPData = req.body;
        const newFP = new FinalProduct({...FPData,FPImage:req.file.path});
        const savedFP = await newFP.save();
        res.status(200).send(savedFP);
        console.log(savedFP);

    }catch(err){
        res.status(400).send(err);
    }

}

const deleteFPrById = async(req,res)=>{

    try{    
        const FPId = req.params.id;
        const FP = await FinalProduct.findById(FPId);
        const FPName = FP.name;
        const FPDeleted = await FinalProduct.findByIdAndDelete(FPId);
        console.log(`${FPName} deleted succefuly`);
        res.status(201).send(FPDeleted);
    }catch(err){
        res.status(400).json(err);
    }

}

const findFPAll = async(req,res)=>{
    
    try{
        const FP = await FinalProduct.find();
        res.status(201).send(FP);
        console.log(FP);
    }catch(err){
        res.send(err);
        res.status(400).json(err);
    }
}


const findFPrById = async(req,res)=>{
    
    try{
        const FPId = req.params.id;
        const FP = await FinalProduct.findById(FPId);
        res.status(201).send(FP);
        console.log(FP);
    }catch(err){
        res.send(err);
        res.status(400).json(err);
    }
}

const findFPByType = async(req,res)=>{
    try{
        const type = req.params.type;
        const FP = await FinalProduct.find({type : type});
        console.log(FP);
        res.status(201).send(FP);
    }catch(err){
        res.status(400).json(err);
    }
}


const updateFPById = async (req,res) => {
    try{
        const FPId = req.params.id;
        const newData = req.body;
        const updated = await  FinalProduct.findByIdAndUpdate({_id: FPId},newData);
        console.log(updated);
        res.status(201).send(updated);
    }catch(err){
        res.status(400).json(err);
    }
}


module.exports = {
    createFP,
    deleteFPrById,
    findFPrById,
    findFPByType,
    findFPAll,
    updateFPById

}