chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "expand-cites") {
    findCiteUrl();
  }
});


function findCiteUrl() {
  const divList = document.querySelectorAll("#gs_res_ccl_mid > div.gs_scl");
  for (let div of divList){
    let divDid = div.getAttribute("data-did");
    let srcHref = div.querySelector("h3 > a");
    let citeReqUrl = "https://scholar.google.com/scholar?q=info:" + divDid + ":scholar.google.com/&output=cite&hl=en"

    fetch(citeReqUrl)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const hrefs = htmlDoc.querySelectorAll("#gs_citi > a");
        parentDivs = div.querySelectorAll(".gs_fl");
        parentDiv = parentDivs[parentDivs.length - 1];
        // remove old elements.
        parentDiv.querySelectorAll(".cite-plus").forEach(el => el.remove());

        for (let af of hrefs){
          // add the element.
          af.style.fontWeight = "bold";
          af.className = "cite-plus";
          parentDiv.appendChild(af);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });


  }

}