const fetch = require('node-fetch'),
    { Endpoints, Apikey } = require('../Configurations/AppSettings'),
    redis = require('redis'),
    client = redis.createClient();

if(Apikey == "COPYKEY"){
    throw new Error("Google Places API KEY Copy /app_server/Configurations/AppSettings.js")
}

exports.GetHome = (req, res) => {
    res.render("General/Anasayfa");
}

exports.GetNearbyPlaces = async (req, res) => {
    // Input parameter control
    const {x, y, radius} = req.query;
    // if(!x || !y || !radius) return res.json({success: false, message:"Missing parameters."});
    
    const location = x.toString() + "," + y.toString();

    const url = `${Endpoints.SearchPlaces}?query=*&location=${location}&radius=${radius}&key=${Apikey}` // to be continiue
    // request to google api
    try{
        var response = await fetch(url);
        var data = await response.json();
    }catch(err){
        return res.json({success: false, message:"Google places apis response error.",
                            details: req.query.getErrorDetail == "true" ? err.message : undefined});
    }

    // for response message process
    try{
        if(response.status = 200){
            if(data.results.length>0){
                var nearbylist = [];
                data.results.forEach(data => {
                    nearbylist= [...nearbylist, data.name];
                });
                const SearchParameter = x.replace('.', "_") + y.replace('.', "_") + radius;
                client.set(SearchParameter, JSON.stringify(nearbylist));
                return res.json({success:true, isCached:false, nearbyList: nearbylist})
            }else{
                res.status = 404;
                return res.json({success: false, message: "Nearby Places Not Found."});
            }
        }else{
            res.status = 400;
            return res.json({success: false, message: "Google Places API Response" + response.status});
        }
            
    }catch(err){
        res.status = 500;
        return res.json({success: false, message: err.message});
    }
}
