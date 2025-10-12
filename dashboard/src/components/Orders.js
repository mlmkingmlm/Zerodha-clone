import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL

const Orders = ({ user }) => {
  const [orders, setOrders] = useState([])
  async function getOrders() {
    try {
      // ✅ Send ID via query string
      const response = await fetch(`${API_URL}/getorders?id=${user._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data.orders)
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  }

  console.log(orders)

  useEffect(() => {
    getOrders();
  },[user]);

  return (
    <div className="text-center">
      {
        orders && orders.length>0 ? <div className="col overflow-auto">
          <table className=' w-100'>
            <thead>
              <tr className='border-top border-bottom'>
                <th className='p-3 text-secondary border-end'>Name</th>
                <th className='p-3 text-secondary'>Qty.</th>
                <th className='p-3 text-secondary border-end'>Price</th>
                <th className='p-3 text-secondary'>Total Price</th>
                <th className='p-3 text-secondary'>Mode</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((item) => {
                  return <tr key={item.id} className="border-bottom">
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.qty}</td>
                    <td className="p-3">{item.price}</td>
                    <td className="p-3">{item.price * item.qty}</td>
                    <td className={`${item.mode==="buy"?"text-success":"text-danger"}`}>{item.mode}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div> : <div>
          <p className="text-muted">You haven't placed any orders today</p>
          <Link to={"/"} className="btn btn-primary">
            Get started
          </Link>
        </div>
      }
    </div>
  );
};

export default Orders;
