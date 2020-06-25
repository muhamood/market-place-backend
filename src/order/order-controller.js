const Order = require('../db/order');

const createOrder = async(request, response, next) => {

    const orders = new Order(request.body);
    try {

        await orders.save();

        response.send({
            success: true,
            message: "Order placed successfully",
            orders
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
        const orders = await Order.find();

        response.send({
            success: true,
            message: "Orders retrieved",
            orders
        })

    } catch (e) {
        response.send({
            success: false,
            message: "Orders not found",

        })

    }

}

const getOrder = async(request, response, next) => {

    try {
        const orders = await Order.find({
            _id: request.params.id
        }).populate('username');

      if(!orders){
      	response.status(404).send({message:"order not found"})
      }
        response.send({
            success: true,
            message: "Order retrieved",
            orders,
            ordered_by
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

        const orders = await Order.findByIdAndUpdate(request.params.id, request.body, {
            new: true
        });
         
         if(!orders){
      	response.status(404).send({message:"order doesnot exist"})
      }

        response.send({
            success: true,
            message: "order updated successfully",
            orders
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

           const orders = await Order.findByIdAndDelete(request.params.id);

            if (!orders) {
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