import Image from "next/image";
import React from 'react';



const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-1 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Stay Connected Like Never Before</h2>
          <p className="text-lg mb-8">
            Tomo is your ultimate chat companion, designed to keep you connected with your loved ones seamlessly and securely.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-md shadow-lg hover:bg-gray-100">
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-blue-600"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-10">
          {/* <img
            src="https://via.placeholder.com/600x400"
            alt="Chat App Screenshot"
            className="mx-auto rounded-lg shadow-xl"
          /> */}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Why Choose Tomo?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold mb-4">Secure Messaging</h4>
              <p className="text-gray-600">End-to-end encryption ensures your conversations stay private and secure.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold mb-4">Seamless Connectivity</h4>
              <p className="text-gray-600">Connect with friends and family instantly, no matter where you are.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold mb-4">Customizable Themes</h4>
              <p className="text-gray-600">Personalize your chat experience with a variety of themes and settings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Simple and Transparent Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold mb-4">Free Plan</h4>
              <p className="text-gray-600 mb-4">Ideal for individuals who want to stay connected.</p>
              <p className="text-2xl font-bold">$0/month</p>
              <ul className="mt-4 space-y-2">
                <li>✔ Unlimited Messaging</li>
                <li>✔ Basic Features</li>
                <li>✔ Community Support</li>
              </ul>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold mb-4">Pro Plan</h4>
              <p className="text-gray-600 mb-4">Perfect for power users and small teams.</p>
              <p className="text-2xl font-bold">$9.99/month</p>
              <ul className="mt-4 space-y-2">
                <li>✔ Everything in Free Plan</li>
                <li>✔ Advanced Features</li>
                <li>✔ Priority Support</li>
              </ul>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold mb-4">Enterprise Plan</h4>
              <p className="text-gray-600 mb-4">Custom solutions for large organizations.</p>
              <p className="text-2xl font-bold">Contact Us</p>
              <ul className="mt-4 space-y-2">
                <li>✔ All Pro Plan Features</li>
                <li>✔ Dedicated Support</li>
                <li>✔ Custom Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Tomo. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="text-blue-500 hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;




export const metadata = {
  title: 'Tomo',  
  description: 'Built to connect',
}