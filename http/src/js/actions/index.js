/**
 * Created by Neil on 2017/2/4.
 */
export const ALTER_WELCOME = 'DISMISS_WELCOME';
export function alterWelcome(state) {
    return {
        type: ALTER_WELCOME,
        state: state

    };
}

export const CHANGE_PAGE = 'CHANGE_PAGE';
export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page: page
    }
}

//mock state
let state = {
    welcomeDisplayed: true,
    streamList: {
        amount: 12,
        data: [
            {
                avatar: 'https://apic.douyucdn.cn/upload/avatar/000/12/63/31_avatar_big.jpg',
                capture: 'https://rpic.douyucdn.cn/a1702/04/03/3614_170204030455.jpg',
                link: 'www.douyu.com/quin',
                online: 0,
                platform: 'douyu',
                state: 0,
                streamer: 'quin',
                title: '【Quin】余生不过两万天'
            }, {
                avatar: '',
                capture: 'https://rpic.douyucdn.cn/a1702/04/12/229743_170204123618.jpg',
                link: 'www.douyu.tv/229743',
                online: 9121,
                platform: 'douyu',
                state: 1,
                streamer: 'Douyu秋秋丶',
                title: '秋❤不存在的避难所'
            }
        ]
    },
    searchResult: {
    },
    localData: {
        amount: 12,
        data: [
            {platform: 'douyu', roomid: 3614},
            {platform: 'panda', roomid: 100130}
        ]
    }
};
