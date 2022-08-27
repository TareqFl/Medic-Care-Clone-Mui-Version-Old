const router = require("express").Router()
const database = require("../controller")



router.get('/', database.fetchAllData);

router.post('/post', database.postData);



module.exports = router;