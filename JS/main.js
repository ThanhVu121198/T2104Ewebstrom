// var fullName = 'Vu Duc Thanh';
// var age = 23;
// alert(fullName);
// alert(age);
// setInterval(function() {
//     alert('Thong bao')
// },1000)
// var count=5;
// var random=math.random()*100
// random=parseInt(function () {
//     var n=prompt("nhap con so may man cua ban:")
//     n=parseInt(n);
//     if(n!=NaN){
//         var random = Math.random()*100; // math.random() taoj ra so tu 0 den 100
//         random=parseInt(random);// 1 so nguyen ngau nhieen tu 0 den 99
//         if(random ==n){
//             alert("chuc mung ban dang chung thuong")
//             clearInterval(loto);
//         }else{
//             alert("chuc ban may man lan sau")
//         }
//         count--;
//     }else{
//         alert("Vui long nhap lai so")
//     }
//     if (count<=0){
//         clearInterval(loto);
//     }
//
// },3000)
var min=10;
var sec=0;
var time = setInterval(function (){
    var min_txt = min>=10?min:"0"+min;
    var sec_txt = min
    console.log(min_txt+":"+sec_txt);
    sec--;
    if (sec<0){
        min--;
        sec=59;
    }
    if(min<0){
        clearInterval(time)
    }
},100)