

function clock(){
    alert('怎麼會不知道?這可是你生日ㄟ (╬ﾟдﾟ)╭∩╮');
}

no3.addEventListener("click",function(){
    var no1=document.getElementById("no1");
    var no2=document.getElementById("no2");
    
    if(no1.value!=1225 || no2.value!=1208){
        alert('你居然輸入錯誤??(-`ェ´-╬)給我重新輸入 ');
    }
    else{
        alert('登陸成功~ヾ(●゜▽゜●)♡');
        var no4=document.getElementById("no4");
        no4.href = 'bae2.html';
        no4.innerText="好啦你可以按了啦ㄚㄚㄚㄚㄚ啊!";
    }
})

function s() {
    　var Today=new Date();
    　alert("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日"+'又是愛你的一天~');
    }




        

        
    