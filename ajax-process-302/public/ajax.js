[ 301, 302, 303, 307, 308 ].reduce((p, code) => {
    return p.then(res => {
        return axios({
            method: 'POST',
            url: '/' + code,
            data: {
                name: 'zhangsan'
            },
            validateStatus(status) {
                return true;
            }
        }).then(res => {
            console.log(res);
        })
    })
}, Promise.resolve())

