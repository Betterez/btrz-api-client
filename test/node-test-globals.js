

const {
  describe,
  it,
  before,
  after,
  beforeEach,
  afterEach,
  test
} = require("node:test");

global.describe = describe;
global.it = it;
global.before = before;
global.after = after;
global.beforeEach = beforeEach;
global.afterEach = afterEach;
global.test = test;
