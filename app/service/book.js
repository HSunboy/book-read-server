const path = require('path')
const fs = require('fs')
module.exports = app => {
    class BookService extends app.Service {
        async getAllBook() {

            const userList = await app.mysql.select('books');
            return userList;
        }
        async getDetail(bookName, bookPage) {
            let bookPath = path.join(process.cwd(), 'app/file/' + bookName + '/' + bookPage)
            console.log(bookPath)
            if (
                fs.existsSync(bookPath)
            ) {
                return fs.readFileSync(bookPath, {
                    encoding: 'utf-8'
                })
            } else {
                return null;
            }
        }
        async addBookToUserList(username, bookName) {
            try {
                let isEx = await app.mysql.get('userbook', {
                    username: username,
                    bookname: bookName
                })
                if (!isEx) {
                    let count = await app.mysql.insert('userbook', {
                        username: username,
                        bookname: bookName
                    })
                    return true;
                }
                return false;

            } catch (e) {
                this.app.logger.info(e)
                return false;
            }


        }
        async getMyBooks(userName, bookName) {
            try {


                let books = await app.mysql.query('select books.bookname,books.bookcount,books.writername,books.bookmsg from userbook,books where userbook.bookname=books.bookname and userbook.username=?', [userName])
                return books;


            } catch (e) {
                this.app.logger.info(e)
                return null;
            }
        }
    }
    return BookService;
}