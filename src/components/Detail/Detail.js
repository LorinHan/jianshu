import React from 'react';
import Content from './components/Content.jsx';

export default function Detail(props) {
    return (
        <div>
            <Content index={props.match.params.id}></Content>
        </div>
    )
}