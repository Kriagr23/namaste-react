import React from "react";
import ReactDOM from "react-dom/client";
import { MdStarRate } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Header from "./components/Header";
import Body from "./components/Body";








// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <strong>
                <span>© {year} Namaste React</span>
            </strong>
            <p>All rights reserved.</p>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
