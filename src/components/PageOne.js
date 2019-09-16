import React from 'react';
import { Container, Row, Col, Card, CardTitle } from 'reactstrap';
import TableModuleFrame from './TableModuleFrame/TableModuleFrame';
import CaruselReactStrap from './Carusel/CaruselReactStrap';

const cardStyle = {
    color:"white", 
    background:"#74848c"
}

function PageOne() {
    return (
        <div>
            <Container fluid style={{padding: 0, margin: 0}}>
                <Row noGutters style={{marginTop: "4vw"}}>
                    <Col>
                        <Card  style={cardStyle}>
                            <CardTitle tag="h3" className="text-center">
                                Pure js module
                            </CardTitle>
                        </Card>
                    </Col> 
                    <Col>
                        <Card  style={cardStyle}>
                            <CardTitle tag="h3" className="text-center">
                                Carousel
                            </CardTitle>
                        </Card>
                    </Col>  
                </Row>
                <Row noGutters>
                    <Col>
                        <TableModuleFrame />
                    </Col>
                    <Col>
                        <CaruselReactStrap />
                    </Col>
                </Row>
            </Container>    
        </div>
    );
}

export default PageOne;
