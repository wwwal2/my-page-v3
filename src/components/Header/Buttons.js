import React from 'react';
import { buttonsData } from './buttonsData'



const Buttons = (props) => {
    return (
        <React.Fragment>
            {buttonsData.map((item) => {
                return (
                    <button 
                        onClick={() => console.log("Click")}
                        key={item.key} 
                        style={{...item.position}}
                        > 
                            {item.textContent}
                    </button>
                )
            })}
        </React.Fragment>
    )
};

export default Buttons;