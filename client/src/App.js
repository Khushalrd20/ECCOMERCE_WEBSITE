import  {Routes,Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Policy from './pages/policy';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Products from './pages/Admin/Products';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/productDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProducts';
import CartPage from './pages/CartPage';
import AdminOrders from './pages/Admin/Adminorders';
// import CategoryProduct from './pages/CategoryProduct';


function App() {
  return (
    <>
    <Routes>
        <Route path ="/"  element ={<HomePage />} />
        <Route path ="/Search"  element ={<Search />} />
        <Route path ="/categories"  element ={<Categories />} />
        <Route path ="/cart"  element ={<CartPage />} />
        <Route path ="/category/:slug"  element ={<CategoryProduct />} />
        <Route path ="/product/:slug"  element ={<ProductDetails />} />
        <Route path="/dashboard" element ={<PrivateRoute/>}>
              <Route path ="user"  element ={<Dashboard />} />
              <Route path ="user/orders"  element ={<Orders />} />  
              <Route path ="user/profile"  element ={<Profile />} />
        </Route>
        <Route path="/dashboard" element ={<AdminRoute/>}>
              <Route path ="admin"  element ={<AdminDashboard  />} />
              <Route path ="admin/create-category"  element ={<CreateCategory  />} />
              <Route path ="admin/create-product"  element ={<CreateProduct  />} />
              <Route path ="admin/product/:slug"  element ={<UpdateProduct  />} />
              <Route path ="admin/products"  element ={<Products  />} />
              <Route path ="admin/orders"  element ={<AdminOrders  />} />
        </Route>
        <Route path ="/about"  element ={<AboutPage />} />
        <Route path ="/register"  element ={<Register />} />
        <Route path ="/forgot-password"  element ={<ForgotPassword />} />
        <Route path ="/login"  element ={<Login />} />
        <Route path ="/contact"  element ={<Contact />} />
        <Route path ="*"  element ={<PageNotFound />} />   
        <Route path ="/policy"  element ={<Policy />} />   
    </Routes>
   
    </>
  );
}

export default App;
