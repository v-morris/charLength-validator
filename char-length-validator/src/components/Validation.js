import React from 'react';

const Validation = (props) => {

    return (
        <div style={{textAlign:`center`}}>
        <p>Type to have characters appear. In addition to the backspace
            and delete key, you can also click each box to delete them.
        </p>
        <p>Must be 5 characters or longer.</p>
            <p >Total number of characters: {props.textLength}</p>

            {
                props.textLength < 5 ? 
                <p>Text too short </p> : <p>Text long enough</p> }
            
        </div>
    )
}

export default Validation;