import React, { useState } from 'react'
import { Row, Col,  Stack, Button, Offcanvas } from 'react-bootstrap';

const Navbar = () => {
    const [select, setSelect]= useState("English");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDropdown= (e)=>{
        setSelect(e.target.value)
    }


  return (
            <Row>
                <Col xs={6} sm={2}>
                    <a href="#" >
                        <img src="../logo.png" alt="logo" />
                    </a>
                </Col>
                <Col xs={6} sm={10} className='d-flex align-items-center'>

                <Stack gap={3} direction="horizontal" className='menu ms-auto d-none d-md-flex'>
                    <a href="#" className="active">Home</a>
                    <a href="#" >My Jobs</a>
                    <a href="#" >
                        <img src="../Group15051.png" alt="notification icon" />
                    </a>
                    <a href="#" >
                        <img src="../Iconly-Light-Outline-Profile.png" alt="Profile icon" srcset="" />
                    </a>
                    <a href="#" >For Employer
                        <img src="../Path20177.png" alt="notification icon" className='ms-2'/>
                    </a>

                            {/* <img src="../../Group13967.png" alt="English flag" /> */}
                    <select value={select} onChange={(e)=> handleDropdown(e)} >
                        <option value="EN"> 
                            EN
                        </option>
                        <option value="HI"> 
                            HI
                        </option>
                        <option value="RU"> 
                            RU
                        </option>
                    </select>

                </Stack>

                    <Button variant="primary" className="d-md-none ms-auto" onClick={handleShow} >
                        <img src="../icons8-menu-30.png" alt="menu icon" />
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>User</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                         {
                            show ? 
                            <Stack gap={3} direction="vertical" className='menu'>
                                <a href="#" className='ms-sm-auto active'>Home</a>
                                <a href="#" >My Jobs</a>
                                <a href="#" >
                                    <img src="../Group15051.png" alt="notification icon" />
                                </a>
                                <a href="#" >
                                    <img src="../Iconly-Light-Outline-Profile.png" alt="Profile icon" srcset="" />
                                </a>
                                <a href="#" >For Employer
                                    <img src="../Path20177.png" alt="notification icon" className='ms-2'/>
                                </a>

                                        {/* <img src="../../Group13967.png" alt="English flag" /> */}
                                <select value={select} onChange={(e)=> handleDropdown(e)}>
                                    <option value="EU"> 
                                        EN
                                    </option>
                                    <option value="HI"> 
                                        HI
                                    </option>
                                    <option value="RU"> 
                                        RU
                                    </option>
                                </select>
                                
                            </Stack>
                            :
                            null
                         }
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
            </Row>
  )
}

export default Navbar
