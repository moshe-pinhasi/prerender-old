<template>
  <router-link :to="jobDetailsLink">
    <div class="job-preview">
      <div><h2>{{ job.title }}</h2></div>
      <div><label>Location: </label>{{ job.location }}</div>
      <div><label>Company: </label>{{ job.company }}</div>
      <div><label>Type: </label>{{ job.job_type }}</div>
      <router-link class="edit-link" :to="jobEditLink">Edit</router-link>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["job"],
  computed: {
    jobDetailsLink() {
      return `/job/${this.job._id}`;
    },
    jobEditLink() {
      return `/job/edit/${this.job._id}`;
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
.edit-link{
  text-decoration: underline;
}

</style>