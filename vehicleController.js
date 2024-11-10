const {
  fetchInspectors: getInspectorsQuery,
  fetchDetails: getDetailsQuery,
  fetchBodyDetails: getBodyDetailsQuery,
  fetchOwnerDetails: getOwnerDetailsQuery,
  fetchBrakes: getBrakesQuery,
  fetchBumpers: getBumpersQuery,
  fetchInterior: getInteriorQuery,
} = require('../db/querie');


const getInspectors = (req, res) => {
  const inspectorId = req.query.inspector_id;
  getInspectorsQuery(inspectorId, (err, result) => {
    if (err) return res.status(500).json({ error: 'Server Error' });
    if (result.length === 0) return res.status(404).json({ message: 'Inspector not found' });
    res.json(result);
  });
};


const getDetails = (req, res) => {
  const detailId = req.query.detail_id;
  getDetailsQuery(detailId, (err, result) => {
    if (err) return res.status(500).json({ error: 'Server Error' });
    res.json(result);
  });
};


const getBodyDetails = (req, res) => {
  const bodyId = req.query.body_id;
  getBodyDetailsQuery(bodyId, (err, result) => {
    if (err) return res.status(500).json({ error: 'Server Error' });
    res.json(result);
  });
};


const getOwnerDetails = (req, res) => {
  const ownerId = req.query.owner_id;
  getOwnerDetailsQuery(ownerId, (err, result) => {
    if (err) return res.status(500).json({ error: 'Server Error' });
    res.json(result);
  });
};


const getBrakes = (req, res) => {
  const brakeId = req.query.brake_id;
  getBrakesQuery(brakeId, (err, result) => {
    if (err) return res.status(500).json({ error: 'Server Error' });
    res.json(result);
  });
};


const getBumpers = (req, res) => {
  const bumperId = req.query.bumper_id;
  getBumpersQuery(bumperId, (err, result) => {
    if (err) return res.status(500).json({ error: 'Server Error' });
    res.json(result);
  });
};


const getInterior = (req, res) => {
  const interiorId = req.query.interior_id;
  getInteriorQuery(interiorId, (err, result) => {
    if (err) return res.status(500).json({ error: 'Server Error' });
    res.json(result);
  });
};

module.exports = {
  getInspectors,
  getDetails,
  getBodyDetails,
  getOwnerDetails,
  getBrakes,
  getBumpers,
  getInterior,
};
