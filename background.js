chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://stackoverflow.com/";
  chrome.tabs.create({ url: 'https://webflow.com/dashboard' });
});
