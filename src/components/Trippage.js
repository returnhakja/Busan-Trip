import place from "../api/mock.json";
import "../App.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navber";
const TripPage = () => {
    const gugunParam = useParams();
    console.log(gugunParam.GUGUN_NM);
    const items = place.getAttractionKr.item;
    // console.log(items);
    return (
        <div>
            <Navbar></Navbar>
            <div className="IMG_Con">
                {items.map((item) =>
                    gugunParam.GUGUN_NM === item.GUGUN_NM ? (
                        <div key={item.UC_SEQ}>
                            <div className="IMG_list">
                                <img src={item.MAIN_IMG_THUMB} />
                                <p className="IMG_title">{item.TITLE}</p>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                )}
            </div>
        </div>
    );
};

export default TripPage;
