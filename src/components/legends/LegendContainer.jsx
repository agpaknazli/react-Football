
import React from 'react'
import  Container  from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {data} from "../../helpers/data"




const LegendContainer = () => {
  return (
    <Container>
<Row>
{data.map(Legend=>(<Col xs={10} sm={8} md={6} lg={4} xl={3}>
<Card >
      <Card.Img variant="top" src={Legend.img} />
      <Card.Body>
        <Card.Title>{Legend.name}</Card.Title>
        <ul>

{Legend.statistics.map(item=><li>
    {item}
</li>)}


        </ul>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

</Col>))}


</Row>
     
    </Container>
  )
}

export default LegendContainer;