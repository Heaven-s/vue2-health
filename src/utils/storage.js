const cookie = {

    set: function(name, value, days) {
        let d = new Date;
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
        window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    },

    get: function(name) {
        let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    },

    delete: function(name) {
        this.set(name, '', -1);
    }

};

const isLocalStorage = (function() {
    try {
        let storage = window.localStorage;
        storage.setItem('test', 'testValue');
        storage.removeItem('test');
        return true;
    } catch (error) {
        return false;
    }
});

const storage = (function() {
    if (isLocalStorage()) {
        return {
            fetch: function(name) {
                return JSON.parse(localStorage.getItem(name));
            },
            save: function(name, value) {
                localStorage.setItem(name, JSON.stringify(value));
            },
            empty: function(name) {
                localStorage.removeItem(name);
            }
        }
    } else {
        return {
            fetch: function(name) {
                return JSON.parse(unescape(cookie.get(name)));
            },
            save: function(name, value) {
                cookie.set(name, escape(JSON.stringify(value)), 30);
            },
            empty: function(name) {
                cookie.delete(name);
            }
        }
    }
})();

export default storage