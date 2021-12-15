import React from 'react'

export function Financials() {
    return (
        <div className="min-h-full bg-white">
            <div className="bg-gradient-to-b from-purple-600 to-indigo-700 h-96 w-full pt-6">
                <div className="bg-white rounded-md py-4 px-6 max-w-md mx-auto">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Financials Plan</p>
                    <div className="mx-6 max-w-sm text-gray-600 space-y-2 mt-4 text-justify">

                        <h1 className="font-bold text-lg">
                            Attached we have provided the following financial information:
                        </h1>
                        <ul>
                            <li>

                                Profit and Loss Projection monthly expense for salaries $120,000.00
                            </li>
                            <li>

                                Revenue and sales for first year of business $1,000,000.00
                            </li>
                            <li>

                                Gross profit for first year of business $100,000.0
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>
    )
}
