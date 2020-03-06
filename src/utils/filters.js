exports.sex = (value) => {
    if (value && value == 1) {
        return '男';
    } else {
        return '女';
    }
};

exports.identity = (value) => {
    if (typeof value == 'string') {
        return value.replace(value.substr(-8, 4), '****');
    } else {
        return ''
    }
};