## Requirements
* Node.js >= 6
* Redis if you want to use fastboot caching

## Install dependencies
```
npm install
bower install
```

## Run the app
### Development mode
`npm run fb` - starts the fastboot server and watches for file changes (watch is buggy, though).

### "Production" mode
`npm run fb-cache` - builds the production version and starts server.js with fastboot cache enabled.

Cache will work only if you have Redis server enabled and configured in server.js. It's fine to run it without redis too - the app will run but the console will show connection errors and the HTML cache won't work.

### URL
Use [http://localhost:4200/articles](http://localhost:4200/articles) to open the Ember app.