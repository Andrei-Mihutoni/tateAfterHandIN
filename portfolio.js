//  ###   Instagram feed basic display  ###

// const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJXSkVjekY1dlg3V3hneklBYWRiOWFBOS12QnA4ZAi01TlE5aWY1cE83XzdBbXdiZAVluU0x5V3BRTGxwWlJNS1BjbkwzcXVaWmtERUlxdkJDc3VSMXVuUnNNd1g0RHllQmVBV1J1SllGdmVQWmROdAZDZD';
const url = 'https://www.instagram.com/explore/tags/thesehappydoodles/?__a=1';

fetch(url)
  .then(res => res.json())
  .then(handleInstagramData)

function handleInstagramData(feed) {
  console.log(feed.data)

  for (let i = 0; i < feed.graphql.hashtag.edge_hashtag_to_media.edges.length; i++) {
    showFeedPortofolio(feed.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url)
    // console.log(i)
  }
}




function showFeedPortofolio(feed) {
  const templatePortofolio = document.querySelector("#templateWrapperPortofolio").content;
  const clone = templatePortofolio.cloneNode(true);

  const caption = feed.caption;
  //        console.log(caption)
  // const triggerCaption = caption.search("#thesehappydoodles")
  //    console.log(triggerCaption)


  clone.querySelector(".postImgPortofolio").src = feed;
  clone.querySelector(".captionOnHover").textContent = feed.caption;
  clone.querySelector(".userNameOnHover").textContent = feed.username;

  clone.querySelector(".OnHoverWrapper").addEventListener('click', function () {
    window.open("https://www.instagram.com/tatemckenzie.design/?hl=en", '_blank');
  })

  document.querySelector(".instaFeedPortofolio").appendChild(clone);

}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

var overflow = document.getElementById("myTopnav")

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  overflow.classList.remove("topnavOverflow")
}
var btn = document.getElementById("click")
btn.onclick = function () { myFunction1() };


function myFunction1() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar" || x.className === "navbar topnavOverflow") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//Hiding/showing the cart content
var cartbtn = document.getElementById("cartbtn")
cartbtn.onclick = function () { myFunction2() };

function myFunction2() {
  var element = document.getElementById("slide");

  if (element.className === "slide") {
    element.className += " active";
  }
  else {
    element.classList.remove("active");
  }
}
