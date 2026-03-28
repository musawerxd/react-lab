


import { useEffect } from "react"
import { useState } from "react"

function CustomHook(url = "https://dummyjson.com/users") {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [url])

    console.log("data: ", data)
    console.log("type: ", typeof data)

    return data

}

export default CustomHook
