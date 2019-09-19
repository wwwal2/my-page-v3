import React from 'react';
import { connect } from "react-redux";
import { Fetch } from 'react-request';
import NewsPayload from './NewsPayload';

class NewsRequest extends React.Component {
    currentDate = () => {
        let a = new Date();
        return (a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate())
    }
    render() {
        return (
            <div>
                <Fetch url={`https://newsapi.org/v2/everything?q=${this.props.storeWord}&from=${this.currentDate()}&sortBy=popularity&apiKey=7d482593d89942c2b779e36b36986ada`}>
                    {({ data }) => {
                        if (data) { return (<NewsPayload data={data} />) }
                        return null;
                    }}
                </Fetch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ storeWord: state.inputWord });
export default connect(mapStateToProps)(NewsRequest);