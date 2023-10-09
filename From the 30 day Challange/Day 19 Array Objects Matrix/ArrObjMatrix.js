/* 
@param {Array} arr
@return{Matrix}
Write a function that converts an array of objects into a matrix  m 
The object could be highly nested so need to flatten
like making a document in to ans SQL Relational 2D thing 
find the keys and sort for first row 
solve with recusion 
*/
var jsonToMatrix = function (arr) {
  //Recusion
  // has set so no duplicates
  const keySet = new Set();

  for (const obj of arr) {
    getKeys(obj, "");
  }
  const keys = Array.from(keySet).sort();
  const res = [keys]; // array where first row is keys
for (const obj in arr) {
 const keyToVal ={};
 getValues(obj,path,keyToVal)
 let row=[];
 for (const key in keys) {
    if (key in keyToVal) {
        row.push(keyToVal[key])
    }else{
    row.push("")
    }
        
    } 
        res.push(row)
    }
    function getKeys(obj, path) {
        for (const key in obj) {
          const newPath = path ? key : `${path}.${key}`;
          if (obj[key]) {
            // is an object so recursive
            getKeys(obj[key], newPath);
          } else {
            // not an object so a key
            keySet.add(newPath);
          }
        }
      }

 }
        
    }
}


  

  function getValues(obj, path) {}

  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
};
