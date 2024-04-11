import Image from "next/image";

export default function Home() {
  return (
    <main className="justify-center min-h-screen bg-[#fb921a]">
      <div className="w-full">
        {/* horizontal navbar */}
        <nav className="bg-[#ffb703] relative">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10 pt-5">
            <div className="flex items-center space-x-3">
              <Image src="/logo.PNG" alt="Carbon" width={80} height={80}/>
              <span className="text-3xl font-semibold whitespace-nowrap dark:text-black">Hindu YUVA UIUC</span>
            </div>
            <div className="block pb-4">
              <ul className="flex flex-col font-medium md:p-0 mt-4 borderrounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row">
              <li>
                  <a className="block py-2 pr-3 text-black hover:text-red-900 rounded">Team</a>
                </li>
                <li>
                  <a className="block py-2 pr-3 text-black hover:text-red-900 rounded">Events</a>
                </li>
                <li>
                  <a className="block py-1 pl-3 pr-3 my-1 text-white bg-[#ae4225] rounded">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="custom-shape-divider-top-1712860733">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div className="w-full p-10">
          <h1 className="text-5xl text-white pb-10 pt-10 text-center font-bold">"Arise, awake, and stop not until the goal is achieved."</h1>
          <h1 className="text-3xl text-white text-center font-serif italic">- Swami Vivekananda</h1>
      </div>
      <div className="custom-shape-divider-bottom-1712864080">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>     
      </div>
      <div className="bg-[#e75480] h-20">

      </div>
      <div className="bg-[#e75480] h-screen pt-18">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className=" text-white bg-[#e75480] lg:h-screen h-fit">
                    <div className="flex items-center justify-left w-full h-full p-10">
                        <div className="w-full">     
                            <h1 className="text-5xl font-extrabold text-white w-full pb-5">CULTURE</h1>
                            <p className="text-lg text-white w-full pb-8">
                                Celebrating the vibrant culture of India, Hindu YUVA UIUC is a student organization that aims to promote the values of Hinduism and Indian culture. We host a variety of events throughout the year, including Garba, Diwali, and Holi, to bring the community together and celebrate our rich heritage.
                            </p>
                        </div>
                    </div>                 
                </div>
                <div className="text-white bg-[#e75480] lg:h-screen h-fit w-full">
                    <div className="flex items-center justify-center w-full h-full px-10 pt-5">
                        {/* image 6704 */}
                        <Image src="/temple.png" alt="6704" width={650} height={650} className="rounded-[15px]"/>       
                    </div>
                </div>
                <div className=" text-white bg-[#e75480] lg:h-screen h-fit">
                    <div className="flex items-center justify-left w-full h-full p-10">
                        <div className="w-full">     
                            <h1 className="text-5xl font-extrabold text-white w-full pb-5">COMMUNITY</h1>
                            <p className="text-lg text-white w-full pb-8">
                                Hindu YUVA UIUC is more than just a cultural organization – it’s a community. Our flagship space the Vivekananda House features a library, vegetarian kitchen, and multipurpose hall open to all. At Vivekananda House we also host weekly discussions, yoga classes, and other events to foster a sense of belonging and connection among our community.
                            </p>
                        </div>
                    </div>                 
                </div>
                <div className="text-white bg-[#e75480] lg:h-screen h-fit w-full">
                    <div className="flex items-center justify-center w-full h-full px-10 pt-5">
                        {/* image 6704 */}
                        <Image src="/fire.png" alt="6704" width={550} height={550} className="rounded-[15px]"/>       
                    </div>
                </div>
            </div>
            <div className="bg-[#e75480] h-20 w-full items-center pt-5">
              <p className="text-center text-[9px]">Designed and Maintained by Raghav Tirumale</p>
            </div>      
      </div>
      
    </main>
  );
}
