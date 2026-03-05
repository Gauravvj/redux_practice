import React from 'react'
import { fetchGIF, fetchphotos, fetchvideos } from './api/mediaapi'

const App = () => {
  function getphotos() {
    fetchphotos()
  }
  return (
    <div className='h-screen text-white w-full bg-gray-600'>
      <button className='bg-red-700 p-3 m-2 gap-4' onClick={async () => {
        const data =await fetchphotos('cat')
        console.log(data.results);
        
        
      }}>Get Photos</button>

      <button className='bg-red-700 p-3 m-2 gap-4' onClick={async () => {
        const data =await fetchvideos('cat')
        console.log(data.videos);
        
        
      }}>Get Videos</button>

    </div>
  )
}

export default App