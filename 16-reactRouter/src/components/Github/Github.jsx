import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
function Github() {

    // const [data, setData] = useState()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/musawerxd')
    //         .then(response => response.json())
    //         .then(data => { setData(data) })

    // },[])

    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {/* <div className='text-4xl text-center py-6 px-4'>Github Followers: {data ? data.followers : "Loading..."} </div> */}
            <div className='text-4xl text-center py-6 px-4'>Github Followers: {data.followers} </div>
        </div>
    )
}


export default Github


export const GithubInfoApi = async () => {
    const response = await fetch('https://api.github.com/users/musawerxd')
    return response.json()
}

