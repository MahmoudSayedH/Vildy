const Genre = require('./../models/genreModel');
const getAllGenres = async (req, res) => {
  //get all genres from the database
  const genres = await Genre.find();
  //send response contain all Genres
  res.status(200).json({ status: 'success', data: { genres } });
};
const createGenre = async (req, res) => {
  //create new Genre from the reqest body
  const newGenres = await Genre.create(req.body);
  //send response of the new created genre
  res.status(201).json({ status: 'success', data: { genre: newGenres } });
};
const getGenre = async (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  //Search for id in the database
  const genre = Genre.find(id);
  // send response contains the data of the recived id
  res.status(200).json({ status: 'success', data: { genre } });
};
const updateGenre = async (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  const newData = req.body;
  //find genre and update its value
  const genre = await Genre.findByIdAndUpdate(
    id,
    newData, //we can add this mongoose code here in the second argument:($set{}-$inc{}-->)
    {
      new: true, //get the new updated genre
      runValidator: true, //run validation on the new inserted data
    }
  );
  //send a response of the updated genre
  res.status(200).json({ status: 'success', data: { genre } });
};
const deleteGenre = async (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  //find a data by id then delete from database
  await Genre.findByIdAndDelete(id);
  res.status(204).json({ status: 'success', data: { genre: null } });
};
module.exports = { getAllGenres, createGenre, getGenre, updateGenre, deleteGenre };
