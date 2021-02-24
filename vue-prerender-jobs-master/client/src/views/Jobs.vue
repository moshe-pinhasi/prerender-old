<template>
  <div>
    <h1>Jobs</h1>
    <div>
      <span>Jobs list</span>
      <ul>
        <li v-for="job in jobs" :key="job._id">
          <job-preview :job="job" />
        </li>
      </ul>
      <paginator :page="page" :totalPages="totalPages" @set-new-page="setPage" />
    </div>
  </div>
</template>

<script>
import { jobService } from "@/services/jobService";
import JobPreview from "../components/JobPreview.vue";
import Paginator from "../components/Paginator.vue";

export default {
  components: { JobPreview, Paginator },
  data() {
    return {
      jobs: null,
      filterBy: null,
      page: 0,
      totalPages: 0,
    };
  },
  created() {
    this.getJobs();
  },
  methods: {
    async getJobs() {
      try {
        const { jobs, total } = await jobService.getJobs(this.page, this.$route.query);
        this.jobs = jobs
        this.totalPages = Math.ceil(total/10)
      } catch(e) {
        console.error(e)
      }
    },
    setPage(pageNum) {
      this.page = pageNum;
      this.getJobs();
    },
  },
};
</script>
 
<style lang="scss" scoped>
ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 1.5rem;
}
</style>