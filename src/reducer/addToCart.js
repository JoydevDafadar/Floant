const inital = {
    cart : []
}
function addToCart(state = inital, action ){

    switch( action.type ){
        case "ADDTOCART" :

            let isPresent = false;
            let newcart = state.cart.map((ele) =>{
                if( ele.name === action.payload.name ){
                    isPresent = true;
                    return {
                        ...ele,
                        quantity : ele.quantity+action.payload.quantity
                    }
                }
                return ele;
            })
            newcart = ( !isPresent )?[...newcart, action.payload]: [...newcart];

            return {
                ...state,
                cart : newcart
            }

        case "REMOVEITEM" :
            let newcart2 = state.cart.filter((ele) => {
                return ele.id !== action.payload
            })

            return {
                ...state,
                cart : newcart2
            }


        default :
            return state;
    }

}

export default addToCart