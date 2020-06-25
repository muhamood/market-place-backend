const Order = require('../db/order');

const createOrder = async(request, response, next) => {

    const order = new Order(request.body);
    try {

        await order.save();

        response.send({
            success: true,
            message: "Order placed successfully",
            order
        })
    } catch (e) {
        response.send({
            sucess: false,
            message: e.message || "Order not placed"
        })

    }
}

const getOrders = async(request, response, next) => {

    try {
        const order = await Order.find();

        response.send({
            success: true,
            message: "Orders retrieved",
            order
        })

    } catch (e) {
        response.send({
            success: false,
            message: "Order not found",

        })

    }

}

const getOrder = async(request, response, next) => {

    try {
        const order = await Order.find({
            _id: request.params.id
        }).populate('username');

      if(!order){
      	response.status(404).send({message:"order not found"})
      }
        response.send({
            success: true,
            message: "Order retrieved",
            order
            
        })

    } catch (e) {
        response.send({
            success: false,
            message: e.message || "Order doesn't exist",

        })

    }

}

const updateOrder = async(request, response, next) => {

    try {

        const order = await Order.findByIdAndUpdate(request.params.id, request.body, {
            new: true
        });
         
         if(!order){
      	response.status(404).send({message:"order doesnot exist"})
      }

        response.send({
            success: true,
            message: "order updated successfully",
            order
        })
    } catch (e) {

        response.send({
            success: false,
            message: e.message || "order not updated"
        })
    }

}

const deleteOrder = async(request, response, next) => {

       try{

           const order = await Order.findByIdAndDelete(request.params.id);

            if (!order) {
                response.status(404).send({
                    message: "order not found"
                })

                response.send({
                    success: true,
                    message: "order deleted successfully",
                })
            }

       }catch(e){
             response.send({
             	success:false,
             	message:"order deleted"
             })

       }
            
    }

        module.exports = {
            createOrder,
            getOrders,
            getOrder,
            updateOrder,
            deleteOrder
        }