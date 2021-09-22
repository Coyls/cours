import fs from "fs"

fs.readFile("./e5.csv", "utf-8", (err, data) => {
    let linesRaw = data.split('\n')
    linesRaw.shift()

    const lines = linesRaw.map(line => {
        const tmp = line.split(',')
        return tmp

    })

    const root = {
        id: "0",
        node: []
    }

    const recursive = (root, parent) => {

        lines.forEach(line => {
            if (line[1] === parent) {
                const tmp = {
                    id: line[0],
                    node: []
                }
                root.node.push(tmp)

                recursive(tmp, line[0])
            }

        })

    }

    recursive(root, root.id)

    // console.log(root)
    /* fs.writeFile("./thing.json", JSON.stringify(root), function (err) {
        if (err) throw err;
        console.log('Fichier créé !');
    }); */

    const csvArray = []

    const recursive2 = (root) => {

        if (el.node.length === 0) {
            const tmpRoot = []
        }


        root.node.forEach(el => {
            // if (el.node.length === 0) {
            csvArray.push(el.id)
            // }
            recursive2(el)
        })

    }

    recursive2(root)






    console.log('csvArray:', csvArray)











})







