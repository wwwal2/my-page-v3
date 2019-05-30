import React from 'react';

const buttonsList = [
    {
        textContent: "one",
        key: 1,
        position: {"gridColumn": 9}
    },
    {
        textContent: "two",
        key: 2,
        position: {"gridColumn": 10}
    },
    {
        textContent: "three",
        key: 3,
        position: {"gridColumn": 11}
    }
];

const advancedStyling = {
    "backgroundColor": "red",
    "color": "white",
    "background": "#4C8FFB",
    "border": "1px #3079ED solid",
    "boxShadow": "inset 0 1px 0 #80B0FB",
};

function click() {
    return console.log("click")
};

const btnPattern = (data) => {
    return (
        <button onClick={click} key={data.key} style={{...data.position, ...advancedStyling}}> 
            {data.textContent}
        </button>
    );
};

const Buttons = () => {
    return (
        <React.Fragment>
            {buttonsList.map(btnPattern)}
        </React.Fragment>
    )
};

export default Buttons;