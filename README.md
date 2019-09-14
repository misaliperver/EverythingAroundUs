# Everything around us

This app is an app designed to list the venues around you. While does that, uses google place api that provides serves about nearby places search. Nodejs is working for backend with express framework. Jquery, ajax, bootstrap, notify.js and anime.js working for frontend. The application is built on the MVC model. It uses redis client framework for cache that store google places api's response.


# Requirements


1. Install npm, nodejs and redis.
2. > git clone https://github.com/misaliperver/EverythingAroundUs.git
3. COPYKEY string replace with your api key.
   - > Open /app_server/Configurations/AppSettings.js/  <br/>
   - > exports.Apikey  =  "**COPYKEY**"
4. > npm install <br/>
5. > npm start <br/>
6. > http://localhost:8070
 
## Backend
|Name|Version|
|----------------|-------------------------------|
|Npm|`6.9.0`|
|Nodejs|`10.16.0`|
|body-parser|`1.19.0`|
|ejs|`2.7.1`|
|express|`4.17.1`|
|express-ejs-layouts|`2.5.0`|
|node-fetch|`2.6.0`|
|redis|`2.8.0`|
|node-fetch|`2.6.0`|

## Frontend
|Name|Version|
|----------------|-------------------------------|
|Bootstrap|`4.3.1`|
|Popper|`1.14.7`|
|Font Awesome|`5.10.2`|
|Jquery|`3.4.1`|
|Anime|`1.0.0`|
|Notify|`0.4.2`|