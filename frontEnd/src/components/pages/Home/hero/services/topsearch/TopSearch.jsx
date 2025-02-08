import React from 'react'
import RootLayout from '../../../../../../layout/RootLayout'
import TopSearchCard from '../../../../../topsearch/TopSearchCard'

const TopSearch = () => {
  return (
    <RootLayout className="space-y-12">
         <div className="w-full flex items-center justify-center text-center">
            <h1 className="text-3xl text-neutral-800 font-bold">
                Top Search <span className='text-primary '>Routes</span>
            </h1>
        </div>
        {/* top search tickets route card  */}

        <div className="w-full grid grid-cols-3 gap-5">
            <TopSearchCard routeFrom={"Mathura"} routeTo={"Alighar"} timeDuration={"3Hr"} price={"100"}/>
            <TopSearchCard routeFrom={"Mathura"} routeTo={"Alighar"} timeDuration={"3Hr"} price={"100"}/>
            <TopSearchCard routeFrom={"Mathura"} routeTo={"Alighar"} timeDuration={"3Hr"} price={"100"}/>
            <TopSearchCard routeFrom={"Mathura"} routeTo={"Alighar"} timeDuration={"3Hr"} price={"100"}/>
            <TopSearchCard routeFrom={"Mathura"} routeTo={"Alighar"} timeDuration={"3Hr"} price={"100"}/>
            <TopSearchCard routeFrom={"Mathura"} routeTo={"Alighar"} timeDuration={"3Hr"} price={"100"}/>
        </div>
    </RootLayout>
  )
}

export default TopSearch