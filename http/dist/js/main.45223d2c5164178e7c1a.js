webpackJsonp([1,2],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Neil on 2017/2/3.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar(props) {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "nav",
                { className: "navbar navbar-fixed-top", role: "navigation" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "navbar-header" },
                        _react2.default.createElement(
                            "button",
                            { id: "menu-toggle", type: "button", className: "navbar-toggle" },
                            _react2.default.createElement(
                                "span",
                                { className: "sr-only" },
                                "Toggle navigation"
                            ),
                            _react2.default.createElement("span", { className: "icon-bar bar1" }),
                            _react2.default.createElement("span", { className: "icon-bar bar2" }),
                            _react2.default.createElement("span", { className: "icon-bar bar3" })
                        ),
                        _react2.default.createElement(
                            "a",
                            { className: "navbar-brand", href: "http://gsdk.creative-tim.com" },
                            "CrossGate"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "collapse navbar-collapse" },
                        _react2.default.createElement(
                            "ul",
                            { className: "nav navbar-nav navbar-right" },
                            _react2.default.createElement(
                                "li",
                                { className: "active" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "index.html" },
                                    "stream list"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "search.html" },
                                    "search"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "management"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

exports.default = NavBar;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Neil on 2017/2/3.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SearchResult = function (_React$Component) {
    _inherits(SearchResult, _React$Component);

    function SearchResult(props) {
        _classCallCheck(this, SearchResult);

        return _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call(this, props));
    }

    _createClass(SearchResult, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "search-result table-responsive" },
                _react2.default.createElement(
                    "table",
                    { className: "table table-striped" },
                    _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement("th", null),
                            _react2.default.createElement(
                                "th",
                                null,
                                "title"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "streamer"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "state"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "text-center" },
                                "platform"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "text-center" },
                                "online"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "tbody",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                                "td",
                                { className: "text-center" },
                                _react2.default.createElement("input", { id: "box1", type: "checkbox" }),
                                _react2.default.createElement("label", { className: "custom-checkbox", htmlFor: "box1" })
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                "\u4F59\u751F\u4E0D\u8FC7\u4E24\u4E07\u5929"
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                "MrQuin"
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                _react2.default.createElement(
                                    "span",
                                    { className: "label label-success" },
                                    "streaming"
                                )
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "text-center" },
                                "DouyuTv"
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "text-center" },
                                "1188"
                            )
                        ),
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                                "td",
                                { className: "text-center" },
                                _react2.default.createElement("input", { id: "box2", type: "checkbox" }),
                                _react2.default.createElement("label", { className: "custom-checkbox", htmlFor: "box2" })
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                "\u7EA2\u5305\u8D70\u8D77"
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                "PIGFF"
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                _react2.default.createElement(
                                    "span",
                                    { className: "label label-default" },
                                    "offline"
                                )
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "text-center" },
                                "DouyuTv"
                            ),
                            _react2.default.createElement(
                                "td",
                                { className: "text-center" },
                                "254301"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "tfoot",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement("td", { colSpan: "5" }),
                            _react2.default.createElement(
                                "td",
                                { className: "text-center" },
                                " ",
                                _react2.default.createElement(
                                    "button",
                                    { type: "button", className: "btn btn-primary btn-fill btn-l" },
                                    "Add to list\xA0",
                                    _react2.default.createElement("i", { className: "fa fa-chevron-right" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SearchResult;
}(_react2.default.Component);

exports.default = SearchResult;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Neil on 2017/2/3.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StreamList = function (_React$Component) {
    _inherits(StreamList, _React$Component);

    function StreamList(props) {
        _classCallCheck(this, StreamList);

        return _possibleConstructorReturn(this, (StreamList.__proto__ || Object.getPrototypeOf(StreamList)).call(this, props));
    }

    _createClass(StreamList, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "list" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-3 col-sm-6 col-xs-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "card card-background" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image" },
                                    _react2.default.createElement("img", { src: "https://rpic.douyucdn.cn/a1701/31/21/3614_170131215542.jpg", alt: "..." }),
                                    _react2.default.createElement("div", { className: "filter" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "content" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "state" },
                                        _react2.default.createElement(
                                            "span",
                                            { className: "label label-success" },
                                            "streaming"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        _react2.default.createElement("br", null),
                                        _react2.default.createElement(
                                            "h4",
                                            { className: "title" },
                                            "\u3010Quin\u3011\u4F59\u751F\u4E0D\u8FC7\u4E24\u4E07\u5929"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "footer" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "nickname" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            _react2.default.createElement("img", { src: "https://apic.douyucdn.cn/upload/avatar/000/12/63/31_avatar_big.jpg",
                                                alt: "...", className: "avatar" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "MrQuin"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "stats pull-right" },
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "32984"
                                        ),
                                        " online"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-3 col-sm-6 col-xs-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "card card-background" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image" },
                                    _react2.default.createElement("img", { src: "https://rpic.douyucdn.cn/a1701/31/21/3614_170131215542.jpg", alt: "..." }),
                                    _react2.default.createElement("div", { className: "filter" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "content" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "state" },
                                        _react2.default.createElement(
                                            "span",
                                            { className: "label label-success" },
                                            "streaming"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        _react2.default.createElement("br", null),
                                        _react2.default.createElement(
                                            "h4",
                                            { className: "title" },
                                            "\u3010Quin\u3011\u4F59\u751F\u4E0D\u8FC7\u4E24\u4E07\u5929"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "footer" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "nickname" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            _react2.default.createElement("img", { src: "https://apic.douyucdn.cn/upload/avatar/000/12/63/31_avatar_big.jpg",
                                                alt: "...", className: "avatar" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "MrQuin"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "stats pull-right" },
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "32984"
                                        ),
                                        " online"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-3 col-sm-6 col-xs-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "card card-background" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image" },
                                    _react2.default.createElement("img", { src: "https://rpic.douyucdn.cn/a1701/31/21/3614_170131215542.jpg", alt: "..." }),
                                    _react2.default.createElement("div", { className: "filter" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "content" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "state" },
                                        _react2.default.createElement(
                                            "span",
                                            { className: "label label-success" },
                                            "streaming"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        _react2.default.createElement("br", null),
                                        _react2.default.createElement(
                                            "h4",
                                            { className: "title" },
                                            "\u3010Quin\u3011\u4F59\u751F\u4E0D\u8FC7\u4E24\u4E07\u5929"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "footer" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "nickname" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            _react2.default.createElement("img", { src: "https://apic.douyucdn.cn/upload/avatar/000/12/63/31_avatar_big.jpg",
                                                alt: "...", className: "avatar" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "MrQuin"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "stats pull-right" },
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "32984"
                                        ),
                                        " online"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-3 col-sm-6 col-xs-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "card card-background" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image" },
                                    _react2.default.createElement("img", { src: "https://rpic.douyucdn.cn/a1701/31/21/3614_170131215542.jpg", alt: "..." }),
                                    _react2.default.createElement("div", { className: "filter" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "content" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "state" },
                                        _react2.default.createElement(
                                            "span",
                                            { className: "label label-success" },
                                            "streaming"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        _react2.default.createElement("br", null),
                                        _react2.default.createElement(
                                            "h4",
                                            { className: "title" },
                                            "\u3010Quin\u3011\u4F59\u751F\u4E0D\u8FC7\u4E24\u4E07\u5929"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "footer" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "nickname" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            _react2.default.createElement("img", { src: "https://apic.douyucdn.cn/upload/avatar/000/12/63/31_avatar_big.jpg",
                                                alt: "...", className: "avatar" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "MrQuin"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "stats pull-right" },
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "32984"
                                        ),
                                        " online"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-3 col-sm-6 col-xs-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "card card-background" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image" },
                                    _react2.default.createElement("img", { src: "https://rpic.douyucdn.cn/a1701/31/21/3614_170131215542.jpg", alt: "..." }),
                                    _react2.default.createElement("div", { className: "filter" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "content" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "state" },
                                        _react2.default.createElement(
                                            "span",
                                            { className: "label label-success" },
                                            "streaming"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "#" },
                                        _react2.default.createElement("br", null),
                                        _react2.default.createElement(
                                            "h4",
                                            { className: "title" },
                                            "\u3010Quin\u3011\u4F59\u751F\u4E0D\u8FC7\u4E24\u4E07\u5929"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "footer" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "nickname" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            _react2.default.createElement("img", { src: "https://apic.douyucdn.cn/upload/avatar/000/12/63/31_avatar_big.jpg",
                                                alt: "...", className: "avatar" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "MrQuin"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "stats pull-right" },
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "32984"
                                        ),
                                        " online"
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row pagi" },
                        _react2.default.createElement(
                            "ul",
                            { className: "pagination pagination-blue pagination-no-border" },
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "\xAB"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                { className: "active" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "1"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "2"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "3"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "4"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "5"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "\xBB"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return StreamList;
}(_react2.default.Component);

exports.default = StreamList;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Neil on 2017/2/3.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome(props) {
        _classCallCheck(this, Welcome);

        return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this, props));
    }

    _createClass(Welcome, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "welcome" },
                _react2.default.createElement("i", { className: "fa fa-times close-welcome", "aria-hidden": "true" }),
                _react2.default.createElement(
                    "h2",
                    null,
                    "ADDS YOUR FAVORITE STREAM TO LIST"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "form-inline" },
                        _react2.default.createElement(
                            "div",
                            { className: "form-group" },
                            _react2.default.createElement("input", { type: "text", value: "", placeholder: "Keywords", className: "form-control" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "form-group" },
                            _react2.default.createElement(
                                "select",
                                { name: "huge", className: "selectpicker", "data-style": "btn-primary btn-fill btn-block", defaultValue: "Chose Platform" },
                                _react2.default.createElement(
                                    "option",
                                    { disabled: true },
                                    "Chose Platform"
                                ),
                                _react2.default.createElement(
                                    "option",
                                    { value: "douyu" },
                                    "DouyuTv"
                                ),
                                _react2.default.createElement(
                                    "option",
                                    { value: "panda" },
                                    "PandaTv"
                                ),
                                _react2.default.createElement(
                                    "option",
                                    { value: "twitch" },
                                    "TwitchTv"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "button",
                            { className: "btn btn-primary btn-fill" },
                            "search"
                        )
                    )
                )
            );
        }
    }]);

    return Welcome;
}(_react2.default.Component);

exports.default = Welcome;

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bootstrap = __webpack_require__(129);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _fontAwesome = __webpack_require__(130);

var _fontAwesome2 = _interopRequireDefault(_fontAwesome);

var _gsdk = __webpack_require__(131);

var _gsdk2 = _interopRequireDefault(_gsdk);

var _index = __webpack_require__(132);

var _index2 = _interopRequireDefault(_index);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(42);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(43);

var _NavBar = __webpack_require__(125);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _StreamList = __webpack_require__(127);

var _StreamList2 = _interopRequireDefault(_StreamList);

var _Welcome = __webpack_require__(128);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _SearchResult = __webpack_require__(126);

var _SearchResult2 = _interopRequireDefault(_SearchResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
    return _react2.default.createElement(
        'div',
        { style: { height: '100%' } },
        _react2.default.createElement(_NavBar2.default, null),
        props.children
    );
} /**
   * Created by Neil on 2017/2/3.
   */


function Index(props) {
    return _react2.default.createElement(
        'div',
        { style: { height: '100%' } },
        _react2.default.createElement(_Welcome2.default, null),
        _react2.default.createElement(_StreamList2.default, null)
    );
}

function Search(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchResult2.default, null)
    );
}

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: App },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: Index }),
        _react2.default.createElement(_reactRouter.Route, { path: '/search', components: Search })
    )
), document.getElementById('root'));

/***/ })

},[278]);
//# sourceMappingURL=main.45223d2c5164178e7c1a.js.map