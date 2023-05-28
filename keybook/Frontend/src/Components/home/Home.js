import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import CenterMenu from "./CenterMenu";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="main-container">
      <Row>
        <Col xs={{ span: 3, order: 1 }} className="col-left">
          {/* <LeftSidebar /> */}
        </Col>
        <Col xs={{ span: 6, order: 2 }} className="col-center">
          <CenterMenu />
        </Col>
        <Col xs={{ span: 3, order: 3 }} className="col-right">
          {/* <RightSidebar /> */}
        </Col>
      </Row>
    </Container>
  );
}
