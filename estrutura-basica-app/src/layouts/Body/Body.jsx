import Aos from "aos";
import "aos/dist/aos.css";
import "./Body.css";
import Cards from "../../components/Card/Cards";
import { useEffect } from "react";
import Carrocel from "../../components/Carrocel/Carrocel";

function Body() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="py-4 py-lg-5 conteiner">
            <Carrocel>
                <Cards aos="fade-up" aos_offset="500" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
                <Cards aos="fade-up" aos_offset="100" desc="desc" />
            </Carrocel>

        </div>
    );
}

export default Body;
