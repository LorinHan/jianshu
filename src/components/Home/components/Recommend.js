import styles from '../../../css/Home.less';
import img1 from '../../../static/recommend1.png';
import img2 from '../../../static/recommend2.png';
import img3 from '../../../static/recommend3.png';
import img4 from '../../../static/recommend4.png';
import img5 from '../../../static/recommend5.png';
import img6 from '../../../static/recommend6.png';
import ewm from '../../../static/ewm.png';
export default function Recommend(props) {
    return (
        <div className={styles.recommendWrapper}>
            {/* 右侧区域的条形图区域 */}
            <a href="https://www.jianshu.com/mobile/club" target='_blank'>
                <img className={styles.recommendItem} src={img1} alt=""/>
            </a>
            <img className={styles.recommendItem} src={img2} alt=""/>
            <img className={styles.recommendItem} src={img3} alt=""/>
            <img className={styles.recommendItem} src={img4} alt=""/>
            <img className={styles.recommendItem} src={img5} alt=""/>
            <img className={styles.recommendItem} src={img6} alt=""/>
            
            {/* 右侧区域的二维码区域 */}
            <div className={styles.ewm} 
                 onMouseEnter={() => {props.ewmShow(props.img, 1)}}
                 onMouseLeave={() => {props.ewmShow(props.img, 0)}}>
                <img className={styles.show} src={ewm} alt="" ref={(img) => {props.img = img}}/>
                <img src={ewm} alt=""/>
                <div className={styles.text}>
                    <h2>下载简书APP</h2> <i className='iconfont icon-jiantou'></i>
                    <p>随时随地发现和创作内容</p>
                </div>
            </div>
        </div>
    )
}