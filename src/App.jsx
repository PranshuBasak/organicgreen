import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home, About, Gallery, Contact } from './pages'
import Carousal from './components/Carousal'

import Footer from './components/Footer'



function App() {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });
  // const backgroundY = useTransform(scrollYProgress, [0,1],["0%","100%"]);
  // const textY = useTransform(scrollYProgress, [0,1],["0%","200%"]);

  return (
    <div className='relative'>
      <Navbar />
      <Carousal />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
