exports.keys = "xxkisgodman";

exports.middleware = [
    'robot',
    'user'
];
exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
};
exports.user = {
    ignore: /^\/(register|login)/
}


exports.mysql = {
    client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'books',
        debug: ['ComQueryPacket', 'RowDataPacket']
    },
    app: true,
    agent: false
}