const express = require( 'express' );
const { checkAuthorization } = require( '../middlewares/user' );
const userRouter = require( './user.js' );
const taskRouter = require( './task.js' );
const adminRouter = require( './admin.js' );
const { handleAppError } = require( '../middlewares/error_handleres' );
const router = express.Router();





router.use( checkAuthorization );

router.use( '/admin', adminRouter );
router.use( userRouter );
router.use( taskRouter );

router.use( handleAppError );

module.exports = router;