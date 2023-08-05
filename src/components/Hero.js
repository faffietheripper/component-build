"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="text-black">
      <div className="pb-12 bg-gray-200 overflow-y-hidden">
        <div className="w-full px-6">
          <div className="mt-8 relative  bg-gray-300 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-5xl text-center font-bold leading-tight">
                One price for a full stack
              </h1>
              <h3 className="text-xl text-center leading-tight">
                {" "}
                We offer the entire course, 101 - 301 for a simple affordable
                price.
              </h3>
            </div>
          </div>
          <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
            <div className="relative h-[500px] w-11/12">
              <section className="grid grid-cols-5 ">
                <section class="px-12 py-12 bg-white h-[400px] col-span-3 ">
                  <div>
                    <h2 className="font-bold text-2xl pb-2">
                      In Person or Online
                    </h2>
                    <p>
                      In this 10 week daytime, or 20 week evening and coding
                      bootcamp, we will focus on building react apps, using
                      Mongo, ExpressJs, React and NodeJS
                    </p>
                  </div>
                  <div className="grid grid-cols-2 py-6">
                    <h3 className="text-blue-600">WHATS INCLUDED</h3>
                    <hr className="border-gray-300 w-full" />
                  </div>
                  <section className="grid grid-cols-2 gap-4">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="green"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="ml-4">Instructor Led Tuition</p>
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="green"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="ml-4">3-month post graduation mentorship</p>
                    </div>

                    <div className="flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="green"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="ml-4">Interview Preparation and support</p>
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="green"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="ml-4">
                        Globally Recognised Course Material
                      </p>
                    </div>
                  </section>
                </section>

                <section class="text-center py-12 bg-gray-100 h-[400px] col-span-2">
                  <h5 className="py-6">Learn to code</h5>
                  <div className="flex">
                    <h1 className="text-5xl ml-48 pb-6 text-center text-black font-bold">
                      £5,500.00
                    </h1>
                    <span> GBP</span>
                  </div>

                  <button class="inline-block rounded bg-blue-600 px-12 py-3 w-10/12 font-medium text-white ">
                    {" "}
                    Book Now
                  </button>
                  <p className="py-6 text-gray-500">*Payment Plans available</p>
                  <p className="text-gray-500">
                    *Funding & Scholarships Available
                  </p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
