/**
 * Create a function called turnOn.
 *
 * This function should return the boolean true.
 *
 * @returns {number} 1
 */

 function turnOn(number = 1){
   return true;

 }

/**
 * Create a function called returnsName.
 *
 * This function should return your name.
 *
 * @returns {string} your name
 */

 function returnsName(string){
   var string = "Sonthaya";

   return string;
 }

/**
 * Create a function called returnGivenParameter that takes a
 * single parameter and then returns it.
 *
 * @param {any} thing any value
 * @returns {any} the parameter that we were given
 */

 function returnGivenParameter(param){
   return param;
 }

/**
 * Now create a function called takeOptionalParameter
 * that takes a single parameter and
 * returns it again. But if a parameter is not given, default
 * the value to 0.
 *
 * @param {any} [thing=0] any value
 * @returns {any} the parameter given, or 0 if none is given
 */
function takeOptionalParameter(any){
  if(any != null){
    return any;
  }else{
    return 0;
  }
}



/**
 * Write an anonymous function in the filter that will
 * remove all numbers that are double digits.
 *
 * Remember that you want to write an anonymous function
 * that returns true if we want to keep the element and
 * false if we don't.
 *
 * @param {number[]} arrayToFilter the array that the user wants us to filter
 * @returns {number[]} the filtered array
 */
function filterArrayToOnlySingleDigitNumbers(arrayToFilter) {
  array2 = [];
  for (var i = 0; i <= arrayToFilter.length; i++){
    if (arrayToFilter[i] > 0 && arrayToFilter[i] < 10){
      array2.push(arrayToFilter[i]);
    }else if (arrayToFilter[i] <0 && arrayToFilter[i] > -10){
      array2.push(arrayToFilter[i]);
    }
  }
  return array2;
  
}

/**
 * Write an anonymous function in the map that will double each element.
 *
 * For map, you want to write a function that takes the array
 * element and then returns the new value that will be stored
 * in the new array.
 *
 * @param {number[]} arrayToDouble the array that the user wants doubled
 * @returns {number[]} a array that has each number doubled
 */
function mapArrayToDoubleAllNumbers(arrayToDouble) {

var array2 = [];
for(var i = 0; i < arrayToDouble.length; i++){
     var double = arrayToDouble[i]*2;
     array2.push(double);
}
return array2;
}

/**
 * Write an anonymous function in the reduce that will multiply all numbers
 * from arrayToMultiply together.
 *
 * For reduce, the anonymous function will take two parameters:
 * the "reducer" and the current element. It will then return
 * the new result.
 *
 * @param {number[]} arrayToMultiply the numbers the user wants multiplied
 * @returns {number} the product of the array
 */
function reduceArrayToFindProduct(arrayToMultiply) {
  var result = 0;
  for(var i =0; i < arrayToMultiply.length-1; i++ ){
    result = arrayToMultiply[i]*arrayToMultiply[i+1];
  }
  return result;
}

/**
 * Write an anonymous function in the filter that will only keep names
 * that have 'son' in them.
 *
 * @param {string[]} arrayToFilter the array to filter
 * @returns {string[]} the filtered array
 */
function filterStringArrayForSon(arrayToFilter) {
    var filteredArray = [];
    for(var i = 0; i < arrayToFilter.length; i++){
      if(arrayToFilter[i].includes('son')){
        filteredArray.push(arrayToFilter[i])
      }
    }
  return filteredArray;
}

/**
 * Write an anonymous function that converts the name passed in into all
 * capital letters.
 *
 * @param {string[]} arrayToCapitalize array to capitalize names of
 * @returns {string[]} names in all upper case
 */
function makeNamesAllCaps(arrayToCapitalize) {
  var returnArray = [];
  for(var i = 0; i < arrayToCapitalize.length; i ++){
    var newString = arrayToCapitalize[i].toUpperCase();
    returnArray.push(newString);
  }
  return returnArray;
}

/*
 * Document the following function. Be sure to describe the
 * parameters and what they are for and what they take. You should
 * be able to list out what values the function should handle for
 * each of the parameters. If the parameter
 * has a default value, be sure to enclose the name of the parameter
 * with `[]` and put the default value after an `=` sign.
 *
 * Also be sure to document the return type and what it's returning.
 */

function convertTemperature(temperature, temperatureUnit, includeUnit = false) {
  let convertedTemp = 0;
  let convertedUnit = 'F';
  if (temperatureUnit === 'C' || temperatureUnit === 'c') {
    convertedTemp = (temperature * 9) / 5 + 32;
    convertedUnit = 'F';
  } else {
    convertedTemp = ((temperature - 32) * 5) / 9;
    convertedUnit = 'C';
  }

  return convertedTemp + (includeUnit ? convertedUnit : ''); // convert to string
}
