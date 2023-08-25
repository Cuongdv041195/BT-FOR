//BT1: Tìm số nguyên dương nhỏ nhất
document.getElementById('tinhBT1').onclick = function () {  
    //B1: Input
    var ketQuaBT1 = 0;
    var number = 0;
    //B2: Xử lý
    while (ketQuaBT1 < 10000) {
        number++;
        ketQuaBT1 += number;
    }
    //B3: Output
    document.getElementById('resultBT1').innerHTML = number;
}

//BT2: Tính tổng: S(n) = x + x^2 + x^3 + ... + x^n
document.getElementById('tinhBT2').onclick = function () {  
//B1: Input
var bienX = +document.getElementById('bienX').value;
var bienN = +document.getElementById('bienN').value;
var tongS = 0;
var tichT = 1;
//B2: Xử lý
for (var i = 1; i <= bienN; i++){
    tichT = tichT * bienX;
    tongS += tichT;
}
//B3: Output
document.getElementById('resultBT2').innerHTML = tongS.toLocaleString();
}

//BT3: Tính giai thừa n
document.getElementById('tinhBT3').onclick = function () {  
    //B1: Input
    var number3 = +document.getElementById('number3').value;
    var giaiThuaBT3 = 1;
    
    //B2: Xử lý
    for (var i = 1; i <= number3; i++){
      giaiThuaBT3 *= i;
    }
    //B3: Output
    document.getElementById('resultBT3').innerHTML = giaiThuaBT3.toLocaleString();
    }



//BT4: Tạo div
//B1: Input
function taoDivMoi() {
    var divMoi = document.getElementById('divMoi'); 
    //B2: Xử Lý
    for (var i = 1; i <= 10; i++) {
      var newDiv = document.createElement('div');
      newDiv.innerHTML = 'Div số ' + i;
      // Kiểm tra vị trí của div
      if (i % 2 === 0) {
        newDiv.className = 'bg-danger mb-2 text-white';
      } else {
        newDiv.className = 'bg-primary mb-2 text-white';
      }
      //B3: Output
      divMoi.appendChild(newDiv);
    }
  }

//BT5: In số nguyên tố
//B1: Input
function kiemTraSNT(n){
 var flag = true;
 if(n < 2){
  flag = false;
 }else if(n == 2){
  flag = true;
 }else if (n % 2 == 0){
  flag = false;
 }else{
  for (i = 3; i <= Math.sqrt(n); i += 2){
    if (n % i == 0){
      flag = false;
      break;
    }
  }
 }
 return flag;
}
//B2: Xử lý
document.getElementById('tinhBT5').onclick = function (){
  var number5 = +document.getElementById('number5').value;
  number5 = parseInt(number5);
  console.log('number5: ', number5);
  var html = '';
  for (var i = 1; i <= number5; i++)
  if (kiemTraSNT(i)){
    html += i + ' <br/>';
  }

  //B3: Output
  document.getElementById('resultBT5').innerHTML = html
}