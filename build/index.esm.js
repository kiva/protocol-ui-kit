import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import QRCode from 'qrcode';
import { CheckCircle, XCircle, ExclamationCircle } from 'react-bootstrap-icons';

var ActionCard = function (prop) {
    return (React.createElement("div", { className: "flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5" },
        React.createElement("div", { className: "flex flex-col max-w-md px-8 py-6 space-y-5 items-center" },
            React.createElement("img", { src: prop.src, width: 36, alt: prop.caption }),
            React.createElement("h3", { className: "font-bold text-gray-900 text-xl" }, prop.title),
            React.createElement("span", { className: "text-center text-gray-600" }, prop.caption))));
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
    return (React.createElement("button", { type: "button", className: classnames(buttonClasses) }, prop.title));
};

var Alert = function (prop) {
    return (React.createElement("div", { className: "alert alert-light", role: "alert" }, "A simple light alert\u2014check it out!"));
};

var FormInput = function (prop) {
    return (React.createElement("div", { className: "form-input" },
        React.createElement(Form.Label, null, "Username"),
        React.createElement(Form.Control, { className: "text-input-field", type: "email", placeholder: "Enter email" })));
};

var QrCode = function (prop) {
    var qrRendered = false;
    var writeQRtoCanvas = function () {
        try {
            QRCode.toCanvas(document.getElementById('qr-code'), prop.url || "", {
                width: 400
            });
        }
        catch (_a) {
            console.error('The QR code failed to write to the canvas');
        }
    };
    useEffect(function () {
        if (!qrRendered) {
            writeQRtoCanvas();
            qrRendered = true;
        }
    }, [writeQRtoCanvas]);
    var renderQrIcon = function () {
        switch (prop.state) {
            case "warning":
                return React.createElement(ExclamationCircle, { className: "qr-icon dialog-icon " + prop.state });
            case "error":
                return React.createElement(XCircle, { className: "qr-icon dialog-icon " + prop.state });
            default:
                return React.createElement(CheckCircle, { className: "qr-icon dialog-icon " + prop.state });
        }
    };
    return (React.createElement("div", { id: "qr-box" },
        React.createElement("canvas", { id: "qr-code" }),
        renderQrIcon()));
};

var ConsentCard = function (prop) {
    return (React.createElement("div", { className: "flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5" },
        React.createElement("div", { className: "flex flex-col max-w-md px-8 py-6 space-y-5" },
            React.createElement("span", { className: "consent-title items-center" }, prop.title),
            React.createElement("span", { className: "consent-body items-center" }, prop.agreement),
            React.createElement("ul", null, prop.pii.map(function (item) { return React.createElement("li", { className: "pii-list-item" }, item); }))),
        React.createElement("div", { className: "row col-flex" },
            React.createElement("div", { className: "col-sm text-center" },
                React.createElement(Button, { title: prop.back, style: "secondary" })),
            React.createElement("div", { className: "col-sm text-center" },
                React.createElement(Button, { title: prop.accept, style: "primary" })))));
};

var index = {
    ActionCard: ActionCard,
    Button: Button,
    Alert: Alert,
    FormInput: FormInput,
    QrCode: QrCode,
    ConsentCard: ConsentCard
};

export { index as default };
//# sourceMappingURL=index.esm.js.map
