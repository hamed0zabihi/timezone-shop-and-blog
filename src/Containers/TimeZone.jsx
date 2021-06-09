import { Route, Switch } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Shop from "../Components/Product/Shop";
import SingleProduct from "../Components/Product/SingleProduct";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home/Home";
import Login from "./Login";

const TimeZone = () => {
  return (
    <Switch>
      <MainLayout>
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/product/:id" exact component={SingleProduct} />
        <Route path="/" exact component={Home} />
      </MainLayout>
    </Switch>
  );
};

export default TimeZone;
