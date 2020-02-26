// DOM指定
var button = document.querySelector('.result');
var list = document.querySelector('.list');
var back = document.querySelector('.icon');
var btn = document.querySelector('#btn');
var data = JSON.parse(localStorage.getItem('BMIData')) || [] ;



//監聽
button.addEventListener('click',BMI,false);
back.addEventListener('click',backMove,false);
list.addEventListener('click',dels,false);
updateData(data);

// 定義計算BMI函式
function BMI(){
    
    var height = document.querySelector('.inputCm').value;
    var weight = document.querySelector('.inputKg').value;
    var m = (height)/100;
    var kg = weight;
    var BMI = (kg / (m*m)).toFixed(2);
    var status = "";
    var leftcolor = "";
    if(BMI == "NaN"){
        alert("請輸入正確數值!");
        return;
    }else if(height == ""){
        alert("請輸入身高");
        return;
    }else if(weight == ""){
        alert("請輸入體重");
        return;
    }
    
    //判斷BMI加入li，改button,color
    if(BMI < 18.5){
        status = '過輕';
        leftcolor = 'Level1';
        button.setAttribute("class","blue");
    }else if(BMI >=18.5 && BMI < 24 ){
        status = '理想';
        leftcolor = 'Level2';
        button.setAttribute("class","green");
    }else if(BMI >= 24 && BMI < 27){
        status = '過重';
        leftcolor = 'Level3';
        button.setAttribute("class","orange1");
    }else if(BMI >= 27 && BMI < 30){
        status = '輕度肥胖';
        leftcolor = 'Level4';
        button.setAttribute("class","orange2");
    }else if(BMI >= 30 && BMI < 35){
        status = '中度肥胖';
        leftcolor = 'Level5';
        button.setAttribute("class","orange3");
    }else if(BMI >= 35){
        status = '重度肥胖';
        leftcolor = 'Level6'; 
        button.setAttribute("class","red");
    }
    
    //按鈕改狀態
    document.querySelector('.value').textContent = BMI;
    document.querySelector('.bmi').textContent = 'BMI';
    
    
    
    
    //日期
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0
    var yyyy = today.getFullYear();
    var time = dd + '-' + mm + '-' + yyyy;
    
    
    
    
    //localstorage 處理
    var dataContent = {
        status : status,
        height : height,
        weight : weight,
        BMI : BMI,
        leftcolor : leftcolor,
        time : time
    };  
    
    //將資料物件存入array並存到localstorage
    data.push(dataContent);
    localStorage.setItem('BMIData',JSON.stringify(data));
    
    //資料更新
    updateData(data);
    
}

//將資料傳入介面 (updateData)
function updateData(item){
    var str = '';
    for(var i=0;i <item.length;i++ ){
        str += '<div class="list-box '+item[i].leftcolor+'" id="list-box"><li class="status">' +item[i].status+ '</li>';
        str += '<li class="BMI"><span class="span-name">BMI</span>' +item[i].BMI+ '</li>';
        str += '<li class="height"><span class="span-name">Height</span>'+item[i].height+'cm'+ '</li>';
        str += '<li class="weight"><span class="span-name">Weight</span>' +item[i].weight+'kg'+'</li>';
        str += '<li class="time">' +item[i].time+ '</li><i class="icofont-close-line" data-index='+[i]+' ></i></div>';
    }
    list.innerHTML = str;
}


//back鍵的函式
function backMove(e){
    e.stopPropagation();
    btn.removeAttribute("class");
    btn.setAttribute("class","result");
    document.querySelector('.value').textContent = '看結果';
    document.querySelector('.bmi').textContent = '';
}


// delete 刪除資料
function dels(e){
    e.preventDefault();
    if(e.target.nodeName  == 'I'){
        // index = 被點擊元素 (i 標籤) 的 data-index 值(0、1、2、3......)
        var index = e.target.dataset.index;
        // 刪除 data 其中一筆資料(index=0 就是第一筆，index=1 就是第二筆，以此類推)
        data.splice(index, 1);
        // 將 "刪除" 後的 data 資料 "轉為字串" 存入 localStorage
        localStorage.setItem('BMIData', JSON.stringify(data));
        // 將 "刪除" 後的 data 資料 帶入 updateData 函式 重新跑一次
        updateData(data);
        
    }
}
