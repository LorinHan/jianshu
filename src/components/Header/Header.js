import React from 'react';
import HeaderUI from './HeaderUI';
import { connect } from 'react-redux';
import axios from 'axios';

class Header extends React.Component{
    render() {
        return (
            <HeaderUI focused={this.props.focused} 
                      list={this.props.list} 
                      inputFocused={this.props.inputFocused} 
                      getList={this.props.getList}
                      page={this.props.page}
                      mouseIn={this.props.mouseIn}
                      totalPage={this.props.totalPage}
                      hotHide={this.props.hotHide}
                      hotChange={this.props.hotChange}
                      login={this.props.login}
                      logout={this.props.logout}>  
            </HeaderUI>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
        list: state.header.list,
        page: state.header.page,
        totalPage: state.header.totalPage,
        mouseIn: state.header.mouseIn,
        login: state.login.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputFocused() {
            var action = {
                type: 'inputFocused',
            };
            dispatch(action);
        },
        getList() {
            axios.get(' https://www.easy-mock.com/mock/5c8e0a6d664c69140f7d07be/list/list', {
                headers: {
                    'Authorization': 'Bearer '
                }
            })
            .then((res) => {
                var action = {
                    type: 'list',
                    value: res.data.data
                };
                dispatch(action);
            }).catch(() => {console.log('easymock数据请求失败')})
        },
        hotChange(e, rotateClass) {
            e.classList.add(rotateClass)
            setTimeout(() => {
                e.classList.remove(rotateClass)
            }, 700)
            var action = {
                type: 'hotChange'
            };
            dispatch(action);
        },
        hotHide() {
            var action = {
                type: 'hotHide'
            };
            dispatch(action);
        },
        logout() {
            var action = {
                type: 'logout'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);