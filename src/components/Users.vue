<template>
  <div>
    <h1>Users Page</h1>
    <h2>User id {{ UserId }}</h2>
  </div>
</template>
<script>
export default {
  name: "Users",
  data() {
    return {
      UserId: this.$route.params.id,
    };
  },
};
</script>
