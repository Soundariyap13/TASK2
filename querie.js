const db = require('./connection'); 

const fetchInspectors = (callback) => {
  const query = 'SELECT * FROM inspectors';
  db.query(query, [], callback);
};

const fetchDetails = (callback) => {
  const query = 'SELECT * FROM details';
  db.query(query, [], callback);
};

const fetchBodyDetails = (callback) => {
  const query = 'SELECT * FROM body';
  db.query(query, [], callback);
};

const fetchOwnerDetails = (callback) => {
  const query = 'SELECT * FROM owner';
  db.query(query, [], callback);
};

const fetchBrakes = (callback) => {
  const query = 'SELECT * FROM brakes';
  db.query(query, [], callback);
};

const fetchBumpers = (callback) => {
  const query = 'SELECT * FROM bumpers';
  db.query(query, [], callback);
};

const fetchInterior = (callback) => {
  const query = 'SELECT * FROM interior';
  db.query(query, [], callback);
};

module.exports = {
  fetchInspectors,
  fetchDetails,
  fetchBodyDetails,
  fetchOwnerDetails,
  fetchBrakes,
  fetchBumpers,
  fetchInterior,
};
