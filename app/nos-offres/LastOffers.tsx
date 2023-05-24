"use client"

import Image from "next/image"
import test from "/public/offers-catering.jpg"
import FirstOffer from "./FirstOffer"
import SecondOffer from "./SecondOffer"
import ThirdOffer from "./ThirdOffer"
import FourthOffer from "./FourthOffer"
import FifthOffer from "./FifthOffer"


export default function LastOffers() {
    return (
        <div className="flex flex-col">
            <FirstOffer></FirstOffer>
            <SecondOffer></SecondOffer> 
            <ThirdOffer></ThirdOffer>
            <FourthOffer></FourthOffer>
            <FifthOffer></FifthOffer>
        </div>
    )
}