<template>
  <div>
    <h1>Admin!</h1>

    <div>
      <button @click="generate">Generate static</button>
    </div>
    <br />
    
    <div>
      <h2>Add new</h2>
      <button @click="createNew">new job</button>
    </div>

    <div>
      <h2>list the jobs</h2>
      <label for="checkbox">show</label>
      <input type="checkbox" id="checkbox" v-model="showJobs">
      <job-list v-if="showJobs" />
    </div>
  </div>
</template>

<script>
import { jobService } from '@/services/jobService';
import JobList from '@/components/JobList';

export default {
  name: 'Home',
  components: {
    JobList
  },
  data() {
    return {
      showJobs: false
    }
  },
  methods: {
    async generate() {
      const res = await jobService.generateStaticSite();
      console.log(res)
    },
    createNew() {
      this.$router.push({name: 'Edit'})
    }
  }
}
</script>
