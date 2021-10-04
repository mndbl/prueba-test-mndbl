import fotoabout from '../assets/fotospa2.jpeg'
export function About() {
    return (
      <>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="max-h-96 md:h-screen">
              <img
                className="w-screen h-screen object-cover object-top"
                src={fotoabout}
                alt=""
              />
            </div>
            <div className="flex bg-gray-100 p-10">
              <div className="mb-auto mt-auto max-w-lg">
                <h1 className="text-3xl uppercase">About us</h1>
                <p className="font-semibold mb-5">We are Amore Suites & Spa</p>
                <p className="text-justify">
                  Travel with us as we expand our world, improve the communities
                  we serve and open doors to new opportunities. Offering the
                  most powerful portfolio in the industry, our brands and
                  properties across countries and territories give people more
                  ways to connect, experience and expand their world.
                </p>
                <div className="lg:flex space-x-2 mt-4 mb-8">
                  <div className="w-1/2 border-2 border-gray-300 p-2 rounded-md">
                    <h1 className="font-bold">Mission Statement</h1>
                    <p className="text-justify text-sm mt-2">
                      To create unforgettable experiences for our guest, and to
                      promote entertainment for all ages. we want our customers
                      to fall in love with the beautiful city of Firenze by
                      showcasing all the beautiful thing the city has to offer.
                    </p>
                  </div>
                  <div className="w-1/2 border-2 border-gray-300 p-2 rounded-md">
                    <h1 className="font-bold">Vission Statement</h1>
                    <p className="text-justify text-sm mt-2">
                      To have our properties be known as among the best
                      destinations in the city of Firenze; to create personal
                      experiences for our guests that they will treasure for a
                      lifetime; and to be the destination of choice for our
                      discerning guests, members, associates, communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mt-4 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="mt-2">
            <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
              Statement of Ethics 
            </p>
            <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300">
              <li>
                Employees should do the right thing – follow the law, act
                honorably, and treat co-workers with courtesy and respect. </li>
                <li> We welcome and support people of all backgrounds and identities. </li>
                <li>Honest and integral on professional and personal matters. </li>
                 <li> Self disciplined and act with reasonable restraint.</li>
                 <li> Loyalty and in allegiance with the company.</li>
                 <li> We treat each other with respect and dignity.</li>
                 <li> All partners are entitled to work in an environment
                that is free of harassment, bullying and discrimination.
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}