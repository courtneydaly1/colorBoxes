import React from "react"

function Box({
    id, 
    width=20, 
    height=25, 
    handleRemove, 
    backgroundColor='aqua'
}){
    const remove = () => handleRemove(id);
    return(
        <div>
            <div 
            style= {{
                height : `${height}em`,
                width: `${width}em`,
                backgroundColor
             }}/>
            <button onClick={remove}>
                <b>Remove Box</b>
            </button>

        </div>
    );

}



export default Box;