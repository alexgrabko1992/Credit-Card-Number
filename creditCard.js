// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [3, 0, 3, 8, 5, 7, 8, 5, 9, 2, 0, 2, 4, 9];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

const validateCred = (array) => {
  array = array.reverse();
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    function isEven(n) {
      if (n === 0) {
        return true;
      } else if (n === 1) {
        return false;
      } else return isEven(n - 2);
    }
    if (isEven(i) === true) {
      newArray.push(array[i]);
    } else if (isEven(i) === false) {
      newArray.push(array[i] * 2);
    }
  }
  const arr = newArray.map((e) => {
    if (e > 9) {
      return e - 9;
    } else if (e <= 9) {
      return e;
    }
  });
  const reducer = (acc, curr) => acc + curr;
  const controlNumber = arr.reduce(reducer);
  let isValid;
  if (controlNumber % 10 === 0) {
    isValid = true;
    //console.log('Number is valid')
  } else {
    isValid = false;
    //console.log('Number is invalid')
  }
  /*console.log(newArray)
  console.log(arr)
  console.log(controlNumber);*/
  return isValid;
};

const findInvalidCards = (nestArray) => {
  let invalidCards = [];
  nestArray.map((e) => {
    if (validateCred(e) === false) {
      e = e.reverse();
      invalidCards.push(e);
    }
  });
  return invalidCards;
  /*if (validateCred(array) === false) {
    return array.reverse();
  } else {
    return 'This valid card.'
  }*/
};

const idInvalidCardCompanies = (array) => {
  let invalidCardsArray = findInvalidCards(array);
  //console.log(invalidCardsArray)
  let companyArray = [];
  for (i = 0; i < invalidCardsArray.length; i++) {
    if (invalidCardsArray[i][0] === 3) {
      if (companyArray.indexOf("Amex") === -1) {
        companyArray.push("Amex");
      }
    } else if (invalidCardsArray[i][0] === 4) {
      if (companyArray.indexOf("Visa") === -1) {
        companyArray.push("Visa");
      }
    } else if (invalidCardsArray[i][0] === 5) {
      if (companyArray.indexOf("Mastercard") === -1) {
        companyArray.push("Mastercard");
      }
    } else if (invalidCardsArray[i][0] === 6) {
      if (companyArray.indexOf("Discover") === -1) {
        companyArray.push("Discover");
      }
    } else {
      companyArray.push("Company not found");
    }
  }
  return companyArray;
};

console.log(idInvalidCardCompanies(batch));
