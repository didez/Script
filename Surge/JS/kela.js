/*

http-response ^https:\/\/claritywallpaper\.com\/clarity\/api\/special\/* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/didez/Script/master/Surge/JS/kela.js

*/

let obj = JSON.parse($response.body);
obj.data.forEach(element => {
    element["isFree"] = true;
});
$done({body: JSON.stringify(obj)});