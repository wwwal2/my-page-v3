const initialState = {
    buttonOne: "One",
    buttoTwo: "Two"
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONE":
            return { ...state, buttonOne: action.payload }       
        case "TWO":
            return { ...state, buttoTwo: action.payload }       
        default: 
            return state;
    }
};