let num = prompt("Escribe un número");
let array = []

for(i = 1; (num*i) <= 100; i++) {
  let mult = num * i;
  array.push(mult);
}

console.log(array);