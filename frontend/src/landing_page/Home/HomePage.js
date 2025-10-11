import React from 'react'
import Hero from "./Hero"
import OpenAccount from "../OpenAccount"
import Stats from "./Stats"
import Pricing from "./Pricing"
import Eduction from './Eduction';

function HomePage() {
    return (
        <>
        <Hero/>
        <Stats/>
        <Pricing/>
        <Eduction/>
        <OpenAccount/>
        </>
    )
}

export default HomePage
