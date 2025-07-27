import Marquee from "react-fast-marquee";
import RunGif from "../assets/runninggif.gif";

const SliderRunNavBar = () => {
    return (
        <div style={{ marginTop: '20px' }} className="h-2 md:h-14 w-full flex items-center justify-center">
            <Marquee pauseOnHover className="flex items-center">
                <div className="flex items-center">
                    <img src={RunGif} alt="Running Animation" className="h-24 w-auto" />
                </div>
            </Marquee>
        </div>
    );
};

export default SliderRunNavBar;
