const express = require('express');
const { getAllGenres, createGenre, getGenre, updateGenre, deleteGenre } = require('./../controllers/genresController');

const router = express.Router();

router.route('/').get(getAllGenres).post(createGenre);
router.route('/:id').get(getGenre).patch(updateGenre).delete(deleteGenre);

module.exports = router;
