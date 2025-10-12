import React, { useState, useRef, useEffect } from 'react'
import { VarticalGraph } from './VarticalGraph';
const API_URL = process.env.REACT_APP_API_URL

function Holdings({ user }) {
    const [holdings, setHoldings] = useState([]);
    const priceRefs = useRef({});
    const profitRefs = useRef({});
    useEffect(() => {
        async function fetchHoldings() {
            const res = await fetch(`${API_URL}/holdings?id=${user._id}`);
            const data = await res.json();
            setHoldings(data.holdings || []);
        }
        if (user?._id) fetchHoldings();
    }, [user]);

    const labels = holdings.map((subarray) => subarray["name"]);

    const data = {
        labels,
        datasets: [{
            label: 'Stock Price',
            data: holdings.map((stock) => stock.avgPrice),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
        ]
    }
    // Random price updates — NO re-render
    useEffect(() => {
        const interval = setInterval(() => {
            holdings.forEach((item) => {
                const randomChange = Math.random()*item.avgPrice + item.avgPrice/2
                const ref = priceRefs.current[item.name];
                const profitRef = profitRefs.current[item.name];
                if (ref) {
                    // Current price (take from DOM text)
                    const oldPrice = parseFloat(ref.innerText.replace("₹", "")) || item.avgPrice;
                    const newPrice = randomChange.toFixed(2)

                    // Update DOM directly
                    ref.innerText = "₹" + newPrice;
                    const profit_loss = newPrice - item.avgPrice;
                    profitRef.innerText = "₹" + profit_loss.toFixed(2)

                    // Flash green/red color on change
                    ref.style.color = newPrice > oldPrice ? "green" : "red";
                    profitRef.style.color = profit_loss>0? "green" : "red";
                }
            });
        }, 2000); // every 2s

        return () => clearInterval(interval);
    }, [holdings]);
    return (
        <>
            <h5 className="text-muted">Holdings({holdings.length})</h5>

            {
                holdings.length>0?<div className="col overflow-auto">
                <table className='mt-4 w-100'>
                    <tr className='border-top border-bottom'>
                        <th className='p-3 text-secondary border-end'>Stock Name</th>
                        <th className='p-3 text-secondary'>Qty.</th>
                        <th className='p-3 text-secondary border-end'>Avg. Price</th>
                        <th className='p-3 text-secondary'>Cur. Price</th>
                        <th className='p-3 text-secondary'>P&L</th>
                    </tr>
                    <tbody>
                        {holdings.map((item) => (
                            <tr key={item.name} className='border-bottom'>
                                <td className='p-3'>{item.name}</td>
                                <td className='p-3'>{item.qty}</td>
                                <td className='p-3'>₹{item.avgPrice.toFixed(2)}</td>
                                <td ref={(el) => (priceRefs.current[item.name] = el)} className='p-3'>
                                    ₹{item.avgPrice.toFixed(2)}
                                </td>
                                <td ref={(el) => (profitRefs.current[item.name] = el)} className='p-3'>
                                    ₹ 0.00
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>:null
            }
            <div className="row mt-5 pt-5 text-secondary text-center">
                <div className="col-12 col-md-4 mt-5">
                    <h5 className='d-flex flex-column gap-2'>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col-12 col-md-4 mt-5">
                    <h5 className='d-flex flex-column gap-2'>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className=" col-12 col-md-4 mt-5">
                    <h5 className='text-success fs-3'>1,553.40 (+5.20%)</h5>
                    <p className='mt-4'>P&L</p>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <VarticalGraph data={data} />
            </div>
        </>
    )
}

export default Holdings
