import React, { useState } from 'react'
import PriceRangeSlider from '../../../pricerange/PriceRangeSlider'

const Filter = ({className}) => {
    const [rangeValues,setRangeValues] = useState({
        min:0,
        max:100,
    })

    const handleRangeChange = (values)=>{
        setRangeValues({values})
    }
  return (
    <div className={`w-full ${className}`}>
        <h1 className="text-xl text-neutral-700 font-semibold">
            Apply Filters
        </h1>
        {/* price filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
        <h1 className="text-lg text-neutral-600 font-medium">
            Apply Filters
        </h1>
        <PriceRangeSlider 
            min={1000}
            max={3000}
            onChange={handleRangeChange}
        />
        </div>
        {/* bus types filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">
            Bus Types
        </h1>
        <div className="space-y-2 5">
            <div className="w-full flex items-center gap-2">
                <input type="checkbox" id='ac' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                    AC Delux <span className="text-xs text-neutral-600">(10)</span>
                </label>
            </div>
            <div className="w-full flex items-center gap-2">
                <input type="checkbox" id='Tourist' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                <label htmlFor="Tourist" className="text-sm text-neutral-600 font-normal cursor-pointer">
                    Tourist AC Delux <span className="text-xs text-neutral-600">(10)</span>
                </label>
            </div>
        </div>
        <div className="space-y-2 5">
            <div className="w-full flex items-center gap-2">
                <input type="checkbox" id='Air' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                <label htmlFor="Air" className="text-sm text-neutral-600 font-normal cursor-pointer">
                    Air Suspension <span className="text-xs text-neutral-600">(10)</span>
                </label>
            </div>
            <div className="w-full flex items-center gap-2">
                <input type="checkbox" id='Luxury' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                <label htmlFor="Luxury" className="text-sm text-neutral-600 font-normal cursor-pointer">
                    Luxury AC Delux <span className="text-xs text-neutral-600">(10)</span>
                </label>
            </div>
        </div>
        </div>
        {/* amenities filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
            
        </div>
    </div>
  )
}

export default Filter