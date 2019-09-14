const {promisify} = require('util'),
    redis = require('redis'),
    client = redis.createClient(),
    getAsync = promisify(client.get).bind(client);

client.on("error", function (err) {
    console.log("Error " + err);
});


exports.ParameterAndRedisControl = async (req, res, next) => {
    const {x, y, radius} = req.query;
    if(!x || !y || !radius) return res.json({success: false, message:"Missing parameters."});

    const SearchParameter = x.replace('.', "_") + y.replace('.', "_") + radius;
    try{
        const RedisRes = JSON.parse(await getAsync(SearchParameter));
        if(RedisRes){
            return res.json({success:true, isCached:true, nearbyList: RedisRes});
        }else{
            next();
        }
    }catch(err){
        next();
    }
    

    

}