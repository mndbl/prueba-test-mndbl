import React from 'react'

export function TimeLine() {
    return (
        // < !--component -- >
        <div className="container py-2 bg-gray-200 mx-auto w-full h-full">
            <div className="max-w-lg bg-white p-4 mx-auto rounded-md shadow-md ">
                <p className="text-justify text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Our goal is to support local companies so they can achieve their maximum potential, all together for us to achieve this target we built up a timetable arrangement,  where we break down our start and how we intend to extend ourselves and offer the best service:</p>
            </div>
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: "50%" }}></div>
                {/* <!-- right timeline --> */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">April 2022: </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Founding of Stronger.</p>
                    </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                    </div>
                    <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">May 2022: </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Operations began at the first office.</p>
                    </div>
                </div>

                {/* <!-- right timeline --> */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">June 2022:</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Became our first subsidiary  Hotel Suites & Spa.</p>
                    </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                    </div>
                    <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">August 2022:</h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">we plan to acquire our second Spa.</p>
                    </div>
                </div>
                {/* <!-- right timeline --> */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">October 2022 </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">we acquired  Bike and roll.</p>
                    </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                    </div>
                    <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">December 2022:</h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">We acquired PLANTA as subsidiary.</p>
                    </div>
                </div>
                {/* <!-- right timeline --> */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">January 2023 :</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"> Hotel One was acquired as a subsidiary.</p>
                    </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                    </div>
                    <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">March 2023 : </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">We will acquire Raw delicious </p>
                    </div>
                </div>
                {/* <!-- right timeline --> */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">May 2023: </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Plant Miami will become part of our team</p>
                    </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                    </div>
                    <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">August 2023:  </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">We will acquire Deering State and Fairchild Garden as subsidiaries to promote environmental conscious-ness.</p>
                    </div>
                </div>
                {/* <!-- right timeline --> */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">November  2023: </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">We will acquire Full bloom cuisine.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-lg bg-white p-4 mx-auto rounded-md shadow-md">
                <p className="text-justify text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Macro Environment:
                There are sure factors in macro-condition that could influence dynamic and systems of associations. From changes in Tax, Imposition of policies, Increasing or Reducing Trade Barriers, Cultural and Demographic Changes and Changes in Political Environment and Government Policy are a portion of the key instances of macro condition. These could bring certain positives just as negatives for each business. PESTEL (Political, Economic, Social, Technological, Environmental and Legal) Analysis is an apparatus which is generally utilized by business chiefs for examination of such basic variables. It is extremely useful for advancement of key dynamic to improve business.</p>
            </div>
        </div>
    )
}
