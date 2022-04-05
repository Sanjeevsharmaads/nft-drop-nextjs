import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {

    //Auth
    const connectWithMetamask = useMetamask();
    // once connected, you can get the connected wallet information from anywhere (address, signer)
    const address = useAddress();
    const disconnect = useDisconnect()

    console.log('address is', address)

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
       {/* left */}
       <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
                   <img className='w-44 rounded-xl object-cover object-center lg:h-96 lg:w-72' src='https://links.papareact.com/8sg' alt=''></img>
                </div>
                <div className='text-center p-5 space-y-2'>
                    <h1 className='text-4xl font-bold text-white'>PAPAFAM Apes</h1>
                    <h2 className='text-xl text-gray-300'>A Collection of PAPAFAM Apes who live and breathe React</h2>
                </div>
            </div>
       </div>

       {/* right */}
       <div className='flex flex-1 flex-col lg:col-span-6 p-12'>
            {/* Header*/}
            <header className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The <span className='font-extrabold underline decoration-pink-600/50'>PAPAFAM</span>{' '}NFT MarketPlace</h1>
                <button onClick={()=> address ? disconnect() : connectWithMetamask()} className='rounded-full bg-rose-400 px-4 text-white text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>{address ? "Sign Out" : 'Sign In' }</button>
            </header>

            <hr className='my-2 border'/>
            {address && (<p className='text-center text-sm text-rose-400'>You are loggedIn with wallet {address.substring(0,5)}....{address.substring(address.length-5)}</p>)}

            {/* Content */}
            <div className='mt-10 flex flex-1 flex-col items-center space-y-6 lg:justify-center lg:space-y-0'>
                <img className="w-80 object-cover pb-10 lg:h-40" src="https://links.papareact.com/bdy" alt="content image" ></img>
                <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The PAPAFAM Ape Coding Club | NFT Drop</h1>
                <p className='pt-2 text-xl text-green-500'> 13 / 21 NFT's Claimed</p>
            </div>

            {/* Mint Button */}
            <button className='h-16 bg-red-600 w-full text-white rounded-full mt-10 font-bold'>Mint NFT (0.01 ETH)</button>
       </div>
    </div>
  )
}

export default NFTDropPage