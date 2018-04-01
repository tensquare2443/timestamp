
var baseUrl = window.location.href;
if (baseUrl.substr(0,4) === "http" && baseUrl[4] !== "s") {
  baseUrl = baseUrl.substr(7, baseUrl.length - 1);
} else if (baseUrl.substr(0,5) === "https") {
  baseUrl = baseUrl.substr(8, baseUrl.length - 1);
}
var unix = moment().format("X");
var reg = moment().format("MM-DD-YYYY");

jQuery(".unix-now-url").html(baseUrl + moment().format("X")).attr("href", window.location.href + unix);
jQuery(".reg-now-url").html(baseUrl + reg).attr("href", window.location.href + reg);
