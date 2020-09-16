const add = require("../add")
beforeEach(() => {
// 做初始化的工作
console.log("before-each");
});
afterEach(() => {
// 做销毁工作
console.log("after-each");
});
beforeAll(() => {
// 所有单元测试之前
console.log("beforeAll")
});
afterAll(() => {
// 所有单元测试都执行完成后悔运行
console.log("afterAll")
});
test("1 + 1 应该等于 2 ", () => {
    const result = add(1, 2);
    expect(result).toBe(2);
    expect(result).not.toBe(3);
});

// 同一个类型可以写在describe里面
describe('string', () => {
    beforeEach(() => {
    // 做初始化的工作
    console.log("这是描述里面：before-each");
    });
    afterEach(() => {
    // 做销毁工作
    console.log("这是描述里面：after-each");
    });
    beforeAll(() => {
    // 所有单元测试之前
    console.log("这是描述里面：beforeAll")
    });
    afterAll(() => {
    // 所有单元测试都执行完成后悔运行
    console.log("这是描述里面：afterAll")
    });
    test("string A",()=>{
        const result = "jest vue";
        expect(result).toContain("vue");
    })
    it('srting B', () => {
        const result = "jest vue";
        expect(result).toContain("jest");
    });
});