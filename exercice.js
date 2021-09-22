// EXERCICE 1

let main = Array.from({ length: 1000 }, (_, i) => i + 1)
let sort = []
let sort2 = []

while (main.length > 0) {
    sort.push(main.pop())
}

while (sort.length > 0) {

    sort2.push(sort.pop())
}

while (sort2.length > 0) {

    main.push(sort2.pop())
}

console.log(main)




