const express = require('express');
const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');
const app = express();
const upload = multer({ dest: 'temp/' });

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.post('/api/image', upload.single('image'), (req, res, next) => {
	console.log('receiving an image');
	const tempPath = req.file.path;
	const targetPath = path.join(__dirname, '../vivalavida/public', req.file.originalname);

	fs.rename(tempPath, targetPath, error => {
		if (error) {
			console.error(error);
			res.status(500).send('Error uploading image');
		} else {
			res.status(200).send('Image uploaded successfully');
		}
	});
});

app.post('/api/song', upload.single('song'), (req, res, next) => {
	console.log('receiving an image');
	const tempPath = req.file.path;
	const targetPath = path.join(__dirname, '../public/songs', req.file.originalname);

	fs.rename(tempPath, targetPath, error => {
		if (error) {
			console.error(error);
			res.status(500).send('Error uploading Song');
		} else {
			res.status(200).send('Song uploaded successfully');
		}
	});
});

const musicDir = path.join(__dirname, '../vivalavida/src/assets/songs');

app.get('/api/hashes', async (req, res) => {
	console.log('INSIDE HASHES');
	try {
		const files = await fs.readdir(musicDir);

		console.log(files);
		const hashes = files.reduce((acc, file) => {
			if (path.extname(file) === '.mp3') {
				const hash = crypto.createHash('md5');
				console.log(path.join(musicDir, file));
				hash.update(fs.readFile(path.join(musicDir, file)).toString());
				acc[file] = hash.digest('hex');
			}
			return acc;
		}, {});

		res.json(hashes);
	} catch (err) {
		console.error(`Error reading music directory: ${err}`);
		res.status(500).send('Internal server error');
	}
});

app.listen(4000, () => {
	console.log('Server started on port 4000');
});
