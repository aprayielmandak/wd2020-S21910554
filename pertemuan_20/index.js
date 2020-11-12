//Variabel

//let & const
// let _umur = 25;
// _umur = 26;
// let nilai = 95.5;
// let sudahMenikah = true;
// let $nama = "Aprayiel Kezia Elsye Mandak";
// console.log(_umur);
// console.log($nama);

// let alamat;
// console.log(alamat);

// const tahunLahir = 2010;
// console.log(tahunLahir);

//Operator

//Aritmetic Operator (+,-,*,/)

// let angka1 = 10;
// let angka2 = 20;
// console.log(angka1 + angka2);

// let umur=30;
// let namaDepan = "Aprayiel";
// let namaBelakang = "Mandak"
// console.log("Nama Saya " + namaDepan + " " + namaBelakang + ". Umur saya adalah" + umur + "tahun"
// );

//Operator perbandingan

// let angka1 =10;
// let angka2 =9;

// console.log(angka1 <= angka2);


//ternary operator
// let hasil = 5;
// let hasil = angka <= 0 ? "Negatif" : "Positif";
// console.log(hasil);


// //Operator Logika
// let kondisi1 = true;
// let kondisi2 = true;

// console.log(kondisi1 || kondisi2);

// console.log(!kondisi1);

// let angka = promp("Masukan angka : ")
// console.log("angka yang dimasukan adalah" + angka);

//Exercise 7

//let berat = prompt("masukan Berat badan anda = kg");
//let tinggi = prompt("masukan Tinggi = cm");
//let bmi = berat / (tinggi*tinggi);
//console.log("BMI = " + bmi);

//console.log("Basic Javascript");

//Conditional JavaScript

// let firstName - "John"; 
// let isMarried = true;
// if (isMarried) {
//     console.log(firstName + " is married");
// } else {
//     console.log(firstName " is not married");
// }

/*
    Jika umur < 13 tahun maka tampilkan kategori anak-anak
    Jika umur 13 sampai 16 tahun tampilkan kategory remaja 
    Jika umur 17 sampai 25 tahun tampilkan kegory anak muda 
    Jika umur 25 sampai 50 tahun tampilkan kategory orang dewasa
*/


// let firstName = "John";
// let job = "teacher";
// switch (job) {
//   case "teacher" :
//     console.log(firstName + " is a teacher");
//     break; 
//   case "driver" :
//     console.log(firstName + " is a driver");
//     break;
//   case "instructor":
//     console.log(firstName + " 15 a instructor");
//     break; 
//   default:
//     console.log(firstName + " does something else"); 
//     break;
// }

let umur = 25;

// if (umur < 13) {
//     console.log ("Kategori anak - anak");
// } else if (umur >= 13 && umur < 17) {
//     console.log("Kategori remaja");
// } else if (umur >= 17 && umur < 26) {
//     console.log("Kategori anak muda");
// } else if (umur > 26 && umur < 50) {
//     console.log ("Kategory orang dewasa");
// }

// switch (true) {    
//     case umur < 13 :
//         console.log ("Kategori anak - anak");
//         break;
//     case umur >= 13 && umur < 17:
//         console.log("Kategori remaja");
//         break;
//     case umur >= 17 && umur < 26:
//         console.log("Kategori anak muda");
//         break;
//     case umur > 26 && umur < 50:
//         console.log ("Kategory orang dewasa");
//         break;
//     default:
//         console.log ("Tidak dalam range");
//         break;
// }

//JavaScript Function

// function helloWorld () {
//     console.log("Hello World function declaration");
// }

// let age = 18;
// let helloWorld = function (nama) {
//     console.log("Hello nama saya " + nama + ". Umur saya adalah " + age + " tahun");
// }

// helloWorld("Aprayiel Mandak");

function bmiCalculator () {
    let berat = prompt("Masukkan Berat Badan (kg) : ");
    console.log("Berat badan yang dimasukkan adalah " + berat);
    let tinggi = prompt("Masukkan Tinggi Badan (m) : ");
    console.log("Tinggi badan yang anda masukkan adalah " + tinggi);
    let hasil = berat / (tinggi * tinggi);
    console.log("BMI = " + hasil);

    if (hasil < 18.5) {
        alert ("Underweight");
    } else if (hasil >= 18.5 && hasil < 24.9) {
        alert("Normal Range");
    } else if (hasil >= 25.0 && hasil < 29.9) {
        alert("Overweight (preobese)");
    } else if (hasil >= 30.0) {
        alert ("Obese");
    } else if (hasil > 30.0 && hasil < 34.9) {
        alert ("Class I");
    } else if (hasil > 35.0 && hasil < 39.9) {
        alert ("Class II");
    } else if (hasil >= 40.00) {
        alert ("Class III");
    }
}
bmiCalculator();
