import React from 'react';

const style = {
    display: `inline-block`,
    padding: `2px`,
    textAlign: `center`,
    margin: `2px`,
    height:`50px`,
    width:`50px`,
    border: `1px solid black`
}

const Char = (props) => {
    return (
        <div style={style} onClick={props.click}>
            <p >{props.char}</p>
        </div>
    )
}

export default Char;