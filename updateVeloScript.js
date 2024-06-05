import fs from 'node:fs';
import { stdin, stdout } from 'node:process';
import readline from 'node:readline/promises';
import path from 'path';

const directoryPath = path.resolve('public/velo');
const jsonFilePath = path.join(directoryPath, 'data.json');

const rl = readline.createInterface({
	input: stdin,
	output: stdout,
});

const main = async () => {
	try {
		const newVeloFileName = await rl.question('Enter the new velo archive file name (example - "Velo-v1.2.3.zip"): ');
		const newVeloFilePath = path.join(directoryPath, newVeloFileName);

		if (!fs.existsSync(newVeloFilePath)) {
			console.log(`File ${newVeloFileName} does not exist in ${directoryPath}`);
			return;
		}

		const newVersionNumber = await rl.question('Enter the new version number (example - "1.2.3"): ');

		let jsonData = {};
		if (fs.existsSync(jsonFilePath)) {
			jsonData = JSON.parse(fs.readFileSync(jsonFilePath));
		}

		const doUpdate = await rl.question(`New Velo Update:\nFrom (${jsonData.versionNumber || 'v0'}) -> (${newVersionNumber})\n\nDo you want to proceed? (y/n): `);

		if (doUpdate.toLowerCase() === 'y') {
			jsonData.fileName = newVeloFileName;
			jsonData.versionNumber = newVersionNumber;
			console.log(jsonData.bannerVersion);
			jsonData.bannerVersion = jsonData.bannerVersion === undefined ? 0 : jsonData.bannerVersion + 1;

			fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData));
			console.log('Data updated successfully');
		} else {
			console.log('Update cancelled');
		}
	} catch (err) {
		console.error(err);
	} finally {
		rl.close();
	}
};

main();
