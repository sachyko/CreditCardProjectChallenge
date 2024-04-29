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
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

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

const validateCred = (arr) => {
  //create a copy of the array to avaoid mutating the original
  const digits = arr.slice();
  // starting from the farthest digit to the right, iterate to the left
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    //double every other digit
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }
  //sum all the digits in the credit card number
  const sum = digits.reduce((acc, curr) => acc + curr, 0);
  return sum % 10 === 0;
};

const findInvalidCards = (nestedArray) => {
  const invalidNumbers = [];

  //iterate throught the nested array
  for (let i = 0; i < nestedArray.length; i++) {
    //check if the credit card number is invalid using validateCred function
    if (!validateCred(nestedArray[i])) {
      //if Invalid, push it to the invalidCards array
      invalidNumbers.push(nestedArray[i]);
    }
  }
  return invalidNumbers;
};

const idInvalidCardCompanies = (companyCardArray) => {
  //an array to store companies that have issues invalid numbers
  let companies = [];
  //iterate through all the invalid card arrays
  for (let i = 0; i < companyCardArray.length; i++) {
    let firstDigit = companyCardArray[i][0].toString()[0];
    let company;

    if (firstDigit === "3") {
      company = "Amex";
    } else if (firstDigit === "4") {
      company = "Visa";
    } else if (firstDigit === "5") {
      company = "MasterCard";
    } else if (firstDigit === "6") {
      company = "Discover";
    } else {
      company = "Company not found";
    }
    //check if the company is not already in the array and then add it
    if (!companies.includes(company)) {
      companies.push(company);
    }
  }
  return companies;
};

function stringToNumberArray(numberString) {
  return numberString.split(" ").map(Number);
}

// Generate Test Credit Card Numbers
const generateTestCreditCards = () => {
  // You can generate credit card numbers here or obtain them from an external source
  // For demonstration purposes, let's generate a random string of numbers
  const randomNumbers = "4539877090801680"; // Example of a generated credit card number
  return stringToNumberArray(randomNumbers);
};

// Example usage of generateTestCreditCards
const testCreditCards = generateTestCreditCards();
console.log(testCreditCards);

// Function to Convert Invalid Numbers into Valid Numbers
const convertInvalidToValid = (invalidNumber) => {
  let convertedNumber = invalidNumber.slice(); // Create a copy of the original number
  // Implement conversion logic here
  return convertedNumber;
};

// Example usage of convertInvalidToValid
const invalidNumber = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const validNumber = convertInvalidToValid(invalidNumber);
console.log(validNumber);
console.log(validateCred(invalid1));
console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(batch));
