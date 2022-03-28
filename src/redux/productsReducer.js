import * as actionTypes from "./action"
const initialState={
    products:[]
}
const productsReducer= (state=initialState,{type,payload})=>{
    switch( type){
        case actionTypes.ADD_ITEM_TO_CART:
            return state;
        case actionTypes.REMOVE_ITEM_FROM_CART:
            return state;
        case actionTypes.UPDATE_ITEM_IN_CART:
            return state;
        case actionTypes.SET_PRODUCTS:
            console.log("running")
            return{
                ...state,products:payload.products
            }        
    }
    return state;
}
export default productsReducer;