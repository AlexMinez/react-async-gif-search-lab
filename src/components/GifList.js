import React from "react";

const GifList = props => {
        return(
            <div>
                {props.gifs.map(gif => <img key={gif.url} alt={gif} src={gif.url}></img>)}
            </div>
    )    
}
export default GifList;