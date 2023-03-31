import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavigationBar } from "./navbar";
import CardDat from "./card";
import { categoryNews, homePage, pencarian } from "../api/getApi";
import Footer from "./footer";
import AlertComp from "./alert";

let Content = () => {
  let [datar, setDatar] = useState([]);
  let [result, setResult] = useState("");
  let [title, setTitle] = useState("");

  useEffect(() => {
    homePage("general").then((articles) => {
      setDatar(articles);
    });
  }, []);

  let cari = async (q) => {
    if (q.length > 0) {
      let searchData = await pencarian(q);
      setDatar(searchData);
      setResult(q);
      setTitle("Search results");
    } else {
      window.location.reload();
    }
  };

  let categories = async (q) => {
    let resultCategories = await categoryNews(q);
    setDatar(resultCategories);
    setResult(q);
    setTitle("Category");
  };

  return (
    <div>
      <NavigationBar dataSports={cari} category={categories} />
      {datar.length > 0 || result.length > 0 ? <h4 className="container">{result.length > 0 ? `${title} ${result}` : ""}</h4> : <h1 className="text-center">Loading...</h1>}
      {datar.length === 0 && result.length > 0 ? <AlertComp /> : ""}
      <Container>
        <Row className="g-2 justify-content-center align-items-center mb-5">
          {datar.map((datas, i) => (
            <Col key={i} sm={12} md={6} xl={4} xxl={3}>
              <CardDat datas={datas} />
            </Col>
          ))}
        </Row>
      </Container>
      {datar.length > 0 ? (
        <div className="bg-dark py-4">
          <Footer />
        </div>
      ) : (
        <div className=" bg-dark py-4 position-fixed bottom-0 w-100">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Content;
