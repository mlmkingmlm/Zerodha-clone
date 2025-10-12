import React, {useState, useEffect} from 'react'
const API_URL = process.env.REACT_APP_API_URL


function Positions() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const fetchpositions = async () => {
            try {
                const response = await fetch(`${API_URL}/allpositions`);
                const data = await response.json();
                setPositions(data);
            } catch (error) {
                console.error("Error fetching holdings:", error);
            }
        }
        fetchpositions();
    },[])
    return (
        <>
            <h3 className="text-secondary">Positions({positions.length})</h3>

            <div className="col overflow-auto mb-5">
                <table className='mt-4 w-100'>
                    <tr className='border-top border-bottom'>
                        <th className='p-3 text-secondary border-end'>Product</th>
                        <th className='p-3 text-secondary'>Instrument</th>
                        <th className='p-3 text-secondary'>Qty.</th>
                        <th className='p-3 text-secondary border-end'>Avg.</th>
                        <th className='p-3 text-secondary'>LTP</th>
                        <th className='p-3 text-secondary'>P&L</th>
                        <th className='p-3 text-secondary'>Chg.</th>
                    </tr>
                    {positions.map((stock, index) => {
                        const curValue = stock.price * stock.qty;
                        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                        const profClass = isProfit ? "text-success" : "text-danger";
                        const dayClass = stock.isLoss ? "text-danger" : "text-success";

                        return (
                            <tr key={index} className='border-bottom'>
                                <td className='p-3'>{stock.product}</td>
                                <td className='p-3'>{stock.name}</td>
                                <td className='p-3'>{stock.qty}</td>
                                <td className='p-3'>{stock.avg.toFixed(2)}</td>
                                <td className='p-3'>{stock.price.toFixed(2)}</td>
                                <td className={`${profClass} p-3`}>
                                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                                </td>
                                <td className={`${dayClass} p-3`}>{stock.day}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    )
}

export default Positions
