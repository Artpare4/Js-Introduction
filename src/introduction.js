export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return b - a;
}

export function sum(values){
  return values.reduce((elmt,prec)=>elmt+prec,0)
}

export function addToAll(values,toAdd){
  return values.map((elmt)=>elmt+toAdd)
}