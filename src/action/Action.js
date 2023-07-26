export const addItem = (obj) =>{
    return {type: "ADDTOCART", payload: obj};
}

export const removeItem = (id) =>{
    return {type: "REMOVEITEM", payload: id};
}