// ? döngüler
/* for döngüsü
for(degisken ; koşul ; arttırma-azaltma){
    kodlar
}
*/


/*
for (let i=1; i<10 ;i++){
    console.log(i);
}

*/
/*
for(let i=1; i<=10 ; i++){
    if(i%2==1){
        console.log("Hai")
    }else{
        console.log("Meh");
    }
}
*/


/*
let toplam = 0;
for(let i =50; i>=1 ; i--){
    toplam=toplam+i;
    console.log(i);
}

console.log("Toplam : " , toplam); //her adımı yazmaması için dışarda tuttuk.
*/

// ? While döngüsü
//While(koşul){
//    kodlar
//    sayacın değeri
//  }


/*
let sayac=1;
while(sayac<=10){
    console.log(sayac);
    sayac++;
}
*/

let sayac=1;
while(sayac<=10){
    if(sayac%2==0){
        console.log(sayac);
    }
    sayac++;
}

//break ı döngülerde yazdım ordan bak.
//fonksyonlar klasörde.