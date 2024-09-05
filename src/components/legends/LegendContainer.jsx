import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {data} from "../../helpers/data";
import {CardFooter} from "react-bootstrap";


const LegendContainer = () => {

    const [show,setShow]=useState(true);

  return (
    <Container>
      <Row>
        {data.map((Legend) => (
          <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <Card>
{show ?  <Card.Img onClick={()=>setShow(false)} variant="top" src={Legend.img} /> : 
<>
<Card.Body>
                <Card.Title onClick={()=>setShow(true)} >{Legend.name}</Card.Title>
                <ul className="m-auto">
                  {Legend.statistics.map((item) => (
                    <li className="list-unstyled h5 text-start">🎉 {item}</li>
                  ))}
                </ul>
            
              </Card.Body>
           <CardFooter>
            Career Years: {Legend.official_career}
            </CardFooter> 
</>

}
      
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="primary">Go somewhere</Button>
    </Container>
  );
};

export default LegendContainer;
