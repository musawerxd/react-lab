

import React, { useEffect } from 'react'
import { useState } from 'react'

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         let response = await fetch(`https://v6.exchangerate-api.com/v6/3c087c5674fa2a119110e6e0/latest/${currency}`)
        //         let JsonResponse = await response.json()
        //         setData(JsonResponse.conversion_rates)

        //     }
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // fetchData()

        (async () => {
            try {
                let response = await fetch(`https://v6.exchangerate-api.com/v6/3c087c5674fa2a119110e6e0/latest/${currency}`)
                let JsonResponse = await response.json()
                setData(JsonResponse.conversion_rates)

            }
            catch (err) {
                console.log(err)
            }
        }
        )()
    }, [currency])


    // console.log(data)
    // console.log(typeof data)
    return data
}

export default useCurrencyInfo
