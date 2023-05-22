/*
? Uygulama 1:
girilen doğum yılına göre ehliyet alınıp alınamayacağını hesaplayuınız. 
Eğer 18 yaşından küçük ise kaç senesi kalmıştır?

? Uygulama 2:
Girilen ay bilgisine göre mevsim bilgisini yazınız.
(1:ocak 2:şubat...)
*/


/*
var dogum = prompt("Doğum yılınızı giriniz");
var yil =2023;
var yas = yil - dogum;

if(yas<18){
    console.log("Ehliyet alamazsınız");
    console.log("Ehliyet alabilmek için " +(18-yas)+" sene beklemelisiniz");
}
else if(yas>=18){
    console.log("Ehliyet alabilirsiniz");
}
*/



var ay= prompt("Ay bilgisini girin : ");
switch(ay){
    case  '1':
    case  '2':
    case '12':
console.log("Kış Mevsimi");
break;

case '3':
    case '4':
        case '5':
            console.log("İlkbahar Mevsimi");
            break;
            case '6':
                case '7':
                    case '8':
                        console.log("Yaz Mevsimi");
                        break;

                        case '9':
                            case '10':
                                case '11':
                                    console.log("Sonbahar Mevsimi");
}
