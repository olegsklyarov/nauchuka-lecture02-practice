import tester from '../util/tester.js';
import sum from './sum.js';

const testCases = [
  {
    input: { a: 5, b: 7 },
    output: 12,
  },
  {
    input: { a: -1, b: 1 },
    output: 0,
  },
  {
    input: { a: 0, b: 0 },
    output: 0,
  },
  {
    input: { a: 23234515, b: 3454132 },
    output: 26688647,
  },
];

tester(testCases, sum, 'Sum', true);
