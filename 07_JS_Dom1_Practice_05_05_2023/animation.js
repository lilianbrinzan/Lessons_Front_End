const t= setInterval(move, 20); 
// pornim functia la fiecare  20 milesecunde
let pos = 0;
let flag = true;
const box = document.getElementById('box');

// pentru BackEnd
//clearInterval(t); // aceasta opreste functia setInterval
function move(){
    if (pos === 150){
        flag = false;
    }
    if (pos === 0){
        flag = true;
    }
    if (flag) {
        pos++;
    } else {
        pos--;
        
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}

// pentru FrontEnd
/**
 * 
 * function move(){
    flag ? pos++ : pos--;
     if (pos === 0 || pos === 150 ){
         flag = !flag;
     }
     box.style.left = pos + 'px';
     box.style.top = pos + 'px';
 }
 * 
 */


/*
= - присвоение;
== - не строгое сравнение (сравнение значений без учёта типов данных);
=== - строгое сравнение (с учётом типов данных);
Сложение числа и строки называется конкатинацией.
Результатом будет "слипшаяся" строчка
*/

/**
 *  console.log(new Date());
setInterval (printTime, 1000);
function printTime() {
    const d = new Date();
    const h = d.getHours();

    //TODO Дописать функцию printTime(), чтобы она
    // выводила на экран актуальное время
}
 */

