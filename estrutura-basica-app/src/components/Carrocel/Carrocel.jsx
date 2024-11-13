import "./Carrocel.css"
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carrocel = (props) => {
    const carrocel = useRef(null)

    const HendleLeftClick = (e) => {
        e.preventDefault();
        console.log();
        carrocel.current.scrollLeft -= carrocel.current.offsetWidth;
    }
    const HendleRigthClick = (e) => {
        e.preventDefault();
        carrocel.current.scrollLeft += carrocel.current.offsetWidth;
    }
    return (
        <div className="">
            <h2>Ofertas Black Frinday</h2>
            <div ref={carrocel} className="conteiner_carrocel">
                {props.children}
            </div>
            <div className="btn_laterais">
                <button onClick={HendleLeftClick} className="btns"><FaChevronLeft /></button>
                <button onClick={HendleRigthClick} className="btns"><FaChevronRight /></button>
            </div>
        </div>
    )
}
export default Carrocel;