<template>
    <div>
        <h2>{{status}}</h2>
        <h1>{{msg}}</h1>
        <span>{{count}}</span>
        <button class="vue-btn" data-testid="btn1" @click="handleClick">
            click
        </button>
        <p>class用于样式绑定，data-testid用于测试</p>
        <div data-testid="solt">
            <slot>默认内容</slot>
        </div>
    </div>
</template>
<script>
    export default {
        props:['status'],
        data() {
            return {
                msg:"helloworld",
                count:0
            }
        },
        methods: {
            handleClick() {
                console.log("运行了handleClick");
                this.count++;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>