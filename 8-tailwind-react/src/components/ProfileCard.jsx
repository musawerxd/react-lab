import React from 'react'

// function ProfileCard({url="https://i.pravatar.cc/150?img=12", username="Musawer", arr, obj}) { // destructuring, also default values , incase if none value is sent in props 
function ProfileCard(props) { // destructuring, also default values , incase if none value is sent in props 
    let url = props.url;
    let username = props.username;
    console.log(props)
    return (
        <div className="py-10 bg-black flex items-center justify-center rounded-2xl mt-5">
            <div className="bg-[#0f0f0f] text-white rounded-2xl shadow-lg p-6 w-80">

                <div className="flex flex-col items-center">
                    <img
                        src={url}
                        alt="profile"
                        className="w-24 h-24 rounded-full border-2 border-zinc-700"
                    />

                    <h2 className="mt-4 text-xl font-semibold">{username}</h2>
                    <p className="text-sm text-zinc-400">@{username.replace(/\s/g, '')}</p>
                </div>

                <div className="mt-4 text-center text-zinc-300 text-sm">
                    Frontend Developer who loves building clean UI and learning new tech.
                </div>

                <div className="flex justify-between mt-6 text-center">
                    <div>
                        <p className="font-bold">120</p>
                        <p className="text-xs text-zinc-400">Posts</p>
                    </div>
                    <div>
                        <p className="font-bold">5.2K</p>
                        <p className="text-xs text-zinc-400">Followers</p>
                    </div>
                    <div>
                        <p className="font-bold">300</p>
                        <p className="text-xs text-zinc-400">Following</p>
                    </div>
                </div>

                <button className="mt-6 w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-zinc-200 transition cursor-pointer">
                    Follow
                </button>

            </div>
        </div>
    )
}

export default ProfileCard
