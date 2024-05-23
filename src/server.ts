import * as sapper from '@sapper/server';

import compression from 'compression';
import firmware from './utils/firmware';
import * as fs from 'fs';
import * as path from 'path';
import sirv from 'sirv';
import express from 'express';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();

app // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		function (req, res, next) {
			// nb. this is just a quick copy paste spaghetti plate- works FOR NOW..
			// it'll be better once the patch editor is up.
			if(req.originalUrl === '/firmware/stable/CURRENT.uf2') {
							
				const file = path.join(process.cwd(), 'firmware/', firmware.stable.file);
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="CURRENT.uf2"'
						});
						s.pipe(res);
				});
				
				s.on('error', function () {
					res.writeHead(404, {
						'Content-Type': 'text/plain'
					});
					res.end(JSON.stringify({
						message: `Not found`
					}));
				});
			}
			else if(req.originalUrl === '/firmware/beta/CURRENT.uf2') {
							
				const file = path.join(process.cwd(), 'firmware/', firmware.beta.file);
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="CURRENT.uf2"'
						});
						s.pipe(res);
				});
				
				s.on('error', function () {
					res.writeHead(404, {
						'Content-Type': 'text/plain'
					});
					res.end(JSON.stringify({
						message: `Not found`
					}));
				});
			}
			else if(req.originalUrl === '/presets/default/PRESETS.uf2') {
							
				const file = path.join(process.cwd(), 'presets/', 'DEFAULT.UF2');
				const s = fs.createReadStream(file);

				s.on('open', function () {
						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="PRESETS.uf2"'
						});
						s.pipe(res);
				});
				
				s.on('error', function () {
					res.writeHead(404, {
						'Content-Type': 'text/plain'
					});
					res.end(JSON.stringify({
						message: `Not found`
					}));
				});
			}
			else if(req.originalUrl === '/presets/Meska/Meska.zip') {
							
				const file = path.join(process.cwd(), 'presets/', 'Meska.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Meska.zip"'
						});
						s.pipe(res);
				});
				
				s.on('error', function () {
					res.writeHead(404, {
						'Content-Type': 'text/plain'
					});
					res.end(JSON.stringify({
						message: `Not found`
					}));
				});
			}
			else if(req.originalUrl === '/presets/LPZW/LPZW.zip') {
							
				const file = path.join(process.cwd(), 'presets/', 'LPZW.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="LPZW.zip"'
						});
						s.pipe(res);
				});
				
				s.on('error', function () {
					res.writeHead(404, {
						'Content-Type': 'text/plain'
					});
					res.end(JSON.stringify({
						message: `Not found`
					}));
				});
			}
			else {
				return next();
			}
		},	
		sapper.middleware()
	)
	.listen(PORT);
