/*
Gyroscope unlock pro (Script author: @Maasea )
Surge:
http-response ^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/gyroscope.js

http-response ^https:\/\/claritywallpaper\.com\/clarity\/api\/special\/* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/didez/Script/master/Surge/JS/kela.js

https://claritywallpaper.com/clarity/api/userInfo
https://claritywallpaper.com/clarity/api/special/ff8080816eaba6b0016ece798d3756e5
MITM = claritywallpaper.com
*/

let obj = JSON.parse($response.body);
obj.data.forEach(element => {
    element["isFree"] = true;
});
// obj.data["isFree"] = true;
// obj.data["pictureList"].forEach(element => {
//     element["isFree"] = true;
// });
$done({body: JSON.stringify(obj)});