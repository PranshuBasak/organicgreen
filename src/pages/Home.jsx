
import Card from '../components/Card'
import  { data } from '../assets/organic'
import { slider2 } from '../assets/img';
import { ImLeaf, ImLocation } from "react-icons/im";
import { IoEyedropSharp, IoHandRight } from "react-icons/io5";
import { PiTreeBold } from "react-icons/pi";
import { MdAir } from "react-icons/md";


export const icons = [
    {
      icon: <ImLeaf />,
      title: "Fresh Veggies & Fruits",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      desc2: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  
    },
    {
      icon: <IoHandRight />,
      title: "Fresh Veggies & Fruits",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      desc2: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  
    },
    {
      icon: <PiTreeBold />,
      title: "Fresh Veggies & Fruits",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      desc2: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  
    },
    {
      icon: <ImLocation />,
      title: "Fresh Veggies & Fruits",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      desc2: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  
    },
    {
      icon: <IoEyedropSharp />,
      title: "Fresh Veggies & Fruits",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      desc2: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  
    },
    {
      icon: <MdAir />,
      title: "Fresh Veggies & Fruits",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      desc2: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  
    },
  ]
const organic = data;
const Home = () => {
  return (
    <div className="">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[#e7e7e3]  py-20 px-10'>
        {organic.map((data, index) =>{
          return (
            <Card 
              imgSrc={data.imgSrc}
              title={data.title}
              desc={data.desc}
              btn={true}
              key={index}
            />
            
          )
        })}
        
      </div>
      <div className="relative ">
        <p className="absolute   title-head text-4xl  pt-32 text-center sm:text-6xl sm:pl-20 select-none z-10">FRESH & NON-GMO PRODUCTS</p>
        <img src={slider2} alt=""  className='w-full object-cover max-h-96 brightness-50'/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[#e7e7e3]  py-20 px-10'>
        {icons.map((data, index) =>{
          return (
            <Card 
              icon={data.icon}
              title={data.title}
              desc={data.desc}
              desc2={data.desc2}
              btn={true}
              key={index}
            />
            
          )
        })}
        
      </div>
    </div>
  )
}

export default Home