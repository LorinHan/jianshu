import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../css/Home.less';
export default class List extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(this.props.list.length == nextProps.list.length) {return false;}
        else return true;
    }
    render() {
        return (
            <div>
                {this.props.list.map((item, index) => {return (
                    <Link to={'/detail/' + index}>
                    <div className={styles.listItem}>
                        <div className={styles.text}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <div className={styles.desc}>{item.desc}</div>
                        </div>
                        <img src={item.imgUrl} alt=""/>
                        <i className={'iconfont icon-31 ' + styles.listIcon + ' ' + styles.first}></i><span className={styles.icondesc + ' ' + styles.first}>5.0</span>
                        <i className={'iconfont icon-pinglun ' + styles.listIcon}></i><span className={styles.icondesc}>3</span>
                        <i className={'iconfont icon-aixin ' + styles.listIcon}></i><span className={styles.icondesc}>14</span>
                    </div>
                    </Link>
                )})}
                <div className={styles.loadMore} onClick={() => this.props.loadMore(this.props.page)}>阅读更多</div>
            </div>
        )
    }
}