const Item = require('../db/item');


const getItems = async(request, response, next) => {


    try {
        const item = await Item.find();

        response.send({
            success: true,
            message: "items retrieved successfully",
            item
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
        const item = await Item.find({
            _id: request.params.id
        }).populate('username');

        if (!item) {
            response.status(404).send({
                message: "item not found"
            })
        }

        response.send({
            success: true,
            message: "item retrieved successfully",
            item

        });

    } catch (e) {
        
        response.send({
            success: false,
            message: `item with id ${request.params.id} not found`,

        })

    }

}


const createItem = async(request, response, next) => {

    const item = new Item(request.body);

    try {
        await item.save();

        if (!item) {
            response.status(404).send({
                message: "item not saved"
            })
        }

        response.send({
            success: true,
            message: "Item created successfully",
            item
        })

    } catch (e) {
        response.send({
            success: false,
            message: "some field required is missing / item already exists .."
        })
    }

}

const updateItem = async(request, response, next) => {

    try {
        const item = await Item.findByIdAndUpdate(request.params.id, request.body, {
            new: true
        });

        if (!item) {
            response.status(404).send({
                message: "Item doesnot exist"
            })
        }

        response.send({
            success: true,
            message: "item updated successfully",
            item
        })
    } catch (e) {
        response.send({
            success: false,
            message: "item not updated"
        })
    }


}


const deleteItem = async(request, response, next) => {
    

    	const item = await Item.findByIdAndRemove(request.params.id);

        if(!item){
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