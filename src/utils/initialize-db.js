const { dbService } = require("../service/db.service");

async function initializeDB() {
  const response = dbService.initialize();
  return response;
}

module.exports = { initializeDB };
