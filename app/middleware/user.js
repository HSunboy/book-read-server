module.exports = (options, app) => {
    return async function userMiddleware(ctx, next) {

        if (ctx.query.sessionId && ctx.app.customStore.getValue(ctx.query.username) && (ctx.app.customStore.getValue(ctx.query.username).sessionId === ctx.query.sessionId)) {
            await next();
        } else {
            ctx.status = 200;
            let msg = JSON.stringify({
                isSuccess: false,
                errorMsg: "无法查询到登陆信息"
            })
            console.log(msg)
            ctx.type = "application/json";
            ctx.body = msg
        }
    }
};