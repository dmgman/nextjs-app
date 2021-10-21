/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

(async () => {
    // open the database
    const db = await sqlite.open({
      filename: './microphones.sqlite',
      driver: sqlite3.Database
    });

    await db.migrate({force: true});
})()