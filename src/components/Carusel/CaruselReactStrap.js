import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container, Row, Col, Card, CardTitle} from 'reactstrap';
import { React_JS, Redux, ES6logo, CSSlogo, Less, Sass, Bootstrap, items } from './images';

class CarouselReactStrapp extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }
   
    onExiting = () => (this.animating = true)
    onExited = () => (this.animating = false)
    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} style = {{width: '100%', height: '30vw', display:'block', margin:'auto'}} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });
        return (
            <Container fluid style={{padding: 0, margin: 0}}>
                <Row style={{height:"4vw"}} noGutters>
                </Row>
                <Row noGutters>
                    <Col>
                        <Card  style={{color:"white", background:"#74848c"}}>
                            <CardTitle tag="h3" className="text-center">
                                Pure js hand-made module
                            </CardTitle>
                        </Card>
                    </Col> 
                    <Col>
                        <Card  style={{color:"white", background:"#74848c"}}>
                            <CardTitle tag="h3" className="text-center">
                                reactStrap Carousel
                            </CardTitle>
                        </Card>
                    </Col>  
                </Row>
                <Row noGutters>
                    <Col>
                        <iframe 
                            src="https://htmlpreview.github.io/?https://github.com/wwwal2/Table-module/blob/master/index.html"
                            height="100%"
                            width="100%"
                            frameBorder="0"
                        />
                    </Col>
                    <Col>
                        <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </Col>
                </Row>
                <Row noGutters style={{marginTop:"2vw"}}>
                    <hr style={{color: "red", backgroundColor: "red", height: "5px"}}></hr>
                </Row>
            </Container>              
        );
    }
}


export default CarouselReactStrapp;
