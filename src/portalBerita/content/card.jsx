import { Button, Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

let CardDat = ({ datas }) => {
  return (
    // console.log(datas.title);
    <div>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={datas.urlToImage} />
          <Card.Body>
            <Card.Title>{datas.title}</Card.Title>
            <Card.Text>{datas.description}</Card.Text>
            <Button variant="primary" href={datas.url} target="blank">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CardDat;
