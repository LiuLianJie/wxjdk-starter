import Router from 'koa-router';
import signature from '../modals/signature';
import config from '../constants/config';
const router = new Router();

const createSignature = signature.getSignature(config());

router.post("/getsignature", async(ctx, next) => {
	const url = ctx.request.body.url
	createSignature(url, (error, result) => {
		if(error){
			res.json({
				'error': error
			});
			ctx.body = {'error': error}
		} else {
			ctx.body = result
		}
	})
})

export default router.routes();