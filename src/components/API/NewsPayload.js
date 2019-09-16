import React from 'react';

function NewsPayload(props) {
    return (
        <div>
            {props.data.articles.map(item => {
                return (
                    <div style={{ borderBottom: "2px solid grey" }} key={item.source.id}>
                        <div><h4>{item.title}</h4></div>
                        <div><h5>{item.author}</h5></div>
                        <div><p>{item.description}</p></div>
                        <a href={item.url}> Follow the original article </a>
                    </div>
                )
            })}
        </div>
    )
}
export default NewsPayload;
