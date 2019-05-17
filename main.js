let a = [];
let b = [1, 'масив', 20, true, 55];
console.log(a);
console.log(b);
console.log(b[2]);

let old = prompt('сколько вам лет?', '');
if (old < 6) {
    alert('Вы ещё не ходите в школу');
} else if (old <= 17) {
    alert('Вы школьник');
} else if (old <= 23) {
    alert('Вы студент');
} else if (old <= 23) {
    alert('Вы студент');
} else if (old >= 65) {
    alert('Вы пенсионер');
} else {
    alert('у вас отличный возраст');
}