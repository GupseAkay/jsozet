

var marka = 'opel';
var model = 'astra';
var otomatik = 'yes';

// if/else koşulları
/*
if(otomatik=='yes') {
    console.log('araç otomatiktir.');
}
else{
    console.log('araç otomatik değildir.');
}

otomatik = true;

if(otomatik){
    console.log(marka+' '+model+'otomatik');
}

if(otomatik=='true')
{
    console.log("true");
}

*/

// ? switch statement

// 1: manuel
// 2: otomatik

var vites ='3';

if(vites=='1') {
    console.log('araç manuel');
} else if (vites =='2')      {
    console.log('araç otomatik');
} else{
    console.log('yanlış  bir değer');
}



vites='3';
switch(vites){
    case '1':
    console.log('araç manuel');
    break;
    case '2':
    console.log('arfaç otomatik');
    break;
    default:
        console.log('yanlış değer');
}

// break direk algılar koşulları arttırabilirz. if ile ise sürekli belirtmek gerekir.