const foreach = require("../foreach");
test("foreach ", () => {
  // 1. given
  const array = [1, 2, 3];
  const callback = jest.fn();
  // jest mock
  // console.log(callback.mock);
  // 2. when
  foreach(array, callback);
  // 3. then
  expect(callback).toHaveBeenCalledTimes(10);
});
