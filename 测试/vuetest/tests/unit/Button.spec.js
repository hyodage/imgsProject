import { mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";
describe("Button", () => {
  /* props传递disable为true不能点击 */
  it("disabled true", () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true,
      },
    });
    wrapper.find("[data-testid='btn']").trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });
  /* 默认不传递disable可以点击并发出自定义click事件*/
  it("default disabled", () => {
    const wrapper = mount(Button);
    wrapper.find("[data-testid='btn']").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
  /* slot */
  it("slot change",()=>{
    const wrapper = mount(Button,{
        slots:{
          default:'确定'
        }
    })
    expect(wrapper.find('[data-testid="btn"]').text()).toBe("确定")
  })
  it("slot default",()=>{
    const wrapper = mount(Button)
    expect(wrapper.find('[data-testid="btn"]').text()).toBe("默认按钮")
  })
});
