var path = require('path');

var config = {
  db: 'mongodb://127.0.0.1/nodecms',
  db_name: 'nodecms',

  session_secret: 'nodecms_secret',
  auth_cookie_name: 'nodecms_test',


  view_root: path.join(__dirname, 'views'),
  upload_path: path.join(__dirname, 'data/upload'),
  download_base_url: '/download/data/',
  cms_root: path.join(__dirname, 'data/cms'),
  file_size_limit: 10 * 1024 * 1024, // 10MB
  file_count_limit: 1,
  captcha_base_url: '/captcha/',

  // backup or restore data from db
  database_path: path.join(__dirname, 'database'),
  port: 3001
};
module.exports = config;
