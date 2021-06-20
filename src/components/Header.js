import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Header() {
    const [changeHeader, setChangeHeader] = useState(false)

    const handleHeader = () => {
        if (window.scrollY >= 80) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }
    window.addEventListener("scroll", handleHeader)
    return (
        <>
            <Navbar expand="lg" className={changeHeader ? "activeHeader header" : "header"}>
                <Container className="px-4 py-2">
                    <div className="flex flex-row flex-grow">
                        <img className="header_logo" src="./assets/mainlogo.png" alt="header logo" />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <div className="menus flex flex-col  mr-2 md:flex-row lg:flex-row xl:flex-row space-x-3">
                                <Nav.Link className="menuList text-white font-normal text-md cursor-pointer font-semibold">About Us</Nav.Link>
                                <Nav.Link className="menuList text-white font-normal text-md cursor-pointer font-semibold">Success</Nav.Link>
                                <Nav.Link className="cursor-pointer"><img src="./assets/shoppingCart.png" alt="cart" /></Nav.Link>
                            </div>

                            <div className="header_buttons flex flex-row  flex-grow items-center space-x-3">
                                <Button className="login_btn transition duration-500 ease-in-out rounded-full border border-gray-300 text-white px-4 py-2 text-center cursor-pointer font-semibold">Login</Button>
                                <Button className="header_btn rounded-full text-white px-4 py-2 text-center cursor-pointer border border-gray-300 font-semibold">Register</Button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
