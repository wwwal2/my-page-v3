import React from 'react';
import { Card, CardText, CardHeader, CardLink, CardBody, CardImg, Button } from 'reactstrap';

function NewsPayload(props) {
    return (
        <div>
            {
                props.data.articles ?
                    props.data.articles.map((item, index) => {
                        return (
                            <Card body inverse color="info" key={index}>
                             <CardBody>
                                    <CardHeader tag="h4">{item.title.toUpperCase()}</CardHeader>
                                    
                                </CardBody>
                                <CardImg height="100%" src={item.urlToImage} alt="Card image cap" />
                                <CardBody>
                                    <CardText>{item.description}</CardText>
                                    <Button href={item.url}> Follow the original article </Button>
                                </CardBody>
                            </Card>
                        )
                    })
                    : null
            }
        </div>
    )
}
export default NewsPayload;
