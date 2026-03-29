

import React from 'react'

function useConverter(data, from, to, amount) {


    console.log("data : ", data)
    console.log("from", from)
    console.log("to : ", to)

    if (!data) return 0;
    if (!data || !data[from.toUpperCase()] || !data[to.toUpperCase()]) return 0
    let fromRate = data[from.toUpperCase()]
    let toRate = data[to.toUpperCase()]

    console.log("fromrate : ", fromRate)
    console.log("torate : ", toRate)

    let result = (amount / fromRate) * toRate
    console.log("result : ", result)

    return result
}

export default useConverter
