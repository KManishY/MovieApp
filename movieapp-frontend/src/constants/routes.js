// src/routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import MovieDetails from "../components/Dashboard/MovieDetails";
import Header from "../components/Layout/Header";
import Movies from "../components/Dashboard/Movies";
import Footer from "../components/Layout/Footer";
import SeatBooking from "../components/Dashboard/SeatBooking";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/SeatBooking" element={<SeatBooking />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;
