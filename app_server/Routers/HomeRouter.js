const
    express = require('express'),
    router = express.Router(),
    HomeController = require('../Controllers/HomeController'),
    {ParameterAndRedisControl}=require('../Middlewares/RedisClient');

router
    .get('/', HomeController.GetHome)
    .get('/searchnearby', ParameterAndRedisControl, HomeController.GetNearbyPlaces)
    .use((req, res, next) => { // 404 - ErorrPage
        res.status(404);
        res.send({ success: false, message: 'Services Not Found' });
        return;
    });

module.exports = router;
