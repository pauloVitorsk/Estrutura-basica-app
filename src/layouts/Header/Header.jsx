import "./Header.css";
import { PiLinuxLogoFill } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Header(){
    return(
        <header className="App-header">
            <div className="header-coll-1">

            <div className="header-menu">
                    <IoIosMenu fontSize={30}/>
                    <nav className="">
                        <ul>
                            <li></li>
                        </ul>
                    </nav>
                </div>
               
            </div>
                
            <div className="header-coll-2"> 
                <div className="header-logo"> 
                    <PiLinuxLogoFill fontSize={40}/>
                </div>

            </div>

            <div className="header-coll-3"> 
              
                <div className="header-exit">
                <FaUser fontSize={40}/>
                </div>
            </div>
         
        </header>
    )
}
export default Header;