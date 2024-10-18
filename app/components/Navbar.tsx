import React from 'react'

function Navbar() {
    return (
        <div
            className='main lg:flex md:flex flex-wrap justify-between items-center bg-black mt-1 mb-2'>
            <div className="left">
                <div className="logo flex items-center font-bold text-2xl text-white text-center">
                    <img className='w-14' src="https://cdn.iconscout.com/icon/free/png-256/free-codepen-logo-icon-download-in-svg-png-gif-file-formats--major-websites-set-pack-logos-icons-461781.png" alt="" />
                    <div className='flex flex-col text-left'>
                        <h1 className='text-white text-lg'>Codepen</h1>
                        <p className='text-gray-400 text-xs'>Shayan Saeed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar