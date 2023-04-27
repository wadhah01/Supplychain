const User = require('../models/user');


// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // incorrect email
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
   }
  
  // incorrect password
   if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
   }
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  };




const register = async(req,res)=>{
    const {email,password,role,companyName,address,phoneNumber,registrationNumber,domain,wallet} = req.body;

    try{
        const userCreated = await User.create({
            email,
            password,
            role,
            companyName,
            address,
            phoneNumber,
            registrationNumber,
            domain,
            wallet
        });
        await userCreated.save();
        res.status(201).json(userCreated);
        console.log(`${userCreated.companyName} created succefuly`);
    }catch(err){
        const errors = handleErrors(err);
        res.status(400).json(errors);
    }

};

const deleteUsrById = async(req,res)=>{

    try{    
        const myId = req.params.id;
        const user = await User.findById(myId);
        const userName = user.companyName;
        userDeleted = await User.findByIdAndDelete(myId);
        console.log(`${userName} deleted succefuly`);
        res.status(201).send(userDeleted);
    }catch(err){
        res.status(400).json(err);
    }

}

const findUsrAll = async(req,res)=>{
    
    try{
        const Usr = await User.find();
        res.status(201).send(Usr);
        console.log(Usr);
    }catch(err){
        res.send(err);
        res.status(400).json(err);
    }
}

const findUsrById = async(req,res)=>{
    
    try{
        const myId = req.params.id;
        const user = await User.findById(myId);
        console.log(user);
        res.status(201).send(user);
    }catch(err){
        res.send(err);
        res.status(400).json(err);
    }
}

const findUsrByRole = async(req,res)=>{
    try{
        const role = req.params.role;
        const user = await User.find({role : role});
        console.log(user);
        res.status(201).send(user);
    }catch(err){
        res.status(400).json(err);
    }
}

const updateUsrById = async (req,res) => {
    try{
        const myId = req.params.id;
        const newData = req.body;
        const updated = await  User.findByIdAndUpdate({_id: myId},newData);
        console.log(updated);
        res.status(201).send(updated);
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports = {
    register,
    deleteUsrById,
    findUsrById,
    findUsrByRole,
    findUsrAll,
    updateUsrById

}