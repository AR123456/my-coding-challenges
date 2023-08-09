// Simulated data array
const allData = Array.from({ length: 50 }, (_, index) => index + 1); // Contains numbers 1 to 50

// Function to retrieve a specific page of data
function getDataForPage(dataArray, page, pageSize) {
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  return dataArray.slice(startIdx, endIdx);
}

// Function to display paginated data
function displayPaginatedData(dataArray, currentPage, pageSize) {
  const paginatedData = getDataForPage(dataArray, currentPage, pageSize);
  console.log(`Page ${currentPage}:`, paginatedData);
}

const pageSize = 10;
const currentPage = 1;

displayPaginatedData(allData, currentPage, pageSize); // Display the first page of data
