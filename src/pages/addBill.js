import SideBar from "../components/sidebar"
import upload from '../icons/Upload Icon.svg'
import edit from '../icons/edit.svg'
import trash from '../icons/trash.svg'
import NavBar from "../components/navbar"


const AddBill = () => {
    return (
        <>
        <NavBar />
        <div className="flex flex-row bg-background">
            <SideBar />
            <div className="class bg-white rounded-2xl h-full pb-40">
            <div className="addBill px-12 w-full mt-6 pt-24">
                <span className="text-2xl text-mezechBlue font-bold">Add bill</span>
                <div className="grid grid-cols-3 grid-flow-row gap-x-24 gap-y-2 mr-56">
                    <div className="vendor">
                        <label htmlFor="" className="text-xs text-mezechBlue">Vendor</label>
                        <div class="flex">
                            <div class="mb-3 sm:w-full">
                                <select class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-xs 
                                font-light
                                text-sub/30
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                    <option selected>Choose</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="date flex flex-col">
                        <label htmlFor="" className="text-xs text-sub/30">Date</label>
                        <input type="date" className="text-xs border-solid border-sub/30 w-full text-sub/30" name="" id="" />
                    </div>
                    <div className="date flex flex-col">
                        <label htmlFor="" className="text-xs text-sub/30">Bill #</label>
                        <input type="number" className="text-xs border-solid border-sub/30 w-full text-sub/30" name="" id="" />
                    </div>
                    <div className="date flex flex-col">
                        <label htmlFor="" className="text-xs text-sub/30">Currency</label>
                        <div class="flex">
                            <div class="mb-3 sm:w-full">
                                <select class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-xs 
                                font-light
                                text-sub/30
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                    <option selected>USD - U.S dollar</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="date flex flex-col">
                        <label htmlFor="" className="text-xs text-sub/30">Due Date</label>
                        <input type="date" className="text-xs border-solid border-sub/30 w-full text-sub/30" name="" id="" />
                    </div>
                    <div className="date flex flex-col row-span-2">
                        <label htmlFor="" className="text-xs text-sub/30">Notes</label>
                        <textarea className="textbox text-xs border-solid border-sub/30 text-sub/30 w-full h-28">Message</textarea>
                    </div>
                    <div className="date flex flex-col relative">
                        <label htmlFor="" className="text-xs text-sub/30">Upload Copy of Bill</label>
                        <input type="file" className="text-xs w-96 text-sub/30 opacity-0 z-10" name="" id="" />
                        <span className="upload border-solid border text-xs text-sub/30 flex flex-row items-center w-48 justify-between hover:cursor-pointer absolute bottom-1 border-sub/30 px-2 py-1.5">
                            Upload File
                            <img src={upload} alt="" className="h-3 hover:cursor-pointer"/>
                        </span>
                    </div>
                    <div className="date flex flex-col">
                        <label htmlFor="" className="text-xs text-sub/30">P.O / S.O</label>
                        <input type="text" className="text-xs border-solid border-sub/30 w-full text-sub/30" name="" id="" />
                    </div>
                </div>
                
            </div>
            <div className="border-solid border border-sub/30 px-2 py-2 mt-12 ml-12 mr-32">
                <div className="grid grid-cols-7 grid-flow-row border-mezechBlue py-2 border-b-2 border-l-0 border-r-0 border-t-0">
                    <span className="text-sm text-mezechBlue font-bold">Item</span>
                    <span className="text-sm text-mezechBlue font-bold">Expense Category</span>
                    <span className="text-sm text-mezechBlue font-bold">Description</span>
                    <span className="text-sm text-mezechBlue font-bold">Qty</span>
                    <span className="text-sm text-mezechBlue font-bold">Price</span>
                    <span className="text-sm text-mezechBlue font-bold">Tax</span>
                    <span className="text-sm text-mezechBlue font-bold">Amount</span>
                </div>
                <div className="grid grid-cols-7 grid-flow-row py-2 border-sub/30 border border-l-0 border-r-0 border-t-0">
                    <div class="flex">
                        <div class="mb-3 sm:w-full mt-2">
                            <select class="form-select appearance-none
                            block
                            w-24
                            px-3
                            py-1.5
                            text-xs 
                            font-light
                            text-sub/30
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Choose</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex ">
                        <div class="mb-3 sm:w-full mt-2">
                            <select class="form-select appearance-none
                            block
                            w-24
                            px-3
                            py-1.5
                            text-xs 
                            font-light
                            text-sub/30
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Choose</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                    <input type="text" className="text-xs border-solid h-8 border-sub/30 w-32 text-sub/30" name="" id="" />
                    </div>

                    <div className="flex flex-row items-center">
                    <input type="number" className="text-xs border-solid h-8 border-sub/30 w-24 text-sub/30" name="" id="" />
                    </div>
                    
                    <div className="flex flex-row items-center">
                    <input type="number" className="text-xs border-solid h-8 border-sub/30 w-24 text-sub/30" name="" id="" />
                    </div>

                    <div className="flex flex-row items-center">
                        <input type="text" className="text-xs border-solid h-8 border-sub/30 w-24 text-sub/30 mr-2" name="" id="" />
                        <img src={edit} alt="" />
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <span>N0.00</span>
                        <img src={trash} alt="" className="hover:cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col items-end mr-24 h-16 justify-between py-2">
                    <span className="text-xs text-black">Subtotal: N0.00</span>
                    <span className="text-xs text-black">Total (NGN): N0.00</span>
                </div>
            </div>
            <div className="flex flex-row items-end justify-end gap-4 mr-32 h-16 py-2">
                <button className="bg-white px-4 py-2 rounded-sm border text-xs">Cancel</button>
                <button className="bg-lightBlue text-white px-4 py-2 border border-lightBlue rounded-sm text-xs">Save</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default AddBill