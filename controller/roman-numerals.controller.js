
number1 = () => { return 'I' }
number5 = () => { return 'V' }
number10 = () => { return 'X' }
number50 = () => { return 'L' }
number100 = () => { return 'C' }
number500 = () => { return 'D' }

romanUnit = function (number) {
    switch (number) {
        case 1:
            return number1()
        case 4:
            return number1() + number5()
        case 5:
            return number5()
        case 9:
            return number1() + number10()
        default:
            return romanUnit(number - 1) + number1()
    }
}
romanTens = function (number) {
    switch (number) {
        case 10:
            return number10()
        case 40:
            return number10() + number50()
        case 50:
            return number50()
        case 90:
            return number10() + number100()
        default:
            return romanTens(number - 10) + number10()
    }
}
function romanHundreds(number) {
    switch (number) {
        case 100:
            return number100()
        case 400:
            return number100() + number500()
        case 500:
            return number500()
        default:
            return romanHundreds(number - 100) + number100()
    }

}

exports.romanNumber = (req, res) => {
    number = req.params.number
    if (number > 500) {
        return res.status(500).send({ error: "Solo se admiten valores entre 1 y 500" })
    }
    if (number === 500) {
        return res.send({ result: number500() })
    }

    let unidades = number % 10
    let decenas = (number % 100) - (number % 100) % 10
    let centenas = number - (number % 100);
    let romanUnidades = ""
    let romanDecenas = ""
    let romanCentenas = ""
    if (unidades !== 0) {
        romanUnidades = romanUnit(unidades)
    }
    if (decenas !== 0) {
        romanDecenas = romanTens(decenas)
    }
    if (centenas !== 0) {
        romanCentenas = romanHundreds(centenas)
    }
    result = romanCentenas + romanDecenas + romanUnidades
    return res.send({ result: result })

}
