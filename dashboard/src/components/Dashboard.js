import React, {useEffect, useState} from 'react'
import WatchList from './WatchList'
import Summary from "./Summary"
import Orders from "./Orders"
import Holdings from "./Holdings"
import Positions from "./Positions"
import Funds from "./Funds"
import { Route, Routes } from 'react-router-dom'
import BuySellWindow from './BuySellWindow'

function Dashboard({user}) {
    const [selectedStock, setSelectedStock] = useState(null);
    const [actionType, setActionType] = useState('');

    function handelaction(stock, action){
        setSelectedStock(stock)
        setActionType(action);
    }    
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row mt-3">
                    <WatchList data={handelaction}/>
                    {
                        localStorage.getItem("islogin")?<div className="col-md-8 mt-5 pt-3 position-absloute">
                        <Routes>
                            <Route exact path="/" element={<Summary user={user}/>} />
                            <Route path="/orders" element={<Orders user={user}/>} />
                            <Route path="/holdings" element={<Holdings user={user}/>} />
                            <Route path="/positions" element={<Positions />} />
                            <Route path="/funds" element={<Funds />} />
                        </Routes>
                        <div className='buysell'>
                            <BuySellWindow stock={selectedStock} userid={user._id} actiontype={actionType}/>
                        </div>
                    </div>:null
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard
