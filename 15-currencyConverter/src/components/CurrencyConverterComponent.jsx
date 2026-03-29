import React, { useEffect, useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import useConverter from '../hooks/useConverter';

function CurrencyConverterComponent() {

    const [amount, setAmount] = useState(1)
    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("PKR")

    let data = useCurrencyInfo(from)

    // console.log("data : ",data)
    // console.log("re-rendering")

    let options = data ? Object.keys(data) : [];
    // console.log("options : ", options)

    let result = useConverter(data, from, to, amount)
    // console.log(result)


    return (
        <div className="rounded-2xl p-8 flex items-center justify-center bg-linear-to-br from-black via-[#0f0f0f] to-gray-900 text-white">

            <div className="w-full  bg-[#0f0f0f] backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col gap-6">

                <h1 className="text-3xl font-semibold text-center tracking-wide">
                    💱 Currency Converter
                </h1>

                <div className='flex items-center justify-center gap-7'>

                    {/* FROM */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-400">From</label>
                        <div className="flex gap-3">
                            <input
                                type="number"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => { setAmount(Number(e.target.value)) }}
                                className="flex-1 bg-white/10 border border-white/10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20"

                            />

                            <select
                                onChange={(e) => setFrom(e.target.value)}
                                className='bg-[#0f0f0f] text-white border border-white/20 p-3 rounded-xl focus:outline-none'
                                value={from}

                            >
                                {options.map((opt) => {
                                    return <option key={opt} value={opt}>{opt}</option>
                                })}

                            </select>
                        </div>
                    </div>

                    {/* ARROW */}
                    <div className="text-center text-3xl text-gray-400">
                        ⇄
                    </div>

                    {/* TO */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-400">To</label>
                        <div className="flex gap-3">
                            <input
                                type="number"
                                readOnly
                                value={result ? result.toFixed(2) : "Converted amount"}
                                className="flex-1 bg-white/10 border border-white/10 p-3 rounded-xl focus:outline-none"
                            />

                            <select
                                onChange={(e) => setTo(e.target.value)}
                                className="bg-[#0f0f0f] text-white border border-white/20 p-3 rounded-xl focus:outline-none"
                                value={to}
                            >
                                {options.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>



            </div>
        </div >
    )
}

export default CurrencyConverterComponent