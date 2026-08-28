// We're importing the function we just built
const searchGreenhouseJobs = require('./tools/searchJobs');

// This is just a temporary test script.
// We're calling our function with "airbnb" as the example company.
async function run() {
  const jobs = await searchGreenhouseJobs('airbnb');

  console.log(`\nFound ${jobs.length} jobs!\n`);

  // Let's just print the first 3 so it's not overwhelming
  console.log(jobs.slice(0, 3));
}

run();