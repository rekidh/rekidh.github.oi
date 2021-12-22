window.addEventListener("scroll", function(){
var nav = document.querySelector("nav")
nav.classList.toggle("sticky", window.scrollY)
})
var tes = confirm ("kamu yakin ?");
    if ( tes === true){alert("user menekan tombol OK!");}

var nama =  prompt ('Hallo, Siapa nama kamu?');
alert("Hai"+""+nama);


alert("mari bermain...");
var main = true;
while (main === true) {
        var data = prompt("Tuliskan Nama !");
        alert("hai"+" "+data);
        main = confirm ("yakin?")
    }

var jmlangkot = 10;
var angkotJln=7;
var noAngkot= 1;

while( noAngkot<=angkotJln){
    console.log('Angkot No.'+ noAngkot + 'beroperasi dengan baik.')
noAngkot++;
}

for ( noAngkot=angkotJln+1; noAngkot <= jmlangkot ;noAngkot++ ){
    
    console.log( "Angkot No."+noAngkot+ " sedang tidak beroperasi")
}
var i = 10;
var j = 7 ;
var n = 1 ;
while(n <= j ){
    console.log('Angkot No.'+ n +'beroperasi')
n++;
}
for( n=j+1; n<=i ; n++){ 
    console.log('Angkot No.'+n+'tidak beropeasi')
}
for( n= 1; n<=i ; n++){ 
    if( n<= j){
        console.log('Angkot No.'+n+'beroperasi');
    } else{
        console.log('Ankot No.'+n+ 'tidak beroperasi');
    }
}
