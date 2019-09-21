const fs = require('fs');
const path = require('path');

const arguments = process.env.NODE_ENV || 'production';
let file = '';
const coverPath = path.resolve(__dirname, '../config/env.config.ts');

const replacestr = 'Replace ENV:: ';

switch (arguments) {
	case 'development':
		file =
			`export default {
			env: 'development'
		};`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;

	case 'production':
		file = `export default {
			env: 'production'
		};`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;

	default:
		file = `export default {
			env: 'production'
		};`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;
}
