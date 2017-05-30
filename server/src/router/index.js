import Router from 'koa-router';
import weixin from './weixin';

const router = new Router();

router.get('/', async (ctx, next) => {
	ctx.body = "hello world";
});

router.get('/hello', async (ctx, next) => {
	ctx.body = "hello";
});

router.use(weixin)

export default router.routes();
