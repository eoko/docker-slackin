require('dotenv')
  .config();

const slackin = require('slackin');

const token    = process.env.SLACK_TOKEN      || 'default';
const interval = process.env.SLACK_INTERVAL   || 1000;
const org      = process.env.SLACK_ORG        || 'eoko';
const path     = process.env.SLACK_PATH       || '/';
const channels = process.env.SLACK_CHANNELS   || null;
const silent   = process.env.SLACK_SILENT     || false;
const port     = process.env.PORT             || 3000;

slackin
  .default({ token, interval, org, path, channels, silent, })
  .listen(port);
