"use client";

import React from "react";

export default function contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-indigo-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                C
              </div>
              <div className="block font-semibold text-xl self-start text-gray-700">
                Contact Us
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label htmlFor="name" className="leading-loose">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="leading-loose">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="leading-loose">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="px-4 py-2 h-32 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="bg-indigo-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
