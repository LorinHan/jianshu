import React from 'react';
import HomeUI from './HomeUI';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends React.PureComponent{
    componentDidMount() {
        this.props.getList();
        window.addEventListener('scroll', (e) => {
            if(document.documentElement.scrollTop < 400){
                this.props.scroll(false);
            } else {
                this.props.scroll(true);
            }
        })
    }
    ewmShow = (e, opacity) => {
        e.style.opacity = opacity;
    }
    render() {
        return (
            <HomeUI
                topicList={this.props.topicList}
                list={this.props.list}
                ewmShow={this.ewmShow}
                page={this.props.page}
                loadMore={this.props.loadMore}
                showScroll={this.props.showScroll}
            ></HomeUI>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.home.topicList,
        list: state.home.list,
        page: state.home.page,
        showScroll: state.home.showScroll
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getList(page = 1) {
            axios.get('/topicList?page=' + page)
            .then((res) => {
                var action = {
                    type: 'topicList',
                    data: res.data.data,
                    list: res.data.list
                };
                dispatch(action);
            })
        },
        loadMore(page) {
            axios.get('/topicList?page=' + (page + 1))
            .then((res) => {
                var action = {
                    type: 'loadMore',
                    list: res.data.list
                };
                dispatch(action);
            })
        },
        scroll(show) {
            var action = {
                type: 'scroll',
                show: show
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);