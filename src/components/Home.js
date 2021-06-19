import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import CarouselItem from './CarouselItem'

function Home() {
    return (
        <>
            <section className="home pt-9">
                <Container>
                    <Row>
                        <CarouselItem />
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Home
