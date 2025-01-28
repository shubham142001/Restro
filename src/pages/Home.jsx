import React from 'react'
import Head from '../components/Head'
import Headings from '../components/Headings'
import Speciality from '../components/Speciality'
import Popular from '../components/Popular'
import Steps from '../components/Steps'
import Counter from '../components/Counter'

function Home() {

    console.log("Welcome")

    return (
        <div className='relative'>
            <Head />
            <Headings name="Our " name1='Speciality' />
            <Speciality />
            <Headings name="Most Popu" name1='lar foods' />
            <Popular />
            <Steps />
            <Headings name="Lets Number" name1='To Speak' />
            <Counter />
        </div>
    )
}

export default Home