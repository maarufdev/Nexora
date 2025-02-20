import { leftContainer } from "./left-container.js";
const app = (function () {
    const componentHolder = {
        elements: {

        },
        states: {

        }
    }
    const scripManager = {
        initialize: function () {
            $(window).ready(function(){
                scripManager.service.renderLeft();
                scripManager.service.renderRight();
            })
        },
        service: {
            renderLeft: function () {
                $.get("/Message/LeftContainer", function (data) {
                    $("#left-container").html(data);
                    leftContainer.scriptManager.initialize();
                });
            },
            renderRight: function () {
                $.get("/Message/RightContainer", function (data) {
                    $("#right-container").html(data);
                });
            }
        }
    }

    return {
        initialize: scripManager.initialize
    }
})();

app.initialize();