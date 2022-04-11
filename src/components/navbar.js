import { Link } from 'react-router-dom'
import arrowRight from '../icons/ic_chevron.svg'
import logo from '../icons/hostbeak-icon 1.svg'
import downArrow from '../icons/downarrow_Vector20.svg'
import circle from '../icons/circle.svg'
import bell from '../icons/Group 67.svg'


const NavBar = () => {
    return (
        <div className="nav bg-background w-screen md:w-full lg:w-full">
            <nav className="flex justify-between w-screen items-center ">
                <Link to="/">
                <div className="logo flex bg-white flex-row items-center rounded-3xl ml-2 px-4 py-2 shadow-lg mt-6">
                    <img src={logo} alt="" className="logo h-4 lg:h-10 mr-1 lg:mr-4" />
                    <span className="text-xs lg:text-sm mr-0 lg:mr-4">HostBeak</span>
                    <img src={arrowRight} alt="" className="arrow h-3 lg:h-6" />
                </div>
                </Link>
                <div className="user flex flex-row w-40 lg:w-56 items-center justify-between mr-6 lg:mr-24">
                    <img src={bell} alt="" className="rounded-3xl h-6 lg:h-10 border-2 px-2 py-1.5" />
                    <img src={circle} alt="" className="h-6 lg:h-10" />
                    <span className="username text-xs lg:text-sm text-audioBlue">Ogooluwa</span>
                    <img src={downArrow} alt="" className="arrow h-1 lg:h-2" />
                </div>
            </nav>
        </div>
    )
}

export default NavBar