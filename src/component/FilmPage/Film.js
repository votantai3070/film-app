import React from "react";
import { FilmList } from "../../pages/ListOfFilms";
import "./Film.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const Film = () => {
  return (
    <Container>
      <Row>
        {FilmList.map((item) => (
          <Col key={item.id}>
            <Card>
              <div className="form">
                <h2 className="title">{item.title}</h2>
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <div className="footer">
                  <span className="nation">{item.nation}</span>
                  <p>
                    <button className="button">
                      <Link to={`detail/${item.id}`}>Detail</Link>
                    </button>
                  </p>
                  <span className="year">{item.year}</span>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Film;
