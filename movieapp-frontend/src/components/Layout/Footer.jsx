import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat massa vel mauris ultricies, quis efficitur nunc aliquam.</p>
        </div>
        <div className="mb-4 lg:mb-0">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +1234567890</p>
        </div>
        <div className="mb-4 lg:mb-0">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MovieSite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
