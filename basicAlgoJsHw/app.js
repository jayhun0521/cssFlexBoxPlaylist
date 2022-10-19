function bouncer (arr){
  var result = [];
  for (var elem of arr){
    if(elem) result.push(elem);
  }
    return result;
}

bouncer ([7, "ate", false, 9]);
console.log(result);


function bouncer(arr) {
  return arr.filter(function(elem) {
    return elem;
  });
}
bouncer ([7, "ate", false, 9]);
console.log(elem)


function chunkArrayInGroups(arr, size){
  var alphabet = [];
  while(arr.length > 0) {
    alphabet.push(arr.splice(0, size)); //changed to splice from slice
    // arr = arr.slice(size); //add and change above to slice
  }
  return alphabet;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

console.log(alphabet);

// var letters = [ 'a', 'b', 'c', 'd'];
// console.log(letters.splice(0, 2));
// console.log("letters is : ", letters);
