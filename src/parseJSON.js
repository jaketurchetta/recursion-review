// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // 6 base cases: string, number, boolean, object, array, null
  if (json === '""') {
    return '';
  } else if (json[0] === '"') {
    return json.slice(1,-1);
  } else if (!(isNaN(json))) {
    return Number(json);
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (json === 'null') {
    return null;
  } else if (json === '[]') {
    return [];
  } else if (json === '{}') {
    return {};
  } else if (json[0] === '[' && json[json.length -1] === ']') {
    var res = [];
    json = json.slice(1,-1);
    var jsonSplit = json.split(',');
    for (var i = 0; i < jsonSplit.length; i++) {
      res.push(parseJSON(jsonSplit[i].trim()));
    }
    return res;
  } else if (json[0] === '{' && json[json.length -1] === '}') {
    var res = {};
    json = json.slice(1,-1);
    var jsonSplit = json.split(',');
    for (var i = 0; i < jsonSplit.length; i++) {
      jsonSplit[i] = jsonSplit[i].split(':');
    }
    for (var i = 0; i < jsonSplit.length; i++) {
      res[parseJSON(jsonSplit[i][0].trim())] = parseJSON(jsonSplit[i][1].trim());
    }
    return res;
  } else {
    throw SyntaxError('Invalid JSON.');
  }


};
