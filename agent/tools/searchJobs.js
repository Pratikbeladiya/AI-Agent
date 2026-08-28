// This is a special built-in tool in Node.js that lets us
// "call" an internet address, just like visiting a website,
// but from code instead of a browser.


// This is our main function.
// "async" means: this function will take a little time
// (because internet calls are not instant), so wait for it.
async function searchGreenhouseJobs(companySlug) {

  // Step A: Build the URL we want to visit.
  // "companySlug" is just the company's name as Greenhouse knows it,
  // e.g. "airbnb", "stripe", "pinterest"
  const url = `https://boards-api.greenhouse.io/v1/boards/${companySlug}/jobs`;

  console.log(`Fetching jobs for: ${companySlug}`);
  console.log(`URL: ${url}`);

  try {
    // Step B: Actually visit that URL and wait for the reply.
    const response = await fetch(url);

    // Step C: The reply comes as raw text.
    // ".json()" converts that raw text into something
    // JavaScript can actually read (an object/array).
    const data = await response.json();

    // Step D: The real job list is inside data.jobs
    // Let's only keep the fields we actually care about.
    const cleanJobs = data.jobs.map((job) => {
      return {
        title: job.title,
        location: job.location.name,
        url: job.absolute_url,
        postedDate: job.updated_at,
        company: companySlug,
      };
    });

    // Step E: Return the clean list so other code can use it later.
    return cleanJobs;

  } catch (error) {
    // If anything goes wrong (no internet, wrong company name, etc.)
    // we print the error instead of crashing.
    console.error('Something went wrong:', error.message);
    return [];
  }
}

// This line makes this function usable in other files.
module.exports = searchGreenhouseJobs;