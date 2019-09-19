import React from 'react';
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {input} from '../../redux/actions';

class InputLine extends React.Component {
    render() {
        return (
            <div>
                <InputGroup>
                    <Input placeholder="Type your input" onKeyPress={this.props.inputText} />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>example: Linux</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    inputText: (text) => dispatch(input(text)), 
});

export default connect(null, mapDispatchToProps)(InputLine);