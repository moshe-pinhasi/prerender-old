
    const express = require('express')
    
    const {addJob,getJobs, getJob,removeJob,updateJob} = require('./jobs.controller')

    const router = express.Router()

    router.get('/', getJobs)
    router.get('/:id', getJob)
    router.post('/', addJob)
    router.put('/', updateJob)
    router.delete('/', removeJob)
    

    module.exports = router