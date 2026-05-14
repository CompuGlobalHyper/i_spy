const { structuredClone } = require('node:worker_threads')
let initialChecklist = require('./checklist.js')
const _ = require('lodash')

//array for testing
const array = []
let checklist

const coordChecker = (x, y, guessX, guessY) => {
    const radius = 40
    const dx = guessX - x
    const dy = guessY - y
    if ((dx * dx) + (dy * dy) < radius * radius) {
        console.log("answer found")
        return true
    } else return false
}

const controller = {
    indexGet(req, res) {
        res.status(200).json({message: "Hello World!"})
    },

    resetGet(req, res) {
        checklist = JSON.parse(JSON.stringify(initialChecklist))
        res.status(200).json({checklist})
    },
    checklistGet(req, res) {
        res.status(200).json({checklist})
    },
    checklistPut(req, res) {
        const { guess } = req.body
        const guessKey = guess.key
        const guessX = guess.x
        const guessY = guess.y
        //search for the correct item
            const newChecklist = checklist.map(item => {
                //if guess matches current item
                if (item.key === guessKey) {
                    //if item is a set
                    if (item.multi) {
                        const updatedSubItems = item.items.map((subItem) => {
                            const x = subItem.location.x
                            const y = subItem.location.y
                            //if subItem matches coords
                            if (coordChecker(x, y, guessX, guessY)) {
                                return {...subItem, found: true}
                            } else return subItem
                        })
                        //if no match was found
                        if (_.isEqual(item.items, updatedSubItems)) {
                            return item
                        } else {
                            const oldCount = item.found
                            return {...item, found: oldCount + 1, items: updatedSubItems}
                        }
                    } else {
                        const x = item.location.x
                        const y = item.location.y
                        //if item matches coords
                        if (coordChecker(x, y, guessX, guessY)) {
                            return {...item, found: true}
                        } else return item
                    }
                } else return item
            })
        //if checklist has changed
        const isFound = !_.isEqual(newChecklist, checklist)
        if (isFound) {
            checklist = newChecklist
        }
        return res.status(200).json({key: guessKey, found: isFound})
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

