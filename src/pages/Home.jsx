import fotohome from '../assets/fotospa.jpeg'

export function Home() {
  return (
   
          <main className="mt-4 mx-auto lg:flex max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-8 lg:px-8 xl:mt-4 lg:flex-grow">
            <div className="sm:text-center lg:text-left w-1/2">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Amore</span>{' '}
                <span className="block text-indigo-600 xl:inline">Suites & Spa</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Offering the most powerful portfolio in

                  the industry, our brands and

                  properties across countries and

                  territories give people more ways to

                  connect, experience and expand their

                  world.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    About
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Bussines Plan
                  </a>
                </div>
              </div>
            </div>
      <div className=" lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={fotohome}
          alt=""
        />
      </div>
          </main>
        
    
  )
}
