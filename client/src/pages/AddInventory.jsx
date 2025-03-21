import React from 'react'

function AddInventory() {
  return (
    <>
      <div className="wrapper">
        <div className="main flex items-start justify-between">
           
                    <div className="display">
                        <div className="add_inventory rounded-2xl bg-blue-100 w-4/5 m-auto my-8 px-10 py-8">
                            <h1 className=" text-blue-900  text-3xl   font-bold m-auto w-96 text-center px-8 py-2 ">Add
                                Inventory</h1>
                            <form>
                                <div className="input_inventory flex justify-center items-center gap-8 px-6 py-10">
                                    <div className="inventory_name font-bold"><label className="" for="item_name">Inventory
                                            Name</label>
                                        
                                        <input className="border-2 my-5 px-5 py-2" type="text" placeholder=""/>
                                    </div>
                                    <div className="category font-bold"> <label for="category">
                                            Category
                                        </label>
                                        
                                        <select className="border-2 my-5 px-5 py-2">
                                            <option value="Stationary">Stationary</option>
                                        </select>
                                    </div>

                                    <div className="qty font-bold">
                                        <label for="qty">
                                            Qty
                                        </label>
                                        
                                        <input className="border-2 my-5 px-2 py-2 w-32" type="number"/>
                                        <button><i className="fa-solid fa-plus mx-2  border-2 p-3"></i></button>
                                        <button><i className="fa-solid fa-minus  border-2 p-3"></i></button>
                                    </div>
                                </div>
                                <div className="buttons flex justify-center items-center">
                                    <button className="px-8 py-3 bg-blue-900 text-white rounded-2xl text-center mx-10"
                                        type="submit">Submit</button>
                                    <button
                                        className="px-8 py-3 bg-gray-900  text-white rounded-2xl text-center mx-10">Clear</button>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        
    
    


    </>
  )
}

export default AddInventory
