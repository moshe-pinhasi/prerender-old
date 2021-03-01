<template>
  <div>
    <h1>Jobs</h1>
    <div>
      <router-link class="add-link" to="/job/edit">Add new</router-link>
      <span class="list-title">Jobs list</span>
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
import { jobService } from '@/services/jobService';
import JobPreview from '../components/JobPreview.vue';
import Paginator from '../components/Paginator.vue';

export default {
  components: { JobPreview, Paginator },
  data() {
    return {
      jobs: null,
      filterBy: null,
      page: 1,
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
        this.jobs = jobs;
        this.totalPages = Math.ceil(total / 10);
      } catch (e) {
        console.error(e);
      }
    },
    setPage(pageNum) {
      this.page = pageNum;
      this.getJobs();
    },
  },
  head: {
    title: {
      inner: 'It will be a pleasure',
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Name of my application' },
      { name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content: 'Content Title' },
      // with shorthand
      { n: 'twitter:description', c: 'Content description less than 200 characters' },
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: 'Content Title' },
      { itemprop: 'description', content: 'Content Title' },
      // ...
      // Facebook / Open Graph
      { property: 'fb:app_id', content: '123456789' },
      { property: 'og:title', content: 'Content Title' },
      // with shorthand
      { p: 'og:image', c: 'https://example.com/image.jpg' },
      // ...
    ],
    // link tags
    link: [
      { rel: 'canonical', href: 'http://example.com/#!/contact/', id: 'canonical' },
      { rel: 'author', href: 'author', undo: false }, // undo property - not to remove the element
      // with shorthand
      // { r: 'icon', h: 'path/to/icon-32.png', sz: '32x32', t: 'image/png' },
      // ...
    ],
    script: [
      { type: 'text/javascript', src: 'https://cdn.rawgit.com/ktquez/vue-head/master/vue-head.js', async: true, body: true }, // Insert in body
      // with shorthand
      { t: 'application/ld+json', i: '{ "@context": "http://schema.org" }' },
      // ...
    ],
    style: [
      // { type: 'text/css', inner: 'body { background-color: #000; color: #fff}', undo: false },
      // ...
    ],
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
.list-title {
  display: block;
}
.add-link {
  text-decoration: underline;
}
</style>