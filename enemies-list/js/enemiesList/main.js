// Put your code here
console.log("My Enemies List (Javascript Edition)!")
console.log("-------------------------------------")

const GetEnemyList = () => {
    return [
        {
            FirstName: "Joshua",
            LastName: "Flowers",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "Darth",
            LastName: "Vader",
            Offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            IsReallyHated: false
        },
        {
            FirstName: "Betty",
            LastName: "Rudelady",
            Offenses: [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "Leon",
            LastName: "Peck",
            Offenses: [
                "Keeps giving me a hotplate"
            ],
            IsReallyHated: false
        }
    ]
}

let enemyList = GetEnemyList();
enemyList.forEach(el => {
    if (el.IsReallyHated) {
        console.log(`${el.FirstName} ${el.LastName} (Really, really dislike!)`)
    } else {
        console.log(`${el.FirstName} ${el.LastName}`)
    }
})