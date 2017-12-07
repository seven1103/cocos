cc.Class({
    extends: cc.Component,

    properties: {
        audio_click: {
            type: cc.AudioSource,
            default: null
        }
    },
    //按钮点击
    btn_click() {
        this.audio_click.play();
    },
    // use this for initialization
    onLoad() {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});