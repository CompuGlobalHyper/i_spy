const array = []

const controller = {
    indexGet(req, res) {
        res.status(200).json({message: "Hello World!"})
    },

    checklistPut(req, res) {
        const { item } = req.body.item
        console.log(item)
        res.status(200).json({item})

    },
    //tests
    testGet(req, res) {
        res.json({ array })

    },
    testPost(req, res) {
        array.push(req.body.name)
        res.send('success!')
    },
    testChecklistPut(req, res) {
        res.status(200).json({message: "You tried to update the checklist"})
    }

}

module.exports = { controller }

