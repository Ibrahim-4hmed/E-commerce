import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Index from "./pages/home/Index";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/productsDetails/ProductDetails";
import Cart from "./pages/favAndCart/Cart";
import Favorites from "./pages/favAndCart/Favorites";
import NotFound from "./pages/notFound/NotFound";
import AboutPage from "./pages/about/AboutPage";


const App = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
