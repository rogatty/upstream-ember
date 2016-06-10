/*jshint node:true*/
/* global require */
const FastBootAppServer = require('fastboot-app-server');
const RedisCache = require('fastboot-redis-cache');

let cache = new RedisCache({
	host: '127.0.0.1',
	port: 6379
});

let server = new FastBootAppServer({
	cache,
	distPath: 'dist',
	workerCount: 1
});

server.start();
