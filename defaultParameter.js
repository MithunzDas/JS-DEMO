'use strict';

const computeReturns = function (principal, rateOfInterest=8, tenure=10) {
  return principal + (principal * rateOfInterest * tenure) / 100;
};

const investments = {
  joe: {
    p: 20000,
    t: 30,
  },
  jane: {
    p: 45000,
    r: 10.2,
    t: 20,
  },
  mike: {
    p: 54000,
  },
};

console.log(
  `Joe invested ${investments.joe.p} and got back: `,
  computeReturns(investments.joe.p, investments.joe.r, investments.joe.t)
);
console.log(
  `Jane invested ${investments.jane.p} and got back: `,
  computeReturns(investments.jane.p, investments.jane.r, investments.jane.t)
);
console.log(
  `Mike invested ${investments.mike.p} and got back: `,
  computeReturns(investments.mike.p, investments.mike.r, investments.mike.t)
);
