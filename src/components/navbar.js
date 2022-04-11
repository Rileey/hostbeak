import arrowRight from '../icons/ic_chevron.svg'
import logo from '../icons/hostbeak-icon 1.svg'
import downArrow from '../icons/downarrow_Vector20.svg'
import circle from '../icons/circle.svg'
import bell from '../icons/Group 67.svg'


const NavBar = () => {
    return (
        <div className="nav bg-background">
            <nav className="flex justify-between items-center">
                <div className="logo flex bg-white flex-row items-center rounded-3xl ml-2 px-4 py-2 shadow-lg mt-6">
                    <img src={logo} alt="" className="logo h-10 mr-4" />
                    <span className="text-sm mr-4">HostBeak</span>
                    <img src={arrowRight} alt="" className="arrow h-6" />
                </div>
                <div className="user flex flex-row w-56 items-center justify-between mr-24">
                    <img src={bell} alt="" className="bell rounded-3xl border-2 px-2 py-1.5" />
                    <img src={circle} alt="" className="user" />
                    <span className="username text-sm text-audioBlue">Ogooluwa</span>
                    <img src={downArrow} alt="" className="arrow h-2" />
                </div>
            </nav>
        </div>
    )
}

export default NavBar