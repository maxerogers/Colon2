cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.videoplayer/www/videoplayer.js",
        "id": "com.phonegap.plugins.videoplayer.VideoPlayer",
        "clobbers": [
            "cordova.plugins.videoPlayer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.videoplayer": "1.0",
    "org.apache.cordova.device": "0.2.9"
}
// BOTTOM OF METADATA
});