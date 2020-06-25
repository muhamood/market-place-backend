const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    meal:{
    	type: String, required:true
    },  

    quantity:{
    	type: String, required:true
    },  

    location:{
    	type: String, required:true
    },  
    
    total_cost:{
    	type:Number, default: 0
    },

    order_date:{
         type: Date, default:Date.now  
      },
    
    order_status:{

    	type: String, default:'pending'
    },
    ordered_by: {
        type: String,
        required:true
    }

});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;