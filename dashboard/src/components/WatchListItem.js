import React, { useState } from 'react'
import {
    KeyboardArrowDown,
    KeyboardArrowUp,
    
} from "@mui/icons-material";
import WatchListActions from './WatchListActions';

function WatchListItem({ stock, data }) {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    const handleMouseEnter = (e) => {
        setShowWatchlistActions(true);
    };

    const handleMouseLeave = (e) => {
        setShowWatchlistActions(false);
    }
    return (
        <>
            <li
                className="stock-item position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="itemInfo d-flex justify-content-between text-secondary border-bottom px-3 py-2">
                    <p className={stock.isDown ? "text-danger" : "text-success"}>{stock.name}</p>

                    <div className="d-flex justify-content-between w-50">
                        <span className="percent w-25">{stock.percent}</span>
                        <span className="icon w-25 d-flex justify-content-center align-items-center">
                            {stock.isDown ? (
                                <KeyboardArrowDown className="text-danger" />
                            ) : (
                                <KeyboardArrowUp className="text-success" />
                            )}
                        </span>
                        <span className="price w-25">{stock.price}</span>
                    </div>
                </div>
                <div className={`watchlist-actions ${showWatchlistActions ? "show" : ""}`}>
                    <WatchListActions uid={stock} data={data} />
                </div>
            </li>

        </>
    )
}

export default WatchListItem;
