import React from 'react';
import styles from '../../../css/Home.less';
import { Carousel } from 'antd';

export default class Banner extends React.Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            // <img width='100%' height='270' src="https://upload.jianshu.io/admin_banners/web_images/4622/e1304936b67030a9a597656889ec4b0bb98f50f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
            <Carousel autoplay>
                <div><img className={styles.banner} src="https://upload.jianshu.io/admin_banners/web_images/4622/e1304936b67030a9a597656889ec4b0bb98f50f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
                <div><img className={styles.banner} src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
                <div><img className={styles.banner} src="https://upload.jianshu.io/admin_banners/web_images/4620/8ce28ed4656eaa9d606d92c60ba6a04e419cf39b.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
            </Carousel>
        )
    }
}