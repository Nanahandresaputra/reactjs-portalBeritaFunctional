import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

let CardDat = ({ datas }) => {
  // konversi waktu
  const inputDateString = datas.publishedAt;
  const dateObj = new Date(inputDateString);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const outputDateString = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "170px" }} variant="top" src={datas.image} />
        <Card.Body>
          <Card.Title>{datas.title}</Card.Title>
          <Card.Text>{outputDateString}</Card.Text>
          <Button variant="primary" href={datas.url} target="blank">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDat;
