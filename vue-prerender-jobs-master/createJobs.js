const fs = require("fs");

const job_titles = ['Fullstack Developer', 'Frontend Developer', 'Backend Developer', 'UI Expert', 'Shark Tamer',
              'Handyman', 'DJ', 'Project Manager', 'Product Manager', 'Recepetionist', 'Web designer', 'Barista',
              'Business owner', 'Soldier', 'Film director', 'Lawyer', 'Astrologer', 'Cabinet maker', 'Magician',
              'Sculptor', 'Casual worker', 'Clairvoyant', 'Courier', 'Leaflet distributor', 'Electrician',
              'Careers advisor', 'Bodyguard', 'Cartoonist', 'Lifeguard']

const locations = ['Tel Aviv', 'New York', 'Chiang Mai', 'London', 'Bali', 'Jerusalem', 'Petah Tikva', 'Berlin']
const job_types = ['full-time', 'part-time', 'freelance', 'project']
const companies = ['Locard', 'Jokens', 'Trummy', 'Dataps', 'Bcards', 'Eztalk', 'nepaid',
             'yeswap', 'backzy', 'packzy', 'nvideo', 'Spoker', 'flebit', 'locket', 'accell', 'splier']

const random = (max) => Math.floor(Math.random() * max)

const jobs = []
for (let i=0; i< 100; i++) {
  const title = job_titles[random(job_titles.length)]
  const location = locations[random(locations.length)]
  const job_type = job_types[random(job_types.length)]
  const company = companies[random(companies.length)]
  jobs.push({title, locations, job_type, company})
}

try {
  console.log('writing to file...')
  const file = fs.createWriteStream("./db/jobs.json");
  file.write(JSON.stringify(jobs));
  file.end();
  console.log('finished!')
} catch(e) {
  console.error('error!', e)
}


// console.log('job_titles', job_titles.length)




// def get_random_job():
//     job_title = random.choice(job_titles)
//     city = random.choice(cities)
//     company = random.choice(companies)
//     job_type = random.choice(job_types)

//     return {'title': job_title, 'city': city, 'company': company, 'jobType': job_type, 'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur, aperiam qui, consectetur assumenda libero quisquam beatae dolorem temporibus, eligendi odit labore incidunt dicta ipsa laudantium praesentium quidem voluptate quae.'}

// def get_random_jobs(amount):
//     jobs = []
//     for i in range(amount):
//         jobs.append(get_random_job())
    
//     return jobs

// random_jobs = get_random_jobs(100)

// with open('jobs.json', 'w') as json_file:
//     json.dump(random_jobs, json_file, indent=4)
