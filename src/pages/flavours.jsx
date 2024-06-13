import { GrGallery } from "react-icons/gr";
import { LuChefHat } from "react-icons/lu";
import { FaBellConcierge } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
function Flavours() {
  return (
    <>
      <div className="flavours">
        <div className="text4">Flavours at Forest Hill</div>
        <div className="listflavours">
          <ul className="flavourlist">
            <li>
              <LuChefHat color="rgb(70, 82, 38)" size={25} className="icon" />
              Crafting Culinary Magic, Helmed by Our Maestro Chef.
            </li>
            <li>
              <FaBellConcierge color="rgb(70, 82, 38)" size={25} className="icon" />
              Global Tastes, Local Flair: A Fusion Feast of Indian, Himachali, and Chinese Delights.
            </li>
            <li>
              <LuMenu color="rgb(70, 82, 38)" size={25} className="icon" />
              Savor Simplicity: Order with Ease from a Menu Tailored to Your Tastes.
            </li>
            <li>
              <GrGallery color="rgb(70, 82, 38)" size={25} className="icon" />
              Nature&#39;s Canvas Unveiled: Panoramic Views Through Our Enchanting Windows.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Flavours;
