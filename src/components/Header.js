import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [ProifileMenu, setProfileMenu] = useState(false)
    const [changeHeader, setChangeHeader] = useState(false)
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    const handleHeader = () => {
        if (window.scrollY >= 80) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }
    window.addEventListener("scroll", handleHeader)
    const userInfo = JSON.stringify(user, null, 2)
    console.log(userInfo)
    return (
        <>
            <Navbar expand="lg" className={changeHeader ? "activeHeader header" : "header"}>
                <Container className="px-4 py-2">
                    <NavLink to="/">
                        <div className="flex flex-row flex-grow">
                            <img className="header_logo" src="./assets/mainlogo.png" alt="header logo" />
                        </div>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">



                        {isAuthenticated ? (
                            <Nav className="ml-auto">
                                <div className="menus flex flex-col items-center mr-2 md:flex-row lg:flex-row xl:flex-row space-x-3">
                                    <NavLink to="/dashboard" className="menuList text-white font-normal text-md cursor-pointer font-semibold text-decoration-none">My Classes</NavLink>
                                    <Nav.Link className="cursor-pointer"><img src="./assets/notificationbell.png" alt="notification" /></Nav.Link>
                                    <NavLink className="cursor-pointer text-decoration-none" to="/checkout"><img src="./assets/shoppingCart.png" alt="cart" /></NavLink>
                                </div>

                                <div className="header_buttons flex flex-row  flex-grow items-center space-x-3">
                                    <div className="">
                                        <img onClick={() => setProfileMenu(!ProifileMenu)} className="rounded-full cursor-pointer" src={user.picture} alt={user.name} width="40px" height="40px" />
                                    </div>
                                </div>
                                {ProifileMenu && (
                                    <div className="profile_Menu bg-white rounded-xl shadow-xl box-border px-8 py-6 flex flex-col items-center">
                                        <img className="rounded-full" src={user.picture} alt={user.name} width="70px" height="70px" />
                                        <h2 className="text-lg text-center">{user.name}</h2>
                                        <NavLink to="/profile" className="text-decoration-none">
                                            <button className="header_btn rounded-full text-white px-4 py-2 text-center cursor-pointer border border-gray-300 font-semibold ">View Profile</button>
                                        </NavLink>

                                        <div className="border-t border-gray-300 mt-4 pt-2">
                                            <ul className="flex flex-col items-start list-unstyled space-y-1 cursor-pointer text-gray-500">
                                                <li><i className="fas fa-bullhorn text-gray-500"></i>Announcement</li>
                                                <li><i className="fas fa-tag text-gray-500"></i>Order History</li>
                                                <li><i className="fas fa-award text-gray-500"></i>Leaderboard</li>
                                                <li className="cursor-pointer font-bold" onClick={() => logout()}><i className="fas fa-sign-out-alt font-bold text-gray-500"></i>Logout</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </Nav>
                        ) : (
                            <Nav className="ml-auto">
                                <div className="menus flex flex-col  mr-2 md:flex-row lg:flex-row xl:flex-row space-x-3">
                                    <Nav.Link className="menuList text-white font-normal text-md cursor-pointer font-semibold">About Us</Nav.Link>
                                    <Nav.Link className="menuList text-white font-normal text-md cursor-pointer font-semibold">Success</Nav.Link>
                                    <Nav.Link className="cursor-pointer"><img src="./assets/shoppingCart.png" alt="cart" onClick={() => alert("You must be login!!!")}/></Nav.Link>
                                </div>

                                <div className="header_buttons flex flex-row  flex-grow items-center space-x-3">
                                    <Button className="login_btn transition duration-500 ease-in-out rounded-full border border-gray-300 text-white px-4 py-2 text-center cursor-pointer font-semibold"
                                        onClick={() => loginWithRedirect()}>Login</Button>
                                    <Button className="header_btn rounded-full text-white px-4 py-2 text-center cursor-pointer border border-gray-300 font-semibold" onClick={() => loginWithRedirect()}>Register
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
