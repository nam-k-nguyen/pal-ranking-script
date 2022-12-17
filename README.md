# PAL Ranking Script
 
A script written with Javascript to automate the job ranking process on the PAL system by the Univerity of Cincinnati.

<br/>

## Usage 

### 1. Providing Input

Before you run the script, make sure that you supplied it with your UC username, password, and the number of positions you wish to rank.


These can be found inside the index.js file 

```js
// index.js

// TODO - supply your input here
const username = process.env.UC_USERNAME; // UC username 
const password = process.env.UC_PASSWORD; // UC password
const positionsToRank = 10; // The number of positions to rank 
```

### 2. Running the script

To run this script you must have 
[node.js](https://nodejs.org/en/)
and 
[npm](https://www.npmjs.com/)
installed. If you already do, clone the project than run the following commands in the terminal to install and run the script

```bash
npm install 
node index
```

### 3. Two-Factor Authentication

A few seconds after login, you will be prompted by DUO Mobile 2FA to authenticate the login attempt by PuppeteerJS. Please click accept to continue.

If your DUO settings is set to push notification every time you login, no extra step is needed beside acceptting on DUO Mobile.

If your DUO settings is set to ask for authentication method everytime you login, you need to select push notification in the browser then accept on DUO Mobile.

<br/>

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)