import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div className='bg-cover bg-center  bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/967783161126011.63c01b2d99746.gif)] h-screen flex pt-8 justify-between flex-col w-full'>
           <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="logo" className='w-20 ml-9'/>
           <div className="bg-white pb-7 py-4 px-4 sticky bottom-0">
               <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
               <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-2 rounded-lg mt-5 text-lg'>Continue</Link>
           </div>
        </div>
    );
};

export default Start;