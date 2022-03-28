import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";

function ProductList({products}){
    return(
        <div>
            {products.map((product)=>{
                return <SingleProduct key={product.id} product={product} />
            })}
        </div>
    )
}

const mapStateToProps = (state)=>{

    return{
        products:state.products.products
    }
}


export default connect(mapStateToProps)(ProductList);