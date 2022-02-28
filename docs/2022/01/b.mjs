import {foo} from './a.mjs';
console.log('b.mjs');
console.log(foo);
export let bar = 'bar';


console.log(111)
Promise.resolve().then(res => {
    console.log(res, 333)
}).then(res => {
    console.log(res, 666)
})
new Promise((resolve) => {
    resolve(444)
}).then(res => {
    console.log(res, 555)
}).then(res => {
    console.log(res, 777)
})
console.log(222)
