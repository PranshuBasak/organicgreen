import { useState } from 'react'
import { slider1, slider2 } from '../assets/img'
import './Carousal.css'
import { AnimatePresence, motion } from 'framer-motion'


const slider = [
    slider1,
    slider2
]

const variants = {
    initial: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
      scale: 0.5,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut"},
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3, ease: "easeInOut"},
    }),
  };

const Carousal = () => {

    const [index, setIndex] = useState(1);
    const [direction, setDirection] = useState(0)
    function nextImg(){
        setDirection(1)
        if(index === slider.length -1){
            setIndex(0);
            return
        }
        setIndex(index + 1)
    }
    function prevImg(){
        setDirection(-1)
        if(index === 0){
            setIndex(slider.length -1)
            return
        }
        setIndex(index - 1)
    }

  return (
    <div className="container min-w-full relative">
        <div className="slideshow">
            <AnimatePresence custom={direction}>
                <motion.img 
                    variants={variants} 
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    custom={direction}
                    src={slider[index]} 
                    key={slider[index]}
                    alt="slides" 
                    className="sliders" />
            </AnimatePresence>
            <button className="prevbtn btn hidden sm:block " onClick={prevImg}>&lt;</button>
            <button className="nextbtn btn hidden sm:block" onClick={nextImg}>&gt;</button>
        </div>
        <div className='absolute'>

          <h1 className='title-head pt-10 text-4xl text-center sm:text-6xl md:text-7xl lg:text-9xl select-none' >
            100% Organic
          </h1>
          <p className='title-name select-none'> Created By @Pranshu Basak</p>
        </div>
    </div>
  )
}

export default Carousal