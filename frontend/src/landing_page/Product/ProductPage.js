import React from 'react'
import Hero from './Hero'
import Universe from './Universe'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection imageurl="/media/images/products-kite.png" productheading="Kite" productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." firstlinkname="Try demo" secondlinkname="Learn more "/>
            <RightSection imageurl="/media/images/products-console.png" productheading="Console" productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." firstlinkname="Learn more "/>
            <LeftSection imageurl="/media/images/products-coin.png" productheading="Coin" productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."firstlinkname="Coin" secondlinkname=""/>
            <RightSection imageurl="/media/images/landing.svg" productheading="Kite Connect Api" productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." firstlinkname="Kite Connect "/>
            <LeftSection imageurl="/media/images/varsity-products.png" productheading="Varsity mobile" productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."/>
            <Universe />
        </>
    )
}

export default ProductPage
