// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// base cases if in object or array
var stringifyJSONHelper = function(obj) {
  var type = typeof(obj);
  if (type === 'undefined' || type === 'symbol' || type === 'function' || obj === NaN || obj === Infinity || obj === null) {
    return 'null';
  } else if (type === 'string') {
    return '"' + obj + '"';
  } else if (type === 'number' || type === 'boolean') {
    return String(obj);
  } else if (type === 'object') {
    if (Array.isArray(obj)) {
      var res = '[';
      for (var i = 0; i < obj.length; i++) {
        res += stringifyJSONHelper(obj[i]);
        res += ',';
      }
      if (res.length > 1) {
        res = res.slice(0,-1);
      }
      res += ']';
      return res;
    } else {
      var res = '{';
      for (var i in obj) {
        if (stringifyJSON(obj[i]) !== '') {
          res += stringifyJSONHelper(i);
          res += ':';
          res += stringifyJSONHelper(obj[i]);
          res += ',';
        }
      }
      if (res.length > 1) {
        res = res.slice(0,-1);
      }
      res += '}';
      return res;
    }
  }
}
// base cases if not object or array
var stringifyJSON = function(obj) {
  // your code goes here
  var type = typeof(obj);
  if (type === 'undefined' || type === 'symbol' || type === 'function') {
    return '';
  } else {
    return stringifyJSONHelper(obj);
  }
};
