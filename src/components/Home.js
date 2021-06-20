import React from 'react'
import { Container } from 'react-bootstrap'
import CarouselItem from './CarouselItem'

function Home() {
    return (
        <>
            <section className="home pt-48">
                <Container>
                    <CarouselItem />
                </Container>
            </section>
        </>
    )
}

export default Home
