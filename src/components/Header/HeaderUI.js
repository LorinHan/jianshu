import styles from '../../css/header.less';
import logo from '../../static/logo.png';
import { Link } from 'react-router-dom';

// css模块化的继承
// .test{background-color: #f40;}
// composes: test;
export default function HeaderUI(props) {
    return (
        <div className={styles.header}>
            {/* logo区域 */}
            <Link to="/" className={styles.logo}>
                <img src={logo} alt=""/>
            </Link>
            <nav className={styles.nav}>
                <div className={styles.left + ' ' + styles.active}>首页</div>
                <div className={styles.left}>下载APP</div>

                {/* 顶部搜索框区域 */}
                <div className={styles.searchWrap}>
                    <input 
                    className={styles.search + ' ' + (props.focused ? styles.focused : '')} 
                    onFocus={() => {
                        props.inputFocused();
                        if(props.list.length == 0) {
                            props.getList();
                        }}} 
                    onBlur={() => props.inputFocused()}
                    placeholder='搜索'/>
                    <i className={"iconfont icon-fangdajing " + (props.focused ? styles.iconBg : '')}></i>
                    {/* 搜索框聚焦时出现的推荐区域 */}
                    <div className={styles.hot + ' ' + (props.mouseIn ? styles.show : styles.hide)} onMouseLeave={props.hotHide}>
                        <div className={styles.title}>热门搜索</div>
                        <span className={styles.switch} onClick={() => {props.hotChange(props.spinIcon, styles.changeRotate);}}>换一批</span>
                        <i ref={(icon) => {props.spinIcon = icon}} className={'iconfont icon-change ' + styles.change}></i>
                        <div className={styles.box}>
                            {props.list.map((item, index) => {
                                if(index >= (props.page - 1) * 10 && index < (props.page * 10))
                                return <a href="#" className={styles.boxItem}>{item}</a>
                            })}
                        </div>
                    </div>
                </div>

                {/* 顶部栏的右侧区域 */}
                {props.login ? <div className={styles.right} onClick={() => props.logout()}>退出</div> : <div className={styles.right}><Link to='/login'>登录</Link></div>}
                
                <div className={styles.right + ' iconfont icon-Aa'}></div>
            </nav>
            <div className={styles.addition}>
                <button><i className="iconfont icon-bi"></i> 写文章</button>
                <button>注册</button>
            </div>
        </div>
    )
}