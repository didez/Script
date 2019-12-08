/*
Gyroscope unlock pro (Script author: @Maasea )
Surge:
http-response ^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/gyroscope.js

http-response ^https:\/\/claritywallpaper\.com\/clarity\/api\/userInfo requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/didez/Script/master/Surge/JS/kela.js

https://claritywallpaper.com/clarity/api/userInfo

MITM = claritywallpaper.com
*/

let obj = JSON.parse($response.body);
obj.data["isFree"] = true;
$done({body: JSON.stringify(obj)});