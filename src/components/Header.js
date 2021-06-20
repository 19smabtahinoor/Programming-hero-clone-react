import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const [changeHeader, setChangeHeader] = useState(false)
    const { loginWithRedirect,logout,user,isAuthenticated } = useAuth0();

    const handleHeader = () => {
        if (window.scrollY >= 80) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }
    window.addEventListener("scroll", handleHeader)
    const userInfo = JSON.stringify(user,null,2)
    console.log(userInfo)
    return (
        <>
            <Navbar expand="lg" className={changeHeader ? "activeHeader header" : "header"}>
                <Container className="px-4 py-2">
                    <div className="flex flex-row flex-grow">
                        <img className="header_logo" src="./assets/mainlogo.png" alt="header logo" />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">


                      
                            {isAuthenticated ? (
                                <Nav className="ml-auto">
                                <div className="menus flex flex-col  mr-2 md:flex-row lg:flex-row xl:flex-row space-x-3">
                                    <Nav.Link className="menuList text-white font-normal text-md cursor-pointer font-semibold">My Classes</Nav.Link>
                                    <Nav.Link className="cursor-pointer"><img src="./assets/notificationbell.png" alt="notification" /></Nav.Link>
                                    <Nav.Link className="cursor-pointer"><img src="./assets/shoppingCart.png" alt="cart" /></Nav.Link>
                                </div>
    
                                <div className="header_buttons flex flex-row  flex-grow items-center space-x-3">
                                    <div className="">
                                        <img className="rounded-full" src={user.picture} alt={user.name} width="40px" height="40px"/>
                                    </div>
                                <Button className="login_btn transition duration-500 ease-in-out rounded-full border border-gray-300 text-white px-4 py-2 text-center cursor-pointer font-semibold"
                                onClick={() => logout()}>Logout</Button>
                                </div>
                                </Nav>
                            ): (
                                <Nav className="ml-auto">
                                <div className="menus flex flex-col  mr-2 md:flex-row lg:flex-row xl:flex-row space-x-3">
                                    <Nav.Link className="menuList text-white font-normal text-md cursor-pointer font-semibold">About Us</Nav.Link>
                                    <Nav.Link className="menuList text-white font-normal text-md cursor-pointer font-semibold">Success</Nav.Link>
                                    <Nav.Link className="cursor-pointer"><img src="./assets/shoppingCart.png" alt="cart" /></Nav.Link>
                                </div>    
                           
                                <div className="header_buttons flex flex-row  flex-grow items-center space-x-3">
                                <Button className="login_btn transition duration-500 ease-in-out rounded-full border border-gray-300 text-white px-4 py-2 text-center cursor-pointer font-semibold"
                                onClick={() => loginWithRedirect()}>Login</Button>
                                 <Button className="header_btn rounded-full text-white px-4 py-2 text-center cursor-pointer border border-gray-300 font-semibold"onClick={() => loginWithRedirect()}>Register
                                </Button>
                                </div>
                                </Nav>
                            )}


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
