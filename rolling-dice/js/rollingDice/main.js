// Put your code here
console.log("Let's rolls some dice, baby! (Javascript Edition)");
console.log("-------------------------------------------------")

const diceGenerator = (valueParameter) => {
    let die = {
        value: valueParameter
    }

    die.toString = function () {
        switch (this.value) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
        }
    }

    return die;
}

const Roll = () => {
    let randomValue = Math.ceil(Math.random() * 6);
    return diceGenerator(randomValue);
}

for (let i = 0; i < 10; i++) {
    let die1 = Roll();
    let die2 = Roll();
    // console.log(die1, die2);

    let message = `${die1} + ${die2} === ${die1.value + die2.value}`
    if (die1.value === die2.value) {
        message += " DOUBLES!!"
    }
    console.log(message);
}