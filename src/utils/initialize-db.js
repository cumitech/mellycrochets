const { dbService } = require("../service/db.service");

async function initializeDB() {
  const response = dbService.initialize();
  // console.log("res:", response);
  return response;
}

module.exports = { initializeDB };
