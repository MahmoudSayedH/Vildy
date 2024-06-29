const getAllGenres = (req, res) => {
  res.status(200).json({ status: 'success', data: { genres: '<list of all genres>' } });
};
const createGenre = (req, res) => {
  const newGenres = req.body;

  res.status(201).json({ status: 'success', data: { genres: '<genres created>' } });
};
const getGenre = (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  //Search for id...
  res.status(200).json({ status: 'success', data: { genres: '<single genres>' } });
};
const updateGenre = (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  res.status(200).json({ status: 'success', data: { genres: '<Updated genres>' } });
};
const deleteGenre = (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  res.status(204).json({ status: 'success', data: { genres: null } });
};
module.exports = { getAllGenres, createGenre, getGenre, updateGenre, deleteGenre };
