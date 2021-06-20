import React from 'react'
import { Container } from 'react-bootstrap'

function BelowFooter() {
    return (
        <>
            <section className="footer py-12">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-12">
                        <div className="">
                            <img src="../../assets/mainlogo.png" alt="logo" />

                            <div className="pt-4">
                                <ul className="list-unstyled">
                                    <li className="text-white text-base md:text-base lg:text-lg xl:text-lg font-semibold pt-2"><i className="fas fa-map-marker-alt text-lg"></i>Level-4, 34, Awal Centre, Banani, Dhaka</li>
                                    <li className="text-white text-base md:text-base lg:text-lg xl:text-lg font-semibold pt-2"><i className="fas fa-envelope text-lg "></i>Official: web@programming-hero.com</li>
                                    <li className="text-white text-base md:text-base lg:text-lg xl:text-lg font-semibold pt-2"><i className="fas fa-phone-alt text-lg"></i>Helpline : 01322810867 , 01322810882</li>
                                    <li className="text-white text-base pt-2">(Available : 09:00am to 7:00pm)</li>
                                </ul>
                            </div>
                            <img src="../../assets/googleplay.png" alt="google playStore" />
                        </div>

                        <div className="flex flex-col items-start md:items-center lg:items-center xl:items-center">
                            <ul className="list-unstyled">
                                <li className="text-white text-base md:text-base lg:text-lg xl:text-lg font-semibold pt-2">About us</li>
                                <li className="text-white text-base md:text-base lg:text-lg xl:text-lg font-semibold pt-2">Success</li>
                                <li className="text-white text-base md:text-base lg:text-lg xl:text-lg font-semibold pt-2">Refund policy</li>
                                <li className="text-white text-base md:text-base lg:text-lg xl:text-lg font-semibold pt-2">Terms and Conditions</li>
                                <li className="text-white text-base md:text-base lg:text-lg xl:text-lg font-semibold pt-2">Privacy Policy</li>
                            </ul>

                            <div className="flex flex-row">
                                <i className="fab fa-facebook-square text-2xl cursor-pointer"></i>
                                <i className="fab fa-instagram text-2xl cursor-pointer"></i>
                                <i className="fab fa-linkedin text-2xl cursor-pointer"></i>
                                <i className="fab fa-youtube text-2xl cursor-pointer"></i>
                            </div>
                        </div>

                        <div className="">
                            <img src="../../assets/paymentFooter.png" alt="Payment Getway" />
                        </div>
                    </div>

                    <footer>
                        <h5 className="text-center text-white font-semibold text-lg pt-4">❤ Cloned by <a href="https://github.com/19SmAbtahinoor" target="_blank" rel="noreferrer" className="text-white">S.M.Abtahi Noor</a></h5>
                    </footer>
                </Container>
            </section>
        </>
    )
}

export default BelowFooter
