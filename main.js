searchStock = function(word){
  var query = word.selectionText;

  // https://www.youtube.com/results?search_query=stm32f103
  // var searchParam = '&sp=CAISAhAB'
  var annual_report = "https://www.google.com.hk/search?&q=" + query +" 季度業績";
  console.log(annual_report);
  chrome.tabs.create({url: annual_report});

};

chrome.contextMenus.create({
  title: "Search company annual report",
  contexts:["selection"],
  onclick: searchStock
});
