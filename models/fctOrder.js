const mongoose = require ('mongoose');

const FctOrder = mongoose.model('FctOrder',{
  
   date_Cmd:{
        type : Date.now
   },
   deleveryAdress:{
        type : String
   },
   factoryID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
   },
   rawMaterialID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RawMaterial'
   }
})

module.exports = FctOrder;