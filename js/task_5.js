

'use strict'; 

const checkForSpam = function (message) {
    let messageLow = message.toLowerCase();
    const messageArray = messageLow.split(' ');
    // console.log(messageArray);
    const question = messageArray.includes('sale') || messageArray.includes('spam') || messageArray.includes('[spam]') ? true : false;
        // ? 'true (spam/sale - есть такое слово)' : 'false (spam/sale - нет такого слова)';
    // console.log(question);
    return question;
};

// console.log(checkForSpam(question));

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true