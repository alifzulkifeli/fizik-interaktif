import React from 'react'

export default function LandingPage() {
  return (
    <section id="LandingPage" className="  bg-gray-200 || md:h-screen"  >
      <h2 className="text-center text-2xl font-extrabold font-monospace p-3 py-9 ">Selamat Datang Ke Laman Web Fizik Interaktif!</h2>
      <div className="grid grid-cols-3 md:grid-cols-12 gap-4">
        <div className=" col-span-3  bg-gradient-to-b  from-likeblue  h-auto  || md:col-span-7 md:ml-6 mx-3">
          <div className=" col-span-3  bg-likepink  h-auto mx-2 rounded-lg py-6 mt-9 || md:mx-20   md:col-span-7   ">
            <p className="text-center text-2xl font-mono font-bold">MODUL PENGAJARAN</p>
            <p className="text-center text-4xl py-4 font-serif font-bold">HUKUM GAS</p>
            <p className="text-center text-2xl ">FIZIK</p>
            <p className="text-center text-2xl">TINGKATAN 4</p>
          </div>
          <img className="object-contain h-32 mx-auto my-4 " src="/300.png" alt=""/>
          <p className="text-center text-md font-mono font-semibold ">Modul ini mengandungi peta konsep, nota, simulasi, latihan dan kuiz yang sesuai digunakan oleh guru semasa sesi PdPc dan juga rujukan tambahan kepada pelajar.</p>
          <br/>
          <p className="text-center text-md font-mono font-semibold ">Disediakan oleh: Siti Nur Anis Binti Zaidi</p>
          <p className="text-center text-md font-mono font-semibold pb-9 ">Penyelia: Dr. Anis Nazihah Binti Mat Daud</p>
        </div>
        <div className="col-span-3 md:col-span-5 bg-purple-100 h-5/6  mx-3   rounded-lg ">
          <p className="text-center text-md font-mono font-semibold mt-4  ">“I  never teach my students, I only provide the conditions in which they can learn”  </p>
          <p className="text-center text-md font-mono font-extrabold pb-9 ">-Albert Einstein</p>
          <img className="object-contain h-42 mx-auto my-4 " src="/300.png" alt=""/>
        </div>
    </div>
      
   </section>
  )
}
