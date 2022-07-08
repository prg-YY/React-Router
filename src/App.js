import { Route, Routes, BrowserRouter } from "react-router-dom"

import Welcome from "./pages/Welcome"
import Products from "./pages/Prodacuts"
import MainHeader from "./components/MainHeader"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
