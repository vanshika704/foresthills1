
import Gallery from "./backgroundCarousel";
import Flavours from "./flavours";
import GreenLast from "./greenlast";
import Nearest from "./nearestlocalities";
import Roomscape from "./Roomscape";
import Textgreen from "./textgreen";

function Home() {
    return (
        <div>
            <Gallery />
            <Textgreen />
            <Flavours />
            <Roomscape />
            <Nearest />
            <GreenLast />
        </div>
    );
}

export default Home;
