import { useState } from "react";
import Meals  from "./components/Meals/meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler =()=> {
    setCartIsShown(true);
  };
  const hideCartHandler =()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
<Header onShowCart={ShowCartHandler}/> 
<main>
<Meals/>
</main>
   </CartProvider>
  );
}

export default App;
