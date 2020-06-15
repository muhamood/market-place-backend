const Item = require("../db/item");

const getItems = async (request, response, next)=>{

        const items = await Item.find({});

	response.send({
		success:true,
		data: items,

	});

}
	



const createItems = async (request, response, next)=>{
             const items = new Item ({
             	...request.body
             });
        try{
             
               await items.save();
             response.send({
             	success:true,
             	message:"Item added",
                items,

             });

        } catch(e){
        	return response.send({
                 success: false,
        	message: e.message || "Item not added"
      
        	})
        	
      }            
}


  const updateItem = async (request, response, next)=>{

              try{

                   const items = await Item.findByIdAndUpdate(ItemId, {$set:ItemParams}, {new:true});
         
              response.send({
                    success:true,
                    message: "Item updated",
                    items,

              })

             } catch(e){

                    response.send({
                          success:false,
                          message: e.message || "item not updated"

                    }) 
                 }
}

  const deleteItem = async (request, response, next)=>{

              response.send({
              	sucess:true,
              	message: "Item deleted successfully"
              });
  }

  

module.exports = { 
	getItems, createItems, updateItem, deleteItem

}
