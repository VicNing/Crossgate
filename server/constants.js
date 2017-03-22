/**
 * Created by Neil on 2017/1/23.
 */
const host = '127.0.0.1';
const port = '8080';
const contentDir = process.env.NODE_ENV === 'production' ? 'public' : 'dev';
module.exports = {host, port, contentDir};