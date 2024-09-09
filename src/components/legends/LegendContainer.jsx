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
import Form from 'react-bootstrap/Form';


const LegendContainer = () => {

    const [show,setShow]=useState(true);

    const[search, setSearch]=useState("")

    const handleChange=(e)=>{
      setSearch(e.target.value)
    }

  return (

<>
<Form.Control type="search" onClick={(e)=>handleChange(e)} placeholder="Search Legends" />

    <Container>
      <Row>
        {data.map((legend)=> (
        <LegendCard key={legend.id} legend={legend}/>
        ))}

{/* {data.map((legend)=>(<LegendCard key={legend.id}{...legend}/>
))} */}

      </Row>
     
    </Container>
    </>
  );
};

export default LegendContainer;
