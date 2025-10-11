import React from 'react'
import { Tooltip, Grow } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart';

function WatchListActions({uid, data}) {
    return (
        <>
            <span className="actions">
                <span>
                    <Tooltip
                        title="Buy (B)"
                        placement="top"
                        arrow
                        TransitionComponent={Grow}
                    // onClick={handleBuyClick}
                    >
                        <button className="btn btn-success mx-1" type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal" onClick={()=>data(uid, "buy")}>Buy</button>
                    </Tooltip>
                    <Tooltip
                        title="Sell (S)"
                        placement="top"
                        arrow
                        TransitionComponent={Grow}
                    >
                        <button className="btn btn-danger" type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal" onClick={()=>data(uid, "sell")} >Sell</button>
                    </Tooltip>
                    <Tooltip
                        title="Analytics (A)"
                        placement="top"
                        arrow
                        TransitionComponent={Grow}
                    >
                        <button className="btn btn-secondary mx-1">
                            <BarChartIcon className="" />
                        </button>
                    </Tooltip>
                    <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                        {/* <button className="action">
                        <MoreHoriz className="icon" />
                    </button> */}
                    </Tooltip>
                </span>
            </span>
        </>
    )
}

export default WatchListActions
