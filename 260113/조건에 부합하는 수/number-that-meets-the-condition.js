const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 4 !== 0) {
        continue;
    }
    if (Math.floor(i / 8) % 2 === 0) {
        continue;
    }
    if (i % 7 < 4) {
        continue;
    }
    process.stdout.write(i + ' ')
}