import { Switch, Route } from "react-router-dom";
export function GoingGreen() {
  return (
    <div className="h-full bg-cover bg-opacity-50 bg-fixed" style={{ backgroundImage: 'url(' + "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80" + ')' }}>
      <div className="h-full bg-green-600 bg-opacity-30 py-6">

        <div className="text-center">
          <h1 className="py-6 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="text-white block xl:inline">GOINGGREEN</span> <br />
            <span className="block text-blue-600 xl:inline sm:-mt-8">Amore Suites & Spa</span>
          </h1>
        </div>
        <div className="bg-white bg-opacity-70  text-gray-800 text-sm max-w-md lg:max-w-2xl p-6 mx-auto rounded-lg">
          <p className="text-justify">
            With guest rooms that aim to provide maximum comfort with minimal energy footprint, we hope that others begin to share this sentiment and sustainable development truly becomes the way of the future.
          </p>
          <p className="text-justify">We want a stay at Miami to be fun, energizing and inspire people to embrace a greener lifestyle. From the sustainable design of our LEED certified hotel to our recycling programs; our eco-friendly choices benefit our guests, team and the environment.</p>
          <p className="text-justify">Our team are serving up local sourced dishes, recycling everything from soap to flip-flops, and partnering with local community groups to find more ways reduce, reuse and recycle. And this is only the start! </p>
          <p className="text-justify">Below you’ll find some more details about the different ways we’re reducing our carbon footprint and making sure a better tomorrow starts here.
          </p>
        </div>
        <div className="grid grid-cols-3 px-6 lg:px-10 gap-4 lg:gap-10">
        <div className="w-full my-4 bg-white bg-opacity-70 p-4 mx-auto rounded-lg">
        <h1>LOCALLY</h1>
        <h1 className="font-extrabold w-auto border-b-4 border-yellow-800 -mt-2 mb-4">SOURCED</h1>

        <p className="text-xs text-justify text-gray-800">We're big foodies and have worked hard to create locally sourced menus thar are nourishing for guests and kind to the environment. Our chefs use local seasonal produce and free-range productos to create theirs menus - offering a growing range of taste and healthy plant-based dishes.</p>
        </div>
        <div className="w-full my-4 bg-white bg-opacity-70 p-4 mx-auto rounded-lg">
        <h1>PURPOSEFUL</h1>
        <h1 className="font-extrabold w-auto border-b-4 border-yellow-800 -mt-2 mb-4">RECYCLING</h1>

        <p className="text-xs text-justify text-gray-800">
          We love the idea of a zero waste lifestyle - that's why we've gone paperless and introduced a recycling program that repurposes hotel products to benefit the local community. Leftlover soaps, shampoos and toliletries are donated to Camillus House to support underprivileged families, used flip flops are given to Soles4Soul and unclaimed Lost and Found items go to the Vietnam Veterans of America.
          </p>
        </div>
        <div className="w-full my-4 bg-white bg-opacity-70 p-4 mx-auto rounded-lg">
        <h1>CONSERVATING</h1>
        <h1 className="font-extrabold w-auto border-b-4 border-yellow-800 -mt-2 mb-4">WATER</h1>

        <p className="text-xs text-justify text-gray-800">
          Saving water is a key focus. We use a smart pump to regular water pressure throughout the hotel, use water-efficient bathroom fixtures and are introducing filtered water taps and shampoo dispensers in every room. By collecting rainwater for the cooling tower and landscaping needs. We're also making the most of Miami's natural climate.
          </p>
        </div>
        </div>
      </div>
    </div>
  );

}