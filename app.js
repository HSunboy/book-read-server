module.exports = app => {
    let store = {};
    app.customStore = {
        getValue(key) {

            if (store[key]) {
                return store[key]
            } else {
                return null;
            }
        },
        setValue(key, value, maxAge) {
            store[key] = value;
        },
        destroy(key) {
            store[key] = null;
        }
    };

};