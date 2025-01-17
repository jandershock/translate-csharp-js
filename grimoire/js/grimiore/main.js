// Put your code here
console.log("Do you believe in magic? (Javascript Edition)")
console.log("----------------------------------------------")



// Create function to generate spell list
function GetAllSpells() {
    return [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ]
}
// Create Display function for spellbook
// Create Function to create good book
const MakeGoodSpellBook = function (spellList) {
    return spellList.filter(el => !el.IsEvil);
}
// Create Function to create evil book
const MakeEvilSpellBook = function (spellList) {
    return spellList.filter(el => el.IsEvil);
}



let allSpells = GetAllSpells();

// Create good spellbook
let goodBook = MakeGoodSpellBook(allSpells);
// Create evil spellbook
let evilBook = MakeEvilSpellBook(allSpells);