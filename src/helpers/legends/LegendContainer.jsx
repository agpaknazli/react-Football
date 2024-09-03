import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Row from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const LegendContainer = () => {
  return (
    <Container>
      <Row>
        {data.map(Legend => (
          <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LegendContainer;
