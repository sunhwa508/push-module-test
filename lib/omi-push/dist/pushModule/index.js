"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushModule = void 0;
var messaging_1 = require("@react-native-firebase/messaging");
var PushModule = /** @class */ (function () {
    function PushModule() {
        var _this = this;
        this._updateTokenToServer = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.requestUserPermission()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, messaging_1.default().getToken()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this._backMessageHandler = function () {
            try {
                messaging_1.default().setBackgroundMessageHandler(function (remoteMessage) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // 앱이 background 일경우
                        console.log('Message handled in the background!', remoteMessage);
                        return [2 /*return*/, JSON.stringify(remoteMessage)];
                    });
                }); });
            }
            catch (error) {
                console.log("[messageHandler]", error);
            }
            return;
        };
        this._frontMessageHandler = function () {
            try {
                messaging_1.default().onMessage(function (remoteMessage) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // 앱이 foreground 일경우
                        console.log('onMessage', remoteMessage);
                        return [2 /*return*/, JSON.stringify(remoteMessage)];
                    });
                }); });
            }
            catch (error) {
                console.log("[messageHandler]", error);
            }
            return;
        };
    }
    PushModule.prototype.requestUserPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authStatus, enabled, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, messaging_1.default().requestPermission()];
                    case 1:
                        authStatus = _a.sent();
                        enabled = authStatus === messaging_1.default.AuthorizationStatus.AUTHORIZED ||
                            authStatus === messaging_1.default.AuthorizationStatus.PROVISIONAL;
                        if (enabled) {
                            console.log('Authorization status:', authStatus);
                        }
                        return [2 /*return*/, enabled];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PushModule.prototype.backgroundMessage = function () {
        var _this = this;
        try {
            messaging_1.default().setBackgroundMessageHandler(function (remoteMessage) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log('Message handled in the background!', remoteMessage);
                    return [2 /*return*/];
                });
            }); });
        }
        catch (error) {
        }
    };
    PushModule.prototype.clickPushMessage = function () {
        try {
            messaging_1.default().onNotificationOpenedApp(function (remoteMessage) {
                //클릭 후 url 연동
            });
        }
        catch (error) {
            console.log("[clickPushMessage]", error);
        }
    };
    return PushModule;
}());
exports.PushModule = PushModule;
