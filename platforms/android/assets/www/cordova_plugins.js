cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.videoplayer/www/videoplayer.js",
        "id": "com.phonegap.plugins.videoplayer.VideoPlayer",
        "clobbers": [
            "cordova.plugins.videoPlayer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.videoplayer": "1.0"
}
// BOTTOM OF METADATA
});