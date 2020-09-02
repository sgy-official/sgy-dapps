const fs = require("fs");
const { exit } = require("process");
const readChunk = require('read-chunk');
const imageType = require('image-type');

const styles = {
    'bold'          : ['\x1B[1m',  '\x1B[22m'],
    'italic'        : ['\x1B[3m',  '\x1B[23m'],
    'underline'     : ['\x1B[4m',  '\x1B[24m'],
    'inverse'       : ['\x1B[7m',  '\x1B[27m'],
    'strikethrough' : ['\x1B[9m',  '\x1B[29m'],
    'white'         : ['\x1B[37m', '\x1B[39m'],
    'grey'          : ['\x1B[90m', '\x1B[39m'],
    'black'         : ['\x1B[30m', '\x1B[39m'],
    'blue'          : ['\x1B[34m', '\x1B[39m'],
    'cyan'          : ['\x1B[36m', '\x1B[39m'],
    'green'         : ['\x1B[32m', '\x1B[39m'],
    'magenta'       : ['\x1B[35m', '\x1B[39m'],
    'red'           : ['\x1B[31m', '\x1B[39m'],
    'yellow'        : ['\x1B[33m', '\x1B[39m'],
    'whiteBG'       : ['\x1B[47m', '\x1B[49m'],
    'greyBG'        : ['\x1B[49;5;8m', '\x1B[49m'],
    'blackBG'       : ['\x1B[40m', '\x1B[49m'],
    'blueBG'        : ['\x1B[44m', '\x1B[49m'],
    'cyanBG'        : ['\x1B[46m', '\x1B[49m'],
    'greenBG'       : ['\x1B[42m', '\x1B[49m'],
    'magentaBG'     : ['\x1B[45m', '\x1B[49m'],
    'redBG'         : ['\x1B[41m', '\x1B[49m'],
    'yellowBG'      : ['\x1B[43m', '\x1B[49m']
};

function checkCondition(appkey, key, condition) {
    if (condition) {
        console.log(`${appkey} ${key} ${styles.green[0]}PASS${styles.green[1]}`);
    } else {
        console.error(`${appkey} ${key} ${styles.red[0]}ERROR${styles.red[1]}`);
        exit(1);
    }
}

function checkImageType(path) {
    const buffer = readChunk.sync(path, 0, 12);
    return imageType(buffer);
}

function checkDapp(appkey) {
    let config = fs.readFileSync(`./dapps/${appkey}/app.json`);
    config = JSON.parse(config);
    checkCondition(appkey, "app_key", config.app_key == appkey);
    checkCondition(appkey, "app_name", typeof(config.app_name) == "string" && config.app_name.length > 3);
    checkCondition(appkey, "author", typeof(config.author) == "string");
    checkCondition(appkey, "wallet_address", typeof(config.wallet_address) == "string");
    checkCondition(appkey, "url", typeof(config.url) == "string" && config.url.startsWith("https://"));
    checkCondition(appkey, "email", typeof(config.app_name) == "string");
    checkCondition(appkey, "overview", !!config.overview);

    let imageType = checkImageType(`./dapps/${appkey}/icon.png`);
    checkCondition(appkey, "icon", imageType.ext == "png");

    console.log(`${appkey} ${styles.green[0]}[OK]${styles.green[1]}`);
    return config;
}

function checkDapps() {
    console.log(`${styles.greenBG[0]}SGY DApp Test${styles.greenBG[1]}`);
    let dirs = fs.readdirSync("./dapps");
    let dapps = [];
    for (let i in dirs) {
        let appkey =  dirs[i];
        if (!appkey.startsWith(".")) {
            dapps.push(checkDapp(appkey));
        }
    }

    fs.writeFileSync("./dapps.json", JSON.stringify(dapps, null, 4));

    console.log(`${styles.greenBG[0]}SGY DApp All Done${styles.greenBG[1]}`);
}

function main() {
    checkDapps();
}

main();
