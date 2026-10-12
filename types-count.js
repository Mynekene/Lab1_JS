// підрахунок типів у масиві

const arr = [
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'word',
  null,
  undefined,
  {},
  [],
  3.14,
  'world',
  true,
  Symbol('test'),
  42n,
  new Date(),
  /abc/,
  function() {},
];

// початкова колекція
const types = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  symbol: 0,
  bigint: 0,
  function: 0,
};

for (const item of arr) {
  const t = typeof item;
  if (types[t] !== undefined) {
    types[t]++;
  }
}

console.dir(types);
