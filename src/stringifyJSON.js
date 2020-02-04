// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // null
  if (obj === null) {
    return "null";
  }
  // string
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  // number
  if (typeof obj === 'number') {
    return obj.toString();
  }
  // array
  if(Array.isArray(obj)) {
    if(obj.length === 0) {
      return "[]";
    }
    var output = [];
    if(obj.length > 0) {
      for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] === 'number') {
          output.push(obj[i]);
        } else if (typeof obj[i] === 'function') {
          output.push(null)
        } else {
          output.push(stringifyJSON(obj[i]))
        }
      }
      return `[${output}]`;
    };
  };

  // object
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
      let output = '{';
    if (Object.keys(obj).length === 0) {
      output += '}';
      return output;
    } else {
    for (let key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
      output += stringifyJSON(key);
      output += ':';
      output += stringifyJSON(obj[key]);
      output += ',';
      }
    }
    if (output.length !== 1) {
      output = output.slice(0, output.length - 1);
    }
    output += '}'
    return output
  }
}
  // boolean
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  // function
  if(typeof obj === "function") {
    return "undefined";
  }
};
