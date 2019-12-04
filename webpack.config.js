const path     = require('path');

const src      = path.resolve(process.cwd(), 'src'); // 源码目录
const dist     = path.resolve(process.cwd(), 'dist');

const info = require('../package.json');

let lastVersion = info.version;

module.exports = {
    mode: NODE_ENV,

    entry: [
      './src/zepto.js'
    ],

    output: {
        path: dist,
        filename: `[name].js`,
        library: 'dll_[name]',
        libraryTarget: 'this'
    },
}
