class Base {
    init(config, platform) {
        this.platform = platform;
        this.log = platform.log;
        this.config = config;
        this.name = config['name'];
        //Search device position
        this.deviceIndex = 0;
        if (config['deviceIp']) {
            let index = 0;
            for (var elem in platform.config.devices) {
                if (elem == config['deviceIp']) {
                    this.deviceIndex = index;
                    break;
                }
                index++;
            }
        }
    }
    getServices() {
        return this.services;
    }
    identify(callback) {
        callback();
    }
}

module.exports = Base;