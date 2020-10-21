//###############   Instagram short feed    #########
// const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJXSkVjekY1dlg3V3hneklBYWRiOWFBOS12QnA4ZAi01TlE5aWY1cE83XzdBbXdiZAVluU0x5V3BRTGxwWlJNS1BjbkwzcXVaWmtERUlxdkJDc3VSMXVuUnNNd1g0RHllQmVBV1J1SllGdmVQWmROdAZDZD';
const url = 'https://www.instagram.com/explore/tags/thesehappydoodles/?__a=1';



fetch(url)
    .then(res => res.json())
    .then(handleData)

function handleData(feed) {
    console.log(feed)
    for (let i = 0; i < feed.graphql.hashtag.edge_hashtag_to_media.edges.length; i++) {
        showFeedFrontPage(feed.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url)
    }
};


function showFeedFrontPage(feed) {
    const templateFrontPage = document.querySelector("#templateWrapperFrontPage").content;
    const clone = templateFrontPage.cloneNode(true);
    const caption = feed.caption;
    //        console.log(caption)
    // const triggerCaption = caption.search("#thesehappydoodles")
    // //    console.log(triggerCaption)

    clone.querySelector(".postImgFrontPage").src = feed;

    let myFrontpageFeed = document.querySelector(".instaFeedFrontPage").children
    //        console.log(myFrontpage.length)
    if (myFrontpageFeed.length < 4) {
        document.querySelector(".instaFeedFrontPage").appendChild(clone);
    };






    // if (triggerCaption >= 0) {
    //     clone.querySelector(".postImgFrontPage").src = feed.media_url;
    //     clone.querySelector(".captionOnHoverFrontPage").textContent = feed.caption;
    //     clone.querySelector(".userNameOnHoverFrontPage").textContent = feed.username;

    //     clone.querySelector(".OnHoverWrapperFrontPage").addEventListener('click', function () {
    //         window.open("https://www.instagram.com/these.happy.doodles/", '_blank');
    //     })

    //     clone.querySelector(".feedFrontPage").addEventListener('click', function () {
    //         window.open("https://www.instagram.com/these.happy.doodles/", '_blank');
    //     })

    //     var myFrontpageFeed = document.querySelector(".instaFeedFrontPage").children
    //     //        console.log(myFrontpage.length)
    //     if (myFrontpageFeed.length < 4) {
    //         document.querySelector(".instaFeedFrontPage").appendChild(clone);
    //     }
    // }

}


// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

var overflow = document.getElementById("myTopnav")

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    overflow.classList.remove("topnavOverflow")
}
var btn = document.getElementById("click")
btn.onclick = function () {
    myFunction1()
};


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
cartbtn.onclick = function () {
    myFunction2()
};

function myFunction2() {
    var element = document.getElementById("slide");

    if (element.className === "slide") {
        element.className += " active";
    } else {
        element.classList.remove("active");
    }
}
