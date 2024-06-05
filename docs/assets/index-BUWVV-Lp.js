function kf(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const o in r)
				if (o !== 'default' && !(o in e)) {
					const i = Object.getOwnPropertyDescriptor(r, o);
					i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver((o) => {
		for (const i of o) if (i.type === 'childList') for (const l of i.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(o) {
		const i = {};
		return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === 'use-credentials' ? (i.credentials = 'include') : o.crossOrigin === 'anonymous' ? (i.credentials = 'omit') : (i.credentials = 'same-origin'), i;
	}
	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i);
	}
})();
function bf(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Pf = { exports: {} },
	Dl = {},
	$f = { exports: {} },
	q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ri = Symbol.for('react.element'),
	bv = Symbol.for('react.portal'),
	Pv = Symbol.for('react.fragment'),
	$v = Symbol.for('react.strict_mode'),
	Rv = Symbol.for('react.profiler'),
	_v = Symbol.for('react.provider'),
	Nv = Symbol.for('react.context'),
	Tv = Symbol.for('react.forward_ref'),
	Lv = Symbol.for('react.suspense'),
	Dv = Symbol.for('react.memo'),
	Ov = Symbol.for('react.lazy'),
	Ec = Symbol.iterator;
function Mv(e) {
	return e === null || typeof e != 'object' ? null : ((e = (Ec && e[Ec]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Rf = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	_f = Object.assign,
	Nf = {};
function Wr(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Nf), (this.updater = n || Rf);
}
Wr.prototype.isReactComponent = {};
Wr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
	this.updater.enqueueSetState(this, e, t, 'setState');
};
Wr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Tf() {}
Tf.prototype = Wr.prototype;
function qs(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Nf), (this.updater = n || Rf);
}
var eu = (qs.prototype = new Tf());
eu.constructor = qs;
_f(eu, Wr.prototype);
eu.isPureReactComponent = !0;
var Cc = Array.isArray,
	Lf = Object.prototype.hasOwnProperty,
	tu = { current: null },
	Df = { key: !0, ref: !0, __self: !0, __source: !0 };
function Of(e, t, n) {
	var r,
		o = {},
		i = null,
		l = null;
	if (t != null) for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t)) Lf.call(t, r) && !Df.hasOwnProperty(r) && (o[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) o.children = n;
	else if (1 < a) {
		for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
		o.children = s;
	}
	if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
	return { $$typeof: ri, type: e, key: i, ref: l, props: o, _owner: tu.current };
}
function Av(e, t) {
	return { $$typeof: ri, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function nu(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === ri;
}
function jv(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var kc = /\/+/g;
function ua(e, t) {
	return typeof e == 'object' && e !== null && e.key != null ? jv('' + e.key) : t.toString(36);
}
function Ui(e, t, n, r, o) {
	var i = typeof e;
	(i === 'undefined' || i === 'boolean') && (e = null);
	var l = !1;
	if (e === null) l = !0;
	else
		switch (i) {
			case 'string':
			case 'number':
				l = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case ri:
					case bv:
						l = !0;
				}
		}
	if (l)
		return (
			(l = e),
			(o = o(l)),
			(e = r === '' ? '.' + ua(l, 0) : r),
			Cc(o)
				? ((n = ''),
				  e != null && (n = e.replace(kc, '$&/') + '/'),
				  Ui(o, t, n, '', function (u) {
						return u;
				  }))
				: o != null && (nu(o) && (o = Av(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(kc, '$&/') + '/') + e)), t.push(o)),
			1
		);
	if (((l = 0), (r = r === '' ? '.' : r + ':'), Cc(e)))
		for (var a = 0; a < e.length; a++) {
			i = e[a];
			var s = r + ua(i, a);
			l += Ui(i, t, n, s, o);
		}
	else if (((s = Mv(e)), typeof s == 'function')) for (e = s.call(e), a = 0; !(i = e.next()).done; ) (i = i.value), (s = r + ua(i, a++)), (l += Ui(i, t, n, s, o));
	else if (i === 'object') throw ((t = String(e)), Error('Objects are not valid as a React child (found: ' + (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) + '). If you meant to render a collection of children, use an array instead.'));
	return l;
}
function gi(e, t, n) {
	if (e == null) return e;
	var r = [],
		o = 0;
	return (
		Ui(e, r, '', '', function (i) {
			return t.call(n, i, o++);
		}),
		r
	);
}
function zv(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Qe = { current: null },
	Bi = { transition: null },
	Fv = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: Bi, ReactCurrentOwner: tu };
function Mf() {
	throw Error('act(...) is not supported in production builds of React.');
}
q.Children = {
	map: gi,
	forEach: function (e, t, n) {
		gi(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			gi(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			gi(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!nu(e)) throw Error('React.Children.only expected to receive a single React element child.');
		return e;
	},
};
q.Component = Wr;
q.Fragment = Pv;
q.Profiler = Rv;
q.PureComponent = qs;
q.StrictMode = $v;
q.Suspense = Lv;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fv;
q.act = Mf;
q.cloneElement = function (e, t, n) {
	if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
	var r = _f({}, e.props),
		o = e.key,
		i = e.ref,
		l = e._owner;
	if (t != null) {
		if ((t.ref !== void 0 && ((i = t.ref), (l = tu.current)), t.key !== void 0 && (o = '' + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
		for (s in t) Lf.call(t, s) && !Df.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		a = Array(s);
		for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: ri, type: e.type, key: o, ref: i, props: r, _owner: l };
};
q.createContext = function (e) {
	return (e = { $$typeof: Nv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: _v, _context: e }), (e.Consumer = e);
};
q.createElement = Of;
q.createFactory = function (e) {
	var t = Of.bind(null, e);
	return (t.type = e), t;
};
q.createRef = function () {
	return { current: null };
};
q.forwardRef = function (e) {
	return { $$typeof: Tv, render: e };
};
q.isValidElement = nu;
q.lazy = function (e) {
	return { $$typeof: Ov, _payload: { _status: -1, _result: e }, _init: zv };
};
q.memo = function (e, t) {
	return { $$typeof: Dv, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
	var t = Bi.transition;
	Bi.transition = {};
	try {
		e();
	} finally {
		Bi.transition = t;
	}
};
q.unstable_act = Mf;
q.useCallback = function (e, t) {
	return Qe.current.useCallback(e, t);
};
q.useContext = function (e) {
	return Qe.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
	return Qe.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
	return Qe.current.useEffect(e, t);
};
q.useId = function () {
	return Qe.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
	return Qe.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
	return Qe.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
	return Qe.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
	return Qe.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
	return Qe.current.useReducer(e, t, n);
};
q.useRef = function (e) {
	return Qe.current.useRef(e);
};
q.useState = function (e) {
	return Qe.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
	return Qe.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
	return Qe.current.useTransition();
};
q.version = '18.3.1';
$f.exports = q;
var f = $f.exports;
const Iv = bf(f),
	Af = kf({ __proto__: null, default: Iv }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uv = f,
	Bv = Symbol.for('react.element'),
	Hv = Symbol.for('react.fragment'),
	Vv = Object.prototype.hasOwnProperty,
	Wv = Uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Kv = { key: !0, ref: !0, __self: !0, __source: !0 };
function jf(e, t, n) {
	var r,
		o = {},
		i = null,
		l = null;
	n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (l = t.ref);
	for (r in t) Vv.call(t, r) && !Kv.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
	return { $$typeof: Bv, type: e, key: i, ref: l, props: o, _owner: Wv.current };
}
Dl.Fragment = Hv;
Dl.jsx = jf;
Dl.jsxs = jf;
Pf.exports = Dl;
var R = Pf.exports,
	Ya = {},
	zf = { exports: {} },
	st = {},
	Ff = { exports: {} },
	If = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(N, F) {
		var B = N.length;
		N.push(F);
		e: for (; 0 < B; ) {
			var X = (B - 1) >>> 1,
				te = N[X];
			if (0 < o(te, F)) (N[X] = F), (N[B] = te), (B = X);
			else break e;
		}
	}
	function n(N) {
		return N.length === 0 ? null : N[0];
	}
	function r(N) {
		if (N.length === 0) return null;
		var F = N[0],
			B = N.pop();
		if (B !== F) {
			N[0] = B;
			e: for (var X = 0, te = N.length, Ge = te >>> 1; X < Ge; ) {
				var Ue = 2 * (X + 1) - 1,
					be = N[Ue],
					ye = Ue + 1,
					Be = N[ye];
				if (0 > o(be, B)) ye < te && 0 > o(Be, be) ? ((N[X] = Be), (N[ye] = B), (X = ye)) : ((N[X] = be), (N[Ue] = B), (X = Ue));
				else if (ye < te && 0 > o(Be, B)) (N[X] = Be), (N[ye] = B), (X = ye);
				else break e;
			}
		}
		return F;
	}
	function o(N, F) {
		var B = N.sortIndex - F.sortIndex;
		return B !== 0 ? B : N.id - F.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var l = Date,
			a = l.now();
		e.unstable_now = function () {
			return l.now() - a;
		};
	}
	var s = [],
		u = [],
		c = 1,
		d = null,
		p = 3,
		y = !1,
		w = !1,
		v = !1,
		S = typeof setTimeout == 'function' ? setTimeout : null,
		m = typeof clearTimeout == 'function' ? clearTimeout : null,
		h = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function g(N) {
		for (var F = n(u); F !== null; ) {
			if (F.callback === null) r(u);
			else if (F.startTime <= N) r(u), (F.sortIndex = F.expirationTime), t(s, F);
			else break;
			F = n(u);
		}
	}
	function E(N) {
		if (((v = !1), g(N), !w))
			if (n(s) !== null) (w = !0), oe(k);
			else {
				var F = n(u);
				F !== null && G(E, F.startTime - N);
			}
	}
	function k(N, F) {
		(w = !1), v && ((v = !1), m(P), (P = -1)), (y = !0);
		var B = p;
		try {
			for (g(F), d = n(s); d !== null && (!(d.expirationTime > F) || (N && !I())); ) {
				var X = d.callback;
				if (typeof X == 'function') {
					(d.callback = null), (p = d.priorityLevel);
					var te = X(d.expirationTime <= F);
					(F = e.unstable_now()), typeof te == 'function' ? (d.callback = te) : d === n(s) && r(s), g(F);
				} else r(s);
				d = n(s);
			}
			if (d !== null) var Ge = !0;
			else {
				var Ue = n(u);
				Ue !== null && G(E, Ue.startTime - F), (Ge = !1);
			}
			return Ge;
		} finally {
			(d = null), (p = B), (y = !1);
		}
	}
	var _ = !1,
		x = null,
		P = -1,
		O = 5,
		L = -1;
	function I() {
		return !(e.unstable_now() - L < O);
	}
	function M() {
		if (x !== null) {
			var N = e.unstable_now();
			L = N;
			var F = !0;
			try {
				F = x(!0, N);
			} finally {
				F ? Z() : ((_ = !1), (x = null));
			}
		} else _ = !1;
	}
	var Z;
	if (typeof h == 'function')
		Z = function () {
			h(M);
		};
	else if (typeof MessageChannel < 'u') {
		var H = new MessageChannel(),
			ee = H.port2;
		(H.port1.onmessage = M),
			(Z = function () {
				ee.postMessage(null);
			});
	} else
		Z = function () {
			S(M, 0);
		};
	function oe(N) {
		(x = N), _ || ((_ = !0), Z());
	}
	function G(N, F) {
		P = S(function () {
			N(e.unstable_now());
		}, F);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (N) {
			N.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || y || ((w = !0), oe(k));
		}),
		(e.unstable_forceFrameRate = function (N) {
			0 > N || 125 < N ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (O = 0 < N ? Math.floor(1e3 / N) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (N) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var F = 3;
					break;
				default:
					F = p;
			}
			var B = p;
			p = F;
			try {
				return N();
			} finally {
				p = B;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (N, F) {
			switch (N) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					N = 3;
			}
			var B = p;
			p = N;
			try {
				return F();
			} finally {
				p = B;
			}
		}),
		(e.unstable_scheduleCallback = function (N, F, B) {
			var X = e.unstable_now();
			switch ((typeof B == 'object' && B !== null ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? X + B : X)) : (B = X), N)) {
				case 1:
					var te = -1;
					break;
				case 2:
					te = 250;
					break;
				case 5:
					te = 1073741823;
					break;
				case 4:
					te = 1e4;
					break;
				default:
					te = 5e3;
			}
			return (te = B + te), (N = { id: c++, callback: F, priorityLevel: N, startTime: B, expirationTime: te, sortIndex: -1 }), B > X ? ((N.sortIndex = B), t(u, N), n(s) === null && N === n(u) && (v ? (m(P), (P = -1)) : (v = !0), G(E, B - X))) : ((N.sortIndex = te), t(s, N), w || y || ((w = !0), oe(k))), N;
		}),
		(e.unstable_shouldYield = I),
		(e.unstable_wrapCallback = function (N) {
			var F = p;
			return function () {
				var B = p;
				p = F;
				try {
					return N.apply(this, arguments);
				} finally {
					p = B;
				}
			};
		});
})(If);
Ff.exports = If;
var Qv = Ff.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yv = f,
	at = Qv;
function T(e) {
	for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
	return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
}
var Uf = new Set(),
	Mo = {};
function tr(e, t) {
	Ar(e, t), Ar(e + 'Capture', t);
}
function Ar(e, t) {
	for (Mo[e] = t, e = 0; e < t.length; e++) Uf.add(t[e]);
}
var Qt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
	Ga = Object.prototype.hasOwnProperty,
	Gv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	bc = {},
	Pc = {};
function Xv(e) {
	return Ga.call(Pc, e) ? !0 : Ga.call(bc, e) ? !1 : Gv.test(e) ? (Pc[e] = !0) : ((bc[e] = !0), !1);
}
function Zv(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function Jv(e, t, n, r) {
	if (t === null || typeof t > 'u' || Zv(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Ye(e, t, n, r, o, i, l) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = o), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = l);
}
var Me = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function (e) {
	Me[e] = new Ye(e, 0, !1, e, null, !1, !1);
});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	Me[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	Me[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
	Me[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'.split(' ').forEach(function (e) {
	Me[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	Me[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	Me[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	Me[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	Me[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ru = /[\-:]([a-z])/g;
function ou(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'.split(' ').forEach(function (e) {
	var t = e.replace(ru, ou);
	Me[t] = new Ye(t, 1, !1, e, null, !1, !1);
});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
	var t = e.replace(ru, ou);
	Me[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(ru, ou);
	Me[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	Me[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new Ye('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Me[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function iu(e, t, n, r) {
	var o = Me.hasOwnProperty(t) ? Me[t] : null;
	(o !== null ? o.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) && (Jv(t, n, o, r) && (n = null), r || o === null ? Xv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n)) : o.mustUseProperty ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n) : ((t = o.attributeName), (r = o.attributeNamespace), n === null ? e.removeAttribute(t) : ((o = o.type), (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var en = Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	yi = Symbol.for('react.element'),
	mr = Symbol.for('react.portal'),
	vr = Symbol.for('react.fragment'),
	lu = Symbol.for('react.strict_mode'),
	Xa = Symbol.for('react.profiler'),
	Bf = Symbol.for('react.provider'),
	Hf = Symbol.for('react.context'),
	au = Symbol.for('react.forward_ref'),
	Za = Symbol.for('react.suspense'),
	Ja = Symbol.for('react.suspense_list'),
	su = Symbol.for('react.memo'),
	fn = Symbol.for('react.lazy'),
	Vf = Symbol.for('react.offscreen'),
	$c = Symbol.iterator;
function ao(e) {
	return e === null || typeof e != 'object' ? null : ((e = ($c && e[$c]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ge = Object.assign,
	ca;
function So(e) {
	if (ca === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ca = (t && t[1]) || '';
		}
	return (
		`
` +
		ca +
		e
	);
}
var da = !1;
function fa(e, t) {
	if (!e || da) return '';
	da = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var o = u.stack.split(`
`),
					i = r.stack.split(`
`),
					l = o.length - 1,
					a = i.length - 1;
				1 <= l && 0 <= a && o[l] !== i[a];

			)
				a--;
			for (; 1 <= l && 0 <= a; l--, a--)
				if (o[l] !== i[a]) {
					if (l !== 1 || a !== 1)
						do
							if ((l--, a--, 0 > a || o[l] !== i[a])) {
								var s =
									`
` + o[l].replace(' at new ', ' at ');
								return e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s;
							}
						while (1 <= l && 0 <= a);
					break;
				}
		}
	} finally {
		(da = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? So(e) : '';
}
function qv(e) {
	switch (e.tag) {
		case 5:
			return So(e.type);
		case 16:
			return So('Lazy');
		case 13:
			return So('Suspense');
		case 19:
			return So('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = fa(e.type, !1)), e;
		case 11:
			return (e = fa(e.type.render, !1)), e;
		case 1:
			return (e = fa(e.type, !0)), e;
		default:
			return '';
	}
}
function qa(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case vr:
			return 'Fragment';
		case mr:
			return 'Portal';
		case Xa:
			return 'Profiler';
		case lu:
			return 'StrictMode';
		case Za:
			return 'Suspense';
		case Ja:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Hf:
				return (e.displayName || 'Context') + '.Consumer';
			case Bf:
				return (e._context.displayName || 'Context') + '.Provider';
			case au:
				var t = e.render;
				return (e = e.displayName), e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')), e;
			case su:
				return (t = e.displayName || null), t !== null ? t : qa(e.type) || 'Memo';
			case fn:
				(t = e._payload), (e = e._init);
				try {
					return qa(e(t));
				} catch {}
		}
	return null;
}
function eg(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef');
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return qa(t);
		case 8:
			return t === lu ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function Pn(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function Wf(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function tg(e) {
	var t = Wf(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
		var o = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this);
				},
				set: function (l) {
					(r = '' + l), i.call(this, l);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (l) {
					r = '' + l;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function wi(e) {
	e._valueTracker || (e._valueTracker = tg(e));
}
function Kf(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return e && (r = Wf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function nl(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function es(e, t) {
	var n = t.checked;
	return ge({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Rc(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Pn(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null });
}
function Qf(e, t) {
	(t = t.checked), t != null && iu(e, 'checked', t, !1);
}
function ts(e, t) {
	Qf(e, t);
	var n = Pn(t.value),
		r = t.type;
	if (n != null) r === 'number' ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n) : e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value') ? ns(e, t.type, n) : t.hasOwnProperty('defaultValue') && ns(e, t.type, Pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _c(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
		(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
	}
	(n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n);
}
function ns(e, t, n) {
	(t !== 'number' || nl(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Eo = Array.isArray;
function Rr(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
		for (n = 0; n < e.length; n++) (o = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + Pn(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				(e[o].selected = !0), r && (e[o].defaultSelected = !0);
				return;
			}
			t !== null || e[o].disabled || (t = e[o]);
		}
		t !== null && (t.selected = !0);
	}
}
function rs(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
	return ge({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Nc(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(T(92));
			if (Eo(n)) {
				if (1 < n.length) throw Error(T(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: Pn(n) };
}
function Yf(e, t) {
	var n = Pn(t.value),
		r = Pn(t.defaultValue);
	n != null && ((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = '' + r);
}
function Tc(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Gf(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function os(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml' ? Gf(t) : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : e;
}
var xi,
	Xf = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, o);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
		else {
			for (xi = xi || document.createElement('div'), xi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = xi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Ao(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var bo = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
	ng = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(bo).forEach(function (e) {
	ng.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bo[t] = bo[e]);
	});
});
function Zf(e, t, n) {
	return t == null || typeof t == 'boolean' || t === '' ? '' : n || typeof t != 'number' || t === 0 || (bo.hasOwnProperty(e) && bo[e]) ? ('' + t).trim() : t + 'px';
}
function Jf(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				o = Zf(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
		}
}
var rg = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function is(e, t) {
	if (t) {
		if (rg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(T(60));
			if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(T(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(T(62));
	}
}
function ls(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var as = null;
function uu(e) {
	return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ss = null,
	_r = null,
	Nr = null;
function Lc(e) {
	if ((e = li(e))) {
		if (typeof ss != 'function') throw Error(T(280));
		var t = e.stateNode;
		t && ((t = zl(t)), ss(e.stateNode, e.type, t));
	}
}
function qf(e) {
	_r ? (Nr ? Nr.push(e) : (Nr = [e])) : (_r = e);
}
function ep() {
	if (_r) {
		var e = _r,
			t = Nr;
		if (((Nr = _r = null), Lc(e), t)) for (e = 0; e < t.length; e++) Lc(t[e]);
	}
}
function tp(e, t) {
	return e(t);
}
function np() {}
var pa = !1;
function rp(e, t, n) {
	if (pa) return e(t, n);
	pa = !0;
	try {
		return tp(e, t, n);
	} finally {
		(pa = !1), (_r !== null || Nr !== null) && (np(), ep());
	}
}
function jo(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = zl(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(T(231, t, typeof n));
	return n;
}
var us = !1;
if (Qt)
	try {
		var so = {};
		Object.defineProperty(so, 'passive', {
			get: function () {
				us = !0;
			},
		}),
			window.addEventListener('test', so, so),
			window.removeEventListener('test', so, so);
	} catch {
		us = !1;
	}
function og(e, t, n, r, o, i, l, a, s) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var Po = !1,
	rl = null,
	ol = !1,
	cs = null,
	ig = {
		onError: function (e) {
			(Po = !0), (rl = e);
		},
	};
function lg(e, t, n, r, o, i, l, a, s) {
	(Po = !1), (rl = null), og.apply(ig, arguments);
}
function ag(e, t, n, r, o, i, l, a, s) {
	if ((lg.apply(this, arguments), Po)) {
		if (Po) {
			var u = rl;
			(Po = !1), (rl = null);
		} else throw Error(T(198));
		ol || ((ol = !0), (cs = u));
	}
}
function nr(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function op(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
	}
	return null;
}
function Dc(e) {
	if (nr(e) !== e) throw Error(T(188));
}
function sg(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = nr(e)), t === null)) throw Error(T(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var o = n.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (((r = o.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (o.child === i.child) {
			for (i = o.child; i; ) {
				if (i === n) return Dc(o), e;
				if (i === r) return Dc(o), t;
				i = i.sibling;
			}
			throw Error(T(188));
		}
		if (n.return !== r.return) (n = o), (r = i);
		else {
			for (var l = !1, a = o.child; a; ) {
				if (a === n) {
					(l = !0), (n = o), (r = i);
					break;
				}
				if (a === r) {
					(l = !0), (r = o), (n = i);
					break;
				}
				a = a.sibling;
			}
			if (!l) {
				for (a = i.child; a; ) {
					if (a === n) {
						(l = !0), (n = i), (r = o);
						break;
					}
					if (a === r) {
						(l = !0), (r = i), (n = o);
						break;
					}
					a = a.sibling;
				}
				if (!l) throw Error(T(189));
			}
		}
		if (n.alternate !== r) throw Error(T(190));
	}
	if (n.tag !== 3) throw Error(T(188));
	return n.stateNode.current === n ? e : t;
}
function ip(e) {
	return (e = sg(e)), e !== null ? lp(e) : null;
}
function lp(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = lp(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var ap = at.unstable_scheduleCallback,
	Oc = at.unstable_cancelCallback,
	ug = at.unstable_shouldYield,
	cg = at.unstable_requestPaint,
	xe = at.unstable_now,
	dg = at.unstable_getCurrentPriorityLevel,
	cu = at.unstable_ImmediatePriority,
	sp = at.unstable_UserBlockingPriority,
	il = at.unstable_NormalPriority,
	fg = at.unstable_LowPriority,
	up = at.unstable_IdlePriority,
	Ol = null,
	At = null;
function pg(e) {
	if (At && typeof At.onCommitFiberRoot == 'function')
		try {
			At.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var kt = Math.clz32 ? Math.clz32 : vg,
	hg = Math.log,
	mg = Math.LN2;
function vg(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((hg(e) / mg) | 0)) | 0;
}
var Si = 64,
	Ei = 4194304;
function Co(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function ll(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		l = n & 268435455;
	if (l !== 0) {
		var a = l & ~o;
		a !== 0 ? (r = Co(a)) : ((i &= l), i !== 0 && (r = Co(i)));
	} else (l = n & ~o), l !== 0 ? (r = Co(l)) : i !== 0 && (r = Co(i));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))) return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
	return r;
}
function gg(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function yg(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
		var l = 31 - kt(i),
			a = 1 << l,
			s = o[l];
		s === -1 ? (!(a & n) || a & r) && (o[l] = gg(a, t)) : s <= t && (e.expiredLanes |= a), (i &= ~a);
	}
}
function ds(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function cp() {
	var e = Si;
	return (Si <<= 1), !(Si & 4194240) && (Si = 64), e;
}
function ha(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function oi(e, t, n) {
	(e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - kt(t)), (e[t] = n);
}
function wg(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var o = 31 - kt(n),
			i = 1 << o;
		(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
	}
}
function du(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - kt(n),
			o = 1 << r;
		(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
	}
}
var ie = 0;
function dp(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fp,
	fu,
	pp,
	hp,
	mp,
	fs = !1,
	Ci = [],
	yn = null,
	wn = null,
	xn = null,
	zo = new Map(),
	Fo = new Map(),
	hn = [],
	xg = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(' ');
function Mc(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			yn = null;
			break;
		case 'dragenter':
		case 'dragleave':
			wn = null;
			break;
		case 'mouseover':
		case 'mouseout':
			xn = null;
			break;
		case 'pointerover':
		case 'pointerout':
			zo.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Fo.delete(t.pointerId);
	}
}
function uo(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }), t !== null && ((t = li(t)), t !== null && fu(t)), e) : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Sg(e, t, n, r, o) {
	switch (t) {
		case 'focusin':
			return (yn = uo(yn, e, t, n, r, o)), !0;
		case 'dragenter':
			return (wn = uo(wn, e, t, n, r, o)), !0;
		case 'mouseover':
			return (xn = uo(xn, e, t, n, r, o)), !0;
		case 'pointerover':
			var i = o.pointerId;
			return zo.set(i, uo(zo.get(i) || null, e, t, n, r, o)), !0;
		case 'gotpointercapture':
			return (i = o.pointerId), Fo.set(i, uo(Fo.get(i) || null, e, t, n, r, o)), !0;
	}
	return !1;
}
function vp(e) {
	var t = Fn(e.target);
	if (t !== null) {
		var n = nr(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = op(n)), t !== null)) {
					(e.blockedOn = t),
						mp(e.priority, function () {
							pp(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Hi(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = ps(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(as = r), n.target.dispatchEvent(r), (as = null);
		} else return (t = li(n)), t !== null && fu(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Ac(e, t, n) {
	Hi(e) && n.delete(t);
}
function Eg() {
	(fs = !1), yn !== null && Hi(yn) && (yn = null), wn !== null && Hi(wn) && (wn = null), xn !== null && Hi(xn) && (xn = null), zo.forEach(Ac), Fo.forEach(Ac);
}
function co(e, t) {
	e.blockedOn === t && ((e.blockedOn = null), fs || ((fs = !0), at.unstable_scheduleCallback(at.unstable_NormalPriority, Eg)));
}
function Io(e) {
	function t(o) {
		return co(o, e);
	}
	if (0 < Ci.length) {
		co(Ci[0], e);
		for (var n = 1; n < Ci.length; n++) {
			var r = Ci[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (yn !== null && co(yn, e), wn !== null && co(wn, e), xn !== null && co(xn, e), zo.forEach(t), Fo.forEach(t), n = 0; n < hn.length; n++) (r = hn[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null); ) vp(n), n.blockedOn === null && hn.shift();
}
var Tr = en.ReactCurrentBatchConfig,
	al = !0;
function Cg(e, t, n, r) {
	var o = ie,
		i = Tr.transition;
	Tr.transition = null;
	try {
		(ie = 1), pu(e, t, n, r);
	} finally {
		(ie = o), (Tr.transition = i);
	}
}
function kg(e, t, n, r) {
	var o = ie,
		i = Tr.transition;
	Tr.transition = null;
	try {
		(ie = 4), pu(e, t, n, r);
	} finally {
		(ie = o), (Tr.transition = i);
	}
}
function pu(e, t, n, r) {
	if (al) {
		var o = ps(e, t, n, r);
		if (o === null) ka(e, t, r, sl, n), Mc(e, r);
		else if (Sg(o, e, t, n, r)) r.stopPropagation();
		else if ((Mc(e, r), t & 4 && -1 < xg.indexOf(e))) {
			for (; o !== null; ) {
				var i = li(o);
				if ((i !== null && fp(i), (i = ps(e, t, n, r)), i === null && ka(e, t, r, sl, n), i === o)) break;
				o = i;
			}
			o !== null && r.stopPropagation();
		} else ka(e, t, r, null, n);
	}
}
var sl = null;
function ps(e, t, n, r) {
	if (((sl = null), (e = uu(r)), (e = Fn(e)), e !== null))
		if (((t = nr(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = op(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (sl = e), null;
}
function gp(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (dg()) {
				case cu:
					return 1;
				case sp:
					return 4;
				case il:
				case fg:
					return 16;
				case up:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var vn = null,
	hu = null,
	Vi = null;
function yp() {
	if (Vi) return Vi;
	var e,
		t = hu,
		n = t.length,
		r,
		o = 'value' in vn ? vn.value : vn.textContent,
		i = o.length;
	for (e = 0; e < n && t[e] === o[e]; e++);
	var l = n - e;
	for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
	return (Vi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Wi(e) {
	var t = e.keyCode;
	return 'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ki() {
	return !0;
}
function jc() {
	return !1;
}
function ut(e) {
	function t(n, r, o, i, l) {
		(this._reactName = n), (this._targetInst = o), (this.type = r), (this.nativeEvent = i), (this.target = l), (this.currentTarget = null);
		for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
		return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ki : jc), (this.isPropagationStopped = jc), this;
	}
	return (
		ge(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1), (this.isDefaultPrevented = ki));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0), (this.isPropagationStopped = ki));
			},
			persist: function () {},
			isPersistent: ki,
		}),
		t
	);
}
var Kr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	mu = ut(Kr),
	ii = ge({}, Kr, { view: 0, detail: 0 }),
	bg = ut(ii),
	ma,
	va,
	fo,
	Ml = ge({}, ii, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: vu,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e ? e.movementX : (e !== fo && (fo && e.type === 'mousemove' ? ((ma = e.screenX - fo.screenX), (va = e.screenY - fo.screenY)) : (va = ma = 0), (fo = e)), ma);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : va;
		},
	}),
	zc = ut(Ml),
	Pg = ge({}, Ml, { dataTransfer: 0 }),
	$g = ut(Pg),
	Rg = ge({}, ii, { relatedTarget: 0 }),
	ga = ut(Rg),
	_g = ge({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Ng = ut(_g),
	Tg = ge({}, Kr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Lg = ut(Tg),
	Dg = ge({}, Kr, { data: 0 }),
	Fc = ut(Dg),
	Og = { Esc: 'Escape', Spacebar: ' ', Left: 'ArrowLeft', Up: 'ArrowUp', Right: 'ArrowRight', Down: 'ArrowDown', Del: 'Delete', Win: 'OS', Menu: 'ContextMenu', Apps: 'ContextMenu', Scroll: 'ScrollLock', MozPrintableKey: 'Unidentified' },
	Mg = { 8: 'Backspace', 9: 'Tab', 12: 'Clear', 13: 'Enter', 16: 'Shift', 17: 'Control', 18: 'Alt', 19: 'Pause', 20: 'CapsLock', 27: 'Escape', 32: ' ', 33: 'PageUp', 34: 'PageDown', 35: 'End', 36: 'Home', 37: 'ArrowLeft', 38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown', 45: 'Insert', 46: 'Delete', 112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12', 144: 'NumLock', 145: 'ScrollLock', 224: 'Meta' },
	Ag = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function jg(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Ag[e]) ? !!t[e] : !1;
}
function vu() {
	return jg;
}
var zg = ge({}, ii, {
		key: function (e) {
			if (e.key) {
				var t = Og[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress' ? ((e = Wi(e)), e === 13 ? 'Enter' : String.fromCharCode(e)) : e.type === 'keydown' || e.type === 'keyup' ? Mg[e.keyCode] || 'Unidentified' : '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: vu,
		charCode: function (e) {
			return e.type === 'keypress' ? Wi(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress' ? Wi(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
	}),
	Fg = ut(zg),
	Ig = ge({}, Ml, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
	Ic = ut(Ig),
	Ug = ge({}, ii, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vu }),
	Bg = ut(Ug),
	Hg = ge({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Vg = ut(Hg),
	Wg = ge({}, Ml, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Kg = ut(Wg),
	Qg = [9, 13, 27, 32],
	gu = Qt && 'CompositionEvent' in window,
	$o = null;
Qt && 'documentMode' in document && ($o = document.documentMode);
var Yg = Qt && 'TextEvent' in window && !$o,
	wp = Qt && (!gu || ($o && 8 < $o && 11 >= $o)),
	Uc = ' ',
	Bc = !1;
function xp(e, t) {
	switch (e) {
		case 'keyup':
			return Qg.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function Sp(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var gr = !1;
function Gg(e, t) {
	switch (e) {
		case 'compositionend':
			return Sp(t);
		case 'keypress':
			return t.which !== 32 ? null : ((Bc = !0), Uc);
		case 'textInput':
			return (e = t.data), e === Uc && Bc ? null : e;
		default:
			return null;
	}
}
function Xg(e, t) {
	if (gr) return e === 'compositionend' || (!gu && xp(e, t)) ? ((e = yp()), (Vi = hu = vn = null), (gr = !1), e) : null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return wp && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Zg = { color: !0, date: !0, datetime: !0, 'datetime-local': !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Zg[e.type] : t === 'textarea';
}
function Ep(e, t, n, r) {
	qf(r), (t = ul(t, 'onChange')), 0 < t.length && ((n = new mu('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Ro = null,
	Uo = null;
function Jg(e) {
	Dp(e, 0);
}
function Al(e) {
	var t = xr(e);
	if (Kf(t)) return e;
}
function qg(e, t) {
	if (e === 'change') return t;
}
var Cp = !1;
if (Qt) {
	var ya;
	if (Qt) {
		var wa = 'oninput' in document;
		if (!wa) {
			var Vc = document.createElement('div');
			Vc.setAttribute('oninput', 'return;'), (wa = typeof Vc.oninput == 'function');
		}
		ya = wa;
	} else ya = !1;
	Cp = ya && (!document.documentMode || 9 < document.documentMode);
}
function Wc() {
	Ro && (Ro.detachEvent('onpropertychange', kp), (Uo = Ro = null));
}
function kp(e) {
	if (e.propertyName === 'value' && Al(Uo)) {
		var t = [];
		Ep(t, Uo, e, uu(e)), rp(Jg, t);
	}
}
function ey(e, t, n) {
	e === 'focusin' ? (Wc(), (Ro = t), (Uo = n), Ro.attachEvent('onpropertychange', kp)) : e === 'focusout' && Wc();
}
function ty(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Al(Uo);
}
function ny(e, t) {
	if (e === 'click') return Al(t);
}
function ry(e, t) {
	if (e === 'input' || e === 'change') return Al(t);
}
function oy(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Pt = typeof Object.is == 'function' ? Object.is : oy;
function Bo(e, t) {
	if (Pt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var o = n[r];
		if (!Ga.call(t, o) || !Pt(e[o], t[o])) return !1;
	}
	return !0;
}
function Kc(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Qc(e, t) {
	var n = Kc(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Kc(n);
	}
}
function bp(e, t) {
	return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bp(e, t.parentNode) : 'contains' in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function Pp() {
	for (var e = window, t = nl(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = nl(e.document);
	}
	return t;
}
function yu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) || t === 'textarea' || e.contentEditable === 'true');
}
function iy(e) {
	var t = Pp(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && bp(n.ownerDocument.documentElement, n)) {
		if (r !== null && yu(n)) {
			if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
				e = e.getSelection();
				var o = n.textContent.length,
					i = Math.min(r.start, o);
				(r = r.end === void 0 ? i : Math.min(r.end, o)), !e.extend && i > r && ((o = r), (r = i), (i = o)), (o = Qc(n, i));
				var l = Qc(n, r);
				o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && ((t = t.createRange()), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
	}
}
var ly = Qt && 'documentMode' in document && 11 >= document.documentMode,
	yr = null,
	hs = null,
	_o = null,
	ms = !1;
function Yc(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	ms || yr == null || yr !== nl(r) || ((r = yr), 'selectionStart' in r && yu(r) ? (r = { start: r.selectionStart, end: r.selectionEnd }) : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })), (_o && Bo(_o, r)) || ((_o = r), (r = ul(hs, 'onSelect')), 0 < r.length && ((t = new mu('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = yr))));
}
function bi(e, t) {
	var n = {};
	return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var wr = { animationend: bi('Animation', 'AnimationEnd'), animationiteration: bi('Animation', 'AnimationIteration'), animationstart: bi('Animation', 'AnimationStart'), transitionend: bi('Transition', 'TransitionEnd') },
	xa = {},
	$p = {};
Qt && (($p = document.createElement('div').style), 'AnimationEvent' in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), 'TransitionEvent' in window || delete wr.transitionend.transition);
function jl(e) {
	if (xa[e]) return xa[e];
	if (!wr[e]) return e;
	var t = wr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in $p) return (xa[e] = t[n]);
	return e;
}
var Rp = jl('animationend'),
	_p = jl('animationiteration'),
	Np = jl('animationstart'),
	Tp = jl('transitionend'),
	Lp = new Map(),
	Gc = 'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(' ');
function Tn(e, t) {
	Lp.set(e, t), tr(t, [e]);
}
for (var Sa = 0; Sa < Gc.length; Sa++) {
	var Ea = Gc[Sa],
		ay = Ea.toLowerCase(),
		sy = Ea[0].toUpperCase() + Ea.slice(1);
	Tn(ay, 'on' + sy);
}
Tn(Rp, 'onAnimationEnd');
Tn(_p, 'onAnimationIteration');
Tn(Np, 'onAnimationStart');
Tn('dblclick', 'onDoubleClick');
Tn('focusin', 'onFocus');
Tn('focusout', 'onBlur');
Tn(Tp, 'onTransitionEnd');
Ar('onMouseEnter', ['mouseout', 'mouseover']);
Ar('onMouseLeave', ['mouseout', 'mouseover']);
Ar('onPointerEnter', ['pointerout', 'pointerover']);
Ar('onPointerLeave', ['pointerout', 'pointerover']);
tr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
tr('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
tr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
tr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
tr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
tr('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var ko = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(' '),
	uy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ko));
function Xc(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), ag(r, t, void 0, e), (e.currentTarget = null);
}
function Dp(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var l = r.length - 1; 0 <= l; l--) {
					var a = r[l],
						s = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
					Xc(o, a, u), (i = s);
				}
			else
				for (l = 0; l < r.length; l++) {
					if (((a = r[l]), (s = a.instance), (u = a.currentTarget), (a = a.listener), s !== i && o.isPropagationStopped())) break e;
					Xc(o, a, u), (i = s);
				}
		}
	}
	if (ol) throw ((e = cs), (ol = !1), (cs = null), e);
}
function ue(e, t) {
	var n = t[xs];
	n === void 0 && (n = t[xs] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Op(t, e, 2, !1), n.add(r));
}
function Ca(e, t, n) {
	var r = 0;
	t && (r |= 4), Op(n, e, r, t);
}
var Pi = '_reactListening' + Math.random().toString(36).slice(2);
function Ho(e) {
	if (!e[Pi]) {
		(e[Pi] = !0),
			Uf.forEach(function (n) {
				n !== 'selectionchange' && (uy.has(n) || Ca(n, !1, e), Ca(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Pi] || ((t[Pi] = !0), Ca('selectionchange', !1, t));
	}
}
function Op(e, t, n, r) {
	switch (gp(t)) {
		case 1:
			var o = Cg;
			break;
		case 4:
			o = kg;
			break;
		default:
			o = pu;
	}
	(n = o.bind(null, t, n, e)), (o = void 0), !us || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0), r ? (o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0)) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ka(e, t, n, r, o) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var l = r.tag;
			if (l === 3 || l === 4) {
				var a = r.stateNode.containerInfo;
				if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
				if (l === 4)
					for (l = r.return; l !== null; ) {
						var s = l.tag;
						if ((s === 3 || s === 4) && ((s = l.stateNode.containerInfo), s === o || (s.nodeType === 8 && s.parentNode === o))) return;
						l = l.return;
					}
				for (; a !== null; ) {
					if (((l = Fn(a)), l === null)) return;
					if (((s = l.tag), s === 5 || s === 6)) {
						r = i = l;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	rp(function () {
		var u = i,
			c = uu(n),
			d = [];
		e: {
			var p = Lp.get(e);
			if (p !== void 0) {
				var y = mu,
					w = e;
				switch (e) {
					case 'keypress':
						if (Wi(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						y = Fg;
						break;
					case 'focusin':
						(w = 'focus'), (y = ga);
						break;
					case 'focusout':
						(w = 'blur'), (y = ga);
						break;
					case 'beforeblur':
					case 'afterblur':
						y = ga;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						y = zc;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						y = $g;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						y = Bg;
						break;
					case Rp:
					case _p:
					case Np:
						y = Ng;
						break;
					case Tp:
						y = Vg;
						break;
					case 'scroll':
						y = bg;
						break;
					case 'wheel':
						y = Kg;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						y = Lg;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						y = Ic;
				}
				var v = (t & 4) !== 0,
					S = !v && e === 'scroll',
					m = v ? (p !== null ? p + 'Capture' : null) : p;
				v = [];
				for (var h = u, g; h !== null; ) {
					g = h;
					var E = g.stateNode;
					if ((g.tag === 5 && E !== null && ((g = E), m !== null && ((E = jo(h, m)), E != null && v.push(Vo(h, E, g)))), S)) break;
					h = h.return;
				}
				0 < v.length && ((p = new y(p, w, null, n, c)), d.push({ event: p, listeners: v }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (((p = e === 'mouseover' || e === 'pointerover'), (y = e === 'mouseout' || e === 'pointerout'), p && n !== as && (w = n.relatedTarget || n.fromElement) && (Fn(w) || w[Yt]))) break e;
				if ((y || p) && ((p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window), y ? ((w = n.relatedTarget || n.toElement), (y = u), (w = w ? Fn(w) : null), w !== null && ((S = nr(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) && (w = null)) : ((y = null), (w = u)), y !== w)) {
					if (((v = zc), (E = 'onMouseLeave'), (m = 'onMouseEnter'), (h = 'mouse'), (e === 'pointerout' || e === 'pointerover') && ((v = Ic), (E = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')), (S = y == null ? p : xr(y)), (g = w == null ? p : xr(w)), (p = new v(E, h + 'leave', y, n, c)), (p.target = S), (p.relatedTarget = g), (E = null), Fn(c) === u && ((v = new v(m, h + 'enter', w, n, c)), (v.target = g), (v.relatedTarget = S), (E = v)), (S = E), y && w))
						t: {
							for (v = y, m = w, h = 0, g = v; g; g = cr(g)) h++;
							for (g = 0, E = m; E; E = cr(E)) g++;
							for (; 0 < h - g; ) (v = cr(v)), h--;
							for (; 0 < g - h; ) (m = cr(m)), g--;
							for (; h--; ) {
								if (v === m || (m !== null && v === m.alternate)) break t;
								(v = cr(v)), (m = cr(m));
							}
							v = null;
						}
					else v = null;
					y !== null && Zc(d, p, y, v, !1), w !== null && S !== null && Zc(d, S, w, v, !0);
				}
			}
			e: {
				if (((p = u ? xr(u) : window), (y = p.nodeName && p.nodeName.toLowerCase()), y === 'select' || (y === 'input' && p.type === 'file'))) var k = qg;
				else if (Hc(p))
					if (Cp) k = ry;
					else {
						k = ty;
						var _ = ey;
					}
				else (y = p.nodeName) && y.toLowerCase() === 'input' && (p.type === 'checkbox' || p.type === 'radio') && (k = ny);
				if (k && (k = k(e, u))) {
					Ep(d, k, n, c);
					break e;
				}
				_ && _(e, p, u), e === 'focusout' && (_ = p._wrapperState) && _.controlled && p.type === 'number' && ns(p, 'number', p.value);
			}
			switch (((_ = u ? xr(u) : window), e)) {
				case 'focusin':
					(Hc(_) || _.contentEditable === 'true') && ((yr = _), (hs = u), (_o = null));
					break;
				case 'focusout':
					_o = hs = yr = null;
					break;
				case 'mousedown':
					ms = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(ms = !1), Yc(d, n, c);
					break;
				case 'selectionchange':
					if (ly) break;
				case 'keydown':
				case 'keyup':
					Yc(d, n, c);
			}
			var x;
			if (gu)
				e: {
					switch (e) {
						case 'compositionstart':
							var P = 'onCompositionStart';
							break e;
						case 'compositionend':
							P = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							P = 'onCompositionUpdate';
							break e;
					}
					P = void 0;
				}
			else gr ? xp(e, n) && (P = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
			P && (wp && n.locale !== 'ko' && (gr || P !== 'onCompositionStart' ? P === 'onCompositionEnd' && gr && (x = yp()) : ((vn = c), (hu = 'value' in vn ? vn.value : vn.textContent), (gr = !0))), (_ = ul(u, P)), 0 < _.length && ((P = new Fc(P, e, null, n, c)), d.push({ event: P, listeners: _ }), x ? (P.data = x) : ((x = Sp(n)), x !== null && (P.data = x)))), (x = Yg ? Gg(e, n) : Xg(e, n)) && ((u = ul(u, 'onBeforeInput')), 0 < u.length && ((c = new Fc('onBeforeInput', 'beforeinput', null, n, c)), d.push({ event: c, listeners: u }), (c.data = x)));
		}
		Dp(d, t);
	});
}
function Vo(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function ul(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var o = e,
			i = o.stateNode;
		o.tag === 5 && i !== null && ((o = i), (i = jo(e, n)), i != null && r.unshift(Vo(e, i, o)), (i = jo(e, t)), i != null && r.push(Vo(e, i, o))), (e = e.return);
	}
	return r;
}
function cr(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Zc(e, t, n, r, o) {
	for (var i = t._reactName, l = []; n !== null && n !== r; ) {
		var a = n,
			s = a.alternate,
			u = a.stateNode;
		if (s !== null && s === r) break;
		a.tag === 5 && u !== null && ((a = u), o ? ((s = jo(n, i)), s != null && l.unshift(Vo(n, s, a))) : o || ((s = jo(n, i)), s != null && l.push(Vo(n, s, a)))), (n = n.return);
	}
	l.length !== 0 && e.push({ event: t, listeners: l });
}
var cy = /\r\n?/g,
	dy = /\u0000|\uFFFD/g;
function Jc(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			cy,
			`
`
		)
		.replace(dy, '');
}
function $i(e, t, n) {
	if (((t = Jc(t)), Jc(e) !== t && n)) throw Error(T(425));
}
function cl() {}
var vs = null,
	gs = null;
function ys(e, t) {
	return e === 'textarea' || e === 'noscript' || typeof t.children == 'string' || typeof t.children == 'number' || (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null);
}
var ws = typeof setTimeout == 'function' ? setTimeout : void 0,
	fy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	qc = typeof Promise == 'function' ? Promise : void 0,
	py =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof qc < 'u'
			? function (e) {
					return qc.resolve(null).then(e).catch(hy);
			  }
			: ws;
function hy(e) {
	setTimeout(function () {
		throw e;
	});
}
function ba(e, t) {
	var n = t,
		r = 0;
	do {
		var o = n.nextSibling;
		if ((e.removeChild(n), o && o.nodeType === 8))
			if (((n = o.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(o), Io(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = o;
	} while (n);
	Io(t);
}
function Sn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function ed(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Qr = Math.random().toString(36).slice(2),
	Dt = '__reactFiber$' + Qr,
	Wo = '__reactProps$' + Qr,
	Yt = '__reactContainer$' + Qr,
	xs = '__reactEvents$' + Qr,
	my = '__reactListeners$' + Qr,
	vy = '__reactHandles$' + Qr;
function Fn(e) {
	var t = e[Dt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Yt] || n[Dt])) {
			if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
				for (e = ed(e); e !== null; ) {
					if ((n = e[Dt])) return n;
					e = ed(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function li(e) {
	return (e = e[Dt] || e[Yt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function xr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(T(33));
}
function zl(e) {
	return e[Wo] || null;
}
var Ss = [],
	Sr = -1;
function Ln(e) {
	return { current: e };
}
function ce(e) {
	0 > Sr || ((e.current = Ss[Sr]), (Ss[Sr] = null), Sr--);
}
function ae(e, t) {
	Sr++, (Ss[Sr] = e.current), (e.current = t);
}
var $n = {},
	Ie = Ln($n),
	Je = Ln(!1),
	Yn = $n;
function jr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return $n;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in n) o[i] = t[i];
	return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
}
function qe(e) {
	return (e = e.childContextTypes), e != null;
}
function dl() {
	ce(Je), ce(Ie);
}
function td(e, t, n) {
	if (Ie.current !== $n) throw Error(T(168));
	ae(Ie, t), ae(Je, n);
}
function Mp(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
	r = r.getChildContext();
	for (var o in r) if (!(o in t)) throw Error(T(108, eg(e) || 'Unknown', o));
	return ge({}, n, r);
}
function fl(e) {
	return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $n), (Yn = Ie.current), ae(Ie, e), ae(Je, Je.current), !0;
}
function nd(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(T(169));
	n ? ((e = Mp(e, t, Yn)), (r.__reactInternalMemoizedMergedChildContext = e), ce(Je), ce(Ie), ae(Ie, e)) : ce(Je), ae(Je, n);
}
var Bt = null,
	Fl = !1,
	Pa = !1;
function Ap(e) {
	Bt === null ? (Bt = [e]) : Bt.push(e);
}
function gy(e) {
	(Fl = !0), Ap(e);
}
function Dn() {
	if (!Pa && Bt !== null) {
		Pa = !0;
		var e = 0,
			t = ie;
		try {
			var n = Bt;
			for (ie = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Bt = null), (Fl = !1);
		} catch (o) {
			throw (Bt !== null && (Bt = Bt.slice(e + 1)), ap(cu, Dn), o);
		} finally {
			(ie = t), (Pa = !1);
		}
	}
	return null;
}
var Er = [],
	Cr = 0,
	pl = null,
	hl = 0,
	ft = [],
	pt = 0,
	Gn = null,
	Ht = 1,
	Vt = '';
function jn(e, t) {
	(Er[Cr++] = hl), (Er[Cr++] = pl), (pl = e), (hl = t);
}
function jp(e, t, n) {
	(ft[pt++] = Ht), (ft[pt++] = Vt), (ft[pt++] = Gn), (Gn = e);
	var r = Ht;
	e = Vt;
	var o = 32 - kt(r) - 1;
	(r &= ~(1 << o)), (n += 1);
	var i = 32 - kt(t) + o;
	if (30 < i) {
		var l = o - (o % 5);
		(i = (r & ((1 << l) - 1)).toString(32)), (r >>= l), (o -= l), (Ht = (1 << (32 - kt(t) + o)) | (n << o) | r), (Vt = i + e);
	} else (Ht = (1 << i) | (n << o) | r), (Vt = e);
}
function wu(e) {
	e.return !== null && (jn(e, 1), jp(e, 1, 0));
}
function xu(e) {
	for (; e === pl; ) (pl = Er[--Cr]), (Er[Cr] = null), (hl = Er[--Cr]), (Er[Cr] = null);
	for (; e === Gn; ) (Gn = ft[--pt]), (ft[pt] = null), (Vt = ft[--pt]), (ft[pt] = null), (Ht = ft[--pt]), (ft[pt] = null);
}
var it = null,
	ot = null,
	pe = !1,
	Ct = null;
function zp(e, t) {
	var n = mt(5, null, null, 0);
	(n.elementType = 'DELETED'), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rd(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (it = e), (ot = Sn(t.firstChild)), !0) : !1;
		case 6:
			return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (it = e), (ot = null), !0) : !1;
		case 13:
			return (t = t.nodeType !== 8 ? null : t), t !== null ? ((n = Gn !== null ? { id: Ht, overflow: Vt } : null), (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }), (n = mt(18, null, null, 0)), (n.stateNode = t), (n.return = e), (e.child = n), (it = e), (ot = null), !0) : !1;
		default:
			return !1;
	}
}
function Es(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cs(e) {
	if (pe) {
		var t = ot;
		if (t) {
			var n = t;
			if (!rd(e, t)) {
				if (Es(e)) throw Error(T(418));
				t = Sn(n.nextSibling);
				var r = it;
				t && rd(e, t) ? zp(r, n) : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (it = e));
			}
		} else {
			if (Es(e)) throw Error(T(418));
			(e.flags = (e.flags & -4097) | 2), (pe = !1), (it = e);
		}
	}
}
function od(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
	it = e;
}
function Ri(e) {
	if (e !== it) return !1;
	if (!pe) return od(e), (pe = !0), !1;
	var t;
	if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !ys(e.type, e.memoizedProps))), t && (t = ot))) {
		if (Es(e)) throw (Fp(), Error(T(418)));
		for (; t; ) zp(e, t), (t = Sn(t.nextSibling));
	}
	if ((od(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(T(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							ot = Sn(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			ot = null;
		}
	} else ot = it ? Sn(e.stateNode.nextSibling) : null;
	return !0;
}
function Fp() {
	for (var e = ot; e; ) e = Sn(e.nextSibling);
}
function zr() {
	(ot = it = null), (pe = !1);
}
function Su(e) {
	Ct === null ? (Ct = [e]) : Ct.push(e);
}
var yy = en.ReactCurrentBatchConfig;
function po(e, t, n) {
	if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(T(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(T(147, e));
			var o = r,
				i = '' + e;
			return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
				? t.ref
				: ((t = function (l) {
						var a = o.refs;
						l === null ? delete a[i] : (a[i] = l);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != 'string') throw Error(T(284));
		if (!n._owner) throw Error(T(290, e));
	}
	return e;
}
function _i(e, t) {
	throw ((e = Object.prototype.toString.call(t)), Error(T(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
}
function id(e) {
	var t = e._init;
	return t(e._payload);
}
function Ip(e) {
	function t(m, h) {
		if (e) {
			var g = m.deletions;
			g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
		}
	}
	function n(m, h) {
		if (!e) return null;
		for (; h !== null; ) t(m, h), (h = h.sibling);
		return null;
	}
	function r(m, h) {
		for (m = new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
		return m;
	}
	function o(m, h) {
		return (m = bn(m, h)), (m.index = 0), (m.sibling = null), m;
	}
	function i(m, h, g) {
		return (m.index = g), e ? ((g = m.alternate), g !== null ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g) : ((m.flags |= 2), h)) : ((m.flags |= 1048576), h);
	}
	function l(m) {
		return e && m.alternate === null && (m.flags |= 2), m;
	}
	function a(m, h, g, E) {
		return h === null || h.tag !== 6 ? ((h = Da(g, m.mode, E)), (h.return = m), h) : ((h = o(h, g)), (h.return = m), h);
	}
	function s(m, h, g, E) {
		var k = g.type;
		return k === vr ? c(m, h, g.props.children, E, g.key) : h !== null && (h.elementType === k || (typeof k == 'object' && k !== null && k.$$typeof === fn && id(k) === h.type)) ? ((E = o(h, g.props)), (E.ref = po(m, h, g)), (E.return = m), E) : ((E = Ji(g.type, g.key, g.props, null, m.mode, E)), (E.ref = po(m, h, g)), (E.return = m), E);
	}
	function u(m, h, g, E) {
		return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? ((h = Oa(g, m.mode, E)), (h.return = m), h) : ((h = o(h, g.children || [])), (h.return = m), h);
	}
	function c(m, h, g, E, k) {
		return h === null || h.tag !== 7 ? ((h = Kn(g, m.mode, E, k)), (h.return = m), h) : ((h = o(h, g)), (h.return = m), h);
	}
	function d(m, h, g) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number') return (h = Da('' + h, m.mode, g)), (h.return = m), h;
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case yi:
					return (g = Ji(h.type, h.key, h.props, null, m.mode, g)), (g.ref = po(m, null, h)), (g.return = m), g;
				case mr:
					return (h = Oa(h, m.mode, g)), (h.return = m), h;
				case fn:
					var E = h._init;
					return d(m, E(h._payload), g);
			}
			if (Eo(h) || ao(h)) return (h = Kn(h, m.mode, g, null)), (h.return = m), h;
			_i(m, h);
		}
		return null;
	}
	function p(m, h, g, E) {
		var k = h !== null ? h.key : null;
		if ((typeof g == 'string' && g !== '') || typeof g == 'number') return k !== null ? null : a(m, h, '' + g, E);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case yi:
					return g.key === k ? s(m, h, g, E) : null;
				case mr:
					return g.key === k ? u(m, h, g, E) : null;
				case fn:
					return (k = g._init), p(m, h, k(g._payload), E);
			}
			if (Eo(g) || ao(g)) return k !== null ? null : c(m, h, g, E, null);
			_i(m, g);
		}
		return null;
	}
	function y(m, h, g, E, k) {
		if ((typeof E == 'string' && E !== '') || typeof E == 'number') return (m = m.get(g) || null), a(h, m, '' + E, k);
		if (typeof E == 'object' && E !== null) {
			switch (E.$$typeof) {
				case yi:
					return (m = m.get(E.key === null ? g : E.key) || null), s(h, m, E, k);
				case mr:
					return (m = m.get(E.key === null ? g : E.key) || null), u(h, m, E, k);
				case fn:
					var _ = E._init;
					return y(m, h, g, _(E._payload), k);
			}
			if (Eo(E) || ao(E)) return (m = m.get(g) || null), c(h, m, E, k, null);
			_i(h, E);
		}
		return null;
	}
	function w(m, h, g, E) {
		for (var k = null, _ = null, x = h, P = (h = 0), O = null; x !== null && P < g.length; P++) {
			x.index > P ? ((O = x), (x = null)) : (O = x.sibling);
			var L = p(m, x, g[P], E);
			if (L === null) {
				x === null && (x = O);
				break;
			}
			e && x && L.alternate === null && t(m, x), (h = i(L, h, P)), _ === null ? (k = L) : (_.sibling = L), (_ = L), (x = O);
		}
		if (P === g.length) return n(m, x), pe && jn(m, P), k;
		if (x === null) {
			for (; P < g.length; P++) (x = d(m, g[P], E)), x !== null && ((h = i(x, h, P)), _ === null ? (k = x) : (_.sibling = x), (_ = x));
			return pe && jn(m, P), k;
		}
		for (x = r(m, x); P < g.length; P++) (O = y(x, m, P, g[P], E)), O !== null && (e && O.alternate !== null && x.delete(O.key === null ? P : O.key), (h = i(O, h, P)), _ === null ? (k = O) : (_.sibling = O), (_ = O));
		return (
			e &&
				x.forEach(function (I) {
					return t(m, I);
				}),
			pe && jn(m, P),
			k
		);
	}
	function v(m, h, g, E) {
		var k = ao(g);
		if (typeof k != 'function') throw Error(T(150));
		if (((g = k.call(g)), g == null)) throw Error(T(151));
		for (var _ = (k = null), x = h, P = (h = 0), O = null, L = g.next(); x !== null && !L.done; P++, L = g.next()) {
			x.index > P ? ((O = x), (x = null)) : (O = x.sibling);
			var I = p(m, x, L.value, E);
			if (I === null) {
				x === null && (x = O);
				break;
			}
			e && x && I.alternate === null && t(m, x), (h = i(I, h, P)), _ === null ? (k = I) : (_.sibling = I), (_ = I), (x = O);
		}
		if (L.done) return n(m, x), pe && jn(m, P), k;
		if (x === null) {
			for (; !L.done; P++, L = g.next()) (L = d(m, L.value, E)), L !== null && ((h = i(L, h, P)), _ === null ? (k = L) : (_.sibling = L), (_ = L));
			return pe && jn(m, P), k;
		}
		for (x = r(m, x); !L.done; P++, L = g.next()) (L = y(x, m, P, L.value, E)), L !== null && (e && L.alternate !== null && x.delete(L.key === null ? P : L.key), (h = i(L, h, P)), _ === null ? (k = L) : (_.sibling = L), (_ = L));
		return (
			e &&
				x.forEach(function (M) {
					return t(m, M);
				}),
			pe && jn(m, P),
			k
		);
	}
	function S(m, h, g, E) {
		if ((typeof g == 'object' && g !== null && g.type === vr && g.key === null && (g = g.props.children), typeof g == 'object' && g !== null)) {
			switch (g.$$typeof) {
				case yi:
					e: {
						for (var k = g.key, _ = h; _ !== null; ) {
							if (_.key === k) {
								if (((k = g.type), k === vr)) {
									if (_.tag === 7) {
										n(m, _.sibling), (h = o(_, g.props.children)), (h.return = m), (m = h);
										break e;
									}
								} else if (_.elementType === k || (typeof k == 'object' && k !== null && k.$$typeof === fn && id(k) === _.type)) {
									n(m, _.sibling), (h = o(_, g.props)), (h.ref = po(m, _, g)), (h.return = m), (m = h);
									break e;
								}
								n(m, _);
								break;
							} else t(m, _);
							_ = _.sibling;
						}
						g.type === vr ? ((h = Kn(g.props.children, m.mode, E, g.key)), (h.return = m), (m = h)) : ((E = Ji(g.type, g.key, g.props, null, m.mode, E)), (E.ref = po(m, h, g)), (E.return = m), (m = E));
					}
					return l(m);
				case mr:
					e: {
						for (_ = g.key; h !== null; ) {
							if (h.key === _)
								if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
									n(m, h.sibling), (h = o(h, g.children || [])), (h.return = m), (m = h);
									break e;
								} else {
									n(m, h);
									break;
								}
							else t(m, h);
							h = h.sibling;
						}
						(h = Oa(g, m.mode, E)), (h.return = m), (m = h);
					}
					return l(m);
				case fn:
					return (_ = g._init), S(m, h, _(g._payload), E);
			}
			if (Eo(g)) return w(m, h, g, E);
			if (ao(g)) return v(m, h, g, E);
			_i(m, g);
		}
		return (typeof g == 'string' && g !== '') || typeof g == 'number' ? ((g = '' + g), h !== null && h.tag === 6 ? (n(m, h.sibling), (h = o(h, g)), (h.return = m), (m = h)) : (n(m, h), (h = Da(g, m.mode, E)), (h.return = m), (m = h)), l(m)) : n(m, h);
	}
	return S;
}
var Fr = Ip(!0),
	Up = Ip(!1),
	ml = Ln(null),
	vl = null,
	kr = null,
	Eu = null;
function Cu() {
	Eu = kr = vl = null;
}
function ku(e) {
	var t = ml.current;
	ce(ml), (e._currentValue = t);
}
function ks(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
		e = e.return;
	}
}
function Lr(e, t) {
	(vl = e), (Eu = kr = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function gt(e) {
	var t = e._currentValue;
	if (Eu !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), kr === null)) {
			if (vl === null) throw Error(T(308));
			(kr = e), (vl.dependencies = { lanes: 0, firstContext: e });
		} else kr = kr.next = e;
	return t;
}
var In = null;
function bu(e) {
	In === null ? (In = [e]) : In.push(e);
}
function Bp(e, t, n, r) {
	var o = t.interleaved;
	return o === null ? ((n.next = n), bu(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Gt(e, r);
}
function Gt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var pn = !1;
function Pu(e) {
	e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Hp(e, t) {
	(e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Wt(e, t) {
	return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function En(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), re & 2)) {
		var o = r.pending;
		return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Gt(e, n);
	}
	return (o = r.interleaved), o === null ? ((t.next = t), bu(r)) : ((t.next = o.next), (o.next = t)), (r.interleaved = t), Gt(e, n);
}
function Ki(e, t, n) {
	if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), du(e, n);
	}
}
function ld(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var o = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
				i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
			} while (n !== null);
			i === null ? (o = i = t) : (i = i.next = t);
		} else o = i = t;
		(n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function gl(e, t, n, r) {
	var o = e.updateQueue;
	pn = !1;
	var i = o.firstBaseUpdate,
		l = o.lastBaseUpdate,
		a = o.shared.pending;
	if (a !== null) {
		o.shared.pending = null;
		var s = a,
			u = s.next;
		(s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
		var c = e.alternate;
		c !== null && ((c = c.updateQueue), (a = c.lastBaseUpdate), a !== l && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = s)));
	}
	if (i !== null) {
		var d = o.baseState;
		(l = 0), (c = u = s = null), (a = i);
		do {
			var p = a.lane,
				y = a.eventTime;
			if ((r & p) === p) {
				c !== null && (c = c.next = { eventTime: y, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
				e: {
					var w = e,
						v = a;
					switch (((p = t), (y = n), v.tag)) {
						case 1:
							if (((w = v.payload), typeof w == 'function')) {
								d = w.call(y, d, p);
								break e;
							}
							d = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (((w = v.payload), (p = typeof w == 'function' ? w.call(y, d, p) : w), p == null)) break e;
							d = ge({}, d, p);
							break e;
						case 2:
							pn = !0;
					}
				}
				a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (p = o.effects), p === null ? (o.effects = [a]) : p.push(a));
			} else (y = { eventTime: y, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), c === null ? ((u = c = y), (s = d)) : (c = c.next = y), (l |= p);
			if (((a = a.next), a === null)) {
				if (((a = o.shared.pending), a === null)) break;
				(p = a), (a = p.next), (p.next = null), (o.lastBaseUpdate = p), (o.shared.pending = null);
			}
		} while (!0);
		if ((c === null && (s = d), (o.baseState = s), (o.firstBaseUpdate = u), (o.lastBaseUpdate = c), (t = o.shared.interleaved), t !== null)) {
			o = t;
			do (l |= o.lane), (o = o.next);
			while (o !== t);
		} else i === null && (o.shared.lanes = 0);
		(Zn |= l), (e.lanes = l), (e.memoizedState = d);
	}
}
function ad(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback;
			if (o !== null) {
				if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(T(191, o));
				o.call(r);
			}
		}
}
var ai = {},
	jt = Ln(ai),
	Ko = Ln(ai),
	Qo = Ln(ai);
function Un(e) {
	if (e === ai) throw Error(T(174));
	return e;
}
function $u(e, t) {
	switch ((ae(Qo, t), ae(Ko, e), ae(jt, ai), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : os(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = os(t, e));
	}
	ce(jt), ae(jt, t);
}
function Ir() {
	ce(jt), ce(Ko), ce(Qo);
}
function Vp(e) {
	Un(Qo.current);
	var t = Un(jt.current),
		n = os(t, e.type);
	t !== n && (ae(Ko, e), ae(jt, n));
}
function Ru(e) {
	Ko.current === e && (ce(jt), ce(Ko));
}
var me = Ln(0);
function yl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var $a = [];
function _u() {
	for (var e = 0; e < $a.length; e++) $a[e]._workInProgressVersionPrimary = null;
	$a.length = 0;
}
var Qi = en.ReactCurrentDispatcher,
	Ra = en.ReactCurrentBatchConfig,
	Xn = 0,
	ve = null,
	Ce = null,
	$e = null,
	wl = !1,
	No = !1,
	Yo = 0,
	wy = 0;
function je() {
	throw Error(T(321));
}
function Nu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++) if (!Pt(e[n], t[n])) return !1;
	return !0;
}
function Tu(e, t, n, r, o, i) {
	if (((Xn = i), (ve = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Qi.current = e === null || e.memoizedState === null ? Cy : ky), (e = n(r, o)), No)) {
		i = 0;
		do {
			if (((No = !1), (Yo = 0), 25 <= i)) throw Error(T(301));
			(i += 1), ($e = Ce = null), (t.updateQueue = null), (Qi.current = by), (e = n(r, o));
		} while (No);
	}
	if (((Qi.current = xl), (t = Ce !== null && Ce.next !== null), (Xn = 0), ($e = Ce = ve = null), (wl = !1), t)) throw Error(T(300));
	return e;
}
function Lu() {
	var e = Yo !== 0;
	return (Yo = 0), e;
}
function Lt() {
	var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
	return $e === null ? (ve.memoizedState = $e = e) : ($e = $e.next = e), $e;
}
function yt() {
	if (Ce === null) {
		var e = ve.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Ce.next;
	var t = $e === null ? ve.memoizedState : $e.next;
	if (t !== null) ($e = t), (Ce = e);
	else {
		if (e === null) throw Error(T(310));
		(Ce = e), (e = { memoizedState: Ce.memoizedState, baseState: Ce.baseState, baseQueue: Ce.baseQueue, queue: Ce.queue, next: null }), $e === null ? (ve.memoizedState = $e = e) : ($e = $e.next = e);
	}
	return $e;
}
function Go(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function _a(e) {
	var t = yt(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = Ce,
		o = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (o !== null) {
			var l = o.next;
			(o.next = i.next), (i.next = l);
		}
		(r.baseQueue = o = i), (n.pending = null);
	}
	if (o !== null) {
		(i = o.next), (r = r.baseState);
		var a = (l = null),
			s = null,
			u = i;
		do {
			var c = u.lane;
			if ((Xn & c) === c) s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), (r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
				s === null ? ((a = s = d), (l = r)) : (s = s.next = d), (ve.lanes |= c), (Zn |= c);
			}
			u = u.next;
		} while (u !== null && u !== i);
		s === null ? (l = r) : (s.next = a), Pt(r, t.memoizedState) || (Ze = !0), (t.memoizedState = r), (t.baseState = l), (t.baseQueue = s), (n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		o = e;
		do (i = o.lane), (ve.lanes |= i), (Zn |= i), (o = o.next);
		while (o !== e);
	} else o === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Na(e) {
	var t = yt(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState;
	if (o !== null) {
		n.pending = null;
		var l = (o = o.next);
		do (i = e(i, l.action)), (l = l.next);
		while (l !== o);
		Pt(i, t.memoizedState) || (Ze = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
	}
	return [i, r];
}
function Wp() {}
function Kp(e, t) {
	var n = ve,
		r = yt(),
		o = t(),
		i = !Pt(r.memoizedState, o);
	if ((i && ((r.memoizedState = o), (Ze = !0)), (r = r.queue), Du(Gp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ($e !== null && $e.memoizedState.tag & 1))) {
		if (((n.flags |= 2048), Xo(9, Yp.bind(null, n, r, o, t), void 0, null), Re === null)) throw Error(T(349));
		Xn & 30 || Qp(n, t, o);
	}
	return o;
}
function Qp(e, t, n) {
	(e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = ve.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yp(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Xp(t) && Zp(e);
}
function Gp(e, t, n) {
	return n(function () {
		Xp(t) && Zp(e);
	});
}
function Xp(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Pt(e, n);
	} catch {
		return !0;
	}
}
function Zp(e) {
	var t = Gt(e, 1);
	t !== null && bt(t, e, 1, -1);
}
function sd(e) {
	var t = Lt();
	return typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Go, lastRenderedState: e }), (t.queue = e), (e = e.dispatch = Ey.bind(null, ve, e)), [t.memoizedState, e];
}
function Xo(e, t, n, r) {
	return (e = { tag: e, create: t, destroy: n, deps: r, next: null }), (t = ve.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.lastEffect = e.next = e)) : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))), e;
}
function Jp() {
	return yt().memoizedState;
}
function Yi(e, t, n, r) {
	var o = Lt();
	(ve.flags |= e), (o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Il(e, t, n, r) {
	var o = yt();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (Ce !== null) {
		var l = Ce.memoizedState;
		if (((i = l.destroy), r !== null && Nu(r, l.deps))) {
			o.memoizedState = Xo(t, n, i, r);
			return;
		}
	}
	(ve.flags |= e), (o.memoizedState = Xo(1 | t, n, i, r));
}
function ud(e, t) {
	return Yi(8390656, 8, e, t);
}
function Du(e, t) {
	return Il(2048, 8, e, t);
}
function qp(e, t) {
	return Il(4, 2, e, t);
}
function eh(e, t) {
	return Il(4, 4, e, t);
}
function th(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function nh(e, t, n) {
	return (n = n != null ? n.concat([e]) : null), Il(4, 4, th.bind(null, t, e), n);
}
function Ou() {}
function rh(e, t) {
	var n = yt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Nu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function oh(e, t) {
	var n = yt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Nu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ih(e, t, n) {
	return Xn & 21 ? (Pt(n, t) || ((n = cp()), (ve.lanes |= n), (Zn |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function xy(e, t) {
	var n = ie;
	(ie = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Ra.transition;
	Ra.transition = {};
	try {
		e(!1), t();
	} finally {
		(ie = n), (Ra.transition = r);
	}
}
function lh() {
	return yt().memoizedState;
}
function Sy(e, t, n) {
	var r = kn(e);
	if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ah(e))) sh(t, n);
	else if (((n = Bp(e, t, n, r)), n !== null)) {
		var o = Ke();
		bt(n, e, r, o), uh(n, t, r);
	}
}
function Ey(e, t, n) {
	var r = kn(e),
		o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (ah(e)) sh(t, o);
	else {
		var i = e.alternate;
		if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
			try {
				var l = t.lastRenderedState,
					a = i(l, n);
				if (((o.hasEagerState = !0), (o.eagerState = a), Pt(a, l))) {
					var s = t.interleaved;
					s === null ? ((o.next = o), bu(t)) : ((o.next = s.next), (s.next = o)), (t.interleaved = o);
					return;
				}
			} catch {
			} finally {
			}
		(n = Bp(e, t, o, r)), n !== null && ((o = Ke()), bt(n, e, r, o), uh(n, t, r));
	}
}
function ah(e) {
	var t = e.alternate;
	return e === ve || (t !== null && t === ve);
}
function sh(e, t) {
	No = wl = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function uh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), du(e, n);
	}
}
var xl = { readContext: gt, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 },
	Cy = {
		readContext: gt,
		useCallback: function (e, t) {
			return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: gt,
		useEffect: ud,
		useImperativeHandle: function (e, t, n) {
			return (n = n != null ? n.concat([e]) : null), Yi(4194308, 4, th.bind(null, t, e), n);
		},
		useLayoutEffect: function (e, t) {
			return Yi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Yi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Lt();
			return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
		},
		useReducer: function (e, t, n) {
			var r = Lt();
			return (t = n !== void 0 ? n(t) : t), (r.memoizedState = r.baseState = t), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }), (r.queue = e), (e = e.dispatch = Sy.bind(null, ve, e)), [r.memoizedState, e];
		},
		useRef: function (e) {
			var t = Lt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: sd,
		useDebugValue: Ou,
		useDeferredValue: function (e) {
			return (Lt().memoizedState = e);
		},
		useTransition: function () {
			var e = sd(!1),
				t = e[0];
			return (e = xy.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ve,
				o = Lt();
			if (pe) {
				if (n === void 0) throw Error(T(407));
				n = n();
			} else {
				if (((n = t()), Re === null)) throw Error(T(349));
				Xn & 30 || Qp(r, t, n);
			}
			o.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (o.queue = i), ud(Gp.bind(null, r, i, e), [e]), (r.flags |= 2048), Xo(9, Yp.bind(null, r, i, n, t), void 0, null), n;
		},
		useId: function () {
			var e = Lt(),
				t = Re.identifierPrefix;
			if (pe) {
				var n = Vt,
					r = Ht;
				(n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n), (t = ':' + t + 'R' + n), (n = Yo++), 0 < n && (t += 'H' + n.toString(32)), (t += ':');
			} else (n = wy++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	ky = {
		readContext: gt,
		useCallback: rh,
		useContext: gt,
		useEffect: Du,
		useImperativeHandle: nh,
		useInsertionEffect: qp,
		useLayoutEffect: eh,
		useMemo: oh,
		useReducer: _a,
		useRef: Jp,
		useState: function () {
			return _a(Go);
		},
		useDebugValue: Ou,
		useDeferredValue: function (e) {
			var t = yt();
			return ih(t, Ce.memoizedState, e);
		},
		useTransition: function () {
			var e = _a(Go)[0],
				t = yt().memoizedState;
			return [e, t];
		},
		useMutableSource: Wp,
		useSyncExternalStore: Kp,
		useId: lh,
		unstable_isNewReconciler: !1,
	},
	by = {
		readContext: gt,
		useCallback: rh,
		useContext: gt,
		useEffect: Du,
		useImperativeHandle: nh,
		useInsertionEffect: qp,
		useLayoutEffect: eh,
		useMemo: oh,
		useReducer: Na,
		useRef: Jp,
		useState: function () {
			return Na(Go);
		},
		useDebugValue: Ou,
		useDeferredValue: function (e) {
			var t = yt();
			return Ce === null ? (t.memoizedState = e) : ih(t, Ce.memoizedState, e);
		},
		useTransition: function () {
			var e = Na(Go)[0],
				t = yt().memoizedState;
			return [e, t];
		},
		useMutableSource: Wp,
		useSyncExternalStore: Kp,
		useId: lh,
		unstable_isNewReconciler: !1,
	};
function xt(e, t) {
	if (e && e.defaultProps) {
		(t = ge({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function bs(e, t, n, r) {
	(t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : ge({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ul = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? nr(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ke(),
			o = kn(e),
			i = Wt(r, o);
		(i.payload = t), n != null && (i.callback = n), (t = En(e, i, o)), t !== null && (bt(t, e, o, r), Ki(t, e, o));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ke(),
			o = kn(e),
			i = Wt(r, o);
		(i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = En(e, i, o)), t !== null && (bt(t, e, o, r), Ki(t, e, o));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Ke(),
			r = kn(e),
			o = Wt(n, r);
		(o.tag = 2), t != null && (o.callback = t), (t = En(e, o, r)), t !== null && (bt(t, e, r, n), Ki(t, e, r));
	},
};
function cd(e, t, n, r, o, i, l) {
	return (e = e.stateNode), typeof e.shouldComponentUpdate == 'function' ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Bo(n, r) || !Bo(o, i) : !0;
}
function ch(e, t, n) {
	var r = !1,
		o = $n,
		i = t.contextType;
	return typeof i == 'object' && i !== null ? (i = gt(i)) : ((o = qe(t) ? Yn : Ie.current), (r = t.contextTypes), (i = (r = r != null) ? jr(e, o) : $n)), (t = new t(n, i)), (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null), (t.updater = Ul), (e.stateNode = t), (t._reactInternals = e), r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)), t;
}
function dd(e, t, n, r) {
	(e = t.state), typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
}
function Ps(e, t, n, r) {
	var o = e.stateNode;
	(o.props = n), (o.state = e.memoizedState), (o.refs = {}), Pu(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null ? (o.context = gt(i)) : ((i = qe(t) ? Yn : Ie.current), (o.context = jr(e, i))), (o.state = e.memoizedState), (i = t.getDerivedStateFromProps), typeof i == 'function' && (bs(e, t, i, n), (o.state = e.memoizedState)), typeof t.getDerivedStateFromProps == 'function' || typeof o.getSnapshotBeforeUpdate == 'function' || (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') || ((t = o.state), typeof o.componentWillMount == 'function' && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(), t !== o.state && Ul.enqueueReplaceState(o, o.state, null), gl(e, n, o, r), (o.state = e.memoizedState)), typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ur(e, t) {
	try {
		var n = '',
			r = t;
		do (n += qv(r)), (r = r.return);
		while (r);
		var o = n;
	} catch (i) {
		o =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: o, digest: null };
}
function Ta(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $s(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Py = typeof WeakMap == 'function' ? WeakMap : Map;
function dh(e, t, n) {
	(n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			El || ((El = !0), (js = r)), $s(e, t);
		}),
		n
	);
}
function fh(e, t, n) {
	(n = Wt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var o = t.value;
		(n.payload = function () {
			return r(o);
		}),
			(n.callback = function () {
				$s(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				$s(e, t), typeof r != 'function' && (Cn === null ? (Cn = new Set([this])) : Cn.add(this));
				var l = t.stack;
				this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
			}),
		n
	);
}
function fd(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Py();
		var o = new Set();
		r.set(t, o);
	} else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
	o.has(n) || (o.add(n), (e = Iy.bind(null, e, t, n)), t.then(e, e));
}
function pd(e) {
	do {
		var t;
		if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function hd(e, t, n, r, o) {
	return e.mode & 1 ? ((e.flags |= 65536), (e.lanes = o), e) : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Wt(-1, 1)), (t.tag = 2), En(n, t, 1))), (n.lanes |= 1)), e);
}
var $y = en.ReactCurrentOwner,
	Ze = !1;
function We(e, t, n, r) {
	t.child = e === null ? Up(t, null, n, r) : Fr(t, e.child, n, r);
}
function md(e, t, n, r, o) {
	n = n.render;
	var i = t.ref;
	return Lr(t, o), (r = Tu(e, t, n, r, i, o)), (n = Lu()), e !== null && !Ze ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Xt(e, t, o)) : (pe && n && wu(t), (t.flags |= 1), We(e, t, r, o), t.child);
}
function vd(e, t, n, r, o) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' && !Bu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? ((t.tag = 15), (t.type = i), ph(e, t, i, r, o)) : ((e = Ji(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
	}
	if (((i = e.child), !(e.lanes & o))) {
		var l = i.memoizedProps;
		if (((n = n.compare), (n = n !== null ? n : Bo), n(l, r) && e.ref === t.ref)) return Xt(e, t, o);
	}
	return (t.flags |= 1), (e = bn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function ph(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (Bo(i, r) && e.ref === t.ref)
			if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Ze = !0);
			else return (t.lanes = e.lanes), Xt(e, t, o);
	}
	return Rs(e, t, n, r, o);
}
function hh(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ae(Pr, nt), (nt |= n);
		else {
			if (!(n & 1073741824)) return (e = i !== null ? i.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), ae(Pr, nt), (nt |= e), null;
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : n), ae(Pr, nt), (nt |= r);
		}
	else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ae(Pr, nt), (nt |= r);
	return We(e, t, o, n), t.child;
}
function mh(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Rs(e, t, n, r, o) {
	var i = qe(n) ? Yn : Ie.current;
	return (i = jr(t, i)), Lr(t, o), (n = Tu(e, t, n, r, i, o)), (r = Lu()), e !== null && !Ze ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Xt(e, t, o)) : (pe && r && wu(t), (t.flags |= 1), We(e, t, n, o), t.child);
}
function gd(e, t, n, r, o) {
	if (qe(n)) {
		var i = !0;
		fl(t);
	} else i = !1;
	if ((Lr(t, o), t.stateNode === null)) Gi(e, t), ch(t, n, r), Ps(t, n, r, o), (r = !0);
	else if (e === null) {
		var l = t.stateNode,
			a = t.memoizedProps;
		l.props = a;
		var s = l.context,
			u = n.contextType;
		typeof u == 'object' && u !== null ? (u = gt(u)) : ((u = qe(n) ? Yn : Ie.current), (u = jr(t, u)));
		var c = n.getDerivedStateFromProps,
			d = typeof c == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
		d || (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') || ((a !== r || s !== u) && dd(t, l, r, u)), (pn = !1);
		var p = t.memoizedState;
		(l.state = p), gl(t, r, l, o), (s = t.memoizedState), a !== r || p !== s || Je.current || pn ? (typeof c == 'function' && (bs(t, n, c, r), (s = t.memoizedState)), (a = pn || cd(t, n, a, r, p, s, u)) ? (d || (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') || (typeof l.componentWillMount == 'function' && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == 'function' && (t.flags |= 4194308)) : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)), (l.props = r), (l.state = s), (l.context = u), (r = a)) : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
	} else {
		(l = t.stateNode), Hp(e, t), (a = t.memoizedProps), (u = t.type === t.elementType ? a : xt(t.type, a)), (l.props = u), (d = t.pendingProps), (p = l.context), (s = n.contextType), typeof s == 'object' && s !== null ? (s = gt(s)) : ((s = qe(n) ? Yn : Ie.current), (s = jr(t, s)));
		var y = n.getDerivedStateFromProps;
		(c = typeof y == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') || (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') || ((a !== d || p !== s) && dd(t, l, r, s)), (pn = !1), (p = t.memoizedState), (l.state = p), gl(t, r, l, o);
		var w = t.memoizedState;
		a !== d || p !== w || Je.current || pn ? (typeof y == 'function' && (bs(t, n, y, r), (w = t.memoizedState)), (u = pn || cd(t, n, u, r, p, w, s) || !1) ? (c || (typeof l.UNSAFE_componentWillUpdate != 'function' && typeof l.componentWillUpdate != 'function') || (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, w, s), typeof l.UNSAFE_componentWillUpdate == 'function' && l.UNSAFE_componentWillUpdate(r, w, s)), typeof l.componentDidUpdate == 'function' && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024)) : (typeof l.componentDidUpdate != 'function' || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != 'function' || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = r), (t.memoizedState = w)), (l.props = r), (l.state = w), (l.context = s), (r = u)) : (typeof l.componentDidUpdate != 'function' || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != 'function' || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024), (r = !1));
	}
	return _s(e, t, n, r, i, o);
}
function _s(e, t, n, r, o, i) {
	mh(e, t);
	var l = (t.flags & 128) !== 0;
	if (!r && !l) return o && nd(t, n, !1), Xt(e, t, i);
	(r = t.stateNode), ($y.current = t);
	var a = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (t.flags |= 1), e !== null && l ? ((t.child = Fr(t, e.child, null, i)), (t.child = Fr(t, null, a, i))) : We(e, t, a, i), (t.memoizedState = r.state), o && nd(t, n, !0), t.child;
}
function vh(e) {
	var t = e.stateNode;
	t.pendingContext ? td(e, t.pendingContext, t.pendingContext !== t.context) : t.context && td(e, t.context, !1), $u(e, t.containerInfo);
}
function yd(e, t, n, r, o) {
	return zr(), Su(o), (t.flags |= 256), We(e, t, n, r), t.child;
}
var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ts(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function gh(e, t, n) {
	var r = t.pendingProps,
		o = me.current,
		i = !1,
		l = (t.flags & 128) !== 0,
		a;
	if (((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1), ae(me, o & 1), e === null)) return Cs(t), (e = t.memoizedState), e !== null && ((e = e.dehydrated), e !== null) ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null) : ((l = r.children), (e = r.fallback), i ? ((r = t.mode), (i = t.child), (l = { mode: 'hidden', children: l }), !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = Vl(l, r, 0, null)), (e = Kn(e, r, n, null)), (i.return = t), (e.return = t), (i.sibling = e), (t.child = i), (t.child.memoizedState = Ts(n)), (t.memoizedState = Ns), e) : Mu(t, l));
	if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return Ry(e, t, l, r, a, o, n);
	if (i) {
		(i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
		var s = { mode: 'hidden', children: r.children };
		return !(l & 1) && t.child !== o ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null)) : ((r = bn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)), a !== null ? (i = bn(a, i)) : ((i = Kn(i, l, n, null)), (i.flags |= 2)), (i.return = t), (r.return = t), (r.sibling = i), (t.child = r), (r = i), (i = t.child), (l = e.child.memoizedState), (l = l === null ? Ts(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }), (i.memoizedState = l), (i.childLanes = e.childLanes & ~n), (t.memoizedState = Ns), r;
	}
	return (i = e.child), (e = i.sibling), (r = bn(i, { mode: 'visible', children: r.children })), !(t.mode & 1) && (r.lanes = n), (r.return = t), (r.sibling = null), e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)), (t.child = r), (t.memoizedState = null), r;
}
function Mu(e, t) {
	return (t = Vl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ni(e, t, n, r) {
	return r !== null && Su(r), Fr(t, e.child, null, n), (e = Mu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function Ry(e, t, n, r, o, i, l) {
	if (n) return t.flags & 256 ? ((t.flags &= -257), (r = Ta(Error(T(422)))), Ni(e, t, l, r)) : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null) : ((i = r.fallback), (o = t.mode), (r = Vl({ mode: 'visible', children: r.children }, o, 0, null)), (i = Kn(i, o, l, null)), (i.flags |= 2), (r.return = t), (i.return = t), (r.sibling = i), (t.child = r), t.mode & 1 && Fr(t, e.child, null, l), (t.child.memoizedState = Ts(l)), (t.memoizedState = Ns), i);
	if (!(t.mode & 1)) return Ni(e, t, l, null);
	if (o.data === '$!') {
		if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (i = Error(T(419))), (r = Ta(i, r, void 0)), Ni(e, t, l, r);
	}
	if (((a = (l & e.childLanes) !== 0), Ze || a)) {
		if (((r = Re), r !== null)) {
			switch (l & -l) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0;
			}
			(o = o & (r.suspendedLanes | l) ? 0 : o), o !== 0 && o !== i.retryLane && ((i.retryLane = o), Gt(e, o), bt(r, e, o, -1));
		}
		return Uu(), (r = Ta(Error(T(421)))), Ni(e, t, l, r);
	}
	return o.data === '$?' ? ((t.flags |= 128), (t.child = e.child), (t = Uy.bind(null, e)), (o._reactRetry = t), null) : ((e = i.treeContext), (ot = Sn(o.nextSibling)), (it = t), (pe = !0), (Ct = null), e !== null && ((ft[pt++] = Ht), (ft[pt++] = Vt), (ft[pt++] = Gn), (Ht = e.id), (Vt = e.overflow), (Gn = t)), (t = Mu(t, r.children)), (t.flags |= 4096), t);
}
function wd(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ks(e.return, t, n);
}
function La(e, t, n, r, o) {
	var i = e.memoizedState;
	i === null ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o }) : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = o));
}
function yh(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail;
	if ((We(e, t, r.children, n), (r = me.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && wd(e, n, t);
				else if (e.tag === 19) wd(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((ae(me, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (o) {
			case 'forwards':
				for (n = t.child, o = null; n !== null; ) (e = n.alternate), e !== null && yl(e) === null && (o = n), (n = n.sibling);
				(n = o), n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), La(t, !1, o, n, i);
				break;
			case 'backwards':
				for (n = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && yl(e) === null)) {
						t.child = o;
						break;
					}
					(e = o.sibling), (o.sibling = n), (n = o), (o = e);
				}
				La(t, !0, n, null, i);
				break;
			case 'together':
				La(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Gi(e, t) {
	!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xt(e, t, n) {
	if ((e !== null && (t.dependencies = e.dependencies), (Zn |= t.lanes), !(n & t.childLanes))) return null;
	if (e !== null && t.child !== e.child) throw Error(T(153));
	if (t.child !== null) {
		for (e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = bn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function _y(e, t, n) {
	switch (t.tag) {
		case 3:
			vh(t), zr();
			break;
		case 5:
			Vp(t);
			break;
		case 1:
			qe(t.type) && fl(t);
			break;
		case 4:
			$u(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value;
			ae(ml, r._currentValue), (r._currentValue = o);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null)) return r.dehydrated !== null ? (ae(me, me.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? gh(e, t, n) : (ae(me, me.current & 1), (e = Xt(e, t, n)), e !== null ? e.sibling : null);
			ae(me, me.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return yh(e, t, n);
				t.flags |= 128;
			}
			if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), ae(me, me.current), r)) break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), hh(e, t, n);
	}
	return Xt(e, t, n);
}
var wh, Ls, xh, Sh;
wh = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Ls = function () {};
xh = function (e, t, n, r) {
	var o = e.memoizedProps;
	if (o !== r) {
		(e = t.stateNode), Un(jt.current);
		var i = null;
		switch (n) {
			case 'input':
				(o = es(e, o)), (r = es(e, r)), (i = []);
				break;
			case 'select':
				(o = ge({}, o, { value: void 0 })), (r = ge({}, r, { value: void 0 })), (i = []);
				break;
			case 'textarea':
				(o = rs(e, o)), (r = rs(e, r)), (i = []);
				break;
			default:
				typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = cl);
		}
		is(n, r);
		var l;
		n = null;
		for (u in o)
			if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
				if (u === 'style') {
					var a = o[u];
					for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
				} else u !== 'dangerouslySetInnerHTML' && u !== 'children' && u !== 'suppressContentEditableWarning' && u !== 'suppressHydrationWarning' && u !== 'autoFocus' && (Mo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
		for (u in r) {
			var s = r[u];
			if (((a = o != null ? o[u] : void 0), r.hasOwnProperty(u) && s !== a && (s != null || a != null)))
				if (u === 'style')
					if (a) {
						for (l in a) !a.hasOwnProperty(l) || (s && s.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
						for (l in s) s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}), (n[l] = s[l]));
					} else n || (i || (i = []), i.push(u, n)), (n = s);
				else u === 'dangerouslySetInnerHTML' ? ((s = s ? s.__html : void 0), (a = a ? a.__html : void 0), s != null && a !== s && (i = i || []).push(u, s)) : u === 'children' ? (typeof s != 'string' && typeof s != 'number') || (i = i || []).push(u, '' + s) : u !== 'suppressContentEditableWarning' && u !== 'suppressHydrationWarning' && (Mo.hasOwnProperty(u) ? (s != null && u === 'onScroll' && ue('scroll', e), i || a === s || (i = [])) : (i = i || []).push(u, s));
		}
		n && (i = i || []).push('style', n);
		var u = i;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Sh = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function ho(e, t) {
	if (!pe)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
				r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
		}
}
function ze(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t) for (var o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags & 14680064), (r |= o.flags & 14680064), (o.return = e), (o = o.sibling);
	else for (o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ny(e, t, n) {
	var r = t.pendingProps;
	switch ((xu(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return ze(t), null;
		case 1:
			return qe(t.type) && dl(), ze(t), null;
		case 3:
			return (r = t.stateNode), Ir(), ce(Je), ce(Ie), _u(), r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (e === null || e.child === null) && (Ri(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), Ct !== null && (Is(Ct), (Ct = null)))), Ls(e, t), ze(t), null;
		case 5:
			Ru(t);
			var o = Un(Qo.current);
			if (((n = t.type), e !== null && t.stateNode != null)) xh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(T(166));
					return ze(t), null;
				}
				if (((e = Un(jt.current)), Ri(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[Dt] = t), (r[Wo] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							ue('cancel', r), ue('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							ue('load', r);
							break;
						case 'video':
						case 'audio':
							for (o = 0; o < ko.length; o++) ue(ko[o], r);
							break;
						case 'source':
							ue('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							ue('error', r), ue('load', r);
							break;
						case 'details':
							ue('toggle', r);
							break;
						case 'input':
							Rc(r, i), ue('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }), ue('invalid', r);
							break;
						case 'textarea':
							Nc(r, i), ue('invalid', r);
					}
					is(n, i), (o = null);
					for (var l in i)
						if (i.hasOwnProperty(l)) {
							var a = i[l];
							l === 'children' ? (typeof a == 'string' ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && $i(r.textContent, a, e), (o = ['children', a])) : typeof a == 'number' && r.textContent !== '' + a && (i.suppressHydrationWarning !== !0 && $i(r.textContent, a, e), (o = ['children', '' + a]))) : Mo.hasOwnProperty(l) && a != null && l === 'onScroll' && ue('scroll', r);
						}
					switch (n) {
						case 'input':
							wi(r), _c(r, i, !0);
							break;
						case 'textarea':
							wi(r), Tc(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = cl);
					}
					(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(l = o.nodeType === 9 ? o : o.ownerDocument), e === 'http://www.w3.org/1999/xhtml' && (e = Gf(n)), e === 'http://www.w3.org/1999/xhtml' ? (n === 'script' ? ((e = l.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild))) : typeof r.is == 'string' ? (e = l.createElement(n, { is: r.is })) : ((e = l.createElement(n)), n === 'select' && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))) : (e = l.createElementNS(e, n)), (e[Dt] = t), (e[Wo] = r), wh(e, t, !1, !1), (t.stateNode = e);
					e: {
						switch (((l = ls(n, r)), n)) {
							case 'dialog':
								ue('cancel', e), ue('close', e), (o = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								ue('load', e), (o = r);
								break;
							case 'video':
							case 'audio':
								for (o = 0; o < ko.length; o++) ue(ko[o], e);
								o = r;
								break;
							case 'source':
								ue('error', e), (o = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								ue('error', e), ue('load', e), (o = r);
								break;
							case 'details':
								ue('toggle', e), (o = r);
								break;
							case 'input':
								Rc(e, r), (o = es(e, r)), ue('invalid', e);
								break;
							case 'option':
								o = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }), (o = ge({}, r, { value: void 0 })), ue('invalid', e);
								break;
							case 'textarea':
								Nc(e, r), (o = rs(e, r)), ue('invalid', e);
								break;
							default:
								o = r;
						}
						is(n, o), (a = o);
						for (i in a)
							if (a.hasOwnProperty(i)) {
								var s = a[i];
								i === 'style' ? Jf(e, s) : i === 'dangerouslySetInnerHTML' ? ((s = s ? s.__html : void 0), s != null && Xf(e, s)) : i === 'children' ? (typeof s == 'string' ? (n !== 'textarea' || s !== '') && Ao(e, s) : typeof s == 'number' && Ao(e, '' + s)) : i !== 'suppressContentEditableWarning' && i !== 'suppressHydrationWarning' && i !== 'autoFocus' && (Mo.hasOwnProperty(i) ? s != null && i === 'onScroll' && ue('scroll', e) : s != null && iu(e, i, s, l));
							}
						switch (n) {
							case 'input':
								wi(e), _c(e, r, !1);
								break;
							case 'textarea':
								wi(e), Tc(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + Pn(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple), (i = r.value), i != null ? Rr(e, !!r.multiple, i, !1) : r.defaultValue != null && Rr(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof o.onClick == 'function' && (e.onclick = cl);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return ze(t), null;
		case 6:
			if (e && t.stateNode != null) Sh(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(T(166));
				if (((n = Un(Qo.current)), Un(jt.current), Ri(t))) {
					if (((r = t.stateNode), (n = t.memoizedProps), (r[Dt] = t), (i = r.nodeValue !== n) && ((e = it), e !== null)))
						switch (e.tag) {
							case 3:
								$i(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 && $i(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Dt] = t), (t.stateNode = r);
			}
			return ze(t), null;
		case 13:
			if ((ce(me), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
				if (pe && ot !== null && t.mode & 1 && !(t.flags & 128)) Fp(), zr(), (t.flags |= 98560), (i = !1);
				else if (((i = Ri(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(T(318));
						if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(T(317));
						i[Dt] = t;
					} else zr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					ze(t), (i = !1);
				} else Ct !== null && (Is(Ct), (Ct = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128 ? ((t.lanes = n), t) : ((r = r !== null), r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || me.current & 1 ? ke === 0 && (ke = 3) : Uu())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
		case 4:
			return Ir(), Ls(e, t), e === null && Ho(t.stateNode.containerInfo), ze(t), null;
		case 10:
			return ku(t.type._context), ze(t), null;
		case 17:
			return qe(t.type) && dl(), ze(t), null;
		case 19:
			if ((ce(me), (i = t.memoizedState), i === null)) return ze(t), null;
			if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
				if (r) ho(i, !1);
				else {
					if (ke !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((l = yl(e)), l !== null)) {
								for (t.flags |= 128, ho(i, !1), r = l.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) (i = n), (e = r), (i.flags &= 14680066), (l = i.alternate), l === null ? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null)) : ((i.childLanes = l.childLanes), (i.lanes = l.lanes), (i.child = l.child), (i.subtreeFlags = 0), (i.deletions = null), (i.memoizedProps = l.memoizedProps), (i.memoizedState = l.memoizedState), (i.updateQueue = l.updateQueue), (i.type = l.type), (e = l.dependencies), (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })), (n = n.sibling);
								return ae(me, (me.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null && xe() > Br && ((t.flags |= 128), (r = !0), ho(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = yl(l)), e !== null)) {
						if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), ho(i, !0), i.tail === null && i.tailMode === 'hidden' && !l.alternate && !pe)) return ze(t), null;
					} else 2 * xe() - i.renderingStartTime > Br && n !== 1073741824 && ((t.flags |= 128), (r = !0), ho(i, !1), (t.lanes = 4194304));
				i.isBackwards ? ((l.sibling = t.child), (t.child = l)) : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
			}
			return i.tail !== null ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = xe()), (t.sibling = null), (n = me.current), ae(me, r ? (n & 1) | 2 : n & 1), t) : (ze(t), null);
		case 22:
		case 23:
			return Iu(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(T(156, t.tag));
}
function Ty(e, t) {
	switch ((xu(t), t.tag)) {
		case 1:
			return qe(t.type) && dl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
		case 3:
			return Ir(), ce(Je), ce(Ie), _u(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
		case 5:
			return Ru(t), null;
		case 13:
			if ((ce(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(T(340));
				zr();
			}
			return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
		case 19:
			return ce(me), null;
		case 4:
			return Ir(), null;
		case 10:
			return ku(t.type._context), null;
		case 22:
		case 23:
			return Iu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Ti = !1,
	Fe = !1,
	Ly = typeof WeakSet == 'function' ? WeakSet : Set,
	A = null;
function br(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				we(e, t, r);
			}
		else n.current = null;
}
function Ds(e, t, n) {
	try {
		n();
	} catch (r) {
		we(e, t, r);
	}
}
var xd = !1;
function Dy(e, t) {
	if (((vs = al), (e = Pp()), yu(e))) {
		if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var o = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var l = 0,
						a = -1,
						s = -1,
						u = 0,
						c = 0,
						d = e,
						p = null;
					t: for (;;) {
						for (var y; d !== n || (o !== 0 && d.nodeType !== 3) || (a = l + o), d !== i || (r !== 0 && d.nodeType !== 3) || (s = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (y = d.firstChild) !== null; ) (p = d), (d = y);
						for (;;) {
							if (d === e) break t;
							if ((p === n && ++u === o && (a = l), p === i && ++c === r && (s = l), (y = d.nextSibling) !== null)) break;
							(d = p), (p = d.parentNode);
						}
						d = y;
					}
					n = a === -1 || s === -1 ? null : { start: a, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (gs = { focusedElem: e, selectionRange: n }, al = !1, A = t; A !== null; )
		if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (A = e);
		else
			for (; A !== null; ) {
				t = A;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var v = w.memoizedProps,
										S = w.memoizedState,
										m = t.stateNode,
										h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : xt(t.type, v), S);
									m.__reactInternalSnapshotBeforeUpdate = h;
								}
								break;
							case 3:
								var g = t.stateNode.containerInfo;
								g.nodeType === 1 ? (g.textContent = '') : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(T(163));
						}
				} catch (E) {
					we(t, t.return, E);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (A = e);
					break;
				}
				A = t.return;
			}
	return (w = xd), (xd = !1), w;
}
function To(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var o = (r = r.next);
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				(o.destroy = void 0), i !== void 0 && Ds(t, n, i);
			}
			o = o.next;
		} while (o !== r);
	}
}
function Bl(e, t) {
	if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Os(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function Eh(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Eh(t)), (e.child = null), (e.deletions = null), (e.sibling = null), e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Dt], delete t[Wo], delete t[xs], delete t[my], delete t[vy])), (e.stateNode = null), (e.return = null), (e.dependencies = null), (e.memoizedProps = null), (e.memoizedState = null), (e.pendingProps = null), (e.stateNode = null), (e.updateQueue = null);
}
function Ch(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sd(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Ch(e.return)) return null;
			e = e.return;
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Ms(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) (e = e.stateNode), t ? (n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t)) : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = cl));
	else if (r !== 4 && ((e = e.child), e !== null)) for (Ms(e, t, n), e = e.sibling; e !== null; ) Ms(e, t, n), (e = e.sibling);
}
function As(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null)) for (As(e, t, n), e = e.sibling; e !== null; ) As(e, t, n), (e = e.sibling);
}
var Le = null,
	St = !1;
function an(e, t, n) {
	for (n = n.child; n !== null; ) kh(e, t, n), (n = n.sibling);
}
function kh(e, t, n) {
	if (At && typeof At.onCommitFiberUnmount == 'function')
		try {
			At.onCommitFiberUnmount(Ol, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Fe || br(n, t);
		case 6:
			var r = Le,
				o = St;
			(Le = null), an(e, t, n), (Le = r), (St = o), Le !== null && (St ? ((e = Le), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
			break;
		case 18:
			Le !== null && (St ? ((e = Le), (n = n.stateNode), e.nodeType === 8 ? ba(e.parentNode, n) : e.nodeType === 1 && ba(e, n), Io(e)) : ba(Le, n.stateNode));
			break;
		case 4:
			(r = Le), (o = St), (Le = n.stateNode.containerInfo), (St = !0), an(e, t, n), (Le = r), (St = o);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!Fe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
				o = r = r.next;
				do {
					var i = o,
						l = i.destroy;
					(i = i.tag), l !== void 0 && (i & 2 || i & 4) && Ds(n, t, l), (o = o.next);
				} while (o !== r);
			}
			an(e, t, n);
			break;
		case 1:
			if (!Fe && (br(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
				try {
					(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
				} catch (a) {
					we(n, t, a);
				}
			an(e, t, n);
			break;
		case 21:
			an(e, t, n);
			break;
		case 22:
			n.mode & 1 ? ((Fe = (r = Fe) || n.memoizedState !== null), an(e, t, n), (Fe = r)) : an(e, t, n);
			break;
		default:
			an(e, t, n);
	}
}
function Ed(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Ly()),
			t.forEach(function (r) {
				var o = By.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(o, o));
			});
	}
}
function wt(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			try {
				var i = e,
					l = t,
					a = l;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(Le = a.stateNode), (St = !1);
							break e;
						case 3:
							(Le = a.stateNode.containerInfo), (St = !0);
							break e;
						case 4:
							(Le = a.stateNode.containerInfo), (St = !0);
							break e;
					}
					a = a.return;
				}
				if (Le === null) throw Error(T(160));
				kh(i, l, o), (Le = null), (St = !1);
				var s = o.alternate;
				s !== null && (s.return = null), (o.return = null);
			} catch (u) {
				we(o, t, u);
			}
		}
	if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) bh(t, e), (t = t.sibling);
}
function bh(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((wt(t, e), Tt(e), r & 4)) {
				try {
					To(3, e, e.return), Bl(3, e);
				} catch (v) {
					we(e, e.return, v);
				}
				try {
					To(5, e, e.return);
				} catch (v) {
					we(e, e.return, v);
				}
			}
			break;
		case 1:
			wt(t, e), Tt(e), r & 512 && n !== null && br(n, n.return);
			break;
		case 5:
			if ((wt(t, e), Tt(e), r & 512 && n !== null && br(n, n.return), e.flags & 32)) {
				var o = e.stateNode;
				try {
					Ao(o, '');
				} catch (v) {
					we(e, e.return, v);
				}
			}
			if (r & 4 && ((o = e.stateNode), o != null)) {
				var i = e.memoizedProps,
					l = n !== null ? n.memoizedProps : i,
					a = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						a === 'input' && i.type === 'radio' && i.name != null && Qf(o, i), ls(a, l);
						var u = ls(a, i);
						for (l = 0; l < s.length; l += 2) {
							var c = s[l],
								d = s[l + 1];
							c === 'style' ? Jf(o, d) : c === 'dangerouslySetInnerHTML' ? Xf(o, d) : c === 'children' ? Ao(o, d) : iu(o, c, d, u);
						}
						switch (a) {
							case 'input':
								ts(o, i);
								break;
							case 'textarea':
								Yf(o, i);
								break;
							case 'select':
								var p = o._wrapperState.wasMultiple;
								o._wrapperState.wasMultiple = !!i.multiple;
								var y = i.value;
								y != null ? Rr(o, !!i.multiple, y, !1) : p !== !!i.multiple && (i.defaultValue != null ? Rr(o, !!i.multiple, i.defaultValue, !0) : Rr(o, !!i.multiple, i.multiple ? [] : '', !1));
						}
						o[Wo] = i;
					} catch (v) {
						we(e, e.return, v);
					}
			}
			break;
		case 6:
			if ((wt(t, e), Tt(e), r & 4)) {
				if (e.stateNode === null) throw Error(T(162));
				(o = e.stateNode), (i = e.memoizedProps);
				try {
					o.nodeValue = i;
				} catch (v) {
					we(e, e.return, v);
				}
			}
			break;
		case 3:
			if ((wt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
				try {
					Io(t.containerInfo);
				} catch (v) {
					we(e, e.return, v);
				}
			break;
		case 4:
			wt(t, e), Tt(e);
			break;
		case 13:
			wt(t, e), Tt(e), (o = e.child), o.flags & 8192 && ((i = o.memoizedState !== null), (o.stateNode.isHidden = i), !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (zu = xe())), r & 4 && Ed(e);
			break;
		case 22:
			if (((c = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Fe = (u = Fe) || c), wt(t, e), (Fe = u)) : wt(t, e), Tt(e), r & 8192)) {
				if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
					for (A = e, c = e.child; c !== null; ) {
						for (d = A = c; A !== null; ) {
							switch (((p = A), (y = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									To(4, p, p.return);
									break;
								case 1:
									br(p, p.return);
									var w = p.stateNode;
									if (typeof w.componentWillUnmount == 'function') {
										(r = p), (n = p.return);
										try {
											(t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
										} catch (v) {
											we(r, n, v);
										}
									}
									break;
								case 5:
									br(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										kd(d);
										continue;
									}
							}
							y !== null ? ((y.return = p), (A = y)) : kd(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = e; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(o = d.stateNode), u ? ((i = o.style), typeof i.setProperty == 'function' ? i.setProperty('display', 'none', 'important') : (i.display = 'none')) : ((a = d.stateNode), (s = d.memoizedProps.style), (l = s != null && s.hasOwnProperty('display') ? s.display : null), (a.style.display = Zf('display', l)));
							} catch (v) {
								we(e, e.return, v);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = u ? '' : d.memoizedProps;
							} catch (v) {
								we(e, e.return, v);
							}
					} else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			wt(t, e), Tt(e), r & 4 && Ed(e);
			break;
		case 21:
			break;
		default:
			wt(t, e), Tt(e);
	}
}
function Tt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Ch(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(T(160));
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode;
					r.flags & 32 && (Ao(o, ''), (r.flags &= -33));
					var i = Sd(e);
					As(e, i, o);
					break;
				case 3:
				case 4:
					var l = r.stateNode.containerInfo,
						a = Sd(e);
					Ms(e, a, l);
					break;
				default:
					throw Error(T(161));
			}
		} catch (s) {
			we(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Oy(e, t, n) {
	(A = e), Ph(e);
}
function Ph(e, t, n) {
	for (var r = (e.mode & 1) !== 0; A !== null; ) {
		var o = A,
			i = o.child;
		if (o.tag === 22 && r) {
			var l = o.memoizedState !== null || Ti;
			if (!l) {
				var a = o.alternate,
					s = (a !== null && a.memoizedState !== null) || Fe;
				a = Ti;
				var u = Fe;
				if (((Ti = l), (Fe = s) && !u)) for (A = o; A !== null; ) (l = A), (s = l.child), l.tag === 22 && l.memoizedState !== null ? bd(o) : s !== null ? ((s.return = l), (A = s)) : bd(o);
				for (; i !== null; ) (A = i), Ph(i), (i = i.sibling);
				(A = o), (Ti = a), (Fe = u);
			}
			Cd(e);
		} else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : Cd(e);
	}
}
function Cd(e) {
	for (; A !== null; ) {
		var t = A;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Fe || Bl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !Fe)
								if (n === null) r.componentDidMount();
								else {
									var o = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
									r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
								}
							var i = t.updateQueue;
							i !== null && ad(t, i, r);
							break;
						case 3:
							var l = t.updateQueue;
							if (l !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								ad(t, l, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var s = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										s.autoFocus && n.focus();
										break;
									case 'img':
										s.src && (n.src = s.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && Io(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(T(163));
					}
				Fe || (t.flags & 512 && Os(t));
			} catch (p) {
				we(t, t.return, p);
			}
		}
		if (t === e) {
			A = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (A = n);
			break;
		}
		A = t.return;
	}
}
function kd(e) {
	for (; A !== null; ) {
		var t = A;
		if (t === e) {
			A = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (A = n);
			break;
		}
		A = t.return;
	}
}
function bd(e) {
	for (; A !== null; ) {
		var t = A;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Bl(4, t);
					} catch (s) {
						we(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var o = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							we(t, o, s);
						}
					}
					var i = t.return;
					try {
						Os(t);
					} catch (s) {
						we(t, i, s);
					}
					break;
				case 5:
					var l = t.return;
					try {
						Os(t);
					} catch (s) {
						we(t, l, s);
					}
			}
		} catch (s) {
			we(t, t.return, s);
		}
		if (t === e) {
			A = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (A = a);
			break;
		}
		A = t.return;
	}
}
var My = Math.ceil,
	Sl = en.ReactCurrentDispatcher,
	Au = en.ReactCurrentOwner,
	vt = en.ReactCurrentBatchConfig,
	re = 0,
	Re = null,
	Ee = null,
	Oe = 0,
	nt = 0,
	Pr = Ln(0),
	ke = 0,
	Zo = null,
	Zn = 0,
	Hl = 0,
	ju = 0,
	Lo = null,
	Xe = null,
	zu = 0,
	Br = 1 / 0,
	Ut = null,
	El = !1,
	js = null,
	Cn = null,
	Li = !1,
	gn = null,
	Cl = 0,
	Do = 0,
	zs = null,
	Xi = -1,
	Zi = 0;
function Ke() {
	return re & 6 ? xe() : Xi !== -1 ? Xi : (Xi = xe());
}
function kn(e) {
	return e.mode & 1 ? (re & 2 && Oe !== 0 ? Oe & -Oe : yy.transition !== null ? (Zi === 0 && (Zi = cp()), Zi) : ((e = ie), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gp(e.type))), e)) : 1;
}
function bt(e, t, n, r) {
	if (50 < Do) throw ((Do = 0), (zs = null), Error(T(185)));
	oi(e, n, r), (!(re & 2) || e !== Re) && (e === Re && (!(re & 2) && (Hl |= n), ke === 4 && mn(e, Oe)), et(e, r), n === 1 && re === 0 && !(t.mode & 1) && ((Br = xe() + 500), Fl && Dn()));
}
function et(e, t) {
	var n = e.callbackNode;
	yg(e, t);
	var r = ll(e, e === Re ? Oe : 0);
	if (r === 0) n !== null && Oc(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Oc(n), t === 1))
			e.tag === 0 ? gy(Pd.bind(null, e)) : Ap(Pd.bind(null, e)),
				py(function () {
					!(re & 6) && Dn();
				}),
				(n = null);
		else {
			switch (dp(r)) {
				case 1:
					n = cu;
					break;
				case 4:
					n = sp;
					break;
				case 16:
					n = il;
					break;
				case 536870912:
					n = up;
					break;
				default:
					n = il;
			}
			n = Oh(n, $h.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function $h(e, t) {
	if (((Xi = -1), (Zi = 0), re & 6)) throw Error(T(327));
	var n = e.callbackNode;
	if (Dr() && e.callbackNode !== n) return null;
	var r = ll(e, e === Re ? Oe : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
	else {
		t = r;
		var o = re;
		re |= 2;
		var i = _h();
		(Re !== e || Oe !== t) && ((Ut = null), (Br = xe() + 500), Wn(e, t));
		do
			try {
				zy();
				break;
			} catch (a) {
				Rh(e, a);
			}
		while (!0);
		Cu(), (Sl.current = i), (re = o), Ee !== null ? (t = 0) : ((Re = null), (Oe = 0), (t = ke));
	}
	if (t !== 0) {
		if ((t === 2 && ((o = ds(e)), o !== 0 && ((r = o), (t = Fs(e, o)))), t === 1)) throw ((n = Zo), Wn(e, 0), mn(e, r), et(e, xe()), n);
		if (t === 6) mn(e, r);
		else {
			if (((o = e.current.alternate), !(r & 30) && !Ay(o) && ((t = kl(e, r)), t === 2 && ((i = ds(e)), i !== 0 && ((r = i), (t = Fs(e, i)))), t === 1))) throw ((n = Zo), Wn(e, 0), mn(e, r), et(e, xe()), n);
			switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(T(345));
				case 2:
					zn(e, Xe, Ut);
					break;
				case 3:
					if ((mn(e, r), (r & 130023424) === r && ((t = zu + 500 - xe()), 10 < t))) {
						if (ll(e, 0) !== 0) break;
						if (((o = e.suspendedLanes), (o & r) !== r)) {
							Ke(), (e.pingedLanes |= e.suspendedLanes & o);
							break;
						}
						e.timeoutHandle = ws(zn.bind(null, e, Xe, Ut), t);
						break;
					}
					zn(e, Xe, Ut);
					break;
				case 4:
					if ((mn(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, o = -1; 0 < r; ) {
						var l = 31 - kt(r);
						(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
					}
					if (((r = o), (r = xe() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * My(r / 1960)) - r), 10 < r)) {
						e.timeoutHandle = ws(zn.bind(null, e, Xe, Ut), r);
						break;
					}
					zn(e, Xe, Ut);
					break;
				case 5:
					zn(e, Xe, Ut);
					break;
				default:
					throw Error(T(329));
			}
		}
	}
	return et(e, xe()), e.callbackNode === n ? $h.bind(null, e) : null;
}
function Fs(e, t) {
	var n = Lo;
	return e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256), (e = kl(e, t)), e !== 2 && ((t = Xe), (Xe = n), t !== null && Is(t)), e;
}
function Is(e) {
	Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function Ay(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!Pt(i(), o)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function mn(e, t) {
	for (t &= ~ju, t &= ~Hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
		var n = 31 - kt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Pd(e) {
	if (re & 6) throw Error(T(327));
	Dr();
	var t = ll(e, 0);
	if (!(t & 1)) return et(e, xe()), null;
	var n = kl(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ds(e);
		r !== 0 && ((t = r), (n = Fs(e, r)));
	}
	if (n === 1) throw ((n = Zo), Wn(e, 0), mn(e, t), et(e, xe()), n);
	if (n === 6) throw Error(T(345));
	return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), zn(e, Xe, Ut), et(e, xe()), null;
}
function Fu(e, t) {
	var n = re;
	re |= 1;
	try {
		return e(t);
	} finally {
		(re = n), re === 0 && ((Br = xe() + 500), Fl && Dn());
	}
}
function Jn(e) {
	gn !== null && gn.tag === 0 && !(re & 6) && Dr();
	var t = re;
	re |= 1;
	var n = vt.transition,
		r = ie;
	try {
		if (((vt.transition = null), (ie = 1), e)) return e();
	} finally {
		(ie = r), (vt.transition = n), (re = t), !(re & 6) && Dn();
	}
}
function Iu() {
	(nt = Pr.current), ce(Pr);
}
function Wn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), fy(n)), Ee !== null))
		for (n = Ee.return; n !== null; ) {
			var r = n;
			switch ((xu(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && dl();
					break;
				case 3:
					Ir(), ce(Je), ce(Ie), _u();
					break;
				case 5:
					Ru(r);
					break;
				case 4:
					Ir();
					break;
				case 13:
					ce(me);
					break;
				case 19:
					ce(me);
					break;
				case 10:
					ku(r.type._context);
					break;
				case 22:
				case 23:
					Iu();
			}
			n = n.return;
		}
	if (((Re = e), (Ee = e = bn(e.current, null)), (Oe = nt = t), (ke = 0), (Zo = null), (ju = Hl = Zn = 0), (Xe = Lo = null), In !== null)) {
		for (t = 0; t < In.length; t++)
			if (((n = In[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var o = r.next,
					i = n.pending;
				if (i !== null) {
					var l = i.next;
					(i.next = o), (r.next = l);
				}
				n.pending = r;
			}
		In = null;
	}
	return e;
}
function Rh(e, t) {
	do {
		var n = Ee;
		try {
			if ((Cu(), (Qi.current = xl), wl)) {
				for (var r = ve.memoizedState; r !== null; ) {
					var o = r.queue;
					o !== null && (o.pending = null), (r = r.next);
				}
				wl = !1;
			}
			if (((Xn = 0), ($e = Ce = ve = null), (No = !1), (Yo = 0), (Au.current = null), n === null || n.return === null)) {
				(ke = 1), (Zo = t), (Ee = null);
				break;
			}
			e: {
				var i = e,
					l = n.return,
					a = n,
					s = t;
				if (((t = Oe), (a.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
					var u = s,
						c = a,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var p = c.alternate;
						p ? ((c.updateQueue = p.updateQueue), (c.memoizedState = p.memoizedState), (c.lanes = p.lanes)) : ((c.updateQueue = null), (c.memoizedState = null));
					}
					var y = pd(l);
					if (y !== null) {
						(y.flags &= -257), hd(y, l, a, i, t), y.mode & 1 && fd(i, u, t), (t = y), (s = u);
						var w = t.updateQueue;
						if (w === null) {
							var v = new Set();
							v.add(s), (t.updateQueue = v);
						} else w.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							fd(i, u, t), Uu();
							break e;
						}
						s = Error(T(426));
					}
				} else if (pe && a.mode & 1) {
					var S = pd(l);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256), hd(S, l, a, i, t), Su(Ur(s, a));
						break e;
					}
				}
				(i = s = Ur(s, a)), ke !== 4 && (ke = 2), Lo === null ? (Lo = [i]) : Lo.push(i), (i = l);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var m = dh(i, s, t);
							ld(i, m);
							break e;
						case 1:
							a = s;
							var h = i.type,
								g = i.stateNode;
							if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == 'function' || (g !== null && typeof g.componentDidCatch == 'function' && (Cn === null || !Cn.has(g))))) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var E = fh(i, a, t);
								ld(i, E);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Th(n);
		} catch (k) {
			(t = k), Ee === n && n !== null && (Ee = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function _h() {
	var e = Sl.current;
	return (Sl.current = xl), e === null ? xl : e;
}
function Uu() {
	(ke === 0 || ke === 3 || ke === 2) && (ke = 4), Re === null || (!(Zn & 268435455) && !(Hl & 268435455)) || mn(Re, Oe);
}
function kl(e, t) {
	var n = re;
	re |= 2;
	var r = _h();
	(Re !== e || Oe !== t) && ((Ut = null), Wn(e, t));
	do
		try {
			jy();
			break;
		} catch (o) {
			Rh(e, o);
		}
	while (!0);
	if ((Cu(), (re = n), (Sl.current = r), Ee !== null)) throw Error(T(261));
	return (Re = null), (Oe = 0), ke;
}
function jy() {
	for (; Ee !== null; ) Nh(Ee);
}
function zy() {
	for (; Ee !== null && !ug(); ) Nh(Ee);
}
function Nh(e) {
	var t = Dh(e.alternate, e, nt);
	(e.memoizedProps = e.pendingProps), t === null ? Th(e) : (Ee = t), (Au.current = null);
}
function Th(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Ty(n, t)), n !== null)) {
				(n.flags &= 32767), (Ee = n);
				return;
			}
			if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ke = 6), (Ee = null);
				return;
			}
		} else if (((n = Ny(n, t, nt)), n !== null)) {
			Ee = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Ee = t;
			return;
		}
		Ee = t = e;
	} while (t !== null);
	ke === 0 && (ke = 5);
}
function zn(e, t, n) {
	var r = ie,
		o = vt.transition;
	try {
		(vt.transition = null), (ie = 1), Fy(e, t, n, r);
	} finally {
		(vt.transition = o), (ie = r);
	}
	return null;
}
function Fy(e, t, n, r) {
	do Dr();
	while (gn !== null);
	if (re & 6) throw Error(T(327));
	n = e.finishedWork;
	var o = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(T(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(wg(e, i),
		e === Re && ((Ee = Re = null), (Oe = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Li ||
			((Li = !0),
			Oh(il, function () {
				return Dr(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = vt.transition), (vt.transition = null);
		var l = ie;
		ie = 1;
		var a = re;
		(re |= 4), (Au.current = null), Dy(e, n), bh(n, e), iy(gs), (al = !!vs), (gs = vs = null), (e.current = n), Oy(n), cg(), (re = a), (ie = l), (vt.transition = i);
	} else e.current = n;
	if ((Li && ((Li = !1), (gn = e), (Cl = o)), (i = e.pendingLanes), i === 0 && (Cn = null), pg(n.stateNode), et(e, xe()), t !== null)) for (r = e.onRecoverableError, n = 0; n < t.length; n++) (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
	if (El) throw ((El = !1), (e = js), (js = null), e);
	return Cl & 1 && e.tag !== 0 && Dr(), (i = e.pendingLanes), i & 1 ? (e === zs ? Do++ : ((Do = 0), (zs = e))) : (Do = 0), Dn(), null;
}
function Dr() {
	if (gn !== null) {
		var e = dp(Cl),
			t = vt.transition,
			n = ie;
		try {
			if (((vt.transition = null), (ie = 16 > e ? 16 : e), gn === null)) var r = !1;
			else {
				if (((e = gn), (gn = null), (Cl = 0), re & 6)) throw Error(T(331));
				var o = re;
				for (re |= 4, A = e.current; A !== null; ) {
					var i = A,
						l = i.child;
					if (A.flags & 16) {
						var a = i.deletions;
						if (a !== null) {
							for (var s = 0; s < a.length; s++) {
								var u = a[s];
								for (A = u; A !== null; ) {
									var c = A;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											To(8, c, i);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (A = d);
									else
										for (; A !== null; ) {
											c = A;
											var p = c.sibling,
												y = c.return;
											if ((Eh(c), c === u)) {
												A = null;
												break;
											}
											if (p !== null) {
												(p.return = y), (A = p);
												break;
											}
											A = y;
										}
								}
							}
							var w = i.alternate;
							if (w !== null) {
								var v = w.child;
								if (v !== null) {
									w.child = null;
									do {
										var S = v.sibling;
										(v.sibling = null), (v = S);
									} while (v !== null);
								}
							}
							A = i;
						}
					}
					if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (A = l);
					else
						e: for (; A !== null; ) {
							if (((i = A), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										To(9, i, i.return);
								}
							var m = i.sibling;
							if (m !== null) {
								(m.return = i.return), (A = m);
								break e;
							}
							A = i.return;
						}
				}
				var h = e.current;
				for (A = h; A !== null; ) {
					l = A;
					var g = l.child;
					if (l.subtreeFlags & 2064 && g !== null) (g.return = l), (A = g);
					else
						e: for (l = h; A !== null; ) {
							if (((a = A), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											Bl(9, a);
									}
								} catch (k) {
									we(a, a.return, k);
								}
							if (a === l) {
								A = null;
								break e;
							}
							var E = a.sibling;
							if (E !== null) {
								(E.return = a.return), (A = E);
								break e;
							}
							A = a.return;
						}
				}
				if (((re = o), Dn(), At && typeof At.onPostCommitFiberRoot == 'function'))
					try {
						At.onPostCommitFiberRoot(Ol, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(ie = n), (vt.transition = t);
		}
	}
	return !1;
}
function $d(e, t, n) {
	(t = Ur(n, t)), (t = dh(e, t, 1)), (e = En(e, t, 1)), (t = Ke()), e !== null && (oi(e, 1, t), et(e, t));
}
function we(e, t, n) {
	if (e.tag === 3) $d(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				$d(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == 'function' || (typeof r.componentDidCatch == 'function' && (Cn === null || !Cn.has(r)))) {
					(e = Ur(n, e)), (e = fh(t, e, 1)), (t = En(t, e, 1)), (e = Ke()), t !== null && (oi(t, 1, e), et(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Iy(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), (t = Ke()), (e.pingedLanes |= e.suspendedLanes & n), Re === e && (Oe & n) === n && (ke === 4 || (ke === 3 && (Oe & 130023424) === Oe && 500 > xe() - zu) ? Wn(e, 0) : (ju |= n)), et(e, t);
}
function Lh(e, t) {
	t === 0 && (e.mode & 1 ? ((t = Ei), (Ei <<= 1), !(Ei & 130023424) && (Ei = 4194304)) : (t = 1));
	var n = Ke();
	(e = Gt(e, t)), e !== null && (oi(e, t, n), et(e, n));
}
function Uy(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Lh(e, n);
}
function By(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState;
			o !== null && (n = o.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(T(314));
	}
	r !== null && r.delete(t), Lh(e, n);
}
var Dh;
Dh = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), _y(e, t, n);
			Ze = !!(e.flags & 131072);
		}
	else (Ze = !1), pe && t.flags & 1048576 && jp(t, hl, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Gi(e, t), (e = t.pendingProps);
			var o = jr(t, Ie.current);
			Lr(t, n), (o = Tu(null, t, r, e, o, n));
			var i = Lu();
			return (t.flags |= 1), typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0 ? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), qe(r) ? ((i = !0), fl(t)) : (i = !1), (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null), Pu(t), (o.updater = Ul), (t.stateNode = o), (o._reactInternals = t), Ps(t, r, e, n), (t = _s(null, t, r, !0, i, n))) : ((t.tag = 0), pe && i && wu(t), We(null, t, o, n), (t = t.child)), t;
		case 16:
			r = t.elementType;
			e: {
				switch ((Gi(e, t), (e = t.pendingProps), (o = r._init), (r = o(r._payload)), (t.type = r), (o = t.tag = Vy(r)), (e = xt(r, e)), o)) {
					case 0:
						t = Rs(null, t, r, e, n);
						break e;
					case 1:
						t = gd(null, t, r, e, n);
						break e;
					case 11:
						t = md(null, t, r, e, n);
						break e;
					case 14:
						t = vd(null, t, r, xt(r.type, e), n);
						break e;
				}
				throw Error(T(306, r, ''));
			}
			return t;
		case 0:
			return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : xt(r, o)), Rs(e, t, r, o, n);
		case 1:
			return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : xt(r, o)), gd(e, t, r, o, n);
		case 3:
			e: {
				if ((vh(t), e === null)) throw Error(T(387));
				(r = t.pendingProps), (i = t.memoizedState), (o = i.element), Hp(e, t), gl(t, r, null, n);
				var l = t.memoizedState;
				if (((r = l.element), i.isDehydrated))
					if (((i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }), (t.updateQueue.baseState = i), (t.memoizedState = i), t.flags & 256)) {
						(o = Ur(Error(T(423)), t)), (t = yd(e, t, r, n, o));
						break e;
					} else if (r !== o) {
						(o = Ur(Error(T(424)), t)), (t = yd(e, t, r, n, o));
						break e;
					} else for (ot = Sn(t.stateNode.containerInfo.firstChild), it = t, pe = !0, Ct = null, n = Up(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((zr(), r === o)) {
						t = Xt(e, t, n);
						break e;
					}
					We(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return Vp(t), e === null && Cs(t), (r = t.type), (o = t.pendingProps), (i = e !== null ? e.memoizedProps : null), (l = o.children), ys(r, o) ? (l = null) : i !== null && ys(r, i) && (t.flags |= 32), mh(e, t), We(e, t, l, n), t.child;
		case 6:
			return e === null && Cs(t), null;
		case 13:
			return gh(e, t, n);
		case 4:
			return $u(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = Fr(t, null, r, n)) : We(e, t, r, n), t.child;
		case 11:
			return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : xt(r, o)), md(e, t, r, o, n);
		case 7:
			return We(e, t, t.pendingProps, n), t.child;
		case 8:
			return We(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return We(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (((r = t.type._context), (o = t.pendingProps), (i = t.memoizedProps), (l = o.value), ae(ml, r._currentValue), (r._currentValue = l), i !== null))
					if (Pt(i.value, l)) {
						if (i.children === o.children && !Je.current) {
							t = Xt(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var a = i.dependencies;
							if (a !== null) {
								l = i.child;
								for (var s = a.firstContext; s !== null; ) {
									if (s.context === r) {
										if (i.tag === 1) {
											(s = Wt(-1, n & -n)), (s.tag = 2);
											var u = i.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)), (u.pending = s);
											}
										}
										(i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), ks(i.return, n, t), (a.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (i.tag === 10) l = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((l = i.return), l === null)) throw Error(T(341));
								(l.lanes |= n), (a = l.alternate), a !== null && (a.lanes |= n), ks(l, n, t), (l = i.sibling);
							} else l = i.child;
							if (l !== null) l.return = i;
							else
								for (l = i; l !== null; ) {
									if (l === t) {
										l = null;
										break;
									}
									if (((i = l.sibling), i !== null)) {
										(i.return = l.return), (l = i);
										break;
									}
									l = l.return;
								}
							i = l;
						}
				We(e, t, o.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (o = t.type), (r = t.pendingProps.children), Lr(t, n), (o = gt(o)), (r = r(o)), (t.flags |= 1), We(e, t, r, n), t.child;
		case 14:
			return (r = t.type), (o = xt(r, t.pendingProps)), (o = xt(r.type, o)), vd(e, t, r, o, n);
		case 15:
			return ph(e, t, t.type, t.pendingProps, n);
		case 17:
			return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : xt(r, o)), Gi(e, t), (t.tag = 1), qe(r) ? ((e = !0), fl(t)) : (e = !1), Lr(t, n), ch(t, r, o), Ps(t, r, o, n), _s(null, t, r, !0, e, n);
		case 19:
			return yh(e, t, n);
		case 22:
			return hh(e, t, n);
	}
	throw Error(T(156, t.tag));
};
function Oh(e, t) {
	return ap(e, t);
}
function Hy(e, t, n, r) {
	(this.tag = e), (this.key = n), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = r), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null);
}
function mt(e, t, n, r) {
	return new Hy(e, t, n, r);
}
function Bu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vy(e) {
	if (typeof e == 'function') return Bu(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === au)) return 11;
		if (e === su) return 14;
	}
	return 2;
}
function bn(e, t) {
	var n = e.alternate;
	return n === null ? ((n = mt(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n)) : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)), (n.flags = e.flags & 14680064), (n.childLanes = e.childLanes), (n.lanes = e.lanes), (n.child = e.child), (n.memoizedProps = e.memoizedProps), (n.memoizedState = e.memoizedState), (n.updateQueue = e.updateQueue), (t = e.dependencies), (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), (n.sibling = e.sibling), (n.index = e.index), (n.ref = e.ref), n;
}
function Ji(e, t, n, r, o, i) {
	var l = 2;
	if (((r = e), typeof e == 'function')) Bu(e) && (l = 1);
	else if (typeof e == 'string') l = 5;
	else
		e: switch (e) {
			case vr:
				return Kn(n.children, o, i, t);
			case lu:
				(l = 8), (o |= 8);
				break;
			case Xa:
				return (e = mt(12, n, t, o | 2)), (e.elementType = Xa), (e.lanes = i), e;
			case Za:
				return (e = mt(13, n, t, o)), (e.elementType = Za), (e.lanes = i), e;
			case Ja:
				return (e = mt(19, n, t, o)), (e.elementType = Ja), (e.lanes = i), e;
			case Vf:
				return Vl(n, o, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Bf:
							l = 10;
							break e;
						case Hf:
							l = 9;
							break e;
						case au:
							l = 11;
							break e;
						case su:
							l = 14;
							break e;
						case fn:
							(l = 16), (r = null);
							break e;
					}
				throw Error(T(130, e == null ? e : typeof e, ''));
		}
	return (t = mt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Kn(e, t, n, r) {
	return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function Vl(e, t, n, r) {
	return (e = mt(22, e, r, t)), (e.elementType = Vf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Da(e, t, n) {
	return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function Oa(e, t, n) {
	return (t = mt(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function Wy(e, t, n, r, o) {
	(this.tag = t), (this.containerInfo = e), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = ha(0)), (this.expirationTimes = ha(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = ha(0)), (this.identifierPrefix = r), (this.onRecoverableError = o), (this.mutableSourceEagerHydrationData = null);
}
function Hu(e, t, n, r, o, i, l, a, s) {
	return (e = new Wy(e, t, n, a, s)), t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0), (i = mt(3, null, null, t)), (e.current = i), (i.stateNode = e), (i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }), Pu(i), e;
}
function Ky(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return { $$typeof: mr, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function Mh(e) {
	if (!e) return $n;
	e = e._reactInternals;
	e: {
		if (nr(e) !== e || e.tag !== 1) throw Error(T(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (qe(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(T(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (qe(n)) return Mp(e, n, t);
	}
	return t;
}
function Ah(e, t, n, r, o, i, l, a, s) {
	return (e = Hu(n, r, !0, e, o, i, l, a, s)), (e.context = Mh(null)), (n = e.current), (r = Ke()), (o = kn(n)), (i = Wt(r, o)), (i.callback = t ?? null), En(n, i, o), (e.current.lanes = o), oi(e, o, r), et(e, r), e;
}
function Wl(e, t, n, r) {
	var o = t.current,
		i = Ke(),
		l = kn(o);
	return (n = Mh(n)), t.context === null ? (t.context = n) : (t.pendingContext = n), (t = Wt(i, l)), (t.payload = { element: e }), (r = r === void 0 ? null : r), r !== null && (t.callback = r), (e = En(o, t, l)), e !== null && (bt(e, o, l, i), Ki(e, o, l)), l;
}
function bl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Rd(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Vu(e, t) {
	Rd(e, t), (e = e.alternate) && Rd(e, t);
}
function Qy() {
	return null;
}
var jh =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function Wu(e) {
	this._internalRoot = e;
}
Kl.prototype.render = Wu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(T(409));
	Wl(e, t, null, null);
};
Kl.prototype.unmount = Wu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Jn(function () {
			Wl(null, e, null, null);
		}),
			(t[Yt] = null);
	}
};
function Kl(e) {
	this._internalRoot = e;
}
Kl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = hp();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
		hn.splice(n, 0, e), n === 0 && vp(e);
	}
};
function Ku(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ql(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable ')));
}
function _d() {}
function Yy(e, t, n, r, o) {
	if (o) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var u = bl(l);
				i.call(u);
			};
		}
		var l = Ah(t, r, e, 0, null, !1, !1, '', _d);
		return (e._reactRootContainer = l), (e[Yt] = l.current), Ho(e.nodeType === 8 ? e.parentNode : e), Jn(), l;
	}
	for (; (o = e.lastChild); ) e.removeChild(o);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var u = bl(s);
			a.call(u);
		};
	}
	var s = Hu(e, 0, !1, null, null, !1, !1, '', _d);
	return (
		(e._reactRootContainer = s),
		(e[Yt] = s.current),
		Ho(e.nodeType === 8 ? e.parentNode : e),
		Jn(function () {
			Wl(t, s, n, r);
		}),
		s
	);
}
function Yl(e, t, n, r, o) {
	var i = n._reactRootContainer;
	if (i) {
		var l = i;
		if (typeof o == 'function') {
			var a = o;
			o = function () {
				var s = bl(l);
				a.call(s);
			};
		}
		Wl(t, l, e, o);
	} else l = Yy(n, t, e, o, r);
	return bl(l);
}
fp = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Co(t.pendingLanes);
				n !== 0 && (du(t, n | 1), et(t, xe()), !(re & 6) && ((Br = xe() + 500), Dn()));
			}
			break;
		case 13:
			Jn(function () {
				var r = Gt(e, 1);
				if (r !== null) {
					var o = Ke();
					bt(r, e, 1, o);
				}
			}),
				Vu(e, 1);
	}
};
fu = function (e) {
	if (e.tag === 13) {
		var t = Gt(e, 134217728);
		if (t !== null) {
			var n = Ke();
			bt(t, e, 134217728, n);
		}
		Vu(e, 134217728);
	}
};
pp = function (e) {
	if (e.tag === 13) {
		var t = kn(e),
			n = Gt(e, t);
		if (n !== null) {
			var r = Ke();
			bt(n, e, t, r);
		}
		Vu(e, t);
	}
};
hp = function () {
	return ie;
};
mp = function (e, t) {
	var n = ie;
	try {
		return (ie = e), t();
	} finally {
		ie = n;
	}
};
ss = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((ts(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var o = zl(r);
						if (!o) throw Error(T(90));
						Kf(r), ts(r, o);
					}
				}
			}
			break;
		case 'textarea':
			Yf(e, n);
			break;
		case 'select':
			(t = n.value), t != null && Rr(e, !!n.multiple, t, !1);
	}
};
tp = Fu;
np = Jn;
var Gy = { usingClientEntryPoint: !1, Events: [li, xr, zl, qf, ep, Fu] },
	mo = { findFiberByHostInstance: Fn, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
	Xy = {
		bundleType: mo.bundleType,
		version: mo.version,
		rendererPackageName: mo.rendererPackageName,
		rendererConfig: mo.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: en.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = ip(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: mo.findFiberByHostInstance || Qy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Di.isDisabled && Di.supportsFiber)
		try {
			(Ol = Di.inject(Xy)), (At = Di);
		} catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
st.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Ku(t)) throw Error(T(200));
	return Ky(e, t, null, n);
};
st.createRoot = function (e, t) {
	if (!Ku(e)) throw Error(T(299));
	var n = !1,
		r = '',
		o = jh;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), (t = Hu(e, 1, !1, null, null, n, !1, r, o)), (e[Yt] = t.current), Ho(e.nodeType === 8 ? e.parentNode : e), new Wu(t);
};
st.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == 'function' ? Error(T(188)) : ((e = Object.keys(e).join(',')), Error(T(268, e)));
	return (e = ip(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
	return Jn(e);
};
st.hydrate = function (e, t, n) {
	if (!Ql(t)) throw Error(T(200));
	return Yl(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
	if (!Ku(e)) throw Error(T(405));
	var r = (n != null && n.hydratedSources) || null,
		o = !1,
		i = '',
		l = jh;
	if ((n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), (t = Ah(t, null, e, 1, n ?? null, o, !1, i, l)), (e[Yt] = t.current), Ho(e), r)) for (e = 0; e < r.length; e++) (n = r[e]), (o = n._getVersion), (o = o(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, o]) : t.mutableSourceEagerHydrationData.push(n, o);
	return new Kl(t);
};
st.render = function (e, t, n) {
	if (!Ql(t)) throw Error(T(200));
	return Yl(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
	if (!Ql(e)) throw Error(T(40));
	return e._reactRootContainer
		? (Jn(function () {
				Yl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Yt] = null);
				});
		  }),
		  !0)
		: !1;
};
st.unstable_batchedUpdates = Fu;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Ql(n)) throw Error(T(200));
	if (e == null || e._reactInternals === void 0) throw Error(T(38));
	return Yl(e, t, n, !1, r);
};
st.version = '18.3.1-next-f1338f8080-20240426';
function zh() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zh);
		} catch (e) {
			console.error(e);
		}
}
zh(), (zf.exports = st);
var Yr = zf.exports;
const Fh = bf(Yr),
	Zy = kf({ __proto__: null, default: Fh }, [Yr]);
var Nd = Yr;
(Ya.createRoot = Nd.createRoot), (Ya.hydrateRoot = Nd.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function he() {
	return (
		(he = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		he.apply(this, arguments)
	);
}
var Se;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Se || (Se = {}));
const Td = 'popstate';
function Jy(e) {
	e === void 0 && (e = {});
	function t(r, o) {
		let { pathname: i, search: l, hash: a } = r.location;
		return Jo('', { pathname: i, search: l, hash: a }, (o.state && o.state.usr) || null, (o.state && o.state.key) || 'default');
	}
	function n(r, o) {
		return typeof o == 'string' ? o : qn(o);
	}
	return e0(t, n, null, e);
}
function J(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Hr(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function qy() {
	return Math.random().toString(36).substr(2, 8);
}
function Ld(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Jo(e, t, n, r) {
	return n === void 0 && (n = null), he({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? On(t) : t, { state: n, key: (t && t.key) || r || qy() });
}
function qn(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n), r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r), t;
}
function On(e) {
	let t = {};
	if (e) {
		let n = e.indexOf('#');
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf('?');
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
	}
	return t;
}
function e0(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: o = document.defaultView, v5Compat: i = !1 } = r,
		l = o.history,
		a = Se.Pop,
		s = null,
		u = c();
	u == null && ((u = 0), l.replaceState(he({}, l.state, { idx: u }), ''));
	function c() {
		return (l.state || { idx: null }).idx;
	}
	function d() {
		a = Se.Pop;
		let S = c(),
			m = S == null ? null : S - u;
		(u = S), s && s({ action: a, location: v.location, delta: m });
	}
	function p(S, m) {
		a = Se.Push;
		let h = Jo(v.location, S, m);
		u = c() + 1;
		let g = Ld(h, u),
			E = v.createHref(h);
		try {
			l.pushState(g, '', E);
		} catch (k) {
			if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
			o.location.assign(E);
		}
		i && s && s({ action: a, location: v.location, delta: 1 });
	}
	function y(S, m) {
		a = Se.Replace;
		let h = Jo(v.location, S, m);
		u = c();
		let g = Ld(h, u),
			E = v.createHref(h);
		l.replaceState(g, '', E), i && s && s({ action: a, location: v.location, delta: 0 });
	}
	function w(S) {
		let m = o.location.origin !== 'null' ? o.location.origin : o.location.href,
			h = typeof S == 'string' ? S : qn(S);
		return (h = h.replace(/ $/, '%20')), J(m, 'No window.location.(origin|href) available to create URL for href: ' + h), new URL(h, m);
	}
	let v = {
		get action() {
			return a;
		},
		get location() {
			return e(o, l);
		},
		listen(S) {
			if (s) throw new Error('A history only accepts one active listener');
			return (
				o.addEventListener(Td, d),
				(s = S),
				() => {
					o.removeEventListener(Td, d), (s = null);
				}
			);
		},
		createHref(S) {
			return t(o, S);
		},
		createURL: w,
		encodeLocation(S) {
			let m = w(S);
			return { pathname: m.pathname, search: m.search, hash: m.hash };
		},
		push: p,
		replace: y,
		go(S) {
			return l.go(S);
		},
	};
	return v;
}
var fe;
(function (e) {
	(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(fe || (fe = {}));
const t0 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function n0(e) {
	return e.index === !0;
}
function Us(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((o, i) => {
			let l = [...n, i],
				a = typeof o.id == 'string' ? o.id : l.join('-');
			if ((J(o.index !== !0 || !o.children, 'Cannot specify children on an index route'), J(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), n0(o))) {
				let s = he({}, o, t(o), { id: a });
				return (r[a] = s), s;
			} else {
				let s = he({}, o, t(o), { id: a, children: void 0 });
				return (r[a] = s), o.children && (s.children = Us(o.children, t, l, r)), s;
			}
		})
	);
}
function $r(e, t, n) {
	n === void 0 && (n = '/');
	let r = typeof t == 'string' ? On(t) : t,
		o = Gr(r.pathname || '/', n);
	if (o == null) return null;
	let i = Ih(e);
	o0(i);
	let l = null;
	for (let a = 0; l == null && a < i.length; ++a) {
		let s = v0(o);
		l = p0(i[a], s);
	}
	return l;
}
function r0(e, t) {
	let { route: n, pathname: r, params: o } = e;
	return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Ih(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let o = (i, l, a) => {
		let s = { relativePath: a === void 0 ? i.path || '' : a, caseSensitive: i.caseSensitive === !0, childrenIndex: l, route: i };
		s.relativePath.startsWith('/') && (J(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + 'must start with the combined path of all its parent routes.'), (s.relativePath = s.relativePath.slice(r.length)));
		let u = Kt([r, s.relativePath]),
			c = n.concat(s);
		i.children && i.children.length > 0 && (J(i.index !== !0, 'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')), Ih(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({ path: u, score: d0(u, i.index), routesMeta: c });
	};
	return (
		e.forEach((i, l) => {
			var a;
			if (i.path === '' || !((a = i.path) != null && a.includes('?'))) o(i, l);
			else for (let s of Uh(i.path)) o(i, l, s);
		}),
		t
	);
}
function Uh(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		o = n.endsWith('?'),
		i = n.replace(/\?$/, '');
	if (r.length === 0) return o ? [i, ''] : [i];
	let l = Uh(r.join('/')),
		a = [];
	return a.push(...l.map((s) => (s === '' ? i : [i, s].join('/')))), o && a.push(...l), a.map((s) => (e.startsWith('/') && s === '' ? '/' : s));
}
function o0(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: f0(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const i0 = /^:[\w-]+$/,
	l0 = 3,
	a0 = 2,
	s0 = 1,
	u0 = 10,
	c0 = -2,
	Dd = (e) => e === '*';
function d0(e, t) {
	let n = e.split('/'),
		r = n.length;
	return n.some(Dd) && (r += c0), t && (r += a0), n.filter((o) => !Dd(o)).reduce((o, i) => o + (i0.test(i) ? l0 : i === '' ? s0 : u0), r);
}
function f0(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function p0(e, t) {
	let { routesMeta: n } = e,
		r = {},
		o = '/',
		i = [];
	for (let l = 0; l < n.length; ++l) {
		let a = n[l],
			s = l === n.length - 1,
			u = o === '/' ? t : t.slice(o.length) || '/',
			c = h0({ path: a.relativePath, caseSensitive: a.caseSensitive, end: s }, u);
		if (!c) return null;
		Object.assign(r, c.params);
		let d = a.route;
		i.push({ params: r, pathname: Kt([o, c.pathname]), pathnameBase: w0(Kt([o, c.pathnameBase])), route: d }), c.pathnameBase !== '/' && (o = Kt([o, c.pathnameBase]));
	}
	return i;
}
function h0(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = m0(e.path, e.caseSensitive, e.end),
		o = t.match(n);
	if (!o) return null;
	let i = o[0],
		l = i.replace(/(.)\/+$/, '$1'),
		a = o.slice(1);
	return {
		params: r.reduce((u, c, d) => {
			let { paramName: p, isOptional: y } = c;
			if (p === '*') {
				let v = a[d] || '';
				l = i.slice(0, i.length - v.length).replace(/(.)\/+$/, '$1');
			}
			const w = a[d];
			return y && !w ? (u[p] = void 0) : (u[p] = (w || '').replace(/%2F/g, '/')), u;
		}, {}),
		pathname: i,
		pathnameBase: l,
		pattern: e,
	};
}
function m0(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !0), Hr(e === '*' || !e.endsWith('*') || e.endsWith('/*'), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') + 'always follow a `/` in the pattern. To get rid of this warning, ' + ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'));
	let r = [],
		o =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(/\/:([\w-]+)(\?)?/g, (l, a, s) => (r.push({ paramName: a, isOptional: s != null }), s ? '/?([^\\/]+)?' : '/([^\\/]+)'));
	return e.endsWith('*') ? (r.push({ paramName: '*' }), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$')) : n ? (o += '\\/*$') : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'), [new RegExp(o, t ? void 0 : 'i'), r];
}
function v0(e) {
	try {
		return e
			.split('/')
			.map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
			.join('/');
	} catch (t) {
		return Hr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ('encoding (' + t + ').')), e;
	}
}
function Gr(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function g0(e, t) {
	t === void 0 && (t = '/');
	let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? On(e) : e;
	return { pathname: n ? (n.startsWith('/') ? n : y0(n, t)) : t, search: x0(r), hash: S0(o) };
}
function y0(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach((o) => {
			o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function Ma(e, t, n, r) {
	return "Cannot include a '" + e + "' character in a manually specified " + ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') + ('`to.' + n + '` field. Alternatively you may provide the full path as ') + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Bh(e) {
	return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Qu(e, t) {
	let n = Bh(e);
	return t ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function Yu(e, t, n, r) {
	r === void 0 && (r = !1);
	let o;
	typeof e == 'string' ? (o = On(e)) : ((o = he({}, e)), J(!o.pathname || !o.pathname.includes('?'), Ma('?', 'pathname', 'search', o)), J(!o.pathname || !o.pathname.includes('#'), Ma('#', 'pathname', 'hash', o)), J(!o.search || !o.search.includes('#'), Ma('#', 'search', 'hash', o)));
	let i = e === '' || o.pathname === '',
		l = i ? '/' : o.pathname,
		a;
	if (l == null) a = n;
	else {
		let d = t.length - 1;
		if (!r && l.startsWith('..')) {
			let p = l.split('/');
			for (; p[0] === '..'; ) p.shift(), (d -= 1);
			o.pathname = p.join('/');
		}
		a = d >= 0 ? t[d] : '/';
	}
	let s = g0(o, a),
		u = l && l !== '/' && l.endsWith('/'),
		c = (i || l === '.') && n.endsWith('/');
	return !s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s;
}
const Kt = (e) => e.join('/').replace(/\/\/+/g, '/'),
	w0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	x0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	S0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Gu {
	constructor(t, n, r, o) {
		o === void 0 && (o = !1), (this.status = t), (this.statusText = n || ''), (this.internal = o), r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
	}
}
function Xu(e) {
	return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.internal == 'boolean' && 'data' in e;
}
const Hh = ['post', 'put', 'patch', 'delete'],
	E0 = new Set(Hh),
	C0 = ['get', ...Hh],
	k0 = new Set(C0),
	b0 = new Set([301, 302, 303, 307, 308]),
	P0 = new Set([307, 308]),
	Aa = { state: 'idle', location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 },
	$0 = { state: 'idle', data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 },
	vo = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	Zu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	R0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	Vh = 'remix-router-transitions';
function _0(e) {
	const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
		n = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
		r = !n;
	J(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
	let o;
	if (e.mapRouteProperties) o = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let C = e.detectErrorBoundary;
		o = (b) => ({ hasErrorBoundary: C(b) });
	} else o = R0;
	let i = {},
		l = Us(e.routes, o, void 0, i),
		a,
		s = e.basename || '/',
		u = e.unstable_dataStrategy || D0,
		c = he({ v7_fetcherPersist: !1, v7_normalizeFormMethod: !1, v7_partialHydration: !1, v7_prependBasename: !1, v7_relativeSplatPath: !1, unstable_skipActionErrorRevalidation: !1 }, e.future),
		d = null,
		p = new Set(),
		y = null,
		w = null,
		v = null,
		S = e.hydrationData != null,
		m = $r(l, e.history.location, s),
		h = null;
	if (m == null) {
		let C = dt(404, { pathname: e.history.location.pathname }),
			{ matches: b, route: $ } = Hd(l);
		(m = b), (h = { [$.id]: C });
	}
	let g,
		E = m.some((C) => C.route.lazy),
		k = m.some((C) => C.route.loader);
	if (E) g = !1;
	else if (!k) g = !0;
	else if (c.v7_partialHydration) {
		let C = e.hydrationData ? e.hydrationData.loaderData : null,
			b = e.hydrationData ? e.hydrationData.errors : null,
			$ = (D) => (D.route.loader ? (typeof D.route.loader == 'function' && D.route.loader.hydrate === !0 ? !1 : (C && C[D.route.id] !== void 0) || (b && b[D.route.id] !== void 0)) : !0);
		if (b) {
			let D = m.findIndex((j) => b[j.route.id] !== void 0);
			g = m.slice(0, D + 1).every($);
		} else g = m.every($);
	} else g = e.hydrationData != null;
	let _,
		x = { historyAction: e.history.action, location: e.history.location, matches: m, initialized: g, navigation: Aa, restoreScrollPosition: e.hydrationData != null ? !1 : null, preventScrollReset: !1, revalidation: 'idle', loaderData: (e.hydrationData && e.hydrationData.loaderData) || {}, actionData: (e.hydrationData && e.hydrationData.actionData) || null, errors: (e.hydrationData && e.hydrationData.errors) || h, fetchers: new Map(), blockers: new Map() },
		P = Se.Pop,
		O = !1,
		L,
		I = !1,
		M = new Map(),
		Z = null,
		H = !1,
		ee = !1,
		oe = [],
		G = [],
		N = new Map(),
		F = 0,
		B = -1,
		X = new Map(),
		te = new Set(),
		Ge = new Map(),
		Ue = new Map(),
		be = new Set(),
		ye = new Map(),
		Be = new Map(),
		to = !1;
	function ir() {
		if (
			((d = e.history.listen((C) => {
				let { action: b, location: $, delta: D } = C;
				if (to) {
					to = !1;
					return;
				}
				Hr(Be.size === 0 || D != null, 'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.');
				let j = yc({ currentLocation: x.location, nextLocation: $, historyAction: b });
				if (j && D != null) {
					(to = !0),
						e.history.go(D * -1),
						pi(j, {
							state: 'blocked',
							location: $,
							proceed() {
								pi(j, { state: 'proceeding', proceed: void 0, reset: void 0, location: $ }), e.history.go(D);
							},
							reset() {
								let K = new Map(x.blockers);
								K.set(j, vo), He({ blockers: K });
							},
						});
					return;
				}
				return _t(b, $);
			})),
			n)
		) {
			W0(t, M);
			let C = () => K0(t, M);
			t.addEventListener('pagehide', C), (Z = () => t.removeEventListener('pagehide', C));
		}
		return x.initialized || _t(Se.Pop, x.location, { initialHydration: !0 }), _;
	}
	function ta() {
		d && d(), Z && Z(), p.clear(), L && L.abort(), x.fetchers.forEach((C, b) => fi(b)), x.blockers.forEach((C, b) => gc(b));
	}
	function na(C) {
		return p.add(C), () => p.delete(C);
	}
	function He(C, b) {
		b === void 0 && (b = {}), (x = he({}, x, C));
		let $ = [],
			D = [];
		c.v7_fetcherPersist &&
			x.fetchers.forEach((j, K) => {
				j.state === 'idle' && (be.has(K) ? D.push(K) : $.push(K));
			}),
			[...p].forEach((j) => j(x, { deletedFetchers: D, unstable_viewTransitionOpts: b.viewTransitionOpts, unstable_flushSync: b.flushSync === !0 })),
			c.v7_fetcherPersist && ($.forEach((j) => x.fetchers.delete(j)), D.forEach((j) => fi(j)));
	}
	function Mn(C, b, $) {
		var D, j;
		let { flushSync: K } = $ === void 0 ? {} : $,
			U = x.actionData != null && x.navigation.formMethod != null && Et(x.navigation.formMethod) && x.navigation.state === 'loading' && ((D = C.state) == null ? void 0 : D._isRedirect) !== !0,
			z;
		b.actionData ? (Object.keys(b.actionData).length > 0 ? (z = b.actionData) : (z = null)) : U ? (z = x.actionData) : (z = null);
		let Q = b.loaderData ? Ud(x.loaderData, b.loaderData, b.matches || [], b.errors) : x.loaderData,
			W = x.blockers;
		W.size > 0 && ((W = new Map(W)), W.forEach((V, de) => W.set(de, vo)));
		let _e = O === !0 || (x.navigation.formMethod != null && Et(x.navigation.formMethod) && ((j = C.state) == null ? void 0 : j._isRedirect) !== !0);
		a && ((l = a), (a = void 0)), H || P === Se.Pop || (P === Se.Push ? e.history.push(C, C.state) : P === Se.Replace && e.history.replace(C, C.state));
		let Ne;
		if (P === Se.Pop) {
			let V = M.get(x.location.pathname);
			V && V.has(C.pathname) ? (Ne = { currentLocation: x.location, nextLocation: C }) : M.has(C.pathname) && (Ne = { currentLocation: C, nextLocation: x.location });
		} else if (I) {
			let V = M.get(x.location.pathname);
			V ? V.add(C.pathname) : ((V = new Set([C.pathname])), M.set(x.location.pathname, V)), (Ne = { currentLocation: x.location, nextLocation: C });
		}
		He(he({}, b, { actionData: z, loaderData: Q, historyAction: P, location: C, initialized: !0, navigation: Aa, revalidation: 'idle', restoreScrollPosition: xc(C, b.matches || x.matches), preventScrollReset: _e, blockers: W }), { viewTransitionOpts: Ne, flushSync: K === !0 }), (P = Se.Pop), (O = !1), (I = !1), (H = !1), (ee = !1), (oe = []), (G = []);
	}
	async function di(C, b) {
		if (typeof C == 'number') {
			e.history.go(C);
			return;
		}
		let $ = Bs(x.location, x.matches, s, c.v7_prependBasename, C, c.v7_relativeSplatPath, b == null ? void 0 : b.fromRouteId, b == null ? void 0 : b.relative),
			{ path: D, submission: j, error: K } = Od(c.v7_normalizeFormMethod, !1, $, b),
			U = x.location,
			z = Jo(x.location, D, b && b.state);
		z = he({}, z, e.history.encodeLocation(z));
		let Q = b && b.replace != null ? b.replace : void 0,
			W = Se.Push;
		Q === !0 ? (W = Se.Replace) : Q === !1 || (j != null && Et(j.formMethod) && j.formAction === x.location.pathname + x.location.search && (W = Se.Replace));
		let _e = b && 'preventScrollReset' in b ? b.preventScrollReset === !0 : void 0,
			Ne = (b && b.unstable_flushSync) === !0,
			V = yc({ currentLocation: U, nextLocation: z, historyAction: W });
		if (V) {
			pi(V, {
				state: 'blocked',
				location: z,
				proceed() {
					pi(V, { state: 'proceeding', proceed: void 0, reset: void 0, location: z }), di(C, b);
				},
				reset() {
					let de = new Map(x.blockers);
					de.set(V, vo), He({ blockers: de });
				},
			});
			return;
		}
		return await _t(W, z, { submission: j, pendingError: K, preventScrollReset: _e, replace: b && b.replace, enableViewTransition: b && b.unstable_viewTransition, flushSync: Ne });
	}
	function An() {
		if ((aa(), He({ revalidation: 'loading' }), x.navigation.state !== 'submitting')) {
			if (x.navigation.state === 'idle') {
				_t(x.historyAction, x.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			_t(P || x.historyAction, x.navigation.location, { overrideNavigation: x.navigation });
		}
	}
	async function _t(C, b, $) {
		L && L.abort(), (L = null), (P = C), (H = ($ && $.startUninterruptedRevalidation) === !0), Ev(x.location, x.matches), (O = ($ && $.preventScrollReset) === !0), (I = ($ && $.enableViewTransition) === !0);
		let D = a || l,
			j = $ && $.overrideNavigation,
			K = $r(D, b, s),
			U = ($ && $.flushSync) === !0;
		if (!K) {
			let V = dt(404, { pathname: b.pathname }),
				{ matches: de, route: Pe } = Hd(D);
			sa(), Mn(b, { matches: de, loaderData: {}, errors: { [Pe.id]: V } }, { flushSync: U });
			return;
		}
		if (x.initialized && !ee && F0(x.location, b) && !($ && $.submission && Et($.submission.formMethod))) {
			Mn(b, { matches: K }, { flushSync: U });
			return;
		}
		L = new AbortController();
		let z = dr(e.history, b, L.signal, $ && $.submission),
			Q;
		if ($ && $.pendingError) Q = [Oo(K).route.id, { type: fe.error, error: $.pendingError }];
		else if ($ && $.submission && Et($.submission.formMethod)) {
			let V = await ra(z, b, $.submission, K, { replace: $.replace, flushSync: U });
			if (V.shortCircuited) return;
			(Q = V.pendingActionResult), (j = ja(b, $.submission)), (U = !1), (z = dr(e.history, z.url, z.signal));
		}
		let { shortCircuited: W, loaderData: _e, errors: Ne } = await oa(z, b, K, j, $ && $.submission, $ && $.fetcherSubmission, $ && $.replace, $ && $.initialHydration === !0, U, Q);
		W || ((L = null), Mn(b, he({ matches: K }, Bd(Q), { loaderData: _e, errors: Ne })));
	}
	async function ra(C, b, $, D, j) {
		j === void 0 && (j = {}), aa();
		let K = H0(b, $);
		He({ navigation: K }, { flushSync: j.flushSync === !0 });
		let U,
			z = Vs(D, b);
		if (!z.route.action && !z.route.lazy) U = { type: fe.error, error: dt(405, { method: C.method, pathname: b.pathname, routeId: z.route.id }) };
		else if (((U = (await ro('action', C, [z], D))[0]), C.signal.aborted)) return { shortCircuited: !0 };
		if (Hn(U)) {
			let Q;
			return j && j.replace != null ? (Q = j.replace) : (Q = zd(U.response.headers.get('Location'), new URL(C.url), s) === x.location.pathname + x.location.search), await no(C, U, { submission: $, replace: Q }), { shortCircuited: !0 };
		}
		if (Bn(U)) throw dt(400, { type: 'defer-action' });
		if (ht(U)) {
			let Q = Oo(D, z.route.id);
			return (j && j.replace) !== !0 && (P = Se.Push), { pendingActionResult: [Q.route.id, U] };
		}
		return { pendingActionResult: [z.route.id, U] };
	}
	async function oa(C, b, $, D, j, K, U, z, Q, W) {
		let _e = D || ja(b, j),
			Ne = j || K || Kd(_e),
			V = a || l,
			[de, Pe] = Md(e.history, x, $, Ne, b, c.v7_partialHydration && z === !0, c.unstable_skipActionErrorRevalidation, ee, oe, G, be, Ge, te, V, s, W);
		if ((sa((ne) => !($ && $.some((Ve) => Ve.route.id === ne)) || (de && de.some((Ve) => Ve.route.id === ne))), (B = ++F), de.length === 0 && Pe.length === 0)) {
			let ne = mc();
			return Mn(b, he({ matches: $, loaderData: {}, errors: W && ht(W[1]) ? { [W[0]]: W[1].error } : null }, Bd(W), ne ? { fetchers: new Map(x.fetchers) } : {}), { flushSync: Q }), { shortCircuited: !0 };
		}
		if (!H && (!c.v7_partialHydration || !z)) {
			Pe.forEach((Ve) => {
				let ct = x.fetchers.get(Ve.key),
					Te = go(void 0, ct ? ct.data : void 0);
				x.fetchers.set(Ve.key, Te);
			});
			let ne;
			W && !ht(W[1]) ? (ne = { [W[0]]: W[1].data }) : x.actionData && (Object.keys(x.actionData).length === 0 ? (ne = null) : (ne = x.actionData)), He(he({ navigation: _e }, ne !== void 0 ? { actionData: ne } : {}, Pe.length > 0 ? { fetchers: new Map(x.fetchers) } : {}), { flushSync: Q });
		}
		Pe.forEach((ne) => {
			N.has(ne.key) && on(ne.key), ne.controller && N.set(ne.key, ne.controller);
		});
		let io = () => Pe.forEach((ne) => on(ne.key));
		L && L.signal.addEventListener('abort', io);
		let { loaderResults: ln, fetcherResults: ar } = await fc(x.matches, $, de, Pe, C);
		if (C.signal.aborted) return { shortCircuited: !0 };
		L && L.signal.removeEventListener('abort', io), Pe.forEach((ne) => N.delete(ne.key));
		let sr = Vd([...ln, ...ar]);
		if (sr) {
			if (sr.idx >= de.length) {
				let ne = Pe[sr.idx - de.length].key;
				te.add(ne);
			}
			return await no(C, sr.result, { replace: U }), { shortCircuited: !0 };
		}
		let { loaderData: ur, errors: Nt } = Id(x, $, de, ln, W, Pe, ar, ye);
		ye.forEach((ne, Ve) => {
			ne.subscribe((ct) => {
				(ct || ne.done) && ye.delete(Ve);
			});
		}),
			c.v7_partialHydration &&
				z &&
				x.errors &&
				Object.entries(x.errors)
					.filter((ne) => {
						let [Ve] = ne;
						return !de.some((ct) => ct.route.id === Ve);
					})
					.forEach((ne) => {
						let [Ve, ct] = ne;
						Nt = Object.assign(Nt || {}, { [Ve]: ct });
					});
		let hi = mc(),
			mi = vc(B),
			vi = hi || mi || Pe.length > 0;
		return he({ loaderData: ur, errors: Nt }, vi ? { fetchers: new Map(x.fetchers) } : {});
	}
	function ia(C, b, $, D) {
		if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
		N.has(C) && on(C);
		let j = (D && D.unstable_flushSync) === !0,
			K = a || l,
			U = Bs(x.location, x.matches, s, c.v7_prependBasename, $, c.v7_relativeSplatPath, b, D == null ? void 0 : D.relative),
			z = $r(K, U, s);
		if (!z) {
			oo(C, b, dt(404, { pathname: U }), { flushSync: j });
			return;
		}
		let { path: Q, submission: W, error: _e } = Od(c.v7_normalizeFormMethod, !0, U, D);
		if (_e) {
			oo(C, b, _e, { flushSync: j });
			return;
		}
		let Ne = Vs(z, Q);
		if (((O = (D && D.preventScrollReset) === !0), W && Et(W.formMethod))) {
			la(C, b, Q, Ne, z, j, W);
			return;
		}
		Ge.set(C, { routeId: b, path: Q }), lr(C, b, Q, Ne, z, j, W);
	}
	async function la(C, b, $, D, j, K, U) {
		if ((aa(), Ge.delete(C), !D.route.action && !D.route.lazy)) {
			let Te = dt(405, { method: U.formMethod, pathname: $, routeId: b });
			oo(C, b, Te, { flushSync: K });
			return;
		}
		let z = x.fetchers.get(C);
		rn(C, V0(U, z), { flushSync: K });
		let Q = new AbortController(),
			W = dr(e.history, $, Q.signal, U);
		N.set(C, Q);
		let _e = F,
			V = (await ro('action', W, [D], j))[0];
		if (W.signal.aborted) {
			N.get(C) === Q && N.delete(C);
			return;
		}
		if (c.v7_fetcherPersist && be.has(C)) {
			if (Hn(V) || ht(V)) {
				rn(C, cn(void 0));
				return;
			}
		} else {
			if (Hn(V))
				if ((N.delete(C), B > _e)) {
					rn(C, cn(void 0));
					return;
				} else return te.add(C), rn(C, go(U)), no(W, V, { fetcherSubmission: U });
			if (ht(V)) {
				oo(C, b, V.error);
				return;
			}
		}
		if (Bn(V)) throw dt(400, { type: 'defer-action' });
		let de = x.navigation.location || x.location,
			Pe = dr(e.history, de, Q.signal),
			io = a || l,
			ln = x.navigation.state !== 'idle' ? $r(io, x.navigation.location, s) : x.matches;
		J(ln, "Didn't find any matches after fetcher action");
		let ar = ++F;
		X.set(C, ar);
		let sr = go(U, V.data);
		x.fetchers.set(C, sr);
		let [ur, Nt] = Md(e.history, x, ln, U, de, !1, c.unstable_skipActionErrorRevalidation, ee, oe, G, be, Ge, te, io, s, [D.route.id, V]);
		Nt.filter((Te) => Te.key !== C).forEach((Te) => {
			let lo = Te.key,
				Sc = x.fetchers.get(lo),
				kv = go(void 0, Sc ? Sc.data : void 0);
			x.fetchers.set(lo, kv), N.has(lo) && on(lo), Te.controller && N.set(lo, Te.controller);
		}),
			He({ fetchers: new Map(x.fetchers) });
		let hi = () => Nt.forEach((Te) => on(Te.key));
		Q.signal.addEventListener('abort', hi);
		let { loaderResults: mi, fetcherResults: vi } = await fc(x.matches, ln, ur, Nt, Pe);
		if (Q.signal.aborted) return;
		Q.signal.removeEventListener('abort', hi), X.delete(C), N.delete(C), Nt.forEach((Te) => N.delete(Te.key));
		let ne = Vd([...mi, ...vi]);
		if (ne) {
			if (ne.idx >= ur.length) {
				let Te = Nt[ne.idx - ur.length].key;
				te.add(Te);
			}
			return no(Pe, ne.result);
		}
		let { loaderData: Ve, errors: ct } = Id(x, x.matches, ur, mi, void 0, Nt, vi, ye);
		if (x.fetchers.has(C)) {
			let Te = cn(V.data);
			x.fetchers.set(C, Te);
		}
		vc(ar), x.navigation.state === 'loading' && ar > B ? (J(P, 'Expected pending action'), L && L.abort(), Mn(x.navigation.location, { matches: ln, loaderData: Ve, errors: ct, fetchers: new Map(x.fetchers) })) : (He({ errors: ct, loaderData: Ud(x.loaderData, Ve, ln, ct), fetchers: new Map(x.fetchers) }), (ee = !1));
	}
	async function lr(C, b, $, D, j, K, U) {
		let z = x.fetchers.get(C);
		rn(C, go(U, z ? z.data : void 0), { flushSync: K });
		let Q = new AbortController(),
			W = dr(e.history, $, Q.signal);
		N.set(C, Q);
		let _e = F,
			V = (await ro('loader', W, [D], j))[0];
		if ((Bn(V) && (V = (await Yh(V, W.signal, !0)) || V), N.get(C) === Q && N.delete(C), !W.signal.aborted)) {
			if (be.has(C)) {
				rn(C, cn(void 0));
				return;
			}
			if (Hn(V))
				if (B > _e) {
					rn(C, cn(void 0));
					return;
				} else {
					te.add(C), await no(W, V);
					return;
				}
			if (ht(V)) {
				oo(C, b, V.error);
				return;
			}
			J(!Bn(V), 'Unhandled fetcher deferred data'), rn(C, cn(V.data));
		}
	}
	async function no(C, b, $) {
		let { submission: D, fetcherSubmission: j, replace: K } = $ === void 0 ? {} : $;
		b.response.headers.has('X-Remix-Revalidate') && (ee = !0);
		let U = b.response.headers.get('Location');
		J(U, 'Expected a Location header on the redirect Response'), (U = zd(U, new URL(C.url), s));
		let z = Jo(x.location, U, { _isRedirect: !0 });
		if (n) {
			let de = !1;
			if (b.response.headers.has('X-Remix-Reload-Document')) de = !0;
			else if (Zu.test(U)) {
				const Pe = e.history.createURL(U);
				de = Pe.origin !== t.location.origin || Gr(Pe.pathname, s) == null;
			}
			if (de) {
				K ? t.location.replace(U) : t.location.assign(U);
				return;
			}
		}
		L = null;
		let Q = K === !0 ? Se.Replace : Se.Push,
			{ formMethod: W, formAction: _e, formEncType: Ne } = x.navigation;
		!D && !j && W && _e && Ne && (D = Kd(x.navigation));
		let V = D || j;
		if (P0.has(b.response.status) && V && Et(V.formMethod)) await _t(Q, z, { submission: he({}, V, { formAction: U }), preventScrollReset: O });
		else {
			let de = ja(z, D);
			await _t(Q, z, { overrideNavigation: de, fetcherSubmission: j, preventScrollReset: O });
		}
	}
	async function ro(C, b, $, D) {
		try {
			let j = await O0(u, C, b, $, D, i, o);
			return await Promise.all(
				j.map((K, U) => {
					if (I0(K)) {
						let z = K.result;
						return { type: fe.redirect, response: j0(z, b, $[U].route.id, D, s, c.v7_relativeSplatPath) };
					}
					return A0(K);
				})
			);
		} catch (j) {
			return $.map(() => ({ type: fe.error, error: j }));
		}
	}
	async function fc(C, b, $, D, j) {
		let [K, ...U] = await Promise.all([
			$.length ? ro('loader', j, $, b) : [],
			...D.map((z) => {
				if (z.matches && z.match && z.controller) {
					let Q = dr(e.history, z.path, z.controller.signal);
					return ro('loader', Q, [z.match], z.matches).then((W) => W[0]);
				} else return Promise.resolve({ type: fe.error, error: dt(404, { pathname: z.path }) });
			}),
		]);
		return (
			await Promise.all([
				Wd(
					C,
					$,
					K,
					K.map(() => j.signal),
					!1,
					x.loaderData
				),
				Wd(
					C,
					D.map((z) => z.match),
					U,
					D.map((z) => (z.controller ? z.controller.signal : null)),
					!0
				),
			]),
			{ loaderResults: K, fetcherResults: U }
		);
	}
	function aa() {
		(ee = !0),
			oe.push(...sa()),
			Ge.forEach((C, b) => {
				N.has(b) && (G.push(b), on(b));
			});
	}
	function rn(C, b, $) {
		$ === void 0 && ($ = {}), x.fetchers.set(C, b), He({ fetchers: new Map(x.fetchers) }, { flushSync: ($ && $.flushSync) === !0 });
	}
	function oo(C, b, $, D) {
		D === void 0 && (D = {});
		let j = Oo(x.matches, b);
		fi(C), He({ errors: { [j.route.id]: $ }, fetchers: new Map(x.fetchers) }, { flushSync: (D && D.flushSync) === !0 });
	}
	function pc(C) {
		return c.v7_fetcherPersist && (Ue.set(C, (Ue.get(C) || 0) + 1), be.has(C) && be.delete(C)), x.fetchers.get(C) || $0;
	}
	function fi(C) {
		let b = x.fetchers.get(C);
		N.has(C) && !(b && b.state === 'loading' && X.has(C)) && on(C), Ge.delete(C), X.delete(C), te.delete(C), be.delete(C), x.fetchers.delete(C);
	}
	function wv(C) {
		if (c.v7_fetcherPersist) {
			let b = (Ue.get(C) || 0) - 1;
			b <= 0 ? (Ue.delete(C), be.add(C)) : Ue.set(C, b);
		} else fi(C);
		He({ fetchers: new Map(x.fetchers) });
	}
	function on(C) {
		let b = N.get(C);
		J(b, 'Expected fetch controller: ' + C), b.abort(), N.delete(C);
	}
	function hc(C) {
		for (let b of C) {
			let $ = pc(b),
				D = cn($.data);
			x.fetchers.set(b, D);
		}
	}
	function mc() {
		let C = [],
			b = !1;
		for (let $ of te) {
			let D = x.fetchers.get($);
			J(D, 'Expected fetcher: ' + $), D.state === 'loading' && (te.delete($), C.push($), (b = !0));
		}
		return hc(C), b;
	}
	function vc(C) {
		let b = [];
		for (let [$, D] of X)
			if (D < C) {
				let j = x.fetchers.get($);
				J(j, 'Expected fetcher: ' + $), j.state === 'loading' && (on($), X.delete($), b.push($));
			}
		return hc(b), b.length > 0;
	}
	function xv(C, b) {
		let $ = x.blockers.get(C) || vo;
		return Be.get(C) !== b && Be.set(C, b), $;
	}
	function gc(C) {
		x.blockers.delete(C), Be.delete(C);
	}
	function pi(C, b) {
		let $ = x.blockers.get(C) || vo;
		J(($.state === 'unblocked' && b.state === 'blocked') || ($.state === 'blocked' && b.state === 'blocked') || ($.state === 'blocked' && b.state === 'proceeding') || ($.state === 'blocked' && b.state === 'unblocked') || ($.state === 'proceeding' && b.state === 'unblocked'), 'Invalid blocker state transition: ' + $.state + ' -> ' + b.state);
		let D = new Map(x.blockers);
		D.set(C, b), He({ blockers: D });
	}
	function yc(C) {
		let { currentLocation: b, nextLocation: $, historyAction: D } = C;
		if (Be.size === 0) return;
		Be.size > 1 && Hr(!1, 'A router only supports one blocker at a time');
		let j = Array.from(Be.entries()),
			[K, U] = j[j.length - 1],
			z = x.blockers.get(K);
		if (!(z && z.state === 'proceeding') && U({ currentLocation: b, nextLocation: $, historyAction: D })) return K;
	}
	function sa(C) {
		let b = [];
		return (
			ye.forEach(($, D) => {
				(!C || C(D)) && ($.cancel(), b.push(D), ye.delete(D));
			}),
			b
		);
	}
	function Sv(C, b, $) {
		if (((y = C), (v = b), (w = $ || null), !S && x.navigation === Aa)) {
			S = !0;
			let D = xc(x.location, x.matches);
			D != null && He({ restoreScrollPosition: D });
		}
		return () => {
			(y = null), (v = null), (w = null);
		};
	}
	function wc(C, b) {
		return (
			(w &&
				w(
					C,
					b.map((D) => r0(D, x.loaderData))
				)) ||
			C.key
		);
	}
	function Ev(C, b) {
		if (y && v) {
			let $ = wc(C, b);
			y[$] = v();
		}
	}
	function xc(C, b) {
		if (y) {
			let $ = wc(C, b),
				D = y[$];
			if (typeof D == 'number') return D;
		}
		return null;
	}
	function Cv(C) {
		(i = {}), (a = Us(C, o, void 0, i));
	}
	return (
		(_ = {
			get basename() {
				return s;
			},
			get future() {
				return c;
			},
			get state() {
				return x;
			},
			get routes() {
				return l;
			},
			get window() {
				return t;
			},
			initialize: ir,
			subscribe: na,
			enableScrollRestoration: Sv,
			navigate: di,
			fetch: ia,
			revalidate: An,
			createHref: (C) => e.history.createHref(C),
			encodeLocation: (C) => e.history.encodeLocation(C),
			getFetcher: pc,
			deleteFetcher: wv,
			dispose: ta,
			getBlocker: xv,
			deleteBlocker: gc,
			_internalFetchControllers: N,
			_internalActiveDeferreds: ye,
			_internalSetRoutes: Cv,
		}),
		_
	);
}
function N0(e) {
	return e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0));
}
function Bs(e, t, n, r, o, i, l, a) {
	let s, u;
	if (l) {
		s = [];
		for (let d of t)
			if ((s.push(d), d.route.id === l)) {
				u = d;
				break;
			}
	} else (s = t), (u = t[t.length - 1]);
	let c = Yu(o || '.', Qu(s, i), Gr(e.pathname, n) || e.pathname, a === 'path');
	return o == null && ((c.search = e.search), (c.hash = e.hash)), (o == null || o === '' || o === '.') && u && u.route.index && !Ju(c.search) && (c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'), r && n !== '/' && (c.pathname = c.pathname === '/' ? n : Kt([n, c.pathname])), qn(c);
}
function Od(e, t, n, r) {
	if (!r || !N0(r)) return { path: n };
	if (r.formMethod && !B0(r.formMethod)) return { path: n, error: dt(405, { method: r.formMethod }) };
	let o = () => ({ path: n, error: dt(400, { type: 'invalid-body' }) }),
		i = r.formMethod || 'get',
		l = e ? i.toUpperCase() : i.toLowerCase(),
		a = Kh(n);
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!Et(l)) return o();
			let p =
				typeof r.body == 'string'
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((y, w) => {
							let [v, S] = w;
							return (
								'' +
								y +
								v +
								'=' +
								S +
								`
`
							);
					  }, '')
					: String(r.body);
			return { path: n, submission: { formMethod: l, formAction: a, formEncType: r.formEncType, formData: void 0, json: void 0, text: p } };
		} else if (r.formEncType === 'application/json') {
			if (!Et(l)) return o();
			try {
				let p = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
				return { path: n, submission: { formMethod: l, formAction: a, formEncType: r.formEncType, formData: void 0, json: p, text: void 0 } };
			} catch {
				return o();
			}
		}
	}
	J(typeof FormData == 'function', 'FormData is not available in this environment');
	let s, u;
	if (r.formData) (s = Hs(r.formData)), (u = r.formData);
	else if (r.body instanceof FormData) (s = Hs(r.body)), (u = r.body);
	else if (r.body instanceof URLSearchParams) (s = r.body), (u = Fd(s));
	else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
	else
		try {
			(s = new URLSearchParams(r.body)), (u = Fd(s));
		} catch {
			return o();
		}
	let c = { formMethod: l, formAction: a, formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded', formData: u, json: void 0, text: void 0 };
	if (Et(c.formMethod)) return { path: n, submission: c };
	let d = On(n);
	return t && d.search && Ju(d.search) && s.append('index', ''), (d.search = '?' + s), { path: qn(d), submission: c };
}
function T0(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((o) => o.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function Md(e, t, n, r, o, i, l, a, s, u, c, d, p, y, w, v) {
	let S = v ? (ht(v[1]) ? v[1].error : v[1].data) : void 0,
		m = e.createURL(t.location),
		h = e.createURL(o),
		g = v && ht(v[1]) ? v[0] : void 0,
		E = g ? T0(n, g) : n,
		k = v ? v[1].statusCode : void 0,
		_ = l && k && k >= 400,
		x = E.filter((O, L) => {
			let { route: I } = O;
			if (I.lazy) return !0;
			if (I.loader == null) return !1;
			if (i) return typeof I.loader != 'function' || I.loader.hydrate ? !0 : t.loaderData[I.id] === void 0 && (!t.errors || t.errors[I.id] === void 0);
			if (L0(t.loaderData, t.matches[L], O) || s.some((H) => H === O.route.id)) return !0;
			let M = t.matches[L],
				Z = O;
			return Ad(O, he({ currentUrl: m, currentParams: M.params, nextUrl: h, nextParams: Z.params }, r, { actionResult: S, unstable_actionStatus: k, defaultShouldRevalidate: _ ? !1 : a || m.pathname + m.search === h.pathname + h.search || m.search !== h.search || Wh(M, Z) }));
		}),
		P = [];
	return (
		d.forEach((O, L) => {
			if (i || !n.some((ee) => ee.route.id === O.routeId) || c.has(L)) return;
			let I = $r(y, O.path, w);
			if (!I) {
				P.push({ key: L, routeId: O.routeId, path: O.path, matches: null, match: null, controller: null });
				return;
			}
			let M = t.fetchers.get(L),
				Z = Vs(I, O.path),
				H = !1;
			p.has(L) ? (H = !1) : u.includes(L) ? (H = !0) : M && M.state !== 'idle' && M.data === void 0 ? (H = a) : (H = Ad(Z, he({ currentUrl: m, currentParams: t.matches[t.matches.length - 1].params, nextUrl: h, nextParams: n[n.length - 1].params }, r, { actionResult: S, unstable_actionStatus: k, defaultShouldRevalidate: _ ? !1 : a }))), H && P.push({ key: L, routeId: O.routeId, path: O.path, matches: I, match: Z, controller: new AbortController() });
		}),
		[x, P]
	);
}
function L0(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		o = e[n.route.id] === void 0;
	return r || o;
}
function Wh(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function Ad(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == 'boolean') return n;
	}
	return t.defaultShouldRevalidate;
}
async function jd(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let o = n[e.id];
	J(o, 'No route found in manifest');
	let i = {};
	for (let l in r) {
		let s = o[l] !== void 0 && l !== 'hasErrorBoundary';
		Hr(!s, 'Route "' + o.id + '" has a static property "' + l + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + l + '" will be ignored.')), !s && !t0.has(l) && (i[l] = r[l]);
	}
	Object.assign(o, i), Object.assign(o, he({}, t(o), { lazy: void 0 }));
}
function D0(e) {
	return Promise.all(e.matches.map((t) => t.resolve()));
}
async function O0(e, t, n, r, o, i, l, a) {
	let s = r.reduce((d, p) => d.add(p.route.id), new Set()),
		u = new Set(),
		c = await e({
			matches: o.map((d) => {
				let p = s.has(d.route.id);
				return he({}, d, { shouldLoad: p, resolve: (w) => (u.add(d.route.id), p ? M0(t, n, d, i, l, w, a) : Promise.resolve({ type: fe.data, result: void 0 })) });
			}),
			request: n,
			params: o[0].params,
			context: a,
		});
	return o.forEach((d) => J(u.has(d.route.id), '`match.resolve()` was not called for route id "' + d.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')), c.filter((d, p) => s.has(o[p].route.id));
}
async function M0(e, t, n, r, o, i, l) {
	let a,
		s,
		u = (c) => {
			let d,
				p = new Promise((v, S) => (d = S));
			(s = () => d()), t.signal.addEventListener('abort', s);
			let y = (v) => (typeof c != 'function' ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean ' + ('"' + e + '" [routeId: ' + n.route.id + ']'))) : c({ request: t, params: n.params, context: l }, ...(v !== void 0 ? [v] : []))),
				w;
			return (
				i
					? (w = i((v) => y(v)))
					: (w = (async () => {
							try {
								return { type: 'data', result: await y() };
							} catch (v) {
								return { type: 'error', result: v };
							}
					  })()),
				Promise.race([w, p])
			);
		};
	try {
		let c = n.route[e];
		if (n.route.lazy)
			if (c) {
				let d,
					[p] = await Promise.all([
						u(c).catch((y) => {
							d = y;
						}),
						jd(n.route, o, r),
					]);
				if (d !== void 0) throw d;
				a = p;
			} else if ((await jd(n.route, o, r), (c = n.route[e]), c)) a = await u(c);
			else if (e === 'action') {
				let d = new URL(t.url),
					p = d.pathname + d.search;
				throw dt(405, { method: t.method, pathname: p, routeId: n.route.id });
			} else return { type: fe.data, result: void 0 };
		else if (c) a = await u(c);
		else {
			let d = new URL(t.url),
				p = d.pathname + d.search;
			throw dt(404, { pathname: p });
		}
		J(a.result !== void 0, 'You defined ' + (e === 'action' ? 'an action' : 'a loader') + ' for route ' + ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') + 'function. Please return a value or `null`.');
	} catch (c) {
		return { type: fe.error, result: c };
	} finally {
		s && t.signal.removeEventListener('abort', s);
	}
	return a;
}
async function A0(e) {
	let { result: t, type: n, status: r } = e;
	if (Qh(t)) {
		let l;
		try {
			let a = t.headers.get('Content-Type');
			a && /\bapplication\/json\b/.test(a) ? (t.body == null ? (l = null) : (l = await t.json())) : (l = await t.text());
		} catch (a) {
			return { type: fe.error, error: a };
		}
		return n === fe.error ? { type: fe.error, error: new Gu(t.status, t.statusText, l), statusCode: t.status, headers: t.headers } : { type: fe.data, data: l, statusCode: t.status, headers: t.headers };
	}
	if (n === fe.error) return { type: fe.error, error: t, statusCode: Xu(t) ? t.status : r };
	if (U0(t)) {
		var o, i;
		return { type: fe.deferred, deferredData: t, statusCode: (o = t.init) == null ? void 0 : o.status, headers: ((i = t.init) == null ? void 0 : i.headers) && new Headers(t.init.headers) };
	}
	return { type: fe.data, data: t, statusCode: r };
}
function j0(e, t, n, r, o, i) {
	let l = e.headers.get('Location');
	if ((J(l, 'Redirects returned/thrown from loaders/actions must have a Location header'), !Zu.test(l))) {
		let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
		(l = Bs(new URL(t.url), a, o, !0, l, i)), e.headers.set('Location', l);
	}
	return e;
}
function zd(e, t, n) {
	if (Zu.test(e)) {
		let r = e,
			o = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
			i = Gr(o.pathname, n) != null;
		if (o.origin === t.origin && i) return o.pathname + o.search + o.hash;
	}
	return e;
}
function dr(e, t, n, r) {
	let o = e.createURL(Kh(t)).toString(),
		i = { signal: n };
	if (r && Et(r.formMethod)) {
		let { formMethod: l, formEncType: a } = r;
		(i.method = l.toUpperCase()), a === 'application/json' ? ((i.headers = new Headers({ 'Content-Type': a })), (i.body = JSON.stringify(r.json))) : a === 'text/plain' ? (i.body = r.text) : a === 'application/x-www-form-urlencoded' && r.formData ? (i.body = Hs(r.formData)) : (i.body = r.formData);
	}
	return new Request(o, i);
}
function Hs(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == 'string' ? r : r.name);
	return t;
}
function Fd(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function z0(e, t, n, r, o, i) {
	let l = {},
		a = null,
		s,
		u = !1,
		c = {},
		d = r && ht(r[1]) ? r[1].error : void 0;
	return (
		n.forEach((p, y) => {
			let w = t[y].route.id;
			if ((J(!Hn(p), 'Cannot handle redirect results in processLoaderData'), ht(p))) {
				let v = p.error;
				d !== void 0 && ((v = d), (d = void 0)), (a = a || {});
				{
					let S = Oo(e, w);
					a[S.route.id] == null && (a[S.route.id] = v);
				}
				(l[w] = void 0), u || ((u = !0), (s = Xu(p.error) ? p.error.status : 500)), p.headers && (c[w] = p.headers);
			} else Bn(p) ? (o.set(w, p.deferredData), (l[w] = p.deferredData.data), p.statusCode != null && p.statusCode !== 200 && !u && (s = p.statusCode), p.headers && (c[w] = p.headers)) : ((l[w] = p.data), p.statusCode && p.statusCode !== 200 && !u && (s = p.statusCode), p.headers && (c[w] = p.headers));
		}),
		d !== void 0 && r && ((a = { [r[0]]: d }), (l[r[0]] = void 0)),
		{ loaderData: l, errors: a, statusCode: s || 200, loaderHeaders: c }
	);
}
function Id(e, t, n, r, o, i, l, a) {
	let { loaderData: s, errors: u } = z0(t, n, r, o, a);
	for (let c = 0; c < i.length; c++) {
		let { key: d, match: p, controller: y } = i[c];
		J(l !== void 0 && l[c] !== void 0, 'Did not find corresponding fetcher result');
		let w = l[c];
		if (!(y && y.signal.aborted))
			if (ht(w)) {
				let v = Oo(e.matches, p == null ? void 0 : p.route.id);
				(u && u[v.route.id]) || (u = he({}, u, { [v.route.id]: w.error })), e.fetchers.delete(d);
			} else if (Hn(w)) J(!1, 'Unhandled fetcher revalidation redirect');
			else if (Bn(w)) J(!1, 'Unhandled fetcher deferred data');
			else {
				let v = cn(w.data);
				e.fetchers.set(d, v);
			}
	}
	return { loaderData: s, errors: u };
}
function Ud(e, t, n, r) {
	let o = he({}, t);
	for (let i of n) {
		let l = i.route.id;
		if ((t.hasOwnProperty(l) ? t[l] !== void 0 && (o[l] = t[l]) : e[l] !== void 0 && i.route.loader && (o[l] = e[l]), r && r.hasOwnProperty(l))) break;
	}
	return o;
}
function Bd(e) {
	return e ? (ht(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function Oo(e, t) {
	return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function Hd(e) {
	let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
	return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function dt(e, t) {
	let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
		l = 'Unknown Server Error',
		a = 'Unknown @remix-run/router error';
	return e === 400 ? ((l = 'Bad Request'), o && n && r ? (a = 'You made a ' + o + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + 'so there is no way to handle the request.') : i === 'defer-action' ? (a = 'defer() is not supported in actions') : i === 'invalid-body' && (a = 'Unable to encode submission body')) : e === 403 ? ((l = 'Forbidden'), (a = 'Route "' + r + '" does not match URL "' + n + '"')) : e === 404 ? ((l = 'Not Found'), (a = 'No route matches URL "' + n + '"')) : e === 405 && ((l = 'Method Not Allowed'), o && n && r ? (a = 'You made a ' + o.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + 'so there is no way to handle the request.') : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')), new Gu(e || 500, l, new Error(a), !0);
}
function Vd(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (Hn(n)) return { result: n, idx: t };
	}
}
function Kh(e) {
	let t = typeof e == 'string' ? On(e) : e;
	return qn(he({}, t, { hash: '' }));
}
function F0(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === '' ? t.hash !== '' : e.hash === t.hash ? !0 : t.hash !== '';
}
function I0(e) {
	return Qh(e.result) && b0.has(e.result.status);
}
function Bn(e) {
	return e.type === fe.deferred;
}
function ht(e) {
	return e.type === fe.error;
}
function Hn(e) {
	return (e && e.type) === fe.redirect;
}
function U0(e) {
	let t = e;
	return t && typeof t == 'object' && typeof t.data == 'object' && typeof t.subscribe == 'function' && typeof t.cancel == 'function' && typeof t.resolveData == 'function';
}
function Qh(e) {
	return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.headers == 'object' && typeof e.body < 'u';
}
function B0(e) {
	return k0.has(e.toLowerCase());
}
function Et(e) {
	return E0.has(e.toLowerCase());
}
async function Wd(e, t, n, r, o, i) {
	for (let l = 0; l < n.length; l++) {
		let a = n[l],
			s = t[l];
		if (!s) continue;
		let u = e.find((d) => d.route.id === s.route.id),
			c = u != null && !Wh(u, s) && (i && i[s.route.id]) !== void 0;
		if (Bn(a) && (o || c)) {
			let d = r[l];
			J(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
				await Yh(a, d, o).then((p) => {
					p && (n[l] = p || n[l]);
				});
		}
	}
}
async function Yh(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: fe.data, data: e.deferredData.unwrappedData };
			} catch (o) {
				return { type: fe.error, error: o };
			}
		return { type: fe.data, data: e.deferredData.data };
	}
}
function Ju(e) {
	return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Vs(e, t) {
	let n = typeof t == 'string' ? On(t).search : t.search;
	if (e[e.length - 1].route.index && Ju(n || '')) return e[e.length - 1];
	let r = Bh(e);
	return r[r.length - 1];
}
function Kd(e) {
	let { formMethod: t, formAction: n, formEncType: r, text: o, formData: i, json: l } = e;
	if (!(!t || !n || !r)) {
		if (o != null) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: o };
		if (i != null) return { formMethod: t, formAction: n, formEncType: r, formData: i, json: void 0, text: void 0 };
		if (l !== void 0) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: l, text: void 0 };
	}
}
function ja(e, t) {
	return t ? { state: 'loading', location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: 'loading', location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
}
function H0(e, t) {
	return { state: 'submitting', location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text };
}
function go(e, t) {
	return e ? { state: 'loading', formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: 'loading', formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t };
}
function V0(e, t) {
	return { state: 'submitting', formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 };
}
function cn(e) {
	return { state: 'idle', formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e };
}
function W0(e, t) {
	try {
		let n = e.sessionStorage.getItem(Vh);
		if (n) {
			let r = JSON.parse(n);
			for (let [o, i] of Object.entries(r || {})) i && Array.isArray(i) && t.set(o, new Set(i || []));
		}
	} catch {}
}
function K0(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, o] of t) n[r] = [...o];
		try {
			e.sessionStorage.setItem(Vh, JSON.stringify(n));
		} catch (r) {
			Hr(!1, 'Failed to save applied view transitions in sessionStorage (' + r + ').');
		}
	}
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pl() {
	return (
		(Pl = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Pl.apply(this, arguments)
	);
}
const Gl = f.createContext(null),
	Gh = f.createContext(null),
	rr = f.createContext(null),
	qu = f.createContext(null),
	or = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Xh = f.createContext(null);
function Q0(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	si() || J(!1);
	let { basename: r, navigator: o } = f.useContext(rr),
		{ hash: i, pathname: l, search: a } = Jh(e, { relative: n }),
		s = l;
	return r !== '/' && (s = l === '/' ? r : Kt([r, l])), o.createHref({ pathname: s, search: a, hash: i });
}
function si() {
	return f.useContext(qu) != null;
}
function Xl() {
	return si() || J(!1), f.useContext(qu).location;
}
function Zh(e) {
	f.useContext(rr).static || f.useLayoutEffect(e);
}
function Y0() {
	let { isDataRoute: e } = f.useContext(or);
	return e ? iw() : G0();
}
function G0() {
	si() || J(!1);
	let e = f.useContext(Gl),
		{ basename: t, future: n, navigator: r } = f.useContext(rr),
		{ matches: o } = f.useContext(or),
		{ pathname: i } = Xl(),
		l = JSON.stringify(Qu(o, n.v7_relativeSplatPath)),
		a = f.useRef(!1);
	return (
		Zh(() => {
			a.current = !0;
		}),
		f.useCallback(
			function (u, c) {
				if ((c === void 0 && (c = {}), !a.current)) return;
				if (typeof u == 'number') {
					r.go(u);
					return;
				}
				let d = Yu(u, JSON.parse(l), i, c.relative === 'path');
				e == null && t !== '/' && (d.pathname = d.pathname === '/' ? t : Kt([t, d.pathname])), (c.replace ? r.replace : r.push)(d, c.state, c);
			},
			[t, r, l, i, e]
		)
	);
}
function Jh(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = f.useContext(rr),
		{ matches: o } = f.useContext(or),
		{ pathname: i } = Xl(),
		l = JSON.stringify(Qu(o, r.v7_relativeSplatPath));
	return f.useMemo(() => Yu(e, JSON.parse(l), i, n === 'path'), [e, l, i, n]);
}
function X0(e, t, n, r) {
	si() || J(!1);
	let { navigator: o } = f.useContext(rr),
		{ matches: i } = f.useContext(or),
		l = i[i.length - 1],
		a = l ? l.params : {};
	l && l.pathname;
	let s = l ? l.pathnameBase : '/';
	l && l.route;
	let u = Xl(),
		c;
	c = u;
	let d = c.pathname || '/',
		p = d;
	if (s !== '/') {
		let v = s.replace(/^\//, '').split('/');
		p = '/' + d.replace(/^\//, '').split('/').slice(v.length).join('/');
	}
	let y = $r(e, { pathname: p });
	return tw(y && y.map((v) => Object.assign({}, v, { params: Object.assign({}, a, v.params), pathname: Kt([s, o.encodeLocation ? o.encodeLocation(v.pathname).pathname : v.pathname]), pathnameBase: v.pathnameBase === '/' ? s : Kt([s, o.encodeLocation ? o.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]) })), i, n, r);
}
function Z0() {
	let e = tm(),
		t = Xu(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
	return f.createElement(f.Fragment, null, f.createElement('h2', null, 'Unexpected Application Error!'), f.createElement('h3', { style: { fontStyle: 'italic' } }, t), n ? f.createElement('pre', { style: o }, n) : null, null);
}
const J0 = f.createElement(Z0, null);
class q0 extends f.Component {
	constructor(t) {
		super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle') ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
	}
	componentDidCatch(t, n) {
		console.error('React Router caught the following error during render', t, n);
	}
	render() {
		return this.state.error !== void 0 ? f.createElement(or.Provider, { value: this.props.routeContext }, f.createElement(Xh.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
	}
}
function ew(e) {
	let { routeContext: t, match: n, children: r } = e,
		o = f.useContext(Gl);
	return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), f.createElement(or.Provider, { value: t }, r);
}
function tw(e, t, n, r) {
	var o;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let l = e,
		a = (o = n) == null ? void 0 : o.errors;
	if (a != null) {
		let c = l.findIndex((d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
		c >= 0 || J(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
	}
	let s = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let c = 0; c < l.length; c++) {
			let d = l[c];
			if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id)) {
				let { loaderData: p, errors: y } = n,
					w = d.route.loader && p[d.route.id] === void 0 && (!y || y[d.route.id] === void 0);
				if (d.route.lazy || w) {
					(s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
					break;
				}
			}
		}
	return l.reduceRight((c, d, p) => {
		let y,
			w = !1,
			v = null,
			S = null;
		n && ((y = a && d.route.id ? a[d.route.id] : void 0), (v = d.route.errorElement || J0), s && (u < 0 && p === 0 ? (lw('route-fallback'), (w = !0), (S = null)) : u === p && ((w = !0), (S = d.route.hydrateFallbackElement || null))));
		let m = t.concat(l.slice(0, p + 1)),
			h = () => {
				let g;
				return y ? (g = v) : w ? (g = S) : d.route.Component ? (g = f.createElement(d.route.Component, null)) : d.route.element ? (g = d.route.element) : (g = c), f.createElement(ew, { match: d, routeContext: { outlet: c, matches: m, isDataRoute: n != null }, children: g });
			};
		return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? f.createElement(q0, { location: n.location, revalidation: n.revalidation, component: v, error: y, children: h(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : h();
	}, null);
}
var qh = (function (e) {
		return (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e;
	})(qh || {}),
	$l = (function (e) {
		return (e.UseBlocker = 'useBlocker'), (e.UseLoaderData = 'useLoaderData'), (e.UseActionData = 'useActionData'), (e.UseRouteError = 'useRouteError'), (e.UseNavigation = 'useNavigation'), (e.UseRouteLoaderData = 'useRouteLoaderData'), (e.UseMatches = 'useMatches'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), (e.UseRouteId = 'useRouteId'), e;
	})($l || {});
function nw(e) {
	let t = f.useContext(Gl);
	return t || J(!1), t;
}
function rw(e) {
	let t = f.useContext(Gh);
	return t || J(!1), t;
}
function ow(e) {
	let t = f.useContext(or);
	return t || J(!1), t;
}
function em(e) {
	let t = ow(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || J(!1), n.route.id;
}
function tm() {
	var e;
	let t = f.useContext(Xh),
		n = rw($l.UseRouteError),
		r = em($l.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function iw() {
	let { router: e } = nw(qh.UseNavigateStable),
		t = em($l.UseNavigateStable),
		n = f.useRef(!1);
	return (
		Zh(() => {
			n.current = !0;
		}),
		f.useCallback(
			function (o, i) {
				i === void 0 && (i = {}), n.current && (typeof o == 'number' ? e.navigate(o) : e.navigate(o, Pl({ fromRouteId: t }, i)));
			},
			[e, t]
		)
	);
}
const Qd = {};
function lw(e, t, n) {
	Qd[e] || (Qd[e] = !0);
}
function aw(e) {
	let { basename: t = '/', children: n = null, location: r, navigationType: o = Se.Pop, navigator: i, static: l = !1, future: a } = e;
	si() && J(!1);
	let s = t.replace(/^\/*/, '/'),
		u = f.useMemo(() => ({ basename: s, navigator: i, static: l, future: Pl({ v7_relativeSplatPath: !1 }, a) }), [s, a, i, l]);
	typeof r == 'string' && (r = On(r));
	let { pathname: c = '/', search: d = '', hash: p = '', state: y = null, key: w = 'default' } = r,
		v = f.useMemo(() => {
			let S = Gr(c, s);
			return S == null ? null : { location: { pathname: S, search: d, hash: p, state: y, key: w }, navigationType: o };
		}, [s, c, d, p, y, w, o]);
	return v == null ? null : f.createElement(rr.Provider, { value: u }, f.createElement(qu.Provider, { children: n, value: v }));
}
new Promise(() => {});
function sw(e) {
	let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
	return e.Component && Object.assign(t, { element: f.createElement(e.Component), Component: void 0 }), e.HydrateFallback && Object.assign(t, { hydrateFallbackElement: f.createElement(e.HydrateFallback), HydrateFallback: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: f.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t;
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qo() {
	return (
		(qo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		qo.apply(this, arguments)
	);
}
function uw(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
function cw(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function dw(e, t) {
	return e.button === 0 && (!t || t === '_self') && !cw(e);
}
const fw = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset', 'unstable_viewTransition'],
	pw = '6';
try {
	window.__reactRouterVersion = pw;
} catch {}
function hw(e, t) {
	return _0({ basename: void 0, future: qo({}, void 0, { v7_prependBasename: !0 }), history: Jy({ window: void 0 }), hydrationData: mw(), routes: e, mapRouteProperties: sw, unstable_dataStrategy: void 0, window: void 0 }).initialize();
}
function mw() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = qo({}, t, { errors: vw(t.errors) })), t;
}
function vw(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, o] of t)
		if (o && o.__type === 'RouteErrorResponse') n[r] = new Gu(o.status, o.statusText, o.data, o.internal === !0);
		else if (o && o.__type === 'Error') {
			if (o.__subType) {
				let i = window[o.__subType];
				if (typeof i == 'function')
					try {
						let l = new i(o.message);
						(l.stack = ''), (n[r] = l);
					} catch {}
			}
			if (n[r] == null) {
				let i = new Error(o.message);
				(i.stack = ''), (n[r] = i);
			}
		} else n[r] = o;
	return n;
}
const gw = f.createContext({ isTransitioning: !1 }),
	yw = f.createContext(new Map()),
	ww = 'startTransition',
	Yd = Af[ww],
	xw = 'flushSync',
	Gd = Zy[xw];
function Sw(e) {
	Yd ? Yd(e) : e();
}
function yo(e) {
	Gd ? Gd(e) : e();
}
class Ew {
	constructor() {
		(this.status = 'pending'),
			(this.promise = new Promise((t, n) => {
				(this.resolve = (r) => {
					this.status === 'pending' && ((this.status = 'resolved'), t(r));
				}),
					(this.reject = (r) => {
						this.status === 'pending' && ((this.status = 'rejected'), n(r));
					});
			}));
	}
}
function Cw(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[o, i] = f.useState(n.state),
		[l, a] = f.useState(),
		[s, u] = f.useState({ isTransitioning: !1 }),
		[c, d] = f.useState(),
		[p, y] = f.useState(),
		[w, v] = f.useState(),
		S = f.useRef(new Map()),
		{ v7_startTransition: m } = r || {},
		h = f.useCallback(
			(x) => {
				m ? Sw(x) : x();
			},
			[m]
		),
		g = f.useCallback(
			(x, P) => {
				let { deletedFetchers: O, unstable_flushSync: L, unstable_viewTransitionOpts: I } = P;
				O.forEach((Z) => S.current.delete(Z)),
					x.fetchers.forEach((Z, H) => {
						Z.data !== void 0 && S.current.set(H, Z.data);
					});
				let M = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != 'function';
				if (!I || M) {
					L ? yo(() => i(x)) : h(() => i(x));
					return;
				}
				if (L) {
					yo(() => {
						p && (c && c.resolve(), p.skipTransition()), u({ isTransitioning: !0, flushSync: !0, currentLocation: I.currentLocation, nextLocation: I.nextLocation });
					});
					let Z = n.window.document.startViewTransition(() => {
						yo(() => i(x));
					});
					Z.finished.finally(() => {
						yo(() => {
							d(void 0), y(void 0), a(void 0), u({ isTransitioning: !1 });
						});
					}),
						yo(() => y(Z));
					return;
				}
				p ? (c && c.resolve(), p.skipTransition(), v({ state: x, currentLocation: I.currentLocation, nextLocation: I.nextLocation })) : (a(x), u({ isTransitioning: !0, flushSync: !1, currentLocation: I.currentLocation, nextLocation: I.nextLocation }));
			},
			[n.window, p, c, S, h]
		);
	f.useLayoutEffect(() => n.subscribe(g), [n, g]),
		f.useEffect(() => {
			s.isTransitioning && !s.flushSync && d(new Ew());
		}, [s]),
		f.useEffect(() => {
			if (c && l && n.window) {
				let x = l,
					P = c.promise,
					O = n.window.document.startViewTransition(async () => {
						h(() => i(x)), await P;
					});
				O.finished.finally(() => {
					d(void 0), y(void 0), a(void 0), u({ isTransitioning: !1 });
				}),
					y(O);
			}
		}, [h, l, c, n.window]),
		f.useEffect(() => {
			c && l && o.location.key === l.location.key && c.resolve();
		}, [c, p, o.location, l]),
		f.useEffect(() => {
			!s.isTransitioning && w && (a(w.state), u({ isTransitioning: !0, flushSync: !1, currentLocation: w.currentLocation, nextLocation: w.nextLocation }), v(void 0));
		}, [s.isTransitioning, w]),
		f.useEffect(() => {}, []);
	let E = f.useMemo(() => ({ createHref: n.createHref, encodeLocation: n.encodeLocation, go: (x) => n.navigate(x), push: (x, P, O) => n.navigate(x, { state: P, preventScrollReset: O == null ? void 0 : O.preventScrollReset }), replace: (x, P, O) => n.navigate(x, { replace: !0, state: P, preventScrollReset: O == null ? void 0 : O.preventScrollReset }) }), [n]),
		k = n.basename || '/',
		_ = f.useMemo(() => ({ router: n, navigator: E, static: !1, basename: k }), [n, E, k]);
	return f.createElement(f.Fragment, null, f.createElement(Gl.Provider, { value: _ }, f.createElement(Gh.Provider, { value: o }, f.createElement(yw.Provider, { value: S.current }, f.createElement(gw.Provider, { value: s }, f.createElement(aw, { basename: k, location: o.location, navigationType: o.historyAction, navigator: E, future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath } }, o.initialized || n.future.v7_partialHydration ? f.createElement(kw, { routes: n.routes, future: n.future, state: o }) : t))))), null);
}
function kw(e) {
	let { routes: t, future: n, state: r } = e;
	return X0(t, void 0, r, n);
}
const bw = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
	Pw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ec = f.forwardRef(function (t, n) {
		let { onClick: r, relative: o, reloadDocument: i, replace: l, state: a, target: s, to: u, preventScrollReset: c, unstable_viewTransition: d } = t,
			p = uw(t, fw),
			{ basename: y } = f.useContext(rr),
			w,
			v = !1;
		if (typeof u == 'string' && Pw.test(u) && ((w = u), bw))
			try {
				let g = new URL(window.location.href),
					E = u.startsWith('//') ? new URL(g.protocol + u) : new URL(u),
					k = Gr(E.pathname, y);
				E.origin === g.origin && k != null ? (u = k + E.search + E.hash) : (v = !0);
			} catch {}
		let S = Q0(u, { relative: o }),
			m = $w(u, { replace: l, state: a, target: s, preventScrollReset: c, relative: o, unstable_viewTransition: d });
		function h(g) {
			r && r(g), g.defaultPrevented || m(g);
		}
		return f.createElement('a', qo({}, p, { href: w || S, onClick: v || i ? r : h, ref: n, target: s }));
	});
var Xd;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'), (e.UseSubmit = 'useSubmit'), (e.UseSubmitFetcher = 'useSubmitFetcher'), (e.UseFetcher = 'useFetcher'), (e.useViewTransitionState = 'useViewTransitionState');
})(Xd || (Xd = {}));
var Zd;
(function (e) {
	(e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(Zd || (Zd = {}));
function $w(e, t) {
	let { target: n, replace: r, state: o, preventScrollReset: i, relative: l, unstable_viewTransition: a } = t === void 0 ? {} : t,
		s = Y0(),
		u = Xl(),
		c = Jh(e, { relative: l });
	return f.useCallback(
		(d) => {
			if (dw(d, n)) {
				d.preventDefault();
				let p = r !== void 0 ? r : qn(u) === qn(c);
				s(e, { replace: p, state: o, preventScrollReset: i, relative: l, unstable_viewTransition: a });
			}
		},
		[u, s, c, r, o, n, e, i, l, a]
	);
}
function nm(e) {
	var t,
		n,
		r = '';
	if (typeof e == 'string' || typeof e == 'number') r += e;
	else if (typeof e == 'object')
		if (Array.isArray(e)) {
			var o = e.length;
			for (t = 0; t < o; t++) e[t] && (n = nm(e[t])) && (r && (r += ' '), (r += n));
		} else for (n in e) e[n] && (r && (r += ' '), (r += n));
	return r;
}
function Rw() {
	for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++) (e = arguments[n]) && (t = nm(e)) && (r && (r += ' '), (r += t));
	return r;
}
const tc = '-';
function _w(e) {
	const t = Tw(e),
		{ conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	function o(l) {
		const a = l.split(tc);
		return a[0] === '' && a.length !== 1 && a.shift(), rm(a, t) || Nw(l);
	}
	function i(l, a) {
		const s = n[l] || [];
		return a && r[l] ? [...s, ...r[l]] : s;
	}
	return { getClassGroupId: o, getConflictingClassGroupIds: i };
}
function rm(e, t) {
	var l;
	if (e.length === 0) return t.classGroupId;
	const n = e[0],
		r = t.nextPart.get(n),
		o = r ? rm(e.slice(1), r) : void 0;
	if (o) return o;
	if (t.validators.length === 0) return;
	const i = e.join(tc);
	return (l = t.validators.find(({ validator: a }) => a(i))) == null ? void 0 : l.classGroupId;
}
const Jd = /^\[(.+)\]$/;
function Nw(e) {
	if (Jd.test(e)) {
		const t = Jd.exec(e)[1],
			n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
		if (n) return 'arbitrary..' + n;
	}
}
function Tw(e) {
	const { theme: t, prefix: n } = e,
		r = { nextPart: new Map(), validators: [] };
	return (
		Dw(Object.entries(e.classGroups), n).forEach(([i, l]) => {
			Ws(l, r, i, t);
		}),
		r
	);
}
function Ws(e, t, n, r) {
	e.forEach((o) => {
		if (typeof o == 'string') {
			const i = o === '' ? t : qd(t, o);
			i.classGroupId = n;
			return;
		}
		if (typeof o == 'function') {
			if (Lw(o)) {
				Ws(o(r), t, n, r);
				return;
			}
			t.validators.push({ validator: o, classGroupId: n });
			return;
		}
		Object.entries(o).forEach(([i, l]) => {
			Ws(l, qd(t, i), n, r);
		});
	});
}
function qd(e, t) {
	let n = e;
	return (
		t.split(tc).forEach((r) => {
			n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }), (n = n.nextPart.get(r));
		}),
		n
	);
}
function Lw(e) {
	return e.isThemeGetter;
}
function Dw(e, t) {
	return t
		? e.map(([n, r]) => {
				const o = r.map((i) => (typeof i == 'string' ? t + i : typeof i == 'object' ? Object.fromEntries(Object.entries(i).map(([l, a]) => [t + l, a])) : i));
				return [n, o];
		  })
		: e;
}
function Ow(e) {
	if (e < 1) return { get: () => {}, set: () => {} };
	let t = 0,
		n = new Map(),
		r = new Map();
	function o(i, l) {
		n.set(i, l), t++, t > e && ((t = 0), (r = n), (n = new Map()));
	}
	return {
		get(i) {
			let l = n.get(i);
			if (l !== void 0) return l;
			if ((l = r.get(i)) !== void 0) return o(i, l), l;
		},
		set(i, l) {
			n.has(i) ? n.set(i, l) : o(i, l);
		},
	};
}
const om = '!';
function Mw(e) {
	const t = e.separator,
		n = t.length === 1,
		r = t[0],
		o = t.length;
	return function (l) {
		const a = [];
		let s = 0,
			u = 0,
			c;
		for (let v = 0; v < l.length; v++) {
			let S = l[v];
			if (s === 0) {
				if (S === r && (n || l.slice(v, v + o) === t)) {
					a.push(l.slice(u, v)), (u = v + o);
					continue;
				}
				if (S === '/') {
					c = v;
					continue;
				}
			}
			S === '[' ? s++ : S === ']' && s--;
		}
		const d = a.length === 0 ? l : l.substring(u),
			p = d.startsWith(om),
			y = p ? d.substring(1) : d,
			w = c && c > u ? c - u : void 0;
		return { modifiers: a, hasImportantModifier: p, baseClassName: y, maybePostfixModifierPosition: w };
	};
}
function Aw(e) {
	if (e.length <= 1) return e;
	const t = [];
	let n = [];
	return (
		e.forEach((r) => {
			r[0] === '[' ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
		}),
		t.push(...n.sort()),
		t
	);
}
function jw(e) {
	return { cache: Ow(e.cacheSize), splitModifiers: Mw(e), ..._w(e) };
}
const zw = /\s+/;
function Fw(e, t) {
	const { splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
		i = new Set();
	return e
		.trim()
		.split(zw)
		.map((l) => {
			const { modifiers: a, hasImportantModifier: s, baseClassName: u, maybePostfixModifierPosition: c } = n(l);
			let d = r(c ? u.substring(0, c) : u),
				p = !!c;
			if (!d) {
				if (!c) return { isTailwindClass: !1, originalClassName: l };
				if (((d = r(u)), !d)) return { isTailwindClass: !1, originalClassName: l };
				p = !1;
			}
			const y = Aw(a).join(':');
			return { isTailwindClass: !0, modifierId: s ? y + om : y, classGroupId: d, originalClassName: l, hasPostfixModifier: p };
		})
		.reverse()
		.filter((l) => {
			if (!l.isTailwindClass) return !0;
			const { modifierId: a, classGroupId: s, hasPostfixModifier: u } = l,
				c = a + s;
			return i.has(c) ? !1 : (i.add(c), o(s, u).forEach((d) => i.add(a + d)), !0);
		})
		.reverse()
		.map((l) => l.originalClassName)
		.join(' ');
}
function Iw() {
	let e = 0,
		t,
		n,
		r = '';
	for (; e < arguments.length; ) (t = arguments[e++]) && (n = im(t)) && (r && (r += ' '), (r += n));
	return r;
}
function im(e) {
	if (typeof e == 'string') return e;
	let t,
		n = '';
	for (let r = 0; r < e.length; r++) e[r] && (t = im(e[r])) && (n && (n += ' '), (n += t));
	return n;
}
function Uw(e, ...t) {
	let n,
		r,
		o,
		i = l;
	function l(s) {
		const u = t.reduce((c, d) => d(c), e());
		return (n = jw(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(s);
	}
	function a(s) {
		const u = r(s);
		if (u) return u;
		const c = Fw(s, n);
		return o(s, c), c;
	}
	return function () {
		return i(Iw.apply(null, arguments));
	};
}
function se(e) {
	const t = (n) => n[e] || [];
	return (t.isThemeGetter = !0), t;
}
const lm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	Bw = /^\d+\/\d+$/,
	Hw = new Set(['px', 'full', 'screen']),
	Vw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Ww = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	Kw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
	Qw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	Yw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function It(e) {
	return Vn(e) || Hw.has(e) || Bw.test(e);
}
function sn(e) {
	return Xr(e, 'length', n1);
}
function Vn(e) {
	return !!e && !Number.isNaN(Number(e));
}
function Oi(e) {
	return Xr(e, 'number', Vn);
}
function wo(e) {
	return !!e && Number.isInteger(Number(e));
}
function Gw(e) {
	return e.endsWith('%') && Vn(e.slice(0, -1));
}
function Y(e) {
	return lm.test(e);
}
function un(e) {
	return Vw.test(e);
}
const Xw = new Set(['length', 'size', 'percentage']);
function Zw(e) {
	return Xr(e, Xw, am);
}
function Jw(e) {
	return Xr(e, 'position', am);
}
const qw = new Set(['image', 'url']);
function e1(e) {
	return Xr(e, qw, o1);
}
function t1(e) {
	return Xr(e, '', r1);
}
function xo() {
	return !0;
}
function Xr(e, t, n) {
	const r = lm.exec(e);
	return r ? (r[1] ? (typeof t == 'string' ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
}
function n1(e) {
	return Ww.test(e) && !Kw.test(e);
}
function am() {
	return !1;
}
function r1(e) {
	return Qw.test(e);
}
function o1(e) {
	return Yw.test(e);
}
function i1() {
	const e = se('colors'),
		t = se('spacing'),
		n = se('blur'),
		r = se('brightness'),
		o = se('borderColor'),
		i = se('borderRadius'),
		l = se('borderSpacing'),
		a = se('borderWidth'),
		s = se('contrast'),
		u = se('grayscale'),
		c = se('hueRotate'),
		d = se('invert'),
		p = se('gap'),
		y = se('gradientColorStops'),
		w = se('gradientColorStopPositions'),
		v = se('inset'),
		S = se('margin'),
		m = se('opacity'),
		h = se('padding'),
		g = se('saturate'),
		E = se('scale'),
		k = se('sepia'),
		_ = se('skew'),
		x = se('space'),
		P = se('translate'),
		O = () => ['auto', 'contain', 'none'],
		L = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
		I = () => ['auto', Y, t],
		M = () => [Y, t],
		Z = () => ['', It, sn],
		H = () => ['auto', Vn, Y],
		ee = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'],
		oe = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
		G = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'],
		N = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
		F = () => ['', '0', Y],
		B = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
		X = () => [Vn, Oi],
		te = () => [Vn, Y];
	return { cacheSize: 500, separator: ':', theme: { colors: [xo], spacing: [It, sn], blur: ['none', '', un, Y], brightness: X(), borderColor: [e], borderRadius: ['none', '', 'full', un, Y], borderSpacing: M(), borderWidth: Z(), contrast: X(), grayscale: F(), hueRotate: te(), invert: F(), gap: M(), gradientColorStops: [e], gradientColorStopPositions: [Gw, sn], inset: I(), margin: I(), opacity: X(), padding: M(), saturate: X(), scale: X(), sepia: F(), skew: te(), space: M(), translate: M() }, classGroups: { aspect: [{ aspect: ['auto', 'square', 'video', Y] }], container: ['container'], columns: [{ columns: [un] }], 'break-after': [{ 'break-after': B() }], 'break-before': [{ 'break-before': B() }], 'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }], 'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }], box: [{ box: ['border', 'content'] }], display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'], float: [{ float: ['right', 'left', 'none', 'start', 'end'] }], clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }], isolation: ['isolate', 'isolation-auto'], 'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }], 'object-position': [{ object: [...ee(), Y] }], overflow: [{ overflow: L() }], 'overflow-x': [{ 'overflow-x': L() }], 'overflow-y': [{ 'overflow-y': L() }], overscroll: [{ overscroll: O() }], 'overscroll-x': [{ 'overscroll-x': O() }], 'overscroll-y': [{ 'overscroll-y': O() }], position: ['static', 'fixed', 'absolute', 'relative', 'sticky'], inset: [{ inset: [v] }], 'inset-x': [{ 'inset-x': [v] }], 'inset-y': [{ 'inset-y': [v] }], start: [{ start: [v] }], end: [{ end: [v] }], top: [{ top: [v] }], right: [{ right: [v] }], bottom: [{ bottom: [v] }], left: [{ left: [v] }], visibility: ['visible', 'invisible', 'collapse'], z: [{ z: ['auto', wo, Y] }], basis: [{ basis: I() }], 'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }], 'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }], flex: [{ flex: ['1', 'auto', 'initial', 'none', Y] }], grow: [{ grow: F() }], shrink: [{ shrink: F() }], order: [{ order: ['first', 'last', 'none', wo, Y] }], 'grid-cols': [{ 'grid-cols': [xo] }], 'col-start-end': [{ col: ['auto', { span: ['full', wo, Y] }, Y] }], 'col-start': [{ 'col-start': H() }], 'col-end': [{ 'col-end': H() }], 'grid-rows': [{ 'grid-rows': [xo] }], 'row-start-end': [{ row: ['auto', { span: [wo, Y] }, Y] }], 'row-start': [{ 'row-start': H() }], 'row-end': [{ 'row-end': H() }], 'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }], 'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', Y] }], 'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', Y] }], gap: [{ gap: [p] }], 'gap-x': [{ 'gap-x': [p] }], 'gap-y': [{ 'gap-y': [p] }], 'justify-content': [{ justify: ['normal', ...N()] }], 'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }], 'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }], 'align-content': [{ content: ['normal', ...N(), 'baseline'] }], 'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }], 'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }], 'place-content': [{ 'place-content': [...N(), 'baseline'] }], 'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }], 'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }], p: [{ p: [h] }], px: [{ px: [h] }], py: [{ py: [h] }], ps: [{ ps: [h] }], pe: [{ pe: [h] }], pt: [{ pt: [h] }], pr: [{ pr: [h] }], pb: [{ pb: [h] }], pl: [{ pl: [h] }], m: [{ m: [S] }], mx: [{ mx: [S] }], my: [{ my: [S] }], ms: [{ ms: [S] }], me: [{ me: [S] }], mt: [{ mt: [S] }], mr: [{ mr: [S] }], mb: [{ mb: [S] }], ml: [{ ml: [S] }], 'space-x': [{ 'space-x': [x] }], 'space-x-reverse': ['space-x-reverse'], 'space-y': [{ 'space-y': [x] }], 'space-y-reverse': ['space-y-reverse'], w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', Y, t] }], 'min-w': [{ 'min-w': [Y, t, 'min', 'max', 'fit'] }], 'max-w': [{ 'max-w': [Y, t, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [un] }, un] }], h: [{ h: [Y, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }], 'min-h': [{ 'min-h': [Y, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }], 'max-h': [{ 'max-h': [Y, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }], size: [{ size: [Y, t, 'auto', 'min', 'max', 'fit'] }], 'font-size': [{ text: ['base', un, sn] }], 'font-smoothing': ['antialiased', 'subpixel-antialiased'], 'font-style': ['italic', 'not-italic'], 'font-weight': [{ font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', Oi] }], 'font-family': [{ font: [xo] }], 'fvn-normal': ['normal-nums'], 'fvn-ordinal': ['ordinal'], 'fvn-slashed-zero': ['slashed-zero'], 'fvn-figure': ['lining-nums', 'oldstyle-nums'], 'fvn-spacing': ['proportional-nums', 'tabular-nums'], 'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'], tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', Y] }], 'line-clamp': [{ 'line-clamp': ['none', Vn, Oi] }], leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', It, Y] }], 'list-image': [{ 'list-image': ['none', Y] }], 'list-style-type': [{ list: ['none', 'disc', 'decimal', Y] }], 'list-style-position': [{ list: ['inside', 'outside'] }], 'placeholder-color': [{ placeholder: [e] }], 'placeholder-opacity': [{ 'placeholder-opacity': [m] }], 'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }], 'text-color': [{ text: [e] }], 'text-opacity': [{ 'text-opacity': [m] }], 'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'], 'text-decoration-style': [{ decoration: [...oe(), 'wavy'] }], 'text-decoration-thickness': [{ decoration: ['auto', 'from-font', It, sn] }], 'underline-offset': [{ 'underline-offset': ['auto', It, Y] }], 'text-decoration-color': [{ decoration: [e] }], 'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'], 'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'], 'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }], indent: [{ indent: M() }], 'vertical-align': [{ align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', Y] }], whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }], break: [{ break: ['normal', 'words', 'all', 'keep'] }], hyphens: [{ hyphens: ['none', 'manual', 'auto'] }], content: [{ content: ['none', Y] }], 'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }], 'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }], 'bg-opacity': [{ 'bg-opacity': [m] }], 'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }], 'bg-position': [{ bg: [...ee(), Jw] }], 'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }], 'bg-size': [{ bg: ['auto', 'cover', 'contain', Zw] }], 'bg-image': [{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, e1] }], 'bg-color': [{ bg: [e] }], 'gradient-from-pos': [{ from: [w] }], 'gradient-via-pos': [{ via: [w] }], 'gradient-to-pos': [{ to: [w] }], 'gradient-from': [{ from: [y] }], 'gradient-via': [{ via: [y] }], 'gradient-to': [{ to: [y] }], rounded: [{ rounded: [i] }], 'rounded-s': [{ 'rounded-s': [i] }], 'rounded-e': [{ 'rounded-e': [i] }], 'rounded-t': [{ 'rounded-t': [i] }], 'rounded-r': [{ 'rounded-r': [i] }], 'rounded-b': [{ 'rounded-b': [i] }], 'rounded-l': [{ 'rounded-l': [i] }], 'rounded-ss': [{ 'rounded-ss': [i] }], 'rounded-se': [{ 'rounded-se': [i] }], 'rounded-ee': [{ 'rounded-ee': [i] }], 'rounded-es': [{ 'rounded-es': [i] }], 'rounded-tl': [{ 'rounded-tl': [i] }], 'rounded-tr': [{ 'rounded-tr': [i] }], 'rounded-br': [{ 'rounded-br': [i] }], 'rounded-bl': [{ 'rounded-bl': [i] }], 'border-w': [{ border: [a] }], 'border-w-x': [{ 'border-x': [a] }], 'border-w-y': [{ 'border-y': [a] }], 'border-w-s': [{ 'border-s': [a] }], 'border-w-e': [{ 'border-e': [a] }], 'border-w-t': [{ 'border-t': [a] }], 'border-w-r': [{ 'border-r': [a] }], 'border-w-b': [{ 'border-b': [a] }], 'border-w-l': [{ 'border-l': [a] }], 'border-opacity': [{ 'border-opacity': [m] }], 'border-style': [{ border: [...oe(), 'hidden'] }], 'divide-x': [{ 'divide-x': [a] }], 'divide-x-reverse': ['divide-x-reverse'], 'divide-y': [{ 'divide-y': [a] }], 'divide-y-reverse': ['divide-y-reverse'], 'divide-opacity': [{ 'divide-opacity': [m] }], 'divide-style': [{ divide: oe() }], 'border-color': [{ border: [o] }], 'border-color-x': [{ 'border-x': [o] }], 'border-color-y': [{ 'border-y': [o] }], 'border-color-t': [{ 'border-t': [o] }], 'border-color-r': [{ 'border-r': [o] }], 'border-color-b': [{ 'border-b': [o] }], 'border-color-l': [{ 'border-l': [o] }], 'divide-color': [{ divide: [o] }], 'outline-style': [{ outline: ['', ...oe()] }], 'outline-offset': [{ 'outline-offset': [It, Y] }], 'outline-w': [{ outline: [It, sn] }], 'outline-color': [{ outline: [e] }], 'ring-w': [{ ring: Z() }], 'ring-w-inset': ['ring-inset'], 'ring-color': [{ ring: [e] }], 'ring-opacity': [{ 'ring-opacity': [m] }], 'ring-offset-w': [{ 'ring-offset': [It, sn] }], 'ring-offset-color': [{ 'ring-offset': [e] }], shadow: [{ shadow: ['', 'inner', 'none', un, t1] }], 'shadow-color': [{ shadow: [xo] }], opacity: [{ opacity: [m] }], 'mix-blend': [{ 'mix-blend': [...G(), 'plus-lighter', 'plus-darker'] }], 'bg-blend': [{ 'bg-blend': G() }], filter: [{ filter: ['', 'none'] }], blur: [{ blur: [n] }], brightness: [{ brightness: [r] }], contrast: [{ contrast: [s] }], 'drop-shadow': [{ 'drop-shadow': ['', 'none', un, Y] }], grayscale: [{ grayscale: [u] }], 'hue-rotate': [{ 'hue-rotate': [c] }], invert: [{ invert: [d] }], saturate: [{ saturate: [g] }], sepia: [{ sepia: [k] }], 'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }], 'backdrop-blur': [{ 'backdrop-blur': [n] }], 'backdrop-brightness': [{ 'backdrop-brightness': [r] }], 'backdrop-contrast': [{ 'backdrop-contrast': [s] }], 'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }], 'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }], 'backdrop-invert': [{ 'backdrop-invert': [d] }], 'backdrop-opacity': [{ 'backdrop-opacity': [m] }], 'backdrop-saturate': [{ 'backdrop-saturate': [g] }], 'backdrop-sepia': [{ 'backdrop-sepia': [k] }], 'border-collapse': [{ border: ['collapse', 'separate'] }], 'border-spacing': [{ 'border-spacing': [l] }], 'border-spacing-x': [{ 'border-spacing-x': [l] }], 'border-spacing-y': [{ 'border-spacing-y': [l] }], 'table-layout': [{ table: ['auto', 'fixed'] }], caption: [{ caption: ['top', 'bottom'] }], transition: [{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', Y] }], duration: [{ duration: te() }], ease: [{ ease: ['linear', 'in', 'out', 'in-out', Y] }], delay: [{ delay: te() }], animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', Y] }], transform: [{ transform: ['', 'gpu', 'none'] }], scale: [{ scale: [E] }], 'scale-x': [{ 'scale-x': [E] }], 'scale-y': [{ 'scale-y': [E] }], rotate: [{ rotate: [wo, Y] }], 'translate-x': [{ 'translate-x': [P] }], 'translate-y': [{ 'translate-y': [P] }], 'skew-x': [{ 'skew-x': [_] }], 'skew-y': [{ 'skew-y': [_] }], 'transform-origin': [{ origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', Y] }], accent: [{ accent: ['auto', e] }], appearance: [{ appearance: ['none', 'auto'] }], cursor: [{ cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', Y] }], 'caret-color': [{ caret: [e] }], 'pointer-events': [{ 'pointer-events': ['none', 'auto'] }], resize: [{ resize: ['none', 'y', 'x', ''] }], 'scroll-behavior': [{ scroll: ['auto', 'smooth'] }], 'scroll-m': [{ 'scroll-m': M() }], 'scroll-mx': [{ 'scroll-mx': M() }], 'scroll-my': [{ 'scroll-my': M() }], 'scroll-ms': [{ 'scroll-ms': M() }], 'scroll-me': [{ 'scroll-me': M() }], 'scroll-mt': [{ 'scroll-mt': M() }], 'scroll-mr': [{ 'scroll-mr': M() }], 'scroll-mb': [{ 'scroll-mb': M() }], 'scroll-ml': [{ 'scroll-ml': M() }], 'scroll-p': [{ 'scroll-p': M() }], 'scroll-px': [{ 'scroll-px': M() }], 'scroll-py': [{ 'scroll-py': M() }], 'scroll-ps': [{ 'scroll-ps': M() }], 'scroll-pe': [{ 'scroll-pe': M() }], 'scroll-pt': [{ 'scroll-pt': M() }], 'scroll-pr': [{ 'scroll-pr': M() }], 'scroll-pb': [{ 'scroll-pb': M() }], 'scroll-pl': [{ 'scroll-pl': M() }], 'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }], 'snap-stop': [{ snap: ['normal', 'always'] }], 'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }], 'snap-strictness': [{ snap: ['mandatory', 'proximity'] }], touch: [{ touch: ['auto', 'none', 'manipulation'] }], 'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }], 'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }], 'touch-pz': ['touch-pinch-zoom'], select: [{ select: ['none', 'text', 'all', 'auto'] }], 'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', Y] }], fill: [{ fill: [e, 'none'] }], 'stroke-w': [{ stroke: [It, sn, Oi] }], stroke: [{ stroke: [e, 'none'] }], sr: ['sr-only', 'not-sr-only'], 'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }] }, conflictingClassGroups: { overflow: ['overflow-x', 'overflow-y'], overscroll: ['overscroll-x', 'overscroll-y'], inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'], 'inset-x': ['right', 'left'], 'inset-y': ['top', 'bottom'], flex: ['basis', 'grow', 'shrink'], gap: ['gap-x', 'gap-y'], p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'], px: ['pr', 'pl'], py: ['pt', 'pb'], m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'], mx: ['mr', 'ml'], my: ['mt', 'mb'], size: ['w', 'h'], 'font-size': ['leading'], 'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'], 'fvn-ordinal': ['fvn-normal'], 'fvn-slashed-zero': ['fvn-normal'], 'fvn-figure': ['fvn-normal'], 'fvn-spacing': ['fvn-normal'], 'fvn-fraction': ['fvn-normal'], 'line-clamp': ['display', 'overflow'], rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'], 'rounded-s': ['rounded-ss', 'rounded-es'], 'rounded-e': ['rounded-se', 'rounded-ee'], 'rounded-t': ['rounded-tl', 'rounded-tr'], 'rounded-r': ['rounded-tr', 'rounded-br'], 'rounded-b': ['rounded-br', 'rounded-bl'], 'rounded-l': ['rounded-tl', 'rounded-bl'], 'border-spacing': ['border-spacing-x', 'border-spacing-y'], 'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'], 'border-w-x': ['border-w-r', 'border-w-l'], 'border-w-y': ['border-w-t', 'border-w-b'], 'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'], 'border-color-x': ['border-color-r', 'border-color-l'], 'border-color-y': ['border-color-t', 'border-color-b'], 'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'], 'scroll-mx': ['scroll-mr', 'scroll-ml'], 'scroll-my': ['scroll-mt', 'scroll-mb'], 'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'], 'scroll-px': ['scroll-pr', 'scroll-pl'], 'scroll-py': ['scroll-pt', 'scroll-pb'], touch: ['touch-x', 'touch-y', 'touch-pz'], 'touch-x': ['touch'], 'touch-y': ['touch'], 'touch-pz': ['touch'] }, conflictingClassGroupModifiers: { 'font-size': ['leading'] } };
}
const l1 = Uw(i1);
function Ae(...e) {
	return l1(Rw(e));
}
function le() {
	return (
		(le = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		le.apply(null, arguments)
	);
}
function a1(e, t) {
	typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function sm(...e) {
	return (t) => e.forEach((n) => a1(n, t));
}
function tn(...e) {
	return f.useCallback(sm(...e), e);
}
const Zl = f.forwardRef((e, t) => {
	const { children: n, ...r } = e,
		o = f.Children.toArray(n),
		i = o.find(u1);
	if (i) {
		const l = i.props.children,
			a = o.map((s) => (s === i ? (f.Children.count(l) > 1 ? f.Children.only(null) : f.isValidElement(l) ? l.props.children : null) : s));
		return f.createElement(Ks, le({}, r, { ref: t }), f.isValidElement(l) ? f.cloneElement(l, void 0, a) : null);
	}
	return f.createElement(Ks, le({}, r, { ref: t }), n);
});
Zl.displayName = 'Slot';
const Ks = f.forwardRef((e, t) => {
	const { children: n, ...r } = e;
	return f.isValidElement(n) ? f.cloneElement(n, { ...c1(r, n.props), ref: t ? sm(t, n.ref) : n.ref }) : f.Children.count(n) > 1 ? f.Children.only(null) : null;
});
Ks.displayName = 'SlotClone';
const s1 = ({ children: e }) => f.createElement(f.Fragment, null, e);
function u1(e) {
	return f.isValidElement(e) && e.type === s1;
}
function c1(e, t) {
	const n = { ...t };
	for (const r in t) {
		const o = e[r],
			i = t[r];
		/^on[A-Z]/.test(r)
			? o && i
				? (n[r] = (...a) => {
						i(...a), o(...a);
				  })
				: o && (n[r] = o)
			: r === 'style'
			? (n[r] = { ...o, ...i })
			: r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '));
	}
	return { ...e, ...n };
}
function um(e) {
	var t,
		n,
		r = '';
	if (typeof e == 'string' || typeof e == 'number') r += e;
	else if (typeof e == 'object')
		if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = um(e[t])) && (r && (r += ' '), (r += n));
		else for (t in e) e[t] && (r && (r += ' '), (r += t));
	return r;
}
function d1() {
	for (var e, t, n = 0, r = ''; n < arguments.length; ) (e = arguments[n++]) && (t = um(e)) && (r && (r += ' '), (r += t));
	return r;
}
const ef = (e) => (typeof e == 'boolean' ? ''.concat(e) : e === 0 ? '0' : e),
	tf = d1,
	cm = (e, t) => (n) => {
		var r;
		if ((t == null ? void 0 : t.variants) == null) return tf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
		const { variants: o, defaultVariants: i } = t,
			l = Object.keys(o).map((u) => {
				const c = n == null ? void 0 : n[u],
					d = i == null ? void 0 : i[u];
				if (c === null) return null;
				const p = ef(c) || ef(d);
				return o[u][p];
			}),
			a =
				n &&
				Object.entries(n).reduce((u, c) => {
					let [d, p] = c;
					return p === void 0 || (u[d] = p), u;
				}, {}),
			s =
				t == null || (r = t.compoundVariants) === null || r === void 0
					? void 0
					: r.reduce((u, c) => {
							let { class: d, className: p, ...y } = c;
							return Object.entries(y).every((w) => {
								let [v, S] = w;
								return Array.isArray(S) ? S.includes({ ...i, ...a }[v]) : { ...i, ...a }[v] === S;
							})
								? [...u, d, p]
								: u;
					  }, []);
		return tf(e, l, s, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
	},
	f1 = cm('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', { variants: { variant: { default: 'bg-primary text-primary-foreground hover:bg-primary/90', destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90', outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground', secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80', ghost: 'hover:bg-accent hover:text-accent-foreground', link: 'text-primary underline-offset-4 hover:underline', expandIcon: 'group relative text-primary-foreground bg-primary hover:bg-primary/90', ringHover: 'bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2', shine: 'text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ', gooeyRight: 'text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ', gooeyLeft: 'text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ', linkHover1: 'relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300', linkHover2: 'relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300' }, size: { default: 'h-10 px-4 py-2', sm: 'h-9 rounded-md px-3', lg: 'h-11 rounded-md px-8', icon: 'h-10 w-10' } }, defaultVariants: { variant: 'default', size: 'default' } }),
	Qn = f.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, Icon: o, iconPlacement: i, ...l }, a) => {
		const s = r ? Zl : 'button';
		return R.jsxs(s, { className: Ae(f1({ variant: t, size: n, className: e })), ref: a, ...l, children: [o && i === 'left' && R.jsx('div', { className: 'w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100', children: R.jsx(o, {}) }), l.children, o && i === 'right' && R.jsx('div', { className: 'w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100', children: R.jsx(o, {}) })] });
	});
Qn.displayName = 'Button';
const p1 = () => {
		const e = tm();
		return console.log(e), R.jsxs('div', { className: 'h-full w-full flex flex-col gap-3 items-center justify-center font-roboto-mono', children: [R.jsx('p', { className: 'text-4xl', children: 'Error occured' }), R.jsxs('p', { className: 'text-xl italic text-primary/50', children: [e.status, ' - ', e.statusText] }), R.jsx(ec, { to: '/', children: R.jsx(Qn, { variant: 'default', children: 'Back to main page' }) })] });
	},
	h1 = () => R.jsxs('div', { className: 'w-full h-full flex flex-col justify-center items-center', children: [R.jsx('h1', { children: 'Leaderboards - WIP' }), R.jsx(ec, { to: '/', children: R.jsx(Qn, { children: 'Go home' }) })] }),
	m1 = () => R.jsx('div', { children: 'world!' });
function De(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function (o) {
		if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
	};
}
function Jl(e, t = []) {
	let n = [];
	function r(i, l) {
		const a = f.createContext(l),
			s = n.length;
		n = [...n, l];
		function u(d) {
			const { scope: p, children: y, ...w } = d,
				v = (p == null ? void 0 : p[e][s]) || a,
				S = f.useMemo(() => w, Object.values(w));
			return f.createElement(v.Provider, { value: S }, y);
		}
		function c(d, p) {
			const y = (p == null ? void 0 : p[e][s]) || a,
				w = f.useContext(y);
			if (w) return w;
			if (l !== void 0) return l;
			throw new Error(`\`${d}\` must be used within \`${i}\``);
		}
		return (u.displayName = i + 'Provider'), [u, c];
	}
	const o = () => {
		const i = n.map((l) => f.createContext(l));
		return function (a) {
			const s = (a == null ? void 0 : a[e]) || i;
			return f.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s]);
		};
	};
	return (o.scopeName = e), [r, v1(o, ...t)];
}
function v1(...e) {
	const t = e[0];
	if (e.length === 1) return t;
	const n = () => {
		const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
		return function (i) {
			const l = r.reduce((a, { useScope: s, scopeName: u }) => {
				const d = s(i)[`__scope${u}`];
				return { ...a, ...d };
			}, {});
			return f.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
		};
	};
	return (n.scopeName = t.scopeName), n;
}
function Zt(e) {
	const t = f.useRef(e);
	return (
		f.useEffect(() => {
			t.current = e;
		}),
		f.useMemo(
			() =>
				(...n) => {
					var r;
					return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
				},
			[]
		)
	);
}
function dm({ prop: e, defaultProp: t, onChange: n = () => {} }) {
	const [r, o] = g1({ defaultProp: t, onChange: n }),
		i = e !== void 0,
		l = i ? e : r,
		a = Zt(n),
		s = f.useCallback(
			(u) => {
				if (i) {
					const d = typeof u == 'function' ? u(e) : u;
					d !== e && a(d);
				} else o(u);
			},
			[i, e, o, a]
		);
	return [l, s];
}
function g1({ defaultProp: e, onChange: t }) {
	const n = f.useState(e),
		[r] = n,
		o = f.useRef(r),
		i = Zt(t);
	return (
		f.useEffect(() => {
			o.current !== r && (i(r), (o.current = r));
		}, [r, o, i]),
		n
	);
}
const y1 = ['top', 'right', 'bottom', 'left'],
	Mt = Math.min,
	rt = Math.max,
	Rl = Math.round,
	Mi = Math.floor,
	Rn = (e) => ({ x: e, y: e }),
	w1 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
	x1 = { start: 'end', end: 'start' };
function Qs(e, t, n) {
	return rt(e, Mt(t, n));
}
function Jt(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function qt(e) {
	return e.split('-')[0];
}
function Zr(e) {
	return e.split('-')[1];
}
function nc(e) {
	return e === 'x' ? 'y' : 'x';
}
function rc(e) {
	return e === 'y' ? 'height' : 'width';
}
function Jr(e) {
	return ['top', 'bottom'].includes(qt(e)) ? 'y' : 'x';
}
function oc(e) {
	return nc(Jr(e));
}
function S1(e, t, n) {
	n === void 0 && (n = !1);
	const r = Zr(e),
		o = oc(e),
		i = rc(o);
	let l = o === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top';
	return t.reference[i] > t.floating[i] && (l = _l(l)), [l, _l(l)];
}
function E1(e) {
	const t = _l(e);
	return [Ys(e), t, Ys(t)];
}
function Ys(e) {
	return e.replace(/start|end/g, (t) => x1[t]);
}
function C1(e, t, n) {
	const r = ['left', 'right'],
		o = ['right', 'left'],
		i = ['top', 'bottom'],
		l = ['bottom', 'top'];
	switch (e) {
		case 'top':
		case 'bottom':
			return n ? (t ? o : r) : t ? r : o;
		case 'left':
		case 'right':
			return t ? i : l;
		default:
			return [];
	}
}
function k1(e, t, n, r) {
	const o = Zr(e);
	let i = C1(qt(e), n === 'start', r);
	return o && ((i = i.map((l) => l + '-' + o)), t && (i = i.concat(i.map(Ys)))), i;
}
function _l(e) {
	return e.replace(/left|right|bottom|top/g, (t) => w1[t]);
}
function b1(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function fm(e) {
	return typeof e != 'number' ? b1(e) : { top: e, right: e, bottom: e, left: e };
}
function Nl(e) {
	const { x: t, y: n, width: r, height: o } = e;
	return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function nf(e, t, n) {
	let { reference: r, floating: o } = e;
	const i = Jr(t),
		l = oc(t),
		a = rc(l),
		s = qt(t),
		u = i === 'y',
		c = r.x + r.width / 2 - o.width / 2,
		d = r.y + r.height / 2 - o.height / 2,
		p = r[a] / 2 - o[a] / 2;
	let y;
	switch (s) {
		case 'top':
			y = { x: c, y: r.y - o.height };
			break;
		case 'bottom':
			y = { x: c, y: r.y + r.height };
			break;
		case 'right':
			y = { x: r.x + r.width, y: d };
			break;
		case 'left':
			y = { x: r.x - o.width, y: d };
			break;
		default:
			y = { x: r.x, y: r.y };
	}
	switch (Zr(t)) {
		case 'start':
			y[l] -= p * (n && u ? -1 : 1);
			break;
		case 'end':
			y[l] += p * (n && u ? -1 : 1);
			break;
	}
	return y;
}
const P1 = async (e, t, n) => {
	const { placement: r = 'bottom', strategy: o = 'absolute', middleware: i = [], platform: l } = n,
		a = i.filter(Boolean),
		s = await (l.isRTL == null ? void 0 : l.isRTL(t));
	let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
		{ x: c, y: d } = nf(u, r, s),
		p = r,
		y = {},
		w = 0;
	for (let v = 0; v < a.length; v++) {
		const { name: S, fn: m } = a[v],
			{ x: h, y: g, data: E, reset: k } = await m({ x: c, y: d, initialPlacement: r, placement: p, strategy: o, middlewareData: y, rects: u, platform: l, elements: { reference: e, floating: t } });
		(c = h ?? c), (d = g ?? d), (y = { ...y, [S]: { ...y[S], ...E } }), k && w <= 50 && (w++, typeof k == 'object' && (k.placement && (p = k.placement), k.rects && (u = k.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: o }) : k.rects), ({ x: c, y: d } = nf(u, p, s))), (v = -1));
	}
	return { x: c, y: d, placement: p, strategy: o, middlewareData: y };
};
async function ei(e, t) {
	var n;
	t === void 0 && (t = {});
	const { x: r, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
		{ boundary: u = 'clippingAncestors', rootBoundary: c = 'viewport', elementContext: d = 'floating', altBoundary: p = !1, padding: y = 0 } = Jt(t, e),
		w = fm(y),
		S = a[p ? (d === 'floating' ? 'reference' : 'floating') : d],
		m = Nl(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null || n ? S : S.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))), boundary: u, rootBoundary: c, strategy: s })),
		h = d === 'floating' ? { x: r, y: o, width: l.floating.width, height: l.floating.height } : l.reference,
		g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
		E = (await (i.isElement == null ? void 0 : i.isElement(g))) ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 } : { x: 1, y: 1 },
		k = Nl(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: h, offsetParent: g, strategy: s }) : h);
	return { top: (m.top - k.top + w.top) / E.y, bottom: (k.bottom - m.bottom + w.bottom) / E.y, left: (m.left - k.left + w.left) / E.x, right: (k.right - m.right + w.right) / E.x };
}
const $1 = (e) => ({
		name: 'arrow',
		options: e,
		async fn(t) {
			const { x: n, y: r, placement: o, rects: i, platform: l, elements: a, middlewareData: s } = t,
				{ element: u, padding: c = 0 } = Jt(e, t) || {};
			if (u == null) return {};
			const d = fm(c),
				p = { x: n, y: r },
				y = oc(o),
				w = rc(y),
				v = await l.getDimensions(u),
				S = y === 'y',
				m = S ? 'top' : 'left',
				h = S ? 'bottom' : 'right',
				g = S ? 'clientHeight' : 'clientWidth',
				E = i.reference[w] + i.reference[y] - p[y] - i.floating[w],
				k = p[y] - i.reference[y],
				_ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
			let x = _ ? _[g] : 0;
			(!x || !(await (l.isElement == null ? void 0 : l.isElement(_)))) && (x = a.floating[g] || i.floating[w]);
			const P = E / 2 - k / 2,
				O = x / 2 - v[w] / 2 - 1,
				L = Mt(d[m], O),
				I = Mt(d[h], O),
				M = L,
				Z = x - v[w] - I,
				H = x / 2 - v[w] / 2 + P,
				ee = Qs(M, H, Z),
				oe = !s.arrow && Zr(o) != null && H !== ee && i.reference[w] / 2 - (H < M ? L : I) - v[w] / 2 < 0,
				G = oe ? (H < M ? H - M : H - Z) : 0;
			return { [y]: p[y] + G, data: { [y]: ee, centerOffset: H - ee - G, ...(oe && { alignmentOffset: G }) }, reset: oe };
		},
	}),
	R1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(t) {
					var n, r;
					const { placement: o, middlewareData: i, rects: l, initialPlacement: a, platform: s, elements: u } = t,
						{ mainAxis: c = !0, crossAxis: d = !0, fallbackPlacements: p, fallbackStrategy: y = 'bestFit', fallbackAxisSideDirection: w = 'none', flipAlignment: v = !0, ...S } = Jt(e, t);
					if ((n = i.arrow) != null && n.alignmentOffset) return {};
					const m = qt(o),
						h = qt(a) === a,
						g = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
						E = p || (h || !v ? [_l(a)] : E1(a));
					!p && w !== 'none' && E.push(...k1(a, v, w, g));
					const k = [a, ...E],
						_ = await ei(t, S),
						x = [];
					let P = ((r = i.flip) == null ? void 0 : r.overflows) || [];
					if ((c && x.push(_[m]), d)) {
						const M = S1(o, l, g);
						x.push(_[M[0]], _[M[1]]);
					}
					if (((P = [...P, { placement: o, overflows: x }]), !x.every((M) => M <= 0))) {
						var O, L;
						const M = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1,
							Z = k[M];
						if (Z) return { data: { index: M, overflows: P }, reset: { placement: Z } };
						let H = (L = P.filter((ee) => ee.overflows[0] <= 0).sort((ee, oe) => ee.overflows[1] - oe.overflows[1])[0]) == null ? void 0 : L.placement;
						if (!H)
							switch (y) {
								case 'bestFit': {
									var I;
									const ee = (I = P.map((oe) => [oe.placement, oe.overflows.filter((G) => G > 0).reduce((G, N) => G + N, 0)]).sort((oe, G) => oe[1] - G[1])[0]) == null ? void 0 : I[0];
									ee && (H = ee);
									break;
								}
								case 'initialPlacement':
									H = a;
									break;
							}
						if (o !== H) return { reset: { placement: H } };
					}
					return {};
				},
			}
		);
	};
function rf(e, t) {
	return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function of(e) {
	return y1.some((t) => e[t] >= 0);
}
const _1 = function (e) {
	return (
		e === void 0 && (e = {}),
		{
			name: 'hide',
			options: e,
			async fn(t) {
				const { rects: n } = t,
					{ strategy: r = 'referenceHidden', ...o } = Jt(e, t);
				switch (r) {
					case 'referenceHidden': {
						const i = await ei(t, { ...o, elementContext: 'reference' }),
							l = rf(i, n.reference);
						return { data: { referenceHiddenOffsets: l, referenceHidden: of(l) } };
					}
					case 'escaped': {
						const i = await ei(t, { ...o, altBoundary: !0 }),
							l = rf(i, n.floating);
						return { data: { escapedOffsets: l, escaped: of(l) } };
					}
					default:
						return {};
				}
			},
		}
	);
};
async function N1(e, t) {
	const { placement: n, platform: r, elements: o } = e,
		i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
		l = qt(n),
		a = Zr(n),
		s = Jr(n) === 'y',
		u = ['left', 'top'].includes(l) ? -1 : 1,
		c = i && s ? -1 : 1,
		d = Jt(t, e);
	let { mainAxis: p, crossAxis: y, alignmentAxis: w } = typeof d == 'number' ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
	return a && typeof w == 'number' && (y = a === 'end' ? w * -1 : w), s ? { x: y * c, y: p * u } : { x: p * u, y: y * c };
}
const T1 = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(t) {
					var n, r;
					const { x: o, y: i, placement: l, middlewareData: a } = t,
						s = await N1(t, e);
					return l === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
				},
			}
		);
	},
	L1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(t) {
					const { x: n, y: r, placement: o } = t,
						{
							mainAxis: i = !0,
							crossAxis: l = !1,
							limiter: a = {
								fn: (S) => {
									let { x: m, y: h } = S;
									return { x: m, y: h };
								},
							},
							...s
						} = Jt(e, t),
						u = { x: n, y: r },
						c = await ei(t, s),
						d = Jr(qt(o)),
						p = nc(d);
					let y = u[p],
						w = u[d];
					if (i) {
						const S = p === 'y' ? 'top' : 'left',
							m = p === 'y' ? 'bottom' : 'right',
							h = y + c[S],
							g = y - c[m];
						y = Qs(h, y, g);
					}
					if (l) {
						const S = d === 'y' ? 'top' : 'left',
							m = d === 'y' ? 'bottom' : 'right',
							h = w + c[S],
							g = w - c[m];
						w = Qs(h, w, g);
					}
					const v = a.fn({ ...t, [p]: y, [d]: w });
					return { ...v, data: { x: v.x - n, y: v.y - r } };
				},
			}
		);
	},
	D1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				options: e,
				fn(t) {
					const { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
						{ offset: a = 0, mainAxis: s = !0, crossAxis: u = !0 } = Jt(e, t),
						c = { x: n, y: r },
						d = Jr(o),
						p = nc(d);
					let y = c[p],
						w = c[d];
					const v = Jt(a, t),
						S = typeof v == 'number' ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
					if (s) {
						const g = p === 'y' ? 'height' : 'width',
							E = i.reference[p] - i.floating[g] + S.mainAxis,
							k = i.reference[p] + i.reference[g] - S.mainAxis;
						y < E ? (y = E) : y > k && (y = k);
					}
					if (u) {
						var m, h;
						const g = p === 'y' ? 'width' : 'height',
							E = ['top', 'left'].includes(qt(o)),
							k = i.reference[d] - i.floating[g] + ((E && ((m = l.offset) == null ? void 0 : m[d])) || 0) + (E ? 0 : S.crossAxis),
							_ = i.reference[d] + i.reference[g] + (E ? 0 : ((h = l.offset) == null ? void 0 : h[d]) || 0) - (E ? S.crossAxis : 0);
						w < k ? (w = k) : w > _ && (w = _);
					}
					return { [p]: y, [d]: w };
				},
			}
		);
	},
	O1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'size',
				options: e,
				async fn(t) {
					const { placement: n, rects: r, platform: o, elements: i } = t,
						{ apply: l = () => {}, ...a } = Jt(e, t),
						s = await ei(t, a),
						u = qt(n),
						c = Zr(n),
						d = Jr(n) === 'y',
						{ width: p, height: y } = r.floating;
					let w, v;
					u === 'top' || u === 'bottom' ? ((w = u), (v = c === ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating))) ? 'start' : 'end') ? 'left' : 'right')) : ((v = u), (w = c === 'end' ? 'top' : 'bottom'));
					const S = y - s.top - s.bottom,
						m = p - s.left - s.right,
						h = Mt(y - s[w], S),
						g = Mt(p - s[v], m),
						E = !t.middlewareData.shift;
					let k = h,
						_ = g;
					if ((d ? (_ = c || E ? Mt(g, m) : m) : (k = c || E ? Mt(h, S) : S), E && !c)) {
						const P = rt(s.left, 0),
							O = rt(s.right, 0),
							L = rt(s.top, 0),
							I = rt(s.bottom, 0);
						d ? (_ = p - 2 * (P !== 0 || O !== 0 ? P + O : rt(s.left, s.right))) : (k = y - 2 * (L !== 0 || I !== 0 ? L + I : rt(s.top, s.bottom)));
					}
					await l({ ...t, availableWidth: _, availableHeight: k });
					const x = await o.getDimensions(i.floating);
					return p !== x.width || y !== x.height ? { reset: { rects: !0 } } : {};
				},
			}
		);
	};
function qr(e) {
	return pm(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function lt(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function nn(e) {
	var t;
	return (t = (pm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pm(e) {
	return e instanceof Node || e instanceof lt(e).Node;
}
function zt(e) {
	return e instanceof Element || e instanceof lt(e).Element;
}
function Ft(e) {
	return e instanceof HTMLElement || e instanceof lt(e).HTMLElement;
}
function lf(e) {
	return typeof ShadowRoot > 'u' ? !1 : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot;
}
function ui(e) {
	const { overflow: t, overflowX: n, overflowY: r, display: o } = $t(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(o);
}
function M1(e) {
	return ['table', 'td', 'th'].includes(qr(e));
}
function ic(e) {
	const t = lc(),
		n = $t(e);
	return n.transform !== 'none' || n.perspective !== 'none' || (n.containerType ? n.containerType !== 'normal' : !1) || (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) || (!t && (n.filter ? n.filter !== 'none' : !1)) || ['transform', 'perspective', 'filter'].some((r) => (n.willChange || '').includes(r)) || ['paint', 'layout', 'strict', 'content'].some((r) => (n.contain || '').includes(r));
}
function A1(e) {
	let t = _n(e);
	for (; Ft(t) && !Vr(t); ) {
		if (ic(t)) return t;
		t = _n(t);
	}
	return null;
}
function lc() {
	return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Vr(e) {
	return ['html', 'body', '#document'].includes(qr(e));
}
function $t(e) {
	return lt(e).getComputedStyle(e);
}
function ql(e) {
	return zt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function _n(e) {
	if (qr(e) === 'html') return e;
	const t = e.assignedSlot || e.parentNode || (lf(e) && e.host) || nn(e);
	return lf(t) ? t.host : t;
}
function hm(e) {
	const t = _n(e);
	return Vr(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Ft(t) && ui(t) ? t : hm(t);
}
function ti(e, t, n) {
	var r;
	t === void 0 && (t = []), n === void 0 && (n = !0);
	const o = hm(e),
		i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
		l = lt(o);
	return i ? t.concat(l, l.visualViewport || [], ui(o) ? o : [], l.frameElement && n ? ti(l.frameElement) : []) : t.concat(o, ti(o, [], n));
}
function mm(e) {
	const t = $t(e);
	let n = parseFloat(t.width) || 0,
		r = parseFloat(t.height) || 0;
	const o = Ft(e),
		i = o ? e.offsetWidth : n,
		l = o ? e.offsetHeight : r,
		a = Rl(n) !== i || Rl(r) !== l;
	return a && ((n = i), (r = l)), { width: n, height: r, $: a };
}
function ac(e) {
	return zt(e) ? e : e.contextElement;
}
function Or(e) {
	const t = ac(e);
	if (!Ft(t)) return Rn(1);
	const n = t.getBoundingClientRect(),
		{ width: r, height: o, $: i } = mm(t);
	let l = (i ? Rl(n.width) : n.width) / r,
		a = (i ? Rl(n.height) : n.height) / o;
	return (!l || !Number.isFinite(l)) && (l = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: l, y: a };
}
const j1 = Rn(0);
function vm(e) {
	const t = lt(e);
	return !lc() || !t.visualViewport ? j1 : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function z1(e, t, n) {
	return t === void 0 && (t = !1), !n || (t && n !== lt(e)) ? !1 : t;
}
function er(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	const o = e.getBoundingClientRect(),
		i = ac(e);
	let l = Rn(1);
	t && (r ? zt(r) && (l = Or(r)) : (l = Or(e)));
	const a = z1(i, n, r) ? vm(i) : Rn(0);
	let s = (o.left + a.x) / l.x,
		u = (o.top + a.y) / l.y,
		c = o.width / l.x,
		d = o.height / l.y;
	if (i) {
		const p = lt(i),
			y = r && zt(r) ? lt(r) : r;
		let w = p,
			v = w.frameElement;
		for (; v && r && y !== w; ) {
			const S = Or(v),
				m = v.getBoundingClientRect(),
				h = $t(v),
				g = m.left + (v.clientLeft + parseFloat(h.paddingLeft)) * S.x,
				E = m.top + (v.clientTop + parseFloat(h.paddingTop)) * S.y;
			(s *= S.x), (u *= S.y), (c *= S.x), (d *= S.y), (s += g), (u += E), (w = lt(v)), (v = w.frameElement);
		}
	}
	return Nl({ width: c, height: d, x: s, y: u });
}
const F1 = [':popover-open', ':modal'];
function sc(e) {
	return F1.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
function I1(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
	const i = o === 'fixed',
		l = nn(r),
		a = t ? sc(t.floating) : !1;
	if (r === l || (a && i)) return n;
	let s = { scrollLeft: 0, scrollTop: 0 },
		u = Rn(1);
	const c = Rn(0),
		d = Ft(r);
	if ((d || (!d && !i)) && ((qr(r) !== 'body' || ui(l)) && (s = ql(r)), Ft(r))) {
		const p = er(r);
		(u = Or(r)), (c.x = p.x + r.clientLeft), (c.y = p.y + r.clientTop);
	}
	return { width: n.width * u.x, height: n.height * u.y, x: n.x * u.x - s.scrollLeft * u.x + c.x, y: n.y * u.y - s.scrollTop * u.y + c.y };
}
function U1(e) {
	return Array.from(e.getClientRects());
}
function gm(e) {
	return er(nn(e)).left + ql(e).scrollLeft;
}
function B1(e) {
	const t = nn(e),
		n = ql(e),
		r = e.ownerDocument.body,
		o = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
		i = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
	let l = -n.scrollLeft + gm(e);
	const a = -n.scrollTop;
	return $t(r).direction === 'rtl' && (l += rt(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: l, y: a };
}
function H1(e, t) {
	const n = lt(e),
		r = nn(e),
		o = n.visualViewport;
	let i = r.clientWidth,
		l = r.clientHeight,
		a = 0,
		s = 0;
	if (o) {
		(i = o.width), (l = o.height);
		const u = lc();
		(!u || (u && t === 'fixed')) && ((a = o.offsetLeft), (s = o.offsetTop));
	}
	return { width: i, height: l, x: a, y: s };
}
function V1(e, t) {
	const n = er(e, !0, t === 'fixed'),
		r = n.top + e.clientTop,
		o = n.left + e.clientLeft,
		i = Ft(e) ? Or(e) : Rn(1),
		l = e.clientWidth * i.x,
		a = e.clientHeight * i.y,
		s = o * i.x,
		u = r * i.y;
	return { width: l, height: a, x: s, y: u };
}
function af(e, t, n) {
	let r;
	if (t === 'viewport') r = H1(e, n);
	else if (t === 'document') r = B1(nn(e));
	else if (zt(t)) r = V1(t, n);
	else {
		const o = vm(e);
		r = { ...t, x: t.x - o.x, y: t.y - o.y };
	}
	return Nl(r);
}
function ym(e, t) {
	const n = _n(e);
	return n === t || !zt(n) || Vr(n) ? !1 : $t(n).position === 'fixed' || ym(n, t);
}
function W1(e, t) {
	const n = t.get(e);
	if (n) return n;
	let r = ti(e, [], !1).filter((a) => zt(a) && qr(a) !== 'body'),
		o = null;
	const i = $t(e).position === 'fixed';
	let l = i ? _n(e) : e;
	for (; zt(l) && !Vr(l); ) {
		const a = $t(l),
			s = ic(l);
		!s && a.position === 'fixed' && (o = null), (i ? !s && !o : (!s && a.position === 'static' && !!o && ['absolute', 'fixed'].includes(o.position)) || (ui(l) && !s && ym(e, l))) ? (r = r.filter((c) => c !== l)) : (o = a), (l = _n(l));
	}
	return t.set(e, r), r;
}
function K1(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
	const l = [...(n === 'clippingAncestors' ? (sc(t) ? [] : W1(t, this._c)) : [].concat(n)), r],
		a = l[0],
		s = l.reduce((u, c) => {
			const d = af(t, c, o);
			return (u.top = rt(d.top, u.top)), (u.right = Mt(d.right, u.right)), (u.bottom = Mt(d.bottom, u.bottom)), (u.left = rt(d.left, u.left)), u;
		}, af(t, a, o));
	return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}
function Q1(e) {
	const { width: t, height: n } = mm(e);
	return { width: t, height: n };
}
function Y1(e, t, n) {
	const r = Ft(t),
		o = nn(t),
		i = n === 'fixed',
		l = er(e, !0, i, t);
	let a = { scrollLeft: 0, scrollTop: 0 };
	const s = Rn(0);
	if (r || (!r && !i))
		if (((qr(t) !== 'body' || ui(o)) && (a = ql(t)), r)) {
			const d = er(t, !0, i, t);
			(s.x = d.x + t.clientLeft), (s.y = d.y + t.clientTop);
		} else o && (s.x = gm(o));
	const u = l.left + a.scrollLeft - s.x,
		c = l.top + a.scrollTop - s.y;
	return { x: u, y: c, width: l.width, height: l.height };
}
function za(e) {
	return $t(e).position === 'static';
}
function sf(e, t) {
	return !Ft(e) || $t(e).position === 'fixed' ? null : t ? t(e) : e.offsetParent;
}
function wm(e, t) {
	const n = lt(e);
	if (sc(e)) return n;
	if (!Ft(e)) {
		let o = _n(e);
		for (; o && !Vr(o); ) {
			if (zt(o) && !za(o)) return o;
			o = _n(o);
		}
		return n;
	}
	let r = sf(e, t);
	for (; r && M1(r) && za(r); ) r = sf(r, t);
	return r && Vr(r) && za(r) && !ic(r) ? n : r || A1(e) || n;
}
const G1 = async function (e) {
	const t = this.getOffsetParent || wm,
		n = this.getDimensions,
		r = await n(e.floating);
	return { reference: Y1(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function X1(e) {
	return $t(e).direction === 'rtl';
}
const Z1 = { convertOffsetParentRelativeRectToViewportRelativeRect: I1, getDocumentElement: nn, getClippingRect: K1, getOffsetParent: wm, getElementRects: G1, getClientRects: U1, getDimensions: Q1, getScale: Or, isElement: zt, isRTL: X1 };
function J1(e, t) {
	let n = null,
		r;
	const o = nn(e);
	function i() {
		var a;
		clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
	}
	function l(a, s) {
		a === void 0 && (a = !1), s === void 0 && (s = 1), i();
		const { left: u, top: c, width: d, height: p } = e.getBoundingClientRect();
		if ((a || t(), !d || !p)) return;
		const y = Mi(c),
			w = Mi(o.clientWidth - (u + d)),
			v = Mi(o.clientHeight - (c + p)),
			S = Mi(u),
			h = { rootMargin: -y + 'px ' + -w + 'px ' + -v + 'px ' + -S + 'px', threshold: rt(0, Mt(1, s)) || 1 };
		let g = !0;
		function E(k) {
			const _ = k[0].intersectionRatio;
			if (_ !== s) {
				if (!g) return l();
				_
					? l(!1, _)
					: (r = setTimeout(() => {
							l(!1, 1e-7);
					  }, 1e3));
			}
			g = !1;
		}
		try {
			n = new IntersectionObserver(E, { ...h, root: o.ownerDocument });
		} catch {
			n = new IntersectionObserver(E, h);
		}
		n.observe(e);
	}
	return l(!0), i;
}
function q1(e, t, n, r) {
	r === void 0 && (r = {});
	const { ancestorScroll: o = !0, ancestorResize: i = !0, elementResize: l = typeof ResizeObserver == 'function', layoutShift: a = typeof IntersectionObserver == 'function', animationFrame: s = !1 } = r,
		u = ac(e),
		c = o || i ? [...(u ? ti(u) : []), ...ti(t)] : [];
	c.forEach((m) => {
		o && m.addEventListener('scroll', n, { passive: !0 }), i && m.addEventListener('resize', n);
	});
	const d = u && a ? J1(u, n) : null;
	let p = -1,
		y = null;
	l &&
		((y = new ResizeObserver((m) => {
			let [h] = m;
			h &&
				h.target === u &&
				y &&
				(y.unobserve(t),
				cancelAnimationFrame(p),
				(p = requestAnimationFrame(() => {
					var g;
					(g = y) == null || g.observe(t);
				}))),
				n();
		})),
		u && !s && y.observe(u),
		y.observe(t));
	let w,
		v = s ? er(e) : null;
	s && S();
	function S() {
		const m = er(e);
		v && (m.x !== v.x || m.y !== v.y || m.width !== v.width || m.height !== v.height) && n(), (v = m), (w = requestAnimationFrame(S));
	}
	return (
		n(),
		() => {
			var m;
			c.forEach((h) => {
				o && h.removeEventListener('scroll', n), i && h.removeEventListener('resize', n);
			}),
				d == null || d(),
				(m = y) == null || m.disconnect(),
				(y = null),
				s && cancelAnimationFrame(w);
		}
	);
}
const ex = T1,
	tx = L1,
	nx = R1,
	rx = O1,
	ox = _1,
	uf = $1,
	ix = D1,
	lx = (e, t, n) => {
		const r = new Map(),
			o = { platform: Z1, ...n },
			i = { ...o.platform, _c: r };
		return P1(e, t, { ...o, platform: i });
	};
var qi = typeof document < 'u' ? f.useLayoutEffect : f.useEffect;
function Tl(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == 'function' && e.toString() === t.toString()) return !0;
	let n, r, o;
	if (e && t && typeof e == 'object') {
		if (Array.isArray(e)) {
			if (((n = e.length), n !== t.length)) return !1;
			for (r = n; r-- !== 0; ) if (!Tl(e[r], t[r])) return !1;
			return !0;
		}
		if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
		for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
		for (r = n; r-- !== 0; ) {
			const i = o[r];
			if (!(i === '_owner' && e.$$typeof) && !Tl(e[i], t[i])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function xm(e) {
	return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cf(e, t) {
	const n = xm(e);
	return Math.round(t * n) / n;
}
function df(e) {
	const t = f.useRef(e);
	return (
		qi(() => {
			t.current = e;
		}),
		t
	);
}
function ax(e) {
	e === void 0 && (e = {});
	const { placement: t = 'bottom', strategy: n = 'absolute', middleware: r = [], platform: o, elements: { reference: i, floating: l } = {}, transform: a = !0, whileElementsMounted: s, open: u } = e,
		[c, d] = f.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
		[p, y] = f.useState(r);
	Tl(p, r) || y(r);
	const [w, v] = f.useState(null),
		[S, m] = f.useState(null),
		h = f.useCallback((G) => {
			G !== _.current && ((_.current = G), v(G));
		}, []),
		g = f.useCallback((G) => {
			G !== x.current && ((x.current = G), m(G));
		}, []),
		E = i || w,
		k = l || S,
		_ = f.useRef(null),
		x = f.useRef(null),
		P = f.useRef(c),
		O = s != null,
		L = df(s),
		I = df(o),
		M = f.useCallback(() => {
			if (!_.current || !x.current) return;
			const G = { placement: t, strategy: n, middleware: p };
			I.current && (G.platform = I.current),
				lx(_.current, x.current, G).then((N) => {
					const F = { ...N, isPositioned: !0 };
					Z.current &&
						!Tl(P.current, F) &&
						((P.current = F),
						Yr.flushSync(() => {
							d(F);
						}));
				});
		}, [p, t, n, I]);
	qi(() => {
		u === !1 && P.current.isPositioned && ((P.current.isPositioned = !1), d((G) => ({ ...G, isPositioned: !1 })));
	}, [u]);
	const Z = f.useRef(!1);
	qi(
		() => (
			(Z.current = !0),
			() => {
				Z.current = !1;
			}
		),
		[]
	),
		qi(() => {
			if ((E && (_.current = E), k && (x.current = k), E && k)) {
				if (L.current) return L.current(E, k, M);
				M();
			}
		}, [E, k, M, L, O]);
	const H = f.useMemo(() => ({ reference: _, floating: x, setReference: h, setFloating: g }), [h, g]),
		ee = f.useMemo(() => ({ reference: E, floating: k }), [E, k]),
		oe = f.useMemo(() => {
			const G = { position: n, left: 0, top: 0 };
			if (!ee.floating) return G;
			const N = cf(ee.floating, c.x),
				F = cf(ee.floating, c.y);
			return a ? { ...G, transform: 'translate(' + N + 'px, ' + F + 'px)', ...(xm(ee.floating) >= 1.5 && { willChange: 'transform' }) } : { position: n, left: N, top: F };
		}, [n, a, ee.floating, c.x, c.y]);
	return f.useMemo(() => ({ ...c, update: M, refs: H, elements: ee, floatingStyles: oe }), [c, M, H, ee, oe]);
}
const sx = (e) => {
		function t(n) {
			return {}.hasOwnProperty.call(n, 'current');
		}
		return {
			name: 'arrow',
			options: e,
			fn(n) {
				const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
				return r && t(r) ? (r.current != null ? uf({ element: r.current, padding: o }).fn(n) : {}) : r ? uf({ element: r, padding: o }).fn(n) : {};
			},
		};
	},
	ux = (e, t) => ({ ...ex(e), options: [e, t] }),
	cx = (e, t) => ({ ...tx(e), options: [e, t] }),
	dx = (e, t) => ({ ...ix(e), options: [e, t] }),
	fx = (e, t) => ({ ...nx(e), options: [e, t] }),
	px = (e, t) => ({ ...rx(e), options: [e, t] }),
	hx = (e, t) => ({ ...ox(e), options: [e, t] }),
	mx = (e, t) => ({ ...sx(e), options: [e, t] }),
	vx = ['a', 'button', 'div', 'form', 'h2', 'h3', 'img', 'input', 'label', 'li', 'nav', 'ol', 'p', 'span', 'svg', 'ul'],
	tt = vx.reduce((e, t) => {
		const n = f.forwardRef((r, o) => {
			const { asChild: i, ...l } = r,
				a = i ? Zl : t;
			return (
				f.useEffect(() => {
					window[Symbol.for('radix-ui')] = !0;
				}, []),
				f.createElement(a, le({}, l, { ref: o }))
			);
		});
		return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
	}, {});
function gx(e, t) {
	e && Yr.flushSync(() => e.dispatchEvent(t));
}
const Nn = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {};
function yx(e) {
	const [t, n] = f.useState(void 0);
	return (
		Nn(() => {
			if (e) {
				n({ width: e.offsetWidth, height: e.offsetHeight });
				const r = new ResizeObserver((o) => {
					if (!Array.isArray(o) || !o.length) return;
					const i = o[0];
					let l, a;
					if ('borderBoxSize' in i) {
						const s = i.borderBoxSize,
							u = Array.isArray(s) ? s[0] : s;
						(l = u.inlineSize), (a = u.blockSize);
					} else (l = e.offsetWidth), (a = e.offsetHeight);
					n({ width: l, height: a });
				});
				return r.observe(e, { box: 'border-box' }), () => r.unobserve(e);
			} else n(void 0);
		}, [e]),
		t
	);
}
const Sm = 'Popper',
	[Em, Cm] = Jl(Sm),
	[wx, km] = Em(Sm),
	xx = (e) => {
		const { __scopePopper: t, children: n } = e,
			[r, o] = f.useState(null);
		return f.createElement(wx, { scope: t, anchor: r, onAnchorChange: o }, n);
	},
	Sx = 'PopperAnchor',
	Ex = f.forwardRef((e, t) => {
		const { __scopePopper: n, virtualRef: r, ...o } = e,
			i = km(Sx, n),
			l = f.useRef(null),
			a = tn(t, l);
		return (
			f.useEffect(() => {
				i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
			}),
			r ? null : f.createElement(tt.div, le({}, o, { ref: a }))
		);
	}),
	bm = 'PopperContent',
	[Cx, WE] = Em(bm),
	kx = f.forwardRef((e, t) => {
		var n, r, o, i, l, a, s, u;
		const { __scopePopper: c, side: d = 'bottom', sideOffset: p = 0, align: y = 'center', alignOffset: w = 0, arrowPadding: v = 0, avoidCollisions: S = !0, collisionBoundary: m = [], collisionPadding: h = 0, sticky: g = 'partial', hideWhenDetached: E = !1, updatePositionStrategy: k = 'optimized', onPlaced: _, ...x } = e,
			P = km(bm, c),
			[O, L] = f.useState(null),
			I = tn(t, (An) => L(An)),
			[M, Z] = f.useState(null),
			H = yx(M),
			ee = (n = H == null ? void 0 : H.width) !== null && n !== void 0 ? n : 0,
			oe = (r = H == null ? void 0 : H.height) !== null && r !== void 0 ? r : 0,
			G = d + (y !== 'center' ? '-' + y : ''),
			N = typeof h == 'number' ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h },
			F = Array.isArray(m) ? m : [m],
			B = F.length > 0,
			X = { padding: N, boundary: F.filter(bx), altBoundary: B },
			{
				refs: te,
				floatingStyles: Ge,
				placement: Ue,
				isPositioned: be,
				middlewareData: ye,
			} = ax({
				strategy: 'fixed',
				placement: G,
				whileElementsMounted: (...An) => q1(...An, { animationFrame: k === 'always' }),
				elements: { reference: P.anchor },
				middleware: [
					ux({ mainAxis: p + oe, alignmentAxis: w }),
					S && cx({ mainAxis: !0, crossAxis: !1, limiter: g === 'partial' ? dx() : void 0, ...X }),
					S && fx({ ...X }),
					px({
						...X,
						apply: ({ elements: An, rects: _t, availableWidth: ra, availableHeight: oa }) => {
							const { width: ia, height: la } = _t.reference,
								lr = An.floating.style;
							lr.setProperty('--radix-popper-available-width', `${ra}px`), lr.setProperty('--radix-popper-available-height', `${oa}px`), lr.setProperty('--radix-popper-anchor-width', `${ia}px`), lr.setProperty('--radix-popper-anchor-height', `${la}px`);
						},
					}),
					M && mx({ element: M, padding: v }),
					Px({ arrowWidth: ee, arrowHeight: oe }),
					E && hx({ strategy: 'referenceHidden', ...X }),
				],
			}),
			[Be, to] = Pm(Ue),
			ir = Zt(_);
		Nn(() => {
			be && (ir == null || ir());
		}, [be, ir]);
		const ta = (o = ye.arrow) === null || o === void 0 ? void 0 : o.x,
			na = (i = ye.arrow) === null || i === void 0 ? void 0 : i.y,
			He = ((l = ye.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0,
			[Mn, di] = f.useState();
		return (
			Nn(() => {
				O && di(window.getComputedStyle(O).zIndex);
			}, [O]),
			f.createElement('div', { ref: te.setFloating, 'data-radix-popper-content-wrapper': '', style: { ...Ge, transform: be ? Ge.transform : 'translate(0, -200%)', minWidth: 'max-content', zIndex: Mn, '--radix-popper-transform-origin': [(a = ye.transformOrigin) === null || a === void 0 ? void 0 : a.x, (s = ye.transformOrigin) === null || s === void 0 ? void 0 : s.y].join(' ') }, dir: e.dir }, f.createElement(Cx, { scope: c, placedSide: Be, onArrowChange: Z, arrowX: ta, arrowY: na, shouldHideArrow: He }, f.createElement(tt.div, le({ 'data-side': Be, 'data-align': to }, x, { ref: I, style: { ...x.style, animation: be ? void 0 : 'none', opacity: (u = ye.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0 } }))))
		);
	});
function bx(e) {
	return e !== null;
}
const Px = (e) => ({
	name: 'transformOrigin',
	options: e,
	fn(t) {
		var n, r, o, i, l;
		const { placement: a, rects: s, middlewareData: u } = t,
			d = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0,
			p = d ? 0 : e.arrowWidth,
			y = d ? 0 : e.arrowHeight,
			[w, v] = Pm(a),
			S = { start: '0%', center: '50%', end: '100%' }[v],
			m = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2,
			h = ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null && i !== void 0 ? i : 0) + y / 2;
		let g = '',
			E = '';
		return w === 'bottom' ? ((g = d ? S : `${m}px`), (E = `${-y}px`)) : w === 'top' ? ((g = d ? S : `${m}px`), (E = `${s.floating.height + y}px`)) : w === 'right' ? ((g = `${-y}px`), (E = d ? S : `${h}px`)) : w === 'left' && ((g = `${s.floating.width + y}px`), (E = d ? S : `${h}px`)), { data: { x: g, y: E } };
	},
});
function Pm(e) {
	const [t, n = 'center'] = e.split('-');
	return [t, n];
}
const $x = xx,
	Rx = Ex,
	_x = kx,
	Nx = f.forwardRef((e, t) => {
		var n;
		const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
		return r ? Fh.createPortal(f.createElement(tt.div, le({}, o, { ref: t })), r) : null;
	});
function Tx(e, t) {
	return f.useReducer((n, r) => {
		const o = t[n][r];
		return o ?? n;
	}, e);
}
const ci = (e) => {
	const { present: t, children: n } = e,
		r = Lx(t),
		o = typeof n == 'function' ? n({ present: r.isPresent }) : f.Children.only(n),
		i = tn(r.ref, o.ref);
	return typeof n == 'function' || r.isPresent ? f.cloneElement(o, { ref: i }) : null;
};
ci.displayName = 'Presence';
function Lx(e) {
	const [t, n] = f.useState(),
		r = f.useRef({}),
		o = f.useRef(e),
		i = f.useRef('none'),
		l = e ? 'mounted' : 'unmounted',
		[a, s] = Tx(l, { mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' }, unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' }, unmounted: { MOUNT: 'mounted' } });
	return (
		f.useEffect(() => {
			const u = Ai(r.current);
			i.current = a === 'mounted' ? u : 'none';
		}, [a]),
		Nn(() => {
			const u = r.current,
				c = o.current;
			if (c !== e) {
				const p = i.current,
					y = Ai(u);
				e ? s('MOUNT') : y === 'none' || (u == null ? void 0 : u.display) === 'none' ? s('UNMOUNT') : s(c && p !== y ? 'ANIMATION_OUT' : 'UNMOUNT'), (o.current = e);
			}
		}, [e, s]),
		Nn(() => {
			if (t) {
				const u = (d) => {
						const y = Ai(r.current).includes(d.animationName);
						d.target === t && y && Yr.flushSync(() => s('ANIMATION_END'));
					},
					c = (d) => {
						d.target === t && (i.current = Ai(r.current));
					};
				return (
					t.addEventListener('animationstart', c),
					t.addEventListener('animationcancel', u),
					t.addEventListener('animationend', u),
					() => {
						t.removeEventListener('animationstart', c), t.removeEventListener('animationcancel', u), t.removeEventListener('animationend', u);
					}
				);
			} else s('ANIMATION_END');
		}, [t, s]),
		{
			isPresent: ['mounted', 'unmountSuspended'].includes(a),
			ref: f.useCallback((u) => {
				u && (r.current = getComputedStyle(u)), n(u);
			}, []),
		}
	);
}
function Ai(e) {
	return (e == null ? void 0 : e.animationName) || 'none';
}
function Dx(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Zt(e);
	f.useEffect(() => {
		const r = (o) => {
			o.key === 'Escape' && n(o);
		};
		return t.addEventListener('keydown', r), () => t.removeEventListener('keydown', r);
	}, [n, t]);
}
const Gs = 'dismissableLayer.update',
	Ox = 'dismissableLayer.pointerDownOutside',
	Mx = 'dismissableLayer.focusOutside';
let ff;
const Ax = f.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
	$m = f.forwardRef((e, t) => {
		var n;
		const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: a, onDismiss: s, ...u } = e,
			c = f.useContext(Ax),
			[d, p] = f.useState(null),
			y = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document,
			[, w] = f.useState({}),
			v = tn(t, (P) => p(P)),
			S = Array.from(c.layers),
			[m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
			h = S.indexOf(m),
			g = d ? S.indexOf(d) : -1,
			E = c.layersWithOutsidePointerEventsDisabled.size > 0,
			k = g >= h,
			_ = jx((P) => {
				const O = P.target,
					L = [...c.branches].some((I) => I.contains(O));
				!k || L || (i == null || i(P), a == null || a(P), P.defaultPrevented || s == null || s());
			}, y),
			x = zx((P) => {
				const O = P.target;
				[...c.branches].some((I) => I.contains(O)) || (l == null || l(P), a == null || a(P), P.defaultPrevented || s == null || s());
			}, y);
		return (
			Dx((P) => {
				g === c.layers.size - 1 && (o == null || o(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
			}, y),
			f.useEffect(() => {
				if (d)
					return (
						r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && ((ff = y.body.style.pointerEvents), (y.body.style.pointerEvents = 'none')), c.layersWithOutsidePointerEventsDisabled.add(d)),
						c.layers.add(d),
						pf(),
						() => {
							r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = ff);
						}
					);
			}, [d, y, r, c]),
			f.useEffect(
				() => () => {
					d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), pf());
				},
				[d, c]
			),
			f.useEffect(() => {
				const P = () => w({});
				return document.addEventListener(Gs, P), () => document.removeEventListener(Gs, P);
			}, []),
			f.createElement(tt.div, le({}, u, { ref: v, style: { pointerEvents: E ? (k ? 'auto' : 'none') : void 0, ...e.style }, onFocusCapture: De(e.onFocusCapture, x.onFocusCapture), onBlurCapture: De(e.onBlurCapture, x.onBlurCapture), onPointerDownCapture: De(e.onPointerDownCapture, _.onPointerDownCapture) }))
		);
	});
function jx(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Zt(e),
		r = f.useRef(!1),
		o = f.useRef(() => {});
	return (
		f.useEffect(() => {
			const i = (a) => {
					if (a.target && !r.current) {
						let c = function () {
							Rm(Ox, n, u, { discrete: !0 });
						};
						var s = c;
						const u = { originalEvent: a };
						a.pointerType === 'touch' ? (t.removeEventListener('click', o.current), (o.current = c), t.addEventListener('click', o.current, { once: !0 })) : c();
					} else t.removeEventListener('click', o.current);
					r.current = !1;
				},
				l = window.setTimeout(() => {
					t.addEventListener('pointerdown', i);
				}, 0);
			return () => {
				window.clearTimeout(l), t.removeEventListener('pointerdown', i), t.removeEventListener('click', o.current);
			};
		}, [t, n]),
		{ onPointerDownCapture: () => (r.current = !0) }
	);
}
function zx(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Zt(e),
		r = f.useRef(!1);
	return (
		f.useEffect(() => {
			const o = (i) => {
				i.target && !r.current && Rm(Mx, n, { originalEvent: i }, { discrete: !1 });
			};
			return t.addEventListener('focusin', o), () => t.removeEventListener('focusin', o);
		}, [t, n]),
		{ onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
	);
}
function pf() {
	const e = new CustomEvent(Gs);
	document.dispatchEvent(e);
}
function Rm(e, t, n, { discrete: r }) {
	const o = n.originalEvent.target,
		i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
	t && o.addEventListener(e, t, { once: !0 }), r ? gx(o, i) : o.dispatchEvent(i);
}
let Fa;
const _m = 'HoverCard',
	[Nm, KE] = Jl(_m, [Cm]),
	uc = Cm(),
	[Fx, cc] = Nm(_m),
	Ix = (e) => {
		const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: i, openDelay: l = 700, closeDelay: a = 300 } = e,
			s = uc(t),
			u = f.useRef(0),
			c = f.useRef(0),
			d = f.useRef(!1),
			p = f.useRef(!1),
			[y = !1, w] = dm({ prop: r, defaultProp: o, onChange: i }),
			v = f.useCallback(() => {
				clearTimeout(c.current), (u.current = window.setTimeout(() => w(!0), l));
			}, [l, w]),
			S = f.useCallback(() => {
				clearTimeout(u.current), !d.current && !p.current && (c.current = window.setTimeout(() => w(!1), a));
			}, [a, w]),
			m = f.useCallback(() => w(!1), [w]);
		return (
			f.useEffect(
				() => () => {
					clearTimeout(u.current), clearTimeout(c.current);
				},
				[]
			),
			f.createElement(Fx, { scope: t, open: y, onOpenChange: w, onOpen: v, onClose: S, onDismiss: m, hasSelectionRef: d, isPointerDownOnContentRef: p }, f.createElement($x, s, n))
		);
	},
	Ux = 'HoverCardTrigger',
	Bx = f.forwardRef((e, t) => {
		const { __scopeHoverCard: n, ...r } = e,
			o = cc(Ux, n),
			i = uc(n);
		return f.createElement(Rx, le({ asChild: !0 }, i), f.createElement(tt.a, le({ 'data-state': o.open ? 'open' : 'closed' }, r, { ref: t, onPointerEnter: De(e.onPointerEnter, Ll(o.onOpen)), onPointerLeave: De(e.onPointerLeave, Ll(o.onClose)), onFocus: De(e.onFocus, o.onOpen), onBlur: De(e.onBlur, o.onClose), onTouchStart: De(e.onTouchStart, (l) => l.preventDefault()) })));
	}),
	Hx = 'HoverCardPortal',
	[QE, Vx] = Nm(Hx, { forceMount: void 0 }),
	Xs = 'HoverCardContent',
	Wx = f.forwardRef((e, t) => {
		const n = Vx(Xs, e.__scopeHoverCard),
			{ forceMount: r = n.forceMount, ...o } = e,
			i = cc(Xs, e.__scopeHoverCard);
		return f.createElement(ci, { present: r || i.open }, f.createElement(Kx, le({ 'data-state': i.open ? 'open' : 'closed' }, o, { onPointerEnter: De(e.onPointerEnter, Ll(i.onOpen)), onPointerLeave: De(e.onPointerLeave, Ll(i.onClose)), ref: t })));
	}),
	Kx = f.forwardRef((e, t) => {
		const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, ...a } = e,
			s = cc(Xs, n),
			u = uc(n),
			c = f.useRef(null),
			d = tn(t, c),
			[p, y] = f.useState(!1);
		return (
			f.useEffect(() => {
				if (p) {
					const w = document.body;
					return (
						(Fa = w.style.userSelect || w.style.webkitUserSelect),
						(w.style.userSelect = 'none'),
						(w.style.webkitUserSelect = 'none'),
						() => {
							(w.style.userSelect = Fa), (w.style.webkitUserSelect = Fa);
						}
					);
				}
			}, [p]),
			f.useEffect(() => {
				if (c.current) {
					const w = () => {
						y(!1),
							(s.isPointerDownOnContentRef.current = !1),
							setTimeout(() => {
								var v;
								((v = document.getSelection()) === null || v === void 0 ? void 0 : v.toString()) !== '' && (s.hasSelectionRef.current = !0);
							});
					};
					return (
						document.addEventListener('pointerup', w),
						() => {
							document.removeEventListener('pointerup', w), (s.hasSelectionRef.current = !1), (s.isPointerDownOnContentRef.current = !1);
						}
					);
				}
			}, [s.isPointerDownOnContentRef, s.hasSelectionRef]),
			f.useEffect(() => {
				c.current && Qx(c.current).forEach((v) => v.setAttribute('tabindex', '-1'));
			}),
			f.createElement(
				$m,
				{
					asChild: !0,
					disableOutsidePointerEvents: !1,
					onInteractOutside: l,
					onEscapeKeyDown: r,
					onPointerDownOutside: o,
					onFocusOutside: De(i, (w) => {
						w.preventDefault();
					}),
					onDismiss: s.onDismiss,
				},
				f.createElement(
					_x,
					le({}, u, a, {
						onPointerDown: De(a.onPointerDown, (w) => {
							w.currentTarget.contains(w.target) && y(!0), (s.hasSelectionRef.current = !1), (s.isPointerDownOnContentRef.current = !0);
						}),
						ref: d,
						style: { ...a.style, userSelect: p ? 'text' : void 0, WebkitUserSelect: p ? 'text' : void 0, '--radix-hover-card-content-transform-origin': 'var(--radix-popper-transform-origin)', '--radix-hover-card-content-available-width': 'var(--radix-popper-available-width)', '--radix-hover-card-content-available-height': 'var(--radix-popper-available-height)', '--radix-hover-card-trigger-width': 'var(--radix-popper-anchor-width)', '--radix-hover-card-trigger-height': 'var(--radix-popper-anchor-height)' },
					})
				)
			)
		);
	});
function Ll(e) {
	return (t) => (t.pointerType === 'touch' ? void 0 : e());
}
function Qx(e) {
	const t = [],
		n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => (r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
	for (; n.nextNode(); ) t.push(n.currentNode);
	return t;
}
const Yx = Ix,
	Tm = Wx,
	Lm = 'Avatar',
	[Gx, YE] = Jl(Lm),
	[Xx, Dm] = Gx(Lm),
	Zx = f.forwardRef((e, t) => {
		const { __scopeAvatar: n, ...r } = e,
			[o, i] = f.useState('idle');
		return f.createElement(Xx, { scope: n, imageLoadingStatus: o, onImageLoadingStatusChange: i }, f.createElement(tt.span, le({}, r, { ref: t })));
	}),
	Jx = 'AvatarImage',
	qx = f.forwardRef((e, t) => {
		const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {}, ...i } = e,
			l = Dm(Jx, n),
			a = nS(r),
			s = Zt((u) => {
				o(u), l.onImageLoadingStatusChange(u);
			});
		return (
			Nn(() => {
				a !== 'idle' && s(a);
			}, [a, s]),
			a === 'loaded' ? f.createElement(tt.img, le({}, i, { ref: t, src: r })) : null
		);
	}),
	eS = 'AvatarFallback',
	tS = f.forwardRef((e, t) => {
		const { __scopeAvatar: n, delayMs: r, ...o } = e,
			i = Dm(eS, n),
			[l, a] = f.useState(r === void 0);
		return (
			f.useEffect(() => {
				if (r !== void 0) {
					const s = window.setTimeout(() => a(!0), r);
					return () => window.clearTimeout(s);
				}
			}, [r]),
			l && i.imageLoadingStatus !== 'loaded' ? f.createElement(tt.span, le({}, o, { ref: t })) : null
		);
	});
function nS(e) {
	const [t, n] = f.useState('idle');
	return (
		Nn(() => {
			if (!e) {
				n('error');
				return;
			}
			let r = !0;
			const o = new window.Image(),
				i = (l) => () => {
					r && n(l);
				};
			return (
				n('loading'),
				(o.onload = i('loaded')),
				(o.onerror = i('error')),
				(o.src = e),
				() => {
					r = !1;
				}
			);
		}, [e]),
		t
	);
}
const Om = Zx,
	Mm = qx,
	Am = tS,
	jm = f.forwardRef(({ className: e, ...t }, n) => R.jsx(Om, { ref: n, className: Ae('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', e), ...t }));
jm.displayName = Om.displayName;
const zm = f.forwardRef(({ className: e, ...t }, n) => R.jsx(Mm, { ref: n, className: Ae('aspect-square h-full w-full', e), ...t }));
zm.displayName = Mm.displayName;
const Fm = f.forwardRef(({ className: e, ...t }, n) => R.jsx(Am, { ref: n, className: Ae('flex h-full w-full items-center justify-center rounded-full bg-muted', e), ...t }));
Fm.displayName = Am.displayName;
const Im = f.forwardRef(({ className: e, ...t }, n) => R.jsx('div', { ref: n, className: Ae('rounded-lg border bg-card text-card-foreground shadow-sm', e), ...t }));
Im.displayName = 'Card';
const Um = f.forwardRef(({ className: e, ...t }, n) => R.jsx('div', { ref: n, className: Ae('flex flex-col space-y-1.5 p-6', e), ...t }));
Um.displayName = 'CardHeader';
const rS = f.forwardRef(({ className: e, ...t }, n) => R.jsx('h3', { ref: n, className: Ae('text-2xl font-semibold leading-none tracking-tight', e), ...t }));
rS.displayName = 'CardTitle';
const oS = f.forwardRef(({ className: e, ...t }, n) => R.jsx('p', { ref: n, className: Ae('text-sm text-muted-foreground', e), ...t }));
oS.displayName = 'CardDescription';
const Bm = f.forwardRef(({ className: e, ...t }, n) => R.jsx('div', { ref: n, className: Ae('p-6 pt-0', e), ...t }));
Bm.displayName = 'CardContent';
const iS = f.forwardRef(({ className: e, ...t }, n) => R.jsx('div', { ref: n, className: Ae('flex items-center p-6 pt-0', e), ...t }));
iS.displayName = 'CardFooter';
const lS = Yx,
	Hm = f.forwardRef(({ className: e, align: t = 'center', sideOffset: n = 4, ...r }, o) => R.jsx(Tm, { ref: o, align: t, sideOffset: n, className: Ae('z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', e), ...r }));
Hm.displayName = Tm.displayName;
const aS = () => {
	const e = [
			{ name: 'rbit', avatar: 'img/avatars/rbit.webp', role: 'worked on the functionality of the mod', fallback: 'RB' },
			{ name: 'olsu', avatar: '', role: 'worked on the UI of the mod', fallback: 'OL' },
		],
		t = [
			{ img: 'test', header: 'Maximum customizability', content: 'The mod should provide you with as much customizability for all of its features as possible. If you miss a certain customization, feel free to make suggestions to further improve the mod.' },
			{ img: 'test', header: 'Useful practice tools', content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
			{ img: 'test', header: 'Leaderboards', content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
		],
		n = [
			{ header: 'No cheating', content: "This is not a cheating mod. While it allows you to make changes to the game's physics like disabling the grapple cooldown, this is limited to local games only and will generally be watermarked." },
			{ header: 'No changes by default', content: 'If all settings are set to their default, the game will behave just like an unmodified version. The only notable exceptions are the Velo leaderboard system, which is enabled by default, and a few local game settings to help making runs comply with the rules.' },
		],
		r = ({ name: i, avatar: l, role: a, fallback: s }) => R.jsxs(lS, { openDelay: 100, closeDelay: 100, children: [R.jsx(Bx, { children: R.jsx(Qn, { variant: 'linkHover1', className: 'font-normal p-0 text-xl -translate-y-1.5 no-focus', children: i }) }), R.jsxs(Hm, { className: 'flex flex-row items-center w-full py-3', side: 'top', children: [R.jsxs(jm, { children: [R.jsx(zm, { src: l, alt: `${i}'s avatar` }), R.jsx(Fm, { children: s })] }), R.jsxs('div', { className: 'ml-2 text-sm', children: [R.jsxs('p', { children: ['@', i] }), R.jsxs('p', { className: 'text-sm text-popover-foreground/60', children: ['> ', a] })] })] })] }),
		o = ({ header: i, content: l }) => R.jsxs(Im, { className: 'max-w-sm text-center hover:transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-primary-foreground', children: [R.jsx(Um, { children: i }), R.jsx(Bm, { children: l })] });
	return R.jsxs('div', { className: 'flex flex-col justify-center items-center h-full', children: [R.jsx('h1', { className: 'mb-14', children: 'Features' }), R.jsxs('h2', { className: 'flex flex-row text-xl mb-2', children: [R.jsx('p', { className: 'font-cocktail text-4xl -translate-y-2 text-primary drop-shadow-primary', children: 'Velo' }), '  is a general-purpose utility mod for  ', R.jsx('p', { className: 'font-cocktail text-3xl -translate-y-1.5 text-sky-500 drop-shadow-sky-500', children: 'SpeedRunners' }), '  made by ', R.jsx(r, { name: e[0].name, avatar: e[0].avatar, role: e[0].role, fallback: e[0].fallback }), ' and ', R.jsx(r, { name: e[1].name, avatar: e[1].avatar, role: e[1].role, fallback: e[1].fallback })] }), R.jsx('div', { className: 'flex flex-row justify-center items-center gap-10 mb-14', children: t.map((i, l) => R.jsx(o, { header: i.header, content: i.content }, l)) }), R.jsxs('h2', { className: 'flex flex-row text-xl mb-2', children: [R.jsx('p', { className: 'font-cocktail text-4xl -translate-y-2 text-primary drop-shadow-primary', children: 'Velo' }), '   obeys the following principles to ensure  ', R.jsx('p', { className: 'font-cocktail text-3xl -translate-y-1.5 text-green-500 drop-shadow-green-500', children: 'fair play' })] }), R.jsx('div', { className: 'h-full flex flex-row justify-center items-stretch gap-10', children: n.map((i, l) => R.jsx(o, { header: i.header, content: i.content }, l)) })] });
};
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sS = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
	Vm = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(' ');
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var uS = { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cS = f.forwardRef(({ color: e = 'currentColor', size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = '', children: i, iconNode: l, ...a }, s) => f.createElement('svg', { ref: s, ...uS, width: t, height: t, stroke: e, strokeWidth: r ? (Number(n) * 24) / Number(t) : n, className: Vm('lucide', o), ...a }, [...l.map(([u, c]) => f.createElement(u, c)), ...(Array.isArray(i) ? i : [i])]));
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eo = (e, t) => {
	const n = f.forwardRef(({ className: r, ...o }, i) => f.createElement(cS, { ref: i, iconNode: t, className: Vm(`lucide-${sS(e)}`, r), ...o }));
	return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dS = eo('ChevronsDown', [
	['path', { d: 'm7 6 5 5 5-5', key: '1lc07p' }],
	['path', { d: 'm7 13 5 5 5-5', key: '1d48rs' }],
]);
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fS = eo('Download', [
	['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
	['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
	['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
]);
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pS = eo('HardDriveDownload', [
	['path', { d: 'M12 2v8', key: '1q4o3n' }],
	['path', { d: 'm16 6-4 4-4-4', key: '6wukr' }],
	['rect', { width: '20', height: '8', x: '2', y: '14', rx: '2', key: 'w68u3i' }],
	['path', { d: 'M6 18h.01', key: 'uhywen' }],
	['path', { d: 'M10 18h.01', key: 'h775k' }],
]);
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hS = eo('Heart', [['path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z', key: 'c3ymky' }]]);
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wm = eo('LoaderCircle', [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]]);
/**
 * @license lucide-react v0.381.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Km = eo('X', [
		['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
		['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
	]),
	mS = () => R.jsx('div', { className: 'flex justify-center items-center h-20 bg-zinc-800 text-zinc-500', children: R.jsxs('p', { className: 'flex items-center', children: ['Website made with ', R.jsx(hS, { className: 'size-5 fill-current mx-1 hover:fill-red-500 hover:stroke-red-500 transition duration-300' }), ' by v4n'] }) }),
	Qm = f.createContext({ isScrolled: !1 }),
	vS = ({ children: e }) => {
		const [t, n] = f.useState(!1);
		return (
			f.useEffect(() => {
				const r = () => {
					window.scrollY === 0 ? n(!1) : n(!0);
				};
				return window.addEventListener('scroll', r), () => window.removeEventListener('scroll', r);
			}, []),
			R.jsx(Qm.Provider, { value: { isScrolled: t }, children: e })
		);
	},
	Ym = () => f.useContext(Qm),
	Gm = f.createContext({ data: null, loading: !0 }),
	gS = ({ children: e }) => {
		const [t, n] = f.useState(null),
			[r, o] = f.useState(!0);
		return (
			f.useEffect(() => {
				(async () => {
					try {
						const l = await (await fetch('velo/data.json')).json();
						n(l);
					} finally {
						o(!1);
					}
				})();
			}, []),
			R.jsx(Gm.Provider, { value: { data: t, loading: r }, children: e })
		);
	},
	Xm = () => f.useContext(Gm),
	yS = cm('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', { variants: { variant: { default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80', secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80', destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80', outline: 'text-foreground' } }, defaultVariants: { variant: 'default' } });
function wS({ className: e, variant: t, ...n }) {
	return R.jsx('div', { className: Ae(yS({ variant: t }), e), ...n });
}
const xS = Af.useId || (() => {});
let SS = 0;
function Ia(e) {
	const [t, n] = f.useState(xS());
	return (
		Nn(() => {
			e || n((r) => r ?? String(SS++));
		}, [e]),
		e || (t ? `radix-${t}` : '')
	);
}
const Ua = 'focusScope.autoFocusOnMount',
	Ba = 'focusScope.autoFocusOnUnmount',
	hf = { bubbles: !1, cancelable: !0 },
	ES = f.forwardRef((e, t) => {
		const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e,
			[a, s] = f.useState(null),
			u = Zt(o),
			c = Zt(i),
			d = f.useRef(null),
			p = tn(t, (v) => s(v)),
			y = f.useRef({
				paused: !1,
				pause() {
					this.paused = !0;
				},
				resume() {
					this.paused = !1;
				},
			}).current;
		f.useEffect(() => {
			if (r) {
				let h = function (_) {
						if (y.paused || !a) return;
						const x = _.target;
						a.contains(x) ? (d.current = x) : dn(d.current, { select: !0 });
					},
					g = function (_) {
						if (y.paused || !a) return;
						const x = _.relatedTarget;
						x !== null && (a.contains(x) || dn(d.current, { select: !0 }));
					},
					E = function (_) {
						if (document.activeElement === document.body) for (const P of _) P.removedNodes.length > 0 && dn(a);
					};
				var v = h,
					S = g,
					m = E;
				document.addEventListener('focusin', h), document.addEventListener('focusout', g);
				const k = new MutationObserver(E);
				return (
					a && k.observe(a, { childList: !0, subtree: !0 }),
					() => {
						document.removeEventListener('focusin', h), document.removeEventListener('focusout', g), k.disconnect();
					}
				);
			}
		}, [r, a, y.paused]),
			f.useEffect(() => {
				if (a) {
					vf.add(y);
					const v = document.activeElement;
					if (!a.contains(v)) {
						const m = new CustomEvent(Ua, hf);
						a.addEventListener(Ua, u), a.dispatchEvent(m), m.defaultPrevented || (CS(RS(Zm(a)), { select: !0 }), document.activeElement === v && dn(a));
					}
					return () => {
						a.removeEventListener(Ua, u),
							setTimeout(() => {
								const m = new CustomEvent(Ba, hf);
								a.addEventListener(Ba, c), a.dispatchEvent(m), m.defaultPrevented || dn(v ?? document.body, { select: !0 }), a.removeEventListener(Ba, c), vf.remove(y);
							}, 0);
					};
				}
			}, [a, u, c, y]);
		const w = f.useCallback(
			(v) => {
				if ((!n && !r) || y.paused) return;
				const S = v.key === 'Tab' && !v.altKey && !v.ctrlKey && !v.metaKey,
					m = document.activeElement;
				if (S && m) {
					const h = v.currentTarget,
						[g, E] = kS(h);
					g && E ? (!v.shiftKey && m === E ? (v.preventDefault(), n && dn(g, { select: !0 })) : v.shiftKey && m === g && (v.preventDefault(), n && dn(E, { select: !0 }))) : m === h && v.preventDefault();
				}
			},
			[n, r, y.paused]
		);
		return f.createElement(tt.div, le({ tabIndex: -1 }, l, { ref: p, onKeyDown: w }));
	});
function CS(e, { select: t = !1 } = {}) {
	const n = document.activeElement;
	for (const r of e) if ((dn(r, { select: t }), document.activeElement !== n)) return;
}
function kS(e) {
	const t = Zm(e),
		n = mf(t, e),
		r = mf(t.reverse(), e);
	return [n, r];
}
function Zm(e) {
	const t = [],
		n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (r) => {
				const o = r.tagName === 'INPUT' && r.type === 'hidden';
				return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
			},
		});
	for (; n.nextNode(); ) t.push(n.currentNode);
	return t;
}
function mf(e, t) {
	for (const n of e) if (!bS(n, { upTo: t })) return n;
}
function bS(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === 'hidden') return !0;
	for (; e; ) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === 'none') return !0;
		e = e.parentElement;
	}
	return !1;
}
function PS(e) {
	return e instanceof HTMLInputElement && 'select' in e;
}
function dn(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		const n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && PS(e) && t && e.select();
	}
}
const vf = $S();
function $S() {
	let e = [];
	return {
		add(t) {
			const n = e[0];
			t !== n && (n == null || n.pause()), (e = gf(e, t)), e.unshift(t);
		},
		remove(t) {
			var n;
			(e = gf(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
		},
	};
}
function gf(e, t) {
	const n = [...e],
		r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function RS(e) {
	return e.filter((t) => t.tagName !== 'A');
}
let Ha = 0;
function _S() {
	f.useEffect(() => {
		var e, t;
		const n = document.querySelectorAll('[data-radix-focus-guard]');
		return (
			document.body.insertAdjacentElement('afterbegin', (e = n[0]) !== null && e !== void 0 ? e : yf()),
			document.body.insertAdjacentElement('beforeend', (t = n[1]) !== null && t !== void 0 ? t : yf()),
			Ha++,
			() => {
				Ha === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach((r) => r.remove()), Ha--;
			}
		);
	}, []);
}
function yf() {
	const e = document.createElement('span');
	return e.setAttribute('data-radix-focus-guard', ''), (e.tabIndex = 0), (e.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none'), e;
}
var Ot = function () {
	return (
		(Ot =
			Object.assign ||
			function (t) {
				for (var n, r = 1, o = arguments.length; r < o; r++) {
					n = arguments[r];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
				}
				return t;
			}),
		Ot.apply(this, arguments)
	);
};
function Jm(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == 'function') for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
	return n;
}
function NS(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
	return e.concat(i || Array.prototype.slice.call(t));
}
var el = 'right-scroll-bar-position',
	tl = 'width-before-scroll-bar',
	TS = 'with-scroll-bars-hidden',
	LS = '--removed-body-scroll-bar-size';
function Va(e, t) {
	return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function DS(e, t) {
	var n = f.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(r) {
					var o = n.value;
					o !== r && ((n.value = r), n.callback(r, o));
				},
			},
		};
	})[0];
	return (n.callback = t), n.facade;
}
var OS = typeof window < 'u' ? f.useLayoutEffect : f.useEffect,
	wf = new WeakMap();
function MS(e, t) {
	var n = DS(null, function (r) {
		return e.forEach(function (o) {
			return Va(o, r);
		});
	});
	return (
		OS(
			function () {
				var r = wf.get(n);
				if (r) {
					var o = new Set(r),
						i = new Set(e),
						l = n.current;
					o.forEach(function (a) {
						i.has(a) || Va(a, null);
					}),
						i.forEach(function (a) {
							o.has(a) || Va(a, l);
						});
				}
				wf.set(n, e);
			},
			[e]
		),
		n
	);
}
function AS(e) {
	return e;
}
function jS(e, t) {
	t === void 0 && (t = AS);
	var n = [],
		r = !1,
		o = {
			read: function () {
				if (r) throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
				return n.length ? n[n.length - 1] : e;
			},
			useMedium: function (i) {
				var l = t(i, r);
				return (
					n.push(l),
					function () {
						n = n.filter(function (a) {
							return a !== l;
						});
					}
				);
			},
			assignSyncMedium: function (i) {
				for (r = !0; n.length; ) {
					var l = n;
					(n = []), l.forEach(i);
				}
				n = {
					push: function (a) {
						return i(a);
					},
					filter: function () {
						return n;
					},
				};
			},
			assignMedium: function (i) {
				r = !0;
				var l = [];
				if (n.length) {
					var a = n;
					(n = []), a.forEach(i), (l = n);
				}
				var s = function () {
						var c = l;
						(l = []), c.forEach(i);
					},
					u = function () {
						return Promise.resolve().then(s);
					};
				u(),
					(n = {
						push: function (c) {
							l.push(c), u();
						},
						filter: function (c) {
							return (l = l.filter(c)), n;
						},
					});
			},
		};
	return o;
}
function zS(e) {
	e === void 0 && (e = {});
	var t = jS(null);
	return (t.options = Ot({ async: !0, ssr: !1 }, e)), t;
}
var qm = function (e) {
	var t = e.sideCar,
		n = Jm(e, ['sideCar']);
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var r = t.read();
	if (!r) throw new Error('Sidecar medium not found');
	return f.createElement(r, Ot({}, n));
};
qm.isSideCarExport = !0;
function FS(e, t) {
	return e.useMedium(t), qm;
}
var ev = zS(),
	Wa = function () {},
	ea = f.forwardRef(function (e, t) {
		var n = f.useRef(null),
			r = f.useState({ onScrollCapture: Wa, onWheelCapture: Wa, onTouchMoveCapture: Wa }),
			o = r[0],
			i = r[1],
			l = e.forwardProps,
			a = e.children,
			s = e.className,
			u = e.removeScrollBar,
			c = e.enabled,
			d = e.shards,
			p = e.sideCar,
			y = e.noIsolation,
			w = e.inert,
			v = e.allowPinchZoom,
			S = e.as,
			m = S === void 0 ? 'div' : S,
			h = Jm(e, ['forwardProps', 'children', 'className', 'removeScrollBar', 'enabled', 'shards', 'sideCar', 'noIsolation', 'inert', 'allowPinchZoom', 'as']),
			g = p,
			E = MS([n, t]),
			k = Ot(Ot({}, h), o);
		return f.createElement(f.Fragment, null, c && f.createElement(g, { sideCar: ev, removeScrollBar: u, shards: d, noIsolation: y, inert: w, setCallbacks: i, allowPinchZoom: !!v, lockRef: n }), l ? f.cloneElement(f.Children.only(a), Ot(Ot({}, k), { ref: E })) : f.createElement(m, Ot({}, k, { className: s, ref: E }), a));
	});
ea.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ea.classNames = { fullWidth: tl, zeroRight: el };
var IS = function () {
	if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function US() {
	if (!document) return null;
	var e = document.createElement('style');
	e.type = 'text/css';
	var t = IS();
	return t && e.setAttribute('nonce', t), e;
}
function BS(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function HS(e) {
	var t = document.head || document.getElementsByTagName('head')[0];
	t.appendChild(e);
}
var VS = function () {
		var e = 0,
			t = null;
		return {
			add: function (n) {
				e == 0 && (t = US()) && (BS(t, n), HS(t)), e++;
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
			},
		};
	},
	WS = function () {
		var e = VS();
		return function (t, n) {
			f.useEffect(
				function () {
					return (
						e.add(t),
						function () {
							e.remove();
						}
					);
				},
				[t && n]
			);
		};
	},
	tv = function () {
		var e = WS(),
			t = function (n) {
				var r = n.styles,
					o = n.dynamic;
				return e(r, o), null;
			};
		return t;
	},
	KS = { left: 0, top: 0, right: 0, gap: 0 },
	Ka = function (e) {
		return parseInt(e || '', 10) || 0;
	},
	QS = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
		return [Ka(n), Ka(r), Ka(o)];
	},
	YS = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return KS;
		var t = QS(e),
			n = document.documentElement.clientWidth,
			r = window.innerWidth;
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
	},
	GS = tv(),
	Mr = 'data-scroll-locked',
	XS = function (e, t, n, r) {
		var o = e.left,
			i = e.top,
			l = e.right,
			a = e.gap;
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					TS,
					` {
   overflow: hidden `
				)
				.concat(
					r,
					`;
   padding-right: `
				)
				.concat(a, 'px ')
				.concat(
					r,
					`;
  }
  body[`
				)
				.concat(
					Mr,
					`] {
    overflow: hidden `
				)
				.concat(
					r,
					`;
    overscroll-behavior: contain;
    `
				)
				.concat(
					[
						t && 'position: relative '.concat(r, ';'),
						n === 'margin' &&
							`
    padding-left: `
								.concat(
									o,
									`px;
    padding-top: `
								)
								.concat(
									i,
									`px;
    padding-right: `
								)
								.concat(
									l,
									`px;
    margin-left:0;
    margin-top:0;
    margin-right: `
								)
								.concat(a, 'px ')
								.concat(
									r,
									`;
    `
								),
						n === 'padding' && 'padding-right: '.concat(a, 'px ').concat(r, ';'),
					]
						.filter(Boolean)
						.join(''),
					`
  }
  
  .`
				)
				.concat(
					el,
					` {
    right: `
				)
				.concat(a, 'px ')
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(
					tl,
					` {
    margin-right: `
				)
				.concat(a, 'px ')
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(el, ' .')
				.concat(
					el,
					` {
    right: 0 `
				)
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(tl, ' .')
				.concat(
					tl,
					` {
    margin-right: 0 `
				)
				.concat(
					r,
					`;
  }
  
  body[`
				)
				.concat(
					Mr,
					`] {
    `
				)
				.concat(LS, ': ')
				.concat(
					a,
					`px;
  }
`
				)
		);
	},
	xf = function () {
		var e = parseInt(document.body.getAttribute(Mr) || '0', 10);
		return isFinite(e) ? e : 0;
	},
	ZS = function () {
		f.useEffect(function () {
			return (
				document.body.setAttribute(Mr, (xf() + 1).toString()),
				function () {
					var e = xf() - 1;
					e <= 0 ? document.body.removeAttribute(Mr) : document.body.setAttribute(Mr, e.toString());
				}
			);
		}, []);
	},
	JS = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			r = e.gapMode,
			o = r === void 0 ? 'margin' : r;
		ZS();
		var i = f.useMemo(
			function () {
				return YS(o);
			},
			[o]
		);
		return f.createElement(GS, { styles: XS(i, !t, o, n ? '' : '!important') });
	},
	Zs = !1;
if (typeof window < 'u')
	try {
		var ji = Object.defineProperty({}, 'passive', {
			get: function () {
				return (Zs = !0), !0;
			},
		});
		window.addEventListener('test', ji, ji), window.removeEventListener('test', ji, ji);
	} catch {
		Zs = !1;
	}
var fr = Zs ? { passive: !1 } : !1,
	qS = function (e) {
		return e.tagName === 'TEXTAREA';
	},
	nv = function (e, t) {
		var n = window.getComputedStyle(e);
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !qS(e) && n[t] === 'visible');
	},
	eE = function (e) {
		return nv(e, 'overflowY');
	},
	tE = function (e) {
		return nv(e, 'overflowX');
	},
	Sf = function (e, t) {
		var n = t;
		do {
			typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host);
			var r = rv(e, n);
			if (r) {
				var o = ov(e, n),
					i = o[1],
					l = o[2];
				if (i > l) return !0;
			}
			n = n.parentNode;
		} while (n && n !== document.body);
		return !1;
	},
	nE = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			r = e.clientHeight;
		return [t, n, r];
	},
	rE = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			r = e.clientWidth;
		return [t, n, r];
	},
	rv = function (e, t) {
		return e === 'v' ? eE(t) : tE(t);
	},
	ov = function (e, t) {
		return e === 'v' ? nE(t) : rE(t);
	},
	oE = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1;
	},
	iE = function (e, t, n, r, o) {
		var i = oE(e, window.getComputedStyle(t).direction),
			l = i * r,
			a = n.target,
			s = t.contains(a),
			u = !1,
			c = l > 0,
			d = 0,
			p = 0;
		do {
			var y = ov(e, a),
				w = y[0],
				v = y[1],
				S = y[2],
				m = v - S - i * w;
			(w || m) && rv(e, a) && ((d += m), (p += w)), (a = a.parentNode);
		} while ((!s && a !== document.body) || (s && (t.contains(a) || t === a)));
		return ((c && (d === 0 || !o)) || (!c && (p === 0 || !o))) && (u = !0), u;
	},
	zi = function (e) {
		return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
	},
	Ef = function (e) {
		return [e.deltaX, e.deltaY];
	},
	Cf = function (e) {
		return e && 'current' in e ? e.current : e;
	},
	lE = function (e, t) {
		return e[0] === t[0] && e[1] === t[1];
	},
	aE = function (e) {
		return `
  .block-interactivity-`
			.concat(
				e,
				` {pointer-events: none;}
  .allow-interactivity-`
			)
			.concat(
				e,
				` {pointer-events: all;}
`
			);
	},
	sE = 0,
	pr = [];
function uE(e) {
	var t = f.useRef([]),
		n = f.useRef([0, 0]),
		r = f.useRef(),
		o = f.useState(sE++)[0],
		i = f.useState(function () {
			return tv();
		})[0],
		l = f.useRef(e);
	f.useEffect(
		function () {
			l.current = e;
		},
		[e]
	),
		f.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(o));
					var v = NS([e.lockRef.current], (e.shards || []).map(Cf), !0).filter(Boolean);
					return (
						v.forEach(function (S) {
							return S.classList.add('allow-interactivity-'.concat(o));
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(o)),
								v.forEach(function (S) {
									return S.classList.remove('allow-interactivity-'.concat(o));
								});
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards]
		);
	var a = f.useCallback(function (v, S) {
			if ('touches' in v && v.touches.length === 2) return !l.current.allowPinchZoom;
			var m = zi(v),
				h = n.current,
				g = 'deltaX' in v ? v.deltaX : h[0] - m[0],
				E = 'deltaY' in v ? v.deltaY : h[1] - m[1],
				k,
				_ = v.target,
				x = Math.abs(g) > Math.abs(E) ? 'h' : 'v';
			if ('touches' in v && x === 'h' && _.type === 'range') return !1;
			var P = Sf(x, _);
			if (!P) return !0;
			if ((P ? (k = x) : ((k = x === 'v' ? 'h' : 'v'), (P = Sf(x, _))), !P)) return !1;
			if ((!r.current && 'changedTouches' in v && (g || E) && (r.current = k), !k)) return !0;
			var O = r.current || k;
			return iE(O, S, v, O === 'h' ? g : E, !0);
		}, []),
		s = f.useCallback(function (v) {
			var S = v;
			if (!(!pr.length || pr[pr.length - 1] !== i)) {
				var m = 'deltaY' in S ? Ef(S) : zi(S),
					h = t.current.filter(function (k) {
						return k.name === S.type && k.target === S.target && lE(k.delta, m);
					})[0];
				if (h && h.should) {
					S.cancelable && S.preventDefault();
					return;
				}
				if (!h) {
					var g = (l.current.shards || [])
							.map(Cf)
							.filter(Boolean)
							.filter(function (k) {
								return k.contains(S.target);
							}),
						E = g.length > 0 ? a(S, g[0]) : !l.current.noIsolation;
					E && S.cancelable && S.preventDefault();
				}
			}
		}, []),
		u = f.useCallback(function (v, S, m, h) {
			var g = { name: v, delta: S, target: m, should: h };
			t.current.push(g),
				setTimeout(function () {
					t.current = t.current.filter(function (E) {
						return E !== g;
					});
				}, 1);
		}, []),
		c = f.useCallback(function (v) {
			(n.current = zi(v)), (r.current = void 0);
		}, []),
		d = f.useCallback(function (v) {
			u(v.type, Ef(v), v.target, a(v, e.lockRef.current));
		}, []),
		p = f.useCallback(function (v) {
			u(v.type, zi(v), v.target, a(v, e.lockRef.current));
		}, []);
	f.useEffect(function () {
		return (
			pr.push(i),
			e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: p }),
			document.addEventListener('wheel', s, fr),
			document.addEventListener('touchmove', s, fr),
			document.addEventListener('touchstart', c, fr),
			function () {
				(pr = pr.filter(function (v) {
					return v !== i;
				})),
					document.removeEventListener('wheel', s, fr),
					document.removeEventListener('touchmove', s, fr),
					document.removeEventListener('touchstart', c, fr);
			}
		);
	}, []);
	var y = e.removeScrollBar,
		w = e.inert;
	return f.createElement(f.Fragment, null, w ? f.createElement(i, { styles: aE(o) }) : null, y ? f.createElement(JS, { gapMode: 'margin' }) : null);
}
const cE = FS(ev, uE);
var iv = f.forwardRef(function (e, t) {
	return f.createElement(ea, Ot({}, e, { ref: t, sideCar: cE }));
});
iv.classNames = ea.classNames;
var dE = function (e) {
		if (typeof document > 'u') return null;
		var t = Array.isArray(e) ? e[0] : e;
		return t.ownerDocument.body;
	},
	hr = new WeakMap(),
	Fi = new WeakMap(),
	Ii = {},
	Qa = 0,
	lv = function (e) {
		return e && (e.host || lv(e.parentNode));
	},
	fE = function (e, t) {
		return t
			.map(function (n) {
				if (e.contains(n)) return n;
				var r = lv(n);
				return r && e.contains(r) ? r : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null);
			})
			.filter(function (n) {
				return !!n;
			});
	},
	pE = function (e, t, n, r) {
		var o = fE(t, Array.isArray(e) ? e : [e]);
		Ii[n] || (Ii[n] = new WeakMap());
		var i = Ii[n],
			l = [],
			a = new Set(),
			s = new Set(o),
			u = function (d) {
				!d || a.has(d) || (a.add(d), u(d.parentNode));
			};
		o.forEach(u);
		var c = function (d) {
			!d ||
				s.has(d) ||
				Array.prototype.forEach.call(d.children, function (p) {
					if (a.has(p)) c(p);
					else
						try {
							var y = p.getAttribute(r),
								w = y !== null && y !== 'false',
								v = (hr.get(p) || 0) + 1,
								S = (i.get(p) || 0) + 1;
							hr.set(p, v), i.set(p, S), l.push(p), v === 1 && w && Fi.set(p, !0), S === 1 && p.setAttribute(n, 'true'), w || p.setAttribute(r, 'true');
						} catch (m) {
							console.error('aria-hidden: cannot operate on ', p, m);
						}
				});
		};
		return (
			c(t),
			a.clear(),
			Qa++,
			function () {
				l.forEach(function (d) {
					var p = hr.get(d) - 1,
						y = i.get(d) - 1;
					hr.set(d, p), i.set(d, y), p || (Fi.has(d) || d.removeAttribute(r), Fi.delete(d)), y || d.removeAttribute(n);
				}),
					Qa--,
					Qa || ((hr = new WeakMap()), (hr = new WeakMap()), (Fi = new WeakMap()), (Ii = {}));
			}
		);
	},
	hE = function (e, t, n) {
		n === void 0 && (n = 'data-aria-hidden');
		var r = Array.from(Array.isArray(e) ? e : [e]),
			o = dE(e);
		return o
			? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))), pE(r, o, n, 'aria-hidden'))
			: function () {
					return null;
			  };
	};
const av = 'Dialog',
	[sv, GE] = Jl(av),
	[mE, Rt] = sv(av),
	vE = (e) => {
		const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e,
			a = f.useRef(null),
			s = f.useRef(null),
			[u = !1, c] = dm({ prop: r, defaultProp: o, onChange: i });
		return f.createElement(mE, { scope: t, triggerRef: a, contentRef: s, contentId: Ia(), titleId: Ia(), descriptionId: Ia(), open: u, onOpenChange: c, onOpenToggle: f.useCallback(() => c((d) => !d), [c]), modal: l }, n);
	},
	gE = 'DialogTrigger',
	yE = f.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			o = Rt(gE, n),
			i = tn(t, o.triggerRef);
		return f.createElement(tt.button, le({ type: 'button', 'aria-haspopup': 'dialog', 'aria-expanded': o.open, 'aria-controls': o.contentId, 'data-state': dc(o.open) }, r, { ref: i, onClick: De(e.onClick, o.onOpenToggle) }));
	}),
	uv = 'DialogPortal',
	[wE, cv] = sv(uv, { forceMount: void 0 }),
	xE = (e) => {
		const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
			i = Rt(uv, t);
		return f.createElement(
			wE,
			{ scope: t, forceMount: n },
			f.Children.map(r, (l) => f.createElement(ci, { present: n || i.open }, f.createElement(Nx, { asChild: !0, container: o }, l)))
		);
	},
	Js = 'DialogOverlay',
	SE = f.forwardRef((e, t) => {
		const n = cv(Js, e.__scopeDialog),
			{ forceMount: r = n.forceMount, ...o } = e,
			i = Rt(Js, e.__scopeDialog);
		return i.modal ? f.createElement(ci, { present: r || i.open }, f.createElement(EE, le({}, o, { ref: t }))) : null;
	}),
	EE = f.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			o = Rt(Js, n);
		return f.createElement(iv, { as: Zl, allowPinchZoom: !0, shards: [o.contentRef] }, f.createElement(tt.div, le({ 'data-state': dc(o.open) }, r, { ref: t, style: { pointerEvents: 'auto', ...r.style } })));
	}),
	ni = 'DialogContent',
	CE = f.forwardRef((e, t) => {
		const n = cv(ni, e.__scopeDialog),
			{ forceMount: r = n.forceMount, ...o } = e,
			i = Rt(ni, e.__scopeDialog);
		return f.createElement(ci, { present: r || i.open }, i.modal ? f.createElement(kE, le({}, o, { ref: t })) : f.createElement(bE, le({}, o, { ref: t })));
	}),
	kE = f.forwardRef((e, t) => {
		const n = Rt(ni, e.__scopeDialog),
			r = f.useRef(null),
			o = tn(t, n.contentRef, r);
		return (
			f.useEffect(() => {
				const i = r.current;
				if (i) return hE(i);
			}, []),
			f.createElement(
				dv,
				le({}, e, {
					ref: o,
					trapFocus: n.open,
					disableOutsidePointerEvents: !0,
					onCloseAutoFocus: De(e.onCloseAutoFocus, (i) => {
						var l;
						i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
					}),
					onPointerDownOutside: De(e.onPointerDownOutside, (i) => {
						const l = i.detail.originalEvent,
							a = l.button === 0 && l.ctrlKey === !0;
						(l.button === 2 || a) && i.preventDefault();
					}),
					onFocusOutside: De(e.onFocusOutside, (i) => i.preventDefault()),
				})
			)
		);
	}),
	bE = f.forwardRef((e, t) => {
		const n = Rt(ni, e.__scopeDialog),
			r = f.useRef(!1),
			o = f.useRef(!1);
		return f.createElement(
			dv,
			le({}, e, {
				ref: t,
				trapFocus: !1,
				disableOutsidePointerEvents: !1,
				onCloseAutoFocus: (i) => {
					var l;
					if (((l = e.onCloseAutoFocus) === null || l === void 0 || l.call(e, i), !i.defaultPrevented)) {
						var a;
						r.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus(), i.preventDefault();
					}
					(r.current = !1), (o.current = !1);
				},
				onInteractOutside: (i) => {
					var l, a;
					(l = e.onInteractOutside) === null || l === void 0 || l.call(e, i), i.defaultPrevented || ((r.current = !0), i.detail.originalEvent.type === 'pointerdown' && (o.current = !0));
					const s = i.target;
					((a = n.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === 'focusin' && o.current && i.preventDefault();
				},
			})
		);
	}),
	dv = f.forwardRef((e, t) => {
		const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e,
			a = Rt(ni, n),
			s = f.useRef(null),
			u = tn(t, s);
		return _S(), f.createElement(f.Fragment, null, f.createElement(ES, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: i }, f.createElement($m, le({ role: 'dialog', id: a.contentId, 'aria-describedby': a.descriptionId, 'aria-labelledby': a.titleId, 'data-state': dc(a.open) }, l, { ref: u, onDismiss: () => a.onOpenChange(!1) }))), !1);
	}),
	PE = 'DialogTitle',
	$E = f.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			o = Rt(PE, n);
		return f.createElement(tt.h2, le({ id: o.titleId }, r, { ref: t }));
	}),
	RE = 'DialogDescription',
	_E = f.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			o = Rt(RE, n);
		return f.createElement(tt.p, le({ id: o.descriptionId }, r, { ref: t }));
	}),
	NE = 'DialogClose',
	TE = f.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			o = Rt(NE, n);
		return f.createElement(tt.button, le({ type: 'button' }, r, { ref: t, onClick: De(e.onClick, () => o.onOpenChange(!1)) }));
	});
function dc(e) {
	return e ? 'open' : 'closed';
}
const LE = vE,
	DE = yE,
	OE = xE,
	fv = SE,
	pv = CE,
	hv = $E,
	mv = _E,
	ME = TE,
	AE = LE,
	jE = DE,
	zE = OE,
	vv = f.forwardRef(({ className: e, ...t }, n) => R.jsx(fv, { ref: n, className: Ae('fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', e), ...t }));
vv.displayName = fv.displayName;
const gv = f.forwardRef(({ className: e, children: t, ...n }, r) => R.jsxs(zE, { children: [R.jsx(vv, {}), R.jsxs(pv, { ref: r, className: Ae('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg', e), ...n, children: [t, R.jsxs(ME, { className: 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground', children: [R.jsx(Km, { className: 'h-4 w-4' }), R.jsx('span', { className: 'sr-only', children: 'Close' })] })] })] }));
gv.displayName = pv.displayName;
const yv = ({ className: e, ...t }) => R.jsx('div', { className: Ae('flex flex-col space-y-1.5 text-center sm:text-left', e), ...t });
yv.displayName = 'DialogHeader';
const FE = f.forwardRef(({ className: e, ...t }, n) => R.jsx(hv, { ref: n, className: Ae('text-lg font-semibold leading-none tracking-tight', e), ...t }));
FE.displayName = hv.displayName;
const IE = f.forwardRef(({ className: e, ...t }, n) => R.jsx(mv, { ref: n, className: Ae('text-sm text-muted-foreground', e), ...t }));
IE.displayName = mv.displayName;
const UE = () => {
		const { data: e, loading: t } = Xm(),
			{ isScrolled: n } = Ym();
		return R.jsxs('div', {
			className: 'flex justify-center items-center h-screen',
			children: [
				R.jsx('div', {
					className: "lg:w-3/12 w-full h-full flex flex-col justify-center items-center relative lg:after:content-[''] lg:after:absolute lg:after:bg-background lg:after:top-0 lg:after:bottom-0 lg:after:right-0 lg:after:w-screen lg:after:[transform:skew(15deg)_translateX(85px)] z-10",
					children: R.jsxs('div', {
						className: 'relative flex flex-col z-10 lg:translate-x-10 translate-x-0 items-center h-full justify-center',
						children: [
							R.jsxs('div', { className: 'flex flex-col justify-center items-center gap-3', children: [R.jsx('div', { className: 'text-9xl font-cocktail text-primary drop-shadow-primary', children: 'Velo' }), R.jsxs('div', { className: 'flex flex-col items-center text-center text-3xl', children: [R.jsx('div', { children: 'Supercharge your' }), R.jsxs('div', { className: 'flex flex-row', children: [R.jsx('img', { src: 'img/SRLogo.webp', className: 'w-36 mr-1' }), ' experience!'] })] }), R.jsxs('div', { className: 'flex flex-col items-center gap-3', children: [R.jsxs('div', { className: 'flex flex-row items-center gap-3 font-roboto-mono', children: [R.jsx('a', { href: `velo/${e == null ? void 0 : e.fileName}`, download: !0, className: t ? 'pointer-events-none cursor-default' : 'pointer-events-auto cursor-pointer', children: R.jsxs(Qn, { variant: 'ringHover', className: 'text-lg font-extrabold', disabled: t, children: [R.jsx(fS, { className: 'size-5 mr-2' }), 'DOWNLOAD VELO ', t ? R.jsx(Wm, { className: 'mx-5 animate-spin' }) : `v${e == null ? void 0 : e.versionNumber}`] }) }), R.jsxs(AE, { children: [R.jsx(jE, { asChild: !0, children: R.jsx(Qn, { variant: 'secondary', className: 'text-lg font-extrabold', children: R.jsx(pS, {}) }) }), R.jsxs(gv, { children: [R.jsx(yv, { children: 'Installation Instructions' }), R.jsxs('ol', { type: '1', className: 'list-decimal pl-5', children: [R.jsx('li', { children: 'Open Steam, right click "SpeedRunners" in your games list, hover over "Manage" and click on "Browse local files".' }), R.jsx('li', { children: `Open the Velo.zip file, select all files and folders and drag them into the game's installation directory. When asked, just click "Replace the files in the destination".` }), R.jsx('li', { children: 'After that, you can launch your game from Steam like normal.' })] })] })] })] }), R.jsx(ec, { to: '/leaderboards', className: 'w-full', children: R.jsxs(Qn, { variant: 'outline', className: 'text-lg w-full border-2', children: ['View the leaderboards', R.jsx(wS, { variant: 'default', className: 'ml-1', children: 'WIP' })] }) })] })] }),
							R.jsxs('div', {
								className: `${n ? 'opacity-0 cursor-default' : 'opacity-100 cursor-pointer'} transition-opacity ease-in-out delay-150 duration-300 z-10 bottom-2 absolute select-none flex flex-col items-center font-cocktail text-3xl`,
								onClick: () => {
									n || window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
								},
								children: ['Read more! ', R.jsx(dS, { className: 'animate-bounce mt-1' })],
							}),
						],
					}),
				}),
				R.jsx('div', { className: "lg:w-5/6 w-0 relative h-full before:content-[' '] before:[transform:skew(15deg)] before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 fade-to-black", children: R.jsx('video', { src: 'video/broll.webm', autoPlay: !0, loop: !0, muted: !0, className: 'w-full h-full [object-fit:cover]' }) }),
			],
		});
	},
	BE = () => {
		const [e, t] = f.useState(!1),
			{ isScrolled: n } = Ym(),
			{ data: r, loading: o } = Xm(),
			[i, l] = f.useState(localStorage.getItem('bannerVersion') || '-1'),
			a = (s) => {
				localStorage.setItem('bannerVersion', s), l(s);
			};
		return (
			f.useEffect(() => {
				!r || !i || (r.bannerVersion > parseInt(i) ? t(!n) : t(!1));
			}, [n, r == null ? void 0 : r.bannerVersion, i, r]),
			R.jsxs('div', {
				className: `${e ? '' : '-translate-y-full opacity-0'} danger-strip fixed py-[2px] top-0 w-full z-50 text-center flex flex-row justify-center transition ease-in duration-300`,
				children: [
					R.jsxs('p', { className: 'font-roboto-mono font-bold text-primary-foreground flex flex-row items-center', children: ['New Version Is Out -> ', o ? R.jsx(Wm, { className: 'ml-10 animate-spin' }) : `v${r == null ? void 0 : r.versionNumber}`] }),
					R.jsx('div', {
						className: 'absolute right-2 top-0 cursor-pointer w-10 h-full flex justify-center items-center text-primary-foreground opacity-70',
						onClick: () => {
							a(`${r == null ? void 0 : r.bannerVersion}`);
						},
						children: R.jsx(Km, { strokeWidth: 4 }),
					}),
				],
			})
		);
	},
	HE = () => R.jsx(vS, { children: R.jsxs(gS, { children: [R.jsx(BE, {}), R.jsx(UE, {}), R.jsxs('div', { className: 'flex flex-col gap-20 py-20 px-10 justify-center items-center', children: [R.jsx(aS, {}), R.jsx(m1, {})] }), R.jsx(mS, {})] }) }),
	VE = hw([
		{ path: '/velo-website', element: R.jsx(HE, {}), errorElement: R.jsx(p1, {}) },
		{ path: '/velo-website/leaderboards', element: R.jsx(h1, {}) },
	]);
Ya.createRoot(document.getElementById('root')).render(R.jsx(Cw, { router: VE }));
