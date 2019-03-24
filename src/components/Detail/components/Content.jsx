import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Content extends React.Component{
    componentDidMount() {
        console.log(this.props.index)
        axios.get('https://www.easy-mock.com/mock/5c8e0a6d664c69140f7d07be/list/content')
        .then((res) => {
            this.props.getContent(res.data.data);
        }).catch(() => {this.props.getContent(`<div class='detailWrapper'>页面加载失败了。。。</div>`)})
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        content: state.detail.content
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getContent(content) {
            var action = {
                type: 'content',
                content: content
            };
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);