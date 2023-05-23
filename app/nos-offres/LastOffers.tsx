"use client"

import Image from "next/image"
import test from "/public/offers-catering.jpg"
import FirstOffer from "./FirstOffer"
import SecondOffer from "./SecondOffer"


export default function LastOffers() {
    return (
        <div className="flex flex-col">
            <FirstOffer></FirstOffer>
            <SecondOffer></SecondOffer> 
            <FirstOffer></FirstOffer>
            <SecondOffer></SecondOffer> 
            <FirstOffer></FirstOffer>
        </div>
    )
}