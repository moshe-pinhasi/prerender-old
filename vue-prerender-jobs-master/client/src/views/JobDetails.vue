<template>
  <div class="job-details-container" v-if="job">
    <div>Job title: {{ job.title }}</div>
    <div>Job Description: {{ job.desc }}</div>
    <div>Company: {{ job.company }}</div>
    <div>Type: {{ job.jobType }}</div>
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
      this.job = await jobService.getJob(this.$route.params.id);
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