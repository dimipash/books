import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context";
import { ScrollToTop } from "./components";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <CartProvider>
            <ScrollToTop />
            <ToastContainer hideProgressBar={true} autoClose={3000} closeButton={false} position="top-center" />
            <App />
        </CartProvider>
    </Router>
);
