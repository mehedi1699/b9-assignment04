/**
 *1st pblm solve function 
 pblm solve from B9-a-04 pdf file whice is added with git hub
 *   */ 

function calculateMoney(ticketSale) {
    if (ticketSale >= 0) {
        const totalMoney = (ticketSale * 120) - (500 + (8 * 50));
        return totalMoney;
    }
    else {
        return 'Invalid Ticket Number';
    }

}


// 2nd pblm solve function 

function checkName(name) {
    if (typeof name === 'string') {
        const nameLowerCase = name.toLowerCase();
        let last = nameLowerCase[nameLowerCase.length - 1];

        if( last === 'a' || last === 'y' || last === 'i' || last === 'e' || last === 'o' || last === 'u' || last === 'w' ){
            return 'Good Name';
        }
        else {
            return 'Bad Name';
        }
    }
    else {
        return 'Invalid';
    }
}



//3rd pblm solve function 

function deleteInvalids(arr) {
    const onlyNumber = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && isNaN(arr[i]) === false) {
                onlyNumber.push(arr[i]);
            }
        }
        return onlyNumber;
    }
    else {
        return 'Invalid Array'
    }
}


//4th pblm solve function 

function password(obj) {

    const year = obj.birthYear;
    const strYear = year.toString();

    if (typeof obj.name === 'undefined' || typeof obj.birthYear === 'undefined' || typeof obj.siteName === 'undefined' || strYear.length !== 4) {
        return 'Invalid';
    }

    const site = obj.siteName;
    const firstLatter = site[0];
    const upperLatter = firstLatter.toUpperCase();
    let upperWord = site.replace(firstLatter, upperLatter);

    let pass = upperWord + '#' + obj.name + '@' + obj.birthYear;
    return pass;
}


// 5th pblm solve function 

function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) && typeof livingCost === 'number') {
        let sum = 0;
        for (const money of arr) {

            if (money >= 3000) {
                const afterVat = money - (money * .2);
                sum = sum + afterVat;
            }
            else {
                sum = sum + money;
            }

        }
        const saving = sum - livingCost;
        if (saving >= 0) {
            return saving;
        }
        else {
            return 'Earn More';
        }
    }
    else{
        return 'Invalid Input';
    }
}



