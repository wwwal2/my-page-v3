import React from 'react';
import { connect } from "react-redux";
import { add } from '../../redux/actions';
import { Card, CardText, CardHeader, CardSubtitle, Button } from 'reactstrap';

import products from './dataForShop';

class Shop extends React.Component {
    render() {
        return (
            <div>
                {products.map((product) => (
                    <Card key={product.title} style={{display:"inline-block", width:"25%", marginTop: 10, marginBottom: 10}}>
                        <CardHeader tag="h4" className="text-truncate">
                            {product.title}
                        </CardHeader>
                        <CardText  style={{height: 150}}>
                            {product.description}
                        </CardText>
                        <CardSubtitle>
                            Price: {product.price}
                        </CardSubtitle>
                        <Button outline color="success" onClick={() => this.props.dispatchTitle(product.title)}>
                            Add to cart
                        </Button>
                    </Card>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({dispatchTitle: (idProduct) => dispatch(add(idProduct))})

export default connect(null, mapDispatchToProps)(Shop);
  