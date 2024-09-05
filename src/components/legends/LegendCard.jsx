
import React from 'react'
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {data} from "../../helpers/data";
import {CardFooter} from "react-bootstrap";

const LegendCard = ({legend}) => {
    const [show,setShow]=useState(true);
  return (
    <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <Card onClick={()=>setShow(!false)}>
{show ?  <Card.Img 
// onClick={()=>setShow(false)} 
variant="top" src={legend.img} /> : 
<>
<Card.Body>
                <Card.Title
                //  onClick={()=>setShow(true)}
                 >{legend.name}</Card.Title>
                <ul className="m-auto">
                  {legend.statistics.map((item) => (
                    <li className="list-unstyled h5 text-start">🎉 {item}</li>
                  ))}
                </ul>
            
              </Card.Body>
           <CardFooter>
            Career Years: {legend.official_career}
            </CardFooter> 
</>

}
      
            </Card>
          </Col>
  )
}

export default LegendCard