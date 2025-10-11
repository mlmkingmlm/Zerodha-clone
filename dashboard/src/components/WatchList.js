import React from 'react'
import { watchlist } from "../data/data"
import WatchListItem from "./WatchListItem"
import { WatchListGraph } from './WatchListGrap'

function WatchList({ data }) {
    const labels = watchlist.map((stock) => stock["name"]);

    const stocks = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: watchlist.map((stock)=> stock.price),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ]
    }
    return (
        <>
            <div className="col-md-4 pt-2 border-end">
                <ul className='mt-3'>
                    {
                        watchlist.map((stock, index) => {
                            return (
                                <WatchListItem stock={stock} key={index} data={data} />
                            )
                        })
                    }
                </ul>
                <WatchListGraph data={stocks} />
            </div>
        </>
    )
}

export default WatchList
