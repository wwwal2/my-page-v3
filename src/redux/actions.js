const add = (payload) => ({type: "ADD", payload});
const remove = (payload) => ({type: "REMOVE", payload});
const input = (payload) => ({type: "INPUT", payload});

export { add, remove, input }