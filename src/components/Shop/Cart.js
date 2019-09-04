import React from 'react';
import { connect } from "react-redux";
import { Card, CardText, CardHeader, CardSubtitle, Button } from 'reactstrap';
import { add, remove } from '../../redux/actions';

class Cart extends React.Component {
    render() {
        return (
            <div>
                {this.props.readTheStore.map((item) => (
                    <Card key={item.title} color="info" inverse style={{display:"inline-block", width:"50%", marginTop: 10, marginBottom: 10}}>
                        <CardHeader tag="h4" className="text-truncate">
                            {item.title}
                        </CardHeader>
                        <CardText  style={{height: 150}}>
                            {item.description}
                        </CardText>
                        <CardSubtitle>
                           Count: {item.count} Summ: {item.totalPrice.toFixed(2)}
                        </CardSubtitle>
                        <Button color="success" onClick={() => this.props.addBtn(item.title)}>
                            Add
                        </Button>
                        <Button color="danger" onClick={() => this.props.removeBtn(item.title)}>
                            Remove
                        </Button>
                    </Card>
                ))}
                <div>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }} inverse tag="h3">
                        Total price of all {this.props.totalOfAll.toFixed(2)}
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ readTheStore: state.cartProducts, totalOfAll: state.totalOfAll });
const mapDispatchToProps = (dispatch) => ({
    removeBtn: (removeItem) => dispatch(remove(removeItem)), 
    addBtn: (addItem) => dispatch(add(addItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);