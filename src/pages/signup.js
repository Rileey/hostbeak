
import image from '../icons/image_2.png'
import arrow from '../icons/ic_chevron.svg'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="flex flex-row" >
            <div className="flex flex-row w-full">
                <div className="img hidden md:flex relative h-auto md:basis-1/2">
                    <img src={image} alt="" className=" hidden object-cover md:flex h-auto " />
                    <span className="text-2xl hidden text-white absolute md:flex right-40 bottom-32 w-80">Building exceptional services with Back Office Support and Business Perfomance</span>
                </div>
                <div className="container px-10 md:flex flex-col mx-auto my-auto md:basis-1/2 md:px-20">
                    <h2 className="text-xl text-mezechBlue font-bold mt-14 mb-4">Create Account</h2>
                    <span className="text-md text-sub/60" >Build an exceptional business</span>

                    <form className="flex flex-col gap-10" action="">
                        <div className="name flex gap-10 flex-col md:flex-row md:gap-8 mt-12">
                            <div className="flex flex-col basis-1/2">
                                <label className="text-md text-mezechBlue/60">First Name</label>
                                <input className="text-mezechBlue font-medium py-1 px-0 outline-none border-b-2 border-l-0 border-r-0 border-t-0" placeholder="Enter your first Name" type="text" name="" id="" />
                            </div>
                            <div className="flex flex-col basis-1/2">
                                <label className="text-md text-mezechBlue/60">Last Name</label>
                                <input className="text-mezechBlue font-medium py-1 px-0 outline-none border-b-2 border-l-0 border-r-0 border-t-0" placeholder="Enter your last Name" type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="name flex flex-col">
                            <label className="text-md text-mezechBlue/60">Phone Number</label>
                            <input className="text-mezechBlue font-medium py-1 px-0 outline-0 border-b-2 border-l-0 border-r-0 border-t-0" placeholder="Enter your phone number" type="number" name="" id="" />
                        </div>
                        <div className="name flex flex-col">
                            <label className="text-md text-mezechBlue/60">Email Address</label>
                            <input className="text-mezechBlue font-medium py-1 px-0 outline-none border-b-2 border-l-0 border-r-0 border-t-0" placeholder="Enter your email address" type="email" name="" id="" />
                        </div>
                        <div className="name flex flex-col">
                            <label className="text-md text-mezechBlue/60">Password</label>
                            <input className="text-mezechBlue font-medium py-1 px-0 outline-none border-b-2 border-l-0 border-r-0 border-t-0" placeholder="Enter your password" type="password" name="" id="" />
                        </div>

                        <div className="bottom flex flex-row justify-between">
                            <div className="radio flex flex-row gap-2 items-center">
                                <input type="checkbox" name="" id="" />
                                <label className="text-sm text-sub/60 "htmlFor="">Remember Me</label>
                            </div>
                            <span className="text-sm text-lightBlue hover:cursor-pointer">Forgot Password?</span>
                        </div>
                        <button className="bg-lightBlue text-white text-lg py-4 px-6 rounded-md shadow-md" type="submit">Sign Up</button>
                        <div className="flex flex-row items-center justify-center">
                            <span className=" w-24 h-0.5 bg-sub/30 mx-4"/>
                            <span className="text-sub/60">Got an Account?<span className="text-lightBlue mx-2 hover:cursor-pointer">Sign In</span></span>
                            <span className=" w-24 h-0.5 bg-sub/30 mx-4"/>
                        </div>
                    </form>
                    <Link to="/bill">
                    <span className="flex flex-row items-center justify-end">
                        AddBill 
                        <img src={arrow} alt="" />
                    </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp