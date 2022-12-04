import React from 'react'
import SpecialOffer from '../components/SpecialOffer'


const Maincontent = () => {
  return (
    <div>
         <div><h1 className="absolute	px-40 py-80 top-10 left-60 text-[60px] font-semibold text-center " >A BRAND NEW <br/>FURNITURE</h1></div>

         <div><button className="btn absolute mx-60 my-80 py-4 px-16 top-80 left-60 bg-[#798085] text-white rounded text-[28px] font-semibold">Shop Now</button> </div>

         <div><SpecialOffer/> </div>
    </div>
  )
}

export default Maincontent