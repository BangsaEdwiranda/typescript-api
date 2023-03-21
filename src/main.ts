import * as path from 'path';

process.env.NODE_CONFIG_DIR = path.resolve(__dirname + '/configs/env');


require('./main-setup').bootstrap();
