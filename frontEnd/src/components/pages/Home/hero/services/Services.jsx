import React from 'react'
import RootLayout from '../../../../../layout/RootLayout'
import ServiceCard from '../../../../service/ServiceCard'
import { RiSecurePaymentLine, RiRefund2Line } from "react-icons/ri";
import { PiHeadsetFill } from "react-icons/pi";

const Services = () => {
  return (
    <RootLayout className="space-y-12">
        {/* Tag */}
        <div className="w-full flex items-center justify-center text-center">
            <h1 className="text-3xl text-neutral-800 font-bold">
                Our <span className='text-primary '>Services</span>
            </h1>
        </div>
        {/* services card */}
        <div className="w-full grid grid-cols-3 gap-10">
            <ServiceCard icon={RiSecurePaymentLine} title={"Secure Payment"} desc={"Integrate secure payment gatewaus for users to pay for their tickets."}/>
            <ServiceCard icon={RiRefund2Line} title={"Refund Policy"} desc={"Offer options for the users to purachase refundable tickets with clear terms"}/>
            <ServiceCard icon={PiHeadsetFill} title={"24/7 Support"} desc={"Get assistence through chat,email,phone"}/>
        </div>
    </RootLayout>
  )
}

export default Services