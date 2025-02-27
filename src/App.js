import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Page/Home";
import About from "./component/Page/About";
import ProductPage from "./component/Page/ProductPage";
import './index.scss';
import RestaurantCategory from "./component/Page/RestaurantCategory";
import Localdeals from "./component/Page/Localdeals";
import Experiences from "./component/Page/Experiences";
import Events from "./component/Page/Events";
import Health from "./component/Page/Health";
import Things from "./component/Page/Things";
import Auto from "./component/Page/Auto";
import Travel from "./component/Page/Travel";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product-page" element={<ProductPage />}></Route>
      <Route path="/aboutus" element={<About />}></Route>
      <Route path="/restorent-category" element={<RestaurantCategory/>}></Route>
      <Route path="/local-deals" element={<Localdeals />}></Route>
      <Route path="/experinces" element={<Experiences />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/health" element={<Health />}></Route>
      <Route path="/things" element={<Things />}></Route>
      <Route path="/auto" element={<Auto/>}></Route>
      <Route path="/travel" element={<Travel/>}></Route>
 
    </Routes>
    </BrowserRouter>
  )
}
export default App