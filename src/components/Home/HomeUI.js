import styles from '../../css/Home.less';
import Banner from './components/Banner';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
export default function HomeUI(props) {
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.left}>
                <Banner></Banner>   
                <Topic topicList={props.topicList}></Topic>
                <List list={props.list} page={props.page} loadMore={props.loadMore}></List>
            </div>
            <div className={styles.right}>
                <Recommend ewmShow={props.ewmShow}></Recommend>
            </div>
            {props.showScroll ? <div className={styles.backTOP} onClick={() => {window.scrollTo(0, 0)}}><i className='iconfont icon-tubiaozhizuo-'></i></div> : null}
        </div>
    )
}