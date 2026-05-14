const checklist = require('./checklist.js')

//array for testing
const array = []

const coordChecker = (x, y, guessX, guessY) => {
    const radius = 40
    const dx = guessX - x
    const dy = guessY - y

    if ((dx * dx) + (dy * dy) < radius * radius) {
        console.log("hit")
        return true
    } else return false
}

const controller = {
    indexGet(req, res) {
        res.status(200).json({message: "Hello World!"})
    },

    checklistGet(req, res) {
        res.status(200).json({checklist})
    },
    checklistPut(req, res) {
        const { guess } = req.body
        const guessKey = guess.key
        const guessX = guess.x
        const guessY = guess.y

        const answerArray = checklist.filter((item) => item.key === guessKey)
        const answer = answerArray[0]
        const trueKey = answer.key
        if (answer.multi) {
            const answerList = answer.items
            console.log(answerList)
            const dataList = answerList
            .filter(item => item.found === false)
            .filter(item => {
                const x = item.location.x
                const y = item.location.y
                return coordChecker(x, y, guessX, guessY)
            })
            if (dataList.length > 0) {
                checklist.map(item => {
                    if (item.multi) {

                    }
                })
                return res.status(200).json({key: trueKey, found: true})
            } else return res.status(200).json({key: trueKey, found: false})
            
        } else {
            const x = answer.location.x
            const y = answer.location.y
            console.log(x)
            if (coordChecker(x, y, guessX, guessY)) {
                const data = { key: answer.key, found: true}
                console.log(data)
                return res.status(200).json(data)
            } else {
                const data = { key: answer.key, found: false}
                console.log(data)
                return res.status(200).json(data)
            }
        }
        

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

