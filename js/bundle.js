var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ALDEvent_ZQDSS_Def;
(function (ALDEvent_ZQDSS_Def) {
    ALDEvent_ZQDSS_Def["None"] = "";
    ALDEvent_ZQDSS_Def["ReportAdClickSuccess"] = "\u5E7F\u544A\u5BFC\u51FA\u6210\u529F";
    ALDEvent_ZQDSS_Def["ReportAdClickFail"] = "\u5E7F\u544A\u5BFC\u51FA\u5931\u8D25";
    ALDEvent_ZQDSS_Def["ReportLaunchOptions"] = "\u7528\u6237\u542F\u52A8\u53C2\u6570";
    //todo:添加你自己的阿拉丁事件
    ALDEvent_ZQDSS_Def["EnterLoading"] = "\u8FDB\u5165loading\u754C\u9762";
    ALDEvent_ZQDSS_Def["EnterMainView"] = "\u8FDB\u5165\u4E3B\u754C\u9762";
    ALDEvent_ZQDSS_Def["ClickGameStart"] = "\u70B9\u51FB\u8FDB\u5165\u6E38\u620F";
    ALDEvent_ZQDSS_Def["EnterStartClickGetPrize"] = "\u6E38\u620F\u5F00\u59CB\u8FDB\u5165\u72C2\u70B9";
    ALDEvent_ZQDSS_Def["EnterStartClickGetPrizeScene"] = "\u6E38\u620F\u5F00\u59CB\u8FDB\u5165\u72C2\u70B9\u573A\u666F\u503C";
    ALDEvent_ZQDSS_Def["StayStartClickGetPrizeTime"] = "\u6E38\u620F\u5F00\u59CB\u72C2\u70B9\u505C\u7559\u65F6\u95F4";
    ALDEvent_ZQDSS_Def["EnterBattleView"] = "\u8FDB\u5165\u6E38\u620F\u754C\u9762";
    ALDEvent_ZQDSS_Def["EnterGameComplateView"] = "\u8FDB\u5165\u6E38\u620F\u7ED3\u675F\u754C\u9762";
})(ALDEvent_ZQDSS_Def = exports.ALDEvent_ZQDSS_Def || (exports.ALDEvent_ZQDSS_Def = {}));
//阿拉丁相关接口
var ALD_ZQDSS_ = /** @class */ (function () {
    function ALD_ZQDSS_() {
    }
    ALD_ZQDSS_.ald_ZQDSS_SendOpenId = function (openid) {
       
    };
    ALD_ZQDSS_.ald_ZQDSS_SendEvent = function (event, data) {
       
    };
    ALD_ZQDSS_.ald_ZQDSS_SendReport_ZQDSS_AdClickSuccess = function (data) {

    };
    ALD_ZQDSS_.aldSendReportAdClickFail = function (data) {
      
    };
    ALD_ZQDSS_.aldSendOnlySingleReport = function (eventType, reportData) {
       
    };
    ALD_ZQDSS_.aldSendReportLaunchOptions = function (sceneid, ip, location) {
       
    };
    ALD_ZQDSS_._singleReportMap = {};
    return ALD_ZQDSS_;
}());
exports.default = ALD_ZQDSS_;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_ZQDSS_Config = /** @class */ (function () {
    function App_ZQDSS_Config() {
    }
    App_ZQDSS_Config.App_ZQDSS_ID = "";
    App_ZQDSS_Config.Res_ZQDSS_Server = "subRes"; //资源服务器地址
    App_ZQDSS_Config.Local_ZQDSS_TestReServer = "subRes"; //本地测试资源服务器地址
    App_ZQDSS_Config.Versions_ZQDSS_ = "";
    App_ZQDSS_Config.onTT_ZQDSS_MiniGame = false; //是否是头条小游戏
    return App_ZQDSS_Config;
}());
exports.default = App_ZQDSS_Config;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppSwitchConfig_1 = require("./Config/AppSwitchConfig");
var Cached_ZQDSS_WXBannerAd = /** @class */ (function () {
    function Cached_ZQDSS_WXBannerAd() {
    }
    Cached_ZQDSS_WXBannerAd.pre_ZQDSS_loadBanner = function () {
    };
    Cached_ZQDSS_WXBannerAd.get_ZQDSS_Banner = function (bannerid) {
    };
    Cached_ZQDSS_WXBannerAd.create_ZQDSS_ = function (bannerid) {
    };
    Cached_ZQDSS_WXBannerAd.show_ZQDSS_ = function () {
    };
    Cached_ZQDSS_WXBannerAd.hide_ZQDSS_ = function () {
    };
    Cached_ZQDSS_WXBannerAd.change_ZQDSS_Show = function () {
    };
    Cached_ZQDSS_WXBannerAd.clear_ZQDSS_ = function () {
    };
    Cached_ZQDSS_WXBannerAd._banner_ZQDSS_Cache = {};
    Cached_ZQDSS_WXBannerAd._cur_ZQDSS_Banner = null;
    Cached_ZQDSS_WXBannerAd._pre_ZQDSS_LoopObj = {};
    return Cached_ZQDSS_WXBannerAd;
}());
exports.default = Cached_ZQDSS_WXBannerAd;
},{"./Config/AppSwitchConfig":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig_1 = require("../AppConfig");
var App_ZQDSS_Switch_ZQDSS_Data = /** @class */ (function () {
    function App_ZQDSS_Switch_ZQDSS_Data() {
        this.version_ZQDSS_ = "";
        this.banner_ZQDSS_ = 0;
        this.wu_ZQDSS_dian = 0;
        this.wudianAvailableTime = {
            "0": 0, "1": 0, "2": 0, "3": 0,
            "4": 0, "5": 0, "6": 0, "7": 0,
            "8": 0, "9": 0, "10": 0, "11": 0,
            "12": 0, "13": 0, "14": 0, "15": 0,
            "16": 0, "17": 0, "18": 0, "19": 0,
            "20": 0, "21": 0, "22": 0, "23": 0
        };
        this.mai_ZQDSS_liang = 1;
        this.mai_ZQDSS_lianglist = new Array();
        this.mai_ZQDSS_liangSceneList = new Array();
        this.wxWu_ZQDSS_DianBanners = new Array();
        this.btn_ZQDSS_MoveTimer = 1;
        this.banner_ZQDSS_MoveTimer = 0.5;
        this.banner_ZQDSS_FreshTimer = 200;
        this.banner_ZQDSS_CreateFailNum = 3;
        this.banner_ZQDSS_TodayBannerMax = 10;
        this.ad_ZQDSS_Switch = 1;
        this.wudian_ZQDSS_SceneList = new Array();
        this.blood = 0;
    }
    Object.defineProperty(App_ZQDSS_Switch_ZQDSS_Data.prototype, "wudianTimeAvaliable", {
        /**
         * 得到当前时间开关是否打开
         *
         * @readonly
         * @type {boolean}
         * @memberof AppSwitchData
         */
        get: function () {
            return this.wudianAvailableTime[new Date().getHours()] == 1;
        },
        enumerable: true,
        configurable: true
    });
    return App_ZQDSS_Switch_ZQDSS_Data;
}());
exports.App_ZQDSS_Switch_ZQDSS_Data = App_ZQDSS_Switch_ZQDSS_Data;
var App_ZQDSS_Switch_ZQDSS_Config = /** @class */ (function () {
    function App_ZQDSS_Switch_ZQDSS_Config() {
        this._data = new Array();
    }
    App_ZQDSS_Switch_ZQDSS_Config.getInstance = function () {
        if (null == App_ZQDSS_Switch_ZQDSS_Config._instance) {
            App_ZQDSS_Switch_ZQDSS_Config._instance = App_ZQDSS_Switch_ZQDSS_Config.loadp_ZQDSS_();
        }
        return App_ZQDSS_Switch_ZQDSS_Config._instance;
    };
     App_ZQDSS_Switch_ZQDSS_Config.loadp_ZQDSS_ = function () {
        var config = new App_ZQDSS_Switch_ZQDSS_Config();
        var json = Laya.loader.getRes(AppConfig_1.default.Res_ZQDSS_Server + "/json/appswitch.json");
        if (json) {
            for (var i = 0; i < json.length; ++i) {
                var row = json[i];
                var rowData = new App_ZQDSS_Switch_ZQDSS_Data();
                rowData.version_ZQDSS_ = String(row["version"]);
                rowData.banner_ZQDSS_ = Number(row["banner"]);
                rowData.wu_ZQDSS_dian = Number(row["wudian"]);
                rowData.wudianAvailableTime = Object(row["wudianTime"]);
                rowData.mai_ZQDSS_liang = Number(row["mailiang"]);
                rowData.btn_ZQDSS_MoveTimer = Number(row["btnMoveTimer"]);
                rowData.banner_ZQDSS_MoveTimer = Number(row["bannerMoveTimer"]);
                rowData.banner_ZQDSS_CreateFailNum = Number(row["createFailNum"]);
                rowData.banner_ZQDSS_FreshTimer = Number(row["bannerFreshTimer"]);
                rowData.banner_ZQDSS_TodayBannerMax = Number(row["todayBannerMax"]);
                rowData.ad_ZQDSS_Switch = Number(row["adSwitch"]);
                var wudianSceneList = row["wudianSceneList"];
                if (null != wudianSceneList) {
                    for (var j = 0; j < wudianSceneList.length; ++j) {
                        var wudianSceneValue = Number(wudianSceneList[j]);
                        rowData.wudian_ZQDSS_SceneList.push(wudianSceneValue);
                    }
                }
                rowData.blood = Number(row["blood"]);
                config._data.push(rowData);
            }
            return config;
        }
        else {
            config._data.push(new App_ZQDSS_Switch_ZQDSS_Data());
            return config;
        }
    };
    App_ZQDSS_Switch_ZQDSS_Config.prototype.get_ZQDSS_AppSwitch_ZQDSS_Data = function () {
        return "";
    };
    return App_ZQDSS_Switch_ZQDSS_Config;
}());
exports.default = App_ZQDSS_Switch_ZQDSS_Config;
},{"../AppConfig":2}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig_1 = require("../AppConfig");
var LevelData = /** @class */ (function () {
    function LevelData() {
        this.levelNum = 0;
        this.isBoss = false;
        this.sceneIcon = "";
        this.moneyReward = 0;
    }
    return LevelData;
}());
exports.LevelData = LevelData;
var LevelConfig = /** @class */ (function () {
    function LevelConfig() {
        this._data = new Array();
    }
    LevelConfig.getInstance = function () {
        if (null == LevelConfig._instance) {
            LevelConfig._instance = LevelConfig.load();
        }
        return LevelConfig._instance;
    };
    LevelConfig.load = function () {
        var config = new LevelConfig();
        var json = Laya.loader.getRes(AppConfig_1.default.Local_ZQDSS_TestReServer + "/json/levelConfig.json");
        for (var i = 0; i < json.length; ++i) {
            var row = json[i];
            var rowData = new LevelData();
            rowData.levelNum = Number(row["levelNum"]);
            rowData.isBoss = Boolean(row["isBoss"]);
            rowData.sceneIcon = row["sceneIcon"];
            rowData.moneyReward = Number(row["moneyReward"]);
            config._data.push(rowData);
        }
        return config;
    };
    LevelConfig.prototype.getLevelData = function (levelNum) {
        //console.log("dssa");
        for (var i = 0; i < this._data.length; ++i) {
            var data = this._data[i];
            if (data.levelNum == levelNum) {
                return data;
            }
        }
        return null;
    };
    LevelConfig.prototype.getLevelCount = function () {
        return this._data.length;
    };
    return LevelConfig;
}());
exports.default = LevelConfig;
},{"../AppConfig":2}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event_ZQDSS_Def;
(function (Event_ZQDSS_Def) {
    Event_ZQDSS_Def[Event_ZQDSS_Def["None"] = 0] = "None";
    Event_ZQDSS_Def[Event_ZQDSS_Def["App__ZQDSS_CloseFirstLoadingView"] = 500] = "App__ZQDSS_CloseFirstLoadingView";
    Event_ZQDSS_Def[Event_ZQDSS_Def["AD__ZQDSS_OnShareAd_ZQDSS_Fail"] = 501] = "AD__ZQDSS_OnShareAd_ZQDSS_Fail";
    //当界面打开
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_On_ZQDSS_View_ZQDSS_Open"] = 600] = "Game_On_ZQDSS_View_ZQDSS_Open";
    //当界面关闭
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_On_ZQDSS_View_ZQDSS_Close"] = 601] = "Game_On_ZQDSS_View_ZQDSS_Close";
    //当玩家金币变动
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_On_ZQDSS_User_ZQDSS_Money_ZQDSS_Change"] = 701] = "Game_On_ZQDSS_User_ZQDSS_Money_ZQDSS_Change";
    //当玩家钻石变动
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_On_ZQDSS_User_ZQDSS_Crystal_ZQDSS_Change"] = 702] = "Game_On_ZQDSS_User_ZQDSS_Crystal_ZQDSS_Change";
    //当关卡开始
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_On_ZQDSS_Level_ZQDSS_Start"] = 1000] = "Game_On_ZQDSS_Level_ZQDSS_Start";
    //当关卡结束
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_On_ZQDSS_Level_ZQDSS_Complate"] = 1001] = "Game_On_ZQDSS_Level_ZQDSS_Complate";
    //误点预加载完毕
    Event_ZQDSS_Def[Event_ZQDSS_Def["AD_Wudian_ZQDSS_Banner_LoadComplete"] = 2217] = "AD_Wudian_ZQDSS_Banner_LoadComplete";
    //显示误点Banner
    Event_ZQDSS_Def[Event_ZQDSS_Def["AD_Wudian_ZQDSS_Banner_Show"] = 2218] = "AD_Wudian_ZQDSS_Banner_Show";
    //影藏误点Banner
    Event_ZQDSS_Def[Event_ZQDSS_Def["AD_Wudian_ZQDSS_Banner_Hide"] = 2219] = "AD_Wudian_ZQDSS_Banner_Hide";
    //预加载Banner
    Event_ZQDSS_Def[Event_ZQDSS_Def["AD_Wudian_ZQDSS_Banner_PreLoad"] = 2220] = "AD_Wudian_ZQDSS_Banner_PreLoad";
    //Tips:在这条添加定义你自己需要的事件，从10000号开始。记得分段分类管理不同类型事件。如果事件有传递参数 "必须" 在事件后面用注释写明事件参数结构。
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnClickInput"] = 10000] = "Game_OnClickInput";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnPlayerTargetPointComplate"] = 11000] = "Game_OnPlayerTargetPointComplate";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnEnterBattle"] = 11001] = "Game_OnEnterBattle";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnExitBattle"] = 11002] = "Game_OnExitBattle";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnPlayerDead"] = 11003] = "Game_OnPlayerDead";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnGameComplate"] = 11004] = "Game_OnGameComplate";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnBanditDead"] = 11005] = "Game_OnBanditDead";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnBattleClear"] = 11006] = "Game_OnBattleClear";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_BossOpenFire"] = 11007] = "Game_BossOpenFire";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnPlayerMoveEnd"] = 11008] = "Game_OnPlayerMoveEnd";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnBossHpChange"] = 11009] = "Game_OnBossHpChange";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnPlayerBulletNumChange"] = 11010] = "Game_OnPlayerBulletNumChange";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_PlayerReloadBullet"] = 11011] = "Game_PlayerReloadBullet";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnEnterBossBattle"] = 11012] = "Game_OnEnterBossBattle";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_OnBanditHeadShoot"] = 11013] = "Game_OnBanditHeadShoot";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_SetCamYAngle"] = 11014] = "Game_SetCamYAngle";
    Event_ZQDSS_Def[Event_ZQDSS_Def["Game_GameCompalte"] = 12000] = "Game_GameCompalte";
})(Event_ZQDSS_Def = exports.Event_ZQDSS_Def || (exports.Event_ZQDSS_Def = {}));
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventDispatcher = Laya.EventDispatcher;
var Event_ZQDSS_Mgr = /** @class */ (function (_super) {
    __extends(Event_ZQDSS_Mgr, _super);
    function Event_ZQDSS_Mgr() {
        return _super.call(this) || this;
    }
    ;
    //广播事件
    Event_ZQDSS_Mgr.prototype.dis_ZQDSS_patch = function (InName, agv) {
        Event_ZQDSS_Mgr.event_ZQDSS_Dispatcher.event(InName, agv);
    };
    //注册事件
    Event_ZQDSS_Mgr.prototype.reg_ZQDSS_Evemt = function (InName, caller, listener, arg) {
        Event_ZQDSS_Mgr.event_ZQDSS_Dispatcher.on(InName, caller, listener, (arg == null) ? null : ([arg]));
    };
    //注册单次事件
    Event_ZQDSS_Mgr.prototype.reg_ZQDSS_OnceEvent = function (InName, caller, listener, arg) {
        Event_ZQDSS_Mgr.event_ZQDSS_Dispatcher.once(InName, caller, listener, (arg == null) ? null : ([arg]));
    };
    //移除事件注册
    Event_ZQDSS_Mgr.prototype.remove_ZQDSS_Event = function (InName, caller, listener, arg) {
        Event_ZQDSS_Mgr.event_ZQDSS_Dispatcher.off(InName, caller, listener);
    };
    Event_ZQDSS_Mgr.event_ZQDSS_Dispatcher = new EventDispatcher();
    Event_ZQDSS_Mgr.instance = new Event_ZQDSS_Mgr();
    return Event_ZQDSS_Mgr;
}(EventDispatcher));
exports.default = Event_ZQDSS_Mgr;
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var GameMgr_1 = require("./Mgr/GameMgr");
var MiddleAnchor_1 = require("./View/Tools/MiddleAnchor");
var ViewAutoScaleByW_1 = require("./View/Tools/ViewAutoScaleByW");
var BackgroundView_1 = require("./View/BackgroundView/BackgroundView");
var ButtonAnim_1 = require("./View/ButtonAnim");
var CrazyClickView_1 = require("./View/CrazyClickView/CrazyClickView");
var MoneyTips_1 = require("./View/Common/MoneyTips");
var TopZone_1 = require("./View/Common/TopZone");
var MyLoopAdBox_1 = require("./ShareAd/View/MyLoopAdBox");
var HorizontalLoopAdView_1 = require("./ShareAd/View/HorizontalLoopAdView");
var GameOverView_1 = require("./View/GameOverView/GameOverView");
var BannerAdView_1 = require("./ShareAd/View/BannerAdView");
var GameView_1 = require("./View/GameView/GameView");
var LoadingView_1 = require("./View/LoadingView/LoadingView");
var LevelBox_1 = require("./View/MainView/LevelBox");
var MySingleAdView_1 = require("./ShareAd/View/MySingleAdView");
var MySingleAniADView_1 = require("./ShareAd/View/MySingleAniADView");
var UniversalBottomZone_1 = require("./View/Common/UniversalBottomZone");
var MainView_1 = require("./View/MainView/MainView");
var TipsView_1 = require("./View/TipsView/TipsView");
var LoopAdBox_1 = require("./ShareAd/View/LoopAdBox");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("Mgr/GameMgr.ts", GameMgr_1.default);
        reg("View/Tools/MiddleAnchor.ts", MiddleAnchor_1.default);
        reg("View/Tools/ViewAutoScaleByW.ts", ViewAutoScaleByW_1.default);
        reg("View/BackgroundView/BackgroundView.ts", BackgroundView_1.default);
        reg("View/ButtonAnim.ts", ButtonAnim_1.default);
        reg("View/CrazyClickView/CrazyClickView.ts", CrazyClickView_1.default);
        reg("View/Common/MoneyTips.ts", MoneyTips_1.default);
        reg("View/Common/TopZone.ts", TopZone_1.default);
        reg("ShareAd/View/MyLoopAdBox.ts", MyLoopAdBox_1.default);
        reg("ShareAd/View/HorizontalLoopAdView.ts", HorizontalLoopAdView_1.default);
        reg("View/GameOverView/GameOverView.ts", GameOverView_1.default);
        reg("ShareAd/View/BannerAdView.ts", BannerAdView_1.default);
        reg("View/GameView/GameView.ts", GameView_1.default);
        reg("View/LoadingView/LoadingView.ts", LoadingView_1.default);
        reg("View/MainView/LevelBox.ts", LevelBox_1.default);
        reg("ShareAd/View/MySingleAdView.ts", MySingleAdView_1.default);
        reg("ShareAd/View/MySingleAniADView.ts", MySingleAniADView_1.default);
        reg("View/Common/UniversalBottomZone.ts", UniversalBottomZone_1.default);
        reg("View/MainView/MainView.ts", MainView_1.default);
        reg("View/TipsView/TipsView.ts", TipsView_1.default);
        reg("ShareAd/View/LoopAdBox.ts", LoopAdBox_1.default);
    };
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "GameMain.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = true;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();
},{"./Mgr/GameMgr":43,"./ShareAd/View/BannerAdView":55,"./ShareAd/View/HorizontalLoopAdView":56,"./ShareAd/View/LoopAdBox":57,"./ShareAd/View/MyLoopAdBox":58,"./ShareAd/View/MySingleAdView":59,"./ShareAd/View/MySingleAniADView":60,"./View/BackgroundView/BackgroundView":66,"./View/ButtonAnim":67,"./View/Common/MoneyTips":68,"./View/Common/TopZone":69,"./View/Common/UniversalBottomZone":70,"./View/CrazyClickView/CrazyClickView":71,"./View/GameOverView/GameOverView":72,"./View/GameView/GameView":73,"./View/LoadingView/LoadingView":75,"./View/MainView/LevelBox":76,"./View/MainView/MainView":77,"./View/TipsView/TipsView":78,"./View/Tools/MiddleAnchor":79,"./View/Tools/ViewAutoScaleByW":80}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventMgr_1 = require("../Event/EventMgr");
var EventDef_1 = require("../Event/EventDef");
var UnitType_1 = require("./Unit/UnitType");
var GameUtilit_1 = require("./GameUtilit");
var BattleData = /** @class */ (function () {
    function BattleData() {
        this.Time = 0;
        this.MoveSpeed = 0;
        this.AniName = "";
        this.TotalDis = 0;
        this.CamOffset = new Laya.Vector3();
        this.CamYAngleOffsett = GameUtilit_1.default.CAMERA_DEFAULT_Y_ANGLE;
    }
    return BattleData;
}());
exports.BattleData = BattleData;
var BattleTrigger = /** @class */ (function (_super) {
    __extends(BattleTrigger, _super);
    function BattleTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isActive = false;
        _this._level = null;
        _this._aniName = "";
        _this._battleTime = 0;
        _this._camOffset = new Laya.Vector3();
        _this._camYAngelOffset = GameUtilit_1.default.CAMERA_DEFAULT_Y_ANGLE;
        _this._roadPointIndexs = new Array();
        _this._units = new Array();
        return _this;
    }
    Object.defineProperty(BattleTrigger.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    BattleTrigger.prototype.init = function (level) {
        this._level = level;
        var para = this.owner.name.split("_");
        this._aniName = para[0];
        if (null != para[1]) {
            this._battleTime = Number(para[1]);
        }
        if (null != para[2]) {
            this._camOffset.x = Number(para[2]);
        }
        if (null != para[3]) {
            this._camOffset.y = Number(para[3]);
        }
        if (null != para[4]) {
            this._camOffset.z = Number(para[4]);
        }
        if (null != para[5]) {
            this._camYAngelOffset = Number(para[5]);
        }
        var transform = this.owner.transform;
        var path = this._level.NavigationMgr.getPath();
        var units = this._level.getUnitsByType();
        var collider = this.owner.getComponent(Laya.PhysicsCollider);
        var box = collider.colliderShape;
        for (var i = 0; i < path.PathPoints.length; ++i) {
            var point = path.PathPoints[i];
            if (point.transform.position.x >= transform.position.x - box.sizeX / 2
                && point.transform.position.x <= transform.position.x + box.sizeX / 2
                && point.transform.position.y >= transform.position.y - box.sizeY / 2
                && point.transform.position.y <= transform.position.y + box.sizeY / 2) {
                this._roadPointIndexs.push(i);
            }
        }
        for (var i = 0; i < units.length; ++i) {
            var unit = units[i];
            if (unit.transform.position.x >= transform.position.x - box.sizeX / 2
                && unit.transform.position.x <= transform.position.x + box.sizeX / 2
                && unit.transform.position.y >= transform.position.y - box.sizeY / 2
                && unit.transform.position.y <= transform.position.y + box.sizeY / 2) {
                this._units.push(unit);
            }
        }
    };
    BattleTrigger.prototype.onEnable = function () {
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerTargetPointComplate, this, this.onPlayerTargetPointComplate);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnBanditDead, this, this.onBanditDead);
    };
    BattleTrigger.prototype.onDisable = function () {
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerTargetPointComplate, this, this.onPlayerTargetPointComplate);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnBanditDead, this, this.onBanditDead);
    };
    BattleTrigger.prototype.onPlayerTargetPointComplate = function (para) {
        var index = para.index;
        if (this._roadPointIndexs.length > 0) {
            if (this._roadPointIndexs[0] == index) {
                //console.log("进入战斗");
                this._isActive = true;
                for (var i = 0; i < this._units.length; ++i) {
                    var unit = this._units[i];
                    if (GameUtilit_1.default.isBandit(unit)) {
                        var bandit = unit;
                        bandit.ActiveBandit();
                    }
                }
                EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBattle, { trigger: this });
            }
            else if (this._roadPointIndexs[this._roadPointIndexs.length - 1] == index) {
                //console.log("退出战斗");
                this._isActive = false;
                for (var i = 0; i < this._units.length; ++i) {
                    var unit = this._units[i];
                    if (unit.Type == UnitType_1.Unit_ZQDSS_Type.Bandit) {
                        var bandit = unit;
                        bandit.DeactiveBandit();
                    }
                }
                EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnExitBattle, { trigger: this });
            }
        }
    };
    BattleTrigger.prototype.getBattleData = function () {
        var battleTime = null != this._battleTime ? this._battleTime : 6;
        var totalDis = 0;
        var path = this._level.NavigationMgr.getPath();
        for (var i = 0; i < this._roadPointIndexs.length; ++i) {
            var curIndex = this._roadPointIndexs[i];
            var lastIndex = this._roadPointIndexs[i + 1];
            if (null != lastIndex) {
                var curPoint = path.PathPoints[curIndex];
                var lastPoint = path.PathPoints[lastIndex];
                totalDis += Laya.Vector3.distance(curPoint.transform.position, lastPoint.transform.position);
            }
        }
        var data = new BattleData();
        data.MoveSpeed = totalDis / (battleTime / 1000);
        data.Time = battleTime;
        data.AniName = this._aniName;
        data.TotalDis = totalDis;
        data.CamOffset = this._camOffset;
        data.CamYAngleOffsett = this._camYAngelOffset;
        return data;
    };
    BattleTrigger.prototype.onBanditDead = function (para) {
        if (!this._isActive)
            return;
        var bandit = para.bandit;
        var clear = true;
        for (var i = 0; i < this._units.length; ++i) {
            var unit = this._units[i];
            if (GameUtilit_1.default.isBandit(unit)) {
                var bandit_1 = unit;
                if (!bandit_1.is_ZQDSS_Dead) {
                    clear = false;
                    break;
                }
            }
        }
        if (clear) {
            EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnBattleClear, { trigger: this });
        }
    };
    return BattleTrigger;
}(Laya.Script3D));
exports.default = BattleTrigger;
},{"../Event/EventDef":6,"../Event/EventMgr":7,"./GameUtilit":15,"./Unit/UnitType":36}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BattleTrigger_1 = require("./BattleTrigger");
var EventMgr_1 = require("../Event/EventMgr");
var EventDef_1 = require("../Event/EventDef");
var UnitType_1 = require("./Unit/UnitType");
var GameUtilit_1 = require("./GameUtilit");
var BossBattleTrigger = /** @class */ (function (_super) {
    __extends(BossBattleTrigger, _super);
    function BossBattleTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._start = null;
        _this._end = null;
        return _this;
    }
    BossBattleTrigger.prototype.init = function (level) {
        this._level = level;
        var transform = this.owner.transform;
        var path = this._level.NavigationMgr.getPath();
        var units = this._level.getUnitsByType();
        var collider = this.owner.getComponent(Laya.PhysicsCollider);
        var box = collider.colliderShape;
        for (var i = 0; i < path.PathPoints.length; ++i) {
            var point = path.PathPoints[i];
            if (point.transform.position.x >= transform.position.x - box.sizeX / 2
                && point.transform.position.x <= transform.position.x + box.sizeX / 2
                && point.transform.position.y >= transform.position.y - box.sizeY / 2
                && point.transform.position.y <= transform.position.y + box.sizeY / 2) {
                this._roadPointIndexs.push(i);
            }
        }
        for (var i = 0; i < units.length; ++i) {
            var unit = units[i];
            if (unit.transform.position.x >= transform.position.x - box.sizeX / 2
                && unit.transform.position.x <= transform.position.x + box.sizeX / 2
                && unit.transform.position.y >= transform.position.y - box.sizeY / 2
                && unit.transform.position.y <= transform.position.y + box.sizeY / 2) {
                this._units.push(unit);
            }
        }
    };
    BossBattleTrigger.prototype.onPlayerTargetPointComplate = function (para) {
        var index = para.index;
        var player = para.player;
        var roadPath = this._level.NavigationMgr.getPath();
        var pointSp3d = roadPath.get_ZQDSS_PointBy_ZQDSS_Index(index);
        var data = GameUtilit_1.PathData.parse(pointSp3d.name);
        if (data.name != "end") {
            this._camOffset.x = data.CamOffset.x;
            this._camOffset.y = data.CamOffset.y;
            this._camOffset.z = data.CamOffset.z;
            this._camYAngelOffset = data.YAngleOffset;
            EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_SetCamYAngle, { y: this._camYAngelOffset });
            if (data.bossFire) {
                EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_BossOpenFire);
            }
            if (data.reload) {
                EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_PlayerReloadBullet);
            }
            if (null != data.animation) {
                if ("endStep" == data.animation) {
                    //console.log("Boss战斗阶段结束：" + this._aniName);
                    EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnExitBattle, { trigger: this });
                }
                else {
                    if (this._level.IsComplate) {
                        //console.log("关卡结束");
                        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnExitBattle, { trigger: this });
                    }
                    else {
                        this._aniName = data.animation;
                        this._battleTime = data.time;
                        this._start = index;
                        for (var i = this._start; i < roadPath.PathPoints.length; ++i) {
                            var sp3d = roadPath.PathPoints[i];
                            var d = GameUtilit_1.PathData.parse(sp3d.name);
                            if (i != this._start && null != d.animation) {
                                this._end = i;
                                break;
                            }
                        }
                        for (var i = 0; i < this._units.length; ++i) {
                            var unit = this._units[i];
                            if (unit.Type == UnitType_1.Unit_ZQDSS_Type.Boss) {
                                var bandit = unit;
                                bandit.ActiveBandit();
                            }
                        }
                        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBattle, { trigger: this });
                        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBossBattle, { trigger: this });
                        //console.log("进入Boss战斗_阶段：" + this._aniName);
                        if (player.BulletNum <= 0) {
                            player.BulletNum = 1;
                        }
                    }
                }
            }
        }
        else {
            player.Nav_ZQDSS_Agent.set_ZQDSS_Path(this._level.NavigationMgr.getPath(), this._roadPointIndexs[0]);
        }
    };
    BossBattleTrigger.prototype.getBattleData = function () {
        var battleTime = this._battleTime;
        var totalDis = 0;
        var path = this._level.NavigationMgr.getPath();
        var open = false;
        for (var i = 0; i < this._roadPointIndexs.length; ++i) {
            var curIndex = this._roadPointIndexs[i];
            var lastIndex = this._roadPointIndexs[i + 1];
            if (curIndex == this._start) {
                open = true;
            }
            if (open) {
                if (null != lastIndex) {
                    var curPoint = path.PathPoints[curIndex];
                    var lastPoint = path.PathPoints[lastIndex];
                    totalDis += Laya.Vector3.distance(curPoint.transform.position, lastPoint.transform.position);
                    if (lastIndex == this._end) {
                        break;
                    }
                }
            }
        }
        var data = new BattleTrigger_1.BattleData();
        data.MoveSpeed = totalDis / (battleTime / 1000);
        data.Time = battleTime;
        data.AniName = this._aniName;
        data.TotalDis = totalDis;
        data.CamOffset.x = this._camOffset.x;
        data.CamOffset.y = this._camOffset.y;
        data.CamOffset.z = this._camOffset.z;
        data.CamYAngleOffsett = this._camYAngelOffset;
        return data;
    };
    return BossBattleTrigger;
}(BattleTrigger_1.default));
exports.default = BossBattleTrigger;
},{"../Event/EventDef":6,"../Event/EventMgr":7,"./BattleTrigger":9,"./GameUtilit":15,"./Unit/UnitType":36}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Damage = /** @class */ (function () {
    function Damage(damageValue) {
        this.value = 0;
        this.hitDir = new Laya.Vector3();
        this.hitPoint = new Laya.Vector3();
        this.bullet = null;
        this.value = damageValue;
    }
    return Damage;
}());
exports.default = Damage;
},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Effect_ZQDSS_ = /** @class */ (function (_super) {
    __extends(Effect_ZQDSS_, _super);
    function Effect_ZQDSS_() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ownerSprite3d = null;
        _this._type = null;
        _this._mgr = null;
        return _this;
    }
    Object.defineProperty(Effect_ZQDSS_.prototype, "Sprite3D", {
        get: function () {
            return this._ownerSprite3d;
        },
        enumerable: true,
        configurable: true
    });
    Effect_ZQDSS_.prototype.On_ZQDSS_Init = function (type, mgr) {
        this._type = type;
        this._mgr = mgr;
        this._ownerSprite3d = this.owner;
    };
    Effect_ZQDSS_.prototype.get_ZQDSS_OwnerSprite = function () {
        return this._ownerSprite3d;
    };
    Effect_ZQDSS_.prototype.set_ZQDSS_DestroyTime = function (time) {
        var self = this;
        Laya.timer.once(time, this, function () {
            self.recover_ZQDSS_();
        }, null, true);
    };
    Effect_ZQDSS_.prototype.recover_ZQDSS_ = function () {
        Laya.timer.clearAll(this);
        this._mgr.Pool.recover(this);
    };
    Effect_ZQDSS_.prototype.set_ZQDSS_Pos = function (x, y, z) {
        if (null == this._ownerSprite3d || this._ownerSprite3d.destroyed)
            return;
        this._ownerSprite3d.transform.localPositionX = x ? x : this._ownerSprite3d.transform.position.x;
        this._ownerSprite3d.transform.localPositionY = y ? y : this._ownerSprite3d.transform.position.y;
        this._ownerSprite3d.transform.localPositionZ = z ? z : this._ownerSprite3d.transform.position.z;
    };
    Effect_ZQDSS_.prototype.set_ZQDSS_PosByV3 = function (v3) {
        if (null == this._ownerSprite3d || this._ownerSprite3d.destroyed)
            return;
        this._ownerSprite3d.transform.localPositionX = v3.x;
        this._ownerSprite3d.transform.localPositionY = v3.y;
        this._ownerSprite3d.transform.localPositionZ = v3.z;
    };
    Effect_ZQDSS_.prototype.OP_Key = function () {
        return this._type;
    };
    Effect_ZQDSS_.prototype.OP_Init = function () {
        this._ownerSprite3d.active = true;
    };
    Effect_ZQDSS_.prototype.OP_Reset = function () {
        this._ownerSprite3d.active = false;
    };
    Effect_ZQDSS_.prototype.OP_OnClear = function () {
    };
    Effect_ZQDSS_.prototype.onDestroy = function () {
        Laya.timer.clearAll(this);
    };
    return Effect_ZQDSS_;
}(Laya.Script));
exports.default = Effect_ZQDSS_;
},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Effect_1 = require("./Effect");
var ObjPool_1 = require("../../ObjPool/ObjPool");
var EffectMgr = /** @class */ (function () {
    function EffectMgr(level, effctRoot) {
        this.Pool = new ObjPool_1.default();
        this._level_ZQDSS_ = level;
        this._effect_ZQDSS_Root = effctRoot;
    }
    EffectMgr.prototype.play_ZQDSS_Effect = function (type, time) {
        if (null == this._effect_ZQDSS_Root)
            return null;
        var effect = this.Pool.get(type);
        if (null == effect) {
            var name = type;
            var template = null;
            for (var i = 0; i < this._effect_ZQDSS_Root.numChildren; ++i) {
                var child = this._effect_ZQDSS_Root.getChildAt(i);
                if (child.name == name) {
                    template = child;
                    break;
                }
            }
            if (template) {
                var effObj = Laya.Sprite3D.instantiate(template, this._level_ZQDSS_.owner);
                effObj.transform.localPosition = new Laya.Vector3(0, 0, 0);
                effect = effObj.addComponent(Effect_1.default);
                effect.On_ZQDSS_Init(type, this);
            }
        }
        if (effect) {
            time = null == time ? 2000 : time;
            effect.set_ZQDSS_DestroyTime(time);
        }
        return effect;
    };
    return EffectMgr;
}());
exports.default = EffectMgr;
},{"../../ObjPool/ObjPool":52,"./Effect":12}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Effect_ZQDSS_Type;
(function (Effect_ZQDSS_Type) {
    Effect_ZQDSS_Type["None"] = "";
    Effect_ZQDSS_Type["baozha"] = "baozha";
    Effect_ZQDSS_Type["kaihuo"] = "kaihuo";
    Effect_ZQDSS_Type["qitiao"] = "qitiao";
    Effect_ZQDSS_Type["xue"] = "xue";
    Effect_ZQDSS_Type["zou"] = "zou";
    Effect_ZQDSS_Type["youton"] = "youton";
})(Effect_ZQDSS_Type = exports.Effect_ZQDSS_Type || (exports.Effect_ZQDSS_Type = {}));
},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitType_1 = require("./Unit/UnitType");
var LevelConfig_1 = require("../Config/LevelConfig");
var ReadyShootTag;
(function (ReadyShootTag) {
    ReadyShootTag["None"] = "";
    ReadyShootTag["readyShoot"] = "readyShoot";
    ReadyShootTag["endShoot"] = "endShoot";
})(ReadyShootTag = exports.ReadyShootTag || (exports.ReadyShootTag = {}));
var PathData = /** @class */ (function () {
    function PathData() {
        this.name = null;
        this.readyShootTag = ReadyShootTag.None;
        this.animation = null;
        this.time = null;
        this.bossFire = false;
        this.CamOffset = new Laya.Vector3();
        this.reload = false;
        this.YAngleOffset = GameUtilit.CAMERA_DEFAULT_Y_ANGLE;
        this._data = null;
    }
    Object.defineProperty(PathData.prototype, "Data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    PathData.parse = function (source) {
        var pathPara = new PathData();
        var data = source.split("_");
        pathPara._data = data;
        var name = pathPara._data[0];
        var readyShootTag = (null != pathPara._data[1] && "None" != pathPara._data[1]) ? pathPara._data[1] : ReadyShootTag.None;
        var animation = (null != pathPara._data[2] && "None" != pathPara._data[2]) ? pathPara._data[2] : null;
        var animationTime = (null != pathPara._data[3] && "None" != pathPara._data[3]) ? Number(pathPara._data[3]) : null;
        var bossFire = (null != pathPara._data[4] && "None" != pathPara._data[4]) ? Number(pathPara._data[4]) : null;
        pathPara.name = name;
        pathPara.readyShootTag = readyShootTag;
        pathPara.animation = animation;
        pathPara.time = animationTime;
        pathPara.bossFire = (null != bossFire);
        if (null != pathPara._data[5]) {
            pathPara.CamOffset.x = Number(pathPara._data[5]);
        }
        if (null != pathPara._data[6]) {
            pathPara.CamOffset.y = Number(pathPara._data[6]);
        }
        if (null != pathPara._data[7]) {
            pathPara.CamOffset.z = Number(pathPara._data[7]);
        }
        pathPara.reload = (null != pathPara._data[8] && "None" != pathPara._data[8]) ? true : false;
        if (null != pathPara._data[9] && "None" != pathPara._data[9]) {
            pathPara.YAngleOffset = Number(pathPara._data[9]);
        }
        return pathPara;
    };
    return PathData;
}());
exports.PathData = PathData;
var GameUtilit = /** @class */ (function () {
    function GameUtilit() {
    }
    GameUtilit.isBandit = function (unit) {
        if (unit.Type == UnitType_1.Unit_ZQDSS_Type.Bandit
            || unit.Type == UnitType_1.Unit_ZQDSS_Type.Boss
            || unit.Type == UnitType_1.Unit_ZQDSS_Type.HangingBandit) {
            return true;
        }
        return false;
    };
    GameUtilit.convertLevelNum = function (levelNum) {
        levelNum = levelNum % LevelConfig_1.default.getInstance().getLevelCount();
        if (0 == levelNum)
            levelNum = LevelConfig_1.default.getInstance().getLevelCount();
        return levelNum;
    };
    GameUtilit.PLAYER_BASE_MOVE_SPEED = 2.8;
    GameUtilit.PLAYER_DEAD_FALL_SPEED = 7;
    GameUtilit.PLAYER_MAX_BULLET_NUM = 6;
    GameUtilit.CAMERA_DEFAULT_Y_ANGLE = 180;
    return GameUtilit;
}());
exports.default = GameUtilit;
},{"../Config/LevelConfig":5,"./Unit/UnitType":36}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InterfaceUtilit = /** @class */ (function () {
    function InterfaceUtilit() {
    }
    InterfaceUtilit.isICanHitObj = function (element) {
        if (null == element.onHit || typeof (element.onHit) != "function") {
            return false;
        }
        return true;
    };
    return InterfaceUtilit;
}());
exports.default = InterfaceUtilit;
},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitFactory_1 = require("./Unit/UnitFactory");
var EffectMgr_1 = require("./Effect/EffectMgr");
var UnitType_1 = require("./Unit/UnitType");
var EventDef_1 = require("../Event/EventDef");
var ViewMgr_1 = require("../Mgr/ViewMgr");
var WudianMgr_1 = require("../Mgr/WudianMgr");
var NavigationMgr_1 = require("./Navigation/NavigationMgr");
var EventMgr_1 = require("../Event/EventMgr");
var SoundMgr_1 = require("../Mgr/SoundMgr");
var BattleTrigger_1 = require("./BattleTrigger");
var BossBattleTrigger_1 = require("./BossBattleTrigger");
var User_1 = require("../User/User");
var ALD_1 = require("../ALD");
var WXAPI_1 = require("../WXAPI");
var levelRunTimeData = /** @class */ (function () {
    function levelRunTimeData() {
        this.KillNum = 0;
        this.HeadShootCount = 0;
    }
    return levelRunTimeData;
}());
exports.levelRunTimeData = levelRunTimeData;
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cameraCtrlNode = null;
        _this._units = new Array();
        _this._triggers = new Array();
        _this._navigationRoot = null;
        _this._navigationMgr = null;
        _this._isComplate = false;
        _this._runTimeData = new levelRunTimeData();
        return _this;
    }
    Object.defineProperty(Level.prototype, "Sprite3D", {
        get: function () {
            return this._ownerSprite3D;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "Scene3D", {
        get: function () {
            return this._scene3d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "PrefabsRoot", {
        get: function () {
            return this._prefabsRoot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "EffectMgr", {
        get: function () {
            return this._effectMgr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "CameraCtrlPoint", {
        get: function () { return this._cameraCtrlNode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "Camera", {
        get: function () { return this._camera; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "CamOriginZ", {
        get: function () {
            return this._camOriginZ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "NavigationMgr", {
        get: function () {
            return this._navigationMgr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "IsComplate", {
        get: function () {
            return this._isComplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "LevelData", {
        get: function () {
            return this._levelData;
        },
        enumerable: true,
        configurable: true
    });
    Level.prototype.onAwake = function () {
        this._ownerSprite3D = this.owner;
        this._scene3d = this.owner;
        this._prefabsRoot = this._ownerSprite3D.getChildByName("Prefabs");
        var effectRoot = this._ownerSprite3D.getChildByName("Effects");
        this._unitFactory = new UnitFactory_1.default(this, this._prefabsRoot);
        this._effectMgr = new EffectMgr_1.default(this, effectRoot);
        this._camera = this._ownerSprite3D.getChildByName("Main Camera");
        this._camOriginZ = this._camera.transform.position.z;
        this._navigationRoot = this.owner.getChildByName("path");
        this._navigationMgr = new NavigationMgr_1.default(this._navigationRoot);
        this.applyShadow();
    };
    Level.prototype.onEnable = function () {
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_GameCompalte, this, this.onGameComplate);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnBanditDead, this, this.onBanditDead);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerMoveEnd, this, this.onPlayerMoveEnd);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerDead, this, this.onPlayerDead);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnBanditHeadShoot, this, this.oBanditHeadShoot);
    };
    Level.prototype.onDisable = function () {
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_GameCompalte, this, this.onGameComplate);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnBanditDead, this, this.onBanditDead);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerMoveEnd, this, this.onPlayerMoveEnd);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerDead, this, this.onPlayerDead);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnBanditHeadShoot, this, this.oBanditHeadShoot);
    };
    Level.prototype.onUpdate = function () {
        this._navigationMgr.onUpdate();
        if(sessionStorage.getItem("replayGameEvent") == 1){
            sessionStorage.removeItem("replayGameEvent");
            if(sessionStorage.getItem("replayGameEventMenu") == 1){
            sessionStorage.removeItem("replayGameEventMenu");
            }else{
                sessionStorage.setItem("replayGameEvent1",1);
                ViewMgr_1.default.instance.close_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameView);
                Laya.timer.once(1000, this, function () {
                ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameOverView, {
                    isWin: false,
                    levelNum: parseInt(User_1.default.get_ZQDSS_LevelNum()),
                    killNum: 0,
                    moneyReward: 0,
                    });
                });
            }  
        }
        if(sessionStorage.getItem("nextLevelEvent") == 1){
            sessionStorage.removeItem("nextLevelEvent");
             if(sessionStorage.getItem("nextLevelEventMenu") == 1){
            sessionStorage.removeItem("nextLevelEventMenu");
            }else{
                sessionStorage.setItem("nextLevelEvent1",1);
                ViewMgr_1.default.instance.close_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameView);
                Laya.timer.once(1000, this, function () {
                ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameOverView, {
                    isWin: true,
                    levelNum: parseInt(User_1.default.get_ZQDSS_LevelNum()) + 1,
                    killNum: 0,
                    moneyReward: 0,
                    });
                });
            }   
        }
        if(sessionStorage.getItem("gotoHomeEvent") == 1){
            sessionStorage.removeItem("gotoHomeEvent");
            if(sessionStorage.getItem("gotoHomeEventMenu") == 1){
            sessionStorage.removeItem("gotoHomeEventMenu");
            }else{
                sessionStorage.setItem("gotoHomeEvent1",1);
                ViewMgr_1.default.instance.close_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameView);
            }  
        }
        if(sessionStorage.getItem("gotoLevel") > 0){
            let golevel = sessionStorage.getItem("gotoLevel");
            sessionStorage.removeItem("gotoLevel");
            if(sessionStorage.getItem("gotoLevelMenu") == 1){
            sessionStorage.removeItem("gotoLevelMenu");
            }else{
            sessionStorage.setItem("gotoLevel1",golevel);
            ViewMgr_1.default.instance.close_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameView);
            Laya.timer.once(1000, this, function () {
            ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameOverView, {
                isWin: true,
                levelNum: golevel,
                killNum: 0,
                moneyReward: 0,
                });
            });
            }
        }
        if(sessionStorage.getItem("enableSound") == 1){
            sessionStorage.removeItem("enableSound");
            Laya.SoundManager.muted = false;
            SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
        }
        if(sessionStorage.getItem("enableSound") == 0){
            //sessionStorage.removeItem("enableSound");
            Laya.SoundManager.muted = true;
        }
    };
    Level.prototype.startGame = function (data) {
        SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
        this._levelData = data;
        this.initUnit();
        this.initBattleTrigger();
        var self = this;
            ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameView, null, function (v) {
                self.playerBegin();
            });
    };
    Level.prototype.initUnit = function () {
        var sceneUnitRoot = this._ownerSprite3D.getChildByName("man");
        for (var i = 0; i < sceneUnitRoot.numChildren; ++i) {
            var unitObj = sceneUnitRoot.getChildAt(i);
            var para = unitObj.name.split("_");
            var unitBase = this.addUnit(para[0], unitObj);
            if (unitBase.Type == UnitType_1.Unit_ZQDSS_Type.Player) {
                var player = unitBase;
                var agent = this._navigationMgr.createAgent(player.Sprite3D);
            }
        }
    };
    Level.prototype.playerBegin = function () {
        this.Player.Nav_ZQDSS_Agent.set_ZQDSS_Path(this._navigationMgr.getPath());
    };
    Level.prototype.initBattleTrigger = function () {
        var sceneTiggerRoot = this._ownerSprite3D.getChildByName("triggers");
        for (var i = 0; i < sceneTiggerRoot.numChildren; ++i) {
            var triggerObj = sceneTiggerRoot.getChildAt(i);
            var trigger = null;
            if (triggerObj.name == "boss") {
                trigger = triggerObj.addComponent(BossBattleTrigger_1.default);
            }
            else {
                trigger = triggerObj.addComponent(BattleTrigger_1.default);
            }
            trigger.init(this);
            this._triggers.push(trigger);
        }
    };
    Level.prototype.addUnit = function (unitType, ins) {
        var unit = null;
        unit = this._unitFactory.create_ZQDSS_(unitType, ins);
        if (unit) {
            this._units.push(unit);
        }
        return unit;
    };
    Level.prototype.removeUnit = function (unit) {
        unit.Sprite3D.removeSelf();
        unit.Sprite3D.destroy(true);
    };
    Level.prototype.getUnitsByType = function (type) {
        var result = new Array();
        for (var i = 0; i < this._units.length; ++i) {
            var unit = this._units[i];
            if (null == type || unit.Type == type) {
                result.push(unit);
            }
        }
        return result;
    };
    Object.defineProperty(Level.prototype, "Player", {
        get: function () {
            var players = this.getUnitsByType(UnitType_1.Unit_ZQDSS_Type.Player);
            return players[0];
        },
        enumerable: true,
        configurable: true
    });
    Level.prototype.onBanditDead = function (para) {
        var bandit = para.bandit;
        this._runTimeData.KillNum += 1;
        if (bandit.Type == UnitType_1.Unit_ZQDSS_Type.Boss) {
            if (!this._isComplate) {
                EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_GameCompalte, {
                    isWin: true,
                });
            }
        }
    };
    Level.prototype.oBanditHeadShoot = function (para) {
        var bandit = para.bandit;
        this._runTimeData.HeadShootCount += 1;
        SoundMgr_1.default.instance.play_ZQDSS_Sound("HeadHit");
        SoundMgr_1.default.instance.play_ZQDSS_Sound("Headshot");
    };
    Level.prototype.onGameComplate = function (para) {
        if (this._isComplate)
            return;
        this._isComplate = true;
        var isWin = para.isWin;
        var curLevel = parseInt(User_1.default.get_ZQDSS_LevelNum());
        if (isWin == true) {
            sendCustomAnalyticsEvent( 'level_completed', {level: curLevel});
            var nextLevelNum = curLevel + 1;
            localStorage.setItem("turnshoot_level",parseInt(nextLevelNum));
            User_1.default.set_ZQDSS_LevelNum(nextLevelNum);
        }
        else {
            sessionStorage.setItem("aftergameover",1);
            sendCustomAnalyticsEvent( 'game_end', {level: curLevel,score:0,highScore:0});
            //SoundMgr_1.default.instance.play_ZQDSS_Sound("GameOver");
        }
        var levelNum = curLevel;
        var killNum = this._runTimeData.KillNum;
        var moneyReward = this._runTimeData.KillNum * 10 + this._runTimeData.HeadShootCount * 10;
        ViewMgr_1.default.instance.close_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameView);
        Laya.timer.once(10, this, function () {
            ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameOverView, {
                isWin: isWin,
                levelNum: levelNum,
                killNum: killNum,
                moneyReward: moneyReward,
            });
        });
    };
    Level.prototype.onPlayerDead = function () {
        if (!this._isComplate) {
            EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_GameCompalte, {
                isWin: false,
            });
        }
    };
    Level.prototype.onPlayerMoveEnd = function (para) {
        var player = para.player;
        if (!this._levelData.isBoss && !this._isComplate) {
            EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_GameCompalte, {
                isWin: true,
            });
        }
    };
    Level.prototype.applyShadow = function () {
        var cj1 = this.Sprite3D.getChildByName("cj1");
        if (null != cj1) {
            var di = cj1.getChildByName("di");
            if (null != di) {
                for (var i = 0; i < di.numChildren; ++i) {
                    var child = di.getChildAt(i);
                    child.meshRenderer.receiveShadow = true;
                }
                var dirLight = this.owner.getChildByName("Directional Light");
                if (null != dirLight) {
                    dirLight.shadow = true;
                    dirLight.shadowDistance = 150;
                    dirLight.shadowResolution = 2048;
                    dirLight.shadowPSSMCount = 1;
                    dirLight.shadowPCFType = 3;
                }
            }
        }
    };
    return Level;
}(Laya.Script3D));
exports.default = Level;
},{"../ALD":1,"../Event/EventDef":6,"../Event/EventMgr":7,"../Mgr/SoundMgr":44,"../Mgr/ViewMgr":45,"../Mgr/WudianMgr":46,"../User/User":64,"../WXAPI":82,"./BattleTrigger":9,"./BossBattleTrigger":10,"./Effect/EffectMgr":13,"./Navigation/NavigationMgr":20,"./Unit/UnitFactory":35,"./Unit/UnitType":36}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Nav_ZQDSS_Utilit = /** @class */ (function () {
    function Nav_ZQDSS_Utilit() {
    }
    Nav_ZQDSS_Utilit.isINavigation = function (element) {
        if (null == element) {
            return false;
        }
        if (null == element.move || typeof (element.move) != "function") {
            return false;
        }
        if (null == element.onMoveStart || typeof (element.onMoveStart) != "function") {
            return false;
        }
        if (null == element.onMoveEnd || typeof (element.onMoveEnd) != "function") {
            return false;
        }
        if (null == element.onTargetPointComplate || typeof (element.onTargetPointComplate) != "function") {
            return false;
        }
        return true;
    };
    return Nav_ZQDSS_Utilit;
}());
exports.default = Nav_ZQDSS_Utilit;
},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavUtilit_1 = require("./NavUtilit");
var Navigation_ZQDSS_Agent = /** @class */ (function (_super) {
    __extends(Navigation_ZQDSS_Agent, _super);
    function Navigation_ZQDSS_Agent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mgr = null;
        _this._iNavigation_ZQDSS_ = null;
        _this._sprite3d_ZQDSS_ = null;
        _this._curLoad_ZQDSS_Path = null;
        _this._curTarget_ZQDSS_Point = null;
        _this._last_ZQDSS_Pos = new Laya.Vector3();
        _this._pause = false;
        return _this;
    }
    Navigation_ZQDSS_Agent.prototype.init_ZQDSS_ = function (mgr) {
        this._mgr = mgr;
        this._sprite3d_ZQDSS_ = this.owner;
        var coms = this.owner._components;
        for (var index = 0; index < coms.length; index++) {
            var element = coms[index];
            if (NavUtilit_1.default.isINavigation(element)) {
                this._iNavigation_ZQDSS_ = element;
            }
        }
    };
    Navigation_ZQDSS_Agent.prototype.set_ZQDSS_Path = function (path, start) {
        start = null == start ? 0 : start;
        this._curLoad_ZQDSS_Path = path;
        this._curTarget_ZQDSS_Point = this._curLoad_ZQDSS_Path.PathPoints[start];
        this._sprite3d_ZQDSS_.transform.position = this._curTarget_ZQDSS_Point.transform.position.clone();
        this._pause = false;
        this._last_ZQDSS_Pos.x = this._curTarget_ZQDSS_Point.transform.position.x;
        this._last_ZQDSS_Pos.y = this._curTarget_ZQDSS_Point.transform.position.y;
        this._last_ZQDSS_Pos.z = this._curTarget_ZQDSS_Point.transform.position.z;
        this._iNavigation_ZQDSS_.onMoveStart();
        this._iNavigation_ZQDSS_.onTargetPointComplate(start);
    };
    Navigation_ZQDSS_Agent.prototype.reset_ZQDSS_Path = function () {
        this._curLoad_ZQDSS_Path = null;
        this._curTarget_ZQDSS_Point = null;
        this._pause = false;
        this._last_ZQDSS_Pos.x = 0;
        this._last_ZQDSS_Pos.y = 0;
        this._last_ZQDSS_Pos.z = 0;
    };
    Navigation_ZQDSS_Agent.prototype.pause = function () {
        this._pause = true;
    };
    Navigation_ZQDSS_Agent.prototype.continue = function () {
        this._pause = false;
    };
    Navigation_ZQDSS_Agent.prototype.curPoint_ZQDSS_TargetIsComplate = function () {
        if (null != this._last_ZQDSS_Pos && null != this._curTarget_ZQDSS_Point) {
            var curPos = this._sprite3d_ZQDSS_.transform.position.clone();
            var targetPos = this._curTarget_ZQDSS_Point.transform.position.clone();
            var lastDir = new Laya.Vector3();
            var targetDir = new Laya.Vector3();
            Laya.Vector3.subtract(curPos, this._last_ZQDSS_Pos, lastDir);
            Laya.Vector3.subtract(curPos, targetPos, targetDir);
            var dotValue = Laya.Vector3.dot(lastDir, targetDir);
            return dotValue >= 0;
        }
        return null;
    };
    Navigation_ZQDSS_Agent.prototype.onNavigation_ZQDSS_Update = function () {
        if (null != this._curLoad_ZQDSS_Path
            && null != this._curTarget_ZQDSS_Point
            && !this._pause) {
            if (this.curPoint_ZQDSS_TargetIsComplate()) {
                //当前点已经走到了，切换到下一个点
                this._iNavigation_ZQDSS_.onTargetPointComplate(this._curLoad_ZQDSS_Path.get_ZQDSS_Point_ZQDSS_Index(this._curTarget_ZQDSS_Point));
                this._curTarget_ZQDSS_Point = this._curLoad_ZQDSS_Path.get_ZQDSS_Next_ZQDSS_Point(this._curTarget_ZQDSS_Point);
            }
            if (null != this._curTarget_ZQDSS_Point) {
                this._last_ZQDSS_Pos.x = this._sprite3d_ZQDSS_.transform.position.x;
                this._last_ZQDSS_Pos.y = this._sprite3d_ZQDSS_.transform.position.y;
                this._last_ZQDSS_Pos.z = this._sprite3d_ZQDSS_.transform.position.z;
                var curPos = this._sprite3d_ZQDSS_.transform.position.clone();
                var targetPos = this._curTarget_ZQDSS_Point.transform.position.clone();
                var targetDir = new Laya.Vector3();
                Laya.Vector3.subtract(targetPos, curPos, targetDir);
                this._iNavigation_ZQDSS_.move(targetDir);
            }
            else {
                //todo:到达终点
                this._iNavigation_ZQDSS_.onMoveEnd();
            }
        }
    };
    Navigation_ZQDSS_Agent.prototype.onDestroy = function () {
        this._mgr.removeAgent(this);
    };
    Object.defineProperty(Navigation_ZQDSS_Agent.prototype, "Moveing", {
        get: function () {
            return null != this._curLoad_ZQDSS_Path && null != this._curTarget_ZQDSS_Point && !this._pause;
        },
        enumerable: true,
        configurable: true
    });
    return Navigation_ZQDSS_Agent;
}(Laya.Script3D));
exports.default = Navigation_ZQDSS_Agent;
},{"./NavUtilit":18}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoadPath_1 = require("./RoadPath");
var NavigationAgent_1 = require("./NavigationAgent");
var Road_ZQDSS_PathType;
(function (Road_ZQDSS_PathType) {
    Road_ZQDSS_PathType["Normal"] = "Normal";
    Road_ZQDSS_PathType["Airborne"] = "Airborne";
    Road_ZQDSS_PathType["Boss"] = "Boss";
})(Road_ZQDSS_PathType = exports.Road_ZQDSS_PathType || (exports.Road_ZQDSS_PathType = {}));
var Navigation_ZQDSS_Mgr = /** @class */ (function () {
    function Navigation_ZQDSS_Mgr(root) {
        this._paths = new Array();
        this._agents = new Array();
        this._pathRoot = root;
        this.initRoadPath();
    }
    Navigation_ZQDSS_Mgr.prototype.initRoadPath = function () {
        var roadPath = this._pathRoot.addComponent(RoadPath_1.default);
        roadPath.set_ZQDSS_Index(0);
        this._paths.push(roadPath);
    };
    Navigation_ZQDSS_Mgr.prototype.createAgent = function (target) {
        var agent = target.getComponent(NavigationAgent_1.default);
        if (null != agent)
            return agent;
        agent = target.addComponent(NavigationAgent_1.default);
        agent.init_ZQDSS_(this);
        this._agents.push(agent);
        return agent;
    };
    Navigation_ZQDSS_Mgr.prototype.removeAgent = function (agent) {
        for (var i = 0; i < this._agents.length; ++i) {
            var a = this._agents[i];
            if (a == agent) {
                this._agents.splice(i, 1);
                if (!a.destroyed) {
                    a.destroy();
                }
                break;
            }
        }
    };
    Navigation_ZQDSS_Mgr.prototype.onUpdate = function () {
        for (var i = 0; i < this._agents.length; ++i) {
            var agent = this._agents[i];
            if (null != agent) {
                agent.onNavigation_ZQDSS_Update();
            }
        }
    };
    Navigation_ZQDSS_Mgr.prototype.getPath = function () {
        return this._paths[0];
    };
    return Navigation_ZQDSS_Mgr;
}());
exports.default = Navigation_ZQDSS_Mgr;
},{"./NavigationAgent":19,"./RoadPath":21}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Road_ZQDSS_Path = /** @class */ (function (_super) {
    __extends(Road_ZQDSS_Path, _super);
    function Road_ZQDSS_Path() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._index = 0;
        _this._pathPoints = new Array();
        return _this;
    }
    Object.defineProperty(Road_ZQDSS_Path.prototype, "Index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Road_ZQDSS_Path.prototype, "PathPoints", {
        get: function () {
            return this._pathPoints;
        },
        enumerable: true,
        configurable: true
    });
    Road_ZQDSS_Path.prototype.onAwake = function () {
        for (var i = 0; i < this.owner.numChildren; ++i) {
            var point = this.owner.getChildAt(i);
            this._pathPoints.push(point);
        }
    };
    Road_ZQDSS_Path.prototype.set_ZQDSS_Index = function (index) {
        this._index = index;
    };
    Road_ZQDSS_Path.prototype.get_ZQDSS_Next_ZQDSS_Point = function (curPoint) {
        for (var i = 0; i < this._pathPoints.length; ++i) {
            var point = this._pathPoints[i];
            if (curPoint == point) {
                return this._pathPoints[i + 1];
            }
        }
        return null;
    };
    Road_ZQDSS_Path.prototype.get_ZQDSS_Point_ZQDSS_Index = function (curPoint) {
        for (var i = 0; i < this._pathPoints.length; ++i) {
            var point = this._pathPoints[i];
            if (curPoint == point) {
                return i;
            }
        }
        return null;
    };
    Road_ZQDSS_Path.prototype.get_ZQDSS_PointBy_ZQDSS_Index = function (index) {
        return this._pathPoints[index];
    };
    return Road_ZQDSS_Path;
}(Laya.Script3D));
exports.default = Road_ZQDSS_Path;
},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitBase_1 = require("../UnitBase");
var ActorData_1 = require("./ActorData");
var ActorAniStateCtrl_1 = require("./ActorAniStateCtrl");
var NavigationAgent_1 = require("../../Navigation/NavigationAgent");
var _ZQDSS_Actor_ZQDSS_ = /** @class */ (function (_super) {
    __extends(_ZQDSS_Actor_ZQDSS_, _super);
    function _ZQDSS_Actor_ZQDSS_() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._meshRoot = null;
        _this._actorAniStateCtrl = null;
        _this._actorData = new ActorData_1.default();
        _this._hp = 1;
        _this._maxHp = 0;
        return _this;
    }
    Object.defineProperty(_ZQDSS_Actor_ZQDSS_.prototype, "Mesh_ZQDSS_Root", {
        get: function () {
            return this._meshRoot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ZQDSS_Actor_ZQDSS_.prototype, "Actor_ZQDSS_AniStateCtrl", {
        get: function () {
            return this._actorAniStateCtrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ZQDSS_Actor_ZQDSS_.prototype, "Nav_ZQDSS_Agent", {
        get: function () {
            return this.owner.getComponent(NavigationAgent_1.default);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ZQDSS_Actor_ZQDSS_.prototype, "Hp_ZQDSS_", {
        get: function () {
            return this._hp;
        },
        set: function (value) {
            var last = this._hp;
            this._hp = value;
            if (this._hp <= 0) {
                this._hp = 0;
                if (last > 0) {
                    this.on_ZQDSS_Dead();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ZQDSS_Actor_ZQDSS_.prototype, "is_ZQDSS_Dead", {
        get: function () {
            return this._hp <= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ZQDSS_Actor_ZQDSS_.prototype, "Max_ZQDSS_Hp", {
        get: function () {
            return this._maxHp;
        },
        enumerable: true,
        configurable: true
    });
    _ZQDSS_Actor_ZQDSS_.prototype.on_ZQDSS_Init = function (level, unitType) {
        _super.prototype.on_ZQDSS_Init.call(this, level, unitType);
        this._meshRoot = this.Sprite3D.getChildByName("Mesh");
        this._actorAniStateCtrl = this._meshRoot.addComponent(ActorAniStateCtrl_1.default);
        this._actorAniStateCtrl.init_ZQDSS_(this);
    };
    _ZQDSS_Actor_ZQDSS_.prototype.move = function (dir) {
        Laya.Vector3.normalize(dir, dir);
        var nextPos = new Laya.Vector3(this.transform.position.x + dir.x * this._actorData.moveSpeed * Math.min(50, Laya.timer.delta) / 1000, this.transform.position.y + dir.y * this._actorData.moveSpeed * Math.min(50, Laya.timer.delta) / 1000, this.transform.position.z + dir.z * this._actorData.moveSpeed * Math.min(50, Laya.timer.delta) / 1000);
        this.transform.position = nextPos;
    };
    _ZQDSS_Actor_ZQDSS_.prototype.onMoveEnd = function () {
    };
    _ZQDSS_Actor_ZQDSS_.prototype.onTargetPointComplate = function (index) {
    };
    _ZQDSS_Actor_ZQDSS_.prototype.onHit = function (damage) {
    };
    _ZQDSS_Actor_ZQDSS_.prototype.onWeak_ZQDSS_PointHit = function (weak, damage) {
    };
    _ZQDSS_Actor_ZQDSS_.prototype.on_ZQDSS_AnimationComplate = function (name) {
    };
    _ZQDSS_Actor_ZQDSS_.prototype.on_ZQDSS_Dead = function () {
    };
    _ZQDSS_Actor_ZQDSS_.prototype.onAnimation_ZQDSS_Change = function (name) {
    };
    return _ZQDSS_Actor_ZQDSS_;
}(UnitBase_1.default));
exports.default = _ZQDSS_Actor_ZQDSS_;
},{"../../Navigation/NavigationAgent":19,"../UnitBase":34,"./ActorAniStateCtrl":23,"./ActorData":24}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actor_ZQDSS_StateCtrl = /** @class */ (function (_super) {
    __extends(Actor_ZQDSS_StateCtrl, _super);
    function Actor_ZQDSS_StateCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animator_ZQDSS_ = null;
        _this._actor_ZQDSS_ = null;
        _this._curAniName_ZQDSS_ = "";
        return _this;
    }
    Object.defineProperty(Actor_ZQDSS_StateCtrl.prototype, "Animator_ZQDSS_", {
        get: function () {
            return this._animator_ZQDSS_;
        },
        enumerable: true,
        configurable: true
    });
    Actor_ZQDSS_StateCtrl.prototype.onAwake = function () {
        this._animator_ZQDSS_ = this.owner.getComponent(Laya.Animator);
    };
    Actor_ZQDSS_StateCtrl.prototype.init_ZQDSS_ = function (actor) {
        var _this = this;
        this._actor_ZQDSS_ = actor;
        if (null != this._animator_ZQDSS_) {
            var ac = this._animator_ZQDSS_.getControllerLayer();
            var _loop_1 = function () {
                var state = ac._states[i];
                this_1[state.name] = function () { _this._actor_ZQDSS_.on_ZQDSS_AnimationComplate(state.name); };
            };
            var this_1 = this;
            for (var i = 0; i < ac._states.length; ++i) {
                _loop_1();
            }
        }
    };
    Actor_ZQDSS_StateCtrl.prototype.change_ZQDSS_State = function (ani, time) {
        if (null != this._animator_ZQDSS_) {
            var speed = 1;
            if (null != time) {
                var ac = this._animator_ZQDSS_.getControllerLayer();
                for (var i = 0; i < ac._states.length; ++i) {
                    var state = ac._states[i];
                    if (state.name == ani) {
                        var dur = state.clip.duration();
                        speed = dur / time * 1000;
                        break;
                    }
                }
            }
            this._animator_ZQDSS_.speed = speed;
            this._animator_ZQDSS_.crossFade(ani, 0.03);
            if (this._curAniName_ZQDSS_ != ani) {
                this._actor_ZQDSS_.onAnimation_ZQDSS_Change(ani);
            }
            this._curAniName_ZQDSS_ = ani;
            return speed;
        }
        return null;
    };
    Actor_ZQDSS_StateCtrl.prototype.pause_ZQDSS_ = function () {
        if (null != this._animator_ZQDSS_) {
            this._animator_ZQDSS_.speed = 0;
        }
    };
    Actor_ZQDSS_StateCtrl.prototype.continue_ZQDSS_ = function () {
        if (null != this._animator_ZQDSS_) {
            this._animator_ZQDSS_.speed = 1;
        }
    };
    Actor_ZQDSS_StateCtrl.prototype.getCur_ZQDSS_AniName = function () {
        return this._curAniName_ZQDSS_;
    };
    return Actor_ZQDSS_StateCtrl;
}(Laya.Script3D));
exports.default = Actor_ZQDSS_StateCtrl;
},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actor_ZQDSS_Data = /** @class */ (function () {
    function Actor_ZQDSS_Data() {
        this.moveSpeed = 2.5;
    }
    return Actor_ZQDSS_Data;
}());
exports.default = Actor_ZQDSS_Data;
},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actor_ZQDSS_Weak_ZQDSS_Point = /** @class */ (function (_super) {
    __extends(Actor_ZQDSS_Weak_ZQDSS_Point, _super);
    function Actor_ZQDSS_Weak_ZQDSS_Point() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._actor = null;
        _this._collider = null;
        return _this;
    }
    Object.defineProperty(Actor_ZQDSS_Weak_ZQDSS_Point.prototype, "Actor", {
        get: function () {
            return this._actor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actor_ZQDSS_Weak_ZQDSS_Point.prototype, "Collider", {
        get: function () {
            return this._collider;
        },
        enumerable: true,
        configurable: true
    });
    Actor_ZQDSS_Weak_ZQDSS_Point.prototype.init_ZQDSS_ = function (actor) {
        this._actor = actor;
        this._collider = this.owner.getComponent(Laya.PhysicsCollider);
    };
    Actor_ZQDSS_Weak_ZQDSS_Point.prototype.onHit = function (damage) {
        if (null != this._actor) {
            this._actor.onWeak_ZQDSS_PointHit(this, damage);
        }
    };
    return Actor_ZQDSS_Weak_ZQDSS_Point;
}(Laya.Script3D));
exports.default = Actor_ZQDSS_Weak_ZQDSS_Point;
},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actor_1 = require("./Actor");
var Damage_1 = require("../../Damage");
var UnitType_1 = require("../UnitType");
var Balloon = /** @class */ (function (_super) {
    __extends(Balloon, _super);
    function Balloon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Balloon.prototype.on_ZQDSS_Init = function (level, unitType) {
        _super.prototype.on_ZQDSS_Init.call(this, level, unitType);
        this._maxHp = 1;
        this.Hp_ZQDSS_ = 1;
    };
    Balloon.prototype.onHit = function (damage) {
        this.Hp_ZQDSS_ = this.Hp_ZQDSS_ - damage.value;
        //console.log("打中气球");
    };
    Balloon.prototype.on_ZQDSS_Dead = function () {
        _super.prototype.on_ZQDSS_Dead.call(this);
        var units = this._level.getUnitsByType();
        for (var i = 0; i < units.length; ++i) {
            var unit = units[i];
            if (unit.Type != UnitType_1.Unit_ZQDSS_Type.Player && Laya.Vector3.distance(this.transform.position, unit.transform.position) <= 1) {
                var actor = unit;
                if (null != actor) {
                    var ICanHitObj = actor;
                    if (null != ICanHitObj) {
                        ICanHitObj.onHit(new Damage_1.default(Number.MAX_VALUE));
                    }
                }
            }
        }
    };
    return Balloon;
}(Actor_1.default));
exports.default = Balloon;
},{"../../Damage":11,"../UnitType":36,"./Actor":22}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actor_1 = require("./Actor");
var ActorWeakPoint_1 = require("./ActorWeakPoint");
var EventMgr_1 = require("../../../Event/EventMgr");
var EventDef_1 = require("../../../Event/EventDef");
var EffectType_1 = require("../../Effect/EffectType");
var SoundMgr_1 = require("../../../Mgr/SoundMgr");
var Gun_1 = require("../../Weapon/Gun");
var Utilit_1 = require("../../../Utilit");
var AppSwitchConfig_1 = require("../../../Config/AppSwitchConfig");
var BanditState;
(function (BanditState) {
    BanditState["None"] = "None";
    BanditState["idel"] = "idel";
    BanditState["dead"] = "dead";
    BanditState["upshoot"] = "upshoot";
    BanditState["downshoot"] = "downshoot";
    BanditState["kongzhongkaiq"] = "kongzhongkaiq";
    BanditState["kongdead"] = "kongdead";
    BanditState["dead2"] = "dead2";
    BanditState["dead3"] = "dead3";
    BanditState["bossshoot"] = "bossshoot";
    BanditState["onhit"] = "onhit";
})(BanditState = exports.BanditState || (exports.BanditState = {}));
var Bandit = /** @class */ (function (_super) {
    __extends(Bandit, _super);
    function Bandit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._collider = null;
        _this._stateLeftTime = 0;
        _this._active = false;
        _this._gun = null;
        _this._firePoint = null;
        _this._firePointAnimator = null;
        _this._bullettemplate = null;
        _this._readyShoot = false;
        _this._activeDelayTime = 0;
        _this._headWeak = null;
        return _this;
    }
    Bandit.prototype.onAwake = function () {
        this._collider = this.owner.getComponent(Laya.PhysicsCollider);
        this._headWeak = Utilit_1.default.get_ZQDSS_Child(this.owner, "Head").addComponent(ActorWeakPoint_1.default);
        this._headWeak.init_ZQDSS_(this);
    };
    Bandit.prototype.onEnable = function () {
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBattle, this, this.onEnterBattle);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnExitBattle, this, this.onExitBattle);
    };
    Bandit.prototype.onDisable = function () {
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBattle, this, this.onEnterBattle);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnExitBattle, this, this.onExitBattle);
    };
    Bandit.prototype.on_ZQDSS_Init = function (level, unitType) {
        _super.prototype.on_ZQDSS_Init.call(this, level, unitType);
        var para = this.owner.name.split("_");
        if (null != para[1]) {
            this._activeDelayTime = Number(para[1]);
        }
        this._bullettemplate = this.Sprite3D.getChildByName("Bullet");
        this._firePoint = this.Sprite3D.getChildByName("sji").getChildByName("xiaoguaishejidian");
        this._firePointAnimator = this.Sprite3D.getChildByName("sji").getChildByName("xiaoguaishejidian").getComponent(Laya.Animator);
        this._gun = new Gun_1.default(this, this._firePoint, this._bullettemplate, Gun_1.BulletType.Bandit);
    };
    Bandit.prototype.onHit = function (damage) {
        if (!this._active)
            return;
        this.Hp_ZQDSS_ = 0;
        //damage.hitPoint.z = this.transform.position.z;
        if (AppSwitchConfig_1.default.getInstance().get_ZQDSS_AppSwitch_ZQDSS_Data().blood == 1) {
            var effect = this._level.EffectMgr.play_ZQDSS_Effect(EffectType_1.Effect_ZQDSS_Type.xue, 2000);
            effect.set_ZQDSS_PosByV3(damage.hitPoint);
            effect.Sprite3D.transform.rotationEuler = damage.hitDir;
        }
    };
    Bandit.prototype.onWeak_ZQDSS_PointHit = function (weak, damage) {
        if (weak == this._headWeak && !this.is_ZQDSS_Dead) {
            //console.log("爆头！！");
            this.onHit(damage);
            EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnBanditHeadShoot, { bandit: this });
        }
    };
    Bandit.prototype.on_ZQDSS_AnimationComplate = function (name) {
    };
    Bandit.prototype.onUpdate = function () {
        if (!this.is_ZQDSS_Dead) {
            var player = this._level.Player;
            if (null != player && this._active) {
                var dir = new Laya.Vector3();
                Laya.Vector3.subtract(player.transform.position, this.transform.position, dir);
                Laya.Vector3.normalize(dir, dir);
                var right = new Laya.Vector3(1, 0, 0);
                if (this.transform.position.y >= player.transform.position.y) {
                    var normalizedTime = (Laya.Vector3.dot(dir, right) + 1) / 2;
                    this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.play(BanditState.downshoot, 0, normalizedTime);
                    this._firePointAnimator.play(BanditState.downshoot, 0, normalizedTime);
                }
                else {
                    var normalizedTime = 1 - (Laya.Vector3.dot(dir, right) + 1) / 2;
                    this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.play(BanditState.upshoot, 0, normalizedTime);
                    this._firePointAnimator.play(BanditState.upshoot, 0, normalizedTime);
                }
                this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = 1;
                this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_._update();
                this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = 0;
                this._firePointAnimator.speed = 1;
                this._firePointAnimator._update();
                this._firePointAnimator.speed = 0;
                if (!player.is_ZQDSS_Dead && this._readyShoot) {
                    this._readyShoot = false;
                    var bullet = this._gun.shoot();
                    bullet.setTarget(player);
                    SoundMgr_1.default.instance.play_ZQDSS_Sound("Robocop1");
                }
            }
        }
    };
    Bandit.prototype.on_ZQDSS_Dead = function () {
        _super.prototype.on_ZQDSS_Dead.call(this);
        this._collider.enabled = false;
        this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(BanditState.dead);
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnBanditDead, { bandit: this });
    };
    Bandit.prototype.ActiveBandit = function () {
        this._active = true;
    };
    Bandit.prototype.DeactiveBandit = function () {
        Laya.timer.clear(this, this._activeShoot);
        this._active = false;
    };
    Bandit.prototype.ReadyShoot = function () {
        Laya.timer.once(this._activeDelayTime, this, this._activeShoot);
    };
    Bandit.prototype._activeShoot = function () {
        this._readyShoot = true;
    };
    Bandit.prototype.onEnterBattle = function (para) {
    };
    Bandit.prototype.onExitBattle = function (para) {
        this._readyShoot = false;
    };
    return Bandit;
}(Actor_1.default));
exports.default = Bandit;
},{"../../../Config/AppSwitchConfig":4,"../../../Event/EventDef":6,"../../../Event/EventMgr":7,"../../../Mgr/SoundMgr":44,"../../../Utilit":65,"../../Effect/EffectType":14,"../../Weapon/Gun":39,"./Actor":22,"./ActorWeakPoint":25}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bandit_1 = require("./Bandit");
var EventDef_1 = require("../../../Event/EventDef");
var EventMgr_1 = require("../../../Event/EventMgr");
var Gun_1 = require("../../Weapon/Gun");
var SoundMgr_1 = require("../../../Mgr/SoundMgr");
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fireTimeSpaceing = 350;
        _this._lastFireTime = 0;
        _this._oepnFire = false;
        _this._shootCounter = 0;
        return _this;
    }
    Object.defineProperty(Boss.prototype, "Hp_ZQDSS_", {
        get: function () {
            return this._hp;
        },
        set: function (value) {
            var last = this._hp;
            this._hp = value;
            if (this._hp <= 0) {
                this._hp = 0;
                if (last > 0) {
                    this.on_ZQDSS_Dead();
                }
            }
            EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnBossHpChange, {
                boss: this,
                last: last,
                current: this._hp
            });
        },
        enumerable: true,
        configurable: true
    });
    Boss.prototype.onAwake = function () {
        this._collider = this.owner.getComponent(Laya.PhysicsCollider);
    };
    Boss.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_BossOpenFire, this, this.onBossOpenFire);
    };
    Boss.prototype.onDisable = function () {
        _super.prototype.onDisable.call(this);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_BossOpenFire, this, this.onBossOpenFire);
    };
    Boss.prototype.on_ZQDSS_Init = function (level, unitType) {
        _super.prototype.on_ZQDSS_Init.call(this, level, unitType);
        this._firePoint = this.Sprite3D.getChildByName("sji").getChildByName("xiaoguaishejidian").getChildByName("FirePoint");
        this._gun = new Gun_1.default(this, this._firePoint, this._bullettemplate, Gun_1.BulletType.Bandit);
        this._maxHp = 10;
        this.Hp_ZQDSS_ = this._maxHp;
    };
    Boss.prototype.onHit = function (damage) {
        this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(Bandit_1.BanditState.onhit);
        this.Hp_ZQDSS_ -= 1;
        //console.log("打中Boss");
        this._oepnFire = false;
        if (null != damage.bullet) {
            damage.bullet.recover();
        }
    };
    Boss.prototype.onWeak_ZQDSS_PointHit = function (weak, damage) {
    };
    Boss.prototype.on_ZQDSS_AnimationComplate = function (name) {
        if (name == Bandit_1.BanditState.onhit) {
            this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(Bandit_1.BanditState.idel);
        }
    };
    Boss.prototype.onUpdate = function () {
        if (!this.is_ZQDSS_Dead) {
            var player = this._level.Player;
            if (null != player && this._active && this.Actor_ZQDSS_AniStateCtrl.getCur_ZQDSS_AniName() != Bandit_1.BanditState.onhit) {
                var dir = new Laya.Vector3();
                Laya.Vector3.subtract(player.transform.position, this.transform.position, dir);
                Laya.Vector3.normalize(dir, dir);
                var up = new Laya.Vector3(0, 1, 0);
                if (this.transform.position.x < player.transform.position.y) {
                    var normalizedTime = 1 - (Laya.Vector3.dot(dir, up) + 1) / 2;
                    this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.play(Bandit_1.BanditState.bossshoot, 0, normalizedTime);
                    this._firePointAnimator.play(Bandit_1.BanditState.bossshoot, 0, normalizedTime);
                }
                this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = 1;
                this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_._update();
                this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = 0;
                this._firePointAnimator.speed = 1;
                this._firePointAnimator._update();
                this._firePointAnimator.speed = 0;
                if (!player.is_ZQDSS_Dead && this._oepnFire && Laya.timer.currTimer - this._lastFireTime > this._fireTimeSpaceing) {
                    var bullet = this._gun.shoot();
                    this._lastFireTime = Laya.timer.currTimer;
                    this._shootCounter += 1;
                    var tag = this._shootCounter % 3;
                    if (0 == tag) {
                        SoundMgr_1.default.instance.play_ZQDSS_Sound("DryFire1");
                    }
                    else if (1 == tag) {
                        SoundMgr_1.default.instance.play_ZQDSS_Sound("DryFire2");
                    }
                    else if (2 == tag) {
                        SoundMgr_1.default.instance.play_ZQDSS_Sound("DryFire3");
                    }
                }
            }
        }
    };
    Boss.prototype.on_ZQDSS_Dead = function () {
        _super.prototype.on_ZQDSS_Dead.call(this);
        this._collider.enabled = false;
        this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(Bandit_1.BanditState.dead);
        SoundMgr_1.default.instance.play_ZQDSS_Sound("BossDeathVoice01");
        SoundMgr_1.default.instance.play_ZQDSS_BGM("KilledBoss");
    };
    Boss.prototype.ActiveBandit = function () {
        _super.prototype.ActiveBandit.call(this);
    };
    Boss.prototype.ReadyShoot = function () {
        if (this.is_ZQDSS_Dead)
            return;
        var player = this._level.Player;
        if (null != player && !player.is_ZQDSS_Dead && this._oepnFire) {
            var bullet = this._gun.shoot();
            bullet.setTarget(player);
            this._oepnFire = false;
        }
    };
    Boss.prototype.onBossOpenFire = function () {
        this._oepnFire = true;
    };
    return Boss;
}(Bandit_1.default));
exports.default = Boss;
},{"../../../Event/EventDef":6,"../../../Event/EventMgr":7,"../../../Mgr/SoundMgr":44,"../../Weapon/Gun":39,"./Bandit":27}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bandit_1 = require("./Bandit");
var EventMgr_1 = require("../../../Event/EventMgr");
var EventDef_1 = require("../../../Event/EventDef");
var GameUtilit_1 = require("../../GameUtilit");
var HangingBandit = /** @class */ (function (_super) {
    __extends(HangingBandit, _super);
    function HangingBandit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hitResult = new Laya.HitResult();
        return _this;
    }
    HangingBandit.prototype.on_ZQDSS_Init = function (level, unitType) {
        _super.prototype.on_ZQDSS_Init.call(this, level, unitType);
        this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(Bandit_1.BanditState.kongzhongkaiq);
        this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = 1;
    };
    HangingBandit.prototype.onUpdate = function () {
        if (!this.is_ZQDSS_Dead) {
            var player = this._level.Player;
            if (null != player && this._active) {
                var dir = new Laya.Vector3();
                Laya.Vector3.subtract(player.transform.position, this.transform.position, dir);
                Laya.Vector3.normalize(dir, dir);
                var right = new Laya.Vector3(1, 0, 0);
                if (this.transform.position.y >= player.transform.position.y) {
                    var normalizedTime = 1 - (Laya.Vector3.dot(dir, right) + 1) / 2;
                    this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.play(Bandit_1.BanditState.kongzhongkaiq, 0, normalizedTime);
                    this._firePointAnimator.play(Bandit_1.BanditState.kongzhongkaiq, 0, normalizedTime);
                    this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = 1;
                    this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_._update();
                    this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = 0;
                    this._firePointAnimator.speed = 1;
                    this._firePointAnimator._update();
                    this._firePointAnimator.speed = 0;
                    if (!player.is_ZQDSS_Dead && this._readyShoot) {
                        this._readyShoot = false;
                        var bullet = this._gun.shoot();
                        bullet.setTarget(player);
                    }
                }
            }
        }
    };
    HangingBandit.prototype.on_ZQDSS_Dead = function () {
        var _this = this;
        this._collider.enabled = false;
        if (this.Actor_ZQDSS_AniStateCtrl.getCur_ZQDSS_AniName() == Bandit_1.BanditState.kongzhongkaiq) {
            var pos = this.checkFloor();
            if (null != pos) {
                this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(Bandit_1.BanditState.dead2);
                Laya.Tween.to(this.transform, {
                    localPositionY: pos.y
                }, (this.transform.position.y - pos.y) / GameUtilit_1.default.PLAYER_DEAD_FALL_SPEED * 1000, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                    _this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(Bandit_1.BanditState.dead3);
                }));
            }
            else {
                this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(Bandit_1.BanditState.kongdead);
                Laya.Tween.to(this.transform, {
                    localPositionY: this.transform.position.y - 50,
                }, 50 / GameUtilit_1.default.PLAYER_DEAD_FALL_SPEED * 1000, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                }));
            }
        }
        else {
            this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(Bandit_1.BanditState.dead);
        }
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnBanditDead, { bandit: this });
    };
    HangingBandit.prototype.checkFloor = function () {
        var form = this.transform.position;
        var to = new Laya.Vector3(form.x, form.y - 100, form.z);
        this._level.Scene3D.physicsSimulation.raycastFromTo(form, to, this._hitResult);
        if (this._hitResult.succeeded) {
            var name_1 = this._hitResult.collider.owner.name;
            if ("floor" == name_1) {
                return this._hitResult.point.clone();
            }
        }
        return null;
    };
    return HangingBandit;
}(Bandit_1.default));
exports.default = HangingBandit;
},{"../../../Event/EventDef":6,"../../../Event/EventMgr":7,"../../GameUtilit":15,"./Bandit":27}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actor_1 = require("./Actor");
var Damage_1 = require("../../Damage");
var Utilit_1 = require("../../../Utilit");
var HostageState;
(function (HostageState) {
    HostageState["None"] = "None";
    HostageState["Idel"] = "idel";
    HostageState["Dead"] = "dead";
})(HostageState = exports.HostageState || (exports.HostageState = {}));
var Hostage = /** @class */ (function (_super) {
    __extends(Hostage, _super);
    function Hostage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._chuHanEffectObj = null;
        return _this;
    }
    Hostage.prototype.on_ZQDSS_Init = function (level, unitType) {
        _super.prototype.on_ZQDSS_Init.call(this, level, unitType);
        this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(HostageState.Idel);
        this._chuHanEffectObj = Utilit_1.default.get_ZQDSS_Child(this.owner, "chuhan");
    };
    Hostage.prototype.onHit = function (damage) {
        //console.log("打中人质");
        this._level.Player.onHit(new Damage_1.default(1));
        this.Hp_ZQDSS_ = 0;
    };
    Hostage.prototype.on_ZQDSS_Dead = function () {
        _super.prototype.on_ZQDSS_Dead.call(this);
        this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(HostageState.Dead);
        this._chuHanEffectObj.active = false;
    };
    return Hostage;
}(Actor_1.default));
exports.default = Hostage;
},{"../../../Utilit":65,"../../Damage":11,"./Actor":22}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actor_1 = require("./Actor");
var Damage_1 = require("../../Damage");
var UnitType_1 = require("../UnitType");
var EffectType_1 = require("../../Effect/EffectType");
var SoundMgr_1 = require("../../../Mgr/SoundMgr");
var OilDrum = /** @class */ (function (_super) {
    __extends(OilDrum, _super);
    function OilDrum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OilDrum.prototype.on_ZQDSS_Init = function (level, unitType) {
        _super.prototype.on_ZQDSS_Init.call(this, level, unitType);
        this._maxHp = 1;
        this.Hp_ZQDSS_ = 1;
    };
    OilDrum.prototype.onHit = function (damage) {
        this.Hp_ZQDSS_ = 0;
        //console.log("打中油管");
    };
    OilDrum.prototype.on_ZQDSS_Dead = function () {
        _super.prototype.on_ZQDSS_Dead.call(this);
        var units = this._level.getUnitsByType();
        for (var i = 0; i < units.length; ++i) {
            var unit = units[i];
            if (unit.Type != UnitType_1.Unit_ZQDSS_Type.Player && Laya.Vector3.distance(this.transform.position, unit.transform.position) <= 3) {
                var actor = unit;
                if (null != actor) {
                    var ICanHitObj = actor;
                    if (null != ICanHitObj) {
                        ICanHitObj.onHit(new Damage_1.default(Number.MAX_VALUE));
                    }
                }
            }
        }
        var effect1 = this._level.EffectMgr.play_ZQDSS_Effect(EffectType_1.Effect_ZQDSS_Type.baozha, 2000);
        effect1.set_ZQDSS_PosByV3(this.transform.position);
        var effect2 = this._level.EffectMgr.play_ZQDSS_Effect(EffectType_1.Effect_ZQDSS_Type.youton, 2000);
        if (null != effect2) {
            effect2.set_ZQDSS_PosByV3(this.transform.position);
        }
        this.Sprite3D.active = false;
        SoundMgr_1.default.instance.play_ZQDSS_Sound("CanisterBoom");
    };
    return OilDrum;
}(Actor_1.default));
exports.default = OilDrum;
},{"../../../Mgr/SoundMgr":44,"../../Damage":11,"../../Effect/EffectType":14,"../UnitType":36,"./Actor":22}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actor_1 = require("./Actor");
var EventMgr_1 = require("../../../Event/EventMgr");
var EventDef_1 = require("../../../Event/EventDef");
var Gun_1 = require("../../Weapon/Gun");
var Utilit_1 = require("../../../Utilit");
var GameUtilit_1 = require("../../GameUtilit");
var EffectType_1 = require("../../Effect/EffectType");
var SoundMgr_1 = require("../../../Mgr/SoundMgr");
var ActorWeakPoint_1 = require("./ActorWeakPoint");
var PlayerState;
(function (PlayerState) {
    PlayerState["idel"] = "idel";
    PlayerState["run"] = "run";
    PlayerState["runupshoot"] = "runupshoot";
    PlayerState["rollshoot"] = "rollshoot";
    PlayerState["jumpdownshoot"] = "jumpdownshoot";
    PlayerState["jumpforwardshoot"] = "jumpforwardshoot";
    PlayerState["rundownshoot"] = "rundownshoot";
    PlayerState["sideforwarddownshoot"] = "sideforwarddownshoot";
    PlayerState["jumponhit"] = "jumponhit";
    PlayerState["onhit"] = "onhit";
    PlayerState["reload"] = "reload";
    PlayerState["huachan"] = "huachan";
    PlayerState["dead"] = "dead";
    PlayerState["dead2"] = "dead2";
})(PlayerState = exports.PlayerState || (exports.PlayerState = {}));
var Player_ZQDSS_ = /** @class */ (function (_super) {
    __extends(Player_ZQDSS_, _super);
    function Player_ZQDSS_() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inCombat = false;
        _this._gun = null;
        _this._firePoint = null;
        _this._firePointAnimator = null;
        _this._redline = null;
        _this._bullettemplate = null;
        _this._magazineTemplate = null;
        _this._lMagazinePoiint = null;
        _this._rMagazinePoiint = null;
        _this._bulletShellTemplate = null;
        _this._hitResult = new Laya.HitResult();
        _this._curTarget = null;
        _this._curBattleData = null;
        _this._curAniSpeed = 1;
        _this._readyShoot = false;
        _this._camOffset = new Laya.Vector3();
        _this._yAngleOffset = GameUtilit_1.default.CAMERA_DEFAULT_Y_ANGLE;
        _this._bulletNum = 0;
        _this._shootCounter = 0;
        _this._stepCounter = 0;
        return _this;
    }
    Object.defineProperty(Player_ZQDSS_.prototype, "Incombat", {
        get: function () {
            return this._inCombat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player_ZQDSS_.prototype, "BulletNum", {
        get: function () {
            return this._bulletNum;
        },
        set: function (value) {
            var last = this._bulletNum;
            this._bulletNum = value;
            EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerBulletNumChange, {
                last: last,
                current: this._bulletNum
            });
        },
        enumerable: true,
        configurable: true
    });
    Player_ZQDSS_.prototype.on_ZQDSS_Init = function (level, unitType) {
        var _this = this;
        _super.prototype.on_ZQDSS_Init.call(this, level, unitType);
        this._firePoint = this.Sprite3D.getChildByName("fireObj").getChildByName("shejidian");
        this._firePointAnimator = this.Sprite3D.getChildByName("fireObj").getChildByName("shejidian").getComponent(Laya.Animator);
        this._redline = this._firePoint.getChildByName("redline");
        this._redline.active = false;
        this._bullettemplate = this.Sprite3D.getChildByName("Bullet");
        this._magazineTemplate = this.Sprite3D.getChildByName("Magazine");
        this._lMagazinePoiint = Utilit_1.default.get_ZQDSS_Child(this.Sprite3D, "Robocop_0");
        this._rMagazinePoiint = Utilit_1.default.get_ZQDSS_Child(this.Sprite3D, "Robocop_001");
        this._bulletShellTemplate = this.Sprite3D.getChildByName("BulletShell");
        this._gun = new Gun_1.default(this, this._firePoint, this._bullettemplate, Gun_1.BulletType.Player);
        this.BulletNum = GameUtilit_1.default.PLAYER_MAX_BULLET_NUM;
        var self = this;
        this.Actor_ZQDSS_AniStateCtrl["runstep"] = function () {
            self._stepCounter += 1;
            var tag = self._stepCounter % 2;
            var soundName = "";
            if (0 == tag) {
                soundName = "Land2";
            }
            else if (1 == tag) {
                soundName = "Land3";
            }
            SoundMgr_1.default.instance.play_ZQDSS_Sound(soundName);
            var effect = _this._level.EffectMgr.play_ZQDSS_Effect(EffectType_1.Effect_ZQDSS_Type.zou, 2000);
            effect.set_ZQDSS_PosByV3(_this.transform.position);
        };
        this.Actor_ZQDSS_AniStateCtrl["magazine"] = function () {
            if (self._magazineTemplate) {
                var magazine = Laya.Sprite3D.instantiate(self._magazineTemplate, self._level.Sprite3D);
                if (Math.floor(Math.random() * 100) % 2 == 0) {
                    magazine.transform.position = _this._lMagazinePoiint.transform.position.clone();
                }
                else {
                    magazine.transform.position = _this._rMagazinePoiint.transform.position.clone();
                }
                magazine.active = true;
                var rigidbody3D = magazine.getComponent(Laya.Rigidbody3D);
                rigidbody3D.applyTorque(new Laya.Vector3(0, 0, Math.random() * 10));
            }
        };
        var mesh = this._meshRoot.getChildByName("Cube_0");
        mesh.skinnedMeshRenderer.castShadow = true;
    };
    Player_ZQDSS_.prototype.onUpdate = function (){
        if(sessionStorage.getItem("pauseEvent") == 1){
            sessionStorage.removeItem("pauseEvent");
            Laya.SoundManager.muted = true;
            this.Nav_ZQDSS_Agent.pause();
            this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = 0;
            this._firePointAnimator.speed = 0;
        }
        if(sessionStorage.getItem("resumeEvent") == 1){
            sessionStorage.removeItem("resumeEvent");
            Laya.SoundManager.muted = false;
            SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
            this.Nav_ZQDSS_Agent.continue();
            this.Actor_ZQDSS_AniStateCtrl.Animator_ZQDSS_.speed = this._curAniSpeed;
            this._firePointAnimator.speed = this._curAniSpeed;
        }
    }
    Player_ZQDSS_.prototype.onEnable = function () {
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBattle, this, this.onEnterBattle);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnExitBattle, this, this.onExitBattle);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnClickInput, this, this.onClickInput);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnBattleClear, this, this.OnBattleClear);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_PlayerReloadBullet, this, this.reloadBullet);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_SetCamYAngle, this, this.onSetCamYAngle);
        Laya.stage.on(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange);
    };
    Player_ZQDSS_.prototype.onDisable = function () {
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBattle, this, this.onEnterBattle);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnExitBattle, this, this.onExitBattle);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnClickInput, this, this.onClickInput);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnBattleClear, this, this.OnBattleClear);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_PlayerReloadBullet, this, this.reloadBullet);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_SetCamYAngle, this, this.onSetCamYAngle);
        Laya.stage.off(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange);
    };
    Player_ZQDSS_.prototype.onFocusChange = function (para) {
            
    };
    Player_ZQDSS_.prototype.onLateUpdate = function () {
        if (!this.is_ZQDSS_Dead) {
            this.checkBandit();
            this._camOffset.x = this.Sprite3D.transform.localPositionX;
            this._camOffset.y = this.Sprite3D.transform.localPositionY + 2.5;
            this._camOffset.z = this._level.CamOriginZ;
            if (null != this._curBattleData) {
                this._camOffset.x += this._curBattleData.CamOffset.x;
                this._camOffset.y += this._curBattleData.CamOffset.y;
                this._camOffset.z += this._curBattleData.CamOffset.z;
            }
            this._level.Camera.transform.localPositionX = Utilit_1.default.Lerp_ZQDSS_(this._level.Camera.transform.localPositionX, this._camOffset.x, Laya.timer.delta / 1000 * 5);
            this._level.Camera.transform.localPositionY = Utilit_1.default.Lerp_ZQDSS_(this._level.Camera.transform.localPositionY, this._camOffset.y, Laya.timer.delta / 1000 * 5);
            this._level.Camera.transform.localPositionZ = Utilit_1.default.Lerp_ZQDSS_(this._level.Camera.transform.localPositionZ, this._camOffset.z, Laya.timer.delta / 1000 * 5);
            this._level.Camera.transform.localRotationEulerY = Utilit_1.default.lerp_ZQDSS_EulerAngle(this._level.Camera.transform.localRotationEulerY, this._yAngleOffset, Laya.timer.delta / 1000 * 5);
        }
    };
    Player_ZQDSS_.prototype.move = function (dir) {
        Laya.Vector3.normalize(dir, dir);
        var nextPos = new Laya.Vector3(this.transform.position.x + dir.x * this._actorData.moveSpeed * Math.min(50, Laya.timer.delta) / 1000, this.transform.position.y + dir.y * this._actorData.moveSpeed * Math.min(50, Laya.timer.delta) / 1000, this.transform.position.z + dir.z * this._actorData.moveSpeed * Math.min(50, Laya.timer.delta) / 1000);
        this.xzLookAtByV3(nextPos);
        this.transform.position = nextPos;
    };
    Player_ZQDSS_.prototype.onMoveStart = function () {
        this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.run);
    };
    Player_ZQDSS_.prototype.onMoveEnd = function () {
        this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.idel);
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerMoveEnd, { player: this });
    };
    Player_ZQDSS_.prototype.onTargetPointComplate = function (index) {
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerTargetPointComplate, {
            player: this,
            index: index
        });
        var pointSp3d = this._level.NavigationMgr.getPath().get_ZQDSS_PointBy_ZQDSS_Index(index);
        var data = GameUtilit_1.PathData.parse(pointSp3d.name);
        if (GameUtilit_1.ReadyShootTag.readyShoot == data.readyShootTag) {
            this.ReadyShoot();
        }
        else if (GameUtilit_1.ReadyShootTag.endShoot == data.readyShootTag) {
            this.EndShoot();
        }
    };
    Player_ZQDSS_.prototype.reloadBullet = function () {
        this.BulletNum = GameUtilit_1.default.PLAYER_MAX_BULLET_NUM;
    };
    Player_ZQDSS_.prototype.onSetCamYAngle = function (para) {
        var y = para.y;
        this._yAngleOffset = y;
    };
    Player_ZQDSS_.prototype.on_ZQDSS_AnimationComplate = function (name) {
        if (name == PlayerState.reload) {
            this.reloadBullet();
            this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.run);
        }
    };
    Player_ZQDSS_.prototype.onAnimation_ZQDSS_Change = function (name) {
        if (name == PlayerState.jumpdownshoot
            || name == PlayerState.jumpforwardshoot
            || name == PlayerState.rollshoot
            || name == PlayerState.sideforwarddownshoot) {
            SoundMgr_1.default.instance.play_ZQDSS_Sound("Jump");
            var effect = this._level.EffectMgr.play_ZQDSS_Effect(EffectType_1.Effect_ZQDSS_Type.qitiao);
            effect.set_ZQDSS_PosByV3(this.transform.position);
        }
    };
    Player_ZQDSS_.prototype.onHit = function (damage) {
        var _this = this;
        if (this._level.IsComplate)
            return;
        this.Hp_ZQDSS_ = 0;
        var pos = this.checkFloor();
        if (null != pos) {
            if (Laya.Vector3.distance(this.transform.position, pos) < 0.1) {
                this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.onhit);
            }
            else {
                this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.dead);
                Laya.Tween.to(this.transform, {
                    localPositionY: pos.y
                }, (this.transform.position.y - pos.y) / GameUtilit_1.default.PLAYER_DEAD_FALL_SPEED * 1000, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                    _this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.dead2);
                }));
            }
        }
        else {
            this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.jumponhit);
            Laya.Tween.to(this.transform, {
                localPositionY: this.transform.position.y - 50,
            }, 50 / GameUtilit_1.default.PLAYER_DEAD_FALL_SPEED * 1000, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
            }));
        }
        this.Nav_ZQDSS_Agent.pause();
        this.EndShoot();
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerDead, {
            player: this,
        });
    };
    Player_ZQDSS_.prototype.onEnterBattle = function (para) {
        this._inCombat = true;
        var battleTrigger = para.trigger;
        var battleData = battleTrigger.getBattleData();
        Laya.Tween.to(this._actorData, {
            moveSpeed: battleData.MoveSpeed
        }, 150, Laya.Ease.linearNone, null, null, true);
        var speed = this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(battleData.AniName, battleData.Time);
        this._firePointAnimator.speed = speed;
        this._firePointAnimator.crossFade(battleData.AniName, 0.03);
        this._curAniSpeed = speed;
        this._curBattleData = battleData;
        this._yAngleOffset = this._curBattleData.CamYAngleOffsett;
    };
    Player_ZQDSS_.prototype.onExitBattle = function (para) {
        this._inCombat = false;
        if (this._level.IsComplate) {
            this.Nav_ZQDSS_Agent.pause();
            var speed = this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.idel);
        }
        else {
            Laya.Tween.to(this._actorData, {
                moveSpeed: GameUtilit_1.default.PLAYER_BASE_MOVE_SPEED
            }, 10, Laya.Ease.linearNone, null, null, true);
            var battleTrigger = para.trigger;
            if (this._bulletNum < GameUtilit_1.default.PLAYER_MAX_BULLET_NUM) {
                var speed = this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.reload);
                SoundMgr_1.default.instance.play_ZQDSS_Sound("RobocopReload");
            }
            else {
                var speed = this.Actor_ZQDSS_AniStateCtrl.change_ZQDSS_State(PlayerState.run);
            }
        }
        this._curBattleData = null;
        this._curAniSpeed = 1;
        this.EndShoot();
        this._yAngleOffset = GameUtilit_1.default.CAMERA_DEFAULT_Y_ANGLE;
    };
    Player_ZQDSS_.prototype.onClickInput = function () {
        if (!this.is_ZQDSS_Dead
            && this._inCombat
            && this._readyShoot) {
            if (this.BulletNum <= 0) {
                this._shootCounter += 1;
                var tag = this._shootCounter % 3;
                if (0 == tag) {
                    SoundMgr_1.default.instance.play_ZQDSS_Sound("DryFire1");
                }
                else if (1 == tag) {
                    SoundMgr_1.default.instance.play_ZQDSS_Sound("DryFire2");
                }
                else if (2 == tag) {
                    SoundMgr_1.default.instance.play_ZQDSS_Sound("DryFire3");
                }
            }
            else {
                this._gun.shoot();
                this.BulletNum -= 1;
                var effect = this._level.EffectMgr.play_ZQDSS_Effect(EffectType_1.Effect_ZQDSS_Type.kaihuo, 1000);
                effect.set_ZQDSS_PosByV3(this._gun.FirePoint.transform.position);
                effect.Sprite3D.transform.rotation = this._gun.FirePoint.transform.rotation.clone();
                SoundMgr_1.default.instance.play_ZQDSS_Sound("Robocop1");
                if (this._bulletShellTemplate) {
                    var shell = Laya.Sprite3D.instantiate(this._bulletShellTemplate, this._level.Sprite3D);
                    if (Math.floor(Math.random() * 100) % 2 == 0) {
                        shell.transform.position = this._lMagazinePoiint.transform.position.clone();
                    }
                    else {
                        shell.transform.position = this._rMagazinePoiint.transform.position.clone();
                    }
                    shell.active = true;
                    var forceDir = new Laya.Vector3();
                    this._firePoint.transform.getForward(forceDir);
                    forceDir.x *= 250;
                    forceDir.y *= 250;
                    forceDir.z *= 250;
                    var rigidbody3D = shell.getComponent(Laya.Rigidbody3D);
                    rigidbody3D.applyForce(forceDir);
                    rigidbody3D.applyTorque(new Laya.Vector3(0, 0, Math.random() * 10));
                }
            }
        }
    };
    Player_ZQDSS_.prototype.checkBandit = function () {
        if (!this.Incombat || !this._readyShoot)
            return null;
        var actor = null;
        var forward = new Laya.Vector3();
        this._redline.transform.getForward(forward);
        forward.x *= -99;
        forward.y *= -99;
        forward.z *= -99;
        var to = new Laya.Vector3();
        Laya.Vector3.add(this._firePoint.transform.position, forward, to);
        this._level.Scene3D.physicsSimulation.raycastFromTo(this._firePoint.transform.position, to, this._hitResult);
        if (this._hitResult.succeeded) {
            actor = this._hitResult.collider.owner.getComponent(Actor_1.default);
            if (null == actor) {
                var weak = this._hitResult.collider.owner.getComponent(ActorWeakPoint_1.default);
                if (null != weak) {
                    actor = weak.Actor;
                }
            }
            if (null != actor && !actor.is_ZQDSS_Dead) {
                this._curTarget = actor;
                this._actorData.moveSpeed = this._curBattleData.MoveSpeed * 0.35;
                this._actorAniStateCtrl.Animator_ZQDSS_.speed = this._curAniSpeed * 0.35;
                this._firePointAnimator.speed = this._curAniSpeed * 0.35;
            }
            else {
                if (null != this._curTarget) {
                    if (GameUtilit_1.default.isBandit(this._curTarget)) {
                        this._curTarget.ReadyShoot();
                    }
                    this._curTarget = null;
                    this._actorData.moveSpeed = this._curBattleData.MoveSpeed;
                    this._actorAniStateCtrl.Animator_ZQDSS_.speed = this._curAniSpeed;
                    this._firePointAnimator.speed = this._curAniSpeed;
                }
            }
        }
        else {
            if (null != this._curTarget) {
                if (GameUtilit_1.default.isBandit(this._curTarget)) {
                    this._curTarget.ReadyShoot();
                }
                this._curTarget = null;
                this._actorData.moveSpeed = this._curBattleData.MoveSpeed;
                this._actorAniStateCtrl.Animator_ZQDSS_.speed = this._curAniSpeed;
                this._firePointAnimator.speed = this._curAniSpeed;
            }
        }
        return null;
    };
    Player_ZQDSS_.prototype.ReadyShoot = function () {
        this._readyShoot = true;
        this._redline.active = true;
    };
    Player_ZQDSS_.prototype.EndShoot = function () {
        this._readyShoot = false;
        this._redline.active = false;
    };
    Player_ZQDSS_.prototype.OnBattleClear = function () {
        if (!this._inCombat)
            return;
        var normalizedTime = this._actorAniStateCtrl.Animator_ZQDSS_.getCurrentAnimatorPlayState().normalizedTime;
        var lefProcess = Math.max(0, 1 - normalizedTime);
        if (lefProcess > 0) {
            var leftTime = this._curBattleData.Time * lefProcess;
            var leftDis = this._curBattleData.TotalDis * lefProcess;
            this._curAniSpeed = this._curAniSpeed * GameUtilit_1.default.PLAYER_BASE_MOVE_SPEED / this._curBattleData.MoveSpeed;
            this._actorAniStateCtrl.Animator_ZQDSS_.speed = this._curAniSpeed;
            this._firePointAnimator.speed = this._curAniSpeed;
            this._actorData.moveSpeed = GameUtilit_1.default.PLAYER_BASE_MOVE_SPEED;
            this._curBattleData.MoveSpeed = GameUtilit_1.default.PLAYER_BASE_MOVE_SPEED;
        }
        this.EndShoot();
    };
    Player_ZQDSS_.prototype.checkFloor = function () {
        var form = this.transform.position;
        var to = new Laya.Vector3(form.x, form.y - 100, form.z);
        this._level.Scene3D.physicsSimulation.raycastFromTo(form, to, this._hitResult);
        if (this._hitResult.succeeded) {
            var name_1 = this._hitResult.collider.owner.name;
            if ("floor" == name_1) {
                return this._hitResult.point.clone();
            }
        }
        return null;
    };
    return Player_ZQDSS_;
}(Actor_1.default));
exports.default = Player_ZQDSS_;
},{"../../../Event/EventDef":6,"../../../Event/EventMgr":7,"../../../Mgr/SoundMgr":44,"../../../Utilit":65,"../../Effect/EffectType":14,"../../GameUtilit":15,"../../Weapon/Gun":39,"./Actor":22,"./ActorWeakPoint":25}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitBase_1 = require("./UnitBase");
var Reflect = /** @class */ (function (_super) {
    __extends(Reflect, _super);
    function Reflect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Reflect;
}(UnitBase_1.default));
exports.default = Reflect;
},{"./UnitBase":34}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitBase = /** @class */ (function (_super) {
    __extends(UnitBase, _super);
    function UnitBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UnitBase.prototype, "Type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitBase.prototype, "Level", {
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitBase.prototype, "Sprite3D", {
        get: function () {
            return this._ownerSprite3D;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitBase.prototype, "transform", {
        get: function () {
            return this._transform;
        },
        enumerable: true,
        configurable: true
    });
    UnitBase.prototype.on_ZQDSS_Init = function (level, unitType) {
        this._type = unitType;
        this._level = level;
        this._ownerSprite3D = this.owner;
        this._transform = this._ownerSprite3D.transform;
    };
    UnitBase.prototype.destroyUnit = function () {
        var self = this;
        this._ownerSprite3D.active = false;
        Laya.timer.frameOnce(1, this, function () {
            self._ownerSprite3D.removeSelf();
            self._ownerSprite3D.destroy(true);
        });
    };
    UnitBase.prototype.onDestroy = function () {
        Laya.Tween.clearAll(this);
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this.Sprite3D);
        Laya.timer.clearAll(this.Sprite3D);
        Laya.Tween.clearAll(this.transform);
        Laya.timer.clearAll(this.transform);
    };
    UnitBase.prototype.xzLookAt = function (unit) {
        this.xzLookAtByV3(unit.transform.position);
    };
    UnitBase.prototype.xzLookAtByV3 = function (v3) {
        var dir = new Laya.Vector3(v3.x - this.transform.position.x, v3.y - this.transform.position.y, v3.z - this.transform.position.z);
        var dotValue = (dir.x * 0) + (dir.z * 1);
        var cos = dotValue / Laya.Vector3.scalarLength(dir);
        var radian = Math.acos(cos);
        var r = radian / (2 * Math.PI) * 360;
        if (dir.x < 0) {
            r = r + (180 - r) * 2;
        }
        this.transform.rotationEuler = new Laya.Vector3(this.transform.rotationEuler.x, r + 90, this.transform.rotationEuler.z);
    };
    return UnitBase;
}(Laya.Script3D));
exports.default = UnitBase;
},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitType_1 = require("./UnitType");
var UnitBase_1 = require("./UnitBase");
var Bandit_1 = require("./Actor/Bandit");
var Player_1 = require("./Actor/Player");
var Hostage_1 = require("./Actor/Hostage");
var OilDrum_1 = require("./Actor/OilDrum");
var Balloon_1 = require("./Actor/Balloon");
var Reflect_1 = require("./Reflect");
var Boss_1 = require("./Actor/Boss");
var HangingBandit_1 = require("./Actor/HangingBandit");
var Unit_ZQDSS_Factory = /** @class */ (function () {
    function Unit_ZQDSS_Factory(level, prefabRoot) {
        this._level = level;
        this._prefab_ZQDSS_Root = prefabRoot;
    }
    Unit_ZQDSS_Factory.prototype.create_ZQDSS_ = function (unitType, ins) {
        if (null == ins) {
            if (null == this._prefab_ZQDSS_Root)
                return null;
            var template = this._prefab_ZQDSS_Root.getChildByName(String(unitType));
            ins = Laya.Sprite3D.instantiate(template, this._level.Sprite3D);
        }
        if (null != ins) {
            var unitBase = null;
            switch (unitType) {
                case UnitType_1.Unit_ZQDSS_Type.Bandit:
                    unitBase = ins.addComponent(Bandit_1.default);
                    break;
                case UnitType_1.Unit_ZQDSS_Type.Player:
                    unitBase = ins.addComponent(Player_1.default);
                    break;
                case UnitType_1.Unit_ZQDSS_Type.Hostage:
                    unitBase = ins.addComponent(Hostage_1.default);
                    break;
                case UnitType_1.Unit_ZQDSS_Type.OilDrum:
                    unitBase = ins.addComponent(OilDrum_1.default);
                    break;
                case UnitType_1.Unit_ZQDSS_Type.Balloon:
                    unitBase = ins.addComponent(Balloon_1.default);
                    break;
                case UnitType_1.Unit_ZQDSS_Type.Reflect:
                    unitBase = ins.addComponent(Reflect_1.default);
                    break;
                case UnitType_1.Unit_ZQDSS_Type.Boss:
                    unitBase = ins.addComponent(Boss_1.default);
                    break;
                case UnitType_1.Unit_ZQDSS_Type.HangingBandit:
                    unitBase = ins.addComponent(HangingBandit_1.default);
                    break;
                default:
                    unitBase = ins.addComponent(UnitBase_1.default);
                    break;
            }
            if (unitType) {
                unitBase.on_ZQDSS_Init(this._level, unitType);
            }
            return unitBase;
        }
        return null;
    };
    return Unit_ZQDSS_Factory;
}());
exports.default = Unit_ZQDSS_Factory;
},{"./Actor/Balloon":26,"./Actor/Bandit":27,"./Actor/Boss":28,"./Actor/HangingBandit":29,"./Actor/Hostage":30,"./Actor/OilDrum":31,"./Actor/Player":32,"./Reflect":33,"./UnitBase":34,"./UnitType":36}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unit_ZQDSS_Type;
(function (Unit_ZQDSS_Type) {
    Unit_ZQDSS_Type["None"] = "";
    Unit_ZQDSS_Type["Player"] = "Player";
    Unit_ZQDSS_Type["Bandit"] = "Bandit";
    Unit_ZQDSS_Type["Hostage"] = "Hostage";
    Unit_ZQDSS_Type["OilDrum"] = "OilDrum";
    Unit_ZQDSS_Type["Balloon"] = "balloon";
    Unit_ZQDSS_Type["Reflect"] = "Reflect";
    Unit_ZQDSS_Type["Boss"] = "Boss";
    Unit_ZQDSS_Type["HangingBandit"] = "HangingBandit";
})(Unit_ZQDSS_Type = exports.Unit_ZQDSS_Type || (exports.Unit_ZQDSS_Type = {}));
},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bullet_1 = require("./Bullet");
var Damage_1 = require("../Damage");
var Player_1 = require("../Unit/Actor/Player");
var BanditBullet = /** @class */ (function (_super) {
    __extends(BanditBullet, _super);
    function BanditBullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._target = null;
        return _this;
    }
    BanditBullet.prototype.hitCheck = function () {
        var from = this.LastPos;
        var to = this.Sprite3D.transform.position;
        var dir = new Laya.Vector3();
        Laya.Vector3.subtract(from, to, dir);
        Laya.Vector3.add(from, dir, from);
        this._hitResult.succeeded = false;
        this.Gun.User.Level.Scene3D.physicsSimulation.raycastFromTo(from, to, this._hitResult);
        if (this._hitResult.succeeded) {
            var sp3d = this._hitResult.collider.owner;
            var player = sp3d.getComponent(Player_1.default);
            if (null != this._target && null != player) {
                player.onHit(new Damage_1.default(this.Gun.getDamage()));
                this._gun.recoverBullet(this);
            }
        }
    };
    BanditBullet.prototype.onUpdate = function () {
        if (null != this._target) {
            var pos = this._target.transform.position.clone();
            pos.y += 0.4;
            this.Sprite3D.transform.lookAt(pos, Laya.Vector3._Up);
        }
        if (this._sprite3D.active) {
            this._sprite3D.transform.getForward(this._forward);
            Laya.Vector3.normalize(this._forward, this._forward);
            this.LastPos.x = this._sprite3D.transform.position.x;
            this.LastPos.y = this._sprite3D.transform.position.y;
            this.LastPos.z = this._sprite3D.transform.position.z;
            this._sprite3D.transform.position = new Laya.Vector3(this._sprite3D.transform.position.x + this._forward.x * this.FlySpeed * Math.min(Laya.timer.delta, 50) / 1000, this._sprite3D.transform.position.y + this._forward.y * this.FlySpeed * Math.min(Laya.timer.delta, 50) / 1000, this._sprite3D.transform.position.z + this._forward.z * this.FlySpeed * Math.min(Laya.timer.delta, 50) / 1000);
        }
    };
    BanditBullet.prototype.setTarget = function (target) {
        this._target = target;
    };
    BanditBullet.prototype.OP_Reset = function () {
        _super.prototype.OP_Reset.call(this);
        this._target = null;
    };
    return BanditBullet;
}(Bullet_1.default));
exports.default = BanditBullet;
},{"../Damage":11,"../Unit/Actor/Player":32,"./Bullet":38}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Damage_1 = require("../Damage");
var InterfaceUtilit_1 = require("../Interface/InterfaceUtilit");
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FlyTime = 999;
        _this.FlySpeed = 25;
        _this._sprite3D = null;
        _this._gun = null;
        _this._forward = new Laya.Vector3();
        _this.LastPos = new Laya.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        _this._hitResult = new Laya.HitResult();
        _this._taril = null;
        return _this;
    }
    Object.defineProperty(Bullet.prototype, "Sprite3D", {
        get: function () {
            return this._sprite3D;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "Gun", {
        get: function () {
            return this._gun;
        },
        enumerable: true,
        configurable: true
    });
    Bullet.prototype.init = function (gun) {
        this._gun = gun;
        this._sprite3D = this.owner;
        this._taril = this.owner.getChildByName("Trail");
    };
    Bullet.prototype.onUpdate = function () {
        if (this._sprite3D.active) {
            this._sprite3D.transform.getForward(this._forward);
            Laya.Vector3.normalize(this._forward, this._forward);
            this._forward.x *= -1;
            this._forward.y *= -1;
            this._forward.z *= -1;
            this.LastPos.x = this._sprite3D.transform.position.x;
            this.LastPos.y = this._sprite3D.transform.position.y;
            this.LastPos.z = this._sprite3D.transform.position.z;
            this._sprite3D.transform.position = new Laya.Vector3(this._sprite3D.transform.position.x + this._forward.x * this.FlySpeed * Math.min(Laya.timer.delta, 50) / 1000, this._sprite3D.transform.position.y + this._forward.y * this.FlySpeed * Math.min(Laya.timer.delta, 50) / 1000, this._sprite3D.transform.position.z + this._forward.z * this.FlySpeed * Math.min(Laya.timer.delta, 50) / 1000);
        }
    };
    Bullet.prototype.onLateUpdate = function () {
        if (this._sprite3D.active) {
            this.hitCheck();
        }
    };
    Bullet.prototype.hitCheck = function () {
        var from = this.LastPos;
        var to = this.Sprite3D.transform.position;
        this._hitResult.succeeded = false;
        this.Gun.User.Level.Scene3D.physicsSimulation.raycastFromTo(from, to, this._hitResult);
        if (this._hitResult.succeeded) {
            var sp3d = this._hitResult.collider.owner;
            var coms = sp3d._components;
            if (coms) {
                for (var index = 0; index < coms.length; index++) {
                    var element = coms[index];
                    if (InterfaceUtilit_1.default.isICanHitObj(element)) {
                        element.onHit(new Damage_1.default(this.Gun.getDamage()));
                        this._gun.recoverBullet(this);
                        return;
                    }
                }
            }
        }
    };
    Bullet.prototype.recover = function () {
        this._gun.recoverBullet(this);
    };
    Bullet.prototype.OP_Key = function () {
    };
    Bullet.prototype.OP_Init = function () {
        var _this = this;
        this._sprite3D.active = true;
        var self = this;
        Laya.timer.once(this.FlyTime, this, function () {
            self.Gun.recoverBullet(_this);
        });
        this.LastPos.x = this.Sprite3D.transform.position.x;
        this.LastPos.y = this.Sprite3D.transform.position.y;
        this.LastPos.z = this.Sprite3D.transform.position.z;
    };
    Bullet.prototype.OP_Reset = function () {
        this._sprite3D.active = false;
        Laya.timer.clearAll(this);
        this.LastPos.x = this.Sprite3D.transform.position.x;
        this.LastPos.y = this.Sprite3D.transform.position.y;
        this.LastPos.z = this.Sprite3D.transform.position.z;
    };
    Bullet.prototype.OP_OnClear = function () {
        this._sprite3D.destroy(true);
    };
    return Bullet;
}(Laya.Script3D));
exports.default = Bullet;
},{"../Damage":11,"../Interface/InterfaceUtilit":16}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjPool_1 = require("../../ObjPool/ObjPool");
var Bullet_1 = require("./Bullet");
var PlayerBullet_1 = require("./PlayerBullet");
var BanditBullet_1 = require("./BanditBullet");
var BulletType;
(function (BulletType) {
    BulletType["None"] = "None";
    BulletType["Player"] = "Player";
    BulletType["Bandit"] = "Bandit";
})(BulletType = exports.BulletType || (exports.BulletType = {}));
var Gun = /** @class */ (function () {
    function Gun(user, firepoint, bulletTemplate, bulletType) {
        this._pool = new ObjPool_1.default();
        this._bulletType = BulletType.None;
        this._user = user;
        this._firePoint = firepoint;
        this._bulletTemplate = bulletTemplate;
        this._pool.setCreateFunc(this, this.createBullet);
        this._bulletType = bulletType;
    }
    Object.defineProperty(Gun.prototype, "User", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gun.prototype, "FirePoint", {
        get: function () {
            return this._firePoint;
        },
        enumerable: true,
        configurable: true
    });
    Gun.prototype.shoot = function () {
        var bullet = this._pool.get();
        bullet.Sprite3D.transform.position = this._firePoint.transform.position.clone();
        bullet.Sprite3D.transform.rotation = this._firePoint.transform.rotation.clone();
        bullet.LastPos.x = bullet.Sprite3D.transform.position.x;
        bullet.LastPos.y = bullet.Sprite3D.transform.position.y;
        bullet.LastPos.z = bullet.Sprite3D.transform.position.z;
        return bullet;
    };
    Gun.prototype.createBullet = function () {
        var prefabsRoot = this.User.Level.PrefabsRoot;
        var ins = Laya.Sprite3D.instantiate(this._bulletTemplate, this.User.Level.Sprite3D);
        var bullet = null;
        switch (this._bulletType) {
            case BulletType.Player:
                bullet = ins.addComponent(PlayerBullet_1.default);
                break;
            case BulletType.Bandit:
                bullet = ins.addComponent(BanditBullet_1.default);
                break;
            default:
                bullet = ins.addComponent(Bullet_1.default);
        }
        bullet.init(this);
        bullet.OP_Init();
        return bullet;
    };
    Gun.prototype.recoverBullet = function (bullet) {
        if (bullet.Gun == this) {
            //this._pool.recover(bullet);
            bullet.Sprite3D.destroy(true);
        }
    };
    Gun.prototype.getDamage = function () {
        return 1;
    };
    return Gun;
}());
exports.default = Gun;
},{"../../ObjPool/ObjPool":52,"./BanditBullet":37,"./Bullet":38,"./PlayerBullet":40}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bullet_1 = require("./Bullet");
var Damage_1 = require("../Damage");
var Reflect_1 = require("../Unit/Reflect");
var InterfaceUtilit_1 = require("../Interface/InterfaceUtilit");
var PlayerBullet = /** @class */ (function (_super) {
    __extends(PlayerBullet, _super);
    function PlayerBullet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerBullet.prototype.hitCheck = function () {
        var from = this.LastPos;
        var to = this.Sprite3D.transform.position;
        var dir = new Laya.Vector3();
        Laya.Vector3.subtract(from, to, dir);
        Laya.Vector3.add(from, dir, from);
        this._hitResult.succeeded = false;
        this.Gun.User.Level.Scene3D.physicsSimulation.raycastFromTo(from, to, this._hitResult);
        if (this._hitResult.succeeded) {
            var canHitObj = null;
            var sp3d = this._hitResult.collider.owner;
            var coms = sp3d._components;
            if (coms) {
                for (var index = 0; index < coms.length; index++) {
                    var element = coms[index];
                    if (InterfaceUtilit_1.default.isICanHitObj(element) && element != this.Gun.User) {
                        canHitObj = element;
                        break;
                    }
                }
            }
            var reflect = sp3d.getComponent(Reflect_1.default);
            if (null != canHitObj) {
                var damage = new Damage_1.default(this.Gun.getDamage());
                damage.hitDir = this.Sprite3D.transform.rotationEuler.clone();
                damage.hitPoint.x = this._hitResult.point.x;
                damage.hitPoint.y = this._hitResult.point.y;
                damage.hitPoint.z = this._hitResult.point.z;
                damage.bullet = this;
                canHitObj.onHit(damage);
            }
            if (null != reflect) {
                var point = this._hitResult.point;
                this.Sprite3D.transform.position = point.clone();
                var i = new Laya.Vector3();
                Laya.Vector3.subtract(point, from, i);
                Laya.Vector3.normalize(i, i);
                var n = new Laya.Vector3();
                reflect.transform.getUp(n);
                if (Laya.Vector3.dot(i, n) < 0) {
                    n.x *= -1;
                    n.y *= -1;
                    n.z *= -1;
                }
                Laya.Vector3.normalize(n, n);
                var r = new Laya.Vector3();
                Laya.Vector3.subtract(i, new Laya.Vector3(2 * Laya.Vector3.dot(i, n) * n.x, 2 * Laya.Vector3.dot(i, n) * n.y, 2 * Laya.Vector3.dot(i, n) * n.z), r);
                Laya.Vector3.normalize(r, r);
                var t = new Laya.Vector3();
                Laya.Vector3.add(point, r, t);
                this.Sprite3D.transform.lookAt(t, Laya.Vector3._Up);
            }
        }
    };
    return PlayerBullet;
}(Bullet_1.default));
exports.default = PlayerBullet;
},{"../Damage":11,"../Interface/InterfaceUtilit":16,"../Unit/Reflect":33,"./Bullet":38}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpUnit_1 = require("../Net/HttpUnit");
var AppConfig_1 = require("../AppConfig");
var WXAPI_1 = require("../WXAPI");
var User_1 = require("../User/User");
var OPPOAPI_1 = require("../OPPOAPI");
/**
 * 用于买量上报,以及停留时间上报的的类，本质上是对wx和买量接口做一个集成化的封装方便使用
 *
 * @export
 * @class MaiLiang
 */
var Mai_ZQDSS_Liang = /** @class */ (function () {
    function Mai_ZQDSS_Liang() {
    }
    /**
     * 发送数据的类
     *
     * @protected
     * @static
     * @param {request_ZQDSS_Data} req
     * @memberof MaiLiang
     */
    Mai_ZQDSS_Liang.request = function (req) {
        
        var completeFunc = function (res) {
            
        };
        var errorFunc = function (res) {
          
        };
    };
    /**
     * 获得买量系统唯一标识ID,此ID的作用是用来上报游戏时间
     *
     * @param {Function} res
     * @memberof MaiLiang
     */
    Mai_ZQDSS_Liang.GetMaiLiangOpenId = function (onSuccess, onFail) {
    };
    /**
     * 上报买量接口停留时间
     *
        appid －主体小程序appid
        openid －买量系统唯一标识（不可空）
        posttime － 请求时间刻度（精确到秒）
        time － 停留时长（精确到秒）
     * @static
     * @memberof MaiLiang
     */
    Mai_ZQDSS_Liang.ReportStayTime = function (onSuccess, onFail) {
    };
    Mai_ZQDSS_Liang.mainUrl = "";
    Mai_ZQDSS_Liang.uclick = "";
    Mai_ZQDSS_Liang.stay = "";
    Mai_ZQDSS_Liang.key = ""; //推广路径中同名参数，需要调用方法WXAPi.getLaunchOptionsSync()，从返回的参数中获得。
    Mai_ZQDSS_Liang.MaiLiangOpenId = ""; //买量系统唯一标识,执行GetMaiLiangOpenId()方法成功后自动获得。
    Mai_ZQDSS_Liang.time = 0; //买量系统唯一标识后，记录当前时间（精确到秒）。
    return Mai_ZQDSS_Liang;
}());
exports.default = Mai_ZQDSS_Liang;
},{"../AppConfig":2,"../Net/HttpUnit":48,"../OPPOAPI":51,"../User/User":64,"../WXAPI":82}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var User_1 = require("./User/User");
var layaMaxUI_1 = require("./ui/layaMaxUI");
var LoadingView_1 = require("./View/LoadingView/LoadingView");
var HttpUnit_1 = require("./Net/HttpUnit");
var WXAPI_1 = require("./WXAPI");
var AppConfig_1 = require("./AppConfig");
var EventMgr_1 = require("./Event/EventMgr");
var EventDef_1 = require("./Event/EventDef");
var OPPOAPI_1 = require("./OPPOAPI");
var QQMiniGameAPI_1 = require("./QQMiniGameAPI");
var TTAPI_1 = require("./TTAPI");
var ALD_1 = require("./ALD");
var Main = /** @class */ (function () {
    function Main() {
        this._loadingUI = null;
        this._loadingView = null;
        //预加载列表
        this._preLoadRes = new Array();
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height);
        else
            Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        if (true == AppConfig_1.default.onTT_ZQDSS_MiniGame) {
            Laya.Browser.onMiniGame = false;
        }
        if (!Laya.Browser.onMiniGame
            && !Laya.Browser.onQGMiniGame
            && !Laya.Browser.onQQMiniGame
            && !AppConfig_1.default.onTT_ZQDSS_MiniGame) //如果不是小游戏，资源服务器设置为本地测试地址
         {
            AppConfig_1.default.Local_ZQDSS_TestReServer = AppConfig_1.default.Local_ZQDSS_TestReServer;
        }
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        if(lang == "IND")
        Laya.AtlasInfoManager.enable("fileconfigIND.json", Laya.Handler.create(this, this.onConfigLoaded));
        else Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        Laya.loader.maxLoader = 50;
        this.initLoadingView();
        //加载重要配置，这些配置必须在游戏启动前加载完成
        var firstConfigs = [
            { url: AppConfig_1.default.Local_ZQDSS_TestReServer + "/json/appswitch.json", type: Laya.Loader.JSON },
            { url: AppConfig_1.default.Local_ZQDSS_TestReServer + "/json/levelConfig.json", type: Laya.Loader.JSON }
        ];
        var self = this;
        Laya.loader.load(firstConfigs, Laya.Handler.create(this, function () {
            self.loadRes(); //加载资源
        }));
        EventMgr_1.default.instance.reg_ZQDSS_OnceEvent(EventDef_1.Event_ZQDSS_Def.App__ZQDSS_CloseFirstLoadingView, this, this.closeloadingUI);
    };
    Main.prototype.initLoadingView = function () {
        this._loadingUI = new layaMaxUI_1.ui.View.LoadingUI();
        Laya.stage.addChild(this._loadingUI);
        this._loadingUI.width = Laya.stage.width;
        this._loadingUI.height = Laya.stage.height;
        this._loadingView = this._loadingUI.getComponent(LoadingView_1.default);
        this._loadingView.setProcess(0);
    };
    Main.prototype.postResToOpenDataContext = function (onComplate) {
        if (onComplate) {
                onComplate();
        }
    };
    Main.prototype.preLoad = function () {
        //这里添加你需要预加载的资源
        //this._preLoadRes.push({ url: AppConfig.ResServer + "/json/example.json", type: Laya.Loader.JSON });
    };
    Main.prototype.loadRes = function () {
        var _this = this;
        this.preLoad();
        var resource = this._preLoadRes;
        var self = this;
        if (resource.length > 0) {
                Laya.loader.load(resource, Laya.Handler.create(this, function () {
                    self.onLoadResComplate();
                }), Laya.Handler.create(this, function (res) {
                    self._loadingView.setProcess(res);
                }));
            }
            else {
                self.onLoadResComplate();
            }
    };
    Main.prototype.onLoadResComplate = function () {
        var self = this;
        this._loadingView.setProcess(1);
        User_1.default.test_ZQDSS_InitUser(); //测试
            GameConfig_1.default.startScene && Laya.Scene.open(GameConfig_1.default.startScene, false, Laya.Handler.create(this, function () {
            }));
    };
    Main.prototype.closeloadingUI = function () {
        if (this._loadingUI && !this._loadingUI.destroyed) {
            this._loadingUI.destroy();
        }
    };
    return Main;
}());
//激活启动类
new Main();
},{"./ALD":1,"./AppConfig":2,"./Event/EventDef":6,"./Event/EventMgr":7,"./GameConfig":8,"./Net/HttpUnit":48,"./OPPOAPI":51,"./QQMiniGameAPI":53,"./TTAPI":63,"./User/User":64,"./View/LoadingView/LoadingView":75,"./WXAPI":82,"./ui/layaMaxUI":83}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewMgr_1 = require("./ViewMgr");
var User_1 = require("../User/User");
var HttpUnit_1 = require("../Net/HttpUnit");
var MaiLiang_1 = require("../MaiLiangAPI/MaiLiang");
var EventMgr_1 = require("../Event/EventMgr");
var EventDef_1 = require("../Event/EventDef");
var WXAPI_1 = require("../WXAPI");
var WudianMgr_1 = require("./WudianMgr");
var CachedWXBannerAd_1 = require("../CachedWXBannerAd");
var Level_1 = require("../GameScript/Level");
var AppConfig_1 = require("../AppConfig");
var LevelConfig_1 = require("../Config/LevelConfig");
var GameUtilit_1 = require("../GameScript/GameUtilit");
var QQMiniGameAPI_1 = require("../QQMiniGameAPI");
var ALD_1 = require("../ALD");
//游戏管理器，游戏代码的入口
var Game_ZQDSS_Mgr = /** @class */ (function (_super) {
    __extends(Game_ZQDSS_Mgr, _super);
    function Game_ZQDSS_Mgr() {
        var _this = _super.call(this) || this;
        _this._gameLevel = null;
        _this._gameLevelStateChangeing = false;
        Game_ZQDSS_Mgr._instance = _this;
        return _this;
    }
    Game_ZQDSS_Mgr.prototype.onUpdate = function () {
        if(sessionStorage.getItem("gotoHomeEvent1")){
            sessionStorage.removeItem("gotoHomeEvent1");
            Game_ZQDSS_Mgr.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.MainView, null, function () {
                });
            });
        }
    };
    Game_ZQDSS_Mgr.get_ZQDSS_Instance = function () { return Game_ZQDSS_Mgr._instance; };
    Object.defineProperty(Game_ZQDSS_Mgr.prototype, "GameLevel", {
        get: function () {
            return this._gameLevel;
        },
        enumerable: true,
        configurable: true
    });
    Game_ZQDSS_Mgr.prototype.onAwake = function () {
      
        Laya.MouseManager.multiTouchEnabled = false;
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.AD__ZQDSS_OnShareAd_ZQDSS_Fail, this, this.onShareAd_ZQDSS_Fail);
    };
    Game_ZQDSS_Mgr.prototype.onShareAd_ZQDSS_Fail = function () {
        if (null == ViewMgr_1.default.instance.get_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.MoreGameView)) {
            ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.MoreGameView);
        }
    };
    Game_ZQDSS_Mgr.prototype.onStart = function () {
        this.preCreate_ZQDSS_Game();
    };
    Game_ZQDSS_Mgr.prototype.preCreate_ZQDSS_Game = function () {
        ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.BackgroundView, null, function () {
                ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.MainView, null, function (v) {});   
        });

    };
    //游戏存档,仅当作示例，实际存档根据实际项目各自实现
    Game_ZQDSS_Mgr.prototype.save_ZQDSS_Game_ZQDSS_Data = function () {
        HttpUnit_1.default.save_ZQDSS_Game_ZQDSS_Data(User_1.default.get_ZQDSS_SaveData(), function (res) {
            if (res.code == 1) {
                //console.log("存档成功");
            }
            else {
                //console.log("存档失败");
            }
        }, function (res) {
            //console.log("存档失败");
        });
    };
    Game_ZQDSS_Mgr.prototype.start_ZQDSS_Game1 = function (levelNum, onComplate) {
        ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.BackgroundView, null, function () {});
        var levelNum = GameUtilit_1.default.convertLevelNum(levelNum);
            var levelData = LevelConfig_1.default.getInstance().getLevelData(levelNum);
            var self = this;
            self._gameLevelStateChangeing = false;
            if((scene1 == undefined)||(scene1 == "")){
                Laya.Scene3D.load("subRes/LayaScene_Game/Conventional/" + levelNum + ".ls", Laya.Handler.create(this, function (scene) {
                    Laya.stage.addChild(scene);
                    self._gameLevel = scene.addComponent(Level_1.default);
                    self._gameLevel.startGame(levelData);    
                    if (null != onComplate) {
                        onComplate();
                    }  
                }));
            }
            else{
            Laya.stage.addChild(scene1);
            self._gameLevel = scene1.addComponent(Level_1.default);
            self._gameLevel.startGame(levelData);    
            if (null != onComplate) {
                onComplate();
            }   
        } 
    };
    Game_ZQDSS_Mgr.prototype.start_ZQDSS_Game = function (levelNum, onComplate) {
        ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.BackgroundView, null, function () {});
         levelNum = GameUtilit_1.default.convertLevelNum(levelNum);
         var self = this;
         Laya.Scene3D.load("subRes/LayaScene_Game/Conventional/" + levelNum + ".ls", Laya.Handler.create(this, function (scene) {
            self._gameLevelStateChangeing = false;
            Laya.stage.addChild(scene);
            self._gameLevel = scene.addComponent(Level_1.default);
            var levelData = LevelConfig_1.default.getInstance().getLevelData(levelNum);
            self._gameLevel.startGame(levelData);
            if (null != onComplate) {
                onComplate();
            }
        }));
    };
    Game_ZQDSS_Mgr.prototype.destroy_ZQDSS_Game = function (onComplate) {
    Laya.Scene.destroy();
        if (this._gameLevelStateChangeing)
            return;
        var self = this;
        this._gameLevelStateChangeing = true;
        if (null != self._gameLevel) {
            self._gameLevel.Scene3D.active = false;
            self._gameLevel.Scene3D.destroy(true);
            self._gameLevelStateChangeing = false;
            if (null != onComplate) {
                 onComplate();
            }
        }

    };
    Game_ZQDSS_Mgr.prototype.reportLaunchOptions = function () {
    };
    Game_ZQDSS_Mgr._instance = null;
    return Game_ZQDSS_Mgr;
}(Laya.Script));
exports.default = Game_ZQDSS_Mgr;
},{"../ALD":1,"../AppConfig":2,"../CachedWXBannerAd":3,"../Config/LevelConfig":5,"../Event/EventDef":6,"../Event/EventMgr":7,"../GameScript/GameUtilit":15,"../GameScript/Level":17,"../MaiLiangAPI/MaiLiang":41,"../Net/HttpUnit":48,"../QQMiniGameAPI":53,"../User/User":64,"../WXAPI":82,"./ViewMgr":45,"./WudianMgr":46}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sound_ZQDSS_Mgr = /** @class */ (function () {
    function Sound_ZQDSS_Mgr() {
        this._enabled = true;
    }
    Object.defineProperty(Sound_ZQDSS_Mgr.prototype, "Enabled_ZQDSS_", {
        get: function () {
            return this._enabled;
        },
        set: function (e) {
            if (!e) {
                this.stop_ZQDSS_BGM();
            }
            this._enabled = e;
        },
        enumerable: true,
        configurable: true
    });
    Sound_ZQDSS_Mgr.prototype.get_ZQDSS_SoundUrl = function (name) {
        var url = Sound_ZQDSS_Mgr.sound_ZQDSS_ResPath + name + ".ogg";
        return url;
    };
    Sound_ZQDSS_Mgr.prototype.play_ZQDSS_Sound = function (name) {
        if (!this._enabled)
            return;
        var url = this.get_ZQDSS_SoundUrl(name);
        if (Laya.Browser.onMiniGame) {
            var sound = laya.utils.Pool.getItem(name);
            if (sound == null) {
                sound = wx.createInnerAudioContext();
                sound.src = Sound_ZQDSS_Mgr.sound_ZQDSS_ResPath + name + ".ogg";
                sound.onEnded(function () {
                    laya.utils.Pool.recover(name, sound);
                    sound.offEnded();
                });
            }
            sound.play();
        }
        else {
            Laya.SoundManager.playSound(url, 1);
        }
    };
    Sound_ZQDSS_Mgr.prototype.play_ZQDSS_BGM = function (name) {
        if (!this._enabled)
            return;
        var url = this.get_ZQDSS_SoundUrl(name);
        if (Laya.Browser.onMiniGame) {
            if (!this.bgm) {
                this.bgm = wx.createInnerAudioContext();
            }
            this.bgm.stop();
            this.bgm.src = url;
            this.bgm.loop = true;
            this.bgm.play();
        }
        else {
            Laya.SoundManager.playMusic(url, 0);
        }
    };
    Sound_ZQDSS_Mgr.prototype.stop_ZQDSS_BGM = function () {
        if (Laya.Browser.onMiniGame) {
            if (this.bgm) {
                this.bgm.stop();
            }
        }
        else {
            Laya.SoundManager.stopMusic();
        }
    };
    Sound_ZQDSS_Mgr.sound_ZQDSS_ResPath = "subRes/sound/";
    Sound_ZQDSS_Mgr.instance = new Sound_ZQDSS_Mgr();
    return Sound_ZQDSS_Mgr;
}());
exports.default = Sound_ZQDSS_Mgr;
},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View_ZQDSS_Def;
(function (View_ZQDSS_Def) {
    View_ZQDSS_Def["None"] = "";
    View_ZQDSS_Def["TipsView"] = "View/TipsView.json";
    View_ZQDSS_Def["ClickGetPrize"] = "View/ClickGetPrize.json";
    //todo:添加你的界面
    View_ZQDSS_Def["GameView"] = "View/GameView.json";
    if(lang == "IND")
    View_ZQDSS_Def["MainView"] = "View/MainViewIND.json";
    else View_ZQDSS_Def["MainView"] = "View/MainView.json";
    if(lang == "IND")
    View_ZQDSS_Def["GameOverView"] = "View/GameOverViewIND.json";
    else View_ZQDSS_Def["GameOverView"] = "View/GameOverView.json";
    View_ZQDSS_Def["MoreGameView"] = "View/MoreGameView.json";
    View_ZQDSS_Def["BackgroundView"] = "View/BackgroundView.json";
    View_ZQDSS_Def["CrazyClickView"] = "View/CrazyClickView.json";
})(View_ZQDSS_Def = exports.View_ZQDSS_Def || (exports.View_ZQDSS_Def = {}));
//界面管理器
var View_ZQDSS_Mgr = /** @class */ (function () {
    function View_ZQDSS_Mgr() {
        this._views = {};
    }
    View_ZQDSS_Mgr.prototype.open_ZQDSS_View = function (viewType, data, oncomplate) {
        if (this._views[viewType]) {
            //console.log("ADSS");
        }
        var viewUrl = String(viewType);
        var self = this;
        Laya.Scene.load(viewUrl, Laya.Handler.create(this, function (owner) {
            Laya.stage.addChild(owner);
            var view = owner;
            self._views[viewType] = view;
            var coms = owner._components;
            var viewBase = null;
            if (coms) {
                for (var index = 0; index < coms.length; index++) {
                    var element = coms[index];
                    if (element._viewBase) {
                        viewBase = element;
                        element._viewDef = viewType;
                        viewBase.open_ZQDSS_View(data);
                        break;
                    }
                }
            }
            if (oncomplate) {
                oncomplate(viewBase);
            }
        }));
    };
    View_ZQDSS_Mgr.prototype.close_ZQDSS_View = function (viewType) {
        var view = this._views[viewType];
        if (view) {
            var owner = view;
            var coms = owner._components;
            if (coms) {
                for (var index = 0; index < coms.length; index++) {
                    var element = coms[index];
                    if (element._viewBase) {
                        element.onClose();
                        break;
                    }
                }
            }
            view.removeSelf();
            view.destroy();
            this._views[viewType] = null;
        }
    };
    View_ZQDSS_Mgr.prototype.Show_ZQDSS_View = function (viewType) {
        var view = this._views[viewType];
        if (view) {
            var coms = view._components;
            if (coms) {
                for (var index = 0; index < coms.length; index++) {
                    var element = coms[index];
                    if (element._viewBase) {
                        element._ZQDSS_show();
                        break;
                    }
                }
            }
        }
    };
    View_ZQDSS_Mgr.prototype.hide_ZQDSS_View = function (viewType) {
        var view = this._views[viewType];
        if (view) {
            var coms = view._components;
            if (coms) {
                for (var index = 0; index < coms.length; index++) {
                    var element = coms[index];
                    if (element._viewBase) {
                        element.hide_ZQDSS_();
                        break;
                    }
                }
            }
        }
    };
    View_ZQDSS_Mgr.prototype.get_ZQDSS_View = function (viewType) {
        return this._views[viewType];
    };
    View_ZQDSS_Mgr.prototype.show_ZQDSS_Tips = function (msg) {
        this.open_ZQDSS_View(View_ZQDSS_Def.TipsView, msg);
    };
    View_ZQDSS_Mgr.instance = new View_ZQDSS_Mgr();
    return View_ZQDSS_Mgr;
}());
exports.default = View_ZQDSS_Mgr;
},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpUnit_1 = require("../Net/HttpUnit");
var AppSwitchConfig_1 = require("../Config/AppSwitchConfig");
var WXAPI_1 = require("../WXAPI");
var QQMiniGameAPI_1 = require("../QQMiniGameAPI");
var Wudian_ZQDSS_Mgr = /** @class */ (function () {
    function Wudian_ZQDSS_Mgr() {
    }
    Wudian_ZQDSS_Mgr.IpBlock_ZQDSS_Flag = function () {
        return "";
    };
    /**
     * 此方法调用很慢，所以要在游戏初始化的时候调用一次此方法
     *
     * @static
     * @memberof WudianMgr
     */
    Wudian_ZQDSS_Mgr.Update_ZQDSS_IpBlockState = function () {
       
    };
    /**
     * IP是否被屏蔽
     *
     * @static
     * @returns {boolean}
     * @memberof WudianMgr
     */
    Wudian_ZQDSS_Mgr.Get_ZQDSS_IpBlocked = function () {
        return "";
    };
    /**
     * 得到用户进入的场景值
     *
     * @static
     * @returns {number}
     * @memberof WudianMgr
     */
    Wudian_ZQDSS_Mgr.Get_ZQDSS_Entry_ZQDSS_Scene = function () {
        return "";
    };
    /**
     * 误点开关是否打开，包括了总开关和分时开关
     *
     * @static
     * @returns {boolean}
     * @memberof WudianMgr
     */
    Wudian_ZQDSS_Mgr.Is_ZQDSS_SwitchOpen = function () {
    };
    Object.defineProperty(Wudian_ZQDSS_Mgr, "Wudian_ZQDSS_Flag", {
        /**
         * 完全封装好的误点Flag
         *
         * @readonly
         * @static
         * @type {boolean}
         * @memberof WudianMgr
         */
        get: function () {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wudian_ZQDSS_Mgr, "NoTime_ZQDSS_WudianFlag", {
        /**
         * 没有涉及到定时开关的wudianFlag,自行整合按照时间开关的效果
         *
         * @static
         * @returns {boolean}
         * @memberof WudianMgr
         */
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Wudian_ZQDSS_Mgr._ipBlockFlag = -1;
    return Wudian_ZQDSS_Mgr;
}());
exports.default = Wudian_ZQDSS_Mgr;
},{"../Config/AppSwitchConfig":4,"../Net/HttpUnit":48,"../QQMiniGameAPI":53,"../WXAPI":82}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = require("./aes.js");
var Aes_ZQDSS_Tools = /** @class */ (function () {
    function Aes_ZQDSS_Tools() {
    }
    //加密
    Aes_ZQDSS_Tools.encrypt_ZQDSS_ = function (str) {
        // var key = CryptoJS.enc.Utf8.parse(Aes_ZQDSS_Tools.KEY); // 秘钥
        // var iv = CryptoJS.enc.Utf8.parse(Aes_ZQDSS_Tools.IV); //向量iv
        // var encrypted = CryptoJS.AES.encrypt(str, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        return "";
    };
    //解密
    Aes_ZQDSS_Tools._ZQDSS_decrypt = function (str) {
        return "";
    };
    Aes_ZQDSS_Tools.KEY = 'b#63fFJ6AvkK3YT*';
    Aes_ZQDSS_Tools.IV = 'J$f4DU%sNL73M&Go';
    return Aes_ZQDSS_Tools;
}());
exports.default = Aes_ZQDSS_Tools;
},{"./aes.js":50}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NetConfig_1 = require("./NetConfig");
var User_1 = require("../User/User");
var AesTools_1 = require("./AesTools");
var AppConfig_1 = require("../AppConfig");
var request_ZQDSS_Data = /** @class */ (function () {
    function request_ZQDSS_Data() {
        this.meth = "get";
        this.url = "";
        this.onSuccess = null;
        this.onFail = null;
        this.data = {};
    }
    return request_ZQDSS_Data;
}());
exports.request_ZQDSS_Data = request_ZQDSS_Data;
var Http_ZQDSS_Unit = /** @class */ (function () {
    function Http_ZQDSS_Unit() {
    }
    Http_ZQDSS_Unit.request = function (req) {
        var completeFunc = function (res) {
           
        };
        var errorFunc = function (res) {
           
        };
    };
    //todo:这里添加你们和服务器相互的接口
    Http_ZQDSS_Unit.login_ZQDSS_ = function (onSuccess, onFail) {
    };
    Http_ZQDSS_Unit.save_ZQDSS_Game_ZQDSS_Data = function (gameData, onSuccess, onFail) {
    };
    Http_ZQDSS_Unit.get_ZQDSS_Game_ZQDSS_Data = function (onSuccess, onFail) {
    };
    /**
     * IP屏蔽方法，需要在NetConfig类中设置IpBlock的接口地址
     * onSuccess方法返回参数的范例为 Object {code: 0, msg: "准一线", time: "1571034447", data: null}
     * @static
     * @memberof HttpUnit
     */
    Http_ZQDSS_Unit.Get_ZQDSS_IpBlock = function (onSuccess, onFail) {
    };
    Http_ZQDSS_Unit.reportExport = function (appid, game_name, onSuccess, onFail) {
    };
    Http_ZQDSS_Unit.reportImport = function (appid, channel, onSuccess, onFail) {
    };
    Http_ZQDSS_Unit.Getuserip = function (onSuccess, onFail) {
    };
    return Http_ZQDSS_Unit;
}());
exports.default = Http_ZQDSS_Unit;
},{"../AppConfig":2,"../User/User":64,"./AesTools":47,"./NetConfig":49}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Net_ZQDSS_Config = /** @class */ (function () {
    function Net_ZQDSS_Config() {
    }
    Net_ZQDSS_Config.state_ZQDSS_ = 0;
    Net_ZQDSS_Config.game_ZQDSS_id = 67;
    Net_ZQDSS_Config.server_ZQDSS_Url = "";
    Net_ZQDSS_Config.Login_ZQDSS_ = "";
    Net_ZQDSS_Config.Save_ZQDSS_Game_ZQDSS_Data = "";
    Net_ZQDSS_Config.Get_ZQDSS_User = "";
    /* 用来对IP地址进行屏蔽的接口地址，可以使用接口的返回值让某些广告逻辑在微信的审核地区(广州)发生变化 */
    Net_ZQDSS_Config.Ip_ZQDSS_Block = "";
    Net_ZQDSS_Config.reportExport = "";
    Net_ZQDSS_Config.reportImport = "";
    Net_ZQDSS_Config.getuserip = "";
    return Net_ZQDSS_Config;
}());
exports.default = Net_ZQDSS_Config;
},{}],50:[function(require,module,exports){
var CryptoJS = CryptoJS || function (u, p) {
  var d = {}, l = d.lib = {}, s = function () { }, t = l.Base = { extend: function (a) { s.prototype = this; var c = new s; a && c.mixIn(a); c.hasOwnProperty("init") || (c.init = function () { c.$super.init.apply(this, arguments) }); c.init.prototype = c; c.$super = this; return c }, create: function () { var a = this.extend(); a.init.apply(a, arguments); return a }, init: function () { }, mixIn: function (a) { for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]); a.hasOwnProperty("toString") && (this.toString = a.toString) }, clone: function () { return this.init.prototype.extend(this) } },
  r = l.WordArray = t.extend({
    init: function (a, c) { a = this.words = a || []; this.sigBytes = c != p ? c : 4 * a.length }, toString: function (a) { return (a || v).stringify(this) }, concat: function (a) { var c = this.words, e = a.words, j = this.sigBytes; a = a.sigBytes; this.clamp(); if (j % 4) for (var k = 0; k < a; k++)c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length) for (k = 0; k < a; k += 4)c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e); this.sigBytes += a; return this }, clamp: function () {
      var a = this.words, c = this.sigBytes; a[c >>> 2] &= 4294967295 <<
        32 - 8 * (c % 4); a.length = u.ceil(c / 4)
    }, clone: function () { var a = t.clone.call(this); a.words = this.words.slice(0); return a }, random: function (a) { for (var c = [], e = 0; e < a; e += 4)c.push(4294967296 * u.random() | 0); return new r.init(c, a) }
  }), w = d.enc = {}, v = w.Hex = {
    stringify: function (a) { var c = a.words; a = a.sigBytes; for (var e = [], j = 0; j < a; j++) { var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255; e.push((k >>> 4).toString(16)); e.push((k & 15).toString(16)) } return e.join("") }, parse: function (a) {
      for (var c = a.length, e = [], j = 0; j < c; j += 2)e[j >>> 3] |= parseInt(a.substr(j,
        2), 16) << 24 - 4 * (j % 8); return new r.init(e, c / 2)
    }
  }, b = w.Latin1 = { stringify: function (a) { var c = a.words; a = a.sigBytes; for (var e = [], j = 0; j < a; j++)e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255)); return e.join("") }, parse: function (a) { for (var c = a.length, e = [], j = 0; j < c; j++)e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4); return new r.init(e, c) } }, x = w.Utf8 = { stringify: function (a) { try { return decodeURIComponent(escape(b.stringify(a))) } catch (c) { throw Error("Malformed UTF-8 data"); } }, parse: function (a) { return b.parse(unescape(encodeURIComponent(a))) } },
  q = l.BufferedBlockAlgorithm = t.extend({
    reset: function () { this._data = new r.init; this._nDataBytes = 0 }, _append: function (a) { "string" == typeof a && (a = x.parse(a)); this._data.concat(a); this._nDataBytes += a.sigBytes }, _process: function (a) { var c = this._data, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k), b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0); a = b * k; j = u.min(4 * a, j); if (a) { for (var q = 0; q < a; q += k)this._doProcessBlock(e, q); q = e.splice(0, a); c.sigBytes -= j } return new r.init(q, j) }, clone: function () {
      var a = t.clone.call(this);
      a._data = this._data.clone(); return a
    }, _minBufferSize: 0
  }); l.Hasher = q.extend({
    cfg: t.extend(), init: function (a) { this.cfg = this.cfg.extend(a); this.reset() }, reset: function () { q.reset.call(this); this._doReset() }, update: function (a) { this._append(a); this._process(); return this }, finalize: function (a) { a && this._append(a); return this._doFinalize() }, blockSize: 16, _createHelper: function (a) { return function (b, e) { return (new a.init(e)).finalize(b) } }, _createHmacHelper: function (a) {
      return function (b, e) {
        return (new n.HMAC.init(a,
          e)).finalize(b)
      }
    }
  }); var n = d.algo = {}; return d
}(Math);
(function () {
  var u = CryptoJS, p = u.lib.WordArray; u.enc.Base64 = {
    stringify: function (d) { var l = d.words, p = d.sigBytes, t = this._map; d.clamp(); d = []; for (var r = 0; r < p; r += 3)for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++)d.push(t.charAt(w >>> 6 * (3 - v) & 63)); if (l = t.charAt(64)) for (; d.length % 4;)d.push(l); return d.join("") }, parse: function (d) {
      var l = d.length, s = this._map, t = s.charAt(64); t && (t = d.indexOf(t), -1 != t && (l = t)); for (var t = [], r = 0, w = 0; w <
        l; w++)if (w % 4) { var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4); t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4); r++ } return p.create(t, r)
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  }
})();
(function (u) {
  function p(b, n, a, c, e, j, k) { b = b + (n & a | ~n & c) + e + k; return (b << j | b >>> 32 - j) + n } function d(b, n, a, c, e, j, k) { b = b + (n & c | a & ~c) + e + k; return (b << j | b >>> 32 - j) + n } function l(b, n, a, c, e, j, k) { b = b + (n ^ a ^ c) + e + k; return (b << j | b >>> 32 - j) + n } function s(b, n, a, c, e, j, k) { b = b + (a ^ (n | ~c)) + e + k; return (b << j | b >>> 32 - j) + n } for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0; r = r.MD5 = v.extend({
    _doReset: function () { this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]) },
    _doProcessBlock: function (q, n) {
      for (var a = 0; 16 > a; a++) { var c = n + a, e = q[c]; q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360 } var a = this._hash.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5], t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12], D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3], f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]), m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]), g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]),
        f = p(f, m, g, h, v, 7, b[8]), h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]), f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]), m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]), g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]), h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]), f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]), m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f,
          m, g, j, 9, b[29]), g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]), h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]), f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]), m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]), g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]), h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]), f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m,
            E, 15, b[50]), m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]), g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]), h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]), f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]), m = s(m, g, h, f, A, 21, b[63]); a[0] = a[0] + f | 0; a[1] = a[1] + m | 0; a[2] = a[2] + g | 0; a[3] = a[3] + h | 0
    }, _doFinalize: function () {
      var b = this._data, n = b.words, a = 8 * this._nDataBytes, c = 8 * b.sigBytes; n[c >>> 5] |= 128 << 24 - c % 32; var e = u.floor(a /
        4294967296); n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360; n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360; b.sigBytes = 4 * (n.length + 1); this._process(); b = this._hash; n = b.words; for (a = 0; 4 > a; a++)c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360; return b
    }, clone: function () { var b = v.clone.call(this); b._hash = this._hash.clone(); return b }
  }); t.MD5 = v._createHelper(r); t.HmacMD5 = v._createHmacHelper(r)
})(Math);
(function () {
  var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({ cfg: d.extend({ keySize: 4, hasher: p.MD5, iterations: 1 }), init: function (d) { this.cfg = this.cfg.extend(d) }, compute: function (d, r) { for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) { n && s.update(n); var n = s.update(d).finalize(r); s.reset(); for (var a = 1; a < p; a++)n = s.finalize(n), s.reset(); b.concat(n) } b.sigBytes = 4 * q; return b } }); u.EvpKDF = function (d, l, p) {
    return s.create(p).compute(d,
      l)
  }
})();
CryptoJS.lib.Cipher || function (u) {
  var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64, w = p.algo.EvpKDF, v = d.Cipher = t.extend({
    cfg: l.extend(), createEncryptor: function (e, a) { return this.create(this._ENC_XFORM_MODE, e, a) }, createDecryptor: function (e, a) { return this.create(this._DEC_XFORM_MODE, e, a) }, init: function (e, a, b) { this.cfg = this.cfg.extend(b); this._xformMode = e; this._key = a; this.reset() }, reset: function () { t.reset.call(this); this._doReset() }, process: function (e) { this._append(e); return this._process() },
    finalize: function (e) { e && this._append(e); return this._doFinalize() }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function (e) { return { encrypt: function (b, k, d) { return ("string" == typeof k ? c : a).encrypt(e, b, k, d) }, decrypt: function (b, k, d) { return ("string" == typeof k ? c : a).decrypt(e, b, k, d) } } }
  }); d.StreamCipher = v.extend({ _doFinalize: function () { return this._process(!0) }, blockSize: 1 }); var b = p.mode = {}, x = function (e, a, b) {
    var c = this._iv; c ? this._iv = u : c = this._prevBlock; for (var d = 0; d < b; d++)e[a + d] ^=
      c[d]
  }, q = (d.BlockCipherMode = l.extend({ createEncryptor: function (e, a) { return this.Encryptor.create(e, a) }, createDecryptor: function (e, a) { return this.Decryptor.create(e, a) }, init: function (e, a) { this._cipher = e; this._iv = a } })).extend(); q.Encryptor = q.extend({ processBlock: function (e, a) { var b = this._cipher, c = b.blockSize; x.call(this, e, a, c); b.encryptBlock(e, a); this._prevBlock = e.slice(a, a + c) } }); q.Decryptor = q.extend({
    processBlock: function (e, a) {
      var b = this._cipher, c = b.blockSize, d = e.slice(a, a + c); b.decryptBlock(e, a); x.call(this,
        e, a, c); this._prevBlock = d
    }
  }); b = b.CBC = q; q = (p.pad = {}).Pkcs7 = { pad: function (a, b) { for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)l.push(d); c = s.create(l, c); a.concat(c) }, unpad: function (a) { a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255 } }; d.BlockCipher = v.extend({
    cfg: v.cfg.extend({ mode: b, padding: q }), reset: function () {
      v.reset.call(this); var a = this.cfg, b = a.iv, a = a.mode; if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor; else c = a.createDecryptor, this._minBufferSize = 1; this._mode = c.call(a,
        this, b && b.words)
    }, _doProcessBlock: function (a, b) { this._mode.processBlock(a, b) }, _doFinalize: function () { var a = this.cfg.padding; if (this._xformMode == this._ENC_XFORM_MODE) { a.pad(this._data, this.blockSize); var b = this._process(!0) } else b = this._process(!0), a.unpad(b); return b }, blockSize: 4
  }); var n = d.CipherParams = l.extend({ init: function (a) { this.mixIn(a) }, toString: function (a) { return (a || this.formatter).stringify(this) } }), b = (p.format = {}).OpenSSL = {
    stringify: function (a) {
      var b = a.ciphertext; a = a.salt; return (a ? s.create([1398893684,
        1701076831]).concat(a).concat(b) : b).toString(r)
    }, parse: function (a) { a = r.parse(a); var b = a.words; if (1398893684 == b[0] && 1701076831 == b[1]) { var c = s.create(b.slice(2, 4)); b.splice(0, 4); a.sigBytes -= 16 } return n.create({ ciphertext: a, salt: c }) }
  }, a = d.SerializableCipher = l.extend({
    cfg: l.extend({ format: b }), encrypt: function (a, b, c, d) { d = this.cfg.extend(d); var l = a.createEncryptor(c, d); b = l.finalize(b); l = l.cfg; return n.create({ ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, blockSize: a.blockSize, formatter: d.format }) },
    decrypt: function (a, b, c, d) { d = this.cfg.extend(d); b = this._parse(b, d.format); return a.createDecryptor(c, d).finalize(b.ciphertext) }, _parse: function (a, b) { return "string" == typeof a ? b.parse(a, this) : a }
  }), p = (p.kdf = {}).OpenSSL = { execute: function (a, b, c, d) { d || (d = s.random(8)); a = w.create({ keySize: b + c }).compute(a, d); c = s.create(a.words.slice(b), 4 * c); a.sigBytes = 4 * b; return n.create({ key: a, iv: c, salt: d }) } }, c = d.PasswordBasedCipher = a.extend({
    cfg: a.cfg.extend({ kdf: p }), encrypt: function (b, c, d, l) {
      l = this.cfg.extend(l); d = l.kdf.execute(d,
        b.keySize, b.ivSize); l.iv = d.iv; b = a.encrypt.call(this, b, c, d.key, l); b.mixIn(d); return b
    }, decrypt: function (b, c, d, l) { l = this.cfg.extend(l); c = this._parse(c, l.format); d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt); l.iv = d.iv; return a.decrypt.call(this, b, c, d.key, l) }
  })
}();
(function () {
  for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)a[c] = 128 > c ? c << 1 : c << 1 ^ 283; for (var e = 0, j = 0, c = 0; 256 > c; c++) { var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99; l[e] = k; s[k] = e; var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k; t[e] = y << 24 | y >>> 8; r[e] = y << 16 | y >>> 16; w[e] = y << 8 | y >>> 24; v[e] = y; y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e; b[k] = y << 24 | y >>> 8; x[k] = y << 16 | y >>> 16; q[k] = y << 8 | y >>> 24; n[k] = y; e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1 } var H = [0, 1, 2, 4, 8,
    16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
      _doReset: function () {
        for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++)if (j < d) e[j] = c[j]; else { var k = e[j - 1]; j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24); e[j] = e[j - d] ^ k } c = this._invKeySchedule = []; for (d = 0; d < a; d++)j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>>
          8 & 255]] ^ n[l[k & 255]]
      }, encryptBlock: function (a, b) { this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l) }, decryptBlock: function (a, c) { var d = a[c + 1]; a[c + 1] = a[c + 3]; a[c + 3] = d; this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s); d = a[c + 1]; a[c + 1] = a[c + 3]; a[c + 3] = d }, _doCryptBlock: function (a, b, c, d, e, j, l, f) {
        for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t =
          d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t; q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++]; s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++]; t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++]; n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++]; a[b] = q; a[b + 1] = s; a[b + 2] = t; a[b + 3] = n
      }, keySize: 8
    }); u.AES = p._createHelper(d)
})();

module.exports = CryptoJS;
},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig_1 = require("./AppConfig");
var HttpUnit_1 = require("./Net/HttpUnit");
var OPPO_ZQDSS_API = /** @class */ (function () {
    function OPPO_ZQDSS_API() {
    }
    Object.defineProperty(OPPO_ZQDSS_API, "Banner_ZQDSS_Instance", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    OPPO_ZQDSS_API.Login_ZQDSS_ = function (onSuccess, onFail) {
    };
    OPPO_ZQDSS_API.init_ZQDSS_AdService = function (onSuccess, onFail, onComplete) {
    };
    OPPO_ZQDSS_API.show_ZQDSS_RewardedVideoAd = function (onAdClose, onFailed) {
    };
    OPPO_ZQDSS_API.navigate_ZQDSS_ToMiniProgram = function (pkgName, gameName, path, onSuccess, onFail, onComplate) {
    };
    OPPO_ZQDSS_API.show_ZQDSS_InterstitialAd = function (onAdClose, onFailed) {
    };
    OPPO_ZQDSS_API.show_ZQDSS_Bannaer = function () {
    };
    OPPO_ZQDSS_API.hide_ZQDSS_Banner = function () {
    };
    OPPO_ZQDSS_API.get_ZQDSS_LaunchOptionsSync = function () {
    };
    OPPO_ZQDSS_API.share_ZQDSS_ = function (complate, titel, imageUrl) {
    };
    OPPO_ZQDSS_API.create_ZQDSS_DesktopIcon = function (onSuccess, onFail) {
    };
    OPPO_ZQDSS_API.ad_ZQDSS_UnitId = "134292";
    OPPO_ZQDSS_API.bannerAd_ZQDSS_UnitId = "134291";
    OPPO_ZQDSS_API.Ins_ZQDSS_AdUnitId = "134294";
    OPPO_ZQDSS_API.Open_ZQDSS_ScreenAdUnitId = "134293";
    OPPO_ZQDSS_API._banner_ZQDSS_ = null;
    return OPPO_ZQDSS_API;
}());
exports.default = OPPO_ZQDSS_API;
},{"./AppConfig":2,"./Net/HttpUnit":48}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjPool = /** @class */ (function () {
    function ObjPool() {
        this._pool = new Array();
        this._createCaller = null;
        this._createFunc = null;
    }
    //从对象池中获取对象,如果不传入key，则直接返回池中最后一个对象
    //如果对象池为空，并没有 create 函数，则返回 null
    //如果对象池为空，有 create 函数，则调用  create 实例化对象并返回。
    ObjPool.prototype.get = function (key) {
        var obj = null;
        if (null == key) {
            obj = this._pool.pop();
        }
        else {
            for (var i = 0; i < this._pool.length; ++i) {
                if (this._pool[i].OP_Key() == key) {
                    obj = this._pool[i];
                    this._pool.splice(i, 1);
                    break;
                }
            }
        }
        if (obj) {
            obj.OP_Init();
        }
        else {
            if (this._createFunc) {
                obj = this._createFunc.call(this._createCaller, [key]);
                obj.OP_Init();
            }
        }
        return obj;
    };
    //回收对象
    ObjPool.prototype.recover = function (o) {
        o.OP_Reset();
        for (var i = 0; i < this._pool.length; ++i) {
            if (this._pool[i] == o) {
                return;
            }
        }
        this._pool.push(o);
    };
    //清空对象池
    ObjPool.prototype.clear = function () {
        for (var i = 0; i < this._pool.length; ++i) {
            this._pool[i].OP_OnClear(); //调用对象的清理函数，释放对象自身维护的资源
        }
        this._pool.splice(0);
    };
    ObjPool.prototype.setCreateFunc = function (caller, createFunc) {
        this._createCaller = caller;
        this._createFunc = createFunc;
    };
    return ObjPool;
}());
exports.default = ObjPool;
},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QQ_ZQDSS_MiniGame_ZQDSS_API = /** @class */ (function () {
    function QQ_ZQDSS_MiniGame_ZQDSS_API() {
    }
    QQ_ZQDSS_MiniGame_ZQDSS_API.Login_ZQDSS_ = function (onSuccess, onFail) {
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.onRewarded_ZQDSS_VideoAdLoad = function () {
        //console.log('激励视频 广告加载完成');
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.onRewarded_ZQDSS_VideoAdError = function (err) {
        //console.log('激励视频 广告加载失败' + err);
       
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.onRewarded_ZQDSS_VideoAdClose = function (res) {
       
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.regRewarded_ZQDSS_VideoAdEvent = function (rewardedVideoAd) {
        
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.show_ZQDSS_RewardedVideoAd = function (onAdClose, onFailed) {
    };
    //----------------------------------------------------------------
    //-------------------------小游戏跳转---------------------------
    QQ_ZQDSS_MiniGame_ZQDSS_API.navigate_ZQDSS_ToMiniProgram = function (appId, path, onSuccess, onFail, onComplate) {
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.share_ZQDSS_e = function (complate, titel, imageUrl) {
    };
    //----------------------------------------------------------------------
    //--------------------插屏幕广告---------------------------------------
    QQ_ZQDSS_MiniGame_ZQDSS_API.show_ZQDSS_Interstitial_ZQDSS_Ad = function (onAdClose, onFailed) {
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.LoadApp_ZQDSS_BoxAd = function (onAdClose, onFailed) {
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.showApp_ZQDSS_BoxAd = function (onFailed) {
    };
    /**
     * 得到小程序启动参数的同步方法，可得到一个Object返回值，返回值具体的数据结构在下面的列表中
     * scene	number	启动小游戏的场景值
     * query	Object	启动小游戏的 query 参数
     * shareTicket	string	shareTicket，详见获取更多转发信息
     * referrerInfo	object	来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}
     * https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/qq.getLaunchOptionsSync.html
     * @static
     * @returns {LaunchOptions}
     * @memberof QQMiniGameAPI
     */
    QQ_ZQDSS_MiniGame_ZQDSS_API.get_ZQDSS_LaunchOptionsSync = function () {
        return "";
    };
    //----------------------------------------------------------------------
    /**
     * 打开微信左上角分享转发点击事件,在游戏逻辑中调用一次即可
     * 注意此方法只会在真机上执行，在微信模拟器环境下点击转发按钮什么都不会发生
     *
     * @static
     * @param {string} titel 分享标题
     * @param {string} imageUrl 分享图片地址
     * @param {Function} [success] 成功回调函数(可不填)
     * @param {Function} [fail] 失败回调函数(可不填)
     * @param {Function} [complate] 完成回调函数，成功失败都会执行(可不填)
     * @memberof QQMiniGameAPI
     */
    QQ_ZQDSS_MiniGame_ZQDSS_API.SetShare_ZQDSS_Menu = function (titel, imageUrl, success, fail, complate) {
    };
    QQ_ZQDSS_MiniGame_ZQDSS_API.adUnitId = ""; //激励视频Id
    QQ_ZQDSS_MiniGame_ZQDSS_API.bannerAdUnitId = ""; //banner广告Id
    QQ_ZQDSS_MiniGame_ZQDSS_API.InsAdUnitId = ""; //插屏广告Id
    QQ_ZQDSS_MiniGame_ZQDSS_API.AppBoxId = ""; //盒子广告Id
    //-------------------------激励视频---------------------------------
    QQ_ZQDSS_MiniGame_ZQDSS_API._isRegRewardedVideoAdEvent = false;
    QQ_ZQDSS_MiniGame_ZQDSS_API._onRewardedVideoAdFailed = null;
    QQ_ZQDSS_MiniGame_ZQDSS_API._onRewardedVideoAdClose = null;
    //----------------------------------------------------------------------
    //---------------------分享----------------------------------------
    QQ_ZQDSS_MiniGame_ZQDSS_API._onShow = null;
    QQ_ZQDSS_MiniGame_ZQDSS_API._lastShareTime = 0;
    //--------------------盒子广告---------------------------------------
    QQ_ZQDSS_MiniGame_ZQDSS_API.mAppboxAd = null;
    return QQ_ZQDSS_MiniGame_ZQDSS_API;
}());
exports.default = QQ_ZQDSS_MiniGame_ZQDSS_API;
},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpUnit_1 = require("../Net/HttpUnit");
var AppConfig_1 = require("../AppConfig");
var User_1 = require("../User/User");
var Utilit_1 = require("../Utilit");
var ALD_1 = require("../ALD");
var WXAPI_1 = require("../WXAPI");
var EventMgr_1 = require("../Event/EventMgr");
var EventDef_1 = require("../Event/EventDef");
var AppSwitchConfig_1 = require("../Config/AppSwitchConfig");
var QQMiniGameAPI_1 = require("../QQMiniGameAPI");
var Share_ZQDSS_Ad = /** @class */ (function () {
    function Share_ZQDSS_Ad() {
    }
    Share_ZQDSS_Ad.refresh_ZQDSS_Ad = function (complate) {
    };
    Share_ZQDSS_Ad.get_ZQDSS_ADVs = function (locationid, complate, useRandom, useLocalRandom) {
       
    };
    Share_ZQDSS_Ad.report_ZQDSS_UserClick = function (advid) {
        
    };
    Share_ZQDSS_Ad.getRandom_ZQDSS_ADPosID = function () {
        return "";
    };
    Share_ZQDSS_Ad.request_ZQDSS_ = function (req) {
       
    };
    Share_ZQDSS_Ad.get_ZQDSS_AdPosData = function (onSuccess, onFail) {
    };
    Share_ZQDSS_Ad.reqUser_ZQDSS_Click = function (advid, onSuccess, onFail) {
    };
    Share_ZQDSS_Ad.get_ZQDSS_ADVData = function (locationid, onSuccess, onFail) {
    };
    /**
         * 随机跳转的方法，会从广告列表中随机得到一个AppId并且跳转,输入的参数为概率，大小在0-1之间
         * 如果概率大于1，则自动将其除以100，所以千万注意！
         *
         * @static
         * @param {number} [rate=1]
         * @memberof ShareAd
         */
    Share_ZQDSS_Ad.Random_ZQDSS_Jump = function (rate) {
    };
    Share_ZQDSS_Ad.is_ZQDSS_NeedShowAd = function () {
        return false;
    };
    Share_ZQDSS_Ad.sortDatas = function (datas) {
        return "";
    };
    Share_ZQDSS_Ad.main_ZQDSS_Url = "";
    Share_ZQDSS_Ad.get_ZQDSS_AdPostion = ""; //获取广告位列表
    Share_ZQDSS_Ad.get_ZQDSS_Adv = ""; //获取第三方广告列表
    Share_ZQDSS_Ad.user_ZQDSS_Click = ""; //用户点击上报
    Share_ZQDSS_Ad.LoopAd_ZQDSS_LocationID = 223;
    Share_ZQDSS_Ad.BannerAd_ZQDSS_LocationID = 224;
    Share_ZQDSS_Ad.InsertAd_ZQDSS_LocationID = 0;
    Share_ZQDSS_Ad.AniAd_ZQDSS_LocationID = 230;
    Share_ZQDSS_Ad.Use_ZQDSS_RandomAdPos = true;
    Share_ZQDSS_Ad.Ad_ZQDSS_Locationids = [
        223, 222
    ];
    Share_ZQDSS_Ad._ad_ZQDSS_Position = {};
    Share_ZQDSS_Ad._adv = {};
    Share_ZQDSS_Ad._iphone_ZQDSS_IgnoreAppIds = [
        "wx2d2acce3c45f4ddf",
        "wxeb93c1298ec7c62b"
    ];
    return Share_ZQDSS_Ad;
}());
exports.default = Share_ZQDSS_Ad;
},{"../ALD":1,"../AppConfig":2,"../Config/AppSwitchConfig":4,"../Event/EventDef":6,"../Event/EventMgr":7,"../Net/HttpUnit":48,"../QQMiniGameAPI":53,"../User/User":64,"../Utilit":65,"../WXAPI":82}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShareAd_1 = require("../ShareAd");
var WXAPI_1 = require("../../WXAPI");
var ALD_1 = require("../../ALD");
var EventMgr_1 = require("../../Event/EventMgr");
var EventDef_1 = require("../../Event/EventDef");
var AppSwitchConfig_1 = require("../../Config/AppSwitchConfig");
var OPPOAPI_1 = require("../../OPPOAPI");
var QQMiniGameAPI_1 = require("../../QQMiniGameAPI");
var BannerAdView = /** @class */ (function (_super) {
    __extends(BannerAdView, _super);
    function BannerAdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AdPosID = ShareAd_1.default.BannerAd_ZQDSS_LocationID;
        _this._data = null;
        _this._wxBanner = null;
        return _this;
    }
    BannerAdView.prototype.onAwake = function () {
    };
    BannerAdView.prototype.onEnable = function () {
    };
    BannerAdView.prototype.onDisable = function () {
    };
    BannerAdView.prototype.refreshBanner_ZQDSS_Dis = function () {
    };
    BannerAdView.prototype.onSp_ZQDSS_Click = function () {
    };
    BannerAdView.prototype.refresh_ZQDSS_WXBanner = function () {
    };
    BannerAdView.prototype.clear_ZQDSS_WXBaner = function () {
    };
    BannerAdView.prototype.onViewShow = function () {
    };
    BannerAdView.prototype.onViewHide = function () {
    };
    return BannerAdView;
}(Laya.Script));
exports.default = BannerAdView;
},{"../../ALD":1,"../../Config/AppSwitchConfig":4,"../../Event/EventDef":6,"../../Event/EventMgr":7,"../../OPPOAPI":51,"../../QQMiniGameAPI":53,"../../WXAPI":82,"../ShareAd":54}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShareAd_1 = require("../ShareAd");
var LoopAdBox_1 = require("./LoopAdBox");
var Horizontal_ZQDSS_LoopAdView = /** @class */ (function (_super) {
    __extends(Horizontal_ZQDSS_LoopAdView, _super);
    function Horizontal_ZQDSS_LoopAdView() {
        
    }
    Horizontal_ZQDSS_LoopAdView.prototype.onAwake = function () {
        
    };
    Horizontal_ZQDSS_LoopAdView.prototype.onEnable = function () {
        
    };
    Horizontal_ZQDSS_LoopAdView.prototype.onDisable = function () {
    };
    Horizontal_ZQDSS_LoopAdView.prototype.onUpdate = function () {
    };
    Horizontal_ZQDSS_LoopAdView.prototype.on_ZQDSS_ListRender = function (cell, index) {
    };
    return Horizontal_ZQDSS_LoopAdView;
}(Laya.Script));
exports.default = Horizontal_ZQDSS_LoopAdView;
},{"../ShareAd":54,"./LoopAdBox":57}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WXAPI_1 = require("../../WXAPI");
var ShareAd_1 = require("../ShareAd");
var ALD_1 = require("../../ALD");
var EventMgr_1 = require("../../Event/EventMgr");
var EventDef_1 = require("../../Event/EventDef");
var OPPOAPI_1 = require("../../OPPOAPI");
var QQMiniGameAPI_1 = require("../../QQMiniGameAPI");
var Loop_ZQDSS_AdBox = /** @class */ (function (_super) {
    __extends(Loop_ZQDSS_AdBox, _super);
    function Loop_ZQDSS_AdBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data_ZQDSS_ = null;
        _this._origin_ZQDSS_W = 150;
        _this._origin_ZQDSS_H = 150;
        _this._font_ZQDSS_Size = 25;
        return _this;
    }
    Loop_ZQDSS_AdBox.prototype.onAwake = function () {
        
    };
    Loop_ZQDSS_AdBox.prototype.onEnable = function () {
    };
    Loop_ZQDSS_AdBox.prototype.onDisable = function () {
    };
    Loop_ZQDSS_AdBox.prototype.set_ZQDSS_Data = function (data) {
        
    };
    Loop_ZQDSS_AdBox.prototype.onSp_ZQDSS_Click = function () {
    };
    return Loop_ZQDSS_AdBox;
}(Laya.Script));
exports.default = Loop_ZQDSS_AdBox;
},{"../../ALD":1,"../../Event/EventDef":6,"../../Event/EventMgr":7,"../../OPPOAPI":51,"../../QQMiniGameAPI":53,"../../WXAPI":82,"../ShareAd":54}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoopAdBox_1 = require("./LoopAdBox");
var MyLoopAdBox = /** @class */ (function (_super) {
    __extends(MyLoopAdBox, _super);
    function MyLoopAdBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mask = null;
        return _this;
    }
    MyLoopAdBox.prototype.onAwake = function () {
    };
    MyLoopAdBox.prototype.set_ZQDSS_Data = function (data) {
    };
    return MyLoopAdBox;
}(LoopAdBox_1.default));
exports.default = MyLoopAdBox;
},{"./LoopAdBox":57}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleAdView_1 = require("./SingleAdView");
var MySingleAdView = /** @class */ (function (_super) {
    __extends(MySingleAdView, _super);
    function MySingleAdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mask = null;
        return _this;
    }
    MySingleAdView.prototype.onAwake = function () {
    };
    return MySingleAdView;
}(SingleAdView_1.default));
exports.default = MySingleAdView;
},{"./SingleAdView":61}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleAniADView_1 = require("./SingleAniADView");
var MySingleAniADView = /** @class */ (function (_super) {
    __extends(MySingleAniADView, _super);
    function MySingleAniADView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mask = null;
        return _this;
    }
    MySingleAniADView.prototype.onAwake = function () {
    };
    return MySingleAniADView;
}(SingleAniADView_1.default));
exports.default = MySingleAniADView;
},{"./SingleAniADView":62}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShareAd_1 = require("../ShareAd");
var WXAPI_1 = require("../../WXAPI");
var ALD_1 = require("../../ALD");
var EventMgr_1 = require("../../Event/EventMgr");
var EventDef_1 = require("../../Event/EventDef");
var OPPOAPI_1 = require("../../OPPOAPI");
var QQMiniGameAPI_1 = require("../../QQMiniGameAPI");
var Single_ZQDSS_AdView = /** @class */ (function (_super) {
    __extends(Single_ZQDSS_AdView, _super);
    function Single_ZQDSS_AdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AdPos_ZQDSS_ID = ShareAd_1.default.LoopAd_ZQDSS_LocationID;
        _this._ani_ZQDSS_Forward = false;
        _this._data = null;
        _this._font_ZQDSS_Size = 25;
        _this._origin_ZQDSS_Size = 1;
        _this._origin_ZQDSS_W = 150;
        _this._origin_ZQDSS_H = 150;
        return _this;
    }
    Single_ZQDSS_AdView.prototype.onAwake = function () {
        
    };
    Single_ZQDSS_AdView.prototype.onEnable = function () {
       
    };
    Single_ZQDSS_AdView.prototype.onDisable = function () {
        
    };
    Single_ZQDSS_AdView.prototype.refresh_ZQDSS_ADVDis = function () {
        
    };
    Single_ZQDSS_AdView.prototype.onUpdate = function () {
    };
    Single_ZQDSS_AdView.prototype.display_ZQDSS_Ani = function () {
        
    };
    Single_ZQDSS_AdView.prototype.onSp_ZQDSS_Click = function () {
    };
    return Single_ZQDSS_AdView;
}(Laya.Script));
exports.default = Single_ZQDSS_AdView;
},{"../../ALD":1,"../../Event/EventDef":6,"../../Event/EventMgr":7,"../../OPPOAPI":51,"../../QQMiniGameAPI":53,"../../WXAPI":82,"../ShareAd":54}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShareAd_1 = require("../ShareAd");
var WXAPI_1 = require("../../WXAPI");
var ALD_1 = require("../../ALD");
var EventMgr_1 = require("../../Event/EventMgr");
var EventDef_1 = require("../../Event/EventDef");
var OPPOAPI_1 = require("../../OPPOAPI");
var QQMiniGameAPI_1 = require("../../QQMiniGameAPI");
var Single_ZQDSS_AniADView = /** @class */ (function (_super) {
    __extends(Single_ZQDSS_AniADView, _super);
    function Single_ZQDSS_AniADView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AdPos_ZQDSS_ID = ShareAd_1.default.AniAd_ZQDSS_LocationID;
        _this._data_ZQDSS_ = null;
        return _this;
    }
    Single_ZQDSS_AniADView.prototype.onAwake = function () {
        
    };
    Single_ZQDSS_AniADView.prototype.onEnable = function () {
        
    };
    Single_ZQDSS_AniADView.prototype.onDisable = function () {
        
    };
    Single_ZQDSS_AniADView.prototype.refreshADV_ZQDSS_Dis = function () {
       
    };
    Single_ZQDSS_AniADView.prototype.onSp_ZQDSS_Click = function () {
    };
    return Single_ZQDSS_AniADView;
}(Laya.Script));
exports.default = Single_ZQDSS_AniADView;
},{"../../ALD":1,"../../Event/EventDef":6,"../../Event/EventMgr":7,"../../OPPOAPI":51,"../../QQMiniGameAPI":53,"../../WXAPI":82,"../ShareAd":54}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig_1 = require("./AppConfig");
var TT_ZQDSS_API = /** @class */ (function () {
    function TT_ZQDSS_API() {
    }
    TT_ZQDSS_API.tt_ZQDSS_Login = function (onSuccess, onFail) {
    };
    TT_ZQDSS_API.onRewarded_ZQDSS_VideoAdLoad = function () {
        //console.log('激励视频 广告加载完成');
    };
    TT_ZQDSS_API.onRewarded_ZQDSS_VideoAdError = function (err) {
        //console.log('激励视频 广告加载失败' + err);
    };
    TT_ZQDSS_API.onRewarded_ZQDSS_VideoAdClose = function (res) {
    };
    TT_ZQDSS_API.regRewarded_ZQDSS_VideoAdEvent = function (rewardedVideoAd) {
       
    };
    TT_ZQDSS_API.showRewarded_ZQDSS_VideoAd = function (onAdClose, onFailed) {
    };
    TT_ZQDSS_API.init_ZQDSS_Record = function () {
        
    };
    /**
     * 开始录屏
     */
    TT_ZQDSS_API.start_ZQDSS_Record = function (duration) {
       
    };
    /**
    * 停止录屏
    */
    TT_ZQDSS_API.stop_ZQDSS_Record = function () {
       
    };
    //----------------------------------------------------------------------
    //---------------------分享录屏----------------------------------------
    TT_ZQDSS_API.share_ZQDSS_Record = function (callback) {
        
    };
    //----------------------------------------------------------------------
    //----------------------------------------------------------------------
    //---------------------分享好友----------------------------------------
    TT_ZQDSS_API.share_ZQDSS_ = function (complate) {
    
    };
    //------------------------------------------------------------------
    //-------------------------banner-------------------------------------------
    TT_ZQDSS_API.show_ZQDSS_Banner = function () {
       
    };
    TT_ZQDSS_API.ad_ZQDSS_UnitId = "";
    TT_ZQDSS_API.bannerAd_ZQDSS_UnitId = "";
    TT_ZQDSS_API.InsAd_ZQDSS_UnitId = "";
    TT_ZQDSS_API._templateId = ""; //分享素材id
    TT_ZQDSS_API.record_ZQDSS_Res = "";
    TT_ZQDSS_API._banner = null;
    //-------------------------激励视频---------------------------------
    TT_ZQDSS_API._isRegRewarded_ZQDSS_VideoAdEvent = false;
    TT_ZQDSS_API._onRewardedVideo_ZQDSS_AdFailed = null;
    TT_ZQDSS_API._onRewarded_ZQDSS_VideoAdClose = null;
    return TT_ZQDSS_API;
}());
exports.default = TT_ZQDSS_API;
},{"./AppConfig":2}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventMgr_1 = require("../Event/EventMgr");
var EventDef_1 = require("../Event/EventDef");
//游戏数据,为保持版本兼容，建议不要删除和修改字段名
var User_ZQDSS_Game_ZQDSS_Data = /** @class */ (function () {
    function User_ZQDSS_Game_ZQDSS_Data() {
        if(localStorage.getItem("turnshoot_level")){
        this.levelNum = localStorage.getItem("turnshoot_level"); //当前关卡
        }
        else {localStorage.setItem('turnshoot_level',1);
            this.levelNum = 1;
        }
        if(localStorage.getItem("turnshoot_money")){
            this.moneyNum = localStorage.getItem("turnshoot_money"); //当前关卡
            }
            else this.moneyNum = 0;
        this.crystalNum = 0; //钻石数量    
    }
    return User_ZQDSS_Game_ZQDSS_Data;
}());
exports.User_ZQDSS_Game_ZQDSS_Data = User_ZQDSS_Game_ZQDSS_Data;
var User_ZQDSS_ = /** @class */ (function (_super) {
    __extends(User_ZQDSS_, _super);
    function User_ZQDSS_() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User_ZQDSS_, "is_ZQDSS_Login", {
        get: function () {
            return (User_ZQDSS_.code != "") || (User_ZQDSS_.token != "");
        },
        enumerable: true,
        configurable: true
    });
    User_ZQDSS_.get_ZQDSS_SaveData = function () {
        return JSON.stringify(User_ZQDSS_._game_ZQDSS_Data);
    };
    User_ZQDSS_.test_ZQDSS_InitUser = function () {
        if(localStorage.getItem("turnshoot_level")){
            User_ZQDSS_._game_ZQDSS_Data.levelNum = localStorage.getItem("turnshoot_level"); //当前关卡
            }
            else {localStorage.setItem('turnshoot_level',1);
                User_ZQDSS_._game_ZQDSS_Data.levelNum = 1;}
        if(localStorage.getItem("turnshoot_money")){
            User_ZQDSS_._game_ZQDSS_Data.moneyNum = localStorage.getItem("turnshoot_money"); //当前关卡
            }
            else User_ZQDSS_._game_ZQDSS_Data.moneyNum = 0;
        User_ZQDSS_._game_ZQDSS_Data.crystalNum = 0;
    };
    User_ZQDSS_.initi_ZQDSS_User = function (data) {
        if (data && 0 != data) {
            if(localStorage.getItem("turnshoot_level")){
                User_ZQDSS_._game_ZQDSS_Data.levelNum = localStorage.getItem("turnshoot_level"); //当前关卡
                }
                else {localStorage.setItem('turnshoot_level',data.levelNum);
                    User_ZQDSS_._game_ZQDSS_Data.levelNum = data.levelNum;}
            if(localStorage.getItem("turnshoot_money")){
                User_ZQDSS_._game_ZQDSS_Data.moneyNum = localStorage.getItem("turnshoot_money"); //当前关卡
                }
                else User_ZQDSS_._game_ZQDSS_Data.moneyNum = data.moneyNum;
            User_ZQDSS_._game_ZQDSS_Data.crystalNum = data.crystalNum;
        }
        else {
            //todo：处理没有获取到玩家数据的情况
        }
    };
    User_ZQDSS_.set_ZQDSS_LevelNum = function (levelNum) {
        User_ZQDSS_._game_ZQDSS_Data.levelNum = levelNum;
    };
    User_ZQDSS_.get_ZQDSS_LevelNum = function () {
        return User_ZQDSS_._game_ZQDSS_Data.levelNum;
    };
    User_ZQDSS_.add_ZQDSS_Money = function (add) {
        add = Math.ceil(add);
        var last = User_ZQDSS_._game_ZQDSS_Data.moneyNum;
        User_ZQDSS_._game_ZQDSS_Data.moneyNum = parseInt(User_ZQDSS_._game_ZQDSS_Data.moneyNum) + parseInt(add);
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_On_ZQDSS_User_ZQDSS_Money_ZQDSS_Change, {
            curr: User_ZQDSS_._game_ZQDSS_Data.moneyNum,
            last: last
        });
    };
    User_ZQDSS_.sub_ZQDSS_Money = function (sub) {
        sub = Math.ceil(sub);
        var last = User_ZQDSS_._game_ZQDSS_Data.moneyNum;
        User_ZQDSS_._game_ZQDSS_Data.moneyNum -= sub;
        if (User_ZQDSS_._game_ZQDSS_Data.moneyNum < 0) {
            User_ZQDSS_._game_ZQDSS_Data.moneyNum = 0;
        }
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_On_ZQDSS_User_ZQDSS_Money_ZQDSS_Change, {
            curr: User_ZQDSS_._game_ZQDSS_Data.moneyNum,
            last: last
        });
    };
    User_ZQDSS_.get_ZQDSS_Money = function () {
        return User_ZQDSS_._game_ZQDSS_Data.moneyNum;
    };
    User_ZQDSS_.add_ZQDSS_Crystal = function (add) {
        add = Math.ceil(add);
        var last = User_ZQDSS_._game_ZQDSS_Data.crystalNum;
        User_ZQDSS_._game_ZQDSS_Data.crystalNum += add;
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_On_ZQDSS_User_ZQDSS_Crystal_ZQDSS_Change, {
            curr: User_ZQDSS_._game_ZQDSS_Data.crystalNum,
            last: last
        });
    };
    User_ZQDSS_.sub_ZQDSS_Crystal = function (sub) {
        sub = Math.ceil(sub);
        var last = User_ZQDSS_._game_ZQDSS_Data.crystalNum;
        User_ZQDSS_._game_ZQDSS_Data.crystalNum -= sub;
        if (User_ZQDSS_._game_ZQDSS_Data.crystalNum < 0) {
            User_ZQDSS_._game_ZQDSS_Data.crystalNum = 0;
        }
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_On_ZQDSS_User_ZQDSS_Crystal_ZQDSS_Change, {
            curr: User_ZQDSS_._game_ZQDSS_Data.crystalNum,
            last: last
        });
    };
    User_ZQDSS_.get_ZQDSS_Crystal = function () {
        return User_ZQDSS_._game_ZQDSS_Data.crystalNum;
    };
    User_ZQDSS_.code = "";
    User_ZQDSS_.openId = "";
    User_ZQDSS_.token = null;
    User_ZQDSS_.nickName = "";
    User_ZQDSS_.gender = 0;
    User_ZQDSS_._game_ZQDSS_Data = new User_ZQDSS_Game_ZQDSS_Data();
    return User_ZQDSS_;
}(Laya.Script));
exports.default = User_ZQDSS_;
},{"../Event/EventDef":6,"../Event/EventMgr":7}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilit_ZQDSS_ = /** @class */ (function () {
    function Utilit_ZQDSS_() {
    }
    Utilit_ZQDSS_.Lerp_ZQDSS_ = function (form, to, delta) {
        if (form == to)
            return to;
        if (form > to) {
            var next = form - delta;
            if (next <= to)
                return to;
            return next;
        }
        else if (form < to) {
            var next = form + delta;
            if (next >= to)
                return to;
            return next;
        }
    };
    Utilit_ZQDSS_.lerp_ZQDSS_EulerAngle = function (form, to, delta) {
        var form = form % 360;
        form = form >= 0 ? form : (360 + form);
        var to = to % 360;
        to = to >= 0 ? to : (360 + to);
        var dis = Math.abs(to - form);
        if (dis > 180) {
            if (form < to)
                to = to - 360;
            else if (form > to)
                to = to + 360;
        }
        var next = Utilit_ZQDSS_.Lerp_ZQDSS_(form, to, delta);
        return next;
    };
    Utilit_ZQDSS_.get_ZQDSS_RotationByDir = function (v) {
        var dotValue = (v.x * Utilit_ZQDSS_.poin_ZQDSS_Down.x) + (v.y * Utilit_ZQDSS_.poin_ZQDSS_Down.y);
        var cos = dotValue / (v.distance(0, 0) * Utilit_ZQDSS_.poin_ZQDSS_Down.distance(0, 0));
        var radian = Math.acos(cos);
        var rotation = radian / (2 * Math.PI) * 360;
        if (v.x < 0) {
            rotation = -rotation;
        }
        return rotation;
    };
    Utilit_ZQDSS_.getRotation_ZQDSS_ByDirOn3D_ZQDSS_Space = function (v) {
        var dotValue = (v.x * Utilit_ZQDSS_.poin_ZQDSS_Up.x) + (v.y * Utilit_ZQDSS_.poin_ZQDSS_Up.y);
        var cos = dotValue / (v.distance(0, 0) * Utilit_ZQDSS_.poin_ZQDSS_Up.distance(0, 0));
        var radian = Math.acos(cos);
        var rotation = radian / (2 * Math.PI) * 360;
        if (v.x < 0) {
            rotation = rotation + (180 - rotation) * 2;
        }
        return rotation;
    };
    Utilit_ZQDSS_.getDir_ZQDSS_ByRotation = function (rotation) {
        var radian = (rotation - 90) * Math.PI / 180; // -90 是转换到场景坐标系
        var x = Math.cos(radian);
        var y = Math.sin(radian);
        var point = new Laya.Point(x, y);
        point.normalize();
        return point;
    };
    Utilit_ZQDSS_.getDir_ZQDSS_DirAngle = function (dir1, dir2) {
        var dotValue = (dir1.x * dir2.x) + (dir1.y * dir2.y);
        var cos = dotValue / (dir1.distance(0, 0) * dir2.distance(0, 0));
        var radian = Math.acos(cos);
        var angle = radian / (2 * Math.PI) * 360;
        return angle;
    };
    Utilit_ZQDSS_.getDirScalar_ZQDSS_Length = function (dir) {
        var sl = Math.sqrt(dir.x * dir.x + dir.y * dir.y);
        return sl;
    };
    Utilit_ZQDSS_.setSpOn_ZQDSS_ParentCenter = function (sp) {
        if (null == sp.parent)
            return;
        var psp = sp.parent;
        var x = 0;
        var y = 0;
        var x = x - sp.width / 2 * sp.scaleX + psp.width / 2;
        var y = y - sp.height / 2 * sp.scaleY + psp.height / 2;
        sp.x = x;
        sp.y = y;
    };
    Utilit_ZQDSS_.getPoint_ZQDSS_ToLineDistance = function (x, y, LineStart, LineEnd) {
        var toStartDir = new Laya.Point(x - LineStart.x, y - LineStart.y);
        var toEndDir = new Laya.Point(x - LineEnd.x, y - LineEnd.y);
        var lineDir = new Laya.Point(LineEnd.x - LineStart.y, LineEnd.y - LineStart.y);
        var dotToStartDir = (lineDir.x * toStartDir.x) + (lineDir.y * toStartDir.y);
        if (dotToStartDir <= 0) {
            return toStartDir.distance(0, 0);
        }
        var dotToEndDir = (lineDir.x * toEndDir.x) + (lineDir.y * toEndDir.y);
        if (dotToEndDir <= 0) {
            return toEndDir.distance(0, 0);
        }
        var toStartDis = toStartDir.distance(0, 0);
        var lineDirDis = lineDir.distance(0, 0);
        var cos = dotToStartDir / (toStartDis * lineDirDis);
        var radians = Math.acos(cos);
        var dis = Math.sin(radians) * toStartDis;
        return dis;
    };
    Utilit_ZQDSS_.is_ZQDSS_IphoneX = function () {
        if (!Laya.Browser.onIPhone)
            return false;
        if ((Laya.Browser.width == 2436 && Laya.Browser.height == 1125)
            || (Laya.Browser.height == 2436 && Laya.Browser.width == 1125)) {
            return true;
        }
        return false;
    };
    Utilit_ZQDSS_.is_ZQDSS_Iphone = function () {
        return Laya.Browser.onIPhone;
    };
    Utilit_ZQDSS_.get_ZQDSS_Child = function (node, name) {
        for (var i = 0; i < node.numChildren; ++i) {
            var child = node.getChildAt(i);
            if (child.name == name) {
                return child;
            }
            else {
                var target = Utilit_ZQDSS_.get_ZQDSS_Child(child, name);
                if (target)
                    return target;
            }
        }
        return null;
    };
    Utilit_ZQDSS_.forEachChild = function (node, each) {
        for (var i = 0; i < node.numChildren; ++i) {
            var child = node.getChildAt(i);
            each(child);
            Utilit_ZQDSS_.forEachChild(child, each);
        }
    };
    Utilit_ZQDSS_.OriginStage_ZQDSS_Width = 1334;
    Utilit_ZQDSS_.OriginStage_ZQDSS_Height = 750;
    Utilit_ZQDSS_.grayscale_ZQDSS_Mat = [0.3086, 0.6094, 0.0820, 0, 0,
        0.3086, 0.6094, 0.0820, 0, 0,
        0.3086, 0.6094, 0.0820, 0, 0,
        0, 0, 0, 1, 0];
    Utilit_ZQDSS_.grayscale_ZQDSS_Filter = new Laya.ColorFilter(Utilit_ZQDSS_.grayscale_ZQDSS_Mat);
    Utilit_ZQDSS_.poin_ZQDSS_Down = new Laya.Point(0, -1);
    Utilit_ZQDSS_.poin_ZQDSS_Up = new Laya.Point(0, 1);
    return Utilit_ZQDSS_;
}());
exports.default = Utilit_ZQDSS_;
},{}],66:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../ViewBase");
var BackgroundView = /** @class */ (function (_super) {
    __extends(BackgroundView, _super);
    function BackgroundView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BackgroundView;
}(ViewBase_1.default));
exports.default = BackgroundView;
},{"../ViewBase":81}],67:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundMgr_1 = require("../Mgr/SoundMgr");
var Button_ZQDSS_Anim = /** @class */ (function (_super) {
    __extends(Button_ZQDSS_Anim, _super);
    function Button_ZQDSS_Anim() {
        var _this = _super.call(this) || this;
        _this.useSound = true;
        return _this;
    }
    Button_ZQDSS_Anim.prototype.onAwake = function () {
        this.owner.on(Laya.Event.MOUSE_DOWN, this, this.on_ZQDSS_Down);
        this.owner.on(Laya.Event.MOUSE_UP, this, this.on_ZQDSS_Up);
        this.owner.on(Laya.Event.MOUSE_OUT, this, this.on_ZQDSS_Up);
    };
    Button_ZQDSS_Anim.prototype.onDisable = function () {
        this.owner.offAll();
        Laya.Tween.clearAll(this);
    };
    Button_ZQDSS_Anim.prototype.on_ZQDSS_Down = function () {
        Laya.Tween.to(this.owner, { scaleX: 0.9, scaleY: 0.9 }, 50);
        if (this.useSound) {
            //SoundMgr_1.default.instance.play_ZQDSS_Sound("anniu");
        }
    };
    Button_ZQDSS_Anim.prototype.on_ZQDSS_Up = function () {
        Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 50);
    };
    return Button_ZQDSS_Anim;
}(Laya.Script));
exports.default = Button_ZQDSS_Anim;
},{"../Mgr/SoundMgr":44}],68:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventMgr_1 = require("../../Event/EventMgr");
var EventDef_1 = require("../../Event/EventDef");
var User_1 = require("../../User/User");
var CrystalTips = /** @class */ (function (_super) {
    __extends(CrystalTips, _super);
    function CrystalTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._text = null;
        return _this;
    }
    CrystalTips.prototype.onAwake = function () {
        this._text = this.owner.getChildByName("Text");
    };
    CrystalTips.prototype.onEnable = function () {
        this.refresh();
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_On_ZQDSS_User_ZQDSS_Money_ZQDSS_Change, this, this.refresh);
    };
    CrystalTips.prototype.onDisable = function () {
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_On_ZQDSS_User_ZQDSS_Money_ZQDSS_Change, this, this.refresh);
    };
    CrystalTips.prototype.refresh = function () {
        this._text.value = String(User_1.default.get_ZQDSS_Money());
    };
    return CrystalTips;
}(Laya.Script));
exports.default = CrystalTips;
},{"../../Event/EventDef":6,"../../Event/EventMgr":7,"../../User/User":64}],69:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilit_1 = require("../../Utilit");
var TopZone = /** @class */ (function (_super) {
    __extends(TopZone, _super);
    function TopZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopZone.prototype.onAwake = function () {
        var clip = this.owner;
        if (Utilit_1.default.is_ZQDSS_IphoneX()) {
            clip.top += 70;
        }
    };
    return TopZone;
}(Laya.Script));
exports.default = TopZone;
},{"../../Utilit":65}],70:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BannerAdView_1 = require("../../ShareAd/View/BannerAdView");
var UniversalBottomZone = /** @class */ (function (_super) {
    __extends(UniversalBottomZone, _super);
    function UniversalBottomZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniversalBottomZone.prototype.onAwake = function () {
        
    };
    UniversalBottomZone.prototype.onEnable = function () {
       
    };
    UniversalBottomZone.prototype.onDisable = function () {
    };
    UniversalBottomZone.prototype.onUpdate = function () {
        
    };
    return UniversalBottomZone;
}(Laya.Script));
exports.default = UniversalBottomZone;
},{"../../ShareAd/View/BannerAdView":55}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../ViewBase");
var CachedWXBannerAd_1 = require("../../CachedWXBannerAd");
var CrazyClickView = /** @class */ (function (_super) {
    __extends(CrazyClickView, _super);
    function CrazyClickView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._clickBtn = null;
        _this._bar = null;
        _this._barOriginW = null;
        _this._value = 0;
        _this._add = 0.55;
        _this._sub = 0.25;
        _this._subTiming = 0;
        _this._isComplate = false;
        _this._shootLine = null;
        _this._oilDrum = null;
        _this._triggerValue = 0;
        _this._showBanner = false;
        _this._reward = null;
        _this._rewardText = null;
        _this._rewardCloseBtn = null;
        return _this;
    }
    CrazyClickView.prototype.onAwake = function () {
        
    };
    CrazyClickView.prototype.add_ZQDSS_Event = function () {
        
    };
    CrazyClickView.prototype.remove_ZQDSS_Event = function () {
       
    };
    CrazyClickView.prototype.onUpdate = function () {
        
    };
    CrazyClickView.prototype.onClickBtn = function () {
       
    };
    CrazyClickView.prototype.setProcess = function (value) {
    };
    CrazyClickView.prototype.onClose = function () {
    };
    return CrazyClickView;
}(ViewBase_1.default));
exports.default = CrazyClickView;
},{"../../CachedWXBannerAd":3,"../ViewBase":81}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../ViewBase");
var WXAPI_1 = require("../../WXAPI");
var GameMgr_1 = require("../../Mgr/GameMgr");
var User_1 = require("../../User/User");
var ViewMgr_1 = require("../../Mgr/ViewMgr");
var SoundMgr_1 = require("../../Mgr/SoundMgr");
var ALD_1 = require("../../ALD");
var WudianMgr_1 = require("../../Mgr/WudianMgr");
var Game_ZQDSS_Over_ZQDSS_View = /** @class */ (function (_super) {
    __extends(Game_ZQDSS_Over_ZQDSS_View, _super);
    function Game_ZQDSS_Over_ZQDSS_View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._topZone = null;
        _this._levelNumText = null;
        _this._centerZone = null;
        _this._winPage = null;
        _this._videoRewardBtn = null;
        _this._nextLevelBtn = null;
        _this._SkipLevelBtn = null;
        _this._ClaimBtn = null;
        _this._killNumText = null;
        _this._rewardNumText = null;
        _this._losePage = null;
        _this._restartBtn = null;
        _this._gameSwitching = false;
        _this._shareBtn = null;
        _this._backBtn = null;
        return _this;
    }
    Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks = function (obj) {
        var self = this;
        obj.adInstance?.registerCallback('onAdLoadSucceed', (data) => {
            //console.log('onAdLoadSucceeded Rewarded CALLBACK', data);
            if (obj.adUnitName === rewardObj.adUnitName) {
                is_rewarded_noFill = false
            }
            if (obj.adUnitName === replayObj.adUnitName) {
                is_replay_noFill = false
            }
        });
    
        obj.adInstance?.registerCallback('onAdLoadFailed', (data) => {
            //console.log('onAdLoadFailed Rewarded CALLBACK', data);
            if (obj.adUnitName === rewardObj.adUnitName) {
                is_rewarded_noFill = true
            }
            if (obj.adUnitName === replayObj.adUnitName) {
                is_replay_noFill = true
            }
    
    
        });
    
        obj.adInstance?.registerCallback('onAdDisplayed', (data) => {
            //console.log('onAdDisplayed Rewarded CALLBACK', data);
    
    
        });

        obj.adInstance?.registerCallback('onAdClicked', (data) => {
            //console.log('onAdClicked Rewarded CALLBACK', data);
        });
        
        obj.adInstance?.registerCallback('onAdClosed', (data) => {
            SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
            Laya.SoundManager.muted = false;
            //console.log('onAdClosed Rewarded CALLBACK', data);
        if(sessionStorage.getItem("reward-type") == "reward-SL"){
            sessionStorage.removeItem("reward-type");
            rewardInstance.destroyAd();
            if (obj.adUnitName == rewardObj.adUnitName) {
                isRewardedAdClosedByUser = true
            }
            if(!isRewardGranted && isRewardedAdClosedByUser)
            {    
                rewardInstance=window.GlanceGamingAdInterface.loadRewardedAd(rewardObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
                cancelRewardSL();
            }
            else{ 
                rewardInstance=window.GlanceGamingAdInterface.loadRewardedAd(rewardObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
                giveRewardSL();
            }
            isRewardGranted = false
            isRewardedAdClosedByUser = false
    
        }
        if(sessionStorage.getItem("reward-type") == "reward-CL"){
            sessionStorage.removeItem("reward-type");
            rewardInstance.destroyAd();
            if (obj.adUnitName == rewardObj.adUnitName) {
                isRewardedAdClosedByUser = true
            }
            if(!isRewardGranted && isRewardedAdClosedByUser)
            {    
                rewardInstance=window.GlanceGamingAdInterface.loadRewardedAd(rewardObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
                cancelRewardCL();
            }
            else{  
                rewardInstance=window.GlanceGamingAdInterface.loadRewardedAd(rewardObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
                giveRewardCL();
            }
            isRewardGranted = false
            isRewardedAdClosedByUser = false
    
        }
        if(sessionStorage.getItem("reward-type") == "replay-RP"){
            sessionStorage.removeItem("reward-type");
            if(replayInstance != undefined)
            replayInstance.destroyAd();
            replayInstance = window.GlanceGamingAdInterface.loadRewardedAd(replayObj, Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
            sessionStorage.setItem("doneReplay",1);
        }
        if(sessionStorage.getItem("reward-type") == "replay-RP1"){
            sessionStorage.removeItem("reward-type");
            if(replayInstance != undefined)
            replayInstance.destroyAd();
            replayInstance = window.GlanceGamingAdInterface.loadRewardedAd(replayObj, Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
            sessionStorage.setItem("doneReplay2",1);
        }
        if(sessionStorage.getItem("reward-type") == "replay-RP2"){
            sessionStorage.removeItem("reward-type");
            if(replayInstance != undefined)
            replayInstance.destroyAd();
            replayInstance = window.GlanceGamingAdInterface.loadRewardedAd(replayObj, Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
            sessionStorage.setItem("doneReplay1",1);
        }
        });

        obj.adInstance?.registerCallback('onRewardsUnlocked', (data) => {
            if (obj.adUnitName === rewardObj.adUnitName) {
                isRewardGranted = true
            }
    
        });

}
    Game_ZQDSS_Over_ZQDSS_View.prototype.onAwake = function () {
        if(rewardInstance == undefined)
        rewardInstance=window.GlanceGamingAdInterface?.loadRewardedAd(rewardObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
        if(replayInstance == undefined)
        replayInstance=window.GlanceGamingAdInterface?.loadRewardedAd(replayObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
        this._topZone = this.owner.getChildByName("TopZone");
        this._levelNumText = this._topZone.getChildByName("LevelNumText").getChildByName("Text");
        this._centerZone = this.owner.getChildByName("CenterZone");
        this._winPage = this._centerZone.getChildByName("WinPage");
        this._winPage.visible = false;
        this._videoRewardBtn = this._winPage.getChildByName("VideoRewardBtn");
        this._nextLevelBtn = this._winPage.getChildByName("NextLevelBtn");
        this._ClaimBtn = this._winPage.getChildByName("ClaimBtn");
        this._killNumText = this._winPage.getChildByName("RewardInfo").getChildByName("KillNumText");
        this._rewardNumText = this._winPage.getChildByName("RewardInfo").getChildByName("RewardNumText");
        this._losePage = this._centerZone.getChildByName("LosePage");
        this._losePage.visible = false;
        this._restartBtn = this._losePage.getChildByName("RestartBtn");
        this._SkipLevelBtn = this._losePage.getChildByName("SkipLevelBtn");
        this._shareBtn = this._centerZone.getChildByName("ShareBtn");
        this._backBtn = this._centerZone.getChildByName("BackBtn");
        if (!WudianMgr_1.default.Wudian_ZQDSS_Flag) {
            this._videoRewardBtn.visible = false;
            this._nextLevelBtn.y = this._videoRewardBtn.y;
        }
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onStart = function () {
        //ALD_1.default.aldSendOnlySingleReport(ALD_1.ALDEvent_ZQDSS_Def.EnterGameComplateView);
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onUpdate = function () {
            if(sessionStorage.getItem("pauseEvent") == 1){
                sessionStorage.removeItem("pauseEvent");
                Laya.SoundManager.muted = true;
            }
            if(sessionStorage.getItem("resumeEvent") == 1){
                sessionStorage.removeItem("resumeEvent");
                Laya.SoundManager.muted = false;
                SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
            }
            if(sessionStorage.getItem("replayGameEvent1") == 1){
                sessionStorage.removeItem("replayGameEvent1");
                sendCustomAnalyticsEvent( 'game_replay', {level: parseInt(User_1.default.get_ZQDSS_LevelNum()),score:0,highScore:0});
                sendCustomAnalyticsEvent( 'game_level', {level: parseInt(User_1.default.get_ZQDSS_LevelNum())});
                if (this._gameSwitching)
                    return;
                this._gameSwitching = true;
                var self = this;
                GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                    self._gameSwitching = false;
                    self.close_ZQDSS_View();
                    GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                    });
                });
            }
            if(sessionStorage.getItem("nextLevelEvent1") == 1){
                sessionStorage.removeItem("nextLevelEvent1");
                User_1.default.set_ZQDSS_LevelNum(parseInt(User_1.default.get_ZQDSS_LevelNum()) + 1);
                localStorage.setItem("turnshoot_level",parseInt(User_1.default.get_ZQDSS_LevelNum()));
                sendCustomAnalyticsEvent('game_level', {level: parseInt(User_1.default.get_ZQDSS_LevelNum())});
                if (this._gameSwitching)
                    return;
                this._gameSwitching = true;
                var self = this;
                User_1.default.add_ZQDSS_Money(this._data.moneyReward);
                localStorage.setItem("turnshoot_money",parseInt(User_1.default.get_ZQDSS_Money()));
                GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                    self._gameSwitching = false;
                    self.close_ZQDSS_View();
                    GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                    });
                });
            }
            if(sessionStorage.getItem("gotoLevel1") > 0){
                let golevel = sessionStorage.getItem("gotoLevel1");
                sessionStorage.removeItem("gotoLevel1");
                User_1.default.set_ZQDSS_LevelNum(golevel);

                if(localStorage.getItem("turnshoot_level") < golevel)
                localStorage.setItem("turnshoot_level",parseInt(golevel));
                
                sendCustomAnalyticsEvent('game_level', {level: parseInt(golevel)});
                if (this._gameSwitching)
                    return;
                this._gameSwitching = true;
                var self = this;
                User_1.default.add_ZQDSS_Money(this._data.moneyReward);
                localStorage.setItem("turnshoot_money",parseInt(User_1.default.get_ZQDSS_Money()));
                GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                    self._gameSwitching = false;
                    self.close_ZQDSS_View();
                    GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                    });
                });
            }
            if(sessionStorage.getItem("enableSound") == 1){
                sessionStorage.removeItem("enableSound");
                Laya.SoundManager.muted = false;
                SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
            }
            if(sessionStorage.getItem("enableSound") == 0){
                //sessionStorage.removeItem("enableSound");
                Laya.SoundManager.muted = true;
            }
        
        if(sessionStorage.getItem("GiveRewardSL") == 1){
            sessionStorage.removeItem("GiveRewardSL");
            User_1.default.set_ZQDSS_LevelNum(parseInt(User_1.default.get_ZQDSS_LevelNum()) + 1);
            localStorage.setItem("turnshoot_level",parseInt(User_1.default.get_ZQDSS_LevelNum()));
            sendCustomAnalyticsEvent('game_level', {level: parseInt(User_1.default.get_ZQDSS_LevelNum())});
            this._gameSwitching = true;
            var self = this;
            User_1.default.add_ZQDSS_Money(this._data.moneyReward);
            localStorage.setItem("turnshoot_money",parseInt(User_1.default.get_ZQDSS_Money()));
            GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                self._gameSwitching = false;
                self.close_ZQDSS_View();
                GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                });
            });
        }
        if(sessionStorage.getItem("CancelRewardSL") == 1){
            sessionStorage.removeItem("CancelRewardSL");
        }
        if(sessionStorage.getItem("GiveRewardCL") == 1){
            sessionStorage.removeItem("GiveRewardCL");
            sendCustomAnalyticsEvent( 'game_level', {level: parseInt(User_1.default.get_ZQDSS_LevelNum())});
            var self = this;
            self._videoRewardBtn.active = false;
            self.close_ZQDSS_View();
            GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                    User_1.default.add_ZQDSS_Money(self._data.moneyReward * 5);
                    localStorage.setItem("turnshoot_money",parseInt(User_1.default.get_ZQDSS_Money()));
                });
            });

        }
        if(sessionStorage.getItem("CancelRewardCL") == 1){
            sessionStorage.removeItem("CancelRewardCL");
        }
        if(sessionStorage.getItem("doneReplay") == 1){
            sessionStorage.removeItem("doneReplay");
            sendCustomAnalyticsEvent( 'game_replay', {level: parseInt(User_1.default.get_ZQDSS_LevelNum()),score:0,highScore:0});
            sendCustomAnalyticsEvent( 'game_level', {level: parseInt(User_1.default.get_ZQDSS_LevelNum())});
            this._gameSwitching = true;
            var self = this;
            GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                self._gameSwitching = false;
                self.close_ZQDSS_View();
                GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                });
            });
        }
        if(sessionStorage.getItem("doneReplay1") == 1){
            sessionStorage.removeItem("doneReplay1");
            if(sessionStorage.getItem("aftergameover") == 1){
                sessionStorage.removeItem("aftergameover");
            }else{
                sendCustomAnalyticsEvent( 'game_end', {level: parseInt(User_1.default.get_ZQDSS_LevelNum()),score:0,highScore:0});
            }
            var _this = this;
            var self = this;
            this._gameSwitching = true;
            User_1.default.add_ZQDSS_Money(this._data.moneyReward);
            localStorage.setItem("turnshoot_money",parseInt(User_1.default.get_ZQDSS_Money()));
            ViewMgr_1.default.instance.close_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.GameView);
            GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                ViewMgr_1.default.instance.open_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.MainView, null, function () {
                    _this.close_ZQDSS_View;
                });
            });
        }
        if(sessionStorage.getItem("doneReplay2") == 1){
            sessionStorage.removeItem("doneReplay2");
            this._nextLevelBtn.visible = true;
            this._ClaimBtn.visible = true;
        }
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.add_ZQDSS_Event = function () {
        _super.prototype.add_ZQDSS_Event.call(this);
        this._videoRewardBtn.on(Laya.Event.CLICK, this, this.onVideoRewardBtn);
        this._nextLevelBtn.on(Laya.Event.CLICK, this, this.onNextLevelBtn);
        this._SkipLevelBtn.on(Laya.Event.CLICK, this, this.onSkipLevelBtn);
        this._ClaimBtn.on(Laya.Event.CLICK, this, this.onClaimBtn);
        this._restartBtn.on(Laya.Event.CLICK, this, this.onRestartBtn);
        this._shareBtn.on(Laya.Event.CLICK, this, this.onShareBtn);
        this._backBtn.on(Laya.Event.CLICK, this, this.onBackBtn);
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.remove_ZQDSS_Event = function () {
        _super.prototype.remove_ZQDSS_Event.call(this);
        this._videoRewardBtn.off(Laya.Event.CLICK, this, this.onVideoRewardBtn);
        this._nextLevelBtn.off(Laya.Event.CLICK, this, this.onNextLevelBtn);
        this._SkipLevelBtn.on(Laya.Event.CLICK, this, this.onSkipLevelBtn);
        this._ClaimBtn.on(Laya.Event.CLICK, this, this.onClaimBtn);
        this._restartBtn.off(Laya.Event.CLICK, this, this.onRestartBtn);
        this._shareBtn.off(Laya.Event.CLICK, this, this.onShareBtn);
        this._backBtn.off(Laya.Event.CLICK, this, this.onBackBtn);
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.open_ZQDSS_View = function (data) {
        _super.prototype.open_ZQDSS_View.call(this, data);
        this._winPage.visible = this._data.isWin;
        this._losePage.visible = !(this._data.isWin);
        var levelNum = this._data.levelNum;
        this._levelNumText.value = String(levelNum);
        if (this._data.isWin) {
            this._SkipLevelBtn.visible = false;
            this._nextLevelBtn.visible = true;
            this._ClaimBtn.visible = true;
            var killNum = this._data.killNum;
            var moneyReward = this._data.moneyReward;
            this._killNumText.value = String(killNum);
            this._rewardNumText.value = String(moneyReward);
            SoundMgr_1.default.instance.stop_ZQDSS_BGM();
            SoundMgr_1.default.instance.play_ZQDSS_Sound("MoneyCount");
            if(levelNum % 3 == 0){
                this._nextLevelBtn.visible = false;
                this._ClaimBtn.visible = false;
                sessionStorage.setItem("reward-type","replay-RP1");
                if (!is_rewarded_noFill) {
                    setTimeout(() => {Laya.SoundManager.muted = true;
                        this._nextLevelBtn.visible = true;
                this._ClaimBtn.visible = true;
                        window.GlanceGamingAdInterface.showRewarededAd(replayInstance);},1000);  
                }else{
                    this._nextLevelBtn.visible = true;
                    this._ClaimBtn.visible = true;
                    sessionStorage.removeItem("reward-type");
                    Laya.SoundManager.muted = false;
                    if(replayInstance != undefined)
                    replayInstance.destroyAd();
                    replayInstance=window.GlanceGamingAdInterface.loadRewardedAd(replayObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
                }
            }
        }
        else {
            this._ClaimBtn.visible = false;
            this._SkipLevelBtn.visible = true;
            SoundMgr_1.default.instance.stop_ZQDSS_BGM();
            SoundMgr_1.default.instance.play_ZQDSS_Sound("GameOver");
        }
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onVideoRewardBtn = function () {
        var _this = this;
        var self = this;
        self._videoRewardBtn.active = false;
        WXAPI_1.default.showRewarded_ZQDSS_VideoAd(function (ok) {
            if (ok) {
                self.close_ZQDSS_View();
                GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                    GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                        User_1.default.add_ZQDSS_Money(self._data.moneyReward * 5);
                        localStorage.setItem("turnshoot_money",parseInt(User_1.default.get_ZQDSS_Money()));
                    });
                });
            }
            else {
                ViewMgr_1.default.instance.show_ZQDSS_Tips("看完广告才能获得奖励哦~");
                self._videoRewardBtn.active = true;
            }
        }, function () {
            if (_this.owner.visible == true) {
                self.hide_ZQDSS_();
                GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
                    GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                        self.close_ZQDSS_View();
                        User_1.default.add_ZQDSS_Money(self._data.moneyReward);
                        localStorage.setItem("turnshoot_money",parseInt(User_1.default.get_ZQDSS_Money()));
                    });
                });
            }
        });
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onNextLevelBtn = function () {
        sendCustomAnalyticsEvent('game_level', {level: parseInt(User_1.default.get_ZQDSS_LevelNum())});
        if (this._gameSwitching)
            return;
        this._gameSwitching = true;
        var self = this;
        User_1.default.add_ZQDSS_Money(this._data.moneyReward);
        localStorage.setItem("turnshoot_money",parseInt(User_1.default.get_ZQDSS_Money()));
        GameMgr_1.default.get_ZQDSS_Instance().destroy_ZQDSS_Game(function () {
            self._gameSwitching = false;
            self.close_ZQDSS_View();
            GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
            });
        });
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onSkipLevelBtn = function () {
        if (this._SkipLevelBtn.visible == true) {
            sendCustomAnalyticsEvent("rewarded_ad", {successCB : 'giveRewardSL',failureCB: 'cancelRewardSL'});
            sessionStorage.setItem("reward-type","reward-SL");
            if (!is_rewarded_noFill) {
                this._SkipLevelBtn.visible = false;
                setTimeout(() => {Laya.SoundManager.muted = true;
                window.GlanceGamingAdInterface.showRewarededAd(rewardInstance);},1000);
            } 
            else{
                sessionStorage.removeItem("reward-type");
                Laya.SoundManager.muted = false;
                SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
                rewardInstance.destroyAd();
                this._SkipLevelBtn.visible = false;
                rewardInstance=window.GlanceGamingAdInterface.loadRewardedAd(rewardObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
                giveRewardSL();
            }
        }
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onClaimBtn = function () {
        if (this._ClaimBtn.visible == true) {
            sendCustomAnalyticsEvent("rewarded_ad", {successCB : 'giveRewardCL',failureCB: 'cancelRewardCL'});
            sessionStorage.setItem("reward-type","reward-CL");
            if (!is_rewarded_noFill) {
                this._ClaimBtn.visible = false;
                setTimeout(() => {Laya.SoundManager.muted = true;
                window.GlanceGamingAdInterface.showRewarededAd(rewardInstance);},1000);
            } 
            else{
                sessionStorage.removeItem("reward-type");
                Laya.SoundManager.muted = false;
                SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
                rewardInstance.destroyAd();
                this._ClaimBtn.visible = false;
                rewardInstance=window.GlanceGamingAdInterface.loadRewardedAd(rewardObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
                giveRewardCL();
            }
        }
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onRestartBtn = function () {
        sessionStorage.setItem("reward-type","replay-RP");
            if (!is_rewarded_noFill) {
                setTimeout(() => {Laya.SoundManager.muted = true;
                    window.GlanceGamingAdInterface.showRewarededAd(replayInstance);},1000);  
            }else{
                sessionStorage.removeItem("reward-type");
                Laya.SoundManager.muted = false;
                SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
                if(replayInstance != undefined)
                replayInstance.destroyAd();
                replayInstance=window.GlanceGamingAdInterface.loadRewardedAd(replayObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
                sessionStorage.setItem("doneReplay",1);
            }    
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onClose = function () {
        _super.prototype.onClose.call(this);
        GameMgr_1.default.get_ZQDSS_Instance().save_ZQDSS_Game_ZQDSS_Data();
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onShareBtn = function () {
        window.open("https://felicitygames.com", "_blank");
    };
    Game_ZQDSS_Over_ZQDSS_View.prototype.onBackBtn = function () {
        sessionStorage.setItem("reward-type","replay-RP2");
        if (!is_rewarded_noFill) {
            setTimeout(() => {Laya.SoundManager.muted = true;
                window.GlanceGamingAdInterface.showRewarededAd(replayInstance);},1000);  
        }else{
            sessionStorage.removeItem("reward-type");
            Laya.SoundManager.muted = false;
            SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
            if(replayInstance != undefined)
            replayInstance.destroyAd();
            replayInstance=window.GlanceGamingAdInterface.loadRewardedAd(replayObj,Game_ZQDSS_Over_ZQDSS_View.prototype.rewardedCallbacks);
            sessionStorage.setItem("doneReplay1",1);
        } 
    };
    return Game_ZQDSS_Over_ZQDSS_View;
}(ViewBase_1.default));
exports.default = Game_ZQDSS_Over_ZQDSS_View;
},{"../../ALD":1,"../../Mgr/GameMgr":43,"../../Mgr/SoundMgr":44,"../../Mgr/ViewMgr":45,"../../Mgr/WudianMgr":46,"../../User/User":64,"../../WXAPI":82,"../ViewBase":81}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../ViewBase");
var EventMgr_1 = require("../../Event/EventMgr");
var EventDef_1 = require("../../Event/EventDef");
var GameMgr_1 = require("../../Mgr/GameMgr");
var User_1 = require("../../User/User");
var SoundMgr_1 = require("../../Mgr/SoundMgr");
var UnitType_1 = require("../../GameScript/Unit/UnitType");
var AppSwitchConfig_1 = require("../../Config/AppSwitchConfig");
var ALD_1 = require("../../ALD");
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ownerSprite = null;
        _this._topZone = null;
        _this._levelNumText = null;
        _this._centerZone = null;
        _this._bossInfo = null;
        _this._bossHpBar = null;
        _this._bossHpBarOriginWidth = null;
        _this._bossNotice = null;
        _this._bulletInfo = null;
        _this._bulletTags = new Array();
        _this._titels = null;
        _this._screenPos = new Laya.Vector3();
        return _this;
    }
    GameView.prototype.onAwake = function () {
        this._ownerSprite = this.owner;
        this._topZone = this.owner.getChildByName("TopZone");
        this._levelNumText = this._topZone.getChildByName("LevelNumText").getChildByName("Text");
        this._centerZone = this.owner.getChildByName("CenterZone");
        this._bossInfo = this._centerZone.getChildByName("BossInfo");
        this._bossHpBar = this._bossInfo.getChildByName("BossHpBar").getChildByName("Bar");
        this._bossHpBarOriginWidth = this._bossHpBar.width;
        this._bossNotice = this._bossInfo.getChildByName("Bg");
        this._bossInfo.visible = false;
        this._bulletInfo = this._centerZone.getChildByName("BulletInfo");
        for (var i = this._bulletInfo.numChildren - 1; i >= 0; --i) {
            var child = this._bulletInfo.getChildAt(i);
            var tag = child.getChildByName("Tag");
            this._bulletTags.push(tag);
            tag.active = false;
        }
        this._titels = this.owner.getChildByName("Titels");
    };
    GameView.prototype.onStart = function () {
        //ALD_1.default.aldSendOnlySingleReport(ALD_1.ALDEvent_ZQDSS_Def.EnterBattleView);
    };
    GameView.prototype.add_ZQDSS_Event = function () {
        this._ownerSprite.on(Laya.Event.CLICK, this, this.onClickScreen);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerBulletNumChange, this, this.onPlayerBulletNumChange);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBossBattle, this, this.onEnterBossBattle);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnBossHpChange, this, this.onBossHpChange);
        EventMgr_1.default.instance.reg_ZQDSS_Evemt(EventDef_1.Event_ZQDSS_Def.Game_OnBanditHeadShoot, this, this.onBanditHeadShoot);
    };
    GameView.prototype.remove_ZQDSS_Event = function () {
        this._ownerSprite.off(Laya.Event.CLICK, this, this.onClickScreen);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnPlayerBulletNumChange, this, this.onPlayerBulletNumChange);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnEnterBossBattle, this, this.onEnterBossBattle);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnBossHpChange, this, this.onBossHpChange);
        EventMgr_1.default.instance.remove_ZQDSS_Event(EventDef_1.Event_ZQDSS_Def.Game_OnBanditHeadShoot, this, this.onBanditHeadShoot);
    };
    GameView.prototype.open_ZQDSS_View = function (data) {
        _super.prototype.open_ZQDSS_View.call(this, data);
        this._levelNumText.value = String(User_1.default.get_ZQDSS_LevelNum());
    };
    GameView.prototype.onUpdate = function () {
        if(sessionStorage.getItem("pauseEvent") == 1){
            sessionStorage.removeItem("pauseEvent");
            Laya.SoundManager.muted = true;
        }
        if(sessionStorage.getItem("resumeEvent") == 1){
            sessionStorage.removeItem("resumeEvent");
            Laya.SoundManager.muted = false;
            SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
        }
        if(sessionStorage.getItem("enableSound") == 1){
            sessionStorage.removeItem("enableSound");
            Laya.SoundManager.muted = false;
            SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
        }
        if(sessionStorage.getItem("enableSound") == 0){
            //sessionStorage.removeItem("enableSound");
            Laya.SoundManager.muted = true;
        }
        if (null == GameMgr_1.default.get_ZQDSS_Instance().GameLevel || GameMgr_1.default.get_ZQDSS_Instance().GameLevel.IsComplate)
            return;
        var units = GameMgr_1.default.get_ZQDSS_Instance().GameLevel.getUnitsByType();
        for (var j = 0; j < units.length; ++j) {
            var unit = units[j];
            if (unit.Type == UnitType_1.Unit_ZQDSS_Type.Hostage) {
                var hostage = unit;
                if (!hostage.is_ZQDSS_Dead) {
                    if (null == unit.helpTitel) {
                        for (var i = 0; i < this._titels.numChildren; ++i) {
                            var titel = this._titels.getChildAt(i);
                            if (!titel.visible && titel.name == "Help") {
                                unit.helpTitel = titel;
                                titel.visible = true;
                                var cam = GameMgr_1.default.get_ZQDSS_Instance().GameLevel.Camera;
                                cam.viewport.project(unit.Sprite3D.transform.position, unit.Level.Camera.projectionViewMatrix, this._screenPos);
                                var x = this._screenPos.x / Laya.stage.clientScaleX;
                                var y = this._screenPos.y / Laya.stage.clientScaleY;
                                titel.pos(x, y);
                                break;
                            }
                        }
                    }
                    else {
                        var titel = unit.helpTitel;
                        var cam = GameMgr_1.default.get_ZQDSS_Instance().GameLevel.Camera;
                        cam.viewport.project(unit.Sprite3D.transform.position, unit.Level.Camera.projectionViewMatrix, this._screenPos);
                        var x = this._screenPos.x / Laya.stage.clientScaleX;
                        var y = this._screenPos.y / Laya.stage.clientScaleY;
                        titel.pos(x, y - 100);
                    }
                }
                else {
                    if (null != unit.helpTitel) {
                        var t = unit.helpTitel;
                        unit.helpTitel = null;
                        t.visible = false;
                    }
                }
            }
        }
    };
    GameView.prototype.onClickScreen = function () {
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_OnClickInput);
    };
    GameView.prototype.onBossHpChange = function (para) {
        var boss = para.boss;
        var last = para.last;
        var current = para.current;
        this._bossHpBar.width = this._bossHpBarOriginWidth * (current / boss.Max_ZQDSS_Hp);
    };
    GameView.prototype.onPlayerBulletNumChange = function (para) {
        var last = para.last;
        var current = para.current;
        var counter = 0;
        for (var i = 0; i < this._bulletTags.length; ++i) {
            var tag = this._bulletTags[i];
            var isActive = tag.visible;
            tag.visible = i < current;
            if (isActive != tag.visible) {
                tag.scale(0.75, 0.75);
                Laya.Tween.to(tag, {
                    scaleX: 1,
                    scaleY: 1,
                }, 100, Laya.Ease.linearOut, null, counter * 100);
                ++counter;
            }
        }
    };
    GameView.prototype.onEnterBossBattle = function (para) {
        var bossTrigger = para.bossTrigger;
        if (this._bossInfo.visible)
            return;
        this._bossInfo.visible = true;
        this._bossNotice.visible = true;
        var self = this;
        Laya.timer.once(1500, this, function () {
            self._bossNotice.visible = false;
        });
        SoundMgr_1.default.instance.play_ZQDSS_Sound("BossFight");
    };
    GameView.prototype.onBanditHeadShoot = function (para) {
        if (AppSwitchConfig_1.default.getInstance().get_ZQDSS_AppSwitch_ZQDSS_Data().blood == 1) {
            var bandit = para.bandit;
            var _loop_1 = function (i) {
                var titel = this_1._titels.getChildAt(i);
                if (!titel.visible && titel.name == "HeadShoot") {
                    titel.visible = true;
                    var cam = GameMgr_1.default.get_ZQDSS_Instance().GameLevel.Camera;
                    cam.viewport.project(bandit.Sprite3D.transform.position, bandit.Level.Camera.projectionViewMatrix, this_1._screenPos);
                    x = this_1._screenPos.x / Laya.stage.clientScaleX;
                    y = this_1._screenPos.y / Laya.stage.clientScaleY;
                    titel.pos(x, y - 80);
                    titel.alpha = 1;
                    Laya.Tween.to(titel, {
                        y: titel.y - 50,
                        alpha: 0,
                    }, 500, Laya.Ease.linearNone, Laya.Handler.create(this_1, function () {
                        titel.visible = false;
                    }), 0, true);
                    return "break";
                }
            };
            var this_1 = this, x, y;
            for (var i = 0; i < this._titels.numChildren; ++i) {
                var state_1 = _loop_1(i);
                if (state_1 === "break")
                    break;
            }
        }
    };
    return GameView;
}(ViewBase_1.default));
exports.default = GameView;
},{"../../ALD":1,"../../Config/AppSwitchConfig":4,"../../Event/EventDef":6,"../../Event/EventMgr":7,"../../GameScript/Unit/UnitType":36,"../../Mgr/GameMgr":43,"../../Mgr/SoundMgr":44,"../../User/User":64,"../ViewBase":81}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIViewStateListener(element) {
    if ((null != element.onViewShow && typeof (element.onViewShow) == "function")
        && (null != element.onViewHide && typeof (element.onViewHide) == "function")) {
        return true;
    }
    return false;
}
exports.isIViewStateListener = isIViewStateListener;
},{}],75:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../ViewBase");
var ALD_1 = require("../../ALD");
var Loading_ZQDSS_View = /** @class */ (function (_super) {
    __extends(Loading_ZQDSS_View, _super);
    function Loading_ZQDSS_View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._processWidth = 0;
        return _this;
    }
    Loading_ZQDSS_View.prototype.onAwake = function () {
        sendCustomAnalyticsEvent("game_load", {});
        this._bg = this.owner.getChildByName("Bg");
        this._bg.visible = false;
        this._bg2 = this._bg.getChildByName("Bg");
        this._bg2.visible = false;
        this._processBarBg = this._bg.getChildByName("processBarBg");
        this._processBar = this._processBarBg.getChildByName("processBar");
        this._processWidth = this._processBar.width;
    };
    Loading_ZQDSS_View.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        ALD_1.default.aldSendOnlySingleReport(ALD_1.ALDEvent_ZQDSS_Def.EnterLoading);
    };
    Loading_ZQDSS_View.prototype.add_ZQDSS_Event = function () {
        _super.prototype.add_ZQDSS_Event.call(this);
    };
    Loading_ZQDSS_View.prototype.remove_ZQDSS_Event = function () {
        _super.prototype.remove_ZQDSS_Event.call(this);
    };
    Loading_ZQDSS_View.prototype.onUpdate = function () {
        this._bg.visible = false;
        this._bg2.visible = false;
        this._bg.width = 0;
        this._bg.height = 0;
        this._bg2.width = 0;
        this._bg2.height = 0;
        if (!this._processBarBg) {
            this._processWidth = Laya.stage.width;
        }
    };
    Loading_ZQDSS_View.prototype.setProcess = function (process) {
        if (process < 0)
            process = 0;
        if (process > 1)
            process = 1;
        // var width = this._processWidth * process;
        // if (width < 1)
        //     width = 1;
        // this._processBar.width = width;

        progressPrec = process*100;
        progressBar(process*100);
    };
    return Loading_ZQDSS_View;
}(ViewBase_1.default));
exports.default = Loading_ZQDSS_View;
},{"../../ALD":1,"../ViewBase":81}],76:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameUtilit_1 = require("../../GameScript/GameUtilit");
var LevelConfig_1 = require("../../Config/LevelConfig");
var User_1 = require("../../User/User");
var LevelBox = /** @class */ (function (_super) {
    __extends(LevelBox, _super);
    function LevelBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bg = null;
        _this._complate = null;
        _this._current = null;
        _this._boss = null;
        _this._bossComplate = null;
        return _this;
    }
    LevelBox.prototype.onAwake = function () {
        this._bg = this.owner.getChildByName("Bg");
        this._complate = this._bg.getChildByName("Complate");
        this._current = this._bg.getChildByName("Current");
        this._boss = this._bg.getChildByName("Boss");
        this._bossComplate = this._bg.getChildByName("BossComplate");
    };
    LevelBox.prototype.setData = function (levelNum) {
        this._levelNum = levelNum;
        var realLevelNum = GameUtilit_1.default.convertLevelNum(this._levelNum);
        var levelData = LevelConfig_1.default.getInstance().getLevelData(realLevelNum);
        this._complate.visible = false;
        this._current.visible = false;
        this._boss.visible = false;
        this._bossComplate.visible = false;
        if (levelData.isBoss) {
            this._bg.height = 60;
            this._bg.y = 70;
        }
        else {
            this._bg.height = 40;
            this._bg.y = 90;
        }
        if (User_1.default.get_ZQDSS_LevelNum() > this._levelNum) {
            this._complate.visible = true;
            if (levelData.isBoss) {
                this._bossComplate.visible = true;
            }
        }
        else if (User_1.default.get_ZQDSS_LevelNum() == this._levelNum) {
            this._current.visible = true;
            if (levelData.isBoss) {
                this._boss.visible = true;
            }
        }
        else {
            if (levelData.isBoss) {
                this._boss.visible = true;
            }
        }
    };
    return LevelBox;
}(Laya.Script));
exports.default = LevelBox;
},{"../../Config/LevelConfig":5,"../../GameScript/GameUtilit":15,"../../User/User":64}],77:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../ViewBase");
var User_1 = require("../../User/User");
var GameMgr_1 = require("../../Mgr/GameMgr");
var ViewMgr_1 = require("../../Mgr/ViewMgr");
var LevelBox_1 = require("./LevelBox");
var AppConfig_1 = require("../../AppConfig");
var EventMgr_1 = require("../../Event/EventMgr");
var EventDef_1 = require("../../Event/EventDef");
var Utilit_1 = require("../../Utilit");
var Player_1 = require("../../GameScript/Unit/Actor/Player");
var SoundMgr_1 = require("../../Mgr/SoundMgr");
var ALD_1 = require("../../ALD");
var MainView = /** @class */ (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._topZone = null;
        _this._levelNumText = null;
        _this._bottomZone = null;
        _this._autoZone = null;
        _this._startGameBtn = null;
        _this._moreGameBtn = null;
        _this._shareBtn = null;
        _this._startgameing = false;
        _this._levelInfoList = null;
        _this._scene3d = null;
        _this._playerObj = null;
        _this._playerObjAnimator = null;
        return _this;
    }
    MainView.prototype.onAwake = function () {
        this._topZone = this.owner.getChildByName("TopZone");
        this._levelNumText = this._topZone.getChildByName("LevelNumText");
        this._bottomZone = this.owner.getChildByName("BottomZone");
        this._autoZone = this._bottomZone.getChildByName("AutoZone");
        this._startGameBtn = this._autoZone.getChildByName("StartGameBtn");
        this._moreGameBtn = this._autoZone.getChildByName("MoreGameBtn");
        this._shareBtn = this._autoZone.getChildByName("ShareBtn");
        this._levelInfoList = this._autoZone.getChildByName("LevelInfo").getChildByName("List");
        this._levelInfoList.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
        this._levelInfoList.hScrollBarSkin = "";
        Laya.Scene3D.load("subRes/LayaScene_Game/Conventional/" + User_1.default.get_ZQDSS_LevelNum() + ".ls", Laya.Handler.create(this, function (scene) {
                scene1 = scene;
            }));
    };
    MainView.prototype.onUpdate = function () {
        if(sessionStorage.getItem("pauseEvent") == 1){
            sessionStorage.removeItem("pauseEvent");
            Laya.SoundManager.muted = true;
        }
        if(sessionStorage.getItem("resumeEvent") == 1){
            sessionStorage.removeItem("resumeEvent");
            Laya.SoundManager.muted = false;
            SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
        }
        if(sessionStorage.getItem("enableSound") == 1){
            sessionStorage.removeItem("enableSound");
            Laya.SoundManager.muted = false;
            SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
        }
        if(sessionStorage.getItem("enableSound") == 0){
            //sessionStorage.removeItem("enableSound");
            Laya.SoundManager.muted = true;
        }
        if(sessionStorage.getItem("gotoHomeEvent") == 1){
            sessionStorage.setItem("gotoHomeEventMenu",1);
            //sessionStorage.removeItem("gotoHomeEvent");
        }
        if(sessionStorage.getItem("gotoLevel") > 0){
            sessionStorage.setItem("gotoLevelMenu",1);
            //sessionStorage.removeItem("gotoLevel");
        }
        if(sessionStorage.getItem("replayGameEvent") == 1){
            sessionStorage.setItem("replayGameEventMenu",1);
            //sessionStorage.removeItem("replayGameEvent");
        }
        if(sessionStorage.getItem("nextLevelEvent") == 1){
            sessionStorage.setItem("nextLevelEventMenu",1);
            //sessionStorage.removeItem("nextLevelEvent");
        }
    }
    MainView.prototype.onStart = function () {
    };
    MainView.prototype.add_ZQDSS_Event = function () {
        this._startGameBtn.on(Laya.Event.CLICK, this, this.onStartGameBtn);
        this._moreGameBtn.on(Laya.Event.CLICK, this, this.onMoreGameBtn);
        this._shareBtn.on(Laya.Event.CLICK, this, this.onShareBtn);
    };
    MainView.prototype.remove_ZQDSS_Event = function () {
        this._startGameBtn.off(Laya.Event.CLICK, this, this.onStartGameBtn);
        this._moreGameBtn.off(Laya.Event.CLICK, this, this.onMoreGameBtn);
        this._shareBtn.off(Laya.Event.CLICK, this, this.onShareBtn);
    };
    MainView.prototype.open_ZQDSS_View = function (data) {
        _super.prototype.open_ZQDSS_View.call(this, data);
        this._levelNumText.value = String(User_1.default.get_ZQDSS_LevelNum());
        var disEnd = User_1.default.get_ZQDSS_LevelNum() <= 5 ? 10 : User_1.default.get_ZQDSS_LevelNum() + 5;
        var datas = [];
        for (var i = 1; i <= disEnd; ++i) {
            datas.push(i);
        }
        this._levelInfoList.array = datas;
        this._levelInfoList.scrollTo(User_1.default.get_ZQDSS_LevelNum());
        this.initScene3d();
        SoundMgr_1.default.instance.play_ZQDSS_BGM("BP");
    };
    MainView.prototype.onStartGameBtn = function () {
        if(sessionStorage.getItem("loadtime") == 123){
            var self = this;
            GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game(User_1.default.get_ZQDSS_LevelNum(), function () {
                self._startgameing = false;
            });
            sendCustomAnalyticsEvent("game_replay", {});
            if(localStorage.getItem('turnshoot_level')){
                sendCustomAnalyticsEvent('game_level',{level: parseInt(localStorage.getItem("turnshoot_level"))});
            }else{
                localStorage.setItem('turnshoot_level',1);
                sendCustomAnalyticsEvent('game_level',{level: 1});
            }
        }else{
            var self = this;
            GameMgr_1.default.get_ZQDSS_Instance().start_ZQDSS_Game1(User_1.default.get_ZQDSS_LevelNum(), function () {
                self._startgameing = false;
            });
            sessionStorage.setItem("loadtime",123);
            sendCustomAnalyticsEvent("game_start", {});
            if(localStorage.getItem('turnshoot_level')){
                sendCustomAnalyticsEvent('game_level',{level: parseInt(localStorage.getItem("turnshoot_level"))});
            }else{
                localStorage.setItem('turnshoot_level',1);
                sendCustomAnalyticsEvent('game_level',{level: 1});
            }
        }
        
    };
    MainView.prototype.onMoreGameBtn = function () {
        window.open("https://felicitygames.com", "_blank");
    };
    MainView.prototype.onShareBtn = function () {
        window.open("https://felicitygames.com", "_blank");
    };
    MainView.prototype.onListRender = function (cell, index) {
        var data = this._levelInfoList.array[index];
        var levelBox = cell.getComponent(LevelBox_1.default);
        levelBox.setData(data);
    };
    MainView.prototype.initScene3d = function () {
        if (null != this._scene3d)
            return;

        this.hide_ZQDSS_();
        ViewMgr_1.default.instance.hide_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.BackgroundView);
        var self = this;
        this._scene3d = {};
        Laya.Scene3D.load("subRes/LayaScene_Game/Conventional/room3.ls", Laya.Handler.create(this, function (scene) {
            self._scene3d = scene;
            self.owner.addChild(scene);
            self.owner.setChildIndex(scene, 1);
            self._ZQDSS_show();
            ViewMgr_1.default.instance.Show_ZQDSS_View(ViewMgr_1.View_ZQDSS_Def.BackgroundView);
            EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.App__ZQDSS_CloseFirstLoadingView);
            self._playerObj = Utilit_1.default.get_ZQDSS_Child(scene, "Player");
            self._playerObjAnimator = Utilit_1.default.get_ZQDSS_Child(self._playerObj, "Mesh").getComponent(Laya.Animator);
        }));
    };
    return MainView;
}(ViewBase_1.default));
exports.default = MainView;
},{"../../ALD":1,"../../AppConfig":2,"../../Event/EventDef":6,"../../Event/EventMgr":7,"../../GameScript/Unit/Actor/Player":32,"../../Mgr/GameMgr":43,"../../Mgr/SoundMgr":44,"../../Mgr/ViewMgr":45,"../../User/User":64,"../../Utilit":65,"../ViewBase":81,"./LevelBox":76}],78:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../ViewBase");
var Tips_ZQDSS_View = /** @class */ (function (_super) {
    __extends(Tips_ZQDSS_View, _super);
    function Tips_ZQDSS_View() {
        return _super.call(this) || this;
    }
    Tips_ZQDSS_View.prototype.onAwake = function () {
        this._bg = this.owner.getChildByName("Bg");
        this._bg.x = Laya.stage.width / 2 - this._bg.width / 2;
        this._tipsText = this._bg.getChildByName("Text");
    };
    Tips_ZQDSS_View.prototype.open_ZQDSS_View = function (data) {
        _super.prototype.open_ZQDSS_View.call(this, data);
        this.setTipsMsg(data);
        Laya.timer.clearAll(this);
        var self = this;
        Laya.timer.once(3000, this, function () {
            self.close_ZQDSS_View();
        });
    };
    Tips_ZQDSS_View.prototype.setTipsMsg = function (msg) {
        this._tipsText.text = msg;
    };
    return Tips_ZQDSS_View;
}(ViewBase_1.default));
exports.default = Tips_ZQDSS_View;
},{"../ViewBase":81}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Middle_ZQDSS_Anchor = /** @class */ (function (_super) {
    __extends(Middle_ZQDSS_Anchor, _super);
    function Middle_ZQDSS_Anchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Middle_ZQDSS_Anchor.prototype.onAwake = function () {
        var sp = this.owner;
        var parentSp = this.owner.parent;
        if (parentSp) {
            var pw = parentSp.width;
            var x = pw / 2;
            sp.x = x;
        }
    };
    return Middle_ZQDSS_Anchor;
}(Laya.Script));
exports.default = Middle_ZQDSS_Anchor;
},{}],80:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewAuto_ZQDSS_ScaleByW = /** @class */ (function (_super) {
    __extends(ViewAuto_ZQDSS_ScaleByW, _super);
    function ViewAuto_ZQDSS_ScaleByW() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewAuto_ZQDSS_ScaleByW.prototype.onAwake = function () {
        var realW = Laya.stage.width;
        var scale = realW / ViewAuto_ZQDSS_ScaleByW.baseWidth;
        var ps = this.owner;
        ps.scale(scale, scale);
    };
    ViewAuto_ZQDSS_ScaleByW.baseWidth = 750;
    ViewAuto_ZQDSS_ScaleByW.baseHeight = 1334;
    return ViewAuto_ZQDSS_ScaleByW;
}(Laya.Script));
exports.default = ViewAuto_ZQDSS_ScaleByW;
},{}],81:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewMgr_1 = require("../Mgr/ViewMgr");
var EventMgr_1 = require("../Event/EventMgr");
var EventDef_1 = require("../Event/EventDef");
var Utilit_1 = require("../Utilit");
var IViewStateListener_1 = require("./IViewStateListener");
//界面基类，所有功能模块界面继承于这个类。这种类型的界面不能嵌套。
var View_ZQDSS_Base = /** @class */ (function (_super) {
    __extends(View_ZQDSS_Base, _super);
    function View_ZQDSS_Base() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClose_ZQDSS_Event = null;
        _this.onOpen_ZQDSS_Event = null;
        _this._viewBase = true;
        _this._viewDef = ViewMgr_1.View_ZQDSS_Def.None;
        _this._data = {};
        return _this;
    }
    View_ZQDSS_Base.prototype.onAwake = function () {
        //删除时自动释放
        this.owner.autoDestroyAtClosed = true;
        this.owner.height = Laya.stage.height;
    };
    View_ZQDSS_Base.prototype.onEnable = function () {
        this.add_ZQDSS_Event();
    };
    View_ZQDSS_Base.prototype.onDisable = function () {
        this.remove_ZQDSS_Event();
    };
    View_ZQDSS_Base.prototype.onDestroy = function () {
        this.remove_ZQDSS_Event();
    };
    View_ZQDSS_Base.prototype.open_ZQDSS_View = function (data) {
        this._data = data;
        this._ZQDSS_show();
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_On_ZQDSS_View_ZQDSS_Open, { view: this._viewDef });
        if (this.onOpen_ZQDSS_Event) {
            this.onOpen_ZQDSS_Event();
        }
    };
    View_ZQDSS_Base.prototype.add_ZQDSS_Event = function () {
    };
    View_ZQDSS_Base.prototype.remove_ZQDSS_Event = function () {
        Laya.timer.clearAll(this);
    };
    View_ZQDSS_Base.prototype.close_ZQDSS_View = function () {
        ViewMgr_1.default.instance.close_ZQDSS_View(this._viewDef);
    };
    View_ZQDSS_Base.prototype.hide_ZQDSS_ = function () {
        var _this = this;
        this.owner.visible = false;
        this.onHide();
        Utilit_1.default.forEachChild(this.owner, function (child) {
            var coms = child._components;
            if (coms) {
                for (var index = 0; index < coms.length; index++) {
                    var element = coms[index];
                    if (IViewStateListener_1.isIViewStateListener(element)) {
                        element.onViewHide(_this);
                    }
                }
            }
        });
    };
    View_ZQDSS_Base.prototype._ZQDSS_show = function () {
        var _this = this;
        this.owner.visible = true;
        this.onShow();
        Utilit_1.default.forEachChild(this.owner, function (child) {
            var coms = child._components;
            if (coms) {
                for (var index = 0; index < coms.length; index++) {
                    var element = coms[index];
                    if (IViewStateListener_1.isIViewStateListener(element)) {
                        element.onViewShow(_this);
                    }
                }
            }
        });
    };
    View_ZQDSS_Base.prototype.view_ZQDSS_IsHide = function () {
        return this.owner.visible;
    };
    View_ZQDSS_Base.prototype.onHide = function () { };
    View_ZQDSS_Base.prototype.onShow = function () { };
    View_ZQDSS_Base.prototype.onClose = function () {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        EventMgr_1.default.instance.dis_ZQDSS_patch(EventDef_1.Event_ZQDSS_Def.Game_On_ZQDSS_View_ZQDSS_Close, { view: this._viewDef });
        if (this.onClose_ZQDSS_Event) {
            this.onClose_ZQDSS_Event();
        }
    };
    return View_ZQDSS_Base;
}(Laya.Script));
exports.default = View_ZQDSS_Base;
},{"../Event/EventDef":6,"../Event/EventMgr":7,"../Mgr/ViewMgr":45,"../Utilit":65,"./IViewStateListener":74}],82:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WX_ZQDSS_API = /** @class */ (function () {
    function WX_ZQDSS_API() {
    }
    WX_ZQDSS_API.wx_ZQDSS_Login = function (onSuccess, onFail) {
        if (Laya.Browser.onMiniGame) {
            Laya.Browser.window.wx.login({
                success: function (res) {
                    if (res.code) {
                        var code = res.code;
                        onSuccess(code);
                        //console.log("登陆成功,获取到code : " + code);
                    }
                }
            });
        }
    };
    WX_ZQDSS_API.onRewarded_ZQDSS_VideoAdLoad = function () {
        //console.log('激励视频 广告加载完成');
    };
    WX_ZQDSS_API.onRewarded_ZQDSS_VideoAdError = function (err) {
        //console.log('激励视频 广告加载失败' + err);
        if (WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdFailed) {
            WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdFailed();
        }
    };
    WX_ZQDSS_API.onRewarded_ZQDSS_VideoAdClose = function (res) {
        if ((res && res.isEnded) || res == null) {
            //console.log('激励视频 已完整观看');
            if (WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdClose) {
                WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdClose(true);
            }
        }
        else {
            //console.log('激励视频 未完整观看');
            if (WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdClose) {
                WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdClose(false);
            }
        }
    };
    WX_ZQDSS_API.regRewarded_ZQDSS_VideoAdEvent = function (rewardedVideoAd) {
        rewardedVideoAd.onLoad(WX_ZQDSS_API.onRewarded_ZQDSS_VideoAdLoad);
        rewardedVideoAd.onError(WX_ZQDSS_API.onRewarded_ZQDSS_VideoAdError);
        rewardedVideoAd.onClose(WX_ZQDSS_API.onRewarded_ZQDSS_VideoAdClose);
        WX_ZQDSS_API._isRegRewarded_ZQDSS_VideoAdEvent = true;
    };
    WX_ZQDSS_API.showRewarded_ZQDSS_VideoAd = function (onAdClose, onFailed) {
        if (Laya.Browser.onMiniGame) {
            WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdClose = onAdClose;
            WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdFailed = onFailed;
            var rewardedVideoAd = Laya.Browser.window["wx"].createRewardedVideoAd({
                adUnitId: WX_ZQDSS_API.ad_ZQDSS_UnitId,
            });
            if (!WX_ZQDSS_API._isRegRewarded_ZQDSS_VideoAdEvent) {
                WX_ZQDSS_API.regRewarded_ZQDSS_VideoAdEvent(rewardedVideoAd);
            }
            rewardedVideoAd.load().then(function () {
                var promise = rewardedVideoAd.show();
                promise.then(function () { return //console.log('激励视频 广告显示成功'); 
            });
                promise.catch(function (err) {
                    rewardedVideoAd.load()
                        .then(function () { return rewardedVideoAd.show(); })
                        .catch(function (err) {
                        //console.log('激励视频 广告显示失败');
                        if (onFailed) {
                            onFailed();
                        }
                    });
                });
            }).catch(function (err) {
                //console.log('激励视频 广告加载失败');
                if (onFailed) {
                    onFailed();
                }
            });
        }
        else {
            onAdClose(true);
        }
    };
    //----------------------------------------------------------------
    //-------------------------小游戏跳转---------------------------
    WX_ZQDSS_API.navigate_ZQDSS_ToMini_ZQDSS_Program = function (appId, path, onSuccess, onFail, onComplate) {
        if (Laya.Browser.onMiniGame) {
            //console.log("跳转游戏： " + appId);
            Laya.Browser.window["wx"].navigateToMiniProgram({
                appId: appId,
                path: path,
                extraData: {
                    foo: 'bar'
                },
                envVersion: 'release',
                success: function (res) {
                    if (onSuccess) {
                        onSuccess(res);
                    }
                },
                fail: function (res) {
                    if (onFail) {
                        onFail(res);
                    }
                },
                complete: function (res) {
                    if (onComplate) {
                        onComplate(res);
                    }
                }
            });
        }
    };
    WX_ZQDSS_API.share_ZQDSS_ = function (complate, titel, imageUrl) {
        var _this = this;
        if (Laya.Browser.onMiniGame) {
            WX_ZQDSS_API._onShow = function () {
                Laya.Browser.window["wx"].offShow(WX_ZQDSS_API._onShow);
                WX_ZQDSS_API._onShow = null;
                var c = Date.now() - _this._lastShareTime;
                if (complate) {
                    if (Date.now() - _this._lastShareTime > 2000) {
                        complate(true);
                    }
                    else {
                        complate(false);
                    }
                }
            };
            Laya.Browser.window["wx"].onShow(WX_ZQDSS_API._onShow);
            WX_ZQDSS_API._lastShareTime = Date.now();
            Laya.Browser.window["wx"].shareAppMessage({
                title: titel,
                imageUrl: imageUrl
            });
        }
    };
    //----------------------------------------------------------------------
    //--------------------插屏幕广告---------------------------------------
    WX_ZQDSS_API.show_ZQDSS_InterstitialAd = function (onAdClose, onFailed) {
        if (Laya.Browser.onMiniGame) {
            var interstitialAd = Laya.Browser.window["wx"].createInterstitialAd({
                adUnitId: WX_ZQDSS_API.InsAd_ZQDSS_UnitId,
            });
            interstitialAd.onLoad(function () {
                //console.log('插屏广告 加载完成');
                interstitialAd.show().catch(function (err) {
                    //console.log('插屏广告 显示失败 ：' + err);
                    if (onFailed) {
                        onFailed();
                    }
                });
            });
            interstitialAd.onError(function (err) {
                //console.log('插屏广告 加载失败' + err);
                if (onFailed) {
                    onFailed();
                }
            });
            interstitialAd.onClose(function () {
                //console.log('插屏广告 关闭');
                if (onAdClose) {
                    onAdClose();
                }
            });
        }
        else {
            onAdClose();
        }
    };
    /**
     * 得到小程序启动参数的同步方法，可得到一个Object返回值，返回值具体的数据结构在下面的列表中
     * scene	number	启动小游戏的场景值
     * query	Object	启动小游戏的 query 参数
     * shareTicket	string	shareTicket，详见获取更多转发信息
     * referrerInfo	object	来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}
     * https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html
     * @static
     * @returns {LaunchOptions}
     * @memberof WXAPI
     */
    WX_ZQDSS_API.getLaunch_ZQDSS_OptionsSync = function () {
        // let result = { scene: 0, query: null, shareTicket: "", referrerInfo: null };
        if (Laya.Browser.onMiniGame) {
            var obj_1 = Laya.Browser.window["wx"].getLaunchOptionsSync();
            //console.log("场景值 " + obj_1.scene);
            var str = JSON.stringify(obj_1.query);
            //console.log("Query参数 " + str);
            var key = obj_1.query["key"];
            //console.log("Query参数：key " + key);
            //console.log("ShareTicket " + obj_1.shareTicket);
            //console.log("ReferrerInfo.appId " + obj_1.referrerInfo.appId);
            //console.log("ReferrerInfo.extraData " + obj_1.referrerInfo.extraData);
            return obj_1;
        }
        var obj = { scene: 1001, query: "", shareTicket: "", appId: "", extraData: "" };
        return obj;
    };
    //----------------------------------------------------------------------
    /**
     * 打开微信左上角分享转发点击事件,在游戏逻辑中调用一次即可
     * 注意此方法只会在真机上执行，在微信模拟器环境下点击转发按钮什么都不会发生
     *
     * @static
     * @param {string} titel 分享标题
     * @param {string} imageUrl 分享图片地址
     * @param {Function} [success] 成功回调函数(可不填)
     * @param {Function} [fail] 失败回调函数(可不填)
     * @param {Function} [complate] 完成回调函数，成功失败都会执行(可不填)
     * @memberof WXAPI
     */
    WX_ZQDSS_API.Set_ZQDSS_ShareMenu = function (titel, imageUrl, success, fail, complate) {
        if (Laya.Browser.onMiniGame) {
            //console.log("小游戏设置转发按钮");
            Laya.Browser.window["wx"].showShareMenu({
                withShareTicket: false,
                success: success,
                fail: fail,
                complete: complate
            });
            Laya.Browser.window["wx"].onShareAppMessage(function () {
                return {
                    title: titel,
                    imageUrl: imageUrl
                };
            });
        }
    };
    //检测更新
    WX_ZQDSS_API.check_ZQDSS_Update = function () {
        if (Laya.Browser.onMiniGame) {
            var updateManager = Laya.Browser.window["wx"].getUpdateManager();
            updateManager.onCheckForUpdate(function (res) {
                //console.log("是否需要更新 : ", res.hasUpdate);
            });
            updateManager.onUpdateReady(function () {
                Laya.Browser.window["wx"].showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启小游戏？',
                    success: function (res) {
                        if (res.confirm) {
                            updateManager.applyUpdate();
                        }
                    }
                });
            });
            updateManager.onUpdateFailed(function () {
                //console.log("新版本下载失败!!!");
            });
        }
    };
    WX_ZQDSS_API.ad_ZQDSS_UnitId = "adunit-e8c03668f59cdfb2";
    WX_ZQDSS_API.banner_ZQDSS_AdUnitId = "adunit-f3a2049843c4cb0c";
    WX_ZQDSS_API.InsAd_ZQDSS_UnitId = "";
    //-------------------------激励视频---------------------------------
    WX_ZQDSS_API._isRegRewarded_ZQDSS_VideoAdEvent = false;
    WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdFailed = null;
    WX_ZQDSS_API._onRewarded_ZQDSS_VideoAdClose = null;
    //----------------------------------------------------------------------
    //---------------------分享----------------------------------------
    WX_ZQDSS_API._onShow = null;
    WX_ZQDSS_API._lastShareTime = 0;
    return WX_ZQDSS_API;
}());
exports.default = WX_ZQDSS_API;
},{}],83:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene = Laya.Scene;
var REG = Laya.ClassUtils.regClass;
var ui;
(function (ui) {
    var GameMainUI = /** @class */ (function (_super) {
        __extends(GameMainUI, _super);
        function GameMainUI() {
            return _super.call(this) || this;
        }
        GameMainUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(GameMainUI.uiView);
        };
        GameMainUI.uiView = { "type": "Scene", "props": { "zOrder": -1, "y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "pivotY": 0, "pivotX": 0, "left": 0, "height": 1334 }, "compId": 2, "child": [{ "type": "Script", "props": { "runtime": "Mgr/GameMgr.ts" }, "compId": 148 }], "loadList": [], "loadList3D": [] };
        return GameMainUI;
    }(Scene));
    ui.GameMainUI = GameMainUI;
    REG("ui.GameMainUI", GameMainUI);
})(ui = exports.ui || (exports.ui = {}));
(function (ui) {
    var View;
    (function (View) {
        var LoadingUI = /** @class */ (function (_super) {
            __extends(LoadingUI, _super);
            function LoadingUI() {
                return _super.call(this) || this;
            }
            LoadingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(LoadingUI.uiView);
            };
            LoadingUI.uiView = { "type": "Scene", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "compId": 2, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 750, "name": "Bg", "height": 1334 }, "compId": 6, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "texture": "", "name": "Bg" }, "compId": 9 }, { "type": "Clip", "props": { "x": 375, "width": 579, "skin": "GameCommon/圆角矩形 6.png", "pivotX": 290, "name": "processBarBg", "height": 47, "bottom": 125 }, "compId": 8, "child": [{ "type": "Clip", "props": { "y": 23, "x": 10, "width": 559, "skin": "GameCommon/圆角矩形 8 拷贝.png", "pivotY": 15, "name": "processBar", "left": 10, "height": 30, "bottom": 9, "sizeGrid": "10,12,10,12" }, "compId": 5 }, { "type": "Sprite", "props": { "y": -35, "x": 214, "texture": "GameCommon/LOADING....png" }, "compId": 10 }] }] }, { "type": "Script", "props": { "y": 0, "x": 0, "runtime": "View/LoadingView/LoadingView.ts" }, "compId": 7 }], "loadList": ["GameCommon/圆角矩形 6.png", "GameCommon/圆角矩形 8 拷贝.png", "GameCommon/LOADING....png"], "loadList3D": [] };
            return LoadingUI;
        }(Scene));
        View.LoadingUI = LoadingUI;
        REG("ui.View.LoadingUI", LoadingUI);
    })(View = ui.View || (ui.View = {}));
})(ui = exports.ui || (exports.ui = {}));
},{}]},{},[42])