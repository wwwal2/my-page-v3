import React from 'react';
import { Fetch } from 'react-request';
import NewsPayload from './NewsPayload';

const NewsRequest = () => {
    const currentDate = () => {
        let a = new Date();
        return (a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate())
    }
    return (
        <div>
            <div>
                <Fetch url={`https://newsapi.org/v2/everything?q=${'apple'}&from=${currentDate()}&sortBy=popularity&apiKey=7d482593d89942c2b779e36b36986ada`}>
                    {({ data }) => {
                        if (data) { return (<NewsPayload data={data}/>)}
                        return null;
                    }}
                </Fetch>
            </div>
        </div>
    );
}


export default NewsRequest;