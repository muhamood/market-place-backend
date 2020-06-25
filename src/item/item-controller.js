const Item = require('../db/item');


const getItems = async(request, response, next) => {


    try {
        const items = await Item.find();

        response.send({
            success: true,
            message: "items retrieved successfully",
            items
        });

    } catch (e) {
        
        response.send({
            success: false,
            message: "items not found"

        })

    }

}


const getItem = async(request, response, next) => {


    try {
        const items = await Item.find({
            _id: request.params.id
        }).populate('username');

        if (!items) {
            response.status(404).send({
                message: "item not found"
            })
        }

        response.send({
            success: true,
            message: "item retrieved successfully",
            items, 
            created_by
        });

    } catch (e) {
        
        response.send({
            success: false,
            message: e.message || `item with id ${_id} not found`,

        })

    }

}


const createItem = async(request, response, next) => {

    const items = new Item(request.body);

    try {
        await items.save();

        if (!items) {
            response.status(404).send({
                message: "item not saved"
            })
        }

        response.send({
            success: true,
            message: "Item created successfully",
            items
        })

    } catch (e) {
        response.send({
            success: false,
            message: "some field required is missing.."
        })
    }

}

const updateItem = async(request, response, next) => {

    try {
        const items = await Item.findByIdAndUpdate(request.params.id, request.body, {
            new: true
        });

        if (!items) {
            response.status(404).send({
                message: "Item doesnot exist"
            })
        }

        response.send({
            success: true,
            message: "item updated successfully",
            items
        })
    } catch (e) {
        response.send({
            success: false,
            message: "item not updated"
        })
    }


}


const deleteItem = async(request, response, next) => {
    

    	const items = await Item.findByIdAndRemove(request.params.id);

        if(!items){
        	response.status(404).send({
        		message:"item doesnot exist"
        	})
        }
   response.send({
   	success:true,
   	message:"Item deleted successfully"

   });
    

}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}