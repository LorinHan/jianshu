import React from 'react';
import styles from '../../../css/Home.less';
export default class Topic extends React.Component {
    shouldComponentUpdate(nextProps){
        if(this.props.topicList.length == nextProps.topicList.length) return false;
        return true;
    }
    render() {
        return (
            <div className={styles.topicWrapper}>
                {this.props.topicList.map((item) => {return (
                    <div className={styles.topicItem}>
                        <img src={item.imgUrl} alt=""/>
                        {item.title}
                    </div>
                )})}
                <span className={styles.topicItem + ' ' + styles.more}>更多热门专题 <i className='iconfont icon-jiantou'></i></span>
            </div>
        )
    }
    
}