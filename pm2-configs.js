module.exports = {
  apps : [
    {
      name: "myapp",
      script: "server/app.js",
      watch: true,
      instance_var: 'INSTANCE_ID',
      env: {
        PORT:4000,
        MONGODB_URI: 'mongodb://localhost/rom_dev',
        MAILGUN_API_KEY: 'key-cd57cb432a4875414579013553a72674',
        RECAPTCHA_SECRET: '6LdGQo0UAAAAAKsZ7JiWFmdvoxLHlSjpMfWWTNUr',
        NODE_ENV: 'development'
      }
    }
  ]
};
