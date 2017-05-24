exports.returnFail = ctx => {

    ctx.status = 200;
    ctx.body = JSON.stringify({
        isSuccess: false,
        errorMsg: "操作失败"
    })
}