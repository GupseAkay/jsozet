// matematiksel operatörler

var x = 10;
var y = 20;
var z = 15;

console.log(x+y);
console.log((x+y)/z);
console.log(x * y+z);

/* aritmetik operatörler

+ toplama
- çıkarma
* çarpma
/ bölme
% mod alma
++ bir arttırır
-- bir eksiltir
** üs alma
*/

// karşılaştırma operatörleri 
/*
 == eşit mi
 === tip ve değer eşit mi
 != eşit değil mi
 > büyük mü
 < küçük mü
 >= büyük eşit mi
 <= küçük eşit mi

*/

var sonuc = x>y;
console.log(sonuc);

console.log(x<y);
console.log(x>=z);
console.log(x=="10");
console.log(x!=z);


// mantıksal operatörler
/*
&& ve operatörü iki true = true. bir false sonucu false yapar
|| veya operatörü true veya false = true (çizgiler option+ tire)
! değil operatörü false direk
*/

console.log((x>y) && (x>z)); 

console.log((20>10) || (30<=20));

console.log(!(x>z));



