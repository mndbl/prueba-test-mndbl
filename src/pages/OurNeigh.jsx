import fotoabout from '../assets/fotospa2.jpeg'
export function OurNeig() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:h-screen">
          <div className="max-h-96 md:h-screen">
            <img
              className="w-screen h-screen object-fill object-top"
              src="https://images.unsplash.com/photo-1594628284809-afbc957ba3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
          <div className="flex bg-gray-100 p-10">
            <div className="mb-auto mt-auto max-w-lg">
              <div className="flex justify-between">

                <h1 className="text-3xl uppercase w-2/3">our Neighbourhood</h1>
                <div className="w-1/3 text-right">
                  <a href="/about"
                    className="text-sm py-2 no-underline capitalize border-2 border-blue-600 px-2 rounded-md hover:bg-blue-600 hover:text-white">Back</a>
                </div>

              </div>

              
              <p className="text-justify">
                Miami might be famous for sunshine, beaches, and glamorous parties; but the city has a lot more to offer.
                </p>
              <p className="text-justify">
                Intriguing neighborhoods, surprising street art and world-class museums. HOTEL SPA Miami is in Miami Beach, a cultural haven and shopping mecca for art and fashion lovers in the beating heart of Miami.
              </p>
              <p className="text-justify">
                Intriguing neighborhoods, surprising street art and world-class museums. HOTEL SPA Miami is in Miami Beach, a cultural haven and shopping mecca for art and fashion lovers in the beating heart of Miami.
              </p>

              
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}