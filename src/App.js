import "./App.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as actionTypes from "./redux/action";
import ProductsList from "./components/ProductsList";

function App({ setProducts }) {
  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((response) => response);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <h1>Hello Shashwat</h1>
      <ProductsList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) =>
      dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload: { products: products },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);