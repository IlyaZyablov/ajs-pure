import getHealth from '../basic';

test.each([
  [90, 'healthy'],
  [44, 'wounded'],
  [10, 'critical'],
])('health status for %i HP', (health, expected) => {
  const result = getHealth({ name: 'Ilya', health });
  expect(result).toBe(expected);
});
