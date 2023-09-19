const gameInput = { gameName: 'TurnShooter3D', publisherName: 'FelicityGames' };
//loading scripts
$.getScript(


    "https://g.glance-cdn.com/public/content/games/xiaomi/gamesAd.js",

    "gpid.js"

)
    .done(function (script, textStatus) {
        console.log(textStatus);
        window.GlanceGamingAdInterface.setupLibrary(gameInput, successCb, failCb);
    })
    .fail(function (jqxhr, settings, exception) {
        console.log("MLIB load failed, reason : ", exception);
    });


var LPBannerInstance, StickyBannerInstance, replayInstance, GlanceGamingAdInstance, rewardInstance, _triggerReason;
var is_replay_noFill = false
var is_rewarded_noFill = false
var isRewardGranted = false
var isRewardedAdClosedByUser = false
// Objects for different ad format.
const LPMercObj = {
    adUnitName: "FelicityGames_TurnShooter3D_Gameload_Bottom",
    pageName: 'FelicityGames_TurnShooter3D',               //Game Name
    categoryName: 'FelicityGames',           //Publisher Name
    placementName: 'Gameload',
    containerID: "div-gpt-ad-2",            //Div Id for banner
    height: 250,
    width: 300,
    xc: '12.0',
    yc: '3.0',
    gpid: gpID,
}
const StickyObj = {
    adUnitName: "FelicityGames_TurnShooter3D_Ingame_Bottom",
    pageName: 'FelicityGames_TurnShooter3D',               //Game Name
    categoryName: 'FelicityGames',           //Publisher Name
    placementName: 'Ingame',
    containerID: "banner-ad",            //Div Id for banner
    height: 50,
    width: 320,
    xc: '12.0',
    yc: '3.0',
    gpid: gpID,
}

function successCb() {
    console.log("set up lib success")
    showBumperAd();

}
function failCb(reason) { }



const replayObj = {
    adUnitName: "FelicityGames_TurnShooter3D_FsReplay_Replay",
    placementName: "FsReplay",
    pageName: 'FelicityGames_TurnShooter3D',
    categoryName: 'FelicityGames',
    containerID: '',
    height: '',
    width: '',
    xc: '',
    yc: '',
    gpid: gpID,
}

const rewardObj = {
    adUnitName: "FelicityGames_TurnShooter3D_FsRewarded_Reward",
    placementName: "FsRewarded",
    pageName: 'FelicityGames_TurnShooter3D',
    categoryName: 'FelicityGames',
    containerID: '',
    height: '',
    width: '',
    xc: '',
    yc: '',
    gpid: gpID,
}

//banner ads callbacks 
function bannerCallbacks(obj) {
    obj.adInstance?.registerCallback('onAdLoadSucceed', (data) => {
        console.log('onAdLoadSucceeded CALLBACK', data);
    });

    obj.adInstance?.registerCallback('onAdLoadFailed', (data) => {
        console.log('onAdLoadFailed  CALLBACK', data);
    });

    obj.adInstance?.registerCallback('onAdDisplayed', (data) => {
        console.log('onAdDisplayed  CALLBACK', data);
    });
}

function showGame() {
    if (recUI === 'true') {
        window.PwaGameCenterInterface.hideRecommendedSection();
        showcanvas();
    }

    else {
        $('#playMore').css("display", "none");
        $("#div-gpt-ad-1").html("");
    }
}

function giveRewardSL() {
    sessionStorage.setItem("GiveRewardSL",1);
}
function cancelRewardSL() {
    sessionStorage.setItem("CancelRewardSL",1);
}   
function giveRewardCL() {
    sessionStorage.setItem("GiveRewardCL",1);
}
function cancelRewardCL() {
    sessionStorage.setItem("CancelRewardCL",1);
}
function sendCustomAnalyticsEvent(eventType, extras) {
    console.log("AnalyticsEvent", eventType, extras);
}