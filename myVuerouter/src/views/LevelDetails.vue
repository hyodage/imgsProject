<template>
    <div>
        <button @click="handleGoback">后退</button>
        <div class="destinations">
            <div>
                <h2>{{levelInfo.name}}</h2>
                <img :src="require(`@/assets/img/${levelInfo.image}`)" :alt="levelInfo.name">
                <p>{{levelInfo.description}}</p>
                <router-link :to="{name:'secretDetails',params:{secret:levelInfo.secret}}">秘密</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
 import store from "@/store.js";
    export default {
        props: {
            levelId: String,
        },
        methods: {
            handleGoback() {
                this.$router.go(-1)
            }
        },
        computed: {
            levelInfo() {
                return store.levels.find((info) => {
                    return info.id === this.levelId;
                });
            },
        },
    }
</script>

<style scoped>
.destinations div{
  margin: 10px;
  width:200px;
  float: left;
}
img {
  width: 100%;
}
</style>