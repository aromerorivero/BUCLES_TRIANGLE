//Looping un triangulo
let simbolo = "#";
let contador = 0;

while (contador < 9) {
    console.log(simbolo);
    simbolo = simbolo + "#";
    contador = contador + 1;
};

//Looping un triangulo con for

for (let hash = "#"; 
hash.length < 10; 
hash+= "#")
console.log(hash)
;