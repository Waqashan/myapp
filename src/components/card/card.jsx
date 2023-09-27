import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './card.css'

const Cards = () => {
    return (
        <Container className='d-flex justify-content-center' >
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div className='option-m'>
                        <div>
                            <select>
                                {Array.from(Array(6), (e, i) => {
                                    return <option key={i + 1} value={i + 1} >{i + 1}</option>;
                                })}
                            </select>
                        </div>
                        <div>
                            <select>
                                <option>half</option>
                                <option>full</option>
                            </select>
                        </div>
                        <div><h4>Total Price</h4></div>
                    </div>
                    <div><Button variant='success'>Add to Cart</Button></div>



                </Card.Body>
            </Card>
        </Container>
    )
}

export default Cards
