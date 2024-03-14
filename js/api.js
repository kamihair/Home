const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbzJ9_l6NFXROlV8Jl5jI97Q6IkNOKtkY01Zs-8Ouuez0WP_eZcT6Ac8M1wV3ydvMWfD/exec";

export const API_TARGETS = {
    LASTEST_PRODUCTS: "LatestProducts"
}


export async function apiCallAsync (target, params) {
    let paramsQueryString = createQueryString(params);
    if (target instanceof Array){
        target = target.join(",")
    }
    let response = await fetch(API_ENDPOINT + "?target=" + target + "&" + paramsQueryString);
    let data = await response.json();
    return data;
}


function createQueryString(obj) {
    obj = obj ?? {};
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }