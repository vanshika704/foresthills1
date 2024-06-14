import { IoLocationOutline } from "react-icons/io5";
import { PiAirplaneBold } from "react-icons/pi";
import { LuFuel } from "react-icons/lu";
import { IoBusOutline } from "react-icons/io5";

function Nearest() {
    return (
        <>
            <div className="nearest">
                <div className="Nearest">Nearest Localities</div>
                <ul className="Localities">
                    <li className="title">
                        <div className="iconlocation"><IoLocationOutline /></div>
                        Shimla
                        <div className="Place">Ghanahatti (Kufridhar) (12km)</div>
                    </li>
                    <li className="title">
                        <div className="iconlocation"><PiAirplaneBold /></div>
                        Nearest Airport
                        <div className="Place">Jubbarhatti (17km)</div>
                    </li>
                    <li className="title">
                        <div className="iconlocation"><LuFuel /></div>
                        Nearest Fuel Station
                        <div className="Place">Banuti (3.5km)</div>
                    </li>
                    <li className="title">
                        <div className="iconlocation"><IoBusOutline /></div>
                        Nearest Bus Stand
                        <div className="Place">ISBT Shimla (13km)</div>
                    </li>
                </ul>
            </div>
           
        </>
    );
}



export default Nearest;
