const express = require('express');
const app = express();
// const env = require('dotenv').config();
const https = require('https');

app.use(express.static('public'));

const {USER_ID, ACCESS_TOKEN} = process.env;

let targetURL = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/?count=99&access_token=${ACCESS_TOKEN}`;

app.get('/api/instafeed', function (req, res){
	getPhotos(targetURL)
		.then((images) => {
			res.json(JSON.parse(images));
		})
		.catch((err) => {
			console.log('err', err);
			res.send(err);
		});
});

function getPhotos(endpoint) {
	return new Promise((resolve, reject) => {
		https.get(endpoint, res => {
			let rawData = '';
			res.on('data', chunk => rawData += chunk);
			res.on('end', () => {
				resolve(rawData);
			});
		})
		.on('err', err => reject(err));
	});
}

app.listen(9000, function() {
	console.log('Server listening on port 9000');
});

module.exports = app;