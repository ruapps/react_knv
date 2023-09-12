import React from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap';
import companies from '../api/companies.json'

const Companies = () => {


  return (
    <Container>
        <Row>
            <Col className='d-sm-flex align-items-center'>
                <h2>Find Best Companies</h2>
            </Col>
        </Row>
        <Row >
            {
                companies?.map((ele, ind)=>{
                    return (
                        <Col ke={ind} sm={6} lg={4} xl={3} className= "mt-4">
                            <Stack direction="horizontal" className='justify-content-between'>
                                <div className='d-flex '>
                                    <div>
                                        <img src={ele.img} alt={ele.company} className='px-3 w-100'/>
                                    </div>
                                    <div>
                                        <p className="mb-0 comp_name">{ele.company}</p>
                                        <img src="../icons8-star-filled-16.png" alt="star icon" className='me-2'/>
                                        <span className="mb-0 comp_rating">{ele.rating}  |  {ele.review > 50 ? "50+" : ele.review} reviews</span>
                                    </div>
                                </div>
                                <img src="../Group15038.png" alt="right carot icon" className='me-3'/>
                            </Stack>
                        </Col>
                    )
                }) 
            }
        </Row>
        <Row>
            <Col className='comp_spons mt-5 text-center'>
                <p className='mb-0'>We've helped <span>2000+</span> world's best companies</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <Stack direction='horizontal' className='flex-wrap justify-content-center  border-0' gap={4}>
                    <div>
                        <img src="../arjuna_logo (1).png" alt="logo" />
                    </div>
                    <div>
                        <img src="../indiv_logo.png" alt="logo" />
                    </div>
                    <div>
                        <img src="../imag_34.png" alt="logo" />
                    </div>
                    <div>
                        <img src="../arjuna_logo (1).png" alt="logo" />
                    </div>
                    <div>
                        <img src="../imag_34.png" alt="logo" />
                    </div>
                </Stack>
            </Col>
        </Row>
    </Container>
  )
}

export default Companies
