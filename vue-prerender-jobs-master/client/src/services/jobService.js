import { httpService } from "./httpService"

export const jobService = {
    getJobs,
    getJob
}

async function getJobs(page,filterBy) {
    const searchQuery = _parseFilterToQueryParams(page,filterBy)
    return httpService.get(`jobs${searchQuery}`)
}

async function getJob(jobId) {
    const job = await httpService.get(`jobs/${jobId}`)
    return job
}


function _parseFilterToQueryParams(page,filter) {
    try {
        if (!filter) filter = ''
        console.log(filter)
        const queryString= new URLSearchParams(filter)
        queryString.append('page',page)
        console.log(queryString.toString())
        return `?${queryString.toString()}`
    } catch (err) {
        console.log(err)
        return ''
    }
        
}