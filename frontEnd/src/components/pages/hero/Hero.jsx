import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {

    const variation = {
        hidden: {opacity: 0, y: -800},
        visible: {opacity: 1, y: 0}
    }
  return (
    <motion.div className='w-full flex-1 h-screen bg-cover bg-[url("./assets/hero.png")] bg-no-repeat bg-top relative'>

    </motion.div>
  )
}

export default Hero