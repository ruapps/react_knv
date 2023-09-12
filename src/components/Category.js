import React from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap'

const Category = () => {

const categories= [
    [ "../insights_FILL0_wght300_GRAD0_opsz48.png", "Business Development",  "2 Openings"],
    [ "../Group14155.png", "Designing",  "2 Openings"],
    [ "../Group14159.png", "Development",  "2 Openings"],
    [ "../c4.png", "Content writer",  "2 Openings"],
    [ "../c4.png", "Content writer",  "2 Openings"],
    [ "../Group14159.png", "Development",  "2 Openings"],
    [ "../insights_FILL0_wght300_GRAD0_opsz48.png", "Designing",  "2 Openings"],
    [ "../Group14155.png", "Business Development",  "2 Openings"]
]

  return (
    <Container>
        <Row>
            <Col className='d-sm-flex align-items-center'>
                <h2>Search by Category</h2>
                <a href="#" className='ms-auto all'> All Categories 
                    <img src="../Group14102.png" alt="categories" className='ms-2'/>
                </a>
            </Col>
        </Row>
        <Row >
            {
                categories?.map((ele, ind)=>{
                    return (
                        <Col ke={ind} sm={6} lg={4} xl={3} className= "mt-4">
                            <Stack direction="horizontal">
                                <img src={ele[0]} alt={ele[1]} className='px-3'/>
                                <div className='d-flex align-content-center flex-column' >
                                    <p className="mb-0">{ele[1]}</p>
                                    <p className="mb-0">{ele[2]}</p>
                                </div>
                            </Stack>
                        </Col>
                    )
                }) 
            }
        </Row>
    </Container>
  )
}

export default Category
