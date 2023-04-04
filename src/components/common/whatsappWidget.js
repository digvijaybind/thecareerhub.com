export function whatsappChatWidget() {
    var url =
      "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?64954";
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url;
    var options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#4dc247",
        ctaText: "Message Us",
        borderRadius: "25",
        marginLeft: "0",
        marginBottom: "50",
        marginRight: "50",
        position: "right",
      },
      brandSetting: {
        brandName: "Brainwonders",
        brandSubTitle: "India's Largest Career Counseling Company",
        brandImg:
          "https://www.brainwonders.in/images/watilogo1.png",
        welcomeText: "Hi there!\nLet us help you carve your journey",
        messageText: "Hello, I have a question about {{page_link}}",
        backgroundColor: "#0a5f54",
        ctaText: "Start Chat",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "919967237741",
      },
    };
    s.onload = function () {
      CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }
  