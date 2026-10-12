// підрахунок типів (ключі додаються динамічно)

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

const types = {};

for (const item of arr) {
  const t = typeof item;

  if (!types[t]) {
    types[t] = 0;
  }

  types[t]++;
}

console.dir(types);
