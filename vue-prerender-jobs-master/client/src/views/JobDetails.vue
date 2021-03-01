<template>
  <div class="job-details-container" v-if="job">
    <div><label>Job title: </label><h2>{{ job.title }}</h2></div>
    <div><label>Location: </label>{{ job.location }}</div>
    <div><label>Company: </label>{{ job.company }}</div>
    <div><label>Type: </label>{{ job.job_type }}</div>
  </div>
</template>

<script>
import { jobService } from "@/services/jobService";

export default {
  data() {
    return {
      job: null,
    };
  },
  created() {
    this.getJob();
  },
  watch: {
    $route(to, from) {
      if (to === from) return;
      this.getJob();
    },
  },
  methods: {
    async getJob() {
      const job = await jobService.getJob(this.$route.params.id);
      this.job = job
    },
  },
};
</script>

<style lang="scss" scoped>
.job-details-container {
  div {
    margin-bottom: 1rem;
  }
}
</style>