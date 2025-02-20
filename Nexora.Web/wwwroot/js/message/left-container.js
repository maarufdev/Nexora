const sampleData = {
    pinnedMessages: [{
        fullName: "Bessie Cooper",
        content: "Hello, I am Bessie",
        profileUrl: "/images/jordan.webp",
        time: "10:00 PM"
    },
        {
            fullName: "Bessie Cooper",
            content: "Hello, I am Bessie",
            profileUrl: "/images/jordan.webp",
            time: "10:00 PM"
        },
    ],
    allMessages: [
        {
            fullName: "Bessie Cooper",
            content: "Hello, I am Bessie",
            profileUrl: "/images/jordan.webp",
            time: "10:00 PM"
        },
        {
            fullName: "Bessie Cooper",
            content: "Hello, I am Bessie",
            profileUrl: "/images/jordan.webp",
            time: "10:00 PM"
        },
        {
            fullName: "Bessie Cooper",
            content: "Hello, I am Bessie",
            profileUrl: "/images/jordan.webp",
            time: "10:00 PM"
        },
        {
            fullName: "Bessie Cooper",
            content: "Hello, I am Bessie",
            profileUrl: "/images/jordan.webp",
            time: "10:00 PM"
        },
        {
            fullName: "Bessie Cooper",
            content: "Hello, I am Bessie",
            profileUrl: "/images/jordan.webp",
            time: "10:00 PM"
        },
    ]
}
const app = (function () {
    const componentHolder = {
        elements: {

        },
        states: {

        }
    }
    const scripManager = {
        initialize: function () {
            $(window).ready(function () {
                scripManager.helpers.renderMessageList();
                scripManager.events.registerTabEvents();
            })
        },
        helpers: {
            renderMessageList: function () {
                const messages = scripManager.service.getMessageList();

                const pinnedMessagesRoot = "#pinned-messages-list";
                const helper = scripManager.helpers;
                $(pinnedMessagesRoot).empty();

                messages.pinnedMessages.forEach(message => {
                    const messageItemElmt = helper.createMessageItemElement(message);
                    $(pinnedMessagesRoot).append(messageItemElmt);
                });


                const allMessagesRoot = "#all-messages";
                $(allMessagesRoot).empty();

                messages.allMessages.forEach(message => {
                    const messageItemElmt = helper.createMessageItemElement(message);
                    $(allMessagesRoot).append(messageItemElmt);
                });

            },
            createMessageItemElement: function (message) {
                return ` <li class="contact-message-item">
                    <div class="contact-profile-container">
                        <img src="/images/jordan.webp" alt="">
                    </div>
                    <div class="contact-preview-container">
                        <p class="contact-fullname">${message.fullName} </p>
                        <p class="contact-message-preview">${message.content}</p>
                    </div>
                    <div class="contact-status-section">
                        <p class="contact-message-time">${message.time}</p>
                        <div class="active-status"></div>
                    </div>
                </li>`
            }
        },
        events: {
            registerTabEvents: function () {
                document.querySelectorAll(".contact-section-tabs button").forEach(button => {
                    $(button).on("click", function (event) {
                        $(this).siblings().removeClass("active");
                        $(this).addClass("active");
                        $(".contact-section-group").removeClass("show");

                        const targetList = $(this).attr("target");
                        $(`#${targetList}`).addClass("show");
                    });
                })
            }
        },
        service: {
            getMessageList: function () {
                //$.get("/Message/LeftContainer", function (data) {
                //    $("#left-container").html(data);
                //});
                return sampleData;
            },
        }
    }

    return {
        scriptManager: scripManager
    }
})();

const leftContainer = {
    scriptManager: app.scriptManager
}

export { leftContainer }