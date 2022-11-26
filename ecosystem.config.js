module.exports = {
  apps : [{
    name: 'Nuxt Cozymart',
    script: '.output/server/index.mjs',
    env: {
            "PORT": 3005,
            "NODE_ENV": "production"
        },
  }],

  deploy : {
    production : {
      user : 'root',
      // Multi host is possible, just by passing IPs/hostname as an array. IP of your host(s) here
      host : ["185.210.144.30"],
      ref  : 'origin/master',
      repo : 'git@github.com:wolfcoder/cozymart.git',
      // path to the folder on the server your app will be
      path : '/www/wwwroot/cozymart/',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};