(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Button
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Button(param) {
    let { children, variant = "default", fullWidth = false, className = "", ...props } = param;
    const getVariantClasses = ()=>{
        switch(variant){
            case "danger":
                return "bg-cancel hover:bg-background text-background hover:text-cancel border border-transparent hover:border-cancel";
            case "secondary":
                return "bg-background hover:bg-foreground text-foreground hover:text-background border border-foreground hover:border-transparent";
            case "default":
            default:
                return "bg-foreground hover:bg-background text-background hover:text-foreground border border-transparent hover:border-foreground";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "".concat(getVariantClasses(), " ").concat(fullWidth ? "w-full" : "", " rounded-default font-medium transition-colors duration-200 focus:outline-none cursor-pointer px-4 py-2 text-sm ").concat(className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Navigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Navigation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MenuItem(param) {
    let { href, children, variant = "default", onClick, className = "" } = param;
    const getVariantClasses = ()=>{
        switch(variant){
            case "primary":
                return "bg-foreground hover:bg-foreground text-foreground hover:text-foreground px-4 py-2 rounded-default text-sm font-medium transition-colors duration-200";
            case "mobile":
                return "text-foreground hover:text-foreground text-lg font-medium py-3 border-b border-muted";
            case "default":
            default:
                return "bg-muted hover:bg-muted text-foreground px-4 py-2 rounded-default text-sm font-medium transition-colors duration-200";
        }
    };
    const combinedClassName = "".concat(getVariantClasses(), " ").concat(className).trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: combinedClassName,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = MenuItem;
// Special variant for mobile profile/auth buttons
function MobileAuthMenuItem(param) {
    let { href, children, variant = "default", onClick, className = "" } = param;
    const getVariantClasses = ()=>{
        switch(variant){
            case "primary":
                return "block w-full text-center bg-muted hover:bg-foreground text-foreground hover:text-background px-4 py-3 rounded-default text-lg font-medium transition-colors duration-200";
            case "default":
            default:
                return "block w-full text-center bg-muted hover:bg-foreground text-foreground hover:text-background px-4 py-3 rounded-default text-lg font-medium transition-colors duration-200";
        }
    };
    const combinedClassName = "".concat(getVariantClasses(), " ").concat(className).trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: combinedClassName,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c1 = MobileAuthMenuItem;
function Navigation() {
    _s();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-background shadow-default sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center space-x-2 text-xl font-bold text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/Other/Logo.png",
                                            alt: "Build Order Guide Logo",
                                            width: 32,
                                            height: 32,
                                            className: "flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "BUILD ORDER GUIDE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Builds"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/uptime",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Uptime"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/builder",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Builder"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/profile",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: toggleMobileMenu,
                                    "aria-label": "Toggle menu",
                                    children: isMobileMenuOpen ? // X icon
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 145,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, this) : // Hamburger icon
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 160,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-4 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: closeMobileMenu,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "Builds"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/builder",
                            onClick: closeMobileMenu,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "Builder"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/uptime",
                            onClick: closeMobileMenu,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "Uptime"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            onClick: closeMobileMenu,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/profile",
                            onClick: closeMobileMenu,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 195,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 194,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            onClick: closeMobileMenu,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 199,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 198,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Navigation, "0xaBEdx0N9sW0P9AYNZNjXNPNvU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c2 = Navigation;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MenuItem");
__turbopack_context__.k.register(_c1, "MobileAuthMenuItem");
__turbopack_context__.k.register(_c2, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/villagerCalculator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateVillagerCount": ()=>calculateVillagerCount,
    "getFeudalVillagerCount": ()=>getFeudalVillagerCount,
    "getVillagerDifference": ()=>getVillagerDifference,
    "hasAgeTransition": ()=>hasAgeTransition
});
function getTotalVillagersFromResources(resources) {
    return resources.food + resources.wood + resources.gold + resources.stone + resources.build;
}
function findLastStepBeforeAgeUp(steps, targetAge) {
    let lastStepBeforeAgeUp = null;
    for (const step of steps){
        if (step.type === "ageUp" && step.age === targetAge) {
            break;
        }
        // Keep track of the last step that has villager allocations
        if (step.resources && getTotalVillagersFromResources(step.resources) > 0) {
            lastStepBeforeAgeUp = step;
        }
    }
    return lastStepBeforeAgeUp;
}
function getFeudalVillagerCount(build) {
    if (!build.build || build.build.length === 0) {
        return "?";
    }
    const lastStep = findLastStepBeforeAgeUp(build.build, "feudalAge");
    if (!lastStep) {
        return "?";
    }
    const count = getTotalVillagersFromResources(lastStep.resources);
    return (count + 1).toString(); // +1 for the scout
}
function hasAgeTransition(build, age) {
    if (!build.build) {
        return false;
    }
    return build.build.some((step)=>step.type === "ageUp" && step.age === age);
}
function getVillagerDifference(build, currentAge) {
    if (!build.build) {
        return null;
    }
    // Check if the build actually reaches the requested age
    const targetAge = currentAge === "castle" ? "castleAge" : "imperialAge";
    if (!hasAgeTransition(build, targetAge)) {
        return null; // Don't show differences for ages not reached
    }
    let currentCount;
    let previousCount;
    if (currentAge === "castle") {
        // For castle, we need the count before castle age up
        const lastStepBeforeCastle = findLastStepBeforeAgeUp(build.build || [], "castleAge");
        currentCount = lastStepBeforeCastle ? getTotalVillagersFromResources(lastStepBeforeCastle.resources) : null;
        // Previous count is before feudal age up (without +1 scout for comparison)
        const lastStepBeforeFeudal = findLastStepBeforeAgeUp(build.build || [], "feudalAge");
        previousCount = lastStepBeforeFeudal ? getTotalVillagersFromResources(lastStepBeforeFeudal.resources) : null;
    } else {
        // Imperial age - only show if we also have castle age
        if (!hasAgeTransition(build, "castleAge")) {
            return null; // Can't show imperial difference without castle
        }
        const lastStepBeforeImperial = findLastStepBeforeAgeUp(build.build || [], "imperialAge");
        currentCount = lastStepBeforeImperial ? getTotalVillagersFromResources(lastStepBeforeImperial.resources) : null;
        const lastStepBeforeCastle = findLastStepBeforeAgeUp(build.build || [], "castleAge");
        previousCount = lastStepBeforeCastle ? getTotalVillagersFromResources(lastStepBeforeCastle.resources) : null;
    }
    if (currentCount !== null && previousCount !== null) {
        const diff = currentCount - previousCount;
        if (diff >= 0 && diff <= 5) {
            return "+".concat(diff);
        }
        return null; // Don't show badge for large differences
    }
    return null;
}
function calculateVillagerCount(_checkpoints, _targetType, _fallbackType) {
    return null; // Legacy format no longer supported
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/VillagerCounts.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$villagerCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/villagerCalculator.ts [app-client] (ecmascript)");
;
;
;
function VillagerCounts(param) {
    let { build } = param;
    // Calculate all values upfront
    const feudalCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$villagerCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeudalVillagerCount"])(build);
    const castleDifference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$villagerCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVillagerDifference"])(build, "castle");
    const showCastle = castleDifference !== null;
    const imperialDifference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$villagerCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVillagerDifference"])(build, "imperial");
    const showImperial = imperialDifference !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center flex-wrap gap-2 mb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2 bg-muted px-2 py-1 rounded-default",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/Ages/feudal_age_de.png",
                        alt: "Feudal Age Villagers",
                        width: 20,
                        height: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/VillagerCounts.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-foreground",
                        children: feudalCount
                    }, void 0, false, {
                        fileName: "[project]/src/components/VillagerCounts.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VillagerCounts.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            showCastle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2 bg-muted px-2 py-1 rounded-default",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/Ages/castle_age_de.png",
                        alt: "Castle Age Additional Villagers",
                        width: 20,
                        height: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/VillagerCounts.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-foreground",
                        children: castleDifference
                    }, void 0, false, {
                        fileName: "[project]/src/components/VillagerCounts.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VillagerCounts.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            showImperial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2 bg-muted px-2 py-1 rounded-default",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/Ages/imperial_age_de.png",
                        alt: "Imperial Age Additional Villagers",
                        width: 20,
                        height: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/VillagerCounts.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-foreground",
                        children: imperialDifference
                    }, void 0, false, {
                        fileName: "[project]/src/components/VillagerCounts.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VillagerCounts.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VillagerCounts.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = VillagerCounts;
const __TURBOPACK__default__export__ = VillagerCounts;
var _c;
__turbopack_context__.k.register(_c, "VillagerCounts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Rating.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Rating
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Rating(param) {
    let { rating, size = "medium" } = param;
    const sizeClasses = {
        small: "w-5 h-5",
        medium: "w-6 h-6",
        large: "w-7 h-7"
    };
    const starSize = sizeClasses[size];
    const actualRating = rating || 0;
    const hasNoRating = !rating;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "".concat(starSize, " ").concat(hasNoRating ? "text-muted" : star <= actualRating ? "text-foreground" : "text-muted"),
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Rating.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, star, false, {
                fileName: "[project]/src/components/Rating.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Rating.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Rating;
var _c;
__turbopack_context__.k.register(_c, "Rating");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/imageUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAgeImagePath": ()=>getAgeImagePath,
    "getCivImagePath": ()=>getCivImagePath,
    "getDifficultyImagePath": ()=>getDifficultyImagePath,
    "getDifficultyLabel": ()=>getDifficultyLabel,
    "getResourceImagePath": ()=>getResourceImagePath
});
function getCivImagePath(civName) {
    return "/images/Civs/".concat(civName.toLowerCase(), ".png");
}
function getDifficultyImagePath(difficulty) {
    const difficultyMap = {
        // Legacy string format
        Beginner: "/images/Medals/Bronze.png",
        Intermediate: "/images/Medals/Silver.png",
        Advanced: "/images/Medals/Gold.png",
        // New numbered format
        "1": "/images/Medals/Bronze.png",
        "2": "/images/Medals/Silver.png",
        "3": "/images/Medals/Gold.png"
    };
    return difficultyMap[difficulty.toString()] || "/images/Medals/Bronze.png";
}
function getDifficultyLabel(difficulty) {
    const difficultyLabelMap = {
        // Legacy string format
        Beginner: "Beginner",
        Intermediate: "Intermediate",
        Advanced: "Advanced",
        // New numbered format
        "1": "Beginner",
        "2": "Intermediate",
        "3": "Advanced"
    };
    return difficultyLabelMap[difficulty.toString()] || "Beginner";
}
function getAgeImagePath(age) {
    const ageMap = {
        dark_age: "/images/Ages/dark_age_de.png",
        feudal_age: "/images/Ages/feudal_age_de.png",
        castle_age: "/images/Ages/castle_age_de.png",
        imperial_age: "/images/Ages/imperial_age_de.png"
    };
    return ageMap[age] || "/images/Ages/dark_age_de.png";
}
function getResourceImagePath(resource) {
    const resourceMap = {
        food: "/images/Res/Aoe2de_food.png",
        wood: "/images/Res/Aoe2de_wood.png",
        gold: "/images/Res/Aoe2de_gold.png",
        stone: "/images/Res/Aoe2de_stone.png",
        builders: "/images/Res/Aoe2de_builder.png",
        build: "/images/Res/Aoe2de_builder.png",
        fishingShips: "/images/Res/Aoe2de_ship.png"
    };
    return resourceMap[resource] || "";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CivIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CivIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/imageUtils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function CivIcon(param) {
    let { civilization, size = "md", showName = false } = param;
    const iconClasses = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-6 h-6";
    const textClasses = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
    const imageSize = size === "sm" ? 16 : size === "lg" ? 32 : 24;
    const civImagePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCivImagePath"])(civilization === "Generic" ? "generic" : civilization);
    if (showName) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-muted flex items-center justify-center p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: civImagePath,
                        alt: civilization,
                        width: imageSize,
                        height: imageSize,
                        className: iconClasses,
                        onError: (e)=>{
                            e.currentTarget.src = "/images/Civs/generic.png";
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CivIcon.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CivIcon.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-foreground ".concat(textClasses),
                    children: civilization
                }, void 0, false, {
                    fileName: "[project]/src/components/CivIcon.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CivIcon.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-full bg-muted flex items-center justify-center p-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: civImagePath,
            alt: civilization,
            width: imageSize,
            height: imageSize,
            className: iconClasses,
            onError: (e)=>{
                e.currentTarget.src = "/images/Civs/generic.png";
            }
        }, void 0, false, {
            fileName: "[project]/src/components/CivIcon.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CivIcon.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = CivIcon;
var _c;
__turbopack_context__.k.register(_c, "CivIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/attributes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AVAILABLE_ATTRIBUTES": ()=>AVAILABLE_ATTRIBUTES,
    "getAttributeDropdownOptions": ()=>getAttributeDropdownOptions,
    "getAttributeOptions": ()=>getAttributeOptions,
    "translateAttribute": ()=>translateAttribute,
    "translateAttributes": ()=>translateAttributes
});
const AVAILABLE_ATTRIBUTES = [
    "drush",
    "fastFeudal",
    "fastCastle",
    "fastImperial",
    "water",
    "meme",
    "arena"
];
// Translation mapping for camelCase attribute values
const ATTRIBUTE_VALUE_MAP = {
    drush: "drush",
    fastfeudal: "fastFeudal",
    fastcastle: "fastCastle",
    fastimperial: "fastImperial",
    water: "water",
    waterhybrid: "water",
    meme: "meme",
    arena: "arena"
};
function toReadableLabel(attribute) {
    return attribute.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/(^|\s)([a-z])/g, (match)=>match.toUpperCase());
}
function normalizeAttributeValue(attribute) {
    if (!attribute) return null;
    if (AVAILABLE_ATTRIBUTES.includes(attribute)) {
        return attribute;
    }
    const sanitized = attribute.toLowerCase().replace(/[^a-z]/g, "");
    return ATTRIBUTE_VALUE_MAP[sanitized] || null;
}
function translateAttribute(attribute) {
    const normalized = normalizeAttributeValue(attribute);
    if (normalized) {
        return toReadableLabel(normalized);
    }
    return toReadableLabel(attribute);
}
function translateAttributes(attributes) {
    if (!attributes || !Array.isArray(attributes)) return [];
    return attributes.filter((attr)=>attr && typeof attr === 'string').map(translateAttribute).filter((translatedAttr)=>translatedAttr !== '');
}
function getAttributeOptions() {
    return AVAILABLE_ATTRIBUTES.map((attr)=>({
            value: attr,
            label: toReadableLabel(attr)
        }));
}
function getAttributeDropdownOptions() {
    return [
        {
            value: "All",
            label: "All"
        },
        ...AVAILABLE_ATTRIBUTES.map((attr)=>({
                value: attr,
                label: toReadableLabel(attr)
            }))
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AttributeBadges.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AttributeBadges
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attributes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/attributes.ts [app-client] (ecmascript)");
"use client";
;
;
function AttributeBadges(param) {
    let { attributes, maxVisible } = param;
    if (!attributes || attributes.length === 0) {
        return null;
    }
    // Translate attributes from camelCase values to readable text
    const translatedAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attributes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAttributes"])(attributes);
    const visibleAttributes = maxVisible ? translatedAttributes.slice(0, maxVisible) : translatedAttributes;
    const remainingCount = maxVisible && translatedAttributes.length > maxVisible ? translatedAttributes.length - maxVisible : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center flex-wrap gap-2",
        children: [
            visibleAttributes.map((attr, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-muted text-foreground rounded-default font-medium text-sm px-2 py-1",
                    children: attr
                }, index, false, {
                    fileName: "[project]/src/components/AttributeBadges.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)),
            remainingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-muted text-foreground rounded-default font-medium text-sm px-2 py-1",
                children: [
                    "+",
                    remainingCount
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AttributeBadges.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AttributeBadges.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = AttributeBadges;
var _c;
__turbopack_context__.k.register(_c, "AttributeBadges");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LoadingSpinner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LoadingSpinner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function LoadingSpinner(param) {
    let { label } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"
            }, void 0, false, {
                fileName: "[project]/src/components/LoadingSpinner.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-foreground mt-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/LoadingSpinner.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LoadingSpinner.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/EmptyState.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>EmptyState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function EmptyState(param) {
    let { text } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-12 px-4 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/Other/BuildImagePlaceholder.png",
                    alt: "Empty state placeholder",
                    width: 120,
                    height: 120,
                    className: "w-30 h-30 object-contain opacity-60"
                }, void 0, false, {
                    fileName: "[project]/src/components/EmptyState.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyState.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-foreground text-lg font-medium max-w-md",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyState.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EmptyState.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Header(param) {
    let { text, subtitle } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 text-pretty",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-foreground text-sm sm:text-base",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/DifficultyBadge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>DifficultyBadge
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/imageUtils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function DifficultyBadge(param) {
    let { difficulty } = param;
    if (!difficulty && difficulty !== 0) {
        return null;
    }
    const difficultyLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficultyLabel"])(difficulty);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2 bg-muted rounded-default px-2 py-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficultyImagePath"])(difficulty),
                alt: "".concat(difficultyLabel, " difficulty"),
                width: 20,
                height: 20,
                className: "flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/DifficultyBadge.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-foreground",
                children: difficultyLabel
            }, void 0, false, {
                fileName: "[project]/src/components/DifficultyBadge.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DifficultyBadge.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = DifficultyBadge;
var _c;
__turbopack_context__.k.register(_c, "DifficultyBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/taskUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RESOURCE_KEYS": ()=>RESOURCE_KEYS,
    "createEmptyResourceSnapshot": ()=>createEmptyResourceSnapshot,
    "normalizeTaskIdentifier": ()=>normalizeTaskIdentifier,
    "taskToResource": ()=>taskToResource
});
const FOOD_TASKS = new Set([
    "sheep",
    "boar",
    "deer",
    "chicken",
    "berries",
    "farms",
    "shorefish",
    "foodundertc"
]);
const WOOD_TASKS = new Set([
    "wood",
    "stragglertree",
    "lumber",
    "lumbercamp"
]);
const GOLD_TASKS = new Set([
    "gold",
    "fox",
    "mine",
    "miningcamp"
]);
const STONE_TASKS = new Set([
    "stone"
]);
const RESOURCE_KEYS = [
    "food",
    "wood",
    "gold",
    "stone",
    "build"
];
function createEmptyResourceSnapshot() {
    return {
        food: 0,
        wood: 0,
        gold: 0,
        stone: 0,
        build: 0
    };
}
function normalizeTaskIdentifier(task) {
    return (task || "").toLowerCase().replace(/[^a-z]/g, "");
}
function taskToResource(task) {
    const normalized = normalizeTaskIdentifier(task);
    if (FOOD_TASKS.has(normalized)) {
        return "food";
    }
    if (WOOD_TASKS.has(normalized)) {
        return "wood";
    }
    if (GOLD_TASKS.has(normalized)) {
        return "gold";
    }
    if (STONE_TASKS.has(normalized)) {
        return "stone";
    }
    if (normalized === "build" || normalized === "forward") {
        return "build";
    }
    // Default to food when we cannot determine the resource explicitly
    return "food";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/buildValidation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateAndThrow": ()=>validateAndThrow,
    "validateBuildOrder": ()=>validateBuildOrder
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/taskUtils.ts [app-client] (ecmascript)");
;
function splitIntoAlternativePaths(steps) {
    const firstDecisionIndex = steps.findIndex((step)=>step.type === "decision");
    const indexedSteps = steps.map((step, index)=>({
            step,
            index
        }));
    if (firstDecisionIndex === -1) {
        return [
            indexedSteps
        ];
    }
    const commonSteps = indexedSteps.slice(0, firstDecisionIndex);
    const paths = [];
    let currentPath = [];
    for(let i = firstDecisionIndex; i < indexedSteps.length; i++){
        const entry = indexedSteps[i];
        if (entry.step.type === "decision") {
            if (currentPath.length > 0) {
                paths.push([
                    ...commonSteps,
                    ...currentPath
                ]);
                currentPath = [];
            }
            continue;
        }
        currentPath.push(entry);
    }
    if (currentPath.length > 0) {
        paths.push([
            ...commonSteps,
            ...currentPath
        ]);
    }
    if (paths.length === 0) {
        paths.push([
            ...commonSteps
        ]);
    }
    return paths;
}
function getAgeDisplayName(age) {
    switch(age){
        case "feudalAge":
            return "Feudal Age";
        case "castleAge":
            return "Castle Age";
        case "imperialAge":
            return "Imperial Age";
        default:
            return "Unknown Age";
    }
}
function validateBuildOrder(steps, civilization) {
    const errors = [];
    const errorSignatures = new Set();
    const addError = (error)=>{
        var _error_stepIndex;
        const signature = "".concat((_error_stepIndex = error.stepIndex) !== null && _error_stepIndex !== void 0 ? _error_stepIndex : -1, "|").concat(error.message);
        if (errorSignatures.has(signature)) return;
        errorSignatures.add(signature);
        errors.push(error);
    };
    const alternativePaths = splitIntoAlternativePaths(steps);
    // Check for duplicate technology research within each possible path
    for (const path of alternativePaths){
        const researchedTechs = new Map();
        for (const { step, index } of path){
            if (step.type === "research" && step.tech) {
                for (const tech of step.tech){
                    if (researchedTechs.has(tech)) {
                        const firstIndex = researchedTechs.get(tech);
                        addError({
                            message: 'Technology "'.concat(tech, '" is researched multiple times in the same path (steps ').concat(firstIndex + 1, " and ").concat(index + 1, "). Each technology can only be researched once per path."),
                            stepIndex: index,
                            severity: "error"
                        });
                    } else {
                        researchedTechs.set(tech, index);
                    }
                }
            }
        }
    }
    // Check for empty custom or decision steps
    for(let i = 0; i < steps.length; i++){
        const step = steps[i];
        if (step.type === "custom" || step.type === "decision") {
            if (!step.text || step.text.trim() === "") {
                addError({
                    message: "Step ".concat(i + 1, ": Empty custom or decision step."),
                    stepIndex: i,
                    severity: "error"
                });
            }
        }
    }
    // Check age-related rules within each possible path
    for (const path of alternativePaths){
        const ageUps = new Map();
        const newAgeIndices = new Map();
        for (const { step, index } of path){
            if (step.type === "ageUp") {
                if (ageUps.has(step.age)) {
                    const firstIndex = ageUps.get(step.age);
                    const ageName = getAgeDisplayName(step.age);
                    addError({
                        message: "".concat(ageName, " is researched multiple times in the same path (steps ").concat(firstIndex + 1, " and ").concat(index + 1, "). Each age can only be researched once per path."),
                        stepIndex: index,
                        severity: "error"
                    });
                } else {
                    ageUps.set(step.age, index);
                }
            } else if (step.type === "newAge") {
                newAgeIndices.set(step.age, index);
            }
        }
        // Check that newAge comes after ageUp in the same path
        for (const [age, newAgeIndex] of newAgeIndices){
            const ageUpIndex = ageUps.get(age);
            const ageName = getAgeDisplayName(age);
            if (ageUpIndex === undefined) {
                addError({
                    message: "".concat(ageName, " reached (step ").concat(newAgeIndex + 1, ") without researching it first. You must research an age before reaching it."),
                    stepIndex: newAgeIndex,
                    severity: "error"
                });
            } else if (newAgeIndex <= ageUpIndex) {
                addError({
                    message: "".concat(ageName, " reached (step ").concat(newAgeIndex + 1, ") before or at the same time as researching it (step ").concat(ageUpIndex + 1, "). The age must be researched before it can be reached."),
                    stepIndex: newAgeIndex,
                    severity: "error"
                });
            }
        }
        // Check that Castle Age requires Feudal Age to be reached first in this path
        if (ageUps.has("castleAge")) {
            const castleUpIndex = ageUps.get("castleAge");
            const feudalReachedIndex = newAgeIndices.get("feudalAge");
            if (feudalReachedIndex === undefined) {
                addError({
                    message: "Castle Age is researched (step ".concat(castleUpIndex + 1, ") but Feudal Age was never reached in this path. You must reach Feudal Age before researching Castle Age."),
                    stepIndex: castleUpIndex,
                    severity: "error"
                });
            } else if (castleUpIndex <= feudalReachedIndex) {
                addError({
                    message: "Castle Age is researched (step ".concat(castleUpIndex + 1, ") before or at the same time as reaching Feudal Age (step ").concat(feudalReachedIndex + 1, "). You must reach Feudal Age before researching Castle Age."),
                    stepIndex: castleUpIndex,
                    severity: "error"
                });
            }
        }
        // Check that Imperial Age requires Castle Age to be reached first in this path
        if (ageUps.has("imperialAge")) {
            const imperialUpIndex = ageUps.get("imperialAge");
            const castleReachedIndex = newAgeIndices.get("castleAge");
            if (castleReachedIndex === undefined) {
                addError({
                    message: "Imperial Age is researched (step ".concat(imperialUpIndex + 1, ") but Castle Age was never reached in this path. You must reach Castle Age before researching Imperial Age."),
                    stepIndex: imperialUpIndex,
                    severity: "error"
                });
            } else if (imperialUpIndex <= castleReachedIndex) {
                addError({
                    message: "Imperial Age is researched (step ".concat(imperialUpIndex + 1, ") before or at the same time as reaching Castle Age (step ").concat(castleReachedIndex + 1, "). You must reach Castle Age before researching Imperial Age."),
                    stepIndex: imperialUpIndex,
                    severity: "error"
                });
            }
        }
    }
    // Check for invalid villager movements
    for(let i = 0; i < steps.length; i++){
        const step = steps[i];
        if (step.type === "moveVillagers") {
            // Check 1: Cannot move villagers from a task to the same task
            if (step.from === step.to) {
                addError({
                    message: "Step ".concat(i + 1, ": Cannot move villagers from ").concat(step.from, " to ").concat(step.to, ". The source and destination tasks are the same."),
                    stepIndex: i,
                    severity: "error"
                });
                continue; // Skip the second check if this fails
            }
            // Check 2: Must have enough villagers on the source task
            // Calculate villager distribution up to this step
            const villagerDistribution = calculateResourceDistribution(steps, i - 1);
            const fromResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(step.from);
            const availableVillagers = villagerDistribution[fromResource] || 0;
            if (availableVillagers < step.count) {
                addError({
                    message: "Step ".concat(i + 1, ": Cannot move ").concat(step.count, " villager").concat(step.count > 1 ? "s" : "", " from ").concat(step.from, ". Only ").concat(availableVillagers, " villager").concat(availableVillagers !== 1 ? "s" : "", " available on this task."),
                    stepIndex: i,
                    severity: "error"
                });
            }
        }
    }
    // Check for civilization-specific building restrictions
    if (civilization && civilization !== "Generic") {
        for(let i = 0; i < steps.length; i++){
            const step = steps[i];
            const buildings = (step.type === "newVillagers" || step.type === "moveVillagers" || step.type === "build") && step.buildings ? step.buildings : [];
            for (const building of buildings){
                const buildingType = building.type;
                // Poles cannot build mills (only folwarks)
                if (civilization === "Poles" && buildingType === "mill") {
                    addError({
                        message: "Step ".concat(i + 1, ": Poles civilization cannot build mills. Use folwark instead."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Non-Poles cannot build folwarks
                if (civilization !== "Poles" && buildingType === "folwark") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Poles civilization can build folwarks. Use mill instead."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Armenians and Georgians cannot build lumber camps or mining camps
                if ((civilization === "Armenians" || civilization === "Georgians") && (buildingType === "lumberCamp" || buildingType === "miningCamp")) {
                    addError({
                        message: "Step ".concat(i + 1, ": ").concat(civilization, " civilization cannot build ").concat(buildingType === "lumberCamp" ? "lumber camps" : "mining camps", ". Use mule cart instead."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Non-Armenians/Georgians cannot build mule carts
                if (civilization !== "Armenians" && civilization !== "Georgians" && buildingType === "muleCart") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Armenians and Georgians civilizations can build mule carts. Use lumber camp or mining camp instead."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Only Hindustanis and Persians can build caravanserai
                if (civilization !== "Hindustanis" && civilization !== "Persians" && buildingType === "caravanserai") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Hindustanis and Persians civilizations can build caravanserai."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Sicilians cannot build watch tower, guard tower, or keep
                if (civilization === "Sicilians" && (buildingType === "watchTower" || buildingType === "guardTower" || buildingType === "keep")) {
                    addError({
                        message: "Step ".concat(i + 1, ": Sicilians civilization cannot build watch towers, guard towers, or keeps. Use donjon instead."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Only Sicilians can build donjon
                if (civilization !== "Sicilians" && buildingType === "donjon") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Sicilians civilization can build donjons."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Only Portuguese can build feitoria
                if (civilization !== "Portuguese" && buildingType === "feitoria") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Portuguese civilization can build feitorias."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Only Bulgarians can build krepost
                if (civilization !== "Bulgarians" && buildingType === "krepost") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Bulgarians civilization can build kreposts."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Armenians and Georgians can build fortified church (not monastery)
                if ((civilization === "Armenians" || civilization === "Georgians") && buildingType === "monastery") {
                    addError({
                        message: "Step ".concat(i + 1, ": ").concat(civilization, " civilization cannot build monasteries. Use fortified church instead."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Only Armenians and Georgians can build fortified church
                if (civilization !== "Armenians" && civilization !== "Georgians" && buildingType === "fortifiedChurch") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Armenians and Georgians civilizations can build fortified churches. Use monastery instead."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Only Malay can build harbor
                if (civilization !== "Malay" && buildingType === "harbor") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Malay civilization can build harbors."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
                // Only Khitans can build pasture
                if (civilization !== "Khitans" && buildingType === "pasture") {
                    addError({
                        message: "Step ".concat(i + 1, ": Only Khitans civilization can build pastures."),
                        stepIndex: i,
                        severity: "error"
                    });
                }
            }
        }
    }
    // Add more validation rules here as needed
    // Example: Check for invalid resource counts, missing required fields, etc.
    return {
        isValid: errors.filter((e)=>e.severity === "error").length === 0,
        errors
    };
}
/**
 * Helper function to calculate villager distribution up to a specific step
 * This tracks how many villagers are on each task
 */ function calculateResourceDistribution(steps, upToStepIndex) {
    const distribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyResourceSnapshot"])();
    for(let i = 0; i <= upToStepIndex && i < steps.length; i++){
        const step = steps[i];
        if (step.type === "newVillagers") {
            const targetResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(step.task);
            const count = Math.max(0, Number(step.count) || 0);
            distribution[targetResource] = (distribution[targetResource] || 0) + count;
        } else if (step.type === "moveVillagers") {
            const fromResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(step.from);
            const toResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(step.to);
            const count = Math.max(0, Number(step.count) || 0);
            distribution[fromResource] = (distribution[fromResource] || 0) - count;
            distribution[toResource] = (distribution[toResource] || 0) + count;
        }
    }
    return distribution;
}
function validateAndThrow(steps) {
    const result = validateBuildOrder(steps);
    const errorMessages = result.errors.filter((e)=>e.severity === "error").map((e)=>e.message);
    if (errorMessages.length > 0) {
        throw new Error("Build validation failed:\n".concat(errorMessages.join("\n")));
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/database.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buildValidation.ts [app-client] (ecmascript)");
;
;
;
;
const DEFAULT_BUILD_STEPS = [
    {
        count: 6,
        resources: {
            gold: 0,
            stone: 0,
            build: 0,
            food: 6,
            wood: 0
        },
        task: "sheep",
        buildings: [
            {
                type: "house",
                count: 2
            }
        ],
        type: "newVillagers"
    },
    {
        type: "newVillagers",
        count: 3,
        task: "wood",
        resources: {
            food: 6,
            stone: 0,
            gold: 0,
            build: 0,
            wood: 3
        }
    },
    {
        resources: {
            food: 7,
            gold: 0,
            build: 0,
            stone: 0,
            wood: 3
        },
        task: "boar",
        type: "newVillagers",
        count: 1
    },
    {
        buildings: [
            {
                count: 2,
                type: "house"
            },
            {
                count: 1,
                type: "mill"
            }
        ],
        task: "berries",
        type: "newVillagers",
        resources: {
            build: 0,
            gold: 0,
            food: 11,
            stone: 0,
            wood: 3
        },
        count: 4
    },
    {
        animal: "boar",
        type: "lure",
        resources: {
            build: 0,
            gold: 0,
            wood: 3,
            stone: 0,
            food: 14
        },
        count: 1
    },
    {
        task: "berries",
        count: 3,
        type: "newVillagers",
        resources: {
            build: 0,
            food: 14,
            gold: 0,
            stone: 0,
            wood: 6
        }
    },
    {
        resources: {
            build: 0,
            wood: 6,
            food: 14,
            stone: 0,
            gold: 0
        },
        type: "research",
        tech: [
            "loom"
        ]
    },
    {
        type: "ageUp",
        resources: {
            build: 0,
            wood: 6,
            gold: 0,
            food: 14,
            stone: 0
        },
        age: "feudalAge"
    },
    {
        resources: {
            stone: 0,
            wood: 10,
            food: 10,
            gold: 0,
            build: 0
        },
        to: "wood",
        from: "sheep",
        type: "moveVillagers",
        count: 4,
        buildings: [
            {
                type: "lumberCamp",
                count: 1
            }
        ]
    },
    {
        type: "build",
        buildings: [
            {
                count: 1,
                type: "barracks"
            }
        ],
        resources: {
            wood: 10,
            build: 0,
            food: 10,
            stone: 0,
            gold: 0
        }
    },
    {
        resources: {
            food: 14,
            wood: 6,
            gold: 0,
            build: 0,
            stone: 0
        },
        type: "newAge",
        age: "feudalAge"
    },
    {
        type: "research",
        tech: [
            "doubleBitAxe",
            "horseCollar"
        ],
        resources: {
            wood: 10,
            build: 0,
            stone: 0,
            gold: 0,
            food: 10
        }
    },
    {
        resources: {
            build: 0,
            stone: 0,
            wood: 10,
            food: 10,
            gold: 0
        },
        buildings: [
            {
                count: 1,
                type: "stable"
            }
        ],
        type: "build"
    },
    {
        type: "trainUnit",
        unit: "scout",
        count: 3,
        resources: {
            gold: 0,
            food: 10,
            build: 0,
            wood: 10,
            stone: 0
        }
    }
];
function createDefaultBuildSteps() {
    return DEFAULT_BUILD_STEPS.map((step)=>JSON.parse(JSON.stringify(step)));
}
class DatabaseService {
    static async loadAllPublishedBuilds() {
        // Query for only builds with status 'published' or 'changed'
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "published-builds"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("status", "in", [
            "published",
            "changed"
        ]));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const data = [];
        querySnapshot.forEach((doc)=>{
            const build = doc.data();
            build.id = doc.id;
            data.push(build);
        });
        console.log("[DatabaseService] loadAllPublishedBuilds: found ".concat(data.length, " builds"));
        return data;
    }
    static async loadPublishedBuildWithId(id) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "published-builds", id);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const build = docSnap.data();
            build.id = docSnap.id;
            console.log("[DatabaseService] loadPublishedBuildWithId: ", JSON.stringify(build, null, 2));
            if (build.status === "published" || build.status === "changed") {
                return build;
            } else {
                throw new Error("Build with id ".concat(id, " is not published"));
            }
        } else {
            throw new Error("No build with id ".concat(id));
        }
    }
    static async publishBuildWithId(id) {
        // Load the draft build
        const draftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "builds", id);
        const draftSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(draftRef);
        if (!draftSnap.exists()) {
            throw new Error("No draft build with id ".concat(id, " found"));
        }
        const draftBuild = draftSnap.data();
        // Validate the build before publishing
        if (draftBuild.build && Array.isArray(draftBuild.build)) {
            const validationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateBuildOrder"])(draftBuild.build, draftBuild.civilization);
            if (!validationResult.isValid) {
                const errorMessages = validationResult.errors.filter((e)=>e.severity === "error").map((e)=>e.message).join("\n");
                throw new Error("Cannot publish build with validation errors:\n".concat(errorMessages));
            }
        }
        // Copy to published-builds collection with published status
        const publishedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "published-builds", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(publishedRef, {
            ...draftBuild,
            status: "published"
        });
        // Update draft status to published
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(draftRef, {
            status: "published"
        });
        return id;
    }
    static async unpublishBuildWithId(id) {
        // Delete from published-builds collection
        const publishedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "published-builds", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(publishedRef).catch((error)=>{
            throw new Error("Error deleting published build with id ".concat(id, ": ").concat(error));
        });
        // Update draft status to draft
        const draftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "builds", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(draftRef, {
            status: "draft"
        }).catch((error)=>{
            throw new Error("Error updating draft build with id ".concat(id, ": ").concat(error));
        });
        return id;
    }
    static async loadBuilds(userId) {
        // Load from builds collection (drafts)
        // If userId is provided, filter by publisher. Otherwise return all builds (admin view).
        const q = userId !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "builds"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("publisher", "==", userId)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "builds"));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const data = [];
        querySnapshot.forEach((doc)=>{
            const build = doc.data();
            build.id = doc.id;
            data.push(build);
        });
        return data;
    }
    static async loadBuildWithId(id) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "builds", id);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const build = docSnap.data();
            build.id = docSnap.id;
            console.log("Loaded build:", JSON.stringify(build, null, 2));
            return build;
        } else {
            throw new Error("No build with id ".concat(id));
        }
    }
    static async saveBuildWithId(buildId, buildData) {
        // Save to builds collection (draft/working version)
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "builds", buildId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, buildData).catch((error)=>{
            throw new Error("Error saving build with id ".concat(buildId, ": ").concat(error));
        });
    }
    static async addNewBuildForPublisher(publisher) {
        const build = {
            title: "New Build",
            civilization: "Generic",
            publisher: publisher,
            status: "draft",
            build: createDefaultBuildSteps()
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "builds"), build);
        return docRef.id;
    }
    static async deleteBuildWithId(id) {
        // Delete from both collections
        const draftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "builds", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(draftRef).catch((error)=>{
            throw new Error("Error deleting draft build with id ".concat(id, ": ").concat(error));
        });
        // Try to delete from published-builds (may not exist)
        try {
            const publishedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "published-builds", id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(publishedRef);
        } catch (e) {
        // Ignore error if published version doesn't exist
        }
    }
    static async loadPublishedVersionOfBuild(id) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "published-builds", id);
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
            if (docSnap.exists()) {
                const build = docSnap.data();
                build.id = docSnap.id;
                return build;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    static async getListOfAllAvailableImages() {
        const imagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], "Images");
        const images = [];
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listAll"])(imagesRef).then((res)=>{
            res.items.forEach((itemRef)=>{
                images.push(itemRef.name.slice(0, -4));
            });
        }).catch((error)=>{
            throw new Error("Couldn't get all available images: ".concat(error));
        });
        return images;
    }
    static async getImageURLWithName(name) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], "Images/".concat(name, ".png"))).then((url)=>{
            return url;
        }).catch((error)=>{
            throw new Error("Not able to get URL for image with name: ".concat(name, " - Error: ").concat(error));
        });
    }
    static async loadProfileInfo(user) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "users", user.uid);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            return userData;
        } else {
            throw new Error("No user with id ".concat(user.uid, " found"));
        }
    }
    static async saveProfileInfo(user, email, profileId) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "users", user.uid);
        const userData = {
            email: email,
            profile_id: profileId
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, userData).catch((error)=>{
            throw new Error("Error saving profile info for user with id ".concat(user.uid, ": ").concat(error));
        });
    }
    // FAV BUILDS
    static async favBuildWithIdForUser(id, user) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "users", user.uid);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
                favorites: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(id)
            });
        } catch (error) {
            // If user document doesn't exist, create it with the favorite
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
            if (!docSnap.exists()) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
                    favorites: [
                        id
                    ],
                    email: "",
                    profile_id: ""
                });
            } else {
                throw new Error("Error favoring build with id ".concat(id, ": ").concat(error));
            }
        }
    }
    static async removeFavBuildWithIdForUser(id, user) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "users", user.uid);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
                favorites: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayRemove"])(id)
            });
        } catch (error) {
            // If user document doesn't exist, create it without the favorite (empty array)
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
            if (!docSnap.exists()) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
                    favorites: [],
                    email: "",
                    profile_id: ""
                });
            } else {
                throw new Error("Error removing favorite build with id ".concat(id, ": ").concat(error));
            }
        }
    }
    // RATINGS
    static async rateBuildWithIdForUser(id, user, rating) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "ratings", "rating-".concat(id, "-").concat(user.uid));
        const data = {
            build_id: id,
            user_id: user.uid,
            rating: rating
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, data).catch((error)=>{
            throw new Error("Error rating build with id ".concat(id, ": ").concat(error));
        });
        return docRef.id;
    }
    static async loadUserRatingForBuild(buildId, userId) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"], "ratings", "rating-".concat(buildId, "-").concat(userId));
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            throw new Error("No rating for build with id ".concat(buildId, " and user ").concat(userId));
        }
    }
}
const __TURBOPACK__default__export__ = DatabaseService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/gameConstants.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"technologies\":[{\"value\":\"loom\",\"label\":\"Loom\"},{\"value\":\"wheelbarrow\",\"label\":\"Wheelbarrow\"},{\"value\":\"handCart\",\"label\":\"Hand Cart\"},{\"value\":\"horseCollar\",\"label\":\"Horse Collar\"},{\"value\":\"heavyPlow\",\"label\":\"Heavy Plow\"},{\"value\":\"cropRotation\",\"label\":\"Crop Rotation\"},{\"value\":\"doubleBitAxe\",\"label\":\"Double-Bit Axe\"},{\"value\":\"bowSaw\",\"label\":\"Bow Saw\"},{\"value\":\"twoManSaw\",\"label\":\"Two-Man Saw\"},{\"value\":\"goldMining\",\"label\":\"Gold Mining\"},{\"value\":\"goldShaftMining\",\"label\":\"Gold Shaft Mining\"},{\"value\":\"stoneMining\",\"label\":\"Stone Mining\"},{\"value\":\"stoneShaftMining\",\"label\":\"Stone Shaft Mining\"},{\"value\":\"townWatch\",\"label\":\"Town Watch\"},{\"value\":\"townPatrol\",\"label\":\"Town Patrol\"},{\"value\":\"feudalAge\",\"label\":\"Feudal Age\"},{\"value\":\"castleAge\",\"label\":\"Castle Age\"},{\"value\":\"imperialAge\",\"label\":\"Imperial Age\"},{\"value\":\"paddedArcherArmor\",\"label\":\"Padded Archer Armor\"},{\"value\":\"leatherArcherArmor\",\"label\":\"Leather Archer Armor\"},{\"value\":\"ringArcherArmor\",\"label\":\"Ring Archer Armor\"},{\"value\":\"forging\",\"label\":\"Forging\"},{\"value\":\"ironCasting\",\"label\":\"Iron Casting\"},{\"value\":\"blastFurnace\",\"label\":\"Blast Furnace\"},{\"value\":\"scaleMailArmor\",\"label\":\"Scale Mail Armor\"},{\"value\":\"chainMailArmor\",\"label\":\"Chain Mail Armor\"},{\"value\":\"plateMailArmor\",\"label\":\"Plate Mail Armor\"},{\"value\":\"scaleBardingArmor\",\"label\":\"Scale Barding Armor\"},{\"value\":\"chainBardingArmor\",\"label\":\"Chain Barding Armor\"},{\"value\":\"plateBardingArmor\",\"label\":\"Plate Barding Armor\"},{\"value\":\"fletching\",\"label\":\"Fletching\"},{\"value\":\"bodkinArrow\",\"label\":\"Bodkin Arrow\"},{\"value\":\"bracer\",\"label\":\"Bracer\"},{\"value\":\"bloodlines\",\"label\":\"Bloodlines\"},{\"value\":\"husbandry\",\"label\":\"Husbandry\"},{\"value\":\"thumbRing\",\"label\":\"Thumb Ring\"},{\"value\":\"parthianTactics\",\"label\":\"Parthian Tactics\"},{\"value\":\"ballistics\",\"label\":\"Ballistics\"},{\"value\":\"chemistry\",\"label\":\"Chemistry\"},{\"value\":\"siegeEngineers\",\"label\":\"Siege Engineers\"},{\"value\":\"masonry\",\"label\":\"Masonry\"},{\"value\":\"architecture\",\"label\":\"Architecture\"},{\"value\":\"treadmillCrane\",\"label\":\"Treadmill Crane\"},{\"value\":\"guardTower\",\"label\":\"Guard Tower\"},{\"value\":\"keep\",\"label\":\"Keep\"},{\"value\":\"bombardTower\",\"label\":\"Bombard Tower\"},{\"value\":\"heatedShot\",\"label\":\"Heated Shot\"},{\"value\":\"murderHoles\",\"label\":\"Murder Holes\"},{\"value\":\"herbalMedicine\",\"label\":\"Herbal Medicine\"},{\"value\":\"heresy\",\"label\":\"Heresy\"},{\"value\":\"sanctity\",\"label\":\"Sanctity\"},{\"value\":\"fervor\",\"label\":\"Fervor\"},{\"value\":\"faith\",\"label\":\"Faith\"},{\"value\":\"illumination\",\"label\":\"Illumination\"},{\"value\":\"blockPrinting\",\"label\":\"Block Printing\"},{\"value\":\"theocracy\",\"label\":\"Theocracy\"},{\"value\":\"atonement\",\"label\":\"Atonement\"},{\"value\":\"redemption\",\"label\":\"Redemption\"},{\"value\":\"careening\",\"label\":\"Careening\"},{\"value\":\"dryDock\",\"label\":\"Dry Dock\"},{\"value\":\"shipwright\",\"label\":\"Shipwright\"},{\"value\":\"conscription\",\"label\":\"Conscription\"},{\"value\":\"spies\",\"label\":\"Spies\"},{\"value\":\"coinage\",\"label\":\"Coinage\"},{\"value\":\"banking\",\"label\":\"Banking\"},{\"value\":\"guilds\",\"label\":\"Guilds\"},{\"value\":\"caravan\",\"label\":\"Caravan\"},{\"value\":\"squires\",\"label\":\"Squires\"},{\"value\":\"arson\",\"label\":\"Arson\"},{\"value\":\"supplyLines\",\"label\":\"Supply Lines\"},{\"value\":\"gambesons\",\"label\":\"Gambesons\"},{\"value\":\"tracking\",\"label\":\"Tracking\"},{\"value\":\"torsionEngines\",\"label\":\"Torsion Engines\"},{\"value\":\"tigui\",\"label\":\"Tigui\"},{\"value\":\"farimba\",\"label\":\"Farimba\"},{\"value\":\"kasbah\",\"label\":\"Kasbah\"},{\"value\":\"maghrebiCamels\",\"label\":\"Maghrebi Camels\"},{\"value\":\"andeanSling\",\"label\":\"Andean Sling\"},{\"value\":\"fabricShields\",\"label\":\"Fabric Shields\"},{\"value\":\"druzhina\",\"label\":\"Druzhina\"},{\"value\":\"grandTrunkRoad\",\"label\":\"Grand Trunk Road\"},{\"value\":\"shatagni\",\"label\":\"Shatagni\"},{\"value\":\"silkRoad\",\"label\":\"Silk Road\"},{\"value\":\"recurveBow\",\"label\":\"Recurve Bow\"},{\"value\":\"corvinianArmy\",\"label\":\"Corvinian Army\"},{\"value\":\"arrowslits\",\"label\":\"Arrowslits\"},{\"value\":\"nomads\",\"label\":\"Nomads\"},{\"value\":\"kamandaran\",\"label\":\"Kamandaran\"},{\"value\":\"ironclad\",\"label\":\"Ironclad\"},{\"value\":\"sipahi\",\"label\":\"Sipahi\"},{\"value\":\"inquisition\",\"label\":\"Inquisition\"},{\"value\":\"chivalry\",\"label\":\"Chivalry\"},{\"value\":\"tuskSwords\",\"label\":\"Tusk Swords\"},{\"value\":\"doubleCrossbow\",\"label\":\"Double Crossbow\"},{\"value\":\"thalassocracy\",\"label\":\"Thalassocracy\"},{\"value\":\"forcedLevy\",\"label\":\"Forced Levy\"},{\"value\":\"howdah\",\"label\":\"Howdah\"},{\"value\":\"manipurCavalry\",\"label\":\"Manipur Cavalry\"},{\"value\":\"chatras\",\"label\":\"Chatras\"},{\"value\":\"paperMoney\",\"label\":\"Paper Money\"},{\"value\":\"stirrups\",\"label\":\"Stirrups\"},{\"value\":\"bagains\",\"label\":\"Bagains\"},{\"value\":\"silkArmor\",\"label\":\"Silk Armor\"},{\"value\":\"timuridSiegecraft\",\"label\":\"Timurid Siegecraft\"},{\"value\":\"steppeHusbandry\",\"label\":\"Steppe Husbandry\"},{\"value\":\"chieftains\",\"label\":\"Chieftains\"},{\"value\":\"greekFire\",\"label\":\"Greek Fire\"},{\"value\":\"gillnets\",\"label\":\"Gillnets\"},{\"value\":\"logistica\",\"label\":\"Logistica\"},{\"value\":\"sappers\",\"label\":\"Sappers\"},{\"value\":\"beardedAxe\",\"label\":\"Bearded Axe\"},{\"value\":\"supremacy\",\"label\":\"Supremacy\"},{\"value\":\"atlatl\",\"label\":\"Atlatl\"},{\"value\":\"warwolf\",\"label\":\"Warwolf\"},{\"value\":\"burgundianVineyards\",\"label\":\"Burgundian Vineyards\"},{\"value\":\"flemishRevolution\",\"label\":\"Flemish Revolution\"},{\"value\":\"firstCrusade\",\"label\":\"First Crusade\"},{\"value\":\"hauberk\",\"label\":\"Hauberk\"},{\"value\":\"szlachtaPrivileges\",\"label\":\"Szlachta Privileges\"},{\"value\":\"lechiticLegacy\",\"label\":\"Lechitic Legacy\"},{\"value\":\"wagenburgTactics\",\"label\":\"Wagenburg Tactics\"},{\"value\":\"hussiteReforms\",\"label\":\"Hussite Reforms\"},{\"value\":\"medicalCorps\",\"label\":\"Medical Corps\"},{\"value\":\"wootzSteel\",\"label\":\"Wootz Steel\"},{\"value\":\"paiks\",\"label\":\"Paiks\"},{\"value\":\"mahayana\",\"label\":\"Mahayana\"},{\"value\":\"kshatriyas\",\"label\":\"Kshatriyas\"},{\"value\":\"frontierGuards\",\"label\":\"Frontier Guards\"},{\"value\":\"greatWall\",\"label\":\"Great Wall\"},{\"value\":\"stronghold\",\"label\":\"Stronghold\"},{\"value\":\"marauders\",\"label\":\"Marauders\"},{\"value\":\"yasama\",\"label\":\"Yasama\"},{\"value\":\"hoardings\",\"label\":\"Hoardings\"},{\"value\":\"hulCheJavelineers\",\"label\":\"Hul'che Javelineers\"},{\"value\":\"eupseong\",\"label\":\"Eupseong\"},{\"value\":\"cumanMercenaries\",\"label\":\"Cuman Mercenaries\"},{\"value\":\"hillForts\",\"label\":\"Hill Forts\"},{\"value\":\"towerShields\",\"label\":\"Tower Shields\"},{\"value\":\"fereters\",\"label\":\"Fereters\"},{\"value\":\"cilicianFleet\",\"label\":\"Cilician Fleet\"},{\"value\":\"spiesTreason\",\"label\":\"Spies/Treason\"},{\"value\":\"yeomen\",\"label\":\"Yeomen\"},{\"value\":\"elDorado\",\"label\":\"El Dorado\"},{\"value\":\"furorCeltica\",\"label\":\"Furor Celtica\"},{\"value\":\"drill\",\"label\":\"Drill\"},{\"value\":\"citadels\",\"label\":\"Citadels\"},{\"value\":\"artillery\",\"label\":\"Artillery\"},{\"value\":\"crenellations\",\"label\":\"Crenellations\"},{\"value\":\"anarchy\",\"label\":\"Anarchy\"},{\"value\":\"atheism\",\"label\":\"Atheism\"},{\"value\":\"garlandWars\",\"label\":\"Garland Wars\"},{\"value\":\"bogsveigar\",\"label\":\"Bogsveigar\"},{\"value\":\"rocketry\",\"label\":\"Rocketry\"},{\"value\":\"shinkichon\",\"label\":\"Shinkichon\"},{\"value\":\"perfusion\",\"label\":\"Perfusion\"},{\"value\":\"svanTowers\",\"label\":\"Svan Towers\"},{\"value\":\"aznauriCavalry\",\"label\":\"Aznauri Cavalry\"},{\"value\":\"ballistas\",\"label\":\"Ballistas\"},{\"value\":\"comitatenses\",\"label\":\"Comitatenses\"},{\"value\":\"counterweights\",\"label\":\"Counterweights\"},{\"value\":\"detinets\",\"label\":\"Detinets\"},{\"value\":\"bimaristan\",\"label\":\"Bimaristan\"},{\"value\":\"devotion\",\"label\":\"Devotion\"},{\"value\":\"fortifiedBastions\",\"label\":\"Fortified Bastions\"},{\"value\":\"thunderclapBombs\",\"label\":\"Thunderclap Bombs\"},{\"value\":\"lamellarArmor\",\"label\":\"Lamellar Armor\"},{\"value\":\"ordoCavalry\",\"label\":\"Ordo Cavalry\"},{\"value\":\"tuntian\",\"label\":\"Tuntian\"},{\"value\":\"mingGuangArmor\",\"label\":\"Ming Guang Armor\"},{\"value\":\"boltMagazine\",\"label\":\"Bolt Magazine\"},{\"value\":\"coiledSerpentArray\",\"label\":\"Coiled Serpent Array\"},{\"value\":\"redCliffsTactics\",\"label\":\"Red Cliffs Tactics\"},{\"value\":\"sittingTiger\",\"label\":\"Sitting Tiger\"},{\"value\":\"domestication\",\"label\":\"Domestication\"},{\"value\":\"pastoralism\",\"label\":\"Pastoralism\"},{\"value\":\"transhumance\",\"label\":\"Transhumance\"},{\"value\":\"cartography\",\"label\":\"Cartography\"},{\"value\":\"arquebus\",\"label\":\"Arquebus\"},{\"value\":\"carrack\",\"label\":\"Carrack\"},{\"value\":\"royalHeirs\",\"label\":\"Royal Heirs\"},{\"value\":\"pirotechnia\",\"label\":\"Pirotechnia\"},{\"value\":\"kataparuto\",\"label\":\"Kataparuto\"},{\"value\":\"eliteSteppeLancer\",\"label\":\"Elite Steppe Lancer\"},{\"value\":\"eliteCompositeBowman\",\"label\":\"Elite Composite Bowman\"},{\"value\":\"eliteMonaspa\",\"label\":\"Elite Monaspa\"},{\"value\":\"eliteCenturion\",\"label\":\"Elite Centurion\"},{\"value\":\"heavyRocketCart\",\"label\":\"Heavy Rocket Cart\"},{\"value\":\"cavalier\",\"label\":\"Cavalier\"},{\"value\":\"manAtArms\",\"label\":\"Man-at-Arms\"},{\"value\":\"longSwordsman\",\"label\":\"Long Swordsman\"},{\"value\":\"crossbowman\",\"label\":\"Crossbowman\"},{\"value\":\"eliteSkirmisher\",\"label\":\"Elite Skirmisher\"},{\"value\":\"warGalley\",\"label\":\"War Galley\"},{\"value\":\"eliteOrganGun\",\"label\":\"Elite Organ Gun\"},{\"value\":\"eliteCaravel\",\"label\":\"Elite Caravel\"},{\"value\":\"eliteCamelArcher\",\"label\":\"Elite Camel Archer\"},{\"value\":\"eliteGenitour\",\"label\":\"Elite Genitour\"},{\"value\":\"eliteGbeto\",\"label\":\"Elite Gbeto\"},{\"value\":\"eliteShotelWarrior\",\"label\":\"Elite Shotel Warrior\"},{\"value\":\"eliteBallistaElephant\",\"label\":\"Elite Ballista Elephant\"},{\"value\":\"eliteKarambitWarrior\",\"label\":\"Elite Karambit Warrior\"},{\"value\":\"eliteArambai\",\"label\":\"Elite Arambai\"},{\"value\":\"eliteTigerCavalry\",\"label\":\"Elite Tiger Cavalry\"},{\"value\":\"techDemolitionRaft\",\"label\":\"Demolition Raft\"},{\"value\":\"eliteRattanArcher\",\"label\":\"Elite Rattan Archer\"},{\"value\":\"eliteBattleElephant\",\"label\":\"Elite Battle Elephant\"},{\"value\":\"techImperialSkirmisher\",\"label\":\"Imperial Skirmisher\"},{\"value\":\"cappedRam\",\"label\":\"Capped Ram\"},{\"value\":\"eliteKonnik\",\"label\":\"Elite Konnik\"},{\"value\":\"galleon\",\"label\":\"Galleon\"},{\"value\":\"eliteKeshik\",\"label\":\"Elite Keshik\"},{\"value\":\"eliteKipchak\",\"label\":\"Elite Kipchak\"},{\"value\":\"eliteLeitis\",\"label\":\"Elite Leitis\"},{\"value\":\"eliteWhiteFeatherGuard\",\"label\":\"Elite White Feather Guard\"},{\"value\":\"eliteFireArcher\",\"label\":\"Elite Fire Archer\"},{\"value\":\"pikeman\",\"label\":\"Pikeman\"},{\"value\":\"halberdier\",\"label\":\"Halberdier\"},{\"value\":\"twoHandedSwordsman\",\"label\":\"Two-Handed Swordsman\"},{\"value\":\"heavyCavalryArcher\",\"label\":\"Heavy Cavalry Archer\"},{\"value\":\"eliteUrumiSwordsman\",\"label\":\"Elite Urumi Swordsman\"},{\"value\":\"heavyCamelRider\",\"label\":\"Heavy Camel Rider\"},{\"value\":\"arbalester\",\"label\":\"Arbalester\"},{\"value\":\"imperialCamelRider\",\"label\":\"Imperial Camel Rider\"},{\"value\":\"heavyDemolitionShip\",\"label\":\"Heavy Demolition Ship\"},{\"value\":\"eliteChakramThrower\",\"label\":\"Elite Chakram Thrower\"},{\"value\":\"fastFireShip\",\"label\":\"Fast Fire Ship\"},{\"value\":\"siegeElephant\",\"label\":\"Siege Elephant\"},{\"value\":\"eliteGhulam\",\"label\":\"Elite Ghulam\"},{\"value\":\"eliteShrivamshaRider\",\"label\":\"Elite Shrivamsha Rider\"},{\"value\":\"heavyScorpion\",\"label\":\"Heavy Scorpion\"},{\"value\":\"lightCavalry\",\"label\":\"Light Cavalry\"},{\"value\":\"siegeRam\",\"label\":\"Siege Ram\"},{\"value\":\"onager\",\"label\":\"Onager\"},{\"value\":\"eliteBoyar\",\"label\":\"Elite Boyar\"},{\"value\":\"eliteCataphract\",\"label\":\"Elite Cataphract\"},{\"value\":\"eliteChuKoNu\",\"label\":\"Elite Chu Ko Nu\"},{\"value\":\"eliteMameluke\",\"label\":\"Elite Mameluke\"},{\"value\":\"eliteHuskarl\",\"label\":\"Elite Huskarl\"},{\"value\":\"eliteJanissary\",\"label\":\"Elite Janissary\"},{\"value\":\"eliteLongbowman\",\"label\":\"Elite Longbowman\"},{\"value\":\"eliteLongboat\",\"label\":\"Elite Longboat\"},{\"value\":\"eliteMangudai\",\"label\":\"Elite Mangudai\"},{\"value\":\"eliteWarElephant\",\"label\":\"Elite War Elephant\"},{\"value\":\"eliteSamurai\",\"label\":\"Elite Samurai\"},{\"value\":\"eliteThrowingAxeman\",\"label\":\"Elite Throwing Axeman\"},{\"value\":\"eliteTeutonicKnight\",\"label\":\"Elite Teutonic Knight\"},{\"value\":\"eliteWoadRaider\",\"label\":\"Elite Woad Raider\"},{\"value\":\"champion\",\"label\":\"Champion\"},{\"value\":\"paladin\",\"label\":\"Paladin\"},{\"value\":\"siegeOnager\",\"label\":\"Siege Onager\"},{\"value\":\"eliteCoustillier\",\"label\":\"Elite Coustillier\"},{\"value\":\"eliteSerjeant\",\"label\":\"Elite Serjeant\"},{\"value\":\"eliteObuch\",\"label\":\"Elite Obuch\"},{\"value\":\"eliteHussiteWagon\",\"label\":\"Elite Hussite Wagon\"},{\"value\":\"eliteCannonGalleon\",\"label\":\"Elite Cannon Galleon\"},{\"value\":\"eliteBerserk\",\"label\":\"Elite Berserk\"},{\"value\":\"techWingedHussar\",\"label\":\"Winged Hussar\"},{\"value\":\"techHoufnice\",\"label\":\"Houfnice\"},{\"value\":\"eliteIronPagoda\",\"label\":\"Elite Iron Pagoda\"},{\"value\":\"heavyHeiGuangCavalry\",\"label\":\"Heavy Hei Guang Cavalry\"},{\"value\":\"hussar\",\"label\":\"Hussar\"},{\"value\":\"eliteJaguarWarrior\",\"label\":\"Elite Jaguar Warrior\"},{\"value\":\"eagleWarrior\",\"label\":\"Eagle Warrior\"},{\"value\":\"eliteEagleWarrior\",\"label\":\"Elite Eagle Warrior\"},{\"value\":\"eliteTarkan\",\"label\":\"Elite Tarkan\"},{\"value\":\"eliteElephantArcher\",\"label\":\"Elite Elephant Archer\"},{\"value\":\"elitePlumedArcher\",\"label\":\"Elite Plumed Archer\"},{\"value\":\"eliteKamayuk\",\"label\":\"Elite Kamayuk\"},{\"value\":\"eliteConquistador\",\"label\":\"Elite Conquistador\"},{\"value\":\"eliteLiaoDao\",\"label\":\"Elite Liao Dao\"},{\"value\":\"eliteFireLancer\",\"label\":\"Elite Fire Lancer\"},{\"value\":\"eliteGenoeseCrossbowman\",\"label\":\"Elite Genoese Crossbowman\"},{\"value\":\"eliteWarWagon\",\"label\":\"Elite War Wagon\"},{\"value\":\"eliteMagyarHuszar\",\"label\":\"Elite Magyar Huszar\"},{\"value\":\"eliteTurtleShip\",\"label\":\"Elite Turtle Ship\"},{\"value\":\"techDragonShip\",\"label\":\"Dragon Ship\"},{\"value\":\"fortifiedWall\",\"label\":\"Fortified Wall\"},{\"value\":\"eliteRatha\",\"label\":\"Elite Ratha\"}],\"buildings\":[{\"value\":\"house\",\"label\":\"House\"},{\"value\":\"mill\",\"label\":\"Mill\"},{\"value\":\"lumberCamp\",\"label\":\"Lumber Camp\"},{\"value\":\"miningCamp\",\"label\":\"Mining Camp\"},{\"value\":\"muleCart\",\"label\":\"Mule Cart\"},{\"value\":\"barracks\",\"label\":\"Barracks\"},{\"value\":\"archeryRange\",\"label\":\"Archery Range\"},{\"value\":\"stable\",\"label\":\"Stable\"},{\"value\":\"siegeWorkshop\",\"label\":\"Siege Workshop\"},{\"value\":\"blacksmith\",\"label\":\"Blacksmith\"},{\"value\":\"monastery\",\"label\":\"Monastery\"},{\"value\":\"university\",\"label\":\"University\"},{\"value\":\"townCenter\",\"label\":\"Town Center\"},{\"value\":\"castle\",\"label\":\"Castle\"},{\"value\":\"market\",\"label\":\"Market\"},{\"value\":\"dock\",\"label\":\"Dock\"},{\"value\":\"farm\",\"label\":\"Farm\"},{\"value\":\"fishTrap\",\"label\":\"Fish Trap\"},{\"value\":\"palisadeWall\",\"label\":\"Palisade Wall\"},{\"value\":\"stoneWall\",\"label\":\"Stone Wall\"},{\"value\":\"fortifiedWall\",\"label\":\"Fortified Wall\"},{\"value\":\"palisadeGate\",\"label\":\"Palisade Gate\"},{\"value\":\"gate\",\"label\":\"Gate\"},{\"value\":\"watchTower\",\"label\":\"Watch Tower\"},{\"value\":\"guardTower\",\"label\":\"Guard Tower\"},{\"value\":\"keep\",\"label\":\"Keep\"},{\"value\":\"bombardTower\",\"label\":\"Bombard Tower\"},{\"value\":\"outpost\",\"label\":\"Outpost\"},{\"value\":\"wonder\",\"label\":\"Wonder\"},{\"value\":\"feitoria\",\"label\":\"Feitoria\"},{\"value\":\"krepost\",\"label\":\"Krepost\"},{\"value\":\"donjon\",\"label\":\"Donjon\"},{\"value\":\"harbor\",\"label\":\"Harbor\"},{\"value\":\"pasture\",\"label\":\"Pasture\"},{\"value\":\"caravanserai\",\"label\":\"Caravanserai\"},{\"value\":\"folwark\",\"label\":\"Folwark\"},{\"value\":\"fortifiedChurch\",\"label\":\"Fortified Church\"}],\"units\":[{\"value\":\"villager\",\"label\":\"Villager\"},{\"value\":\"militia\",\"label\":\"Militia\"},{\"value\":\"spearman\",\"label\":\"Spearman\"},{\"value\":\"eagleScout\",\"label\":\"Eagle Scout\"},{\"value\":\"archer\",\"label\":\"Archer\"},{\"value\":\"skirmisher\",\"label\":\"Skirmisher\"},{\"value\":\"cavalryArcher\",\"label\":\"Cavalry Archer\"},{\"value\":\"handCannoneer\",\"label\":\"Hand Cannoneer\"},{\"value\":\"scout\",\"label\":\"Scout\"},{\"value\":\"knight\",\"label\":\"Knight\"},{\"value\":\"camelRider\",\"label\":\"Camel Rider\"},{\"value\":\"battleElephant\",\"label\":\"Battle Elephant\"},{\"value\":\"steppeLancer\",\"label\":\"Steppe Lancer\"},{\"value\":\"batteringRam\",\"label\":\"Battering Ram\"},{\"value\":\"mangonel\",\"label\":\"Mangonel\"},{\"value\":\"scorpion\",\"label\":\"Scorpion\"},{\"value\":\"bombardCannon\",\"label\":\"Bombard Cannon\"},{\"value\":\"monk\",\"label\":\"Monk\"},{\"value\":\"missionary\",\"label\":\"Missionary\"},{\"value\":\"fishingShip\",\"label\":\"Fishing Ship\"},{\"value\":\"transportShip\",\"label\":\"Transport Ship\"},{\"value\":\"tradeCart\",\"label\":\"Trade Cart\"},{\"value\":\"tradeCog\",\"label\":\"Trade Cog\"},{\"value\":\"galley\",\"label\":\"Galley\"},{\"value\":\"fireShip\",\"label\":\"Fire Ship\"},{\"value\":\"cannonGalleon\",\"label\":\"Cannon Galleon\"},{\"value\":\"petard\",\"label\":\"Petard\"},{\"value\":\"trebuchet\",\"label\":\"Trebuchet\"},{\"value\":\"king\",\"label\":\"King\"},{\"value\":\"compositeBowman\",\"label\":\"Composite Bowman\"},{\"value\":\"monaspa\",\"label\":\"Monaspa\"},{\"value\":\"warriorPriest\",\"label\":\"Warrior Priest\"},{\"value\":\"xolotlWarrior\",\"label\":\"Xolotl Warrior\"},{\"value\":\"centurion\",\"label\":\"Centurion\"},{\"value\":\"dromon\",\"label\":\"Dromon\"},{\"value\":\"rocketCart\",\"label\":\"Rocket Cart\"},{\"value\":\"fireLancer\",\"label\":\"Fire Lancer\"},{\"value\":\"tigerCavalry\",\"label\":\"Tiger Cavalry\"},{\"value\":\"organGun\",\"label\":\"Organ Gun\"},{\"value\":\"caravel\",\"label\":\"Caravel\"},{\"value\":\"camelArcher\",\"label\":\"Camel Archer\"},{\"value\":\"genitour\",\"label\":\"Genitour\"},{\"value\":\"gbeto\",\"label\":\"Gbeto\"},{\"value\":\"shotelWarrior\",\"label\":\"Shotel Warrior\"},{\"value\":\"ballistaElephant\",\"label\":\"Ballista Elephant\"},{\"value\":\"karambitWarrior\",\"label\":\"Karambit Warrior\"},{\"value\":\"arambai\",\"label\":\"Arambai\"},{\"value\":\"fireGalley\",\"label\":\"Fire Galley\"},{\"value\":\"demolitionRaft\",\"label\":\"Demolition Raft\"},{\"value\":\"rattanArcher\",\"label\":\"Rattan Archer\"},{\"value\":\"imperialSkirmisher\",\"label\":\"Imperial Skirmisher\"},{\"value\":\"xianbeiRaider\",\"label\":\"Xianbei Raider\"},{\"value\":\"konnik\",\"label\":\"Konnik\"},{\"value\":\"konnikDismounted\",\"label\":\"Konnik (Dismounted)\"},{\"value\":\"keshik\",\"label\":\"Keshik\"},{\"value\":\"kipchak\",\"label\":\"Kipchak\"},{\"value\":\"leitis\",\"label\":\"Leitis\"},{\"value\":\"whiteFeatherGuard\",\"label\":\"White Feather Guard\"},{\"value\":\"warChariot\",\"label\":\"War Chariot\"},{\"value\":\"fireArcher\",\"label\":\"Fire Archer\"},{\"value\":\"jianSwordsman\",\"label\":\"Jian Swordsman\"},{\"value\":\"flamingCamel\",\"label\":\"Flaming Camel\"},{\"value\":\"urumiSwordsman\",\"label\":\"Urumi Swordsman\"},{\"value\":\"chakramThrower\",\"label\":\"Chakram Thrower\"},{\"value\":\"armoredElephant\",\"label\":\"Armored Elephant\"},{\"value\":\"ghulam\",\"label\":\"Ghulam\"},{\"value\":\"thirisadai\",\"label\":\"Thirisadai\"},{\"value\":\"shrivamshaRider\",\"label\":\"Shrivamsha Rider\"},{\"value\":\"camelScout\",\"label\":\"Camel Scout\"},{\"value\":\"siegeTower\",\"label\":\"Siege Tower\"},{\"value\":\"boyar\",\"label\":\"Boyar\"},{\"value\":\"coustillier\",\"label\":\"Coustillier\"},{\"value\":\"serjeant\",\"label\":\"Serjeant\"},{\"value\":\"flemishMilitia\",\"label\":\"Flemish Militia\"},{\"value\":\"obuch\",\"label\":\"Obuch\"},{\"value\":\"hussiteWagon\",\"label\":\"Hussite Wagon\"},{\"value\":\"berserk\",\"label\":\"Berserk\"},{\"value\":\"wingedHussar\",\"label\":\"Winged Hussar\"},{\"value\":\"houfnice\",\"label\":\"Houfnice\"},{\"value\":\"ironPagoda\",\"label\":\"Iron Pagoda\"},{\"value\":\"grenadier\",\"label\":\"Grenadier\"},{\"value\":\"tractionTrebuchet\",\"label\":\"Traction Trebuchet\"},{\"value\":\"heiGuangCavalry\",\"label\":\"Hei Guang Cavalry\"},{\"value\":\"louChuan\",\"label\":\"Lou Chuan\"},{\"value\":\"jaguarWarrior\",\"label\":\"Jaguar Warrior\"},{\"value\":\"tarkan\",\"label\":\"Tarkan\"},{\"value\":\"elephantArcher\",\"label\":\"Elephant Archer\"},{\"value\":\"plumedArcher\",\"label\":\"Plumed Archer\"},{\"value\":\"kamayuk\",\"label\":\"Kamayuk\"},{\"value\":\"conquistador\",\"label\":\"Conquistador\"},{\"value\":\"slinger\",\"label\":\"Slinger\"},{\"value\":\"liaoDao\",\"label\":\"Liao Dao\"},{\"value\":\"mountedTrebuchet\",\"label\":\"Mounted Trebuchet\"},{\"value\":\"savar\",\"label\":\"Savar\"},{\"value\":\"genoeseCrossbowman\",\"label\":\"Genoese Crossbowman\"},{\"value\":\"warWagon\",\"label\":\"War Wagon\"},{\"value\":\"magyarHuszar\",\"label\":\"Magyar Huszar\"},{\"value\":\"turtleShip\",\"label\":\"Turtle Ship\"},{\"value\":\"dragonShip\",\"label\":\"Dragon Ship\"},{\"value\":\"cataphract\",\"label\":\"Cataphract\"},{\"value\":\"chuKoNu\",\"label\":\"Chu Ko Nu\"},{\"value\":\"mameluke\",\"label\":\"Mameluke\"},{\"value\":\"huskarl\",\"label\":\"Huskarl\"},{\"value\":\"janissary\",\"label\":\"Janissary\"},{\"value\":\"longboat\",\"label\":\"Longboat\"},{\"value\":\"longbowman\",\"label\":\"Longbowman\"},{\"value\":\"mangudai\",\"label\":\"Mangudai\"},{\"value\":\"warElephant\",\"label\":\"War Elephant\"},{\"value\":\"samurai\",\"label\":\"Samurai\"},{\"value\":\"throwingAxeman\",\"label\":\"Throwing Axeman\"},{\"value\":\"teutonicKnight\",\"label\":\"Teutonic Knight\"},{\"value\":\"woadRaider\",\"label\":\"Woad Raider\"},{\"value\":\"condottiero\",\"label\":\"Condottiero\"},{\"value\":\"ratha\",\"label\":\"Ratha\"},{\"value\":\"caoCao\",\"label\":\"Cao Cao\"},{\"value\":\"liuBei\",\"label\":\"Liu Bei\"},{\"value\":\"sunJian\",\"label\":\"Sun Jian\"},{\"value\":\"eliteSteppeLancer\",\"label\":\"Elite Steppe Lancer\"},{\"value\":\"eliteCompositeBowman\",\"label\":\"Elite Composite Bowman\"},{\"value\":\"eliteMonaspa\",\"label\":\"Elite Monaspa\"},{\"value\":\"eliteCenturion\",\"label\":\"Elite Centurion\"},{\"value\":\"legionary\",\"label\":\"Legionary\"},{\"value\":\"heavyRocketCart\",\"label\":\"Heavy Rocket Cart\"},{\"value\":\"cavalier\",\"label\":\"Cavalier\"},{\"value\":\"manAtArms\",\"label\":\"Man-at-Arms\"},{\"value\":\"longSwordsman\",\"label\":\"Long Swordsman\"},{\"value\":\"crossbowman\",\"label\":\"Crossbowman\"},{\"value\":\"eliteSkirmisher\",\"label\":\"Elite Skirmisher\"},{\"value\":\"warGalley\",\"label\":\"War Galley\"},{\"value\":\"eliteOrganGun\",\"label\":\"Elite Organ Gun\"},{\"value\":\"eliteCaravel\",\"label\":\"Elite Caravel\"},{\"value\":\"eliteCamelArcher\",\"label\":\"Elite Camel Archer\"},{\"value\":\"eliteGenitour\",\"label\":\"Elite Genitour\"},{\"value\":\"eliteGbeto\",\"label\":\"Elite Gbeto\"},{\"value\":\"eliteShotelWarrior\",\"label\":\"Elite Shotel Warrior\"},{\"value\":\"eliteBallistaElephant\",\"label\":\"Elite Ballista Elephant\"},{\"value\":\"eliteKarambitWarrior\",\"label\":\"Elite Karambit Warrior\"},{\"value\":\"eliteArambai\",\"label\":\"Elite Arambai\"},{\"value\":\"eliteTigerCavalry\",\"label\":\"Elite Tiger Cavalry\"},{\"value\":\"eliteRattanArcher\",\"label\":\"Elite Rattan Archer\"},{\"value\":\"eliteBattleElephant\",\"label\":\"Elite Battle Elephant\"},{\"value\":\"cappedRam\",\"label\":\"Capped Ram\"},{\"value\":\"eliteKonnik\",\"label\":\"Elite Konnik\"},{\"value\":\"galleon\",\"label\":\"Galleon\"},{\"value\":\"eliteKeshik\",\"label\":\"Elite Keshik\"},{\"value\":\"scoutCavalry\",\"label\":\"Scout Cavalry\"},{\"value\":\"eliteKipchak\",\"label\":\"Elite Kipchak\"},{\"value\":\"eliteLeitis\",\"label\":\"Elite Leitis\"},{\"value\":\"eliteWhiteFeatherGuard\",\"label\":\"Elite White Feather Guard\"},{\"value\":\"eliteFireArcher\",\"label\":\"Elite Fire Archer\"},{\"value\":\"pikeman\",\"label\":\"Pikeman\"},{\"value\":\"halberdier\",\"label\":\"Halberdier\"},{\"value\":\"twoHandedSwordsman\",\"label\":\"Two-Handed Swordsman\"},{\"value\":\"heavyCavalryArcher\",\"label\":\"Heavy Cavalry Archer\"},{\"value\":\"eliteUrumiSwordsman\",\"label\":\"Elite Urumi Swordsman\"},{\"value\":\"heavyCamelRider\",\"label\":\"Heavy Camel Rider\"},{\"value\":\"arbalester\",\"label\":\"Arbalester\"},{\"value\":\"imperialCamelRider\",\"label\":\"Imperial Camel Rider\"},{\"value\":\"heavyDemolitionShip\",\"label\":\"Heavy Demolition Ship\"},{\"value\":\"eliteChakramThrower\",\"label\":\"Elite Chakram Thrower\"},{\"value\":\"fastFireShip\",\"label\":\"Fast Fire Ship\"},{\"value\":\"siegeElephant\",\"label\":\"Siege Elephant\"},{\"value\":\"eliteGhulam\",\"label\":\"Elite Ghulam\"},{\"value\":\"eliteShrivamshaRider\",\"label\":\"Elite Shrivamsha Rider\"},{\"value\":\"heavyScorpion\",\"label\":\"Heavy Scorpion\"},{\"value\":\"lightCavalry\",\"label\":\"Light Cavalry\"},{\"value\":\"siegeRam\",\"label\":\"Siege Ram\"},{\"value\":\"onager\",\"label\":\"Onager\"},{\"value\":\"eliteBoyar\",\"label\":\"Elite Boyar\"},{\"value\":\"eliteCataphract\",\"label\":\"Elite Cataphract\"},{\"value\":\"eliteChuKoNu\",\"label\":\"Elite Chu Ko Nu\"},{\"value\":\"eliteMameluke\",\"label\":\"Elite Mameluke\"},{\"value\":\"eliteHuskarl\",\"label\":\"Elite Huskarl\"},{\"value\":\"eliteJanissary\",\"label\":\"Elite Janissary\"},{\"value\":\"eliteLongbowman\",\"label\":\"Elite Longbowman\"},{\"value\":\"eliteLongboat\",\"label\":\"Elite Longboat\"},{\"value\":\"eliteMangudai\",\"label\":\"Elite Mangudai\"},{\"value\":\"eliteWarElephant\",\"label\":\"Elite War Elephant\"},{\"value\":\"eliteSamurai\",\"label\":\"Elite Samurai\"},{\"value\":\"eliteThrowingAxeman\",\"label\":\"Elite Throwing Axeman\"},{\"value\":\"eliteTeutonicKnight\",\"label\":\"Elite Teutonic Knight\"},{\"value\":\"eliteWoadRaider\",\"label\":\"Elite Woad Raider\"},{\"value\":\"champion\",\"label\":\"Champion\"},{\"value\":\"paladin\",\"label\":\"Paladin\"},{\"value\":\"siegeOnager\",\"label\":\"Siege Onager\"},{\"value\":\"eliteCoustillier\",\"label\":\"Elite Coustillier\"},{\"value\":\"eliteSerjeant\",\"label\":\"Elite Serjeant\"},{\"value\":\"eliteObuch\",\"label\":\"Elite Obuch\"},{\"value\":\"eliteHussiteWagon\",\"label\":\"Elite Hussite Wagon\"},{\"value\":\"eliteCannonGalleon\",\"label\":\"Elite Cannon Galleon\"},{\"value\":\"eliteBerserk\",\"label\":\"Elite Berserk\"},{\"value\":\"eliteIronPagoda\",\"label\":\"Elite Iron Pagoda\"},{\"value\":\"heavyHeiGuangCavalry\",\"label\":\"Heavy Hei Guang Cavalry\"},{\"value\":\"hussar\",\"label\":\"Hussar\"},{\"value\":\"eliteJaguarWarrior\",\"label\":\"Elite Jaguar Warrior\"},{\"value\":\"eagleWarrior\",\"label\":\"Eagle Warrior\"},{\"value\":\"eliteEagleWarrior\",\"label\":\"Elite Eagle Warrior\"},{\"value\":\"eliteTarkan\",\"label\":\"Elite Tarkan\"},{\"value\":\"eliteElephantArcher\",\"label\":\"Elite Elephant Archer\"},{\"value\":\"elitePlumedArcher\",\"label\":\"Elite Plumed Archer\"},{\"value\":\"eliteKamayuk\",\"label\":\"Elite Kamayuk\"},{\"value\":\"eliteConquistador\",\"label\":\"Elite Conquistador\"},{\"value\":\"eliteLiaoDao\",\"label\":\"Elite Liao Dao\"},{\"value\":\"eliteFireLancer\",\"label\":\"Elite Fire Lancer\"},{\"value\":\"eliteGenoeseCrossbowman\",\"label\":\"Elite Genoese Crossbowman\"},{\"value\":\"eliteWarWagon\",\"label\":\"Elite War Wagon\"},{\"value\":\"eliteMagyarHuszar\",\"label\":\"Elite Magyar Huszar\"},{\"value\":\"eliteTurtleShip\",\"label\":\"Elite Turtle Ship\"},{\"value\":\"eliteRatha\",\"label\":\"Elite Ratha\"}],\"resources\":[{\"value\":\"food\",\"label\":\"Food\"},{\"value\":\"wood\",\"label\":\"Wood\"},{\"value\":\"gold\",\"label\":\"Gold\"},{\"value\":\"stone\",\"label\":\"Stone\"},{\"value\":\"population\",\"label\":\"Population\"},{\"value\":\"builders\",\"label\":\"Builders\"},{\"value\":\"fishingShips\",\"label\":\"Fishing Ships\"}],\"ages\":[{\"value\":\"darkAge\",\"label\":\"Dark Age\"},{\"value\":\"feudalAge\",\"label\":\"Feudal Age\"},{\"value\":\"castleAge\",\"label\":\"Castle Age\"},{\"value\":\"imperialAge\",\"label\":\"Imperial Age\"}],\"tasks\":[{\"value\":\"sheep\",\"label\":\"Sheep\"},{\"value\":\"boar\",\"label\":\"Boar\"},{\"value\":\"deer\",\"label\":\"Deer\"},{\"value\":\"berries\",\"label\":\"Berries\"},{\"value\":\"farms\",\"label\":\"Farms\"},{\"value\":\"wood\",\"label\":\"Wood\"},{\"value\":\"gold\",\"label\":\"Gold\"},{\"value\":\"stone\",\"label\":\"Stone\"},{\"value\":\"build\",\"label\":\"Build\"},{\"value\":\"fish\",\"label\":\"Fish\"},{\"value\":\"forage\",\"label\":\"Forage\"},{\"value\":\"hunt\",\"label\":\"Hunt\"},{\"value\":\"lumber\",\"label\":\"Lumber\"},{\"value\":\"mine\",\"label\":\"Mine\"}],\"tradeActions\":[{\"value\":\"buy\",\"label\":\"Buy\"},{\"value\":\"sell\",\"label\":\"Sell\"}],\"animals\":[{\"value\":\"boar\",\"label\":\"Boar\"},{\"value\":\"deer\",\"label\":\"Deer\"},{\"value\":\"sheep\",\"label\":\"Sheep\"},{\"value\":\"wolf\",\"label\":\"Wolf\"}],\"civilizations\":[{\"value\":\"britons\",\"label\":\"Britons\"},{\"value\":\"franks\",\"label\":\"Franks\"},{\"value\":\"goths\",\"label\":\"Goths\"},{\"value\":\"teutons\",\"label\":\"Teutons\"},{\"value\":\"japanese\",\"label\":\"Japanese\"},{\"value\":\"chinese\",\"label\":\"Chinese\"},{\"value\":\"byzantines\",\"label\":\"Byzantines\"},{\"value\":\"persians\",\"label\":\"Persians\"},{\"value\":\"saracens\",\"label\":\"Saracens\"},{\"value\":\"turks\",\"label\":\"Turks\"},{\"value\":\"vikings\",\"label\":\"Vikings\"},{\"value\":\"mongols\",\"label\":\"Mongols\"},{\"value\":\"celts\",\"label\":\"Celts\"},{\"value\":\"spanish\",\"label\":\"Spanish\"},{\"value\":\"aztecs\",\"label\":\"Aztecs\"},{\"value\":\"maya\",\"label\":\"Maya\"},{\"value\":\"huns\",\"label\":\"Huns\"},{\"value\":\"koreans\",\"label\":\"Koreans\"},{\"value\":\"italians\",\"label\":\"Italians\"},{\"value\":\"hindustanis\",\"label\":\"Hindustanis\"},{\"value\":\"inca\",\"label\":\"Inca\"},{\"value\":\"magyars\",\"label\":\"Magyars\"},{\"value\":\"slavs\",\"label\":\"Slavs\"},{\"value\":\"portuguese\",\"label\":\"Portuguese\"},{\"value\":\"ethiopians\",\"label\":\"Ethiopians\"},{\"value\":\"malians\",\"label\":\"Malians\"},{\"value\":\"berbers\",\"label\":\"Berbers\"},{\"value\":\"khmer\",\"label\":\"Khmer\"},{\"value\":\"malay\",\"label\":\"Malay\"},{\"value\":\"burmese\",\"label\":\"Burmese\"},{\"value\":\"vietnamese\",\"label\":\"Vietnamese\"},{\"value\":\"bulgarians\",\"label\":\"Bulgarians\"},{\"value\":\"tatars\",\"label\":\"Tatars\"},{\"value\":\"cumans\",\"label\":\"Cumans\"},{\"value\":\"lithuanians\",\"label\":\"Lithuanians\"},{\"value\":\"burgundians\",\"label\":\"Burgundians\"},{\"value\":\"sicilians\",\"label\":\"Sicilians\"},{\"value\":\"poles\",\"label\":\"Poles\"},{\"value\":\"bohemians\",\"label\":\"Bohemians\"},{\"value\":\"dravidians\",\"label\":\"Dravidians\"},{\"value\":\"bengalis\",\"label\":\"Bengalis\"},{\"value\":\"gurjaras\",\"label\":\"Gurjaras\"},{\"value\":\"romans\",\"label\":\"Romans\"},{\"value\":\"armenians\",\"label\":\"Armenians\"},{\"value\":\"georgians\",\"label\":\"Georgians\"},{\"value\":\"shu\",\"label\":\"Shu\"},{\"value\":\"wu\",\"label\":\"Wu\"},{\"value\":\"wei\",\"label\":\"Wei\"},{\"value\":\"jurchens\",\"label\":\"Jurchens\"},{\"value\":\"khitans\",\"label\":\"Khitans\"}]}"));}),
"[project]/src/lib/text.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "toTitleCaseLabel": ()=>toTitleCaseLabel
});
const ACRONYM_PATTERN = /^[A-Z0-9]+$/;
const SMALL_WORDS = new Set([
    "a",
    "an",
    "and",
    "as",
    "at",
    "but",
    "by",
    "for",
    "from",
    "in",
    "into",
    "nor",
    "of",
    "on",
    "or",
    "per",
    "than",
    "the",
    "to",
    "vs",
    "with"
]);
function toTitleCaseLabel(input) {
    if (!input) {
        return "";
    }
    const normalizedInput = input.normalize("NFKC");
    const WORD_REGEX = /[A-Za-z0-9']+/g;
    const matches = Array.from(normalizedInput.matchAll(WORD_REGEX));
    if (matches.length === 0) {
        return normalizedInput;
    }
    const totalWords = matches.length;
    let lastIndex = 0;
    let forceCapNext = true;
    const parts = [];
    for(let index = 0; index < totalWords; index++){
        const match = matches[index];
        const word = match[0];
        var _match_index;
        const start = (_match_index = match.index) !== null && _match_index !== void 0 ? _match_index : 0;
        const end = start + word.length;
        const lower = word.toLowerCase();
        const isFirst = index === 0;
        const isLast = index === totalWords - 1;
        const preceding = normalizedInput.slice(lastIndex, start);
        const hasTerminalPunctuation = /[:.!?]/.test(preceding);
        if (hasTerminalPunctuation) {
            forceCapNext = true;
        }
        const isSmallWord = SMALL_WORDS.has(lower);
        const isAcronym = !isSmallWord && (ACRONYM_PATTERN.test(word) && word.length <= 4 || word === word.toUpperCase());
        const shouldForce = forceCapNext || isFirst;
        parts.push(normalizedInput.slice(lastIndex, start));
        let transformed = word;
        if (!isAcronym) {
            if (isSmallWord && !shouldForce && !isLast) {
                transformed = lower;
            } else {
                transformed = lower.charAt(0).toUpperCase() + lower.slice(1);
            }
        } else {
            transformed = word.toUpperCase();
        }
        parts.push(transformed);
        lastIndex = end;
        var _matches__index;
        const nextStart = index + 1 < totalWords ? (_matches__index = matches[index + 1].index) !== null && _matches__index !== void 0 ? _matches__index : normalizedInput.length : normalizedInput.length;
        const between = normalizedInput.slice(end, nextStart);
        forceCapNext = /[:.!?]/.test(between);
    }
    parts.push(normalizedInput.slice(lastIndex));
    return parts.join("");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/gameConstants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GAME_CONSTANTS": ()=>GAME_CONSTANTS,
    "getAgeLabel": ()=>getAgeLabel,
    "getAnimalLabel": ()=>getAnimalLabel,
    "getBuildingLabel": ()=>getBuildingLabel,
    "getGameConstantLabel": ()=>getGameConstantLabel,
    "getResourceLabel": ()=>getResourceLabel,
    "getTaskLabel": ()=>getTaskLabel,
    "getTechnologyLabel": ()=>getTechnologyLabel,
    "getTradeActionLabel": ()=>getTradeActionLabel,
    "getUnitLabel": ()=>getUnitLabel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gameConstants$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/gameConstants.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/text.ts [app-client] (ecmascript)");
;
;
const rawGameConstants = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gameConstants$2e$json__$28$json$29$__["default"];
const sortByLabel = function() {
    let items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return [
        ...items
    ].sort((a, b)=>a.label.localeCompare(b.label));
};
const normalizeItems = function() {
    let items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return items.map((item)=>({
            ...item,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])(item.label || "")
        }));
};
const GAME_CONSTANTS = {
    ...rawGameConstants,
    technologies: sortByLabel(normalizeItems(rawGameConstants.technologies)),
    buildings: sortByLabel(normalizeItems(rawGameConstants.buildings)),
    units: sortByLabel(normalizeItems(rawGameConstants.units)),
    resources: sortByLabel(normalizeItems(rawGameConstants.resources)),
    ages: sortByLabel(normalizeItems(rawGameConstants.ages)),
    tasks: sortByLabel(normalizeItems(rawGameConstants.tasks)),
    tradeActions: sortByLabel(normalizeItems(rawGameConstants.tradeActions)),
    animals: sortByLabel(normalizeItems(rawGameConstants.animals))
};
function getTechnologyLabel(value) {
    const tech = GAME_CONSTANTS.technologies.find((t)=>t.value === value);
    return tech ? tech.label : value.charAt(0).toUpperCase() + value.slice(1);
}
function getBuildingLabel(value) {
    const building = GAME_CONSTANTS.buildings.find((b)=>b.value === value);
    return building ? building.label : value.charAt(0).toUpperCase() + value.slice(1);
}
function getUnitLabel(value) {
    const unit = GAME_CONSTANTS.units.find((u)=>u.value === value);
    return unit ? unit.label : value.charAt(0).toUpperCase() + value.slice(1);
}
function getResourceLabel(value) {
    const resource = GAME_CONSTANTS.resources.find((r)=>r.value === value);
    return resource ? resource.label : value.charAt(0).toUpperCase() + value.slice(1);
}
function getAgeLabel(value) {
    const age = GAME_CONSTANTS.ages.find((a)=>a.value === value);
    return age ? age.label : value.charAt(0).toUpperCase() + value.slice(1);
}
function getTaskLabel(value) {
    const task = GAME_CONSTANTS.tasks.find((t)=>t.value === value);
    return task ? task.label : value.charAt(0).toUpperCase() + value.slice(1);
}
function getTradeActionLabel(value) {
    const action = GAME_CONSTANTS.tradeActions.find((a)=>a.value === value);
    return action ? action.label : value.charAt(0).toUpperCase() + value.slice(1);
}
function getAnimalLabel(value) {
    const animal = GAME_CONSTANTS.animals.find((a)=>a.value === value);
    return animal ? animal.label : value.charAt(0).toUpperCase() + value.slice(1);
}
function getGameConstantLabel(category, value) {
    const item = GAME_CONSTANTS[category].find((item)=>item.value === value);
    return item ? item.label : value.charAt(0).toUpperCase() + value.slice(1);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/stepParser.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertTaskToReadableText": ()=>convertTaskToReadableText,
    "createStepFromString": ()=>createStepFromString,
    "formatStepDescription": ()=>formatStepDescription,
    "parseCamelCaseStep": ()=>parseCamelCaseStep
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/text.ts [app-client] (ecmascript)");
;
function convertCamelCaseToReadable(camelCaseString) {
    // Insert spaces before capital letters and numbers
    const readable = camelCaseString.replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase -> camel Case
    .replace(/([a-zA-Z])(\d)/g, '$1 $2') // letter followed by number -> letter number  
    .replace(/(\d)([a-zA-Z])/g, '$1 $2'); // number followed by letter -> number letter
    // Split into words and apply smart capitalization
    const words = readable.split(/\s+/);
    const capitalizedWords = words.map((word, index)=>smartCapitalize(word, index === 0));
    return capitalizedWords.join(' ');
}
const SPECIAL_TASK_LABELS = {
    foodundertc: "Food Under TC"
};
function convertTaskToReadableText(taskString) {
    const normalizedTask = taskString.trim().toLowerCase();
    if (SPECIAL_TASK_LABELS[normalizedTask]) {
        return SPECIAL_TASK_LABELS[normalizedTask];
    }
    const readable = convertCamelCaseToReadable(taskString);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])(readable);
}
function parseCamelCaseStep(stepName) {
    const info = {
        action: stepName
    };
    // Extract numbers (amounts, counts)
    const numberMatch = stepName.match(/(\d+)/);
    if (numberMatch) {
        info.amount = parseInt(numberMatch[1]);
    }
    // Extract resource names
    const resourcePatterns = [
        'gold',
        'food',
        'wood',
        'stone'
    ];
    for (const resource of resourcePatterns){
        if (stepName.toLowerCase().includes(resource)) {
            info.resource = resource;
            break;
        }
    }
    // Extract building names
    const buildingPatterns = [
        'barracks',
        'range',
        'archeryrange',
        'stable',
        'market',
        'blacksmith',
        'mill',
        'lumbercamp',
        'miningcamp',
        'dock',
        'monastery',
        'university',
        'castle',
        'towncenter',
        'house',
        'farm',
        'wall',
        'gate',
        'tower'
    ];
    for (const building of buildingPatterns){
        if (stepName.toLowerCase().includes(building)) {
            info.building = building;
            break;
        }
    }
    // Extract unit names
    const unitPatterns = [
        'villager',
        'militia',
        'archer',
        'spearman',
        'scout',
        'knight',
        'crossbow',
        'longsword',
        'pikeman',
        'cavalry',
        'monk'
    ];
    for (const unit of unitPatterns){
        if (stepName.toLowerCase().includes(unit)) {
            info.unit = unit;
            break;
        }
    }
    // Extract conditions (after/when/before/if)
    const conditionMatch = stepName.match(/after([A-Z][a-z]*)/i);
    if (conditionMatch) {
        info.condition = conditionMatch[1].toLowerCase();
    }
    // Determine action based on common patterns
    if (stepName.toLowerCase().includes('collect')) {
        info.action = 'collect';
    } else if (stepName.toLowerCase().includes('build')) {
        info.action = 'build';
    } else if (stepName.toLowerCase().includes('train')) {
        info.action = 'train';
    } else if (stepName.toLowerCase().includes('research')) {
        info.action = 'research';
    } else if (stepName.toLowerCase().includes('move')) {
        info.action = 'move';
    } else if (stepName.toLowerCase().includes('lure')) {
        info.action = 'lure';
    }
    return info;
}
function createStepFromString(stepName, resources) {
    const parsed = parseCamelCaseStep(stepName);
    // Try to determine step type based on parsed information
    if (parsed.building && parsed.action === 'build') {
        return {
            type: "build",
            buildings: [
                {
                    type: parsed.building,
                    count: parsed.amount || 1
                }
            ],
            resources
        };
    }
    if (parsed.unit && parsed.action === 'train') {
        return {
            type: "trainUnit",
            unit: parsed.unit,
            count: parsed.amount || 1,
            resources
        };
    }
    // Default to custom step for unrecognized patterns
    return {
        type: "custom",
        text: stepName.replace(/([A-Z])/g, ' $1').trim(),
        resources
    };
}
// Special game terms that should be capitalized
const SPECIAL_TERMS = {
    resources: [
        'gold',
        'food',
        'wood',
        'stone',
        'tree'
    ],
    buildings: [
        'barracks',
        'range',
        'archeryrange',
        'stable',
        'market',
        'blacksmith',
        'mill',
        'lumbercamp',
        'miningcamp',
        'dock',
        'monastery',
        'university',
        'castle',
        'towncenter',
        'house',
        'farm',
        'wall',
        'gate',
        'tower',
        'outpost',
        'wonder',
        'feitoria',
        'krepost',
        'donjon'
    ],
    units: [
        'villager',
        'militia',
        'archer',
        'spearman',
        'scout',
        'knight',
        'crossbow',
        'longsword',
        'pikeman',
        'cavalry',
        'monk',
        'catapult',
        'trebuchet',
        'bombard',
        'cannon',
        'galley',
        'warship',
        'transport'
    ],
    technologies: [
        'loom',
        'wheelbarrow',
        'handcart',
        'horsecollar',
        'heavyplow',
        'croppotation',
        'doubleribtaxes',
        'coinage',
        'banking',
        'guilds',
        'forging',
        'ironsting',
        'blastfurnace',
        'scalemailarmor',
        'chainmailarmor',
        'platemailarmor',
        'fletching',
        'boddkinpoint',
        'bracer',
        'paddedarcherarmor',
        'leatherarcherarmor',
        'ringarcherarmor'
    ],
    ages: [
        'darkage',
        'feudalage',
        'castleage',
        'imperialage'
    ]
};
function isSpecialTerm(word) {
    const lowerWord = word.toLowerCase();
    return SPECIAL_TERMS.resources.includes(lowerWord) || SPECIAL_TERMS.buildings.includes(lowerWord) || SPECIAL_TERMS.units.includes(lowerWord) || SPECIAL_TERMS.technologies.includes(lowerWord) || SPECIAL_TERMS.ages.includes(lowerWord);
}
function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function smartCapitalize(word) {
    let isFirstWord = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (isFirstWord || isSpecialTerm(word)) {
        return capitalizeWord(word);
    }
    return word.toLowerCase();
}
function formatBuildingName(building) {
    // Handle special building names
    const buildingMap = {
        'barracks': 'Barracks',
        'archeryrange': 'Archery Range',
        'range': 'Archery Range',
        'stable': 'Stable',
        'market': 'Market',
        'blacksmith': 'Blacksmith',
        'mill': 'Mill',
        'lumbercamp': 'Lumber Camp',
        'miningcamp': 'Mining Camp',
        'dock': 'Dock',
        'monastery': 'Monastery',
        'university': 'University',
        'castle': 'Castle',
        'towncenter': 'Town Center',
        'house': 'House',
        'farm': 'Farm'
    };
    return buildingMap[building.toLowerCase()] || capitalizeWord(building);
}
function formatStepDescription(step) {
    switch(step.type){
        default:
            return '';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/pluralization.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Pluralization utility for Age of Empires II unit and building names
 */ __turbopack_context__.s({
    "pluralize": ()=>pluralize
});
const IRREGULAR_PLURALS = {
    // Units ending in -man
    Spearman: "Spearmen",
    Militiaman: "Militiamen",
    Longbowman: "Longbowmen",
    "Jian Swordsman": "Jian Swordsmen",
    "Urumi Swordsman": "Urumi Swordsmen",
    "Throwing Axeman": "Throwing Axemen",
    "Genoese Crossbowman": "Genoese Crossbowmen",
    // Compound units
    "Man-at-Arms": "Men-at-Arms",
    // Units that don't change in plural
    Militia: "Militia",
    // Buildings ending in -s (already plural-looking)
    Barracks: "Barracks",
    // Buildings with irregular plurals
    "Fortified Church": "Fortified Churches",
    // Buildings that are always plural or don't change
    Wall: "Walls",
    Gate: "Gates"
};
function pluralize(name) {
    let count = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    if (count === 1) {
        return name;
    }
    // Check for irregular plurals first
    if (name in IRREGULAR_PLURALS) {
        return IRREGULAR_PLURALS[name];
    }
    // Words ending in 's', 'x', 'z', 'ch', 'sh' typically add 'es'
    if (/[sxz]$|[cs]h$/.test(name)) {
        return "".concat(name, "es");
    }
    // Words ending in consonant + 'y' change to 'ies'
    if (/[^aeiou]y$/i.test(name)) {
        return name.slice(0, -1) + "ies";
    }
    // Default: add 's'
    return "".concat(name, "s");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/specialUnits.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SINGLE_UNIT_ONLY_UNITS": ()=>SINGLE_UNIT_ONLY_UNITS
});
const SINGLE_UNIT_ONLY_UNITS = new Set([
    "sunJian",
    "caoCao",
    "liuBei"
]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/stepDescriptions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "describeBuildStep": ()=>describeBuildStep
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gameConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stepParser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pluralization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$specialUnits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/specialUnits.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const MOVE_TASK_LABELS = {
    boar: {
        singular: "Boar",
        plural: "Boars"
    },
    sheep: {
        singular: "Sheep",
        plural: "Sheep"
    },
    deer: {
        singular: "Deer",
        plural: "Deer"
    },
    chicken: {
        singular: "Chicken",
        plural: "Chickens"
    },
    fox: {
        singular: "Fox",
        plural: "Foxes"
    },
    berries: {
        singular: "Berry",
        plural: "Berries"
    },
    farms: {
        singular: "Farm",
        plural: "Farms"
    },
    wood: {
        singular: "Wood",
        plural: "Wood"
    },
    shorefish: {
        singular: "Shore Fish",
        plural: "Shore Fish"
    },
    gold: {
        singular: "Gold",
        plural: "Gold"
    },
    stone: {
        singular: "Stone",
        plural: "Stone"
    },
    stragglertree: {
        singular: "Straggler Tree",
        plural: "Straggler Trees"
    },
    forward: {
        singular: "Forward",
        plural: "Forward"
    },
    foodundertc: {
        singular: "Food Under TC",
        plural: "Food Under TC"
    }
};
function formatMoveTaskLabel(task, count) {
    const normalized = (task || "").trim().toLowerCase();
    if (!normalized) {
        return count === 1 ? "Task" : "Tasks";
    }
    if (normalized === "build") {
        return count === 1 ? "Builder" : "Builders";
    }
    const labels = MOVE_TASK_LABELS[normalized];
    if (labels) {
        const value = count === 1 ? labels.singular : labels.plural || labels.singular;
        return value;
    }
    const readable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTaskToReadableText"])(task || "");
    if (count === 1) {
        return readable;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(readable, count);
}
function describeBuildStep(step, index) {
    let currentVillagerCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const prefixOptional = (text)=>{
        if (!text) return text;
        if (!step.optional) return text;
        if (/^optional:\s*/i.test(text)) return text;
        return "Optional: ".concat(text);
    };
    switch(step.type){
        case "newVillagers":
            {
                let description = "";
                if (step.buildings && step.buildings.length > 0) {
                    const buildingText = step.buildings.map((b)=>{
                        const buildingName = b.type === "archeryRange" ? "Range" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingLabel"])(b.type);
                        if (b.count > 1) {
                            return "".concat(b.count, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(buildingName, b.count));
                        }
                        return buildingName;
                    }).join(" + ");
                    if (step.task.toLowerCase() === "build") {
                        description = "".concat(step.count, " Build").concat(step.count > 1 ? "" : "s", " ").concat(buildingText);
                    } else {
                        const taskName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTaskToReadableText"])(step.task);
                        description = "".concat(buildingText, " + ").concat(step.count, " on ").concat(taskName);
                    }
                } else {
                    const taskName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTaskToReadableText"])(step.task);
                    if (step.task.toLowerCase() === "boar") {
                        description = "".concat(step.count, " Lure").concat(step.count === 1 ? "s" : "", " Boar");
                    } else {
                        description = "".concat(step.count, " on ").concat(taskName);
                    }
                }
                return prefixOptional(description);
            }
        case "moveVillagers":
            {
                const normalizedFrom = (step.from || "").toLowerCase();
                const normalizedTo = (step.to || "").toLowerCase();
                let moveDescription = "";
                if (normalizedTo === "farms" || normalizedTo === "farm") {
                    const farmText = step.count === 1 ? "Farm" : "Farms";
                    if (normalizedFrom === "sheep" || normalizedFrom === "boar" || normalizedFrom === "deer") {
                        moveDescription = "Seed ".concat(step.count, " ").concat(farmText, " with Villagers under TC");
                    } else {
                        let villagerType = "";
                        switch(normalizedFrom){
                            case "wood":
                                villagerType = "Lumberjack";
                                break;
                            case "berries":
                            case "food":
                                villagerType = "Forager";
                                break;
                            case "gold":
                                villagerType = "Gold Miner";
                                break;
                            case "stone":
                                villagerType = "Stone Miner";
                                break;
                            case "build":
                                villagerType = "Builder";
                                break;
                            default:
                                villagerType = formatMoveTaskLabel(step.from, 1);
                        }
                        moveDescription = "Seed ".concat(step.count, " ").concat(farmText, " with ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(villagerType, step.count));
                    }
                } else {
                    const fromResourceText = formatMoveTaskLabel(step.from, step.count);
                    const toResourceText = formatMoveTaskLabel(step.to, step.count);
                    moveDescription = "".concat(step.count, " ").concat(fromResourceText, " → ").concat(toResourceText);
                }
                if (step.buildings && step.buildings.length > 0) {
                    const buildingText = step.buildings.map((b)=>{
                        const buildingName = b.type === "archeryRange" ? "Range" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingLabel"])(b.type);
                        if (b.count > 1) {
                            return "".concat(b.count, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(buildingName, b.count));
                        }
                        return buildingName;
                    }).join(" + ");
                    return prefixOptional("".concat(moveDescription, " + ").concat(buildingText));
                }
                return prefixOptional(moveDescription);
            }
        case "lure":
            {
                const lureStep = step;
                const animal = (lureStep.animal || "").toLowerCase();
                const animalName = animal.charAt(0).toUpperCase() + animal.slice(1);
                if (animal === "boar") {
                    return prefixOptional("Lure Boar With Villager Under TC");
                }
                if (animal === "deer") {
                    const pushCount = Math.max(Number(lureStep.count) || 1, 1);
                    return prefixOptional("Push ".concat(pushCount, " Deer With Your Scout"));
                }
                return prefixOptional("".concat(lureStep.count, " Lure").concat(lureStep.count === 1 ? "s" : "", " ").concat(animalName));
            }
        case "research":
            {
                const techNames = step.tech.map((tech)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTechnologyLabel"])(tech));
                return prefixOptional("Research ".concat(techNames.join(" + ")));
            }
        case "ageUp":
            {
                const ageName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeLabel"])(step.age);
                if (step.age === "feudalAge") {
                    return prefixOptional("Research ".concat(currentVillagerCount + 1, " Pop ").concat(ageName));
                }
                return prefixOptional("Research ".concat(ageName));
            }
        case "newAge":
            if (!options.includeAgeTransitions) {
                return "";
            }
            return prefixOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeLabel"])(step.age));
        case "build":
            {
                const buildingText = step.buildings.map((b)=>{
                    const buildingName = b.type === "archeryRange" ? "Range" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingLabel"])(b.type);
                    if (b.count > 1) {
                        return "".concat(b.count, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(buildingName, b.count));
                    }
                    return buildingName;
                }).join(" + ");
                return prefixOptional(buildingText);
            }
        case "custom":
            return prefixOptional(step.text || "Step ".concat(index + 1));
        case "trade":
            {
                const actionText = step.action === "sell" ? "Sell" : "Buy";
                const resourceName = step.resource.charAt(0).toUpperCase() + step.resource.slice(1);
                return prefixOptional("".concat(actionText, " ").concat(step.count, " ").concat(resourceName));
            }
        case "trainUnit":
            {
                const unitName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitLabel"])(step.unit);
                if (step.count === "∞" || step.count === "unlimited") {
                    return prefixOptional("Start Training ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(unitName)));
                }
                const isSingleUnit = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$specialUnits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_UNIT_ONLY_UNITS"].has(step.unit);
                const displayCount = isSingleUnit || step.count === 1 ? "" : "".concat(step.count, " ");
                const unitText = step.count === 1 ? unitName : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(unitName, Number(step.count));
                return prefixOptional("Train ".concat(displayCount).concat(unitText).trim());
            }
        case "collectGold":
            {
                const goldStep = step;
                return prefixOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTaskToReadableText"])(goldStep.task));
            }
        case "decision":
            return prefixOptional(step.text || "Decision ".concat(index + 1));
        default:
            {
                const unknownStep = step;
                if (unknownStep.task && typeof unknownStep.task === "string") {
                    const taskString = unknownStep.task;
                    return prefixOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTaskToReadableText"])(taskString));
                }
                const resources = unknownStep.resources || {
                    food: 0,
                    wood: 0,
                    gold: 0,
                    stone: 0,
                    build: 0
                };
                if (unknownStep.type && typeof unknownStep.type === "string") {
                    const stepType = unknownStep.type;
                    const parsedStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStepFromString"])(stepType, resources);
                    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatStepDescription"])(parsedStep);
                    if (description) return prefixOptional(description);
                }
                for(const key in unknownStep){
                    const value = unknownStep[key];
                    if (typeof value === "string" && key !== "type" && key !== "task" && value.length > 3) {
                        const directConversion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTaskToReadableText"])(value);
                        if (directConversion && directConversion !== value) {
                            return prefixOptional(directConversion);
                        }
                        const parsedStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStepFromString"])(value, resources);
                        const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatStepDescription"])(parsedStep);
                        if (description) return prefixOptional(description);
                    }
                }
                return prefixOptional("Step ".concat(index + 1));
            }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BuildStepRenderer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BuildStepRenderer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepDescriptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stepDescriptions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BuildStepRenderer(param) {
    let { step, index, usedResources, currentVillagerCount = 3, resourceVisibility = {} } = param;
    _s();
    const [isHovered, setIsHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const resources = step.resources;
    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepDescriptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeBuildStep"])(step, index, currentVillagerCount);
    // Don't render empty rows (like newAge steps)
    if (!description) {
        return null;
    }
    const displayText = step.optional ? "Optional: ".concat(description) : description;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "transition-colors ".concat(isHovered ? "bg-muted" : ""),
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-0.5 px-2 sm:px-4 text-xs sm:text-base text-foreground text-pretty whitespace-normal",
                children: displayText
            }, void 0, false, {
                fileName: "[project]/src/components/BuildStepRenderer.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            usedResources.map((resource)=>{
                const resourceValue = resources[resource];
                const shouldShowNormally = resourceVisibility[resource] && resourceValue > 0;
                const shouldShowOnHover = isHovered && resourceValue > 0;
                const shouldShow = shouldShowNormally || shouldShowOnHover;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "py-0.5 px-1 sm:px-4 text-center text-xs sm:text-sm align-middle w-[1%] whitespace-nowrap min-w-[2rem] sm:min-w-[3rem] font-medium",
                    children: shouldShow ? resourceValue : ""
                }, resource, false, {
                    fileName: "[project]/src/components/BuildStepRenderer.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-0.5 px-3 text-center text-sm align-middle w-[1%] whitespace-nowrap hidden sm:table-cell font-medium",
                children: currentVillagerCount
            }, void 0, false, {
                fileName: "[project]/src/components/BuildStepRenderer.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BuildStepRenderer.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(BuildStepRenderer, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = BuildStepRenderer;
var _c;
__turbopack_context__.k.register(_c, "BuildStepRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ResourceIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ResourceIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/imageUtils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ResourceIcon(param) {
    let { resource, width = 20, height = 20, className } = param;
    const imagePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceImagePath"])(resource);
    if (!imagePath) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: imagePath,
        alt: resource,
        width: width,
        height: height,
        className: "mx-auto object-contain ".concat(className || ""),
        style: {
            width: "".concat(width, "px"),
            height: "".concat(height, "px")
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ResourceIcon.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = ResourceIcon;
var _c;
__turbopack_context__.k.register(_c, "ResourceIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ValidationWarnings.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ValidationWarnings
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ValidationWarnings(param) {
    let { errors, title } = param;
    if (errors.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background rounded-default shadow-default overflow-hidden p-6 mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start space-x-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-cancel",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ValidationWarnings.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ValidationWarnings.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ValidationWarnings.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-foreground mb-3",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ValidationWarnings.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: errors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/80 text-sm text-pretty",
                                    children: error.message
                                }, index, false, {
                                    fileName: "[project]/src/components/ValidationWarnings.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ValidationWarnings.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ValidationWarnings.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ValidationWarnings.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ValidationWarnings.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ValidationWarnings;
var _c;
__turbopack_context__.k.register(_c, "ValidationWarnings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BuildDisplay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BuildDisplay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BuildStepRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BuildStepRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResourceIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResourceIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buildValidation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ValidationWarnings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ValidationWarnings.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function BuildDisplay(param) {
    let { build } = param;
    if (!build.build || build.build.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "No build steps defined for this build."
        }, void 0, false, {
            fileName: "[project]/src/components/BuildDisplay.tsx",
            lineNumber: 30,
            columnNumber: 12
        }, this);
    }
    // Validate the build and collect any errors/warnings
    const validationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateBuildOrder"])(build.build, build.civilization);
    // If there are validation errors, show only the errors and don't render the build
    if (!validationResult.isValid) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ValidationWarnings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            errors: validationResult.errors,
            title: "Cannot Display Build Order"
        }, void 0, false, {
            fileName: "[project]/src/components/BuildDisplay.tsx",
            lineNumber: 38,
            columnNumber: 12
        }, this);
    }
    const groupStepsByAge = (steps, startingAge)=>{
        const sections = [];
        let currentSteps = [];
        let currentSectionTitle = startingAge || "Dark Age";
        let isInTransition = false;
        let transitionTitle = "";
        steps.forEach((step)=>{
            if (step.type === "ageUp") {
                // Add ageUp step to current section (research belongs to current age)
                currentSteps.push(step);
                // Save current section with the ageUp step
                sections.push({
                    title: currentSectionTitle,
                    steps: [
                        ...currentSteps
                    ]
                });
                currentSteps = [];
                // Start transition phase
                transitionTitle = step.age === "feudalAge" ? "Advance to Feudal Age" : step.age === "castleAge" ? "Advance to Castle Age" : "Advance to Imperial Age";
                currentSectionTitle = transitionTitle;
                isInTransition = true;
            } else if (step.type === "newAge") {
                // End transition phase, save "Advance to [Age]" section
                if (isInTransition && currentSteps.length > 0) {
                    sections.push({
                        title: currentSectionTitle,
                        steps: [
                            ...currentSteps
                        ],
                        isTransition: true
                    });
                    currentSteps = [];
                }
                // Start actual age section
                currentSectionTitle = step.age === "feudalAge" ? "Feudal Age" : step.age === "castleAge" ? "Castle Age" : "Imperial Age";
                isInTransition = false;
            } else {
                // Regular step - add to current accumulation
                currentSteps.push(step);
            }
        });
        // Add any remaining steps
        if (currentSteps.length > 0) {
            sections.push({
                title: currentSectionTitle,
                steps: currentSteps,
                isTransition: isInTransition
            });
        }
        return sections;
    };
    const getCurrentAge = (steps)=>{
        let currentAge = "Dark Age";
        steps.forEach((step)=>{
            if (step.type === "newAge") {
                currentAge = step.age === "feudalAge" ? "Feudal Age" : step.age === "castleAge" ? "Castle Age" : "Imperial Age";
            }
        });
        return currentAge;
    };
    const groupStepsByAlternatives = (steps)=>{
        const alternatives = [];
        let currentSteps = [];
        let currentDecisionText = undefined;
        let stepsBeforeFirstDecision = [];
        steps.forEach((step)=>{
            if (step.type === "decision") {
                // If this is the first decision, save steps before it
                if (alternatives.length === 0 && currentSteps.length > 0) {
                    stepsBeforeFirstDecision = [
                        ...currentSteps
                    ];
                }
                // If we have accumulated steps, create an alternative from them
                if (currentSteps.length > 0) {
                    const currentAge = getCurrentAge(stepsBeforeFirstDecision);
                    const sections = groupStepsByAge(currentSteps, currentAge);
                    alternatives.push({
                        decisionText: currentDecisionText,
                        sections: sections
                    });
                    currentSteps = [];
                }
                // Set the decision text for the next alternative
                currentDecisionText = step.text;
            } else {
                // Accumulate non-decision steps
                currentSteps.push(step);
            }
        });
        // Add any remaining steps as the final alternative
        if (currentSteps.length > 0) {
            const currentAge = getCurrentAge(stepsBeforeFirstDecision);
            const sections = groupStepsByAge(currentSteps, currentAge);
            alternatives.push({
                decisionText: currentDecisionText,
                sections: sections
            });
        }
        return alternatives;
    };
    const getUsedResources = (steps)=>{
        const allResourceTypes = [
            "food",
            "wood",
            "gold",
            "stone",
            "build"
        ];
        const usedResources = new Set();
        steps.forEach((step)=>{
            allResourceTypes.forEach((resourceType)=>{
                if (step.resources[resourceType] > 0) {
                    usedResources.add(resourceType);
                }
            });
        });
        // Return in consistent order
        return allResourceTypes.filter((resource)=>usedResources.has(resource));
    };
    // Check if build has decision steps
    const hasDecisions = build.build.some((step)=>step.type === "decision");
    const alternatives = hasDecisions ? groupStepsByAlternatives(build.build) : null;
    const ageSections = hasDecisions ? null : groupStepsByAge(build.build);
    const usedResources = getUsedResources(build.build);
    // Check which specific resources changed compared to previous step
    const getResourceVisibility = (current, previous)=>{
        if (!previous || !current.resources || !previous.resources) {
            // Show all resources for first step
            return {
                food: true,
                wood: true,
                gold: true,
                stone: true,
                build: true
            };
        }
        return {
            food: current.resources.food !== previous.resources.food,
            wood: current.resources.wood !== previous.resources.wood,
            gold: current.resources.gold !== previous.resources.gold,
            stone: current.resources.stone !== previous.resources.stone,
            build: current.resources.build !== previous.resources.build
        };
    };
    // Calculate villager counts for each step
    const calculateVillagerCount = (steps, stepIndex)=>{
        if (stepIndex < 0) return 3;
        const currentStep = steps[stepIndex];
        if (!currentStep || !currentStep.resources) return 3;
        // Sum up all villagers from resources (food, wood, gold, stone, build)
        const totalVillagers = currentStep.resources.food + currentStep.resources.wood + currentStep.resources.gold + currentStep.resources.stone + currentStep.resources.build;
        return totalVillagers;
    };
    // Render function for age sections (each section becomes its own table)
    const renderAgeSection = (section, sectionIndex, globalStepIndex, previousStep)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-background rounded-default shadow-default overflow-hidden overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full table-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-3 px-4 sm:px-6 sm:py-4 text-left text-sm font-semibold text-foreground rounded-tl-default",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            section.isTransition ? // For "Advance to [Age]" sections, show previous age → next age
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-1",
                                                children: [
                                                    section.title.includes("Feudal") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/Ages/dark_age_de.png",
                                                                alt: "Dark Age",
                                                                width: 24,
                                                                height: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-foreground text-sm font-bold",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/Ages/feudal_age_de.png",
                                                                alt: "Feudal Age",
                                                                width: 24,
                                                                height: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    section.title.includes("Castle") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/Ages/feudal_age_de.png",
                                                                alt: "Feudal Age",
                                                                width: 24,
                                                                height: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-foreground text-sm font-bold",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/Ages/castle_age_de.png",
                                                                alt: "Castle Age",
                                                                width: 24,
                                                                height: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    section.title.includes("Imperial") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/Ages/castle_age_de.png",
                                                                alt: "Castle Age",
                                                                width: 24,
                                                                height: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-foreground text-sm font-bold",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/Ages/imperial_age_de.png",
                                                                alt: "Imperial Age",
                                                                width: 24,
                                                                height: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this) : // For regular age sections, show single age icon
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    section.title.includes("Dark") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/Ages/dark_age_de.png",
                                                        alt: "Dark Age",
                                                        width: 24,
                                                        height: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BuildDisplay.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 23
                                                    }, this),
                                                    section.title.includes("Feudal") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/Ages/feudal_age_de.png",
                                                        alt: "Feudal Age",
                                                        width: 24,
                                                        height: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BuildDisplay.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 23
                                                    }, this),
                                                    section.title.includes("Castle") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/Ages/castle_age_de.png",
                                                        alt: "Castle Age",
                                                        width: 24,
                                                        height: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BuildDisplay.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 23
                                                    }, this),
                                                    section.title.includes("Imperial") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/Ages/imperial_age_de.png",
                                                        alt: "Imperial Age",
                                                        width: 24,
                                                        height: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BuildDisplay.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground text-pretty hidden sm:inline",
                                                children: section.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BuildDisplay.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BuildDisplay.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                usedResources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-1 sm:px-4 text-center align-middle w-[1%] whitespace-nowrap min-w-[2rem] sm:min-w-[3rem]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 sm:w-6 sm:h-6 mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResourceIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                resource: resource,
                                                width: 16,
                                                height: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BuildDisplay.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this)
                                    }, resource, false, {
                                        fileName: "[project]/src/components/BuildDisplay.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-3 px-3 text-center align-middle w-[1%] whitespace-nowrap rounded-tr-default hidden sm:table-cell",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/Res/Aoe2de_villagers.png",
                                            alt: "Total Villagers",
                                            width: 16,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BuildDisplay.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BuildDisplay.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BuildDisplay.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BuildDisplay.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuildDisplay.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: section.steps.map((step, stepIndex)=>{
                            const currentVillagerCount = calculateVillagerCount(build.build, globalStepIndex.current);
                            const resourceVisibility = getResourceVisibility(step, previousStep.current);
                            const component = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BuildStepRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                step: step,
                                index: stepIndex,
                                usedResources: usedResources,
                                currentVillagerCount: currentVillagerCount,
                                resourceVisibility: resourceVisibility
                            }, "".concat(sectionIndex, "-").concat(stepIndex), false, {
                                fileName: "[project]/src/components/BuildDisplay.tsx",
                                lineNumber: 381,
                                columnNumber: 15
                            }, this);
                            previousStep.current = step;
                            globalStepIndex.current++;
                            return component;
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuildDisplay.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BuildDisplay.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        }, sectionIndex, false, {
            fileName: "[project]/src/components/BuildDisplay.tsx",
            lineNumber: 245,
            columnNumber: 5
        }, this);
    if (hasDecisions && alternatives) {
        // Render alternative paths
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: alternatives.map((alternative, altIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        alternative.decisionText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary text-foreground px-4 py-3 font-bold text-lg text-center mb-2",
                            children: alternative.decisionText
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuildDisplay.tsx",
                            lineNumber: 407,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: (()=>{
                                const globalStepIndex = {
                                    current: 0
                                };
                                const previousStep = {
                                    current: null
                                };
                                return alternative.sections.map((section, sectionIndex)=>renderAgeSection(section, sectionIndex, globalStepIndex, previousStep));
                            })()
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuildDisplay.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this)
                    ]
                }, altIndex, true, {
                    fileName: "[project]/src/components/BuildDisplay.tsx",
                    lineNumber: 404,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/BuildDisplay.tsx",
            lineNumber: 402,
            columnNumber: 7
        }, this);
    } else {
        // Render single path (no decisions)
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: (()=>{
                const globalStepIndex = {
                    current: 0
                };
                const previousStep = {
                    current: null
                };
                return ageSections.map((section, sectionIndex)=>renderAgeSection(section, sectionIndex, globalStepIndex, previousStep));
            })()
        }, void 0, false, {
            fileName: "[project]/src/components/BuildDisplay.tsx",
            lineNumber: 434,
            columnNumber: 7
        }, this);
    }
}
_c = BuildDisplay;
var _c;
__turbopack_context__.k.register(_c, "BuildDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AlternativeCheckpointDisplay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AlternativeCheckpointDisplay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResourceIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResourceIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/imageUtils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
// Resource Component
const ResourceItem = (param)=>{
    let { resource, count, note, difference } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2 sm:space-x-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-muted px-2 py-1 rounded-default min-w-14 sm:min-w-16 flex items-center justify-center space-x-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResourceIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        resource: resource,
                        width: 20,
                        height: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-foreground font-medium text-xs sm:text-sm",
                        children: count
                    }, void 0, false, {
                        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            difference !== undefined && difference !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium ".concat(difference > 0 ? "text-foreground" : "text-cancel"),
                children: [
                    difference > 0 ? "+" : "",
                    difference
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-foreground text-xs sm:text-base",
                children: note
            }, void 0, false, {
                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ResourceItem;
// Text Component
const TextNote = (param)=>{
    let { text } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-foreground text-xs sm:text-base text-pretty",
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = TextNote;
// Phase Component
const BuildPhase = (param)=>{
    let { checkpoint, index, previousCheckpoint } = param;
    const resources = [
        "food",
        "wood",
        "gold",
        "stone",
        "builders",
        "fishingShips"
    ];
    const getResourceNote = (resource)=>{
        const noteKey = "".concat(resource, "Note");
        const note = checkpoint.villagers[noteKey];
        return typeof note === "string" ? note : undefined;
    };
    const hasResourceChanges = ()=>{
        if (!previousCheckpoint) return true; // Always show first checkpoint resources
        return resources.some((resource)=>{
            const current = checkpoint.villagers[resource] || 0;
            const previous = previousCheckpoint.villagers[resource] || 0;
            return current !== previous;
        });
    };
    const hasResourceNotes = ()=>{
        return resources.some((resource)=>{
            const note = getResourceNote(resource);
            return note && note.trim() !== "";
        });
    };
    const shouldShowResources = hasResourceChanges() || hasResourceNotes();
    const hasGenericNotes = checkpoint.genericNotes && checkpoint.genericNotes.length > 0;
    const shouldShowCheckpoint = shouldShowResources || hasGenericNotes;
    // Don't render checkpoint if there's nothing to show
    if (!shouldShowCheckpoint) {
        return null;
    }
    const getResourceDifference = (resource)=>{
        if (!previousCheckpoint) return undefined;
        const currentCount = checkpoint.villagers[resource];
        const previousCount = previousCheckpoint.villagers[resource];
        return currentCount - previousCount;
    };
    const getPhaseTitle = (type, index)=>{
        if (!type) return "Step ".concat((index || 0) + 1);
        const titleMap = {
            dark_age: "Dark Age",
            feudal_age: "Feudal Age",
            castle_age: "Castle Age",
            imperial_age: "Imperial Age",
            dark_age_to_feudal_age: "Advance to Feudal Age",
            feudal_age_to_castle_age: "Advance to Castle Age",
            castle_age_to_imperial_age: "Advance to Imperial Age"
        };
        return titleMap[type] || "Step ".concat((index || 0) + 1);
    };
    const renderAgeIcon = (type)=>{
        if (!type) return null;
        if (type.includes("_to_")) {
            const [startAge, endAge] = type.split("_to_");
            const startIconSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeImagePath"])(startAge);
            const endIconSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeImagePath"])(endAge);
            if (!startIconSrc || !endIconSrc) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: startIconSrc,
                        alt: startAge,
                        width: 24,
                        height: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-foreground text-sm font-bold",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: endIconSrc,
                        alt: endAge,
                        width: 24,
                        height: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        const iconSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeImagePath"])(type);
        if (!iconSrc) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: iconSrc,
            alt: type,
            width: 24,
            height: 24
        }, void 0, false, {
            fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
            lineNumber: 161,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background rounded-default shadow-default overflow-hidden mb-4 sm:mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-muted px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2 min-w-0 flex-1",
                    children: [
                        checkpoint.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-1 sm:space-x-2 flex-shrink-0",
                            children: renderAgeIcon(checkpoint.type)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-foreground text-pretty truncate",
                            children: getPhaseTitle(checkpoint.type, index)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-6",
                children: [
                    shouldShowResources && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 sm:space-y-3",
                        children: resources.map((resource)=>{
                            const count = checkpoint.villagers[resource];
                            if (count > 0) {
                                const note = getResourceNote(resource);
                                const difference = getResourceDifference(resource);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceItem, {
                                    resource: resource,
                                    count: count,
                                    note: note,
                                    difference: difference
                                }, resource, false, {
                                    fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                                    lineNumber: 193,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                            return null;
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasGenericNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: shouldShowResources ? "mt-4 sm:mt-6" : "",
                        children: [
                            shouldShowResources && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-px bg-muted mb-3 sm:mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 sm:space-y-2 list-disc list-inside",
                                children: checkpoint.genericNotes.map((note, noteIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextNote, {
                                        text: note
                                    }, noteIndex, false, {
                                        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = BuildPhase;
function AlternativeCheckpointDisplay(param) {
    let { alternatives } = param;
    // Get common checkpoints from the first alternative (they're the same for all)
    const commonCheckpoints = alternatives.length > 0 && alternatives[0].commonCheckpoints ? alternatives[0].commonCheckpoints : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            commonCheckpoints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-background rounded-default overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 sm:space-y-6 p-4 sm:p-6",
                    children: commonCheckpoints.map((checkpoint, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildPhase, {
                            checkpoint: checkpoint,
                            index: index,
                            previousCheckpoint: index > 0 ? commonCheckpoints[index - 1] : undefined
                        }, index, false, {
                            fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                            lineNumber: 238,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                    lineNumber: 236,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this),
            alternatives.map((alternative, altIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background rounded-default overflow-hidden",
                    children: [
                        alternative.decisionText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary text-foreground px-4 py-3 font-bold text-lg text-center",
                            children: alternative.decisionText
                        }, void 0, false, {
                            fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 sm:space-y-6 p-4 sm:p-6",
                            children: alternative.checkpoints.map((checkpoint, index)=>{
                                // For the first alternative checkpoint, use the last common checkpoint as context
                                // For subsequent checkpoints, use the previous checkpoint within the alternative
                                const getPreviousCheckpoint = ()=>{
                                    if (index > 0) {
                                        return alternative.checkpoints[index - 1];
                                    }
                                    // For first checkpoint, use last common checkpoint if available
                                    return commonCheckpoints.length > 0 ? commonCheckpoints[commonCheckpoints.length - 1] : undefined;
                                };
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildPhase, {
                                    checkpoint: checkpoint,
                                    index: index,
                                    previousCheckpoint: getPreviousCheckpoint()
                                }, index, false, {
                                    fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                                    lineNumber: 273,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    ]
                }, altIndex, true, {
                    fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AlternativeCheckpointDisplay.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_c3 = AlternativeCheckpointDisplay;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ResourceItem");
__turbopack_context__.k.register(_c1, "TextNote");
__turbopack_context__.k.register(_c2, "BuildPhase");
__turbopack_context__.k.register(_c3, "AlternativeCheckpointDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/buildConverter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertStepsToAlternativeCheckpoints": ()=>convertStepsToAlternativeCheckpoints,
    "convertStepsToCheckpoints": ()=>convertStepsToCheckpoints
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gameConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stepParser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pluralization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buildValidation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$specialUnits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/specialUnits.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/text.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const STANDARD_OPENING_FOOD_VILLAGERS = 6;
const FOOD_SOURCE_LABELS = {
    deer: {
        singular: "Deer",
        plural: "Deer"
    },
    fox: {
        singular: "Fox",
        plural: "Foxes"
    },
    chicken: {
        singular: "Chicken",
        plural: "Chickens"
    },
    shorefish: {
        singular: "Shore Fish",
        plural: "Shore Fish"
    }
};
function createEmptyFoodActions() {
    return {
        pushDeer: 0,
        pushDeerOptional: false,
        takeAssignments: {
            deer: 0,
            fox: 0,
            chicken: 0,
            shorefish: 0
        },
        takeAssignmentsOptional: {
            deer: false,
            fox: false,
            chicken: false,
            shorefish: false
        }
    };
}
function normalizeFoodSource(value) {
    if (typeof value !== "string") {
        return null;
    }
    const normalized = value.toLowerCase().replace(/[^a-z]/g, "");
    switch(normalized){
        case "deer":
            return "deer";
        case "fox":
            return "fox";
        case "chicken":
            return "chicken";
        case "shorefish":
            return "shorefish";
        default:
            return null;
    }
}
function parseCount(value) {
    if (typeof value === "number") {
        return Number.isFinite(value) ? value : 0;
    }
    if (typeof value === "string") {
        const parsed = parseInt(value, 10);
        return Number.isNaN(parsed) ? 0 : parsed;
    }
    return 0;
}
function extractPositiveCount(value) {
    let defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const parsed = parseCount(value);
    if (parsed > 0) {
        return parsed;
    }
    return defaultValue;
}
function formatPushSegment(count) {
    const normalized = Math.max(1, Math.floor(count) || 1);
    return "Push ".concat(normalized, " Deer");
}
function formatTakeSegment(source, count) {
    const labels = FOOD_SOURCE_LABELS[source];
    const normalizedCount = Math.max(1, Math.floor(count) || 1);
    const villagerLabel = normalizedCount === 1 ? "Villager" : "Villagers";
    const resourceLabel = normalizedCount === 1 ? labels.singular : labels.plural;
    return "Take ".concat(resourceLabel, " with ").concat(normalizedCount, " ").concat(villagerLabel);
}
function formatOpeningFoodNote(villagerCount) {
    let expectedCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : STANDARD_OPENING_FOOD_VILLAGERS;
    if (villagerCount < expectedCount) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])("Only ".concat(villagerCount, " villagers on food initially"));
    }
    if (villagerCount > expectedCount) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])("Put ".concat(villagerCount, " villagers on food initially"));
    }
    return undefined;
}
function createEmptyVillagerDistribution() {
    return {
        food: 0,
        wood: 0,
        gold: 0,
        stone: 0,
        builders: 0,
        fishingShips: 0
    };
}
function mapAgeToTransitionType(targetAge) {
    const normalizedAge = targetAge.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");
    switch(normalizedAge){
        case "castle_age":
            return "feudal_age_to_castle_age";
        case "imperial_age":
            return "castle_age_to_imperial_age";
        default:
            return "dark_age_to_feudal_age";
    }
}
function updateVillagersFromResources(villagers, resources, foodNote, woodNote) {
    return {
        food: resources.food,
        wood: resources.wood,
        gold: resources.gold,
        stone: resources.stone,
        builders: resources.build,
        fishingShips: 0,
        foodNote: foodNote,
        woodNote: woodNote
    };
}
function isFarmSeedingStep(step) {
    const stepData = step;
    // Check for moveVillagers with to: 'farm'/'farms'
    if (step.type === "moveVillagers") {
        if (typeof stepData.to !== "string") return false;
        const destination = stepData.to.toLowerCase();
        return destination === "farm" || destination === "farms";
    }
    // Check for newVillagers with task: 'farm'/'farms'
    if (step.type === "newVillagers") {
        if (typeof stepData.task !== "string") return false;
        const task = stepData.task.toLowerCase();
        return task === "farm" || task === "farms";
    }
    return false;
}
function getFarmCountFromStep(step) {
    if (!isFarmSeedingStep(step)) return 0;
    const stepData = step;
    return typeof stepData.count === "number" ? stepData.count : 0;
}
function isWoodAssignmentStep(step) {
    const stepData = step;
    // Check for moveVillagers with to: 'wood'
    if (step.type === "moveVillagers") {
        if (typeof stepData.to !== "string") return false;
        const destination = stepData.to.toLowerCase();
        return destination === "wood";
    }
    // Check for newVillagers with task: 'wood'
    if (step.type === "newVillagers") {
        if (typeof stepData.task !== "string") return false;
        const task = stepData.task.toLowerCase();
        return task === "wood";
    }
    return false;
}
function getWoodCountFromStep(step) {
    if (!isWoodAssignmentStep(step)) return 0;
    const stepData = step;
    return typeof stepData.count === "number" ? stepData.count : 0;
}
function countBuildingTypeFromStep(step, buildingType) {
    let count = 0;
    if (step.type === "build" && step.buildings) {
        step.buildings.forEach((building)=>{
            if (building.type === buildingType) {
                count += building.count || 1;
            }
        });
    } else if (step.type === "newVillagers" && step.buildings) {
        step.buildings.forEach((building)=>{
            if (building.type === buildingType) {
                count += building.count || 1;
            }
        });
    }
    return count;
}
function hasBarracksInStep(step) {
    // Check for explicit barracks buildings
    if ((step.type === "build" || step.type === "newVillagers" || step.type === "moveVillagers") && step.buildings) {
        return step.buildings.some((building)=>building.type === "barracks");
    }
    return false;
}
function hasMillInStep(step, civilization) {
    // Check for explicit mill/folwark buildings
    if ((step.type === "build" || step.type === "newVillagers" || step.type === "moveVillagers") && step.buildings) {
        const hasMill = step.buildings.some((building)=>{
            // For Poles, only check for folwarks (they don't use mills)
            if (civilization === "Poles") {
                return building.type === "folwark";
            }
            // For other civilizations, check for mills
            return building.type === "mill";
        });
        if (hasMill) return true;
    }
    return false;
}
function extractBuildingsFromStep(step, currentCheckpointType, civilization, stepIndex, firstBarracksStepIndex, firstMillStepIndex) {
    const actions = [];
    if ((step.type === "build" || step.type === "newVillagers" || step.type === "moveVillagers") && step.buildings) {
        step.buildings.forEach((building)=>{
            // Skip houses as they're not strategically significant
            if (building.type === "house") return;
            // For Poles: skip folwarks (handled in food notes), but show mills normally
            if (civilization === "Poles" && building.type === "folwark") return;
            // For other civs: skip mills (handled in food notes), but show folwarks normally
            if (civilization !== "Poles" && building.type === "mill") return;
            // Skip lumber camps, mining camps, and mule carts in checkpoint notes
            if (building.type === "lumberCamp" || building.type === "miningCamp" || building.type === "muleCart") {
                return;
            }
            const buildingName = formatBuildingName(building.type);
            // Check if this is a wall type
            const isWallType = building.type === "wall" || building.type === "palisadeWall" || building.type === "stoneWall" || building.type === "fortifiedWall" || building.type === "greatWall" || building.type === "gate";
            // Special handling for building content
            let content;
            if (isWallType) {
                // Walls always show as "Build a [Wall Type]" without count
                content = "Build a ".concat(buildingName);
            } else if (building.type === "barracks" && firstBarracksStepIndex !== null && firstMillStepIndex !== null && firstBarracksStepIndex < firstMillStepIndex) {
                // Special handling for barracks - check if it should be "Build Barracks before Mill"
                content = building.count > 1 ? "Build ".concat(building.count, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(buildingName, building.count), " before Mill") : "Build ".concat(buildingName, " before Mill");
            } else {
                // Default case - "Build [BuildingName]"
                content = building.count > 1 ? "Build ".concat(building.count, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(buildingName, building.count)) : "Build ".concat(buildingName);
            }
            actions.push({
                stepIndex,
                type: 'building',
                content,
                optional: step.optional,
                buildingType: building.type,
                buildingCount: building.count
            });
        });
    }
    return actions;
}
function extractResearchFromStep(step, stepIndex) {
    const actions = [];
    if (step.type === "research" && step.tech) {
        step.tech.forEach((tech)=>{
            const techName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTechnologyLabel"])(tech);
            actions.push({
                stepIndex,
                type: 'research',
                content: "Research ".concat(techName),
                optional: step.optional
            });
        });
    }
    return actions;
}
function extractUnitsFromStep(step, stepIndex) {
    const actions = [];
    if (step.type === "trainUnit") {
        const unitName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gameConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitLabel"])(step.unit);
        let content;
        if (step.count === "∞" || step.count === "unlimited") {
            content = "Start Training ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(unitName));
        } else {
            const isSingleUnit = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$specialUnits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_UNIT_ONLY_UNITS"].has(step.unit);
            const count = Number(step.count);
            const displayCount = isSingleUnit || count === 1 ? "" : "".concat(count, " ");
            const unitText = count === 1 ? unitName : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pluralization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralize"])(unitName, count);
            content = "Train ".concat(displayCount).concat(unitText).trim();
        }
        actions.push({
            stepIndex,
            type: 'unit',
            content,
            optional: step.optional
        });
    }
    return actions;
}
function extractNotesFromStep(step, stepIndex) {
    const actions = [];
    // Process collectGold type steps
    const unknownStep = step;
    if (unknownStep.type === "collectGold") {
        const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stepParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTaskToReadableText"])(unknownStep.task);
        actions.push({
            stepIndex,
            type: 'note',
            content: description,
            optional: step.optional
        });
    }
    // Process trade type steps
    if (step.type === "trade") {
        const actionText = step.action === "sell" ? "Sell" : "Buy";
        const resourceName = step.resource.charAt(0).toUpperCase() + step.resource.slice(1);
        const content = "".concat(actionText, " ").concat(step.count, " ").concat(resourceName);
        actions.push({
            stepIndex,
            type: 'note',
            content,
            optional: step.optional
        });
    }
    return actions;
}
function formatBuildingName(buildingType) {
    // Handle special cases and formatting
    const buildingMap = {
        archeryRange: "Range",
        barracks: "Barracks",
        stable: "Stable",
        siegeWorkshop: "Siege Workshop",
        blacksmith: "Blacksmith",
        market: "Market",
        monastery: "Monastery",
        university: "University",
        castle: "Castle",
        townCenter: "Town Center",
        mill: "Mill",
        lumberCamp: "Lumber Camp",
        miningCamp: "Mining Camp",
        dock: "Dock",
        house: "House",
        farm: "Farm",
        muleCart: "Mule Cart",
        folwark: "Folwark",
        fortifiedChurch: "Fortified Church",
        caravanserai: "Caravanserai",
        watchTower: "Watch Tower",
        guardTower: "Guard Tower",
        donjon: "Donjon",
        feitoria: "Feitoria",
        krepost: "Krepost",
        harbor: "Harbor",
        pasture: "Pasture",
        wall: "Wall",
        palisadeWall: "Palisade Wall",
        stoneWall: "Stone Wall",
        fortifiedWall: "Fortified Wall",
        greatWall: "Great Wall",
        gate: "Gate",
        tower: "Tower"
    };
    return buildingMap[buildingType] || buildingType.charAt(0).toUpperCase() + buildingType.slice(1);
}
function consolidateBuildings(buildingsList) {
    if (buildingsList.length === 0) return "";
    const buildingCounts = new Map();
    const buildingOrder = [];
    buildingsList.forEach((buildingString)=>{
        // Parse building string like "Build Barracks", "Build 2 Ranges", or "Build a Wall"
        const match = buildingString.match(/^Build (?:a |(\d+) )?(.+)$/);
        if (!match) return;
        const countStr = match[1];
        const buildingName = match[2];
        const count = countStr ? parseInt(countStr) : 1;
        // For walls (strings starting with "Build a"), deduplicate per wall type
        // Only add once per checkpoint, ignore additional instances
        const isWall = buildingString.startsWith("Build a ");
        if (buildingCounts.has(buildingName)) {
            if (isWall) {
                // For walls, don't increment count - just deduplicate
                return;
            } else {
                // For non-walls, sum the counts
                buildingCounts.set(buildingName, buildingCounts.get(buildingName) + count);
            }
        } else {
            buildingCounts.set(buildingName, count);
            buildingOrder.push(buildingName);
        }
    });
    const buildingParts = buildingOrder.map((buildingName)=>{
        const count = buildingCounts.get(buildingName);
        if (count > 1) {
            // If count > 1, the buildingName extracted from the string is already plural
            // Don't pluralize again - just use it as-is
            return "".concat(count, " ").concat(buildingName);
        } else {
            return buildingName;
        }
    });
    return "Build ".concat(buildingParts.join(" + "));
}
function consolidateResearch(researchList) {
    if (researchList.length === 0) return "";
    const researchCounts = new Map();
    const researchOrder = [];
    researchList.forEach((researchString)=>{
        // Parse research string like "Research Bloodlines" or "Research Forging"
        const match = researchString.match(/^Research (.+)$/);
        if (!match) return;
        const techName = match[1];
        if (researchCounts.has(techName)) {
            researchCounts.set(techName, researchCounts.get(techName) + 1);
        } else {
            researchCounts.set(techName, 1);
            researchOrder.push(techName);
        }
    });
    const researchParts = researchOrder.map((techName)=>{
        const count = researchCounts.get(techName);
        if (count > 1) {
            return "".concat(count, " ").concat(techName);
        } else {
            return techName;
        }
    });
    return "Research ".concat(researchParts.join(" + "));
}
function consolidateUnits(unitsList) {
    if (unitsList.length === 0) return "";
    const unitCounts = new Map();
    const unitOrder = [];
    const continuousUnits = [];
    unitsList.forEach((unitString)=>{
        // Handle continuous training like "Start Training Villagers"
        const continuousMatch = unitString.match(/^Start Training (.+)$/);
        if (continuousMatch) {
            continuousUnits.push(continuousMatch[1]);
            return;
        }
        // Parse unit string like "Train 5 Archers" or "Train Scout"
        const match = unitString.match(/^Train (?:(\d+) )?(.+)$/);
        if (!match) return;
        const countStr = match[1];
        const unitName = match[2];
        const count = countStr ? parseInt(countStr, 10) : 1;
        if (unitCounts.has(unitName)) {
            unitCounts.set(unitName, unitCounts.get(unitName) + count);
        } else {
            unitCounts.set(unitName, count);
            unitOrder.push(unitName);
        }
    });
    const parts = [];
    // Add counted units
    if (unitOrder.length > 0) {
        const unitParts = unitOrder.map((unitName)=>{
            const count = unitCounts.get(unitName);
            if (count === 1) {
                return unitName;
            }
            return "".concat(count, " ").concat(unitName);
        });
        parts.push("Train ".concat(unitParts.join(" + ")));
    }
    // Add continuous units
    if (continuousUnits.length > 0) {
        parts.push("Start Training ".concat(continuousUnits.join(" + ")));
    }
    return parts.join(" | ");
}
function consolidateChronologicalActions(actions) {
    if (actions.length === 0) return [];
    // Sort by step index to maintain chronological order
    const sortedActions = [
        ...actions
    ].sort((a, b)=>a.stepIndex - b.stepIndex);
    // Group consecutive actions of the same type and optional status for consolidation
    const groups = [];
    let currentGroup = null;
    sortedActions.forEach((action)=>{
        const isOptional = action.optional || false;
        if (!currentGroup || currentGroup.type !== action.type || currentGroup.optional !== isOptional) {
            currentGroup = {
                type: action.type,
                optional: isOptional,
                actions: [
                    action
                ]
            };
            groups.push(currentGroup);
        } else {
            currentGroup.actions.push(action);
        }
    });
    // Consolidate each group and maintain order
    return groups.map((group)=>{
        const contents = group.actions.map((action)=>action.content);
        let consolidated;
        switch(group.type){
            case 'building':
                consolidated = consolidateBuildings(contents);
                break;
            case 'research':
                consolidated = consolidateResearch(contents);
                break;
            case 'unit':
                consolidated = consolidateUnits(contents);
                break;
            case 'note':
                consolidated = contents.join(' | '); // Don't consolidate notes, just join
                break;
            default:
                consolidated = contents.join(' | ');
        }
        // Add "Optional:" prefix if this group is optional
        return group.optional && consolidated ? "Optional: ".concat(consolidated) : consolidated;
    }).filter((result)=>result !== '');
}
function villagersAreEqual(a, b) {
    return a.food === b.food && a.wood === b.wood && a.gold === b.gold && a.stone === b.stone && a.builders === b.builders && a.fishingShips === b.fishingShips;
}
// Step lookup utility functions
function generateFoodNote(checkpointType, checkpointFarmsSeeded, totalFarmsSeeded, checkpointHasMill, hasEverBuiltMill, civilization, checkpointFarmsOptional) {
    // Get the correct building name based on civilization
    const buildingName = civilization === "Poles" ? "Folwark" : "Mill";
    // Calculate new farm total if farms are being seeded
    const newTotalFarms = checkpointFarmsSeeded > 0 ? totalFarmsSeeded + checkpointFarmsSeeded : totalFarmsSeeded;
    // Generate farm note component
    const farmNote = checkpointFarmsSeeded > 0 ? totalFarmsSeeded === 0 ? "Seed ".concat(newTotalFarms, " Farm").concat(newTotalFarms === 1 ? "" : "s") : "Go up to ".concat(newTotalFarms, " Farm").concat(newTotalFarms === 1 ? "" : "s") : null;
    let resultNote;
    if (checkpointType === "dark_age") {
        // Rule 1: Dark Age + No Mill/Folwark = "Skip Mill"/"Skip Folwark"
        if (!checkpointHasMill) {
            resultNote = farmNote ? "Skip ".concat(buildingName, " + ").concat(farmNote) : "Skip ".concat(buildingName);
        } else {
            // Rule 2: Dark Age + Mill/Folwark Built = no building note, farms only
            resultNote = farmNote ? "Seed ".concat(newTotalFarms, " Farm").concat(newTotalFarms === 1 ? "" : "s") : undefined;
        }
    } else {
        // Post-Dark Age
        // Rule 3: First mill/folwark ever built = "Build Mill"/"Build Folwark"
        if (checkpointHasMill && !hasEverBuiltMill) {
            resultNote = farmNote ? "Build ".concat(buildingName, " + ").concat(farmNote) : "Build ".concat(buildingName);
        } else {
            // Rule 4: No mill/folwark or subsequent mill/folwark = farms only
            if (checkpointFarmsSeeded > 0) {
                if (totalFarmsSeeded === 0) {
                    // First time seeding farms
                    resultNote = "Seed ".concat(newTotalFarms, " Farm").concat(newTotalFarms === 1 ? "" : "s");
                } else {
                    // Adding more farms
                    resultNote = "Go up to ".concat(newTotalFarms, " Farm").concat(newTotalFarms === 1 ? "" : "s");
                }
            }
        }
    }
    // Add "Optional:" prefix if farms are optional and we have a note
    if (checkpointFarmsOptional && resultNote) {
        resultNote = "Optional: ".concat(resultNote);
    }
    // Apply title case to the final note
    if (resultNote) {
        resultNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])(resultNote);
    }
    return {
        foodNote: resultNote,
        newTotalFarms
    };
}
function buildResourceNotes(baseNote, actions, openingFoodNote) {
    const foodSegments = [];
    const deerSegments = [];
    const otherFoodSegments = [];
    const farmSegments = [];
    const goldSegments = [];
    const openingSegments = [];
    if (openingFoodNote && openingFoodNote.trim().length > 0) {
        openingSegments.push(openingFoodNote);
    }
    if (actions.pushDeer > 0) {
        let segment = formatPushSegment(actions.pushDeer);
        if (actions.pushDeerOptional) {
            segment = "Optional: ".concat(segment);
        }
        deerSegments.push(segment);
    } else {
        const deerAssignments = actions.takeAssignments.deer;
        if (deerAssignments > 0) {
            let segment = formatTakeSegment("deer", deerAssignments);
            if (actions.takeAssignmentsOptional.deer) {
                segment = "Optional: ".concat(segment);
            }
            deerSegments.push(segment);
        }
    }
    const takeOrder = [
        "deer",
        "fox",
        "chicken",
        "shorefish"
    ];
    takeOrder.forEach((source)=>{
        if (source === "deer") {
            return;
        }
        if (source === "fox") {
            const count = actions.takeAssignments[source];
            if (count > 0) {
                let segment = formatTakeSegment(source, count);
                if (actions.takeAssignmentsOptional[source]) {
                    segment = "Optional: ".concat(segment);
                }
                goldSegments.push(segment);
            }
            return;
        }
        const count = actions.takeAssignments[source];
        if (count > 0) {
            let segment = formatTakeSegment(source, count);
            if (actions.takeAssignmentsOptional[source]) {
                segment = "Optional: ".concat(segment);
            }
            otherFoodSegments.push(segment);
        }
    });
    if (baseNote && baseNote.trim().length > 0) {
        farmSegments.push(baseNote);
    }
    foodSegments.push(...openingSegments);
    foodSegments.push(...deerSegments);
    foodSegments.push(...otherFoodSegments);
    foodSegments.push(...farmSegments);
    return {
        foodNote: foodSegments.length > 0 ? foodSegments.join(" + ") : undefined,
        goldNote: goldSegments.length > 0 ? goldSegments.join(" + ") : undefined
    };
}
function preprocessStepsForTracking(steps, civilization) {
    let firstBarracksStepIndex = null;
    let firstMillStepIndex = null;
    for(let i = 0; i < steps.length; i++){
        const step = steps[i];
        // Skip decision steps
        if (step.type === "decision") {
            continue;
        }
        // Track first barracks occurrence
        if (firstBarracksStepIndex === null && hasBarracksInStep(step)) {
            firstBarracksStepIndex = i;
        }
        // Track first mill occurrence (including berry-implied mills)
        if (firstMillStepIndex === null && hasMillInStep(step, civilization)) {
            firstMillStepIndex = i;
        }
        // Early exit if we found both
        if (firstBarracksStepIndex !== null && firstMillStepIndex !== null) {
            break;
        }
    }
    return {
        firstBarracksStepIndex,
        firstMillStepIndex
    };
}
function convertStepsToCheckpoints(steps, civilization, startingAge, options) {
    // Validate build for common issues
    if (!(options === null || options === void 0 ? void 0 : options.skipValidation)) {
        var _options_validateWithSteps;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndThrow"])((_options_validateWithSteps = options === null || options === void 0 ? void 0 : options.validateWithSteps) !== null && _options_validateWithSteps !== void 0 ? _options_validateWithSteps : steps);
    }
    // Preprocess steps to collect tracking data
    const trackingData = preprocessStepsForTracking(steps, civilization);
    var _options_hasPriorSteps;
    const hasPriorSteps = (_options_hasPriorSteps = options === null || options === void 0 ? void 0 : options.hasPriorSteps) !== null && _options_hasPriorSteps !== void 0 ? _options_hasPriorSteps : false;
    const initialCheckpointType = startingAge || "dark_age";
    const shouldTrackOpeningFood = !hasPriorSteps && initialCheckpointType === "dark_age";
    const checkpoints = [];
    const state = {
        currentCheckpointType: initialCheckpointType,
        chronologicalActions: [],
        lastCheckpointCreated: null,
        dark_ageLumberCampCount: 0,
        currentStepIndex: 0,
        currentCheckpointHasMill: false,
        hasEverBuiltMill: false,
        firstBarracksStepIndex: trackingData.firstBarracksStepIndex,
        firstMillStepIndex: trackingData.firstMillStepIndex,
        hasEverBuiltBarracks: trackingData.firstBarracksStepIndex !== null
    };
    let currentVillagers = createEmptyVillagerDistribution();
    let lastAgeVillagers = createEmptyVillagerDistribution();
    let lastTransitionVillagers = createEmptyVillagerDistribution();
    let pendingTransition = null;
    let openingFoodNote;
    let openingFoodNoteApplied = false;
    let hasCapturedOpeningFood = false;
    let maxFoodBeforeNonFood = 0;
    // Farm tracking
    let totalFarmsSeeded = 0;
    let checkpointFarmsSeeded = 0;
    let checkpointFarmsOptional = false;
    let checkpointFoodActions = createEmptyFoodActions();
    // Wood tranche tracking (only for age checkpoints, not transitions)
    let woodTranches = [];
    const captureOpeningFoodNote = (step)=>{
        if (!shouldTrackOpeningFood || hasCapturedOpeningFood) {
            return;
        }
        const { food, wood, gold, stone, build } = step.resources;
        const hasNonFoodVillagers = wood > 0 || gold > 0 || stone > 0 || build > 0;
        if (!hasNonFoodVillagers) {
            if (food > maxFoodBeforeNonFood) {
                maxFoodBeforeNonFood = food;
            }
            return;
        }
        const foodCountBeforeNonFood = maxFoodBeforeNonFood > 0 ? maxFoodBeforeNonFood : food;
        const note = formatOpeningFoodNote(foodCountBeforeNonFood);
        if (note) {
            openingFoodNote = note;
        }
        hasCapturedOpeningFood = true;
    };
    const consumeOpeningFoodNote = ()=>{
        if (openingFoodNoteApplied || !openingFoodNote) {
            return undefined;
        }
        openingFoodNoteApplied = true;
        return openingFoodNote;
    };
    for(let i = 0; i < steps.length; i++){
        const step = steps[i];
        state.currentStepIndex = i;
        // Skip decision steps in linear checkpoint conversion
        if (step.type === "decision") {
            continue;
        }
        // Note: Barracks and mill tracking is now done in preprocessing phase
        // Track farm seeding
        if (isFarmSeedingStep(step)) {
            const farmCount = getFarmCountFromStep(step);
            checkpointFarmsSeeded += farmCount;
            // Track if farms are optional (all contributions must be optional to mark as optional)
            if (step.optional && checkpointFarmsSeeded === farmCount) {
                checkpointFarmsOptional = true;
            } else if (!step.optional) {
                checkpointFarmsOptional = false;
            }
        }
        // Track wildlife-related food actions
        if (step.type === "lure") {
            const targetAnimal = normalizeFoodSource(step.animal);
            if (targetAnimal) {
                const rawCount = step.count;
                const methodValue = step.method;
                const normalizedMethod = methodValue === "push" || methodValue === "villagers" ? methodValue : targetAnimal === "deer" ? "push" : "villagers";
                if (targetAnimal === "deer" && normalizedMethod === "push") {
                    const pushCount = extractPositiveCount(rawCount, 1);
                    if (pushCount > 0) {
                        checkpointFoodActions.pushDeer += pushCount;
                        // Track if this is optional (all contributions must be optional to mark as optional)
                        if (step.optional && checkpointFoodActions.pushDeer === pushCount) {
                            checkpointFoodActions.pushDeerOptional = true;
                        } else if (!step.optional) {
                            checkpointFoodActions.pushDeerOptional = false;
                        }
                    }
                } else {
                    const takeCount = extractPositiveCount(rawCount, 1);
                    if (takeCount > 0) {
                        checkpointFoodActions.takeAssignments[targetAnimal] += takeCount;
                        // Track if this is optional (all contributions must be optional to mark as optional)
                        if (step.optional && checkpointFoodActions.takeAssignments[targetAnimal] === takeCount) {
                            checkpointFoodActions.takeAssignmentsOptional[targetAnimal] = true;
                        } else if (!step.optional) {
                            checkpointFoodActions.takeAssignmentsOptional[targetAnimal] = false;
                        }
                    }
                }
            }
        }
        if (step.type === "newVillagers") {
            const target = normalizeFoodSource(step.task);
            if (target) {
                const assignCount = extractPositiveCount(step.count, 1);
                if (assignCount > 0) {
                    checkpointFoodActions.takeAssignments[target] += assignCount;
                    // Track if this is optional
                    if (step.optional && checkpointFoodActions.takeAssignments[target] === assignCount) {
                        checkpointFoodActions.takeAssignmentsOptional[target] = true;
                    } else if (!step.optional) {
                        checkpointFoodActions.takeAssignmentsOptional[target] = false;
                    }
                }
            }
        }
        if (step.type === "moveVillagers") {
            const destination = normalizeFoodSource(step.to);
            if (destination) {
                const moveCount = extractPositiveCount(step.count, 1);
                if (moveCount > 0) {
                    checkpointFoodActions.takeAssignments[destination] += moveCount;
                    // Track if this is optional
                    if (step.optional && checkpointFoodActions.takeAssignments[destination] === moveCount) {
                        checkpointFoodActions.takeAssignmentsOptional[destination] = true;
                    } else if (!step.optional) {
                        checkpointFoodActions.takeAssignmentsOptional[destination] = false;
                    }
                }
            }
        }
        // Track mill building (only for non-age transition steps)
        if (step.type !== "ageUp" && step.type !== "newAge") {
            if (hasMillInStep(step, civilization)) {
                state.currentCheckpointHasMill = true;
            }
        }
        // Track wood assignments for current age (before ageUp)
        if (step.type !== "ageUp" && step.type !== "newAge" && isWoodAssignmentStep(step)) {
            const woodCount = getWoodCountFromStep(step);
            if (woodCount > 0 && woodTranches.length === 0) {
                woodTranches.push(woodCount);
            }
        }
        // Track resource allocations
        const totalVillagers = step.resources.food + step.resources.wood + step.resources.gold + step.resources.stone + step.resources.build;
        if (totalVillagers > 0) {
            captureOpeningFoodNote(step);
            currentVillagers = updateVillagersFromResources(currentVillagers, step.resources);
        }
        // Track dark age lumber camps before age up
        if (state.currentCheckpointType === "dark_age" && step.type !== "ageUp" && step.type !== "newAge") {
            state.dark_ageLumberCampCount += countBuildingTypeFromStep(step, "lumberCamp");
        }
        // Accumulate actions for all non-age steps
        if (step.type !== "ageUp" && step.type !== "newAge") {
            const stepBuildings = extractBuildingsFromStep(step, state.currentCheckpointType, civilization, state.currentStepIndex, state.firstBarracksStepIndex, state.firstMillStepIndex);
            if (stepBuildings.length > 0) {
                state.chronologicalActions.push(...stepBuildings);
            }
            const stepResearch = extractResearchFromStep(step, state.currentStepIndex);
            if (stepResearch.length > 0) {
                state.chronologicalActions.push(...stepResearch);
            }
            const stepUnits = extractUnitsFromStep(step, state.currentStepIndex);
            if (stepUnits.length > 0) {
                state.chronologicalActions.push(...stepUnits);
            }
            const stepNotes = extractNotesFromStep(step, state.currentStepIndex);
            if (stepNotes.length > 0) {
                state.chronologicalActions.push(...stepNotes);
            }
        }
        // Handle age transitions
        if (step.type === "ageUp") {
            // Create checkpoint for current age if villagers changed or we have content
            const villagersChanged = !villagersAreEqual(currentVillagers, lastAgeVillagers);
            const hasActions = state.chronologicalActions.length > 0;
            if ((villagersChanged || hasActions) && state.lastCheckpointCreated !== state.currentCheckpointType) {
                // Generate food note (farms and mill logic)
                const { foodNote: baseFoodNote, newTotalFarms } = generateFoodNote(state.currentCheckpointType, checkpointFarmsSeeded, totalFarmsSeeded, state.currentCheckpointHasMill, state.hasEverBuiltMill, civilization, checkpointFarmsOptional);
                totalFarmsSeeded = newTotalFarms;
                checkpointFarmsSeeded = 0;
                checkpointFarmsOptional = false;
                const openingFoodNoteForCheckpoint = consumeOpeningFoodNote();
                const { foodNote: combinedFoodNote, goldNote: combinedGoldNote } = buildResourceNotes(baseFoodNote, checkpointFoodActions, openingFoodNoteForCheckpoint);
                // Update mill history after generating food note
                if (state.currentCheckpointHasMill) {
                    state.hasEverBuiltMill = true;
                }
                // Generate wood note if wood assignments exist in this age
                let woodNote = undefined;
                if (woodTranches.length > 0 && state.currentCheckpointType === "dark_age") {
                    const initialWoodVillagers = woodTranches[0];
                    const finalWoodVillagers = currentVillagers.wood;
                    if (initialWoodVillagers !== finalWoodVillagers) {
                        woodNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])("".concat(initialWoodVillagers, " initially"));
                    }
                }
                // Add lumber camp info for dark age if 2 or more
                if (state.currentCheckpointType === "dark_age" && state.dark_ageLumberCampCount >= 2) {
                    if (woodNote) {
                        woodNote += "; ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])("build ".concat(state.dark_ageLumberCampCount, " lumber camps")));
                    } else {
                        woodNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])("Build ".concat(state.dark_ageLumberCampCount, " lumber camps"));
                    }
                }
                // Consolidate actions in chronological order
                const allNotes = consolidateChronologicalActions(state.chronologicalActions);
                const villagersWithNotes = {
                    ...currentVillagers,
                    ...combinedFoodNote && {
                        foodNote: combinedFoodNote
                    },
                    ...combinedGoldNote && {
                        goldNote: combinedGoldNote
                    },
                    ...woodNote && {
                        woodNote
                    }
                };
                checkpoints.push({
                    type: state.currentCheckpointType,
                    villagers: villagersWithNotes,
                    genericNotes: allNotes
                });
                state.lastCheckpointCreated = state.currentCheckpointType;
                lastAgeVillagers = {
                    ...currentVillagers
                };
                state.chronologicalActions = [];
                state.currentCheckpointHasMill = false; // Reset mill flag
                woodTranches = []; // Reset wood tranches after creating age checkpoint
                checkpointFoodActions = createEmptyFoodActions();
            }
            // Extract actions from the ageUp step itself
            const transitionBuildings = extractBuildingsFromStep(step, state.currentCheckpointType, civilization, state.currentStepIndex, state.firstBarracksStepIndex, state.firstMillStepIndex);
            if (transitionBuildings.length > 0) {
                state.chronologicalActions.push(...transitionBuildings);
            }
            // Check for mills in the ageUp step itself
            if (hasMillInStep(step, civilization)) {
                state.currentCheckpointHasMill = true;
            }
            const transitionResearch = extractResearchFromStep(step, state.currentStepIndex);
            if (transitionResearch.length > 0) {
                state.chronologicalActions.push(...transitionResearch);
            }
            const transitionUnits = extractUnitsFromStep(step, state.currentStepIndex);
            if (transitionUnits.length > 0) {
                state.chronologicalActions.push(...transitionUnits);
            }
            const transitionNotes = extractNotesFromStep(step, state.currentStepIndex);
            if (transitionNotes.length > 0) {
                state.chronologicalActions.push(...transitionNotes);
            }
            // Set transition age
            switch(step.age){
                case "feudalAge":
                    state.currentCheckpointType = "dark_age_to_feudal_age";
                    break;
                case "castleAge":
                    state.currentCheckpointType = "feudal_age_to_castle_age";
                    break;
                case "imperialAge":
                    state.currentCheckpointType = "castle_age_to_imperial_age";
                    break;
            }
            // Remember this transition in case it's the last step
            pendingTransition = step.age;
        } else if (step.type === "newAge") {
            // At the end of transition, check if villagers changed from last checkpoint
            const villagersChanged = !villagersAreEqual(currentVillagers, lastTransitionVillagers);
            const hasActions = state.chronologicalActions.length > 0;
            if (villagersChanged || hasActions) {
                // Generate food note (farms and mill logic) - transition phases don't handle mill logic
                const { foodNote: baseFoodNote, newTotalFarms } = generateFoodNote(state.currentCheckpointType, checkpointFarmsSeeded, totalFarmsSeeded, state.currentCheckpointHasMill, state.hasEverBuiltMill, civilization, checkpointFarmsOptional);
                totalFarmsSeeded = newTotalFarms;
                checkpointFarmsSeeded = 0;
                checkpointFarmsOptional = false;
                const openingFoodNoteForCheckpoint = consumeOpeningFoodNote();
                const { foodNote: combinedFoodNote, goldNote: combinedGoldNote } = buildResourceNotes(baseFoodNote, checkpointFoodActions, openingFoodNoteForCheckpoint);
                // Update mill history after generating food note
                if (state.currentCheckpointHasMill) {
                    state.hasEverBuiltMill = true;
                }
                // Consolidate actions in chronological order
                const allNotes = consolidateChronologicalActions(state.chronologicalActions);
                const villagersWithNote = {
                    ...currentVillagers,
                    ...combinedFoodNote && {
                        foodNote: combinedFoodNote
                    },
                    ...combinedGoldNote && {
                        goldNote: combinedGoldNote
                    }
                };
                // Find the previous step to get the transition type
                const prevAgeUpStep = steps.slice(0, i).reverse().find((s)=>s.type === "ageUp");
                if (prevAgeUpStep) {
                    checkpoints.push({
                        type: mapAgeToTransitionType(prevAgeUpStep.age),
                        villagers: villagersWithNote,
                        genericNotes: allNotes
                    });
                    lastTransitionVillagers = {
                        ...currentVillagers
                    };
                    state.chronologicalActions = [];
                    state.currentCheckpointHasMill = false; // Reset mill flag
                    checkpointFoodActions = createEmptyFoodActions();
                }
            }
            // Clear pending transition since it's been handled
            pendingTransition = null;
            // Update to target age
            switch(step.age){
                case "feudalAge":
                    state.currentCheckpointType = "feudal_age";
                    break;
                case "castleAge":
                    state.currentCheckpointType = "castle_age";
                    break;
                case "imperialAge":
                    state.currentCheckpointType = "imperial_age";
                    break;
            }
        }
    }
    // Handle pending transition checkpoint (when ageUp is the last step)
    if (pendingTransition) {
        const villagersChanged = !villagersAreEqual(currentVillagers, lastTransitionVillagers);
        const hasActions = state.chronologicalActions.length > 0;
        if (villagersChanged || hasActions) {
            // Generate food note (farms and mill logic) - transition phases don't handle mill logic
            const { foodNote: baseFoodNote, newTotalFarms } = generateFoodNote(state.currentCheckpointType, checkpointFarmsSeeded, totalFarmsSeeded, state.currentCheckpointHasMill, state.hasEverBuiltMill, civilization, checkpointFarmsOptional);
            totalFarmsSeeded = newTotalFarms;
            checkpointFarmsSeeded = 0;
            checkpointFarmsOptional = false;
            const openingFoodNoteForCheckpoint = consumeOpeningFoodNote();
            const { foodNote: combinedFoodNote, goldNote: combinedGoldNote } = buildResourceNotes(baseFoodNote, checkpointFoodActions, openingFoodNoteForCheckpoint);
            // Update mill history after generating food note
            if (state.currentCheckpointHasMill) {
                state.hasEverBuiltMill = true;
            }
            // Consolidate actions in chronological order
            const allNotes = consolidateChronologicalActions(state.chronologicalActions);
            const villagersWithNote = {
                ...currentVillagers,
                ...combinedFoodNote && {
                    foodNote: combinedFoodNote
                },
                ...combinedGoldNote && {
                    goldNote: combinedGoldNote
                }
            };
            checkpoints.push({
                type: mapAgeToTransitionType(pendingTransition),
                villagers: villagersWithNote,
                genericNotes: allNotes
            });
            state.chronologicalActions = [];
            state.currentCheckpointHasMill = false; // Reset mill flag
            lastTransitionVillagers = {
                ...currentVillagers
            };
            checkpointFoodActions = createEmptyFoodActions();
        }
    }
    // Add final checkpoint for remaining activities in current age
    const villagersChanged = !villagersAreEqual(currentVillagers, lastAgeVillagers);
    const hasActions = state.chronologicalActions.length > 0;
    if ((villagersChanged || hasActions) && state.lastCheckpointCreated !== state.currentCheckpointType) {
        // Generate food note (farms and mill logic)
        const { foodNote: baseFoodNote, newTotalFarms } = generateFoodNote(state.currentCheckpointType, checkpointFarmsSeeded, totalFarmsSeeded, state.currentCheckpointHasMill, state.hasEverBuiltMill, civilization, checkpointFarmsOptional);
        totalFarmsSeeded = newTotalFarms;
        checkpointFarmsSeeded = 0;
        checkpointFarmsOptional = false;
        const openingFoodNoteForCheckpoint = consumeOpeningFoodNote();
        const { foodNote: combinedFoodNote, goldNote: combinedGoldNote } = buildResourceNotes(baseFoodNote, checkpointFoodActions, openingFoodNoteForCheckpoint);
        // Update mill history after generating food note
        if (state.currentCheckpointHasMill) {
            state.hasEverBuiltMill = true;
        }
        // Generate wood note if wood assignments exist in this age
        let woodNote = undefined;
        if (woodTranches.length > 0 && state.currentCheckpointType === "dark_age") {
            const initialWoodVillagers = woodTranches[0];
            const finalWoodVillagers = currentVillagers.wood;
            if (initialWoodVillagers !== finalWoodVillagers) {
                woodNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])("".concat(initialWoodVillagers, " initially"));
            }
        }
        // Add lumber camp info for dark age if 2 or more
        if (state.currentCheckpointType === "dark_age" && state.dark_ageLumberCampCount >= 2) {
            if (woodNote) {
                woodNote += "; ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])("build ".concat(state.dark_ageLumberCampCount, " lumber camps")));
            } else {
                woodNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTitleCaseLabel"])("Build ".concat(state.dark_ageLumberCampCount, " lumber camps"));
            }
        }
        // Consolidate actions in chronological order
        const allNotes = consolidateChronologicalActions(state.chronologicalActions);
        const villagersWithNotes = {
            ...currentVillagers,
            ...combinedFoodNote && {
                foodNote: combinedFoodNote
            },
            ...combinedGoldNote && {
                goldNote: combinedGoldNote
            },
            ...woodNote && {
                woodNote
            }
        };
        checkpoints.push({
            type: state.currentCheckpointType,
            villagers: villagersWithNotes,
            genericNotes: allNotes
        });
        checkpointFoodActions = createEmptyFoodActions();
    }
    return checkpoints;
}
function groupStepsByAlternatives(steps) {
    const alternatives = [];
    let currentSteps = [];
    let currentDecisionText = undefined;
    steps.forEach((step)=>{
        if (step.type === "decision") {
            // If we have accumulated steps, create an alternative from them
            if (currentSteps.length > 0) {
                alternatives.push({
                    decisionText: currentDecisionText,
                    steps: currentSteps
                });
                currentSteps = [];
            }
            // Set the decision text for the next alternative
            currentDecisionText = step.text;
        } else {
            // Accumulate non-decision steps
            currentSteps.push(step);
        }
    });
    // Add any remaining steps as the final alternative
    if (currentSteps.length > 0) {
        alternatives.push({
            decisionText: currentDecisionText,
            steps: currentSteps
        });
    }
    return alternatives;
}
function convertStepsToAlternativeCheckpoints(steps, civilization) {
    // Validate the full build once before processing alternatives
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndThrow"])(steps);
    // Check if build has decision steps
    const hasDecisions = steps.some((step)=>step.type === "decision");
    if (!hasDecisions) {
        // If no decisions, return single path with all checkpoints
        return [
            {
                checkpoints: convertStepsToCheckpoints(steps, civilization, undefined, {
                    skipValidation: true
                })
            }
        ];
    }
    // Find the first decision point
    const firstDecisionIndex = steps.findIndex((step)=>step.type === "decision");
    // Split into common steps (before first decision) and remaining steps
    const commonSteps = steps.slice(0, firstDecisionIndex);
    const remainingSteps = steps.slice(firstDecisionIndex);
    // Convert common steps to checkpoints
    const commonCheckpoints = commonSteps.length > 0 ? convertStepsToCheckpoints(commonSteps, civilization, undefined, {
        skipValidation: true
    }) : [];
    // Group remaining steps by decision alternatives
    const alternatives = groupStepsByAlternatives(remainingSteps);
    // Convert each alternative by processing the full sequence (common + alternative)
    // Helper function to determine the current age state when alternatives begin
    function findCurrentAgeState(steps, firstDecisionIndex) {
        let currentAge = "dark_age";
        // Look through steps before the first decision to find the most recent newAge
        for(let i = 0; i < firstDecisionIndex; i++){
            const step = steps[i];
            if (step.type === "newAge") {
                switch(step.age){
                    case "feudalAge":
                        currentAge = "feudal_age";
                        break;
                    case "castleAge":
                        currentAge = "castle_age";
                        break;
                    case "imperialAge":
                        currentAge = "imperial_age";
                        break;
                }
            }
        }
        return currentAge;
    }
    // Determine what age we're in when alternatives start
    const currentAge = findCurrentAgeState(steps, firstDecisionIndex);
    return alternatives.map((alternative)=>{
        // Convert the alternative steps starting from the current age context
        const alternativeCheckpoints = convertStepsToCheckpoints(alternative.steps, civilization, currentAge, {
            hasPriorSteps: true,
            skipValidation: true
        });
        return {
            decisionText: alternative.decisionText,
            checkpoints: alternativeCheckpoints,
            commonCheckpoints: commonCheckpoints.length > 0 ? commonCheckpoints : undefined
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BuildView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BuildView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BuildDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BuildDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AlternativeCheckpointDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AlternativeCheckpointDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResourceIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResourceIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buildConverter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/imageUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buildValidation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ValidationWarnings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ValidationWarnings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/taskUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const resourceOrder = [
    "food",
    "wood",
    "gold",
    "stone",
    "builders",
    "fishingShips"
];
const COLLECT_GOLD_TASK_METADATA = {
    collect10GoldWithNewVillager: {
        subType: "newVillagers",
        count: 1
    },
    collect40GoldWithTwoNewVillagers: {
        subType: "newVillagers",
        count: 2
    },
    collect30GoldWithNewVillager: {
        subType: "newVillagers",
        count: 1
    },
    collect10GoldAfterBarracksIsBuilt: {
        subType: "moveVillagers",
        count: 1,
        from: "build",
        to: "gold"
    }
};
const createDefaultResources = ()=>({
        food: 0,
        wood: 0,
        gold: 0,
        stone: 0,
        build: 0
    });
function applyStepToResources(step, startingResources) {
    const resources = {
        ...startingResources
    };
    switch(step.type){
        case "newVillagers":
            {
                const targetResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(step.task);
                const count = Math.max(0, step.count || 0);
                resources[targetResource] = (resources[targetResource] || 0) + count;
                break;
            }
        case "moveVillagers":
            {
                const fromResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(step.from);
                const toResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(step.to);
                const count = Math.max(0, step.count || 0);
                resources[fromResource] = Math.max(0, (resources[fromResource] || 0) - count);
                resources[toResource] = (resources[toResource] || 0) + count;
                break;
            }
        case "collectGold":
            {
                const metadata = COLLECT_GOLD_TASK_METADATA[step.task];
                if (metadata) {
                    if (metadata.subType === "newVillagers") {
                        const count = Math.max(0, metadata.count);
                        resources.gold = (resources.gold || 0) + count;
                    } else if (metadata.subType === "moveVillagers") {
                        const fromResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(metadata.from);
                        const toResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taskUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskToResource"])(metadata.to);
                        const count = Math.max(0, metadata.count);
                        resources[fromResource] = Math.max(0, (resources[fromResource] || 0) - count);
                        resources[toResource] = (resources[toResource] || 0) + count;
                    }
                }
                break;
            }
        default:
            break;
    }
    const sanitizedResources = {
        food: Math.max(0, resources.food || 0),
        wood: Math.max(0, resources.wood || 0),
        gold: Math.max(0, resources.gold || 0),
        stone: Math.max(0, resources.stone || 0),
        build: Math.max(0, resources.build || 0)
    };
    return {
        nextResources: sanitizedResources,
        updatedStep: {
            ...step,
            resources: sanitizedResources
        }
    };
}
function recalculateSegmentResources(steps, startingResources) {
    let currentResources = {
        ...startingResources
    };
    const updatedSteps = [];
    for (const step of steps){
        const { nextResources, updatedStep } = applyStepToResources(step, currentResources);
        updatedSteps.push(updatedStep);
        currentResources = nextResources;
    }
    return {
        updatedSteps,
        finalResources: currentResources
    };
}
function recalculateStepResources(steps) {
    const firstDecisionIndex = steps.findIndex((step)=>step.type === "decision");
    if (firstDecisionIndex === -1) {
        return recalculateSegmentResources(steps, createDefaultResources()).updatedSteps;
    }
    const commonSegment = steps.slice(0, firstDecisionIndex);
    const { updatedSteps: updatedCommonSteps, finalResources: baseResources } = recalculateSegmentResources(commonSegment, createDefaultResources());
    const updatedSteps = [
        ...updatedCommonSteps
    ];
    const baseSnapshot = {
        ...baseResources
    };
    let index = firstDecisionIndex;
    while(index < steps.length){
        const decisionStep = steps[index];
        if (decisionStep.type === "decision") {
            updatedSteps.push({
                ...decisionStep,
                resources: {
                    ...baseSnapshot
                }
            });
            index += 1;
        }
        let nextDecisionIndex = steps.findIndex((step, idx)=>idx >= index && step.type === "decision");
        if (nextDecisionIndex === -1) {
            nextDecisionIndex = steps.length;
        }
        const alternativeSegment = steps.slice(index, nextDecisionIndex);
        if (alternativeSegment.length > 0) {
            const { updatedSteps: updatedAlternativeSteps } = recalculateSegmentResources(alternativeSegment, baseSnapshot);
            updatedSteps.push(...updatedAlternativeSteps);
        }
        index = nextDecisionIndex;
    }
    return updatedSteps;
}
const ResourceItem = (param)=>{
    let { resource, count, note, difference } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2 sm:space-x-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-muted px-2 py-1 rounded-default min-w-14 sm:min-w-16 flex items-center justify-center space-x-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResourceIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        resource: resource,
                        width: 20,
                        height: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuildView.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-foreground font-medium text-xs sm:text-sm",
                        children: count
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuildView.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BuildView.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            difference !== undefined && difference !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium ".concat(difference > 0 ? "text-foreground" : "text-cancel"),
                children: [
                    difference > 0 ? "+" : "",
                    difference
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BuildView.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-foreground text-xs sm:text-base",
                children: note
            }, void 0, false, {
                fileName: "[project]/src/components/BuildView.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BuildView.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ResourceItem;
const TextNote = (param)=>{
    let { text } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-foreground text-xs sm:text-base text-pretty",
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/BuildView.tsx",
        lineNumber: 226,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = TextNote;
const getPhaseTitle = (type, index)=>{
    if (!type) return "Step ".concat((index || 0) + 1);
    const titleMap = {
        dark_age: "Dark Age",
        feudal_age: "Feudal Age",
        castle_age: "Castle Age",
        imperial_age: "Imperial Age",
        dark_age_to_feudal_age: "Advance to Feudal Age",
        feudal_age_to_castle_age: "Advance to Castle Age",
        castle_age_to_imperial_age: "Advance to Imperial Age"
    };
    return titleMap[type] || "Step ".concat((index || 0) + 1);
};
const getResourceNote = (resource, checkpoint)=>{
    const key = "".concat(resource, "Note");
    const note = checkpoint.villagers[key];
    return typeof note === "string" ? note : undefined;
};
const getResourceDifference = (resource, checkpoint, previousCheckpoint)=>{
    if (!previousCheckpoint) return undefined;
    const currentCount = checkpoint.villagers[resource] || 0;
    const previousCount = previousCheckpoint.villagers[resource] || 0;
    return currentCount - previousCount;
};
const renderAgeIcon = (type)=>{
    if (!type) return null;
    if (type.includes("_to_")) {
        const [startAge, endAge] = type.split("_to_");
        const startIconSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeImagePath"])(startAge);
        const endIconSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeImagePath"])(endAge);
        if (!startIconSrc || !endIconSrc) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: startIconSrc,
                    alt: startAge,
                    width: 24,
                    height: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-foreground text-sm font-bold",
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: endIconSrc,
                    alt: endAge,
                    width: 24,
                    height: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BuildView.tsx",
            lineNumber: 282,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const iconSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeImagePath"])(type);
    if (!iconSrc) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: iconSrc,
        alt: type,
        width: 24,
        height: 24
    }, void 0, false, {
        fileName: "[project]/src/components/BuildView.tsx",
        lineNumber: 293,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const BuildPhase = (param)=>{
    let { checkpoint, index, previousCheckpoint } = param;
    var _checkpoint_genericNotes;
    _s();
    const hasResourceChanges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BuildPhase.useMemo[hasResourceChanges]": ()=>{
            if (!previousCheckpoint) return true;
            return resourceOrder.some({
                "BuildPhase.useMemo[hasResourceChanges]": (resource)=>{
                    const current = checkpoint.villagers[resource] || 0;
                    const previous = previousCheckpoint.villagers[resource] || 0;
                    return current !== previous;
                }
            }["BuildPhase.useMemo[hasResourceChanges]"]);
        }
    }["BuildPhase.useMemo[hasResourceChanges]"], [
        checkpoint,
        previousCheckpoint
    ]);
    const hasResourceNotes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BuildPhase.useMemo[hasResourceNotes]": ()=>{
            return resourceOrder.some({
                "BuildPhase.useMemo[hasResourceNotes]": (resource)=>{
                    const note = getResourceNote(resource, checkpoint);
                    return note && note.trim() !== "";
                }
            }["BuildPhase.useMemo[hasResourceNotes]"]);
        }
    }["BuildPhase.useMemo[hasResourceNotes]"], [
        checkpoint
    ]);
    const shouldShowResources = hasResourceChanges || hasResourceNotes;
    const hasGenericNotes = checkpoint.genericNotes && checkpoint.genericNotes.length > 0;
    const shouldRender = shouldShowResources || hasGenericNotes;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background rounded-default shadow-default overflow-hidden mb-4 sm:mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-muted px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2 min-w-0 flex-1",
                    children: [
                        checkpoint.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-1 sm:space-x-2 flex-shrink-0",
                            children: renderAgeIcon(checkpoint.type)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuildView.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-foreground text-pretty truncate",
                            children: getPhaseTitle(checkpoint.type, index)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuildView.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 339,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/BuildView.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-6",
                children: [
                    shouldShowResources && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 sm:space-y-3",
                        children: resourceOrder.map((resource)=>{
                            const count = checkpoint.villagers[resource] || 0;
                            const note = getResourceNote(resource, checkpoint);
                            const difference = getResourceDifference(resource, checkpoint, previousCheckpoint);
                            if (count > 0 || note && note.trim().length > 0) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceItem, {
                                    resource: resource,
                                    count: count,
                                    note: note,
                                    difference: difference
                                }, resource, false, {
                                    fileName: "[project]/src/components/BuildView.tsx",
                                    lineNumber: 368,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                            return null;
                        }).filter(Boolean)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuildView.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasGenericNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: shouldShowResources ? "mt-4 sm:mt-6" : "",
                        children: [
                            shouldShowResources && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-px bg-muted mb-3 sm:mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuildView.tsx",
                                lineNumber: 386,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 sm:space-y-2 list-disc list-inside",
                                children: (_checkpoint_genericNotes = checkpoint.genericNotes) === null || _checkpoint_genericNotes === void 0 ? void 0 : _checkpoint_genericNotes.map((note, noteIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextNote, {
                                        text: note
                                    }, noteIndex, false, {
                                        fileName: "[project]/src/components/BuildView.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuildView.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BuildView.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BuildView.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BuildView.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BuildPhase, "YppfnCbJCdwfKGmjV/Jb1oPozws=");
_c2 = BuildPhase;
const ViewToggle = (param)=>{
    let { viewMode, onToggle, showToggle } = param;
    if (!showToggle) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-muted rounded-default p-1 inline-flex shadow-default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onToggle("steps"),
                    className: "px-4 py-2 rounded-default text-sm font-medium transition-all ".concat(viewMode === "steps" ? "bg-background text-foreground shadow-default" : "text-foreground/70 hover:text-foreground"),
                    children: "Steps"
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onToggle("checkpoints"),
                    className: "px-4 py-2 rounded-default text-sm font-medium transition-all ".concat(viewMode === "checkpoints" ? "bg-background text-foreground shadow-default" : "text-foreground/70 hover:text-foreground"),
                    children: "Checkpoints"
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 424,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BuildView.tsx",
            lineNumber: 413,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/BuildView.tsx",
        lineNumber: 412,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = ViewToggle;
function BuildView(param) {
    let { build, className, initialViewMode = "steps", viewMode: controlledViewMode, onViewModeChange, showToggle } = param;
    var _normalizedBuild_build;
    _s1();
    const normalizedSteps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BuildView.useMemo[normalizedSteps]": ()=>(build === null || build === void 0 ? void 0 : build.build) ? recalculateStepResources(build.build) : []
    }["BuildView.useMemo[normalizedSteps]"], [
        build
    ]);
    const normalizedBuild = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BuildView.useMemo[normalizedBuild]": ()=>{
            if (!build) return null;
            if (!build.build) return build;
            return {
                ...build,
                build: normalizedSteps
            };
        }
    }["BuildView.useMemo[normalizedBuild]"], [
        build,
        normalizedSteps
    ]);
    const [internalViewMode, setInternalViewMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(initialViewMode);
    const buildIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BuildView.useMemo[buildIdentifier]": ()=>{
            var _normalizedBuild_id;
            return (_normalizedBuild_id = normalizedBuild === null || normalizedBuild === void 0 ? void 0 : normalizedBuild.id) !== null && _normalizedBuild_id !== void 0 ? _normalizedBuild_id : JSON.stringify(normalizedBuild !== null && normalizedBuild !== void 0 ? normalizedBuild : null);
        }
    }["BuildView.useMemo[buildIdentifier]"], [
        normalizedBuild
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "BuildView.useEffect": ()=>{
            setInternalViewMode(initialViewMode);
        }
    }["BuildView.useEffect"], [
        initialViewMode,
        buildIdentifier
    ]);
    const isControlled = controlledViewMode !== undefined;
    const viewMode = controlledViewMode !== null && controlledViewMode !== void 0 ? controlledViewMode : internalViewMode;
    const handleToggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "BuildView.useCallback[handleToggle]": (mode)=>{
            if (!isControlled) {
                setInternalViewMode(mode);
            }
            onViewModeChange === null || onViewModeChange === void 0 ? void 0 : onViewModeChange(mode);
        }
    }["BuildView.useCallback[handleToggle]"], [
        isControlled,
        onViewModeChange
    ]);
    const supportsNewFormat = Array.isArray(normalizedBuild === null || normalizedBuild === void 0 ? void 0 : normalizedBuild.build);
    var _normalizedBuild_build_length;
    const stepCount = (_normalizedBuild_build_length = normalizedBuild === null || normalizedBuild === void 0 ? void 0 : (_normalizedBuild_build = normalizedBuild.build) === null || _normalizedBuild_build === void 0 ? void 0 : _normalizedBuild_build.length) !== null && _normalizedBuild_build_length !== void 0 ? _normalizedBuild_build_length : 0;
    // Check for validation errors to determine if we should show the toggle
    const hasValidationErrors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BuildView.useMemo[hasValidationErrors]": ()=>{
            if (!(normalizedBuild === null || normalizedBuild === void 0 ? void 0 : normalizedBuild.build) || normalizedBuild.build.length === 0) return false;
            const validationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateBuildOrder"])(normalizedBuild.build, normalizedBuild.civilization);
            return !validationResult.isValid;
        }
    }["BuildView.useMemo[hasValidationErrors]"], [
        normalizedBuild
    ]);
    const showViewToggle = showToggle !== undefined ? showToggle : supportsNewFormat && !hasValidationErrors;
    const checkpointsContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BuildView.useMemo[checkpointsContent]": ()=>{
            if (!normalizedBuild) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "No build data available."
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 501,
                    columnNumber: 14
                }, this);
            }
            if (supportsNewFormat) {
                if (!normalizedBuild.build || normalizedBuild.build.length === 0) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: "No build steps defined for this build."
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuildView.tsx",
                        lineNumber: 506,
                        columnNumber: 16
                    }, this);
                }
                try {
                    const hasDecisions = normalizedBuild.build.some({
                        "BuildView.useMemo[checkpointsContent].hasDecisions": (step)=>step.type === "decision"
                    }["BuildView.useMemo[checkpointsContent].hasDecisions"]);
                    if (hasDecisions) {
                        const alternatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertStepsToAlternativeCheckpoints"])(normalizedBuild.build, normalizedBuild.civilization);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AlternativeCheckpointDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            alternatives: alternatives
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuildView.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this);
                    }
                    const checkpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buildConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertStepsToCheckpoints"])(normalizedBuild.build, normalizedBuild.civilization);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: checkpoints.map({
                            "BuildView.useMemo[checkpointsContent]": (checkpoint, index, all)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildPhase, {
                                    checkpoint: checkpoint,
                                    index: index,
                                    previousCheckpoint: index > 0 ? all[index - 1] : undefined
                                }, index, false, {
                                    fileName: "[project]/src/components/BuildView.tsx",
                                    lineNumber: 533,
                                    columnNumber: 17
                                }, this)
                        }["BuildView.useMemo[checkpointsContent]"]).filter(Boolean)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuildView.tsx",
                        lineNumber: 530,
                        columnNumber: 11
                    }, this);
                } catch (error) {
                    // If conversion fails, show error message
                    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ValidationWarnings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                errors: [
                                    {
                                        message: errorMessage,
                                        severity: "error"
                                    }
                                ],
                                title: "Cannot Display Checkpoint View"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuildView.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/60 text-sm text-center",
                                children: "Please switch to Steps view to see the build."
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuildView.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                }
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: "No build data defined for this build."
            }, void 0, false, {
                fileName: "[project]/src/components/BuildView.tsx",
                lineNumber: 558,
                columnNumber: 12
            }, this);
        }
    }["BuildView.useMemo[checkpointsContent]"], [
        normalizedBuild,
        supportsNewFormat
    ]);
    const stepsContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BuildView.useMemo[stepsContent]": ()=>{
            if (!normalizedBuild) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "No build data available."
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 563,
                    columnNumber: 14
                }, this);
            }
            if (!supportsNewFormat) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "No build steps defined for this build."
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 567,
                    columnNumber: 14
                }, this);
            }
            if (stepCount === 0) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "No build steps defined for this build."
                }, void 0, false, {
                    fileName: "[project]/src/components/BuildView.tsx",
                    lineNumber: 571,
                    columnNumber: 14
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BuildDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                build: normalizedBuild
            }, void 0, false, {
                fileName: "[project]/src/components/BuildView.tsx",
                lineNumber: 573,
                columnNumber: 12
            }, this);
        }
    }["BuildView.useMemo[stepsContent]"], [
        normalizedBuild,
        supportsNewFormat,
        stepCount
    ]);
    const effectiveViewMode = supportsNewFormat ? viewMode : "checkpoints";
    const content = effectiveViewMode === "steps" ? stepsContent : checkpointsContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewToggle, {
                viewMode: viewMode,
                onToggle: handleToggle,
                showToggle: showViewToggle
            }, void 0, false, {
                fileName: "[project]/src/components/BuildView.tsx",
                lineNumber: 585,
                columnNumber: 7
            }, this),
            content
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BuildView.tsx",
        lineNumber: 584,
        columnNumber: 5
    }, this);
}
_s1(BuildView, "7uqqIrGPb7vqm48A23xuG8AQVbw=");
_c4 = BuildView;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ResourceItem");
__turbopack_context__.k.register(_c1, "TextNote");
__turbopack_context__.k.register(_c2, "BuildPhase");
__turbopack_context__.k.register(_c3, "ViewToggle");
__turbopack_context__.k.register(_c4, "BuildView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AuthPromptModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AuthPromptModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
"use client";
;
;
function AuthPromptModal(param) {
    let { isOpen, onClose, onLogin, onRegister } = param;
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-muted/80 z-50 backdrop-blur-sm cursor-pointer",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/AuthPromptModal.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background rounded-default shadow-hover max-w-md w-full p-6 pointer-events-auto border border-foreground/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-foreground mb-2 text-center",
                            children: "Account Required"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AuthPromptModal.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/80 mb-8 text-center text-pretty",
                            children: "Please log in or create an account to rate builds, save favorites, and keep them on your profile."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AuthPromptModal.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: onLogin,
                                    fullWidth: true,
                                    children: "Log In"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AuthPromptModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: onRegister,
                                    variant: "secondary",
                                    fullWidth: true,
                                    children: "Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AuthPromptModal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "mt-2 text-sm text-foreground/60 hover:text-foreground transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AuthPromptModal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AuthPromptModal.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AuthPromptModal.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AuthPromptModal.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = AuthPromptModal;
var _c;
__turbopack_context__.k.register(_c, "AuthPromptModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/rtsOverlayExport.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertTxtToIllustrated": ()=>convertTxtToIllustrated,
    "exportForRTSOverlay": ()=>exportForRTSOverlay,
    "htmlDecode": ()=>htmlDecode
});
/** Get the images conversion dictionary.
 * 
 * @returns    dictionary to convert 'Build Order Guide' names to 'RTS Overlay' names
 */ function getImagesDictionary() {
    return {
        'sheep': 'animal/Sheep_aoe2DE.png',
        'sheeps': 'animal/Sheep_aoe2DE.png',
        'shore fish': 'animal/AoE2_DE_shore_fish_icon.png',
        'boar': 'animal/Boar_aoe2DE.png',
        'boars': 'animal/Boar_aoe2DE.png',
        'deer': 'animal/Deer_aoe2DE.png',
        'deers': 'animal/Deer_aoe2DE.png',
        'farm': 'mill/FarmDE.png',
        'farms': 'mill/FarmDE.png',
        'wood': 'resource/Aoe2de_wood.png',
        'stone': 'resource/Aoe2de_stone.png',
        'gold': 'resource/Aoe2de_gold.png',
        'berry': 'resource/BerryBushDE.png',
        'berries': 'resource/BerryBushDE.png',
        'food': 'resource/Aoe2de_food.png',
        'build': 'resource/Aoe2de_hammer.png',
        'folwark': 'mill/Aoe2-icon--folwark.png',
        'folwarks': 'mill/Aoe2-icon--folwark.png',
        'house': 'other/House_aoe2DE.png',
        'houses': 'other/House_aoe2DE.png',
        'mill': 'mill/Mill_aoe2de.png',
        'mills': 'mill/Mill_aoe2de.png',
        'lumber camp': 'lumber_camp/Lumber_camp_aoe2de.png',
        'lumber camps': 'lumber_camp/Lumber_camp_aoe2de.png',
        'mining camp': 'mining_camp/Mining_camp_aoe2de.png',
        'mining camps': 'mining_camp/Mining_camp_aoe2de.png',
        'dock': 'dock/Dock_aoe2de.png',
        'docks': 'dock/Dock_aoe2de.png',
        'barracks': 'barracks/Barracks_aoe2DE.png',
        'market': 'market/Market_aoe2DE.png',
        'markets': 'market/Market_aoe2DE.png',
        'blacksmith': 'blacksmith/Blacksmith_aoe2de.png',
        'blacksmiths': 'blacksmith/Blacksmith_aoe2de.png',
        'range': 'archery_range/Archery_range_aoe2DE.png',
        'ranges': 'archery_range/Archery_range_aoe2DE.png',
        'archery range': 'archery_range/Archery_range_aoe2DE.png',
        'archery ranges': 'archery_range/Archery_range_aoe2DE.png',
        'stable': 'stable/Stable_aoe2DE.png',
        'stables': 'stable/Stable_aoe2DE.png',
        'tower': 'defensive_structures/Tower_aoe2de.png',
        'towers': 'defensive_structures/Tower_aoe2de.png',
        'town center': 'town_center/Towncenter_aoe2DE.png',
        'town centers': 'town_center/Towncenter_aoe2DE.png',
        'tc': 'town_center/Towncenter_aoe2DE.png',
        'monastery': 'monastery/MonasteryAoe2DE.png',
        'monasteries': 'monastery/MonasteryAoe2DE.png',
        'university': 'university/University_AoE2_DE.png',
        'universities': 'university/University_AoE2_DE.png',
        'siege workshop': 'siege_workshop/Siege_workshop_aoe2DE.png',
        'siege workshops': 'siege_workshop/Siege_workshop_aoe2DE.png',
        'castle': 'castle/Castle_aoe2DE.png',
        'castles': 'castle/Castle_aoe2DE.png',
        'krepost': 'defensive_structures/Krepost_aoe2de.png',
        'kreposts': 'defensive_structures/Krepost_aoe2de.png',
        'feitoria': 'other/Feitoria_aoe2DE.png',
        'fish trap': 'dock/Fish_trap_aoe2DE.png',
        'fish traps': 'dock/Fish_trap_aoe2DE.png',
        'palisade': 'defensive_structures/Palisade_wall_aoe2de.png',
        'palisades': 'defensive_structures/Palisade_wall_aoe2de.png',
        'wall': 'defensive_structures/Palisade_wall_aoe2de.png',
        'walls': 'defensive_structures/Palisade_wall_aoe2de.png',
        'stone wall': 'defensive_structures/Stone_wall_aoe2de.png',
        'stone walls': 'defensive_structures/Stone_wall_aoe2de.png',
        'donjon': 'defensive_structures/Donjon_aoe2DE.png',
        'donjons': 'defensive_structures/Donjon_aoe2DE.png',
        'wonder': 'other/Wonder_aoe2DE.png',
        'wonders': 'other/Wonder_aoe2DE.png',
        'caravanserai': 'other/Ao2de_caravanserai_icon.png',
        'caravanserais': 'other/Ao2de_caravanserai_icon.png',
        'dark age': 'age/DarkAgeIconDE_alpha.png',
        'feudal age': 'age/FeudalAgeIconDE_alpha.png',
        'castle age': 'age/CastleAgeIconDE_alpha.png',
        'imperial age': 'age/ImperialAgeIconDE_alpha.png',
        'chemistry': 'university/ChemistryDE.png',
        'double-bit axe': 'lumber_camp/DoubleBitAxe_aoe2DE.png',
        'horse collar': 'mill/HorseCollarDE.png',
        'loom': 'town_center/LoomDE.png',
        'wheelbarrow': 'town_center/WheelbarrowDE.png',
        'hand cart': 'town_center/HandcartDE.png',
        'bow saw': 'lumber_camp/BowSawDE.png',
        'two-man saw': 'lumber_camp/TwoManSawDE.png',
        'heavy plow': 'mill/HeavyPlowDE.png',
        'crop rotation': 'mill/CropRotationDE.png',
        'gold mining': 'mining_camp/GoldMiningDE.png',
        'gold shaft mining': 'mining_camp/GoldShaftMiningDE.png',
        'stone mining': 'mining_camp/StoneMiningDE.png',
        'stone shaft mining': 'mining_camp/StoneShaftMiningDE.png',
        'gillnets': 'dock/GillnetsDE.png',
        'fletching': 'blacksmith/FletchingDE.png',
        'bodkin arrow': 'blacksmith/BodkinArrowDE.png',
        'bracer': 'blacksmith/BracerDE.png',
        'padded archer armor': 'blacksmith/PaddedArcherArmorDE.png',
        'leather archer armor': 'blacksmith/LeatherArcherArmorDE.png',
        'ring archer armor': 'blacksmith/RingArcherArmorDE.png',
        'ballistics': 'university/BallisticsDE.png',
        'thumb ring': 'archery_range/ThumbRingDE.png',
        'parthian tactics': 'archery_range/ParthianTacticsDE.png',
        'supplies': 'barracks/Suplliesicon.png',
        'forging': 'blacksmith/Forging_aoe2de.png',
        'iron casting': 'blacksmith/IronCastingDE.png',
        'blast furnace': 'blacksmith/BlastFurnaceDE.png',
        'scale mail armor': 'blacksmith/ScaleMailArmorDE.png',
        'chain mail armor': 'blacksmith/ChainMailArmorDE.png',
        'plate mail armor': 'blacksmith/PlateMailArmorDE.png',
        'bloodlines': 'stable/BloodlinesDE.png',
        'husbandry': 'stable/HusbandryDE.png',
        'scale barding armor': 'blacksmith/ScaleBardingArmorDE.png',
        'chain barding armor': 'blacksmith/ChainBardingDE.png',
        'plate barding armor': 'blacksmith/PlateBardingArmorDE.png',
        'town watch': 'town_center/TownWatchDE.png',
        'town patrol': 'town_center/TownPatrolDE.png',
        'careening': 'dock/CareeningDE.png',
        'dry dock': 'dock/DryDockDE.png',
        'shipwright': 'dock/ShipwrightDE.png',
        'man-at-arms': 'barracks/ManAtArmsUpgDE.png',
        'pikeman': 'barracks/PikemanUpDE.png',
        'redemption': 'monastery/RedemptionDE.png',
        'arson': 'barracks/ArsonDE.png',
        'gambeson': 'barracks/GambesonsDE.png',
        'gambesons': 'barracks/GambesonsDE.png',
        'siege elephant': 'siege_workshop/AoE2DE_Siege_Elephant_icon.png',
        'heavy camel rider': 'stable/HeavyCamelUpgDE.png',
        'vill': 'resource/MaleVillDE.jpg',
        'vills': 'resource/MaleVillDE.jpg',
        'villager': 'resource/MaleVillDE.jpg',
        'villagers': 'resource/MaleVillDE.jpg',
        'militia': 'barracks/MilitiaDE.png',
        'militias': 'barracks/MilitiaDE.png',
        'man at arms': 'barracks/Manatarms_aoe2DE.png',
        'man-at arms': 'barracks/Manatarms_aoe2DE.png',
        'men at arms': 'barracks/Manatarms_aoe2DE.png',
        'men-at arms': 'barracks/Manatarms_aoe2DE.png',
        'men-at-arms': 'barracks/Manatarms_aoe2DE.png',
        'longswordsman': 'barracks/Longswordsman_aoe2DE.png',
        'longswordsmen': 'barracks/Longswordsman_aoe2DE.png',
        'two-handed swordsman': 'barracks/Twohanded_aoe2DE.png',
        'two-handed swordsmen': 'barracks/Twohanded_aoe2DE.png',
        'champion': 'barracks/Champion_aoe2DE.png',
        'champions': 'barracks/Champion_aoe2DE.png',
        'spearman': 'barracks/Spearman_aoe2DE.png',
        'spearmans': 'barracks/Spearman_aoe2DE.png',
        'halberdier': 'barracks/Halberdier_aoe2DE.png',
        'halberdiers': 'barracks/Halberdier_aoe2DE.png',
        'eagle scout': 'barracks/Eaglescout_aoe2DE.png',
        'eagle scouts': 'barracks/Eaglescout_aoe2DE.png',
        'eagle warrior': 'barracks/Eaglewarrior_aoe2DE.png',
        'eagle warriors': 'barracks/Eaglewarrior_aoe2DE.png',
        'elite eagle warrior': 'barracks/EliteEaglewarrior_aoe2DE.png',
        'elite eagle warriors': 'barracks/EliteEaglewarrior_aoe2DE.png',
        'archer': 'archery_range/Archer_aoe2DE.png',
        'archers': 'archery_range/Archer_aoe2DE.png',
        'crossbowman': 'archery_range/Crossbowman_aoe2DE.png',
        'crossbowmen': 'archery_range/Crossbowman_aoe2DE.png',
        'arbalester': 'archery_range/Arbalester_aoe2DE.png',
        'arbalesters': 'archery_range/Arbalester_aoe2DE.png',
        'skirmisher': 'archery_range/Skirmisher_aoe2DE.png',
        'skirmishers': 'archery_range/Skirmisher_aoe2DE.png',
        'elite skirmisher': 'archery_range/Elite_skirmisher_aoe2DE.png',
        'elite skirmishers': 'archery_range/Elite_skirmisher_aoe2DE.png',
        'imperial skirmisher': 'archery_range/ImperialSkirmisherUpgDE.png',
        'imperial skirmishers': 'archery_range/ImperialSkirmisherUpgDE.png',
        'cavalry archer': 'archery_range/Cavalryarcher_aoe2DE.png',
        'cavalry archers': 'archery_range/Cavalryarcher_aoe2DE.png',
        'heavy cavalry archer': 'archery_range/Heavycavalryarcher_aoe2de.png',
        'heavy cavalry archers': 'archery_range/Heavycavalryarcher_aoe2de.png',
        'elephant archer': 'archery_range/ElephantArcherIcon-DE.png',
        'elephant archers': 'archery_range/ElephantArcherIcon-DE.png',
        'elite elephant archer': 'archery_range/ElephantArcherIcon-DE.png',
        'elite elephant archers': 'archery_range/ElephantArcherIcon-DE.png',
        'hand cannoneer': 'archery_range/Hand_cannoneer_aoe2DE.png',
        'hand cannoneers': 'archery_range/Hand_cannoneer_aoe2DE.png',
        'scout': 'stable/Scoutcavalry_aoe2DE.png',
        'scouts': 'stable/Scoutcavalry_aoe2DE.png',
        'light cavalry': 'stable/Lightcavalry_aoe2DE.png',
        'hussar': 'stable/Hussar_aoe2DE.png',
        'hussars': 'stable/Hussar_aoe2DE.png',
        'knight': 'stable/Knight_aoe2DE.png',
        'knights': 'stable/Knight_aoe2DE.png',
        'cavalier': 'stable/Cavalier_aoe2DE.png',
        'cavaliers': 'stable/Cavalier_aoe2DE.png',
        'paladin': 'stable/Paladin_aoe2DE.png',
        'paladins': 'stable/Paladin_aoe2DE.png',
        'battle elephant': 'stable/Battle_elephant_aoe2DE.png',
        'battle elephants': 'stable/Battle_elephant_aoe2DE.png',
        'elite battle elephant': 'stable/EliteBattleElephantUpg.png',
        'elite battle elephants': 'stable/EliteBattleElephantUpg.png',
        'steppe lancer': 'stable/Steppelancericon.png',
        'steppe lancers': 'stable/Steppelancericon.png',
        'elite steppe lancer': 'stable/Elitesteppelancericon.png',
        'elite steppe lancers': 'stable/Elitesteppelancericon.png',
        'camel rider': 'stable/Camelrider_aoe2DE.png',
        'camel riders': 'stable/Camelrider_aoe2DE.png',
        'petard': 'castle/Petard_aoe2DE.png',
        'petards': 'castle/Petard_aoe2DE.png',
        'bombard cannon': 'siege_workshop/Bombard_cannon_aoe2DE.png',
        'bombard cannons': 'siege_workshop/Bombard_cannon_aoe2DE.png',
        'ram': 'siege_workshop/Battering_ram_aoe2DE.png',
        'rams': 'siege_workshop/Battering_ram_aoe2DE.png',
        'battering ram': 'siege_workshop/Battering_ram_aoe2DE.png',
        'battering rams': 'siege_workshop/Battering_ram_aoe2DE.png',
        'scorpion': 'siege_workshop/Scorpion_aoe2DE.png',
        'scorpions': 'siege_workshop/Scorpion_aoe2DE.png',
        'mangonel': 'siege_workshop/Mangonel_aoe2DE.png',
        'mangonels': 'siege_workshop/Mangonel_aoe2DE.png',
        'siege tower': 'siege_workshop/Siegetower_aoe2DE.png',
        'siege towers': 'siege_workshop/Siegetower_aoe2DE.png',
        'armored elephant': 'siege_workshop/AoE2DE_Armored_Elephant_icon.png',
        'armored elephants': 'siege_workshop/AoE2DE_Armored_Elephant_icon.png',
        'monk': 'monastery/Monk_aoe2DE.png',
        'monks': 'monastery/Monk_aoe2DE.png',
        'fishing ship': 'dock/FishingShipDE.png',
        'fishing ships': 'dock/FishingShipDE.png',
        'galley': 'dock/Galley_aoe2DE.png',
        'galleys': 'dock/Galley_aoe2DE.png',
        'fire galley': 'dock/Fire_galley_aoe2DE.png',
        'fire galleys': 'dock/Fire_galley_aoe2DE.png',
        'war galley': 'dock/War_galley_aoe2DE.png',
        'war galleys': 'dock/War_galley_aoe2DE.png',
        'jaguarwarrior': 'unique_unit/JaguarWarriorIcon-DE.png',
        'jaguar warrior': 'unique_unit/JaguarWarriorIcon-DE.png',
        'jaguar warriors': 'unique_unit/JaguarWarriorIcon-DE.png',
        'ratha': 'unique_unit/Aoe2de_ratha_ranged.png',
        'camelarcher': 'unique_unit/CamelArcherIcon-DE.png',
        'camel archer': 'unique_unit/CamelArcherIcon-DE.png',
        'camel archers': 'unique_unit/CamelArcherIcon-DE.png',
        'genitour': 'unique_unit/GenitourIcon-DE.png',
        'genitours': 'unique_unit/GenitourIcon-DE.png',
        'hussitewagon': 'unique_unit/Aoe2-icon-hussite-wagon.png',
        'hussite wagon': 'unique_unit/Aoe2-icon-hussite-wagon.png',
        'hussite wagons': 'unique_unit/Aoe2-icon-hussite-wagon.png',
        'houfnice': 'unique_unit/Aoe2-icon--houfnice.png',
        'longbowman': 'unique_unit/LongbowmanIcon-DE.png',
        'longbowmen': 'unique_unit/LongbowmanIcon-DE.png',
        'konnik': 'unique_unit/Konnikicon.png',
        'konniks': 'unique_unit/Konnikicon.png',
        'coustillier': 'unique_unit/Aoe2-icon-coustillier.png',
        'coustilliers': 'unique_unit/Aoe2-icon-coustillier.png',
        'flemishmilitia': 'unique_unit/Aoe2-icon-flemish-militia.png',
        'flemish militia': 'unique_unit/Aoe2-icon-flemish-militia.png',
        'flemish militias': 'unique_unit/Aoe2-icon-flemish-militia.png',
        'arambai': 'unique_unit/Arambaiicon-DE.png',
        'arambais': 'unique_unit/Arambaiicon-DE.png',
        'cataphract': 'unique_unit/CataphractIcon-DE.png',
        'cataphracts': 'unique_unit/CataphractIcon-DE.png',
        'woadraider': 'unique_unit/WoadRaiderIcon-DE.png',
        'woad raider': 'unique_unit/WoadRaiderIcon-DE.png',
        'woad raiders': 'unique_unit/WoadRaiderIcon-DE.png',
        'chukonu': 'unique_unit/ChukoNuIcon-DE.png',
        'chu ko nu': 'unique_unit/ChukoNuIcon-DE.png',
        'kipchak': 'unique_unit/Kipchakicon.png',
        'kipchaks': 'unique_unit/Kipchakicon.png',
        'urumiswordsman': 'unique_unit/Aoe2de_Urumi.png',
        'urumi swordsman': 'unique_unit/Aoe2de_Urumi.png',
        'urumi swordsmen': 'unique_unit/Aoe2de_Urumi.png',
        'thirisadai': 'unique_unit/Aoe2de_Thirisadai.png',
        'thirisadais': 'unique_unit/Aoe2de_Thirisadai.png',
        'shotelwarrior': 'unique_unit/Shotelwarrioricon-DE.png',
        'shotel warrior': 'unique_unit/Shotelwarrioricon-DE.png',
        'shotel warriors': 'unique_unit/Shotelwarrioricon-DE.png',
        'throwingaxeman': 'unique_unit/ThrowingAxemanIcon-DE.png',
        'throwing axeman': 'unique_unit/ThrowingAxemanIcon-DE.png',
        'throwing axemen': 'unique_unit/ThrowingAxemanIcon-DE.png',
        'huskarl': 'unique_unit/HuskarlIcon-DE.png',
        'huskarls': 'unique_unit/HuskarlIcon-DE.png',
        'chakramthrower': 'unique_unit/Aoe2de_Chakram.png',
        'chakram thrower': 'unique_unit/Aoe2de_Chakram.png',
        'chakram throwers': 'unique_unit/Aoe2de_Chakram.png',
        'shrivamsharider': 'unique_unit/Aoe2de_shrivamsha_rider.png',
        'shrivamsha rider': 'unique_unit/Aoe2de_shrivamsha_rider.png',
        'shrivamsha riders': 'unique_unit/Aoe2de_shrivamsha_rider.png',
        'camelscout': 'unique_unit/Aoe2de_camel_scout.png',
        'camel scout': 'unique_unit/Aoe2de_camel_scout.png',
        'camel scouts': 'unique_unit/Aoe2de_camel_scout.png',
        'ghulam': 'unique_unit/Aoe2de_Ghulam.png',
        'ghulams': 'unique_unit/Aoe2de_Ghulam.png',
        'imperialcamelrider': 'unique_unit/ImperialCamelRiderIcon-DE.png',
        'imperial camel rider': 'unique_unit/ImperialCamelRiderIcon-DE.png',
        'imperial camel riders': 'unique_unit/ImperialCamelRiderIcon-DE.png',
        'tarkan': 'unique_unit/TarkanIcon-DE.png',
        'tarkans': 'unique_unit/TarkanIcon-DE.png',
        'kamayuk': 'unique_unit/KamayukIcon-DE.png',
        'kamayuks': 'unique_unit/KamayukIcon-DE.png',
        'slinger': 'unique_unit/SlingerIcon-DE.png',
        'slingers': 'unique_unit/SlingerIcon-DE.png',
        'genoesecrossbowman': 'unique_unit/GenoeseCrossbowmanIcon-DE.png',
        'genoese crossbowman': 'unique_unit/GenoeseCrossbowmanIcon-DE.png',
        'genoese crossbowmen': 'unique_unit/GenoeseCrossbowmanIcon-DE.png',
        'condottiero': 'unique_unit/CondottieroIcon-DE.png',
        'samurai': 'unique_unit/SamuraiIcon-DE.png',
        'samurais': 'unique_unit/SamuraiIcon-DE.png',
        'ballistaelephant': 'unique_unit/Ballistaelephanticon-DE.png',
        'ballista elephant': 'unique_unit/Ballistaelephanticon-DE.png',
        'ballista elephants': 'unique_unit/Ballistaelephanticon-DE.png',
        'warwagon': 'unique_unit/WarWagonIcon-DE.png',
        'war wagon': 'unique_unit/WarWagonIcon-DE.png',
        'war wagons': 'unique_unit/WarWagonIcon-DE.png',
        'turtleship': 'unique_unit/TurtleShipIcon-DE.png',
        'turtle ship': 'unique_unit/TurtleShipIcon-DE.png',
        'turtle ships': 'unique_unit/TurtleShipIcon-DE.png',
        'leitis': 'unique_unit/Leitisicon.png',
        'wingedhussar': 'stable/Winged-hussar_upgrade.png',
        'winged hussar': 'stable/Winged-hussar_upgrade.png',
        'winged hussars': 'stable/Winged-hussar_upgrade.png',
        'magyarhuszar': 'unique_unit/MagyarHuszarIcon-DE.png',
        'magyar huszar': 'unique_unit/MagyarHuszarIcon-DE.png',
        'magyar huszars': 'unique_unit/MagyarHuszarIcon-DE.png',
        'karambitwarrior': 'unique_unit/Karambitwarrioricon-DE.png',
        'karambit warrior': 'unique_unit/Karambitwarrioricon-DE.png',
        'karambit warriors': 'unique_unit/Karambitwarrioricon-DE.png',
        'gbeto': 'unique_unit/GbetoIcon-DE.png',
        'plumedarcher': 'unique_unit/PlumedArcherIcon-DE.png',
        'plumed archer': 'unique_unit/PlumedArcherIcon-DE.png',
        'plumed archers': 'unique_unit/PlumedArcherIcon-DE.png',
        'mangudai': 'unique_unit/MangudaiIcon-DE.png',
        'mangudais': 'unique_unit/MangudaiIcon-DE.png',
        'warelephant': 'unique_unit/WarElephantIcon-DE.png',
        'war elephant': 'unique_unit/WarElephantIcon-DE.png',
        'war elephants': 'unique_unit/WarElephantIcon-DE.png',
        'obuch': 'unique_unit/Aoe2-icon--obuch.png',
        'organgun': 'unique_unit/OrganGunIcon-DE.png',
        'organ gun': 'unique_unit/OrganGunIcon-DE.png',
        'organ guns': 'unique_unit/OrganGunIcon-DE.png',
        'caravel': 'unique_unit/CaravelIcon-DE.png',
        'caravels': 'unique_unit/CaravelIcon-DE.png',
        'mameluke': 'unique_unit/MamelukeIcon-DE.png',
        'mamelukes': 'unique_unit/MamelukeIcon-DE.png',
        'serjeant': 'unique_unit/Aoe2-icon-serjeant.png',
        'serjeants': 'unique_unit/Aoe2-icon-serjeant.png',
        'boyar': 'unique_unit/BoyarIcon-DE.png',
        'boyars': 'unique_unit/BoyarIcon-DE.png',
        'conq': 'unique_unit/ConquistadorIcon-DE.png',
        'conqs': 'unique_unit/ConquistadorIcon-DE.png',
        'conquistador': 'unique_unit/ConquistadorIcon-DE.png',
        'conquistadors': 'unique_unit/ConquistadorIcon-DE.png',
        'missionary': 'unique_unit/MissionaryIcon-DE.png',
        'missionaries': 'unique_unit/MissionaryIcon-DE.png',
        'keshik': 'unique_unit/Keshikicon.png',
        'keshiks': 'unique_unit/Keshikicon.png',
        'flamingcamel': 'unique_unit/Flaming_camel_icon.png',
        'flaming camel': 'unique_unit/Flaming_camel_icon.png',
        'flaming camels': 'unique_unit/Flaming_camel_icon.png',
        'teutonicknight': 'unique_unit/TeutonicKnightIcon-DE.png',
        'teutonic knight': 'unique_unit/TeutonicKnightIcon-DE.png',
        'teutonic knights': 'unique_unit/TeutonicKnightIcon-DE.png',
        'janissary': 'unique_unit/JanissaryIcon-DE.png',
        'janissaries': 'unique_unit/JanissaryIcon-DE.png',
        'rattanarcher': 'unique_unit/Rattanarchericon-DE.png',
        'rattan archer': 'unique_unit/Rattanarchericon-DE.png',
        'rattan archers': 'unique_unit/Rattanarchericon-DE.png',
        'berserk': 'unique_unit/BerserkIcon-DE.png',
        'berserks': 'unique_unit/BerserkIcon-DE.png',
        'longboat': 'unique_unit/LongboatIcon-DE.png',
        'longboats': 'unique_unit/LongboatIcon-DE.png'
    };
}
const htmlDecode = (input)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent || "";
};
/** Trim the white spaces at the beginning and end of string.
 *  Note: re-implemented to be compatible with old browsers.
 * 
 * @param x     input string
 *
 * @returns    string with initial and last spaces trimmed
 */ function trim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}
/** Trim the white spaces at the beginning of string.
 *  Note: re-implemented to be compatible with old browsers.
 * 
 * @param x     input string
 *
 * @returns    string with initial spaces trimmed
 */ function ltrim(x) {
    return x.replace(/^\s+/gm, '');
}
const convertTxtToIllustrated = function(note, convertDict) {
    let toLower = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, maxSize = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, ignoreInDict = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
    const noteSplit = note.split(' '); // note split based on spaces
    const splitCount = noteSplit.length; // number of elements in the split
    if (splitCount < 1) {
        return '';
    }
    // initial gather count size
    const initGatherCount = maxSize < 1 ? splitCount : maxSize;
    for(let gatherCount = initGatherCount; gatherCount > 0; gatherCount--){
        const setCount = splitCount - gatherCount + 1; // number of gather sets that can be made
        for(let firstID = 0; firstID < setCount; firstID++){
            let checkNote = noteSplit[firstID];
            for(let nextElemID = firstID + 1; nextElemID < firstID + gatherCount; nextElemID++){
                checkNote += ' ' + noteSplit[nextElemID];
            }
            let updatedCheckNote = checkNote; // update based on requests
            for (const ignoreElem of ignoreInDict){
                updatedCheckNote = updatedCheckNote.replace(ignoreElem, '');
            }
            if (toLower) {
                updatedCheckNote = updatedCheckNote.toLowerCase();
            }
            if (updatedCheckNote in convertDict) {
                // used to retrieve ignored parts
                let ignoreBefore = '';
                let ignoreAfter = '';
                if (ignoreInDict.length > 0) {
                    const checkNoteLen = checkNote.length;
                    // get back ignored parts (before dictionary replace)
                    for(let characterID = 0; characterID < checkNoteLen; characterID++){
                        if (ignoreInDict.includes(checkNote[characterID])) {
                            ignoreBefore += checkNote[characterID];
                        } else {
                            break;
                        }
                    }
                    // get back ignored parts (after dictionary replace)
                    for(let characterID = checkNoteLen - 1; characterID >= 0; characterID--){
                        if (ignoreInDict.includes(checkNote[characterID])) {
                            ignoreAfter += checkNote[characterID];
                        } else {
                            break;
                        }
                    }
                    if (ignoreAfter !== '') {
                        ignoreAfter = ignoreAfter.split('').reverse().join('');
                    }
                }
                let beforeNote = ''; // gather note parts before the found sub-note
                for(let beforeID = 0; beforeID < firstID; beforeID++){
                    beforeNote += ' ' + noteSplit[beforeID];
                }
                beforeNote = ltrim(beforeNote);
                let afterNote = ''; // gather note parts after the found sub-note
                for(let afterID = firstID + gatherCount; afterID < splitCount; afterID++){
                    afterNote += ' ' + noteSplit[afterID];
                }
                afterNote = ltrim(afterNote);
                // compose final note with part before, sub-note found and part after
                let finalNote = '';
                if (beforeNote !== '') {
                    finalNote += convertTxtToIllustrated(beforeNote, convertDict, toLower, maxSize, ignoreInDict) + ' ';
                }
                finalNote += ignoreBefore + '@' + convertDict[updatedCheckNote] + '@' + ignoreAfter;
                if (afterNote !== '') {
                    finalNote += ' ' + convertTxtToIllustrated(afterNote, convertDict, toLower, maxSize, ignoreInDict);
                }
                return finalNote;
            }
        }
    }
    // note (and sub-notes parts) not found, returning the initial TXT note
    return note;
};
/** Get an object element, checking if it exists (and providing a default value if it does not exist).
 * 
 * @param item            item object to check
 * @param name            name of the requested property of the item object 
 * @param defaultValue    default value to return in case the requested name is not found
 *
 * @returns    value of the requested item, defaut value if not found
 */ const getElemSafe = (item, name, defaultValue)=>{
    return item.hasOwnProperty(name) ? item[name] : defaultValue;
};
/** Compute the contribution of a requested resource, even if it does not exist.
 * 
 * @param resources    object with the different resources
 * @param name         name of the property to look for
 *
 * @returns    requested resource contribution value
 */ const resourceContribution = (resources, name)=>{
    if (resources.hasOwnProperty(name)) {
        return resources[name] >= 0 ? resources[name] : 0;
    } else {
        return 0;
    }
};
/** Update the age ID (1:Dark, 2:Feudal, 3:Castle, 4:Imperial).
 * 
 * @param currentAge    current age ID
 * @param step          current BO step
 *
 * @returns    updated age ID
 */ const updateAge = (currentAge, step)=>{
    if (step.type === "ageUp" || step.type === "newAge") {
        const age = step.age;
        if (age === "darkAge") return 1;
        else if (age === "feudalAge") return 2;
        else if (age === "castleAge") return 3;
        else if (age === "imperialAge") return 4;
        else return currentAge;
    } else {
        return currentAge;
    }
};
/** Get the age icon string sequence for each age ID
 * 
 * @param ageID    age ID (1:Dark, 2:Feudal, 3:Castle, 4:Imperial)
 *
 * @returns    string to add image of age ('Unknown age' if wrong ID)
 */ const getAgeIcon = (ageID)=>{
    if (ageID === 1) return '@age/DarkAgeIconDE_alpha.png@';
    else if (ageID === 2) return '@age/FeudalAgeIconDE_alpha.png@';
    else if (ageID === 3) return '@age/CastleAgeIconDE_alpha.png@';
    else if (ageID === 4) return '@age/ImperialAgeIconDE_alpha.png@';
    else return 'Unknown age';
};
/** Check if 2 sets of resources are identical.
 * 
 * @param resourcesA    first set of resources to compare
 * @param resourcesB    second set of resources to compare
 *
 * @returns    true if identical resources
 */ const isIdenticalResources = (resourcesA, resourcesB)=>{
    return resourcesA.wood === resourcesB.wood && resourcesA.food === resourcesB.food && resourcesA.gold === resourcesB.gold && resourcesA.stone === resourcesB.stone && resourcesA.builder === resourcesB.builder;
};
// Helper to get text representation of a step
const getStepText = (step)=>{
    switch(step.type){
        case "newVillagers":
            return "Create ".concat(step.count, " villagers on ").concat(step.task);
        case "moveVillagers":
            return "Move ".concat(step.count, " villagers from ").concat(step.from, " to ").concat(step.to);
        case "lure":
            return "Lure ".concat(step.count, " ").concat(step.animal);
        case "research":
            return "Research ".concat(step.tech.join(", "));
        case "ageUp":
            return "Click up to ".concat(step.age);
        case "newAge":
            return "Reach ".concat(step.age);
        case "build":
            return "Build ".concat(step.buildings.map((b)=>"".concat(b.count, " ").concat(b.type)).join(", "));
        case "custom":
            return step.text;
        case "trade":
            return "".concat(step.action === 'buy' ? 'Buy' : 'Sell', " ").concat(step.count, " ").concat(step.resource);
        case "trainUnit":
            return "Train ".concat(step.count, " ").concat(step.unit);
        case "collectGold":
            return "Collect ".concat(step.count, " gold with ").concat(step.task);
        case "decision":
            return "Decision: ".concat(step.text);
        default:
            return "Unknown step";
    }
};
const exportForRTSOverlay = async (build)=>{
    // start JSON Obj
    const jsonObj = {
        name: getElemSafe(build, 'title', 'Unkown title'),
        civilization: getElemSafe(build, 'civilization', 'Any'),
        author: getElemSafe(build, 'author', 'Build Order Guide'),
        source: getElemSafe(build, 'source', 'https://buildorderguide.com'),
        description: getElemSafe(build, 'description', ''),
        build_order: []
    };
    // update civilizations for RTS Overlay
    if (jsonObj['civilization'] === 'Generic') {
        jsonObj['civilization'] = 'Any';
    } else if (jsonObj['civilization'] === 'Meso') {
        jsonObj['civilization'] = [
            'Aztecs',
            'Incas',
            'Mayans'
        ];
    }
    // obtain the BO steps
    const steps = build.build || [];
    const stepsCount = steps.length;
    let currentAge = 1; // start in first Age (Dark Age)
    // store previous resources
    let previousResources = {
        wood: -1,
        food: -1,
        gold: -1,
        stone: -1,
        builder: -1
    };
    // get the conversion dictionary
    const convertDict = getImagesDictionary();
    let ageUpFlag = false; // true when step type is 'ageUp' (starting next step, until 'newAge')
    let newAgeFlag = false; // true when step type is 'newAge' (only used for next step)
    let newStepAge = false; // true to use a new step following 'ageUp' or 'newAge'
    // loop on all the steps
    for(let i = 0; i < stepsCount; i++){
        const step = steps[i];
        // resources
        const resources = step.resources || {
            wood: -1,
            food: -1,
            gold: -1,
            stone: -1,
            build: -1
        };
        // store new resources
        const newResources = {
            wood: getElemSafe(resources, 'wood', -1),
            food: getElemSafe(resources, 'food', -1),
            gold: getElemSafe(resources, 'gold', -1),
            stone: getElemSafe(resources, 'stone', -1),
            builder: getElemSafe(resources, 'build', -1)
        };
        // do not display builder if no builder for this step
        if (newResources['builder'] === 0) {
            newResources['builder'] = -1;
        }
        // count the number of villagers
        const newVillagerCount = resourceContribution(newResources, 'wood') + resourceContribution(newResources, 'food') + resourceContribution(newResources, 'gold') + resourceContribution(newResources, 'stone') + resourceContribution(newResources, 'builder');
        // naw age started
        if (step.type === 'newAge') {
            ageUpFlag = false;
            newAgeFlag = true;
            newStepAge = true;
            continue; // skip (nothing to add)
        }
        // convert note to Overlay format
        let rawNote = trim(getStepText(step));
        if (step.type === 'decision') {
            rawNote = step.text;
        }
        const newNote = convertTxtToIllustrated(rawNote, convertDict, true, 3, []);
        // check if we should still use the previous step
        let usePreviousStep = false;
        let ageUpNote = '';
        if (ageUpFlag || newAgeFlag) {
            usePreviousStep = jsonObj['build_order'].length >= 1 && !newStepAge;
            ageUpNote = (ageUpFlag ? 'Before ' : 'In ') + getAgeIcon(currentAge);
            newStepAge = false;
        } else {
            usePreviousStep = jsonObj['build_order'].length >= 1 && isIdenticalResources(newResources, previousResources); // no resource count change
        }
        // copy the resources for storing
        const storeResources = Object.assign({}, newResources);
        if (storeResources['builder'] === -1) {
            delete storeResources['builder'];
        }
        if (usePreviousStep) {
            const previousID = jsonObj['build_order'].length - 1; // ID of the previous BO step
            jsonObj['build_order'][previousID].villager_count = newVillagerCount;
            jsonObj['build_order'][previousID].age = currentAge;
            jsonObj['build_order'][previousID].resources = storeResources;
            jsonObj['build_order'][previousID].notes.push(newNote);
        } else {
            // new step element for the JSON format
            const newStepJson = {
                villager_count: newVillagerCount,
                age: currentAge,
                resources: storeResources,
                notes: []
            };
            if (ageUpNote !== '') {
                newStepJson['notes'].push(ageUpNote);
            }
            if (newNote !== '') {
                newStepJson['notes'].push(newNote);
            }
            // add new step
            jsonObj['build_order'].push(newStepJson);
        }
        // store previous resources
        previousResources = newResources;
        // check if age up flag (to use from next step until 'newAge')
        if (step.type === 'ageUp') {
            ageUpFlag = true;
            newAgeFlag = false;
            newStepAge = true;
            // update current age (starting next step)
            currentAge = updateAge(currentAge, step);
        }
        // new age flag disappears at the end of the step following its rise
        newAgeFlag = false;
    }
    const str = JSON.stringify(jsonObj, null, 4); // JSON to output string
    // save to clipboard
    try {
        await navigator.clipboard.writeText(htmlDecode(str));
    } catch (err) {
        console.error('Could not copy text: ', err);
        throw err;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ExportButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ExportButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$rtsOverlayExport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/rtsOverlayExport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ExportButton(param) {
    let { build, fullWidth = false } = param;
    _s();
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleExport = async ()=>{
        setIsExporting(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$rtsOverlayExport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportForRTSOverlay"])(build);
            setShowSuccess(true);
            setTimeout(()=>setShowSuccess(false), 3000);
        } catch (error) {
            console.error("Export failed:", error);
            alert("Failed to copy to clipboard. Please try again.");
        } finally{
            setIsExporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative ".concat(fullWidth ? "w-full" : "inline-block"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: handleExport,
                disabled: isExporting,
                variant: "secondary",
                fullWidth: fullWidth,
                title: "Copy to clipboard for RTS Overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/Other/rts_overlay-icon.png",
                            alt: "RTS Overlay",
                            width: 20,
                            height: 20,
                            className: "opacity-80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExportButton.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isExporting ? "Exporting..." : "Export for RTS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExportButton.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExportButton.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExportButton.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded shadow-lg whitespace-nowrap z-50 animate-in fade-in slide-in-from-top-1",
                children: "Copied to clipboard!"
            }, void 0, false, {
                fileName: "[project]/src/components/ExportButton.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExportButton.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(ExportButton, "umMP8JFpclT1hfKffogBnDKkhbo=");
_c = ExportButton;
var _c;
__turbopack_context__.k.register(_c, "ExportButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/InteractiveRating.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>InteractiveRating
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function InteractiveRating(param) {
    let { currentRating = 0, onRate, onSelect, disabled = false, showContainer = true, className = "", showTitle = true, showStatusText = true } = param;
    _s();
    const [hoverRating, setHoverRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleMouseEnter = (rating)=>{
        if (!disabled) {
            setHoverRating(rating);
        }
    };
    const handleMouseLeave = ()=>{
        setHoverRating(0);
    };
    const handleClick = (rating)=>{
        if (!disabled) {
            if (onSelect) {
                onSelect(rating);
            } else if (onRate) {
                onRate(rating);
            }
        }
    };
    const getStarColor = (starNumber)=>{
        const activeRating = hoverRating || currentRating;
        return starNumber <= activeRating ? "text-primary" : "text-muted";
    };
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (showTitle || showStatusText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    showTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-foreground mb-2",
                        children: "Rate this build"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveRating.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this),
                    showStatusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-foreground/70",
                        children: currentRating > 0 ? "You rated this build ".concat(currentRating, " star").concat(currentRating !== 1 ? "s" : "") : "Click a star to rate this build"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveRating.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveRating.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center space-x-2",
                children: [
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((starNumber)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "".concat(disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-110 transition-transform duration-200", " p-1"),
                        onClick: ()=>handleClick(starNumber),
                        onMouseEnter: ()=>handleMouseEnter(starNumber),
                        disabled: disabled,
                        "aria-label": "Rate ".concat(starNumber, " stars"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 ".concat(getStarColor(starNumber)),
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveRating.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveRating.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, starNumber, false, {
                        fileName: "[project]/src/components/InteractiveRating.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/InteractiveRating.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    const wrapperClasses = showContainer ? "bg-background rounded-default shadow-default p-6 w-full max-w-md mx-auto" : "w-full";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(wrapperClasses, " ").concat(className),
        onMouseLeave: handleMouseLeave,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/InteractiveRating.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(InteractiveRating, "zWb2jFrYPeyFrau6nMiBgTvaUiM=");
_c = InteractiveRating;
var _c;
__turbopack_context__.k.register(_c, "InteractiveRating");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/RatingModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>RatingModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveRating.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function RatingModal(param) {
    let { isOpen, onClose, userRating, onRate, submitting } = param;
    _s();
    const [selectedRating, setSelectedRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userRating || 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RatingModal.useEffect": ()=>{
            if (isOpen) {
                setSelectedRating(userRating || 0);
            }
        }
    }["RatingModal.useEffect"], [
        isOpen,
        userRating
    ]);
    if (!isOpen) return null;
    const handleConfirm = async ()=>{
        if (!selectedRating) {
            onClose();
            return;
        }
        try {
            await onRate(selectedRating);
            onClose();
        } catch (error) {
            console.error("Failed to submit rating", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-muted/80 z-50 backdrop-blur-sm cursor-pointer",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/RatingModal.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background rounded-default shadow-hover max-w-lg w-full p-6 border border-foreground/10 pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-foreground",
                                    children: "Rate this build"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RatingModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RatingModal.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RatingModal.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RatingModal.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            currentRating: selectedRating,
                            onSelect: setSelectedRating,
                            disabled: submitting,
                            showContainer: false,
                            showTitle: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/RatingModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: onClose,
                                    variant: "secondary",
                                    type: "button",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RatingModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleConfirm,
                                    disabled: !selectedRating || submitting,
                                    type: "button",
                                    children: submitting ? "Saving..." : "Confirm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RatingModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RatingModal.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RatingModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RatingModal.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(RatingModal, "5+VwuNsrZzxY1k1Sl8aVk/1Rts8=");
_c = RatingModal;
var _c;
__turbopack_context__.k.register(_c, "RatingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/FavoriteButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FavoriteButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function FavoriteButton(param) {
    let { isFavorited, onToggle } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "transition-colors duration-200 ".concat(isFavorited ? "text-cancel" : "text-muted hover:text-cancel"),
        onClick: (e)=>{
            e.stopPropagation();
            onToggle(e);
        },
        "aria-label": isFavorited ? "Remove from favorites" : "Add to favorites",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: isFavorited ? "currentColor" : "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/FavoriteButton.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/FavoriteButton.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FavoriteButton.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = FavoriteButton;
var _c;
__turbopack_context__.k.register(_c, "FavoriteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/builds/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BuildDetailPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VillagerCounts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VillagerCounts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Rating.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CivIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CivIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AttributeBadges$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AttributeBadges.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DifficultyBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DifficultyBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BuildView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BuildView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthPromptModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AuthPromptModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExportButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RatingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RatingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FavoriteButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Loading Component
const LoadingView = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto py-6 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-6 sm:px-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Loading build..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/builds/[id]/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/builds/[id]/page.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/builds/[id]/page.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LoadingView;
// Error Component
const ErrorView = (param)=>{
    let { error } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto py-6 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-6 sm:px-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: error || "The requested build could not be found."
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/builds/[id]/page.tsx",
                    lineNumber: 44,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/builds/[id]/page.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ErrorView;
// Header Component
const BuildHeader = (param)=>{
    let { build, userRating, onOpenRating, onStartFocus, isFavorited, onToggleFavorite } = param;
    const placeholderImage = "/images/Other/BuildImagePlaceholder.png";
    const canUseFocusMode = Array.isArray(build.build) && build.build.length > 0;
    const ratingButtonLabel = userRating > 0 ? "Update rating (".concat(userRating, "/5)") : "Rate this build";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CivIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    civilization: build.civilization,
                    showName: true
                }, void 0, false, {
                    fileName: "[project]/src/app/builds/[id]/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: build.title
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-foreground -mt-4 mb-4",
                children: build.source ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: build.source,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline hover:text-primary transition-colors",
                    children: build.author || "??"
                }, void 0, false, {
                    fileName: "[project]/src/app/builds/[id]/page.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : build.author || "??"
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: build.imageURL || placeholderImage,
                alt: build.title,
                width: 150,
                height: 112,
                className: "mb-4 mx-auto object-cover",
                onError: (e)=>{
                    console.error("Image failed to load:", build.imageURL);
                    e.currentTarget.src = placeholderImage;
                },
                onLoad: ()=>{
                    if (build.imageURL) {
                        console.log("Image loaded successfully:", build.imageURL);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            build.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto mb-4 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm leading-relaxed text-pretty",
                    children: build.description
                }, void 0, false, {
                    fileName: "[project]/src/app/builds/[id]/page.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center items-center gap-2 mb-2",
                children: [
                    build.difficulty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DifficultyBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        difficulty: build.difficulty
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 127,
                        columnNumber: 30
                    }, ("TURBOPACK compile-time value", void 0)),
                    build.attributes && build.attributes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AttributeBadges$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        attributes: build.attributes
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "[&>div]:mb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VillagerCounts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            build: build
                        }, void 0, false, {
                            fileName: "[project]/src/app/builds/[id]/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rating: build.avg_rating,
                        size: "medium"
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isFavorited: isFavorited,
                        onToggle: onToggleFavorite
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[180px] sm:flex-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: onOpenRating,
                            fullWidth: true,
                            children: ratingButtonLabel
                        }, void 0, false, {
                            fileName: "[project]/src/app/builds/[id]/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[180px] sm:flex-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            build: build,
                            fullWidth: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/builds/[id]/page.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[180px] sm:flex-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: onStartFocus,
                            disabled: !onStartFocus || !canUseFocusMode,
                            variant: "secondary",
                            fullWidth: true,
                            children: "Start Focus Mode"
                        }, void 0, false, {
                            fileName: "[project]/src/app/builds/[id]/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/builds/[id]/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/builds/[id]/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = BuildHeader;
function BuildDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [build, setBuild] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userRating, setUserRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [submittingRating, setSubmittingRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRatingModalOpen, setIsRatingModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthPromptOpen, setIsAuthPromptOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleOpenRatingModal = ()=>{
        if (!currentUser) {
            setIsAuthPromptOpen(true);
            return;
        }
        setIsRatingModalOpen(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildDetailPage.useEffect": ()=>{
            if (params.id) {
                loadBuild(params.id);
            }
        }
    }["BuildDetailPage.useEffect"], [
        params.id
    ]);
    // Load user's existing rating when user or build changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildDetailPage.useEffect": ()=>{
            if (currentUser && (build === null || build === void 0 ? void 0 : build.id)) {
                loadUserRating(build.id, currentUser.uid);
            } else {
                setUserRating(0);
            }
        }
    }["BuildDetailPage.useEffect"], [
        currentUser,
        build === null || build === void 0 ? void 0 : build.id
    ]);
    // Load user's favorites when user changes
    const loadUserFavorites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BuildDetailPage.useCallback[loadUserFavorites]": async ()=>{
            if (!currentUser) return;
            try {
                const userProfile = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loadProfileInfo({
                    uid: currentUser.uid
                });
                if (userProfile.favorites) {
                    setFavorites(userProfile.favorites);
                } else {
                    setFavorites([]);
                }
            } catch (error) {
                console.error("Failed to load user favorites:", error);
                // User profile doesn't exist yet - this is normal for new users
                setFavorites([]);
            }
        }
    }["BuildDetailPage.useCallback[loadUserFavorites]"], [
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildDetailPage.useEffect": ()=>{
            if (currentUser) {
                loadUserFavorites();
            } else {
                setFavorites([]);
            }
        }
    }["BuildDetailPage.useEffect"], [
        currentUser,
        loadUserFavorites
    ]);
    const loadBuild = async (buildId)=>{
        try {
            setLoading(true);
            setError(null);
            const buildData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loadPublishedBuildWithId(buildId);
            setBuild(buildData);
        } catch (e) {
            setError("Failed to load build");
        } finally{
            setLoading(false);
        }
    };
    const loadUserRating = async (buildId, userId)=>{
        try {
            const rating = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loadUserRatingForBuild(buildId, userId);
            setUserRating(rating.rating);
        } catch (e) {
            // User hasn't rated this build yet, which is fine
            setUserRating(0);
        }
    };
    const handleRating = async (rating)=>{
        if (!currentUser) {
            setIsRatingModalOpen(false);
            setIsAuthPromptOpen(true);
            return;
        }
        if (!build) return;
        try {
            setSubmittingRating(true);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rateBuildWithIdForUser(build.id, {
                uid: currentUser.uid
            }, rating);
            setUserRating(rating);
            // Reload build to get updated average rating
            await loadBuild(build.id);
        } catch (error) {
            console.error("Failed to submit rating:", error);
            alert("Failed to submit rating. Please try again.");
        } finally{
            setSubmittingRating(false);
        }
    };
    const handleStartFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BuildDetailPage.useCallback[handleStartFocus]": ()=>{
            if (!(build === null || build === void 0 ? void 0 : build.id)) return;
            router.push("/builds/".concat(build.id, "/focus"));
        }
    }["BuildDetailPage.useCallback[handleStartFocus]"], [
        build === null || build === void 0 ? void 0 : build.id,
        router
    ]);
    const handleToggleFavorite = async ()=>{
        if (!currentUser) {
            setIsAuthPromptOpen(true);
            return;
        }
        if (!build) return;
        try {
            const isFavorited = favorites.includes(build.id);
            if (isFavorited) {
                // Remove from favorites
                setFavorites(favorites.filter((id)=>id !== build.id));
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].removeFavBuildWithIdForUser(build.id, {
                    uid: currentUser.uid
                });
            } else {
                // Add to favorites
                setFavorites([
                    ...favorites,
                    build.id
                ]);
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].favBuildWithIdForUser(build.id, {
                    uid: currentUser.uid
                });
            }
        } catch (error) {
            console.error("Failed to toggle favorite:", error);
            // Show user-friendly error message
            alert("Failed to update favorites. Please try again.");
            // Revert the local state change on error
            await loadUserFavorites();
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingView, {}, void 0, false, {
            fileName: "[project]/src/app/builds/[id]/page.tsx",
            lineNumber: 327,
            columnNumber: 12
        }, this);
    }
    if (error || !build) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorView, {
            error: error
        }, void 0, false, {
            fileName: "[project]/src/app/builds/[id]/page.tsx",
            lineNumber: 331,
            columnNumber: 12
        }, this);
    }
    console.log("Build:", build);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto py-6 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildHeader, {
                            build: build,
                            userRating: userRating,
                            onOpenRating: handleOpenRatingModal,
                            onStartFocus: handleStartFocus,
                            isFavorited: favorites.includes(build.id),
                            onToggleFavorite: handleToggleFavorite
                        }, void 0, false, {
                            fileName: "[project]/src/app/builds/[id]/page.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BuildView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            build: build
                        }, void 0, false, {
                            fileName: "[project]/src/app/builds/[id]/page.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/builds/[id]/page.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            isRatingModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RatingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isRatingModalOpen,
                onClose: ()=>setIsRatingModalOpen(false),
                userRating: userRating,
                onRate: handleRating,
                submitting: submittingRating
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 355,
                columnNumber: 9
            }, this),
            isAuthPromptOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthPromptModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isAuthPromptOpen,
                onClose: ()=>setIsAuthPromptOpen(false),
                onLogin: ()=>router.push("/login"),
                onRegister: ()=>router.push("/register")
            }, void 0, false, {
                fileName: "[project]/src/app/builds/[id]/page.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/builds/[id]/page.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_s(BuildDetailPage, "Kd9zItusTCADlpziBfnULMk9K10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c3 = BuildDetailPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LoadingView");
__turbopack_context__.k.register(_c1, "ErrorView");
__turbopack_context__.k.register(_c2, "BuildHeader");
__turbopack_context__.k.register(_c3, "BuildDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_4833e378._.js.map