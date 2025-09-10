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
			else if(req.originalUrl === '/presets/GrainBlanc/GrainBlanc.zip') {
							
				const file = path.join(process.cwd(), 'presets/', 'GrainBlanc.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="GrainBlanc.zip"'
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
			else if(req.originalUrl === '/presets/Deadriot/Deadriot.zip') {
							
				const file = path.join(process.cwd(), 'presets/', 'Deadriot.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Deadriot.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_11_Spectral_Triangle_Meska/Wavetable_11_Spectral_Triangle_Meska.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_11_Spectral_Triangle_Meska.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_11_Spectral_Triangle_Meska.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_10_VacuumTube_Meska/Wavetable_10_VacuumTube_Meska.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_10_VacuumTube_Meska.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_10_VacuumTube_Meska.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_09_Wavefolder_Meska/Wavetable_09_Wavefolder_Meska.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_09_Wavefolder_Meska.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_09_Wavefolder_Meska.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_08_Phase_Vowels/Wavetable_08_Phase_Vowels.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_08_Phase_Vowels.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_08_Phase_Vowels.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_07_Additive_Complex/Wavetable_07_Additive_Complex.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_07_Additive_Complex.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_07_Additive_Complex.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_06_Additive_Drawbar/Wavetable_06_Additive_Drawbar.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_06_Additive_Drawbar.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_06_Additive_Drawbar.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_05_FM_Complex/Wavetable_05_FM_Complex.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_05_FM_Complex.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_05_FM_Complex.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_04_FM_Overtones/Wavetable_04_FM_Overtones.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_04_FM_Overtones.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_04_FM_Overtones.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_03_FM_Harmonics/Wavetable_03_FM_Harmonics.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_03_FM_Harmonics.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_03_FM_Harmonics.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_02_Additive_Harmonics/Wavetable_02_Additive_Harmonics.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_02_Additive_Harmonics.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_02_Additive_Harmonics.zip"'
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
			else if(req.originalUrl === '/wavetables/Wavetable_01_Original_Miunau/Wavetable_01_Original_Miunau.zip') {
							
				const file = path.join(process.cwd(), 'wavetables/', 'Wavetable_01_Original_Miunau.zip');
				const s = fs.createReadStream(file);

				s.on('open', function () {

						res.writeHead(200, {
							'Content-Type': 'application/octet-stream',
							'Content-Disposition': 'attachment; filename="Wavetable_01_Original_Miunau.zip"'
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
