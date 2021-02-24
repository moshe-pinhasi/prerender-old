const jobs = require('../../db/jobs.json')

module.exports = { add, query, remove, update }


// Create
async function add(item) {
    // ADD YOUR LOGIC HERE
}


const filterJobs = () => {
    return JSON.parse(JSON.stringify(jobs))
}


// Read
async function query(filterBy = {}) {
    return new Promise((resolve) => {
        const { page, count } = filterBy
        const currJobs = filterJobs()
        resolve({jobs: currJobs.slice(page,10), total: currJobs.length}) 
    })
}


// Update
async function update(item) {
    // ADD YOUR LOGIC HERE
}


// Delete
async function remove(Id) {
    // ADD YOUR LOGIC HERE
}