var SerialMonitor = SerialMonitor || {};

SerialMonitor.Sync = function () {
    var serialMonitor = $.connection.SerialMonitor;    

    serialMonitor.client.sendMessage = function (message) {
        SerialMonitor.Message.addMessage(message);
    };

    var sendMessage = function (message) {
        SerialMonitor.server.send(message);
    };

    var init = function () {
        $.connection.hub.start().done(function () {

        });
    };

    var oPublic =
        {
            init: init,
            sendMessage: sendMessage
        };
    return oPublic;

}();