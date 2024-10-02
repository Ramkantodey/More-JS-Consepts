// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log('lazy logged');
// }, 4000)
// console.log(4);
// console.log(5);
// console.log(6);

// const { reject } = require("async")


// function doSomething() {
//     console.log(3);
// }

const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success)
        }
        else {
            reject(success);
        }
    })
}

myLoader()


    .then(data => console.log('resolved', data))
    .catch(error => console.error('rejected with value ', error)
    )



async function loadData() {
    const res = await fetch('');
    const data = await res.json()
    console.log(data);
}

loadData();



const taskLoader = async () => {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);

}