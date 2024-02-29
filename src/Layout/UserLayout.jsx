import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Link/Navbar";

const UserLayout = () => {
  const navigate = useNavigate();
  const [isLogged, setLogged] = useState(false);

  const checkLogin = () => {
    const item = JSON.parse(localStorage.getItem("username"));
    const item2 = JSON.parse(localStorage.getItem("password"));
    if (!item && !item2) {
      setLogged(false);
      navigate("/");
    } else setLogged(true);
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      {isLogged && (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
};

export default UserLayout;
