
function nextpage() {
    var LienPageMTN = window.location.href;
    var LienDecomp = LienPageMTN.split('/');
    var PageHTML = LienDecomp[LienDecomp.length - 1];
    var PageDecomp = PageHTML.split('.');
    var NumPageMTN = parseInt(PageDecomp[0]);
    var NextPageNum = NumPageMTN + 1;
    var NextPageURL = NextPageNum+".html";
    var TestNextURL = fetch(NextPageURL).then(response => {
      if (response.ok) {
        window.location.href = NextPageURL;
      } else {
        window.location.href = "/m/"+LienDecomp[4]+"/"+LienDecomp[4]+".html"
      }
    }) 
}

function prevpage(np) {
    var LienPageMTN = window.location.href;
    var LienDecomp = LienPageMTN.split('/');
    var PageHTML = LienDecomp[LienDecomp.length - 1];
    var PageDecomp = PageHTML.split('.');
    var NumPageMTN = parseInt(PageDecomp[0]);
    var PrevPageNum = NumPageMTN - 1;
    var PrevPageURL = PrevPageNum+".html";
    var TestPrevURL = fetch(PrevPageURL).then(response => {
      if (response.ok) {
        window.location.href = PrevPageURL;
      } else {
        window.location.href = "/m/"+LienDecomp[4]+"/"+LienDecomp[4]+".html"
      }
    }) 
}

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var prev1 = document.getElementById("prev1");
var prev2 = document.getElementById("prev2");

next1.addEventListener("click", nextpage);
next2.addEventListener("click", nextpage);
prev1.addEventListener("click", prevpage);
prev2.addEventListener("click", prevpage);
