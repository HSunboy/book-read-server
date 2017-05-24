module.exports = app => {
    class UserService extends app.Service {
        async register(username, password, sex) {

            try {
                const result = await app.mysql.insert('user', {
                    username: username,
                    password: password,
                    sex: sex
                });
                return true;
            } catch (e) {
                this.app.logger.info(e)
                return false;
            }



        }
        async login(username, password) {
            try {
                const List = await app.mysql.get('user', {
                    username: username,
                    password: password
                });

                if (List) {
                    let key = new Date().getTime() + List.username;
                    this.app.customStore.setValue(username, {
                        List,
                        sessionId: key
                    })
                    return key;
                } else {
                    return null;
                }

            } catch (e) {
                this.app.logger.info(e)
                return null;
            }
        }
    }
    return UserService;
}