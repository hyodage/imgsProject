import { mount } from '@vue/test-utils'
import Hello from '@/components/Hello.vue'
describe('Hello.vue', () => {
    /* 测试msg是否包含hello */
    it('should show "hello"', () => {
        const Wrapper = mount(Hello)
        /* console.log(Wrapper);
        console.log(Wrapper.text()); */
        expect(Wrapper.find("h1").text()).toContain("hello")
    })
    /* props传值 */
    it("should show wolf",()=>{
        const wrapper = mount(Hello,{
            propsData:{
                status:"happy"
            }
        })
        expect(wrapper.find("h2").text()).toBe("happy")
    })
    /* 点击按钮是否触发成功是count+1 */
    it("should emit click when clicked",async ()=>{
        const wrapper = mount(Hello)
        /* 
        vue不是同步渲染，视图更新是异步的
        */
       await wrapper.find('[data-testid="btn1"]').trigger("click")
       console.log(wrapper.text())
       expect(wrapper.find("span").text()).toBe("1")
    })
    /* 默认插槽内是否是默认内容 */
    it("solt demo",()=>{
        const wrapper = mount(Hello)
        expect(wrapper.find('[data-testid="solt"]').text()).toContain("默认内容")
    })
    /* 插槽添加新的内容 */
    it("solt demo",()=>{
        const wrapper = mount(Hello,{
            slots:{
                default:"<div>插入的新值</div>"
            }
        })
        expect(wrapper.find('[data-testid="solt"]').text()).toContain("插入的新值")
    })
});