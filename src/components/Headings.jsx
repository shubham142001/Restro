import React from 'react'

function Headings({name, name1}) {
  return (
    <div className='flex justify-center pt-10 pb-5'>
        <h1 className='text-5xl text-sky-600 py-5'>{name}<span className='text-green-600'>{name1}</span></h1>
    </div>
  )
}

export default Headings