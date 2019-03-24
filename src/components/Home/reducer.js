// 创建默认数据：
const defaultState = {
    topicList: [
        {
            id: 1, 
            title: '手绘', 
            imgUrl: 'https://upload-images.jianshu.io/upload_images/15429694-96a1ad6437aaf7cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    list: [],
    page: 1,
    showScroll: false
};
// 导出一个箭头函数，其中传入两个参数，一个是存储数据，一个是会话
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'topicList': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.topicList = action.data;
            newState.list = action.list;
            return newState;
        }
        case 'loadMore': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.page += 1;
            for(var i = 0; i < action.list.length; i ++) {
                newState.list.push(action.list[i]);
            }
            return newState;
        }
        case 'scroll': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.showScroll = action.show;
            return newState;            
        }
        default: 
            return state; 
    }
}