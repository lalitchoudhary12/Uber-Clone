import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ContactUs = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center p-6 bg-white rounded-lg">
        <button
          onClick={goBack}
          className="absolute top-4 left-4 p-2 text-black"
        >
          <i className="ri-arrow-left-line text-3xl"></i> {/* Remix Icon Back Arrow */}
        </button>
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">
          If you're facing any issues or have any queries related to our service, please feel free to reach out to us. We're here to help!
        </p>
        <p className="text-xl font-semibold">
          Email: <a href="mailto:lalitc77097@gmail.com" className="text-blue-500 hover:text-blue-700">lalitc77097@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
