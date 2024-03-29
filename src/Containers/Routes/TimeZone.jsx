import { Route, Switch } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";
import CheckOut from "../../Components/Product/CheckOut";
import CheckOutConfirmation from "../../Components/Product/CheckOutConfirmation";
import SearchProduct from "../../Components/Product/SearchProduct";
import Shop from "../../Components/Product/Shop";
import SingleProduct from "../../Components/Product/SingleProduct";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Search from "../Blog/Search";
import SearchByCategory from "../Blog/SearchByCategory";
import SearchByTag from "../Blog/SearchByTag";
import SingleBlog from "../Blog/Singleblog";
import Cart from "../Cart/Cart";
import Contacts from "../Contact/Contacts";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const TimeZone = () => {
  return (
    <Switch>
      <MainLayout>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:blogId" exact component={SingleBlog} />
        <Route path="/blog/search/:query" exact component={Search} />
        <Route
          path="/blog/search/category/:query"
          exact
          component={SearchByCategory}
        />
        <Route path="/blog/search/tag/:query" exact component={SearchByTag} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/confirmation/:id" component={CheckOutConfirmation} />
        <Route path="/search/:query" component={SearchProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/product/:productId" exact component={SingleProduct} />
        <Route path="/" exact component={Home} />
      </MainLayout>
    </Switch>
  );
};

export default TimeZone;
