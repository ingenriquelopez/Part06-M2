var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  // TU CÓDIGO AQUÍ
  for (let i=0; i <startEl.children.length;i++) {
    let elementos = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = [...resultSet,...elementos];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (selector.includes('.')) return 'tag.class';
  if (selector.includes('>')) return 'child';
  
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(elemento) {
      let ele = '#' + elemento.id;
      if (ele === selector) return true;
      else return false;
    }
   
  } else if (selectorType === "class") {
    matchFunction = function(elemento) {
      let listaClases = elemento.classList;
      for (let i=0; i < listaClases.length; i++) {
        if ('.'+ listaClases[i] === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(elemento) {
      let [tagB, classB] = selector.split('.');
      return matchFunctionMaker(tagB)(elemento) && matchFunctionMaker('.' + classB)(elemento);
    }
    
  } else if (selectorType === "tag") {
    matchFunction = function(elemento) {
      if (elemento.tagName.toLowerCase() === selector.toLowerCase()) return true;
      else return false;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
