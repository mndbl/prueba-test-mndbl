import fotoabout from '../assets/fotospa2.jpeg'
export function About() {
    return (
      <>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:h-screen">
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
                <div className="flex space-x-2 mt-4 mb-8">
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
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:space-x-2 p-2 bg-green-200">
          <div className=" mt-4 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="mt-2">
              <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                Statement of Ethics 
              </p>
              <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300">
                <li>
                  Employees should do the right thing – follow the law, act
                  honorably, and treat co-workers with courtesy and respect.{" "}
                </li>
                <li>
                   We welcome and support people of all backgrounds and
                  identities.{" "}
                </li>
                <li>
                  Honest and integral on professional and personal matters.{" "}
                </li>
                <li> Self disciplined and act with reasonable restraint.</li>
                <li> Loyalty and in allegiance with the company.</li>
                <li> We treat each other with respect and dignity.</li>
                <li>
                  {" "}
                  All partners are entitled to work in an environment that is
                  free of harassment, bullying and discrimination.
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-4 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="mt-2">
              <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                Purpose
              </p>
              <p>
                Our purpose is to Bridge Cultures and Inspire to all our Guest:
              </p>
              <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300">
                <li>
                  Associates – By focusing on our Put People First core value,
                  promoting Opportunity, Community and Purpose for all, we
                  strive to inspire our people to live our Company Core Values.
                </li>
                <li>
                  Customers – By creating a place to deliver incredible
                  experiences and unforgettable memories hospitality for our
                  guests.
                </li>
                <li>
                  Owners & Franchisees – By harnessing the power of Amore Suites
                  & Spa brand portfolio and the Amore Loyalty program to deliver
                  profitable investments.
                </li>
                <li>
                  {" "}
                  Shareholders – By driving superior financial performance.
                </li>
                <li>
                  {" "}
                  Business Alliances – By working together to create the
                  hospitality marketplace of the future.
                </li>
                <li>
                  {" "}
                  Communities – By investing resources and passion in the places
                  where we live and work.
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-4 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="mt-2">
              <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                Company Values
              </p>
              <p>
                Our company values and how we conduct our business make
                our culture more vibrant and set us apart from the competition.
              </p>
              <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300">
                <li>
                  People First – We believed that if you take care your
                  associates, they will take care of the guests.
                </li>
                <li>
                  CPursue Excellence – We remain dedicated to the customer
                  through service and product.
                </li>
                <li>
                  Embrace Change – Success is never final, which is why we
                  continue to evolve.
                </li>
                <li>
                  Act With Integrity – We believe that how we do business is as
                  important as the business we do.
                </li>
                <li>
                  Serve Our World – Our “spirit to serve” culture is what powers
                  our business and strengthens the communities where we operate.
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-4 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="mt-2">
              <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                Associate Values
              </p>
              <p>
                Putting People First by focusing on what fuels inspiration and
                generates trust between Amore Suites & Spa and our associates:
              </p>
              <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300">
                <li>
                  Opportunity – Building a strong mind and body, growing a
                  rewarding career, and improving one’s whole self.
                </li>
                <li>
                  Community – Sharing respect and kindness, making valuable
                  contributions on a team, and feeling like you belong.
                </li>
                <li>
                  Purpose – Being part of something meaningful and contributing
                  to a more compassionate and hopeful world.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-4 mt-4 px-8 py-4 bg-white rounded-lg shadow-md bg-gray-300 dark:bg-gray-800">
          <div className="mt-2">
            <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
              How We Win
            </p>
            <p>
              We are here to say. Our strategy to recover during this pandemic
              focuses on three key constituencies:
            </p>
            <ul className="list-disc mt-2 text-gray-600 dark:text-gray-300">
              <li>
                Associates – We are committed to advancing associate wellbeing,
                development, and inclusivity by delivering opportunity,
                community, and purpose to our associates.
              </li>
              <li>
                Customers – We will continue to drive customer loyalty by
                focusing on our highest priorities: Leisure, Personalize +
                Localize, Diversify & Expand Revenue Streams.
              </li>
              <li>
                Owners & Franchisees – We are strengthening the relationships
                with owners & franchisees to drive future preference for the
                company and our brands. Amid the pandemic, we are working to
                manage guest expectations and operations requirements while
                accelerating the growth of our global footprint.
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}