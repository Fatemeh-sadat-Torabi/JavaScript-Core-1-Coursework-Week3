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
console.log(userPhoneNumber("","7389345623"));
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
Complete dailyRoutin function which will show a coder's daily routin as below:
  code,eat,sleep,trying to understand code I wrote last day!,code,eat,sleep,trying to understand code I wrote last day! ... 
  show this routin for weekdays. 
  on Saturday show "I am in weekend now!""
  use while loop!
*/
function dailyRoutin1Week(){
  let days = 0;
  while(1 && days !== 5){
    console.log("code");
    console.log("eat");
    console.log("sleep");
    console.log("trying to understand code I wrote last day!");
    days+=1;
  }
  console.log("I am in weekend now!");
}
dailyRoutin1Week();




/* ======= TESTS - DO NOT MODIFY ===== */

// test(" isTruthyOrFalsy function returns in case of '1' ", () => {
//   expect(isTruthyOrFalsy("1")).toEqual("1 is truthy!");
// });
// test(" isTruthyOrFalsy function returns in case of empty string ", () => {
//   expect(isTruthyOrFalsy("")).toEqual("  is falsy!");
// });
