import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Contents/Header/Header";
import BarSuperior from "./Contents/Bars/BarSuperior";
import BarInferior from "./Contents/Bars/BarInferior";
import Aside from "./Contents/Main/Aside/Aside";
import Home from "./Pages/Home/Home";
import Orders from "./Pages/Orders/Orders";
import Catalog from "./Pages/Catalog/Catalog";
import Billing from "./Pages/Billing/Billing";
import Statistics from "./Pages/Statistics/Statistics";
import Expense from "./Pages/Expense/Expense";
import PV from "./Pages/PV/PV";
import { CartProvider } from "./CartContext/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <BarSuperior />
        <main className="main">
          <Aside />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Billing" element={<Billing />} />
            <Route path="/Statistics" element={<Statistics />} />
            <Route path="/Expense" element={<Expense />} />
            <Route path="/PV" element={<PV />} />
          </Routes>
        </main>
        <BarInferior />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
