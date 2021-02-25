const jobs = require('../../db/jobs.json')

module.exports = { add, query, remove, update, getById }


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
        const { page } = filterBy
        const currJobs = filterJobs()
        const index = page * 10
        resolve({
            jobs: currJobs.slice(index, index + 10), 
            total: currJobs.length
        }) 
    })
}

// getById
async function getById(id) {
    // ADD YOUR LOGIC HERE
    return jobs.filter(item => item.id === id)[0]
}

// Update
async function update(item) {
    // ADD YOUR LOGIC HERE
}


// Delete
async function remove(Id) {
    // ADD YOUR LOGIC HERE
}