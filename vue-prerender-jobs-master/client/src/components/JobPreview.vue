<template>
  <router-link v-bind:to="jobLink">
    <div class="job-preview">
      <div>{{ job.title }}</div>
      <div>{{ job.city }}</div>
      <div>{{ job.company }}</div>
      <div>{{ job.jobType }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["job"],
  computed: {
    jobLink() {
      return `/job/${this.job._id}`;
    },
  },
};
</script>

<style>
</style>