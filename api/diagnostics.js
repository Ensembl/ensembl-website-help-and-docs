const config = require('../config');

const runDiagnostics = async (req, res) => {
  const databasePath = process.env.DEPLOYMENT === 'NOW' ? 'build/database.db' : config.databasePath;
  const diagnosticsData = {
    deploymentEnv: process.env.DEPLOYMENT,
    databasePath
  };

  res.json(diagnosticsData);
};

module.exports = runDiagnostics;
