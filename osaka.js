function timer(){
    var today = new Date();
    var osaka = new Date(2017,10,18,0,0,0,0);
    var remain = osaka - today;
    var day = Math.ceil(remain/(60*60*24*1000));
    var time = Math.ceil(remain%(60*60*24*1000) / 1000);
    var hour = Math.floor(time/3600);
    var minutes = Math.floor((time%3600)/60);
    var second = Math.floor((time%3600)%60);
    //console.log("" + day + "日" + hour + "時間" + minutes + "分" + second + "秒");
    document.getElementById("timer").innerText = "" + day + "日" + hour + "時間" + minutes + "分" + second + "秒";
}

setInterval(timer,1000);
