const array = []

const controller = {
    indexGet(req, res) {
        res.status(200).json({message: "Hello World!"})
    },
    testGet(req, res) {
        res.json({ array })

    },
    testPost(req, res) {
        array.push(req.body.name)
        res.send('success!')
    },
    checklistPut(req, res) {
        res.status(200).json({message: "You tried to update the checklist"})
    }

}

module.exports = { controller }

