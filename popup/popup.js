document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('expand-cites');
  checkButton.addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    chrome.tabs.sendMessage(currentTab.id, {"action": "expand-cites"});
  });
  }, false);
}, false);