import React from 'react';
import Shop from './Shop/Shop';
import Cart from './Shop/Cart';
import { Container, Row, Col, Card } from 'reactstrap';

function PageTwo() {
    return (
        <Container fluid>
            <Row noGutters style={{marginTop:"3vw"}}>
                <Col>
                    <Card tag="h2" className="text-center" style={{color:"white", background:"#74848c"}}>
                        Redux rendering
                    </Card>
                </Col>
            </Row>
            <Row noGutters>
                <Col sm="7">
                    <Card tag="h3" className="text-center">
                        The shop
                    </Card>
                </Col>
                <Col sm={{ size: 4, offset: 1 }}>
                    <Card tag="h3" className="text-center" color="info">
                        The cart
                    </Card>
                </Col>
            </Row>
            <Row noGutters>
                <Col sm="7">
                    <Shop />
                </Col>
                <Col sm={{ size: 4, offset: 1 }}>
                    <Cart />
                </Col>
            </Row>
        </Container>
    );
}

export default PageTwo;
