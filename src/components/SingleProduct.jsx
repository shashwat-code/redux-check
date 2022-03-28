import { connect } from "react-redux"
import * as actionTypes from "../redux/action"
function SingleProduct({product,addToCart}){
    return(
        <div>
            <h1>{product.title}</h1>
            <button  onClick={()=>{addToCart(product.id,product)}}>ADD TO CART</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch)=>{
    // console.log("clicked")
    return{
        addToCart:(id,product)=>dispatch({type:actionTypes.ADD_ITEM_TO_CART,payload:{id:id,product:product}})
    }
}

export default connect(null,mapDispatchToProps)(SingleProduct)