let obj1 = {a: 'apple', b: 'banana', c: 'carrot'};

let obj2 = {a: 1, b: 2, c: 2};

let obj3 = {a: 'hello', b: 100, c: [1, 2, 3, 4]};

let obj4 = {
    a: {a1: 1, a2: 2},
    b: {b1: 3, b2: 4},
    c: {c1: 5, c2: 6}
};

console.log(obj1['a']);

console.log(obj2.a);

console.log(obj3['c']);

console.log(obj4.c.c2);