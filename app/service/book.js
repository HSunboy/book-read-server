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
                let count = await app.mysql.insert('userbook', {
                    username: username,
                    bookname: bookName
                })
                return true;
            } catch (e) {
                this.app.logger.info(e)
                return false;
            }


        }
        async getMyBooks(userName) {
            try {
                let books = await app.mysql.get('userbook', {
                    username: userName
                })
                return books;
            } catch (e) {
                this.app.logger.info(e)
                return null;
            }
        }
    }
    return BookService;
}