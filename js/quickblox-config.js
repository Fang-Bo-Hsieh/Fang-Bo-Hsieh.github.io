;(function(window) { // 前面加分號以避免，寫IIFE的時候，在執行體前不主動加分號而出現的錯誤
    'use strict';

    var CONFIG = {
        debug: true,
        webrtc: {
            answerTimeInterval: 30,
            dialingTimeInterval: 5,
            disconnectTimeInterval: 35,
            statsReportTimeInterval: 5
        }
    };

    var CREDENTIALS = {
        'prod': {
            'appId': 67300,
            'authKey': 'hCkKsEWND6nv8vu',
            'authSecret': 'E5dXqMg97xVzgc3'
        },
        //'test': {
        //    'appId': 39854,
        //    'authKey': 'JtensAa9y4AM5Yk',
        //    'authSecret': 'AsDFwwwxpr3LN5w'
        //}
        'test': {
            'appId': 71196,
            'authKey': 'OnHJpa4CC57t3GR',
            'authSecret': 'sEjebG3v2L-TJBk'
        }
    };

    var MESSAGES = {
        'login': 'Login as any user on this computer and another user on another computer.',
        'create_session': '創建會話中...',
        'connect': '連接中...',
        'connect_error': 'Something went wrong with the connection. Check internet connection or user info and try again.',
        'login_as': '登入為 ',
        'title_login': '選擇用戶來登入:',
        'title_callee': '選擇用戶去撥打:',
        'calling': '撥打中...',
        'webrtc_not_avaible': '您的瀏覽器不支援WebRTC',
        'no_internet': '請確認您的網路連線是否正常'
    };

    window.CONFIG = {
        'CREDENTIALS': CREDENTIALS,
        'APP_CONFIG': CONFIG,
        'MESSAGES': MESSAGES
    };
}(window));
