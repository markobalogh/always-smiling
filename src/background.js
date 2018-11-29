var service = analytics.getService('Always Smiling');
var tracker = service.getTracker('UA-130090498-1');
var host = "http://smile.amazon.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        tracker.sendEvent('URL', 'Redirect', 'AmazonSmile');
        return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://amazon.com/*",
            "*://www.amazon.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);