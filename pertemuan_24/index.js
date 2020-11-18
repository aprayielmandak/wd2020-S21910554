//Array

let nilai = [90,80,75,100,85];
for (let i=0; i<nilai.length; i++)
{
    console.log ("Nilai = ", nilai[i]+5);
}

console.log(nilai); //menampilkan array

//nilai[2]=50;
//console.log(nilai[nilai.length-1]); //tampilkan nilai terakhir
//console.log(nilai.length);

let john = ["John","Doe",33,true];
console.log(john.length);
console.log(john); //menampilkan semua array

//Mengubah array menjadi string
//toString()
console.log (john.toString());

//mengganti koma dengan -
//join
console.log(john.join(" - "));

//elemen terakhir array dihapus
//pop()
john.pop();
console.log(john.join(" - "));

//menambahkan elemen diterakhir
//push
john.push();
john.push("Hello");
console.log(john.join(" - "));

//elemen pertama array dihapus
//shift()
john.shift();
console.log(john.join(" - "));

//elemen pertama ditambahkan pada array
//unshift
john.unshift("John");
john.unshift("Prof");
console.log(john.join(" - "));

//slice()
let Aprayiel = ["Aprayiel", "Doe", 18, true];
let Kezia = ["Kezia", "Doe", 19, true];
let Mandak = ["Mandak", "Doe", 17, true];
console.log(Aprayiel);
console.log(Kezia);
console.log(Mandak);

//sort()
let Key = ["Aprayiel", "Hallo", 18, true];
Aprayiel.sort();

console.log(Key);

let umur = [18, 17, 20, 30, 19];

umur.sort();
console.log(umur);

//reverse()
let Eca = ["Aprayiel", "Eca", 18, true];

Eca.reverse();

console.log(Eca);