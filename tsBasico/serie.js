var Serie = /** @class */ (function () {
    function Serie(_id, _name, _channel, _seasons, _description, _link, _cover) {
        this._id = _id;
        this._name = _name;
        this._channel = _channel;
        this._seasons = _seasons;
        this._description = _description;
        this._link = _link;
        this._cover = _cover;
    }
    Object.defineProperty(Serie.prototype, "id", {
        /**
         * Getter id
         * @return {number}
         */
        get: function () {
            return this._id;
        },
        /**
         * Setter id
         * @param {number} value
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "name", {
        /**
         * Getter title
         * @return {string}
         */
        get: function () {
            return this._name;
        },
        /**
         * Setter title
         * @param {string} value
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "channel", {
        /**
         * Getter channel
         * @return {string}
         */
        get: function () {
            return this._channel;
        },
        /**
         * Setter channel
         * @param {string} value
         */
        set: function (value) {
            this._channel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "seasons", {
        /**
         * Getter seasons
         * @return {number}
         */
        get: function () {
            return this._seasons;
        },
        /**
         * Setter seasons
         * @param {number} value
         */
        set: function (value) {
            this._seasons = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "description", {
        /**
         * Getter description
         * @return {string}
         */
        get: function () {
            return this._description;
        },
        /**
         * Setter description
         * @param {string} value
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "link", {
        /**
         * Getter link
         * @return {string}
         */
        get: function () {
            return this._link;
        },
        /**
         * Setter link
         * @param {string} value
         */
        set: function (value) {
            this._link = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "cover", {
        /**
         * Getter cover
         * @return {string}
         */
        get: function () {
            return this._cover;
        },
        /**
         * Setter cover
         * @param {string} value
         */
        set: function (value) {
            this._cover = value;
        },
        enumerable: false,
        configurable: true
    });
    return Serie;
}());
export { Serie };
