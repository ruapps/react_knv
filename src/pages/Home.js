import React from 'react'
import Navbar from '../components/Navbar'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Featured from '../components/Featured'
import Companies from '../components/Companies'

const Home = () => {
  return (
    <>
        <div  className='header'>
            <Container>
                <Navbar/>
                <Hero/>
            </Container>
        </div>
        <div className='category'>
            <Category/>
        </div>
        <div className='feature'>
            <Featured/>
        </div>
        <div className='companies'>
            <Companies/>
        </div>
    </>
  )
}

export default Home
