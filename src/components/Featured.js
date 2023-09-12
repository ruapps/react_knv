import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import featured from '../api/feature.json'
const Featured = () => {
  

  return (
    <Container>
        <Row>
            <Col>
                <h2>Featured Job Offers</h2>
            </Col>
        </Row>
        <Row>
            {
                featured?.map((ele, ind)=>{
                    return (
                            <Col ke={ind} sm={6} lg={4} xl={3} className="mt-4">
                                <div className='feature_cart p-2'>
                                    <Stack direction="horizontal">
                                        <div className='d-flex align-items-center' >
                                            <img src={ele.img} alt={`${ele.name} logo`} className='pe-3'/>
                                            <p className="mb-0 job_title">{ele.name}</p>
                                        </div>
                                        <img src="../heart-3-line 1.png" alt="Save icon" className='ms-auto'/>
                                    </Stack>
                                    <div className='d-flex justify-content-between'>
                                        <small className='company'>{ele.company}</small>
                                        <div>
                                            <img src="../icons8-star-filled-16.png" alt="star icon" />
                                            <small className='ratings ms-1 '>{ele.rating} | {ele.review > 50 ? "50+": ele.review } reviews</small>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center loc_exp'>
                                        <span className='d-flex '>
                                            <span>
                                                <img src="../Group14182.png" alt="Experience icon" className='me-1'/>
                                                <small>{ele.exp}</small>
                                            </span>
                                            <span>
                                                <img src="../Group14184.png" alt="Location icon" className='me-1 ms-3'/>
                                                <small>{ele.loc}</small>
                                            </span>
                                        </span>
                                        <p className='time pb-0 mb-0 ms-auto'>{ele.time}</p>
                                    </div>
                                    <ol className="details mb-0" >
                                        {
                                            ele.detail?.map((ele, ind)=>{
                                                return <li key={ind}> <small>{ele}</small> </li>
                                            })
                                        }
                                    </ol>
                                </div>
                            </Col>

                        )
                    }) 
                }
                
        </Row>
        <Row>
                <Col>
                    <button type="button">
                        All Job Offers
                        <img src="../Group15039.png" alt="Right arrow icon" className='ms-3'/>
                    </button>
                </Col>
        </Row>
    </Container>
  )
}

export default Featured
