<template lang="pug">
.main-block
  h1.not-found-header 404
  blockquote Looks like we've got some broken links.
  router-link(to="/login") Return to home
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>
<style scoped lang="scss">
.main-block {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

blockquote {
  font-size: 1rem;
  color: #999;
  border-left: 0.2rem solid #dfe2e5;
  margin: 1rem 0;
  padding: 0.25rem 0 0.25rem 1rem;
}

.not-found-header {
  padding-top: 7rem;
  color: #fff;
}

.main-block a {
  text-decoration: none;
  font-weight: 500;
  color: #3eaf7c;
}

.main-block a:hover {
  text-decoration: underline;
}
</style>
