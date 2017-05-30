import Koa from 'koa';
import router from './router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser());
app.use(router);

app.listen(3000, () => {
	console.log("3000");
});