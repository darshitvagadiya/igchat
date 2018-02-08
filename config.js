module.exports = {
	db: process.env.db || 'mongodb://darshitsoni:darshitsoni@ds111895.mlab.com:11895/crudapp',
	clientSecret: process.env.clientSecret|| 'ab7c313db4c74a91be73a782cacdda78',
	tokenSecret: process.env.tokenSecret || 'supermoresecret'
}