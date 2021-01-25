import * as sapper from '@sapper/server';

import compression from 'compression';
import firmware from './utils/firmware';
import fs from 'fs';
import path from 'path';
import polka from 'polka';
import sirv from 'sirv';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		function(req, res, next) {
			if(req.originalUrl === '/firmware/stable') {
							
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
						res.set('Content-Type', 'text/plain');
						res.status(404).end('Not found');
				});
			}
			else if(req.originalUrl === '/firmware/beta') {
							
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
						res.set('Content-Type', 'text/plain');
						res.status(404).end('Not found');
				});
			}
			else {
				return next();
			}
		},	
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
