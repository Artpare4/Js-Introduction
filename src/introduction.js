export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return b - a;
}

export function sum(values) {
  return values.reduce((elmt, prec) => elmt + prec, 0);
}

export function addToAll(values, toAdd) {
  return values.map((elmt) => elmt + toAdd);
}

export function average(values) {
  if (values.length === 0) {
    return null;
  }
  return sum(values) / values.length;
}

export function isAdult(user) {
  return user.age >= 18;
}

export function isChild(user) {
  return user.age < 18;
}

export function extractAge(users) {
  return users.map((user) => user.age);
}

export function adultFilter(users, type) {
  if (type === "adult") {
    return users.filter((user) => isAdult(user));
  }
  if (type === "child") {
    return users.filter((user) => isChild(user));
  }
  return users;
}

export function ageAverage(users, type) {
  return average(extractAge(adultFilter(users, type)));
}

export function isAllAdult(users) {
  return users.every(isAdult);
}

export function hasChild(users) {
  return users.some(isChild);
}

export function addIsAdultProperty(users) {
  return users.map((user) => ({ ...user, isAdult: isAdult(user) }));
}
