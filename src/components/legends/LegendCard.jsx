import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const LegendCard = ({ legend }) => {
  const [show, setShow] = useState(true); //! Parent componentte tanımladığımızda state 1 tane olmuş oluyor. Tek bir state ile tüm veriyi yönetmeye çalışınca da hata alıyoruz. O yüzden her bir veri için state tanımlamamaız gerekiyor. Bunun için de verileri bir component içerisinde yazdırmış olduk.Böylelikle her bir veriye özel state tanımlayabilmiş olduk.
  return (
    <Col xs={10} sm={8} md={6} lg={4} xl={3}>
      <Card
        className="player-card"
        onClick={() => setShow(!show)}
        role="button"
      >
        {/*toggle */}
        {show ? (
          <Card.Img
            // onClick={() => setShow(false)}
            variant="top"
            title={legend.name}
            src={legend.img}
          />
        ) : (
          <>
            {/* <Card.Body 
            // onClick={() => setShow(true)}
            >
              <Card.Title>{legend.name}</Card.Title>
              
            </Card.Body> */}
            <Card.Header>
              <Card.Title>{legend.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto ps-0">
              {legend.statistics.map((item) => (
                <li className="list-unstyled h5 text-start">🎉{item}</li>
              ))}
            </ul>
            <Card.Footer>Career Years : {legend.official_career}</Card.Footer>
          </>
        )}
      </Card>
    </Col>
  );
};

export default LegendCard;
