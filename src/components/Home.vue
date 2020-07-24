<template>
  <div>
    <h1>Home Page</h1>
    <router-link id="user" to="User/1">Saurabh</router-link>
    <router-link id="user" to="User/2">Shubham</router-link>
    <router-link id="user" to="User/3">Apraj</router-link>
    <router-link id="user" to="User/4">HelloWorld</router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style>
#user {
  margin: 10px;
}
</style>
