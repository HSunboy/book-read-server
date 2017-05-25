exports.getBookList = async function(ctx) {
    let books = await ctx.service.book.getAllBook()

    ctx.body = JSON.stringify({
        isSuccess: true,
        books: books
    })


}

exports.getBookDetail = async function(ctx) {
    let bookName = ctx.query.bookName;
    let bookPage = ctx.query.page;
    if (bookName && bookPage) {
        let detailMsg = await ctx.service.book.getDetail(bookName, bookPage)

        if (detailMsg) {
            ctx.body = JSON.stringify({
                isSuccess: true,
                msg: detailMsg
            })
        } else {
            ctx.helper.returnFail(ctx)
        }

    } else {
        ctx.helper.returnFail(ctx)
    }
}
exports.addBook = async function(ctx) {
    let userName = ctx.query.username
    let bookName = ctx.query.bookName
    let success = await ctx.service.book.addBookToUserList(userName, bookName)
    if (success) {
        ctx.body = JSON.stringify({
            isSuccess: true
        })
    } else {
        ctx.helper.returnFail(ctx)
    }
}

exports.getMybooks = async function(ctx) {
    let userName = ctx.query.username
    let books = await ctx.service.book.getMyBooks(userName)
    if (!books) {
        books = [];
    }
    ctx.body = JSON.stringify({
        isSuccess: true,
        books: books
    })
}