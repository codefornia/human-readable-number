module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    const hundreds = Math.floor(number / 100);
    const dozens = Math.floor((number - hundreds * 100) / 10);
    const units = number - hundreds * 100 - dozens * 10;
    // console.log(hundreds + '\t' + tens + '\t' + units);

    const readableUnits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    const readableTens = ['one', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const readableSecondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


    let result = [];
    if (hundreds) result.push(readableUnits[hundreds - 1] + " hundred");

    if (dozens) {
        if (dozens === 1) result.push(readableSecondTen[units]);
        else result.push(readableTens[dozens - 1]);

    }

    if (dozens !== 1 && units) result.push(readableUnits[units - 1]);

    return result.join(' ');
}