<template>
  <div class="home">
    <h1>
      All Level
    </h1>
    <div class="destinations">
      <div v-for="level in levels" :key="level.id">
        <h2>{{level.name}}</h2>
        <img :src="require(`@/assets/img/${level.image}`)" :alt="level.name">
        <p>{{level.description}}</p>
      </div>
     <!--  <div v-for="level in levels" :key="level.name">
        <router-link
          :to="{ name: 'LevelDetails', params: { levelId: level.id } }"
        >
          <h2>{{ level.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'LevelDetails', params: { levelId: level.id } }"
          >
            <img :src="require(`@/assets/${level.image}`)" :alt="level.name" />
          </router-link>
        </figure>
      </div> -->
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      levels: store.levels,
    };
  },
};
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
