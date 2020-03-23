// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  var classes = className.split(' ');


  var getElementsHelper = function(curr) {
    var check = true;
    if (!curr.classList) {
      check = false;
    } else {
      for (var i = 0; i < classes.length; i++) {
        if (!(curr.classList.contains(classes[i]))) {
          check = false;
          break;
        }
      }
    }
    if (check) {
      result.push(curr);
    }
    if (curr.hasChildNodes()) {
      let children = curr.childNodes;
      for (let i = 0; i < children.length; i++) {
        getElementsHelper(children[i]);
      }
    }
  }

  getElementsHelper(document.body);

  return result;


};
