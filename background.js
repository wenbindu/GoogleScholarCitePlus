chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("backgound", request)
  // if (request.action === "addDOI") {
  //   console.log("DOI");
  //   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  //     var tab = tabs[0];
  //     var doi = extractDoiFromPage(tab.url);
  //     if (doi) {
  //       var newUrl = addDoiToUrl(tab.url, doi);
  //       sendResponse({ url: newUrl });
  //     }
  //   });
  //   return true; // tell Chrome to keep the message channel open
  // }
});

function extractDoiFromPage(url) {
  // your code to extract the DOI from the page goes here
  console.log("extract doi");
}

function addDoiToUrl(url, doi) {
  // your code to add the DOI to the URL goes here
  console.log("add doi");
}