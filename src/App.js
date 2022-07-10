import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"

import Welcome from "./pages/Welcome"
import Products from "./pages/Products"
import MainHeader from "./components/MainHeader"
import ProductDitail from "./pages/ProductDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route path="/" exact element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:productId" element={<ProductDitail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
