'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var QRCode = require('qrcode');
var reactBootstrapIcons = require('react-bootstrap-icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var QRCode__default = /*#__PURE__*/_interopDefaultLegacy(QRCode);

var ActionCard = function (prop) {
    return (React__default['default'].createElement("div", { className: "flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5" }, React__default['default'].createElement("div", { className: "flex flex-col max-w-md px-8 py-6 space-y-5 items-center" }, React__default['default'].createElement("img", { src: prop.src, width: 36, alt: prop.caption }), React__default['default'].createElement("h3", { className: "font-bold text-gray-900 text-xl" }, prop.title), React__default['default'].createElement("span", { className: "text-center text-gray-600" }, prop.caption))));
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

var classnames = createCommonjsModule(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var Button = function (prop) {
    var styleClass = "btn-" + prop.style;
    var buttonClasses = {
        "btn": true,
        "mb-6": true
    };
    buttonClasses[styleClass] = true;
    return (React__default['default'].createElement("button", { type: "button", className: classnames(buttonClasses) }, prop.title));
};

var Alert = function (prop) {
    return (React__default['default'].createElement("div", { className: "alert alert-light", role: "alert" }, "A simple light alert\u2014check it out!"));
};

var FormInput = function (prop) {
    return (React__default['default'].createElement("div", { className: "form-input" }, React__default['default'].createElement(reactBootstrap.Form.Label, null, "Username"), React__default['default'].createElement(reactBootstrap.Form.Control, { className: "text-input-field", type: "email", placeholder: "Enter email" })));
};

var QrCode = function (prop) {
    var qrRendered = false;
    var writeQRtoCanvas = function () {
        try {
            QRCode__default['default'].toCanvas(document.getElementById('qr-code'), prop.url || "", {
                width: 400
            });
        }
        catch (_a) {
            console.error('The QR code failed to write to the canvas');
        }
    };
    React.useEffect(function () {
        if (!qrRendered) {
            writeQRtoCanvas();
            qrRendered = true;
        }
    }, [writeQRtoCanvas]);
    var renderQrIcon = function () {
        switch (prop.state) {
            case "warning":
                return React__default['default'].createElement(reactBootstrapIcons.ExclamationCircle, { className: "qr-icon dialog-icon " + prop.state });
            case "error":
                return React__default['default'].createElement(reactBootstrapIcons.XCircle, { className: "qr-icon dialog-icon " + prop.state });
            default:
                return React__default['default'].createElement(reactBootstrapIcons.CheckCircle, { className: "qr-icon dialog-icon " + prop.state });
        }
    };
    return (React__default['default'].createElement("div", { id: "qr-box" }, React__default['default'].createElement("canvas", { id: "qr-code" }), renderQrIcon()));
};

var ConsentCard = function (prop) {
    return (React__default['default'].createElement("div", { className: "flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5" }, React__default['default'].createElement("div", { className: "flex flex-col max-w-md px-8 py-6 space-y-5" }, React__default['default'].createElement("span", { className: "consent-title items-center" }, prop.title), React__default['default'].createElement("span", { className: "consent-body items-center" }, prop.agreement), React__default['default'].createElement("ul", null, prop.pii.map(function (item) { return React__default['default'].createElement("li", { className: "pii-list-item" }, item); }))), React__default['default'].createElement("div", { className: "row col-flex" }, React__default['default'].createElement("div", { className: "col-sm text-center" }, React__default['default'].createElement(Button, { title: prop.back, style: "secondary" })), React__default['default'].createElement("div", { className: "col-sm text-center" }, React__default['default'].createElement(Button, { title: prop.accept, style: "primary" })))));
};

exports.ActionCard = ActionCard;
exports.Alert = Alert;
exports.Button = Button;
exports.ConsentCard = ConsentCard;
exports.FormInput = FormInput;
exports.QrCode = QrCode;
//# sourceMappingURL=index.js.map
