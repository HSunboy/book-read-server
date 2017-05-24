module.exports = app => {
    // app.get('/', 'home.index');
    require('./router/main')(app)
    app.get('/register', 'user.register')
    app.get('/login', 'user.login')
    app.get('/getBookList', 'book.getBookList')
    app.get('/getBookDetail', 'book.getBookDetail')
    app.get('/addBook', 'book.addBook')
    app.get('/getMybooks', 'book.getMybooks')

};