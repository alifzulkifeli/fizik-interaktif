import React from 'react'

export default function LandingPage() {
  return (
    <section id="LandingPage" className="h-screen  bg-gray-200" >
      <h2 className="text-center text-4xl font-extrabold font-monospace p-9 ">Selamat Datang Ke Laman Web Fizik Interaktif!</h2>
      <div className="grid grid-cols-3 md:grid-cols-12 gap-4">
        <div className=" col-span-3 md:col-span-7 bg-gradient-to-b  from-blue-300  h-96 md:ml-6 mx-3   ">
          <div className=" col-span-3 md:col-span-7 bg-pink-600  h-auto mx-2 md:mx-20 mt-5   rounded-lg    ">
            <p className="text-center text-2xl font-mono">MODUL PENGAJARAN</p>
            <p className="text-center text-4xl font-serif">HUKUM GAS</p>
            <p className="text-center text-4xl">FIZIK</p>
            <p className="text-center text-4xl">TINGKATAN 4</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-5 bg-purple-100 h-5/6  mx-3   rounded-lg "> </div>
    </div>
      
   </section>
  )
}
