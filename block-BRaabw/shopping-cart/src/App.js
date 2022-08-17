import React from "react";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { products } from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizes: [],
      cartItem: [],
    };
    this.eventId = null;
  }
  

  componentDidMount() {
    if (localStorage.cart) {
      this.setState({ cartItem: JSON.parse(localStorage.cart) || [] });
    }
    this.eventId = window.addEventListener(
      "beforeunload",
      this.handleUpdateLocalStorage
    );
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleUpdateLocalStorage);
  }

  handleUpdateLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cartItem));
  };

  handleAddToCart = (p) => {
    let isPresent =
      this.state.cartItem.findIndex((product) => product.id === p.id) !== -1;
    if (isPresent) {
      this.increamentQuntity(p.id);
      alert(`${p.title} is added to your cart`);
    } else {
      this.setState((prevState) => ({
        cartItem: prevState.cartItem.concat({ ...p, quantity: 1 }),
      }));
      alert(`${p.title} is added to your cart`);
    }
  };
  increamentQuntity = (id) => {
    this.setState((prevState) => {
      let updatedCartItem = prevState.cartItem.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      return {
        cartItem: updatedCartItem,
      };
    });
  };
  decreamentQuntity = (id) => {
    this.setState((prevState) => {
      let updatedCartItem = prevState.cartItem.map((p) => {
        if (p.id === id) {
          if (p.quantity > 1) {
            return {
              ...p,
              quantity: p.quantity - 1,
            };
          } else if (p.quantity === 1) {
            this.deleteItem(p.id);
          }
        }
        return p;
      });
      return {
        cartItem: updatedCartItem,
      };
    });
  };
  deleteItem = (id) => {
    this.setState((prevState) => {
      let updatedCartItem = prevState.cartItem.filter((p) => {
        return p.id !== id;
      });
      return {
        cartItem: updatedCartItem,
      };
    });
  };
  handleClick = (size) => {
    if (this.state.selectedSizes.includes(size)) {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.concat(size),
      }));
    }
  };
  render() {
    return (
      <div className="wrapper flex space-between">
        <Sidebar
          products={products}
          selectedSizes={this.state.selectedSizes}
          handleClick={this.handleClick}
        />
        <Main
          products={products}
          selectedSizes={this.state.selectedSizes}
          handleAddToCart={this.handleAddToCart}
        />
        <Cart
          cartItem={this.state.cartItem}
          increamentQuntity={this.increamentQuntity}
          decreamentQuntity={this.decreamentQuntity}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;