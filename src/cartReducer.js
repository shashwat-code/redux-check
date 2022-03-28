import * as actionTypes from "./redux/action"
const initialState={
    cart:[],
}

const cartReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case actionTypes.ADD_ITEM_TO_CART:
            modifyCart(payload.id,payload.item,state.cart)
            return state;
            // const item = state.cart.find((product)=>product.id==payload.id)
            // const inCart = state.cart.find((product)=>product.id==payload.id?true:false)
            // console.log("this is in cart variable: ",inCart)
            // return{
            //     ...state,
            //     cart:inCart?state.cart.map((product)=>product.id==payload.id?{...product,qty:product.qty+1}:product):
            //     [...state.cart,{...item,qty:1}]
            // }
            // const updateProduct = (item)=>{ return item.id==payload.id? {...item,qty:item.qty+1} :payload.product}
            // console.log("cart: ",state.cart)
            // const inCart = state.cart.find((product)=>product.id==payload.id?true:false)
            // console.log("inCart: ",inCart)
            // console.log("product on clicked entered redux: ",payload.product)
            // const product = inCart!=undefined?{...state.cart.map(item=>updateProduct(item))}:{...payload.product,qty:1}
            // console.log("this is item:  ",product)
            // const newCart  = [...state.cart.filter(item=>{return item.id!=payload.id}),product]
            // console.log("new cart is here: ",newCart)
            // return {
            //     ...state,
            //     cart:newCart
            // }
            // return{
            //     ...state,
            //     cart: {...state.cart.filter(item=>item.id!=id),updatedProduct}
            // }
    }
    return state
}

export default cartReducer



function modifyCart(id,item,cart){
    const inCart  = cart.find(item=>item.id==id)

    console.log(inCart)
}