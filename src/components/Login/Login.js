import React from 'react';
import styles from '../../css/login.less';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    render() {
        console.log(this.props.login)
        if(this.props.login) {
            return <Redirect to='/'/>
        }
        return (
            <div className={styles.login}>
                <div className={styles.center}>
                    <Input placeholder="手机号或邮箱" ref={(user) => {this.props.user = user}} />
                    <Input.Password  placeholder="密码" ref={(pwd) => {this.props.pwd = pwd}} id='pwd' />
                    <Button type="primary" onClick={() => this.props.loginFunc(true, this.props.user.state.value)}>登录</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginFunc(value, user) {
            console.log(user)
            var pwd = document.getElementById('pwd').value;
            console.log(pwd);
            var action = {
                type: 'loginFunc',
                value: value
            };
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);