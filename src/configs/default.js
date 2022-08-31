const default_conf = {
  user: {
    git: {
      username: '',
      email: '',
    },
    github: {
      username: '',
      token: '',
    },
    discord: {
      id: '',
      channelId: '',
      webhooks: [],
    },
    settings: {
      // ...
    },
  },
  db: {
    driver: '', // support mongo, gql, maybe an sql dialect. db drivers! 
    configurations: [
      {
        name: 'default',
        credentials: {}
      }
    ], // this should be modular
  },
  system: {},
  // ...we'll fill the rest in later
}

module.exports = {
  default_conf,
}
