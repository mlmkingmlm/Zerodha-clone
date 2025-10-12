import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { useSearchParams } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;


function App() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const tokenFromURL = searchParams.get("token");
    const savedToken = localStorage.getItem("token");
    const token = tokenFromURL || savedToken;

    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    async function verifyToken() {
      try {
        const res = await fetch(`${API_URL}/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (data.success) {
          localStorage.setItem("token", token);
          localStorage.setItem("islogin", true);
          setUser(data.user);
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("islogin");
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    verifyToken();
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status" style={{ width: "4rem", height: "4rem" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Dashboard user={user} />
        </>
      ) : (
        window.location.href = `${FRONTEND_URL}/login`
      )}
    </>
  );
}

export default App;
