// Simulated API function that fetches user data
function fetchUsers(page, pageSize) {
  // Simulate fetching data from an API
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const userData = [
    /* User data fetched from the API */
  ];
  return userData.slice(startIdx, endIdx);
}

// Function to retrieve all users in chunks
async function getAllUsersInChunks(pageSize) {
  const allUsers = [];
  let page = 1;

  while (true) {
    const chunk = await fetchUsers(page, pageSize);

    if (chunk.length === 0) {
      break; // No more data to fetch
    }

    allUsers.push(chunk);
    page++;
  }

  return allUsers;
}

const pageSize = 10;
getAllUsersInChunks(pageSize)
  .then((users) => {
    console.log(users); // Array of arrays, each containing a chunk of users
  })
  .catch((error) => {
    console.error("Error:", error);
  });
