/*
Imagine you want to write a function for your online shopping website,
this function is to returns user selected color,
and if user doesn't select color, return default color for showing product. 
*/
function applyColor(selectedColor) {
  let defaultColor = "purple";
  let productColor = selectedColor || defaultColor;
  return productColor;
}

/*
Imagine you have a website that most of your users are living in the UK.
you need a function that returns user phone number after the country code,
and if the user doesn't select a country code, it will return +44 as default.
for example +447368970764 is user phone number in UK.
Note: arguments of this function are string!
*/
function userPhoneNumber(countryCode, phoneNumber) {
  let UKdefaultCode = "+44";
  if (countryCode) {
    return countryCode + phoneNumber;
  }
  return UKdefaultCode + phoneNumber;
}

/*
write a function that take an input and returns truthy or falsy!
*/
function isTruthyOrFalsy(input) {
  if (input) {
    return input + " " + "is truthy!";
  }
  return input + " " + "is falsy!";
}

/*
Complete pet function as below,
first check if he has a pet? then check if his pet isn't a cat then print his pet!
*/ 
function printHisPet(hisPet){
  if (hisPet && hisPet !== "Cat"){
    return hisPet
  }
}






/* ======= TESTS - DO NOT MODIFY ===== */


test("Check for Truthy or Falsy", () => {
  expect(isTruthyOrFalsy("")).toEqual(" is falsy!");
});
test("Check for Truthy or Falsy", () => {
  expect(isTruthyOrFalsy("red")).toEqual("red is truthy!");
});
test("Check for colour", () => {
    expect(applyColor("Red")).toEqual("Red")
});
test("Check for colour", () => {
    expect(applyColor("")).toEqual("purple")
});
test("Check for Country code and phone number" , () => {
    expect(userPhoneNumber("+91","7767006880")).toEqual("+917767006880");
});
test("Check for Country code and phone number" , () => {
    expect(userPhoneNumber("","7767006880")).toEqual("+447767006880");
});
test("Check for his pet", () => {
    expect(printHisPet("Dog")).toEqual("Dog");
});

