<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="icofont.min.css">
</head>
<body>
    
   <header class="header">
       <div class="logo"></div>
       <div class="inputbox">
            <h1>身高 cm</h1>
            <div><input class="input inputCm" type="text" placeholder="請輸入身高"></div>
            <h1>體重 kg</h1>
            <div><input class="input inputKg" type="text" placeholder="請輸入體重"></div>
       </div>
       <button type="button" class="result" id="btn">
           <p class="value">看結果</p>
           <p class="bmi"></p>
           <div class="icon"></div>
        </button>
        
   </header>
   
   <div class="container">
       <div class="title"><h2>BMI紀錄</h2></div>
       <ul class="list"></ul>
   </div>
   
   
   <footer class="footer">
       <div class="footer-img"></div>
   </footer>
   
    <script type="text/javascript" src="index.js"></script>
</body>
</html>
