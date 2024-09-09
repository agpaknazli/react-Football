import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { data } from "../../helpers/data";
import { CardFooter } from "react-bootstrap";
import { useState } from "react";
import LegendCard from "./LegendCard";
import Form from "react-bootstrap/Form";

const LegendContainer = () => {
  const [show, setShow] = useState(true);

  const [search, setSearch] = useState("");

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const filtereData = data.filter((legend) =>
    legend.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <>
      <Form.Control
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Legends"
         className="w-50 mx-auto my-2"
      />

      <Container className="p-3 rounded-4 card-container my-3">
      <Row className="justify-content-center g-3">
        
          {/* {data.map((legend)=> (
        <LegendCard key={legend.id} legend={legend}/>
        ))} */}
          {/* {data.map((legend) => (
            <LegendCard key={legend.id} legend={legend} />
          ))} */}
          {filtereData
            .map((legend) => (
              <LegendCard key={legend.id} legend={legend} />
            ))}
          {/* {data.map((legend)=>(<LegendCard key={legend.id}{...legend}/>
))} */}
        </Row>
      </Container>
    </>
  );
};

export default LegendContainer;
