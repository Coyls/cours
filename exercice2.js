// EXERCICE 2

let main = Array.from({ length: 1000 }, (_, i) => i + 1)
let repaire = main
let reverse = []
let sort = []

while (sort.length < repaire.length) {

    while (main.length > 1) {
        reverse.push(main.shift())
    }

    sort.push(main.shift())

    while (reverse.length > 0) {
        main.push(reverse.shift())
    }
}

while (sort.length > 0) {
    main.push(sort.shift())
}

console.log(main)