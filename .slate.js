var screen = S.screen();
var screenRect = screen.rect();

var fullScreen = {
  "x": screenRect.x, 
  "y": screenRect.y, 
  "width": screenRect.width, 
  "height": screenRect.height, 
  "screen": 0
};

var leftHalf = {
  "x": screenRect.x, 
  "y": screenRect.y, 
  "width": screenRect.width/2, 
  "height": screenRect.height, 
  "screen": 0
};

var rightHalf = {
  "x": screenRect.x + screenRect.width/2, 
  "y": screenRect.y, 
  "width": screenRect.width/2, 
  "height": screenRect.height, 
  "screen": 0
};

var topHalf = {
  "x": screenRect.x, 
  "y": screenRect.y, 
  "width": screenRect.width, 
  "height": screenRect.height/2, 
  "screen": 0
};

var bottomHalf = {
  "x": screenRect.x, 
  "y": screenRect.y + screenRect.height/2, 
  "width": screenRect.width, 
  "height": screenRect.height/2, 
  "screen": 0
};

var HYPER = "ctrl,shift,alt,cmd";

var configs = {
"defaultToCurrentScreen": true,
"windowHintsShowIcons": true,
"windowHintsIgnoreHiddenWindows": false,
"windowHintsSpread": true,
"windowHintsSpreadSearchWidth": 256,
"windowHintsSpreadSearchheight": 256,
};

S.configAll(configs);
 
var SnapOp = ":space," + HYPER;

S.bind("left:" + HYPER, S.op("move",leftHalf));
S.bind("right:" + HYPER, S.op("move", rightHalf));
S.bind("up:"+ HYPER, S.op("move", fullScreen));

S.bind("t:" + HYPER, S.op("focus", {app: "iTerm" }));
S.bind("d:" + HYPER, S.op("focus", {app: "Messages" }));
S.bind("s:" + HYPER, S.op("focus", {app: "Skype" }));
S.bind("m:" + HYPER, S.op("focus", {app: "Mail" }));
S.bind("i:" + HYPER, S.op("focus", {app: "iTunes" }));
S.bind("e:" + HYPER, S.op("focus", {app: "Evernote" }));
S.bind("b:" + HYPER, S.op("focus", {app: "Safari" }));
S.bind("g:" + HYPER, S.op("focus", {app: "Google Chrome" }));
S.bind("c:" + HYPER, S.op("focus", {app: "Calendar" }));

S.bind("]:" + HYPER, S.op("focus", {direction: "right" }));
S.bind("[:" + HYPER, S.op("focus", {direction: "left" }));

S.bind("`:" + HYPER, S.op("relaunch"));
S.bind("tab:" + HYPER, S.op("switch"));

S.bind("right:alt,ctrl", S.op("throw", {screen: 1}));
S.bind("left:alt,ctrl", S.op("throw", {screen: 0}));

