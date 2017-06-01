var SerialMonitor = SerialMonitor || {};

SerialMonitor.Message = function () {

    var sendBtn;
    var dataOut;
    var dataIn;

    var htmlEncode = function (value) {
        var encodedValue = $("<div />").text(value).html();
        return encodedValue;
    };

    var getMessageHtml = function (message) {
        var d = new Date();
        var time = d.toLocaleTimeString();

        return "<li>" + htmlEncode(message) + "</li><br>";
    };

    var addMessage = function (message) {
        dataOut.append(getMessageHtml(message));
    };

    var sendMessageClick = function () {
        if (dataIn.val().length > 0) {
            SerialMonitor.Sync.sendMessage(dataIn.val());
            dataIn.val("");
        }
    };

    var sendOnEnterKey = function (e) {
        if (e.keyCode == 13) {
            sendMessageClick();
        }
    };

    var init = function (send, out, input) {
        sendBtn = $(send);
        dataOut = $(out);
        dataIn = $(input);

        $(sendBtn).click(sendMessageClick);
        $(dataIn).keydown(function (e) { sendMessageClick(e) });
    };

    var oPublic =
        {
            init: init,
            addMessage: addMessage 
        };
    return oPublic;

}();