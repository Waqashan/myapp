import React from 'react'
import Button from 'react-bootstrap/Button';
import './footer.css'
import Card from 'react-bootstrap/Card';
function Footer() {
  return (
    <div className='footer-outer-main'>
    <Card className="text-center cstm-footer-main">
  
    <Card.Body>
      <Card.Title style={{color:"white"}}>Special title treatment</Card.Title>
      <Card.Text style={{color:"white"}}>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary" >Go somewhere</Button>
    </Card.Body>
    <Card.Footer style={{color:"white"}} className="text-muted">2 days ago</Card.Footer>
  </Card>
  </div>
  )
}

export default Footer
