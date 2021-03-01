const jobs = require('../../db/jobs.json')
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

const JOBS_COLLECTION = 'jobs'



module.exports = { add, addMany, query, remove, update, getById }


// Read
async function query(filterBy = {}) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    const { page } = filterBy
    const index = (page - 1) * 10
    try {
        const jobs = await collection.find().toArray()
        return { jobs: jobs.slice(index, index + 10), total: jobs.length }
    } catch (err) {
        console.log('ERROR: cannot find jobs')
        throw err;
    }
}

// getById
async function getById(id) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    try {
        return await collection.findOne({ _id: ObjectId(id) })
    } catch (err) {
        console.log('ERROR: cannot find order')
        throw err;
    }
}

//Create one
async function add(item) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    try {
        await collection.insertOne(item);
        return item;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)
        throw err;
    }
}

//Create many
async function addMany(items) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    try {

        await collection.insertMany(items);
        return items;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)
        throw err;
    }
}

// Update
async function update(item) {
    const collection = await dbService.getCollection(JOBS_COLLECTION)
    const strId = item._id
    const _id = ObjectId(strId)
    delete item._id
    try {
        await collection.updateOne({ _id }, { $set: item })
        return item
    } catch (err) {
        console.log(`ERROR: cannot update item ${item._id}`)
        throw err;
    }
}

// Delete
async function remove(Id) {
    // ADD YOUR LOGIC HERE
}

async function _insertInitialItems(items) {
    const noIdItems = items.map(item => {
        if (item.id) delete item.id
        return item
    })
    addMany(noIdItems)
}
