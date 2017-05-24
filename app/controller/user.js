exports.register = async function(ctx) {
    let query = ctx.query;
    if (query.username && query.password && query.sex) {

        if (await ctx.service.user.register(query.username, query.password, query.sex)) {
            ctx.body = "注册成功"
            return;
        } else {
            ctx.helper.returnFail(ctx)
        }
    } else {
        ctx.helper.returnFail(ctx)
    }

}

exports.login = async function(ctx) {
    let query = ctx.query;
    if (query.username && query.password) {
        let key = await ctx.service.user.login(query.username, query.password);
        if (!key) {
            ctx.body = JSON.stringify({
                isSuccess: false,
                errorMsg: "账户名或者密码错误"
            })
        } else {
            ctx.body = JSON.stringify({
                isSuccess: true,
                sessionId: key
            })
        }
    } else {
        ctx.help.returnFail(ctx)
    }
}