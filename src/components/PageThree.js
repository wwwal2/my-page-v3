import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import InputLine from './API/Input';
import NewsRequest from './API/NewsRequest';

function PageTwo() {
    return (
        <div>
            <Container fluid>
                <Row style={{marginTop: "4vw"}}>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <InputLine />
                    </Col>
                </Row>
                <Row style={{marginTop: "1vw"}}>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <NewsRequest />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageTwo;
