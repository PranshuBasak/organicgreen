import React from 'react'
import { FaArrowRight, FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='flex flex-col justify-around items-center gap-4 bottom-bg'>
      <div className='flex  justify-around items-start flex-col  md:flex-row'>
        <div className="p-10 flex flex-col gap-2">
          <h1 className="bottom-sub">
            About Our Farm
          </h1>
          <p className="bottom-para">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <a href="" className='bottom-link'>
            Read more...
          </a>
        </div>
        <div className="p-10 flex flex-col gap-2">
          <h1 className="bottom-sub">
            Quick Links
          </h1>
          <a href="" className='bottom-link'>
            Organic Fruits
          </a>
          <a href="" className='bottom-link'>
            Organic Vegeables
          </a>
          <a href="" className='bottom-link'>
            Non-GMO Products
          </a>
          <a href="" className='bottom-link'>
            Locally Grown Products
          </a>
        </div>
        <div className="p-10 flex flex-col gap-2">
          <h1 className="bottom-sub">
            Products
          </h1>
          <a href="" className='bottom-link'>
            Organic Fruits
          </a>
          <a href="" className='bottom-link'>
            Organic Vegeables
          </a>
          <a href="" className='bottom-link'>
            Non-GMO Products
          </a>
          <a href="" className='bottom-link'>
            Locally Grown Products
          </a>
        </div>
        <div className="p-10 flex flex-col gap-2">
          <h1 className="bottom-sub" >
            Subcsribe
          </h1>
          <p className='bottom-para'>
          Far far away behind the word mountains far from.
          </p>
          <form action="" onSubmit={() =>{}} className='relative'>
            <input type="email" className='bottom-input'/>
            <button className='absolute bg-[#B2D430] top-1 right-1 w-10 h-10 rounded-lg flex justify-center items-center'>
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
      <div className="flex text-white items-center justify-between p-10 gap-[10vw]">
        <div className="">
          ©2024 Theme:Green.  by  &nbsp;
          <a href="https://pranshubasak.co/" target='_blank' className='bottom-link'>
            pranshubasak.co 
          </a>
        </div>
        <div className="flex justify-between gap-[5vw]">
          <a href="https://twitter.com/pranshu_basak" target='_blank' className='bottom-link'>
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/pranshubasak/" target='_blank' className='bottom-link'>
            <FaInstagram />
          </a>
          <a href="https://www.instagram.com/pranshubasak/" target='_blank' className='bottom-link'>
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer