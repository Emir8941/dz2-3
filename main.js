let input = document.querySelector('input')
let btn = document.querySelector('button')

let age = 14

// btn.addEventListener('click', () => {
//     new Promise((resolve, reject) => {
//         if(age == input.value){
//             resolve('урра вы угадали')
//         }else{
//             reject('не угадали попробуйте еще раз')
//         }
//     }).then((response) => console.log(response))
//     .catch((err) => console.log(err))
// })

let js = "JavaScript"

btn.addEventListener('click',() => {
    new Promise((resolve,reject) => {
        if (input.value == js.length) {
            alert("Вы угадали")
        }else {
            alert("Не правильно")
        }
    }).then((response) => console.log(response))
    .catch((err) => console.log(err))
})