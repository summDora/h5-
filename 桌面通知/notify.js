//请求通知权限
Notification.requestPermission().then(function(permission) {
　　if(permission === 'granted'){
　　    console.log('用户允许通知');
　　}else if(permission === 'denied'){
　　    console.log('用户拒绝通知');
　　}
});
//获取权限状态
if(Notification.permission === 'granted'){
　　    console.log('用户允许通知');
　　}else if(Notification.permission === 'denied'){
　　    console.log('用户拒绝通知');
　　}else{
　　    console.log('用户还没选择，去向用户申请权限吧');//default
　　    console.log(Notification.permission);
　　}
//通知消息内容
var n = new Notification('状态更新提醒',{
　　body: '你的朋友圈有3条新状态，快去查看吧',
　　tag: 'zzfriend',
　　icon: 'http://ku.zzfriend.com/tem/image/logo.png',
　　requireInteraction: true
})