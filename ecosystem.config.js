module.exports = {
  apps: [
    {
      name: 'lawyer',
      port: '3000',
      exec_mode: 'cluster',

      script: './.output/server/index.mjs'
    }

  ],
};
