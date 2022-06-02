import React from "react";

function Image({ key, src }) {
    return (
        <div key={key} className="img-item">
            <img src={src} alt=""></img>
        </div>
    );
}
export default Image;
