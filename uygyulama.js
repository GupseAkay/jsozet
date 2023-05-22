/*
bir öğrencinin bilgilerini alıp otunu hesaplayan program yapalım

** ad giriniz (ad)
** numara giriniz (ogrno)
** cinsiyet giriniz (cinsiyet)
** ders adı giriniz (ders)
** 1. yazılı notu (not1)
** 2. yazılı notu (not2)
** ortalama hesapla ve console'a yazdır.

*/

var ad = "Gupse AKAY";
var ogrno = '0049'; // matematiksel işlem olmayacağı için tırnak koyduk
var cinsiyet = true; // kadın : true erkek : false
var ders = "türkçe";
var not1 = 50; 
var not2 = 60;
var ortalama = (not1 + not2)/2;




console.log(ogrno + "numaralı " + ad + " isimli öğrencinin " + " dersinden aldığı ortalama "+ ortalama);





var ad = prompt("adınızı giriniz : ");
var ogrno = prompt("öğrenci no : ");
var ders = prompt("dersin adı");
var not1 = prompt("vize notunuz : ");
var not2 = prompt("final notunuz : ");
var ortalama = (Number(not1) + Number(not2))/2;

console.log(ogrno + "numaralı " + ad + " isimli öğrencinin " + " dersinden aldığı ortalama "+ ortalama);
