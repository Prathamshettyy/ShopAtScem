import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTotal } from "../redux/shopSlice";
import { FaSearch } from "react-icons/fa"; // Importing search icon from react-icons library

export default function Navbar() {
  const totalQty = useSelector((state) => state.shop.cartTotalQty);
  const getCurrentShopItems = useSelector((state) => state.shop.currentShopItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, getCurrentShopItems]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // You can dispatch an action here to search for items
    console.log("Search query:", searchQuery);
  };

  return (
    <nav className="shop-navbar">
      <Link to="/">
        <h1>Shop@Scem</h1>
      </Link>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{ width: "300px", borderRadius: "5px 0 0 5px", padding: "8px" }} // Apply custom styles to elongate the search bar
        />
        <button onClick={handleSearch} style={{ borderRadius: "0 5px 5px 0", padding: "8px" }}><FaSearch style={{ backgroundColor: "transparent", border: "none" }} /></button>
      </div>

      <Link to="/basket">
        <div className="shop-basket-icon">
          <i className="fas fa-shopping-cart"></i>
          -<span>{totalQty}</span>
        </div>
      </Link>
    </nav>
  );
}


