import React, { useEffect } from 'react'

const RootLayout = () => {

    useEffect((children,className) =>{
        window.scrollTo(0,0);
    })
  return (
    <div className={`w-full lg:px-24 md:px-16 sm:px-7 px-4 ${className}`}></div>
  )
}

export default RootLayout