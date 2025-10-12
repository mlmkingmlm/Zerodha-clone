import React, { useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API_URL
function BuySellWindow({ stock, actiontype, userid }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otherOrders, setOtherOrders] = useState([])
  let stockPrice = stock ? stock.price : 0

  async function handleOrder() {
    if (!stockQuantity || stockQuantity <= 0) {
      setErrorMessage("⚠️ Please enter a valid stock quantity");
      setSuccessMessage("");
      setTimeout(() => {
        setErrorMessage("")
      }, 1000);
      return;
    }

    if (actiontype === "sell") {
      const currentOrder = otherOrders.find(x => x.name === stock.name);

      if (!currentOrder) {
        setErrorMessage(`⚠️ You don't own any shares of ${stock.name}`);
        setTimeout(() => setErrorMessage(""), 1500);
        return;
      }

      if (stockQuantity > currentOrder.qty) {
        setErrorMessage(`⚠️ You only own ${currentOrder.qty} shares`);
        setTimeout(() => setErrorMessage(""), 1500);
        return;
      }
    }
    try {
      setIsLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      const response = await fetch(`${API_URL}/neworder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: stock.name,
          qty: stockQuantity,
          price: stockPrice,
          mode: actiontype,
          user_id: userid
        }),
      });


      if (!response.ok) {
        throw new Error("Server returned an error");
      }

      const data = await response.json();
      setSuccessMessage(data.message || "Order Placed");
      setErrorMessage("");


      setStockQuantity(1);

      setTimeout(() => {
        setSuccessMessage("")
      }, 1000);
      setTimeout(() => {
        const modalElement = document.getElementById("exampleModal");
        const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
        modalInstance?.hide();
      }, 1000);
      fetchHoldings();
    } catch (error) {
      setErrorMessage("❌ Failed to place order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchHoldings() {
    const res = await fetch(`${API_URL}/holdings?id=${userid}`);
    const data = await res.json();
    setOtherOrders(data.holdings)
  }

  useEffect(() => {
    fetchHoldings();
  }, [otherOrders.length]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <p className="text-center p-2 border-bottom">
            {actiontype.toUpperCase()} Your Stock {stock ? stock.name : null}
          </p>


          {errorMessage && (
            <p className="text-danger text-center mt-2">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-success text-center mt-2">{successMessage}</p>
          )}

          <div className="modal-header">
            <form className="d-flex justify-content-around w-100">
              <div>
                <label className="form-label">Qty</label>
                <input
                  type="number"
                  className="form-control p-3"
                  style={{ width: 100 }}
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control p-3"
                  style={{ width: 100 }}
                  value={stock ? stock.price : 0}
                  disabled
                />
              </div>
            </form>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-footer bg-secondary-subtle">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              disabled={isLoading}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOrder}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : actiontype.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySellWindow;
