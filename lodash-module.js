const _ = require('lodash');

const items = [1,[2,[3,[4,[5],6],7],8],9];

const newItems = _.flatMapDeep(items);
console.log(newItems);
