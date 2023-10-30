const row1 = '..........................';
const row2 = '..........................';
const row3 = '...xxxxxxxxxxxxxxxxxxxx...';
const row4 = '..xxxxxxxxxxxxxxxxxxxxxx..';
const row5 = '.xxxxxxxxxxxxxxxxxxxxxxxx.';
const row6 = 'xxxxxxxxxxxxxxxxxxxxxxxxxx';
const row7 = '.########################.';
const row8 = '.###...############...###.';
const row9 = '.###...#####..#####...###.';
const row10 = '.###########..###########.';
const row11 = '.###########..###########.';

const dots = Buffer.from('.'.repeat(32));

let rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11];
rows = rows.map(row => Buffer.concat([dots, Buffer.from(row), dots]));

const length = rows.reduce((acc, row) => acc + row.length + 1, 0);

const buffer = Buffer.alloc(length);

let offset = 0;

for (let i = 0; i < rows.length; i++) {
    const rowBuffer = Buffer.from(rows[i] + '\n');
    rowBuffer.copy(buffer, offset);
    offset += rowBuffer.length;
}

console.log(buffer.toString());