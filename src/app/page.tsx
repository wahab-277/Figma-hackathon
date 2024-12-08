import React from 'react';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';
import Header from '@/components/Header';

// Importing Great Vibes font
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

// Define a style for Helvetica
const helveticaStyle = { fontFamily: 'Helvetica, Arial, sans-serif' };

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="flex flex-row justify-center gap-x-20 bg-[#0D0D0D] h-[950px] w-full pt-11" style={helveticaStyle}>
        {/* Left */}
        <div className="mt-20">
          <h3 className={`${greatVibes.className} text-2xl text-[#FF9F0D] m-4`}>It&apos;s Quick & Amusing!</h3>
          <h1 className="text-white font-bold text-6xl m-4">
            <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
            food Quality
          </h1>
          <p className="text-white m-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Varius sed pharetra dictum neque massa congue
          </p>
          <button className="bg-[#FF9F0D] rounded-full p-4 text-white px-12 m-4 transform transition duration-300 hover:bg-[#e68a00]">See Menu</button>
        </div>

        {/* Right */}
        <div>
          <Image src="/food.png" alt="food" width={877} height={670} className="transform transition duration-300 hover:scale-105" />
        </div>
      </div>

      {/* Food Category */}
      <div className="flex flex-col bg-[#0D0D0D] justify-center items-center" style={helveticaStyle}>
        <div className="flex flex-col mb-8">
          <h2 className={`${greatVibes.className} text-[#FF9F0D] ml-44 text-2xl`}>Food Category</h2>
          <h1 className="text-white font-bold text-6xl">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h1>
        </div>

        <div className="flex gap-7 mb-8">
          <section><Image src="/plate.png" alt="plate" width={306} height={329} className="transform transition duration-300 hover:scale-110" /></section>
          <section><Image src="/burger.png" alt="burger" width={306} height={329} className="transform transition duration-300 hover:scale-110" /></section>
          <section><Image src="/pasta.png" alt="pasta" width={306} height={329} className="transform transition duration-300 hover:scale-110" /></section>
          <section><Image src="/donut.png" alt="donut" width={306} height={329} className="transform transition duration-300 hover:scale-110" /></section>
        </div>
      </div>

      {/* About Us */}
      <div className="bg-[#0D0D0D] flex justify-center items-center gap-36 mb-0" style={helveticaStyle}>
        {/* Left */}
        <div className='pt-20 pb-10'>
          <h3 className={`${greatVibes.className} text-2xl text-[#FF9F0D] mb-6`}>About Us</h3>
          <h1 className="text-white font-bold text-6xl">
            <span className="text-[#FF9F0D]">We</span> Create the best <br />
            foody product
          </h1>
          <p className="text-[#C3C3C3] mt-12 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br />
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br />
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />
            consequat.
          </p>
          <p className="text-[#C3C3C3] mb-4 text-xl">Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <p className="text-[#C3C3C3] mb-4 text-xl">Quisque diam pellentesque bibendum non dui volutpat fringilla</p>
          <p className="text-[#C3C3C3] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <button className="bg-[#FF9F0D] rounded-full p-4 text-white px-12 mt-8 transform transition duration-300 hover:bg-[#e68a00]">Read More</button>
        </div>

        {/* Right */}
        <div>
          <div className="mb-4">
            <Image src="/egg.png" alt="egg" width={660} height={330} className="transform transition duration-300 hover:scale-105" />
          </div>
          <div className="flex flex-row gap-x-4">
            <div><Image src="/malaiboti.png" alt="malaiboti" width={322} height={194} className="transform transition duration-300 hover:scale-105" /></div>
            <div><Image src="/cc.png" alt="cc" width={322} height={194} className="transform transition duration-300 hover:scale-105" /></div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="flex gap-11 bg-[#0D0D0D] mt-0 pt-6 justify-center" style={helveticaStyle}>
        {/* Left */}
        <div className="flex flex-col">
          {/* Upper */}
          <div className="flex gap-3 mb-3">
            <div><Image src="/salad.png" alt="salad" height={356} width={362} className="transform transition duration-300 hover:scale-110" /></div>
            <div><Image src="/berger.png" alt="berger" height={231} width={281} className="mt-32  transform transition duration-300 hover:scale-110" /></div>
          </div>

          {/* Lower */}
          <div className="flex gap-3">
            <div><Image src="/chicken.png" alt="chicken" height={244} width={306} className="transform transition duration-300 hover:scale-110" /></div>
            <div><Image src="/cheese.png" alt="cheese" height={226} width={221} className="transform transition duration-300 hover:scale-110" /></div>
            <div className="flex flex-col">
              <div className="flex flex-col mb-3">
                <Image src="/fries.png" alt="fries" height={168} width={161} className="transform transition duration-300 hover:scale-110" />
              </div>
              <div>
                <Image src="/biryani.png" alt="biryani" height={166} width={161} className="transform transition duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='mt-[50]'>
          <h3 className={`${greatVibes.className} text-[#FF9F0D] text-2xl  mb-[35]`}>Why Choose us</h3>
          <h1 className='text-white text-6xl font-bold mb-7'><span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste
            <br /> And Experienced </h1>
          <p className='text-gray-200 mb-14 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br /> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br /> consequat.</p>

          <div className='gap-10 flex mb-5'>
            <section className='bg-yellow-400 text-white p-12 transform transition duration-300 hover:bg-yellow-500'>Fastc</section>
            <section className='bg-yellow-400 text-white p-12 transform transition duration-300 hover:bg-yellow-500'>Lunch</section>
            <section className='bg-yellow-400 text-white p-12 transform transition duration-300 hover:bg-yellow-500'>Diner</section>
          </div>

          <Image src={"/experienc.png"} alt='experience' width={374} height={93} />
        </div>
      </div>

      <div className='bg-[#0D0D0D] pt-44 pb-44'>
        <div className='flex justify-center items-center text-white font-bold text-2xl gap-40'>
          <div className='flex flex-col text-center justify-center '><Image src={"/Group (1).png"} alt='group' width={120} height={120} className="transform transition duration-300 hover:scale-110" />Professional Chefs<br />420</div>
          <div className='flex flex-col text-center justify-center'><Image src={"/Group.png"} alt='group' width={120} height={120} className="transform transition duration-300 hover:scale-110" />Item of food<br />320</div>
          <div className='flex flex-col text-center justify-center'><Image src={"/Group (2).png"} alt='group' width={120} height={120} className="transform transition duration-300 hover:scale-110" />Years of Experience<br />30+</div>
          <div className='flex flex-col text-center justify-center'><Image src={"/Group (3).png"} alt='group' width={120} height={120} className="transform transition duration-300 hover:scale-110" />Happy Customers<br />220</div>
        </div>
      </div>

      <div className="flex flex-col bg-[#0D0D0D] justify-center items-center" style={helveticaStyle}>
        <div className='flex flex-col mb-8'>
          <h2 className={`${greatVibes.className} text-[#FF9F0D] ml-44 text-2xl`}>Chef</h2>
          <h1 className='text-white font-bold text-6xl mb-4'><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h1>
        </div>

        <div className="flex gap-7 mb-8">
          <section><Image src={"/Card 1.png"} alt="plate" width={306} height={329} className="transform transition duration-300 hover:scale-110" /></section>
          <section><Image src={"/Card 2.png"} alt="burger" width={306} height={329} className="transform transition duration-300 hover:scale-110" /></section>
          <section><Image src={"/Card 3.png"} alt="pasta" width={306} height={329} className="transform transition duration-300 hover:scale-110" /></section>
          <section><Image src={"/Card 4.png"} alt="donut" width={306} height={329} className="transform transition duration-300 hover:scale-110" /></section>
        </div>
      </div>

      <div className="bg-black text-white py-16 pt-40">
  <div className="text-start ml-60">
    {/* "Testimonials" with Great Vibes font */}
    <h2 className="text-yellow-500 text-2xl font-semibold" style={{ fontFamily: "'Great Vibes', cursive" }}>
      Testimonials
    </h2>
    {/* "What our client are saying" with Helvetica font */}
    <h3 className="text-4xl font-bold mt-2" style={{ fontFamily: "Helvetica, sans-serif" }}>
      What our client are saying
    </h3>
  </div>

  <div className="flex flex-col items-center mt-12">
    {/* Testimonial Card */}
    <div className="bg-white text-black p-8 rounded-lg shadow-lg relative max-w-2xl">
      {/* User Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <Image
          src="/profile.png" // Replace with your image path
          alt="Client"
          className="w-24 h-24 rounded-full border-4 border-white"
        ></Image>
      </div>

      {/* Quote Icon */}
      <div className="text-yellow-500 text-3xl text-center mt-8">❝</div>

      {/* Testimonial Content */}
      <p className="text-center text-gray-700 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        diam pellentesque bibendum non dui volutpat fringilla bibendum.
        Ultrices mattis sed vitae mus risus.
      </p>

      {/* Rating */}
      <div className="flex justify-center items-center mt-4 text-yellow-500">
        {[...Array(5)].map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

      {/* Client Info */}
      <div className="text-center mt-4">
        <h4 className="text-lg font-bold">Alamin Hasan</h4>
        <p className="text-sm text-gray-500">Food Specialist</p>
      </div>
    </div>

    {/* Pagination Dots */}
    <div className="flex space-x-2 mt-8">
      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
    </div>


    
  </div>

  
</div>



<div className="bg-[url('/banner.png')] bg-cover bg-center h-96">
  {/* Your content goes here */}

</div>


   {/* Food Category */}
   <div className="flex flex-col bg-[#0D0D0D] justify-center items-center pt-40" style={helveticaStyle}>
        <div className="flex flex-col mb-8">
          <h2 className={`${greatVibes.className} text-[#FF9F0D] ml-32 text-2xl`}>Blog Post</h2>
          <h1 className="text-white font-bold text-4xl">
            <span className="text-[#FF9F0D]">La</span>test News & Blog
          </h1>
        </div>

        <div className="flex gap-7 mb-8 ">
          <section><Image src="/burger.png" alt="burger" width={306} height={200} className="pb-[13] border border-white rounded transform transition duration-300 hover:scale-110" /></section>
          <section><Image src="/pizza.png" alt="pizza" width={306} height={200} className=" pb-[85] border border-white rounded transform transition duration-300 hover:scale-110" /></section>
          <section><Image src="/salad.png" alt="salad" width={306} height={200} className=" pb-10  border border-white rounded transform transition duration-300 hover:scale-110" /></section>
        </div>
      </div>


      <div className='bg-[#0D0D0D] flex flex-col p-52 justify-between'>
  <div className='text-3xl text-white font-bold' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
    <span className='text-[#FF9F0D]'>St</span>ill You Need Our Support?
    <br />
    <p className='text-gray-200 text-lg font-light mt-2' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      Don&apos;t wait make a smart & logical quote here. Its pretty easy.
    </p>

    <div className='flex'>
      <div className='bg-yellow-500 text-white'>Enter Your Email</div>
      <div></div>
    </div>
  </div>


<div className='flex justify-center items-center mt-10'>
<div className="w-[100vw] h-1 bg-yellow-500 "></div>
</div>
</div>

    </>
  );
};

export default Home;
