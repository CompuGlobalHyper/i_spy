module.exports = [
    {
        key: "clock",
        name: "A clock",
        found: false,
        location: { x: 1313, y: 192 }
    },

    {
        key: "birdhouse",
        name: "A birdhouse",
        found: false,
        location: { x: 1165, y: 532 }
    },

    {
        key: "duck",
        name: "A duck",
        found: false,
        location: { x: 908, y: 662 }
    },

    {
        key: "thimbles",
        name: "Five thimbles",
        found: 0,
        goal: 5,
        multi: true,
        items: [
            {
                key: "thimble1",
                found: false,
                location: { x: 701, y: 701 }
            },
            {
                key: "thimble2",
                found: false,
                location: { x: 778, y: 703 }
            },
            {
                key: "thimble3",
                found: false,
                location: { x: 1279, y: 218 }
            },
            {
                key: "thimble4",
                found: false,
                location: { x: 1238, y: 617 }
            },
            {
                key: "thimble5",
                found: false,
                location: { x: 1256, y: 711 }
            }
        ]
    },

    {
        key: "plane",
        name: "A plane",
        found: false,
        location: { x: 697, y: 121 }
    },

    {
        key: "fishTruck",
        name: "Two fish in a truck",
        found: false,
        location: { x: 1118, y: 490 }
    },

    {
        key: "apple",
        name: "A big red apple",
        found: false,
        location: { x: 1186, y: 194 }
    },

    {
        key: "jeep",
        name: "A zebra jeep",
        found: false,
        location: { x: 366, y: 477 }
    },

    {
        key: "stop",
        name: "STOP",
        found: false,
        location: { x: 398, y: 367 }
    },

    {
        key: "go",
        name: "GO",
        found: false,
        location: { x: 1017, y: 576 }
    },

    {
        key: "beeps",
        name: "BEEP, BEEP, BEEP",
        found: 0,
        goal: 3,
        multi: true,
        items: [
            {
                key: "beep1",
                found: false,
                location: { x: 378, y: 269 }
            },
            {
                key: "beep2",
                found: false,
                location: { x: 680, y: 355 }
            },
            {
                key: "beep3",
                found: false,
                location: { x: 1414, y: 250 }
            }
        ]
    }
]