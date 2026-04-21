import React from 'react'
import { useParams } from 'react-router'

function User() {
    let { userId } = useParams();
    return (
        <>
            <div className='text-4xl text-center py-6 px-4'>User: {userId} </div>
        </>
    )
}

export default User
