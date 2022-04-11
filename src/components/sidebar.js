import { useState } from 'react'
import arrowRightGrey from '../icons/ic_chevron(1).svg'
import arrowDownGrey from '../icons/ic_chevron(2).svg'
import payroll from '../icons/ic_invoices.svg'
import dashboard from '../icons/Vector.svg'
import spaceship from '../icons/shuttle 1.svg'
import wallet from '../icons/ic_wallet.svg'
import purchase from '../icons/Purchase_Icon.svg'
import purchaseWhite from '../icons/Purchase_Icon_white.svg'
import accounting from '../icons/Accounting.svg'
import bank from '../icons/bank.svg'
import report from '../icons/tabler_report.svg'
import analytics from '../icons/Group 945.svg'
import analyticsWhite from '../icons/Group 945(2).svg'
import settings from '../icons/settings.svg'
import logout from '../icons/logout.svg'
import card from '../icons/card.svg'
import 'flowbite'




const SideBar = () => {

    const [hover, isHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col bg-background w-72 mt-24 gap-12 ">
            <div className="flex flex-col bg-background pl-16 w-72 gap-8">
                <div className="flex flex-row items-center gap-6">
                    <img src={spaceship}alt="" className="h-6" />
                    <span className="text-sm text-sub/30">Welcome</span>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <img src={dashboard}alt="" className="h-6" />
                    <span className="text-sm text-sub/30">Dashboard</span>
                </div>
                <div className="flex flex-col relative">
                    <div className="flex flex-row items-center gap-6">
                        <img src={wallet}alt="" className="h-6" />
                        <span className="text-sm text-sub/30">Sales</span>
                    </div>
                    <img src={arrowRightGrey} alt="" className="arrow h-4 absolute top-1 right-12" />
                </div>
                {
                    clicked ? (
                        <div className="flex flex-col gap-1" >
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex flex-col relative" onClick={()=>setClicked(false)}>
                            <div className="flex flex-row items-center gap-6">
                                <img src={purchase}alt="" className="h-6 rounded-3xl"/>
                                <span className="text-sm text-sub/30">Purchases</span>
                            </div>
                            <img src={arrowRightGrey} alt="" className="arrow h-4 absolute top-1 right-12" />
                        </button>
                    </div>  
                    ) : (
                <div className="flex flex-col gap-1">
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex flex-col relative" onClick={()=>setClicked(true)}>
                    <div className="flex flex-row items-center gap-6">
                        <img src={purchaseWhite}alt="" className="h-6 bg-audioBlue px-2 py-2 rounded-3xl"/>
                        <span className="text-sm text-audioBlue">Purchases</span>
                    </div>
                    <img src={arrowDownGrey} alt="" className="arrow h-4 absolute top-1 right-12" />
                </button>
                <>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Bills</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Vendors</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Product & Services</span>
                </>
                </div>
                 
                    )
                }
                <div className="flex flex-col relative">
                    <div className="flex flex-row items-center gap-6">
                        <img src={accounting}alt="" className="h-6" />
                        <span className="text-sm text-sub/30">Accounting</span>
                    </div>
                    <img src={arrowRightGrey} alt="" className="arrow h-4 absolute top-1 right-12" />
                </div>
                <div className="flex flex-col relative">
                    <div className="flex flex-row items-center gap-6">
                        <img src={bank}alt="" className="h-6" />
                        <span className="text-sm text-sub/30">Banking</span>
                    </div>
                    <img src={arrowRightGrey} alt="" className="arrow h-4 absolute top-1 right-12" />
                </div>
                <div className="flex flex-col relative">
                    <div className="flex flex-row items-center gap-6">
                        <img src={payroll}alt="" className="h-6" />
                        <span className="text-sm text-sub/30">Payroll</span>
                    </div>
                    <img src={arrowRightGrey} alt="" className="arrow h-4 absolute top-1 right-12" />
                </div>
                <div className="flex flex-row items-center gap-6">
                    <img src={report}alt="" className="h-6" />
                    <span className="text-sm text-sub/30">Reports</span>
                </div>
                {
                    open ? (
                <div className="flex flex-col gap-1">
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex flex-col relative" onClick={()=>setOpen(false)}>
                    <div className="flex flex-row items-center gap-6">
                        <img src={analyticsWhite}alt="" className="h-6 bg-audioBlue px-2 py-2 rounded-3xl"/>
                        <span className="text-sm text-audioBlue">Analytics</span>
                    </div>
                    <img src={arrowDownGrey} alt="" className="arrow h-4 absolute top-1 right-12" />
                </button>
                <>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">View Report</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">To-Do</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Upload Docs</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Chat</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Schedule</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Message Board</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Make Payments</span>
                <span className="text-sm text-sub/30 ml-12 hover:cursor-pointer transition ease-in-out delay-150 hover:text-audioBlue hover:transition-opacity">Billing</span>
                </>
                </div>
                    ) : (
                <div className="flex flex-col gap-1" >
                    <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex flex-col relative" onClick={()=>setOpen(true)}>
                        <div className="flex flex-row items-center gap-6">
                            <img src={analytics}alt="" className="h-4 rounded-3xl"/>
                            <span className="text-sm text-sub/30">Analytics</span>
                        </div>
                        <img src={arrowRightGrey} alt="" className="arrow h-4 absolute top-1 right-12" />
                    </button>
                </div>    
                    )
                }
                <div className="flex flex-row items-center gap-6 mb-20">
                    <img src={settings}alt="" className="h-6" />
                    <span className="text-sm text-sub/30">Settings</span>
                </div>
                <div className="flex flex-row items-center gap-6 mb-6">
                    <img src={logout}alt="" className="h-6" />
                    <span className="text-sm text-sub/30">Logout</span>
                </div>
            </div>
            <hr className="mx-6"/>
            <div className="flex flex-col bg-background items-center w-72 gap-6 mb-20">
                <button className="bg-audioBlue flex flex-row text-white items-center justify-around w-56 px-2 py-2 rounded-lg">
                    <img src={card} alt="" className="h-6" />
                    Accept Payments    
                </button>
            </div>
            
        </div>
    )
}

export default SideBar