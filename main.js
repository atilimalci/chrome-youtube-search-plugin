
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

searchYoutube = function(word){
  var query = word.selectionText;
  query = query.replaceAll(" ", "+");
  chrome.tabs.create({url: "https://www.youtube.com/results?search_query=" + query});
};

chrome.contextMenus.create({
  title: "Search in Youtube...",
  contexts:["selection"],
  onclick: searchYoutube
});