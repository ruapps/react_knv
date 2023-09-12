import React from 'react'
import { Row, Col, Stack } from 'react-bootstrap'

const Hero = () => {
  return (
    <Row className="hero">
        <Col xs={10} md={6} xl={7}>
            <h1>Find the perfect job for you</h1>
            <p className='my-3'>Search your career opportunity through 12,800 jobs</p>
            <form action='#' method='post' >
                <div className='search_bar d-lg-flex align-items-center px-sm-2 px-lg-0'>
                    <input type="text" placeholder='Search by job title, company or keywords' className='ps-lg-3 pe-lg-2 py-sm-3 py-lg-0'/>
                    <Stack direction="horizontal" className='d-flex align-items-center pt-sm-3 pt-lg-0 ps-lg-2 w-lg-50'>
                        <img src="../Group14059.png" alt="location icon"/>
                        <input type="text" placeholder='Province, city, or region' className='w-100 ms-2'/>
                        <img src="../icons8-search-16.png" alt="search icon" />
                    </Stack>    
                </div>
            </form>
            <h3 className='mt-3 mb-0'>Popular Searches</h3>
            <div className='d-flex align-items-center tags flex-wrap'>
                {
                    ["Designer", "Writer", "Team Leader", "Senior", "Web Designer"].map((ele, ind)=>{
                        return <span key={ind} className='me-2'>{ele}</span>
                    })
                }
            </div>
        </Col>
    </Row>
  )
}

export default Hero
