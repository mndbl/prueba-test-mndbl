import fotohome from '../assets/fotospa.jpeg'
import bigBus from '../assets/big-bus.png'
import bikeAndRoll from '../assets/bike-and-roll.png'
import deeringState from '../assets/deering-state.png'
import fairChild from '../assets/fairchild.png'
import fullBlom from '../assets/fullblom.png'
import miami from '../assets/miami-pura-vida.png'
import planta from '../assets/planta.png'
import bayFront from '../assets/bayFront.jpg'
import brickelCityCenter from '../assets/brickelCityCenter.jpg'
import instOfContArt from '../assets/instOfContArt.jpg'
import miamiDesignDistrict from '../assets/miamiDesignDistrict.jpg'
import museumOfScience from '../assets/museumOfScience.jpg'
import perezArtMuseum from '../assets/perezArtMuseum.jpg'
import portMiami from '../assets/portMiami.jpg'
import winwoodArtDistrict from '../assets/winwoodArtDistrict.jpg'


export function Home() {
  return (
    <>
      <main className="mt-4 mx-auto lg:flex max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-8 lg:px-8 xl:mt-4 lg:flex-grow">
        <div className="sm:text-center lg:text-left lg:w-1/2">
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
          <div className="mt-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/about"
                className="no-underline w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                About
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="business-plan"
                className="no-underline w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Business Plan
              </a>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <br />
      </main>
      <section id="partners" className="my-4 block px-6 mx-auto">
        <h1 className="text-4xl shadow-lg py-2 pl-4 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl block">Partners</h1>
        <div className="grid grid-cols-4 lg:grid-cols-7 p-4 my-6 gap-2 items-center">
          <a href="https://www.bigbustours.com"><img className="w-2/3" src={bigBus} alt="" /></a>
          <a href="https://bikemiami.com/"><img className="w-2/3" src={bikeAndRoll} alt="" /></a>
          <a href="https://deeringestate.org/"><img className="w-2/3" src={deeringState} alt="" /></a>
          <a href="https://fairchildgarden.org/"><img className="w-2/3" src={fairChild} alt="" /></a>
          <a href="https://www.fullbloomvegan.com"><img className="w-2/3" src={fullBlom} alt="" /></a>
          <a href="https://www.puravidamiami.com"><img className="w-2/3" src={miami} alt="" /></a>
          <a href="https://www.plantarestaurants.com/"><img className="w-2/3" src={planta} alt="" /></a>
        </div>
      </section>
      <section id="visit-places" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl text-left shadow-lg py-2 pl-4 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl block">Places</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <CardImagen 
            href="http://www.bayfrontparkmiami.com/" 
            image={bayFront} 
            subtitle="Bayfront Park" 
            title="Miami" 
            paragraph="Dip your toes in the water at an urban beach, wander through a tropical rock garden or check out some of the many concerts and festivals held in the amphitheater and pavilion."/>

            <CardImagen 
            href="#" 
            image={brickelCityCenter} 
            subtitle="subtitle" 
            title="Brickell City Centre" 
            paragraph="parrafo"/>

            <CardImagen 
            href="https://icamiami.org/" 
            image={instOfContArt} 
            subtitle="Institute of Contemporary Art" 
            title="Miami" 
            paragraph="You’ll find inspiration at the sleek Institute of Contemporary Art (ICA) museum designed by Madrid’s Aranguren + Gallegos Arquitectos in Miami’s Design District."/>

            <CardImagen 
            href="https://www.miamidesigndistrict.net/" 
            image={miamiDesignDistrict} 
            subtitle="Design District" 
            title="Miami" 
            paragraph="Buzzing with high-end boutiques, galleries, bars and restaurants, Miami’s Design District (MDD) promises an immersive cultural experience like no other."/>

            <CardImagen 
            href="https://www.frostscience.org/" 
            image={museumOfScience} 
            subtitle="Frost Museum of Science" 
            title="Phillip and Patricia" 
            paragraph="Feeling playful? The Phillip and Patricia Frost Museum of Science in Miami’s Bayfront Park is perfect for big and small kids."/>

            <CardImagen 
            href="#" 
            image={perezArtMuseum} 
            subtitle="subtitle" 
            title="Pérez Art Museum" 
            paragraph="parrafo"/>

            <CardImagen 
            href="#" 
            image={portMiami} 
            subtitle="subtitle" 
            title="Bay Front" 
            paragraph="parrafo"/>

            <CardImagen 
            href="#" 
            image={winwoodArtDistrict} 
            subtitle="subtitle" 
            title="WynWood Arts District" 
            paragraph="parrafo"/>

          </div>
        </div>
      </section>
    </>
  )
}


const CardImagen = ({href,image, subtitle, title,paragraph}) => {
  return (
    <div className="lg:w-1/4 w-1/2 p-4">
      <a href={href} className="no-underline">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" 
          src={image} />
          <div className="px-8 h-48 py-2 relative z-10 w-full border-4 border-gray-200 bg-indigo-500 opacity-0 hover:opacity-90">
            <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">{subtitle}</h2>
            <h1 className="title-font text-lg font-bold text-white hover:text-indigo-100 mb-2">{title}</h1>
            <p className="text-white text-sm text-justify overflow-ellipsis overflow-hidden leading-none">{paragraph}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
