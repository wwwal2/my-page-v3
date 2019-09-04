import React from 'react';
import { buttonsData } from './buttonsData';
import { Link } from 'react-router-dom';



const Buttons = (props) => {
    return (
        <React.Fragment>
            {buttonsData.map((item) => {
                return (
                    <Link 
                    to={item.linkTo} 
                    key={item.key} 
                    style={{...item.position}}
                    >
                        <button> 
                                {item.textContent}
                        </button>
                    </Link>
                )
            })}
        </React.Fragment>
    )
};

export default Buttons;