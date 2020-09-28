<template>
    <div>
        <ul>
            <li>
                <router-link to="/">
                Home
                </router-link>
            </li>
            <li v-for="level in levels" :key="level.id" class="links">
                <router-link :to="{name:'LevelDetails',params:{levelId:level.id}}">
                    {{level.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from "@/store.js";
    export default {
        data(){
            return{
                levels:store.levels,
            }
        },
        created () {
            // console.log(store);
        },

    }
</script>

<style scoped>
ul,li{padding:0;margin:0;list-style:none}
ul{}
ul>li{display:inline-block;margin:10px;}
</style>