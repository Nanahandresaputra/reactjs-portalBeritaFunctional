import { useEffect, useState } from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { NavigationBar } from "./content/navbar";
import CardDat from "./content/card";
import { homePage, pencarian } from "./content/getApi";

// import { home } from "./content/api";

let Content = () => {
  let [datar, setDatar] = useState([]);

  useEffect(() => {
    homePage().then((articles) => {
      setDatar(articles);
    });
  }, []);

  let cari = async (q) => {
    if (q.length > 5) {
      let searchData = await pencarian(q);
      setDatar(searchData);
      console.log(searchData);
    }
  };
  return (
    <div>
      <NavigationBar dataSports={cari} />
      <Container>
        <Row xs={1} sm={1} md={3} xl={3} xxl={4} className="g-4">
          {datar.map((datas, i) => (
            <CardDat datas={datas} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Content;
