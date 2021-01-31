/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет 
 * счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let d1 = +number[0],
        d2 = +number[1],
        d3 = +number[2],
        d4 = +number[3],
        d5 = +number[4],
        d6 = +number[5];
    
    return (d1 + d2 + d3) === (d4 + d5 + d6)    
}

module.exports = checkTicket;
