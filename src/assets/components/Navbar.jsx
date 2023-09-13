import React from 'react'
import Call from '../images/call_us.svg';
import Phone from '../images/Phone.svg';
import Mail from '../images/mail.svg';
import MailOut from '../images/Mail_outline.svg';
import background from '../images/bg.svg';
import handygal from '../images/handygirl.svg';
import copyright from '../images/Copyright.svg';
import hamburg from '../images/hamburger.svg';

 /**
  * Renders a navigation bar with contact information and a form for requesting services.
  */
 const Navbar = () => {
   return (
     <div className='w-full h-[100px] md:bg-white border-b'>
       {/* Contact Information */}
       <div className='hidden md:flex md:max-w-[1480px] sm:bg-black md:bg-white w-full h-full flex gap-4 justify-around items-center m-auto'>
         <div className='w-[60px] h-[60px] bg-gray-300' />
         <ContactInfo icon={Call} text='+254 715 555 351' />
         <ContactInfo icon={Mail} text='info@app.com' />
       </div>

       {/* Main Navigation Menu */}
       <div className='hidden md:flex max-w-[100%] w-full h-[60px] flex gap-4 bg-gray-900 justify-start items-center m-auto'>
         <ul className='hidden md:flex w-50% items-center justify-end gap-4 text-white ml-20'>
           <li>Home</li>
           <li>About us</li>
           <li>Services</li>
           <li>Contact</li>
         </ul>
       </div>

       {/* Request Services Section */}
       <div className='xs:max-w-full max-w-[100%] w-full xs:h-[700px] md:h-[500px] lg:h-[800px] flex xs:flex-col md:flex-row gap-4 relative overflow-hidden xs:bg-cover bg-center md:bg-cover bg-no-repeat justify-around items-center m-auto' style={{ backgroundImage: `url(${background})` }}>
        <div className='flex justify-between md:hidden md:max-w-[1480px] w-full items-center mt-[20px]'>
              <p className='text-sm pl-[20px] text-white'>Handy Man</p>
              <ContactInfo icon={hamburg} text='' />
        </div>
         <div className='hidden md:flex md:w-[564px] lg:w-[564px] xl:w-[700px] md:h-[180px] lg:h-[180px] lg:h-[250px] ml-20'>
           <p className='flex gap-4 font-bold text-white md:text-5xl lg:text-5xl xl:text-7xl flex-wrap'>The <span className='text-amber-500'>Best</span> and <span className='text-amber-500'>Most</span> Accessible Service <span> Providers</span> </p>
         </div>
         <div className=' xs:w-[400px] md:w-[400px] lg:w-[600px] xs:h-[600px] md:h-[400px] lg:h-[550px] bg-black xs:bg-opacity-30 md:bg-opacity-60'>
           <div className='flex xs:jusftify-start md:justify-center items-center xs:mt-[30px] md:mt-[30px] xl:mt-[50px]'>
             <p className='md:text-4xl lg:text-7xl xs:pl-[20px] xs:mb-[20px] text-white'>Request Services </p>
           </div>
           <form className='ml-[20px] mr-[20px]'>
             <div className='grid gap-6 md:mb-2 lg:mb-9 md:grid-cols-2'>
               <div>
                 <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
                 <input type="text" id="first_name" className="bg-transparent-50 border border-white-300 text-white-900 text-sm focus:ring-white focus:border-white block w-full p-2.5 dark:bg-transparent dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="John" required />
               </div>
               <div className='xs:mb-9 md:mb-2'>
                 <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                 <input type="text" id="phone" className="bg-transparent-50 border border-white-300 text-white-900 text-sm focus:ring-white focus:border-white block w-full p-2.5 dark:bg-transparent dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="+254" required />
               </div>
             </div>
           </form>
           <form className='ml-[20px]'>
             <div className='grid md:gap-6 xs:mb-9 md:mb-2 lg:mb-9 md:grid-cols-2'>
               <div className='xs:w-[360px] md:w-[350px] lg:w-[560px]'>
                 <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                 <input type="text" id="first_name" className="bg-transparent-50 border border-white-300 text-white-900 text-sm focus:ring-white focus:border-white block w-full p-2.5 dark:bg-transparent dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="" required />
               </div>
             </div>
           </form>
           <form className='ml-[20px]'>
             <div className='grid gap-6 xs:mb-9 md:mb-6 lg:mb-9 md:grid-cols-2'>
               <div className=' xs:w-[360px] md:w-[350px] lg:w-[560px]'>
                 <label htmlFor="search-dropdown" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service</label>
                 <button type="text" id="dropdown-button" data-dropdown-toggle="dropdown" className="h-[49px] bg-transparent-50 border border-white-300 text-white-900 text-sm focus:ring-white focus:border-white block w-full p-2.5 dark:bg-transparent dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="" required>
                   <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                   </svg>
                 </button>
                 <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                   <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                     <li>
                       <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Electrician</a>
                     </li>
                     <li>
                       <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Plumber</a>
                     </li>
                     <li>
                       <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Laundry</a>
                     </li>
                     <li>
                       <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tv mounting</a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
             <button type="submit" className="text-white bg-amber-500 hover:bg-bamber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm xs:w-[360px] md:w-full lg:w-[260px] sm:w-auto px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-500">Request</button>
           </form>
         </div>
       </div>
       <div className='flex xs:ml-[80px] md:ml-[150px] mt-[50px] xs:mb-[20px]'>
         <p className='flex font-bold gap-2 xs:text-3xl md:text-5xl flex-wrap'> About <span className='text-amber-500'>us</span></p>
       </div>
       <div className='flex justify-around items-center'>
         <div className='flex flex-col md:w-[600px] gap-4 md:ml-[50px] xs:pl-[40px]'>
           <p className='text-xl'>Welcome to [Your Website Name], your trusted platform for connecting Kenyans with skilled and reliable handymen. We understand that finding the right plumber, electrician,or painter can be a daunting task.
             That's why we're here to simplify the process, making it easier for you to get the help you need, when you need it.
           </p>
           <p className='text-xl'>
             Our mission is simple: to bridge the gap between Kenyan homeowners and skilled tradespeople. We believe that everyone deserves access to high-quality
             services that can transform their living spaces. Whether it's fixing a leaky faucet, rewiring your home, or giving your walls a fresh coat of paint,
             we're committed to helping you find the right professionals for the job.
           </p>
         </div>
         <div className='hidden md:flex md:flex flex-column justify-end'>
           <img src={handygal} alt="Handygal" />
         </div>
       </div>

       <div className='flex xs:gap-8 xs:flex-col md:flex-row xs:justify-center xs:items-center md:justify-around xl:justify-center items-center xs:mt-[50px] md:mt-[150px]'>
        <div className='flex bg-black xs:w-[350px] xs:h-[120px] sm:w-[550px] xl:w-[800px] md:h-[257px] justify-center items-center rounded mb-[50px]'>
          <div className='flex gap-2 justify-center items-center'>
            <div className='flex items-center justify-center bg-grey xs:w-[40px] xs:h-[40px] w-[130px] md:h-[130px] rounded-full '>
              <img src={Phone} alt='Icon' />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-sm text-white pl-[50px]'>Call us for service</p>
            <p className='font-bold text-xl text-white pl-[50px]'>+254 715 555 351</p>
          </div>
        </div>
        <div className='flex bg-amber-500 xs:w-[350px] xs:h-[120px] sm:w-[550px] md:h-[257px] xl:w-[800px] justify-center items-center rounded mb-[50px]'>
            <div className='flex items-center justify-center bg-white xs:w-[40px] xs:h-[40px] md:w-[130px] md:h-[130px] rounded-full '>
              <img src={MailOut} alt='Icon' />
            </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-sm text-white pl-[50px]'>Mail us anytime</p>
            <p className='font-bold text-xl text-white pl-[50px]'>info@app.com</p>
          </div>
        </div>
       </div>

       {/* Footer */}
       <div className='max-w-[100%] w-full xs:h-[60px] md:h-[100px] flex gap-4 bg-black justify-start items-center m-auto relative z-10'>
         <div className='flex w-[100%] items-center justify-center items-center gap-4 text-white xs:ml-10px md:ml-20'>
            <img src={copyright} alt='Icon' />
            <p> Handyman App.2023</p>
         </div>
       </div>
     </div>
   );
 };

 const ContactInfo = ({ icon, text }) => {
   return (
     <div className='flex gap-2 justify-center items-center'>
       <div className='flex items-center justify-center bg-black w-[40px] h-[40px] rounded-full'>
         <img src={icon} alt='Icon' />
       </div>
       <p className='text-sm font-bold'>{text}</p>
     </div>
   );
 };

 export default Navbar;
