<template>
  <router-link :to="jobLink">
    <div class="job-preview">
      <div><h2>{{ job.title }}</h2></div>
      <div><label>Location: </label>{{ job.location }}</div>
      <div><label>Company: </label>{{ job.company }}</div>
      <div><label>Type: </label>{{ job.job_type }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["job"],
  computed: {
    jobLink() {
      return `/job/${this.job.id}`;
    },
  },
};
</script>

<style>
.job-preview {
  border: 1px solid;
  padding: 10px 5px;
}
.job-preview label {
  font-weight: 600;
}

</style>