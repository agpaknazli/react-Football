import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {data} from "../../helpers/data";
import {CardFooter} from "react-bootstrap";
import { useState } from "react";
import LegendCard from "./LegendCard";

const LegendContainer = () => {

    const [show,setShow]=useState(true);

  return (
    <Container>
      <Row>
        {data.map((legend)=> (
        <LegendCard key={legend.id} legend={legend}/>
        ))}
      </Row>
     
    </Container>
  );
};

export default LegendContainer;
