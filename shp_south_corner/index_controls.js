PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"actions": [
        {
            "func": function(){ var enabled = this.viewer.gyroscopeEnabled(); var gb = this.get('gyrobutton'); if (gb){ gb.skin = enabled?gb.enabledskin:gb.disabledskin; gb.updateSkins(); } },
            "id": "updateGyroButton"
        },
        {
            "func": function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan,0,100,1.0,0,'easeInOutQuad',true); this.tween({'time': 1.0, 'lp': 0.0, 'transition': 'easeInOutQuad', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); },
            "id": "leaveLittlePlanet"
        },
        {
            "func": function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan+90,90,150,1.0,0,'easeInOutQuad',true); this.tween({'time': 1.0, 'lp': 1.0, 'transition': 'easeInOutQuad', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); },
            "id": "enterLittlePlanet"
        },
        {
            "func": function(a){ var id = this.viewer.currentMBId; if (!!id&&(a.id!=id)){this.viewer.action('hideMessage');} if (a.id!=id){ var s=this.viewer.get('globalData'); if (s&&s.messageBoxStyle){ a.style = s.messageBoxStyle; }this.viewer.currentMBId=null; if (!this.viewer.isVRModeEnabled()){ this.viewer.add('textbox',a); this.viewer.currentMBId=a.id; } } },
            "id": "showMessage"
        },
        {
            "func": function(){ if (this.viewer.currentMBId) this.viewer.remove(this.viewer.currentMBId); this.viewer.currentMBId=null; },
            "id": "hideMessage"
        },
        {
            "func": function(a){ var id = this.viewer.currentMBId; if (a.id!=id){ this.viewer.action('showMessage',a); } else { this.viewer.action('hideMessage'); } },
            "id": "toggleMessage"
        }
    ],
"button": [
        {
            "align": "leftbottom",
            "height": 24,
            "id": "showTbButton",
            "onclick": function(){  var tb = this.get('toolbar'); if (!tb.allowClick) return; tb.allowClick = true; tb.tween({'time': 0.75, 'yoff': 10,'onInit': function(a){ a.setVisible(true); a.style = 'opacity: 1.0;'; a.updateStyles(); }, 'onUpdate': function(a){ a.updateAlign(); } },true);this.tween({ 'time': 0.75, 'yoff' : -52,'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onUpdate' : function(a) { a.updateAlign(); }, 'onComplete': function(a){ a.setVisible(false);  tb.allowClick = true; }}); },
            "oninit": function(){ this.setVisible(false);},
            "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,128,192,64,64,0,0,24,24)",
            "skinactive": "dim(-4px,-4px,32px,32px,32,32);comp(0.6);copy(defaultSkin,0,128,64,64,0,0,30,30);shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,128,192,64,64,4,4,24,24)",
            "skinhover": "dim(-4px,-4px,32px,32px,32,32);comp(0.35);copy(defaultSkin,0,128,64,64,0,0,30,30);shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,128,192,64,64,4,4,24,24)",
            "style": "transition: opacity 0.75s;",
            "width": 24,
            "xoff": 0,
            "yoff": -52
        }
    ],
"buttonBox": [
        {
            "align": "bottom",
            "button": [
                {
                    "align": "left",
                    "id": "hideTbButton",
                    "index": 1,
                    "onclick": function(){ var tb = this.get('toolbar'); if (!tb.allowClick) return; tb.allowClick = false;tb.tween({'time': 0.75, 'yoff': -70, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onUpdate': function(a){ a.updateAlign(); },'onComplete': function(a){ a.setVisible(false); tb.allowClick = true; } },true);var ops=false; this.get('showTbButton').tween({ 'time': 0.75, 'yoff' : 0, 'onInit': function(a){ a.setVisible(true); }, 'onUpdate' : function(a) { if (!ops){a.style = 'opacity: 1.0;'; a.updateStyles(); ops=true;} a.updateAlign(); } },true); },
                    "priority": 3,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,0,192,64,64,5,2,24,24,#444);",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,0,192,64,64,6,3,24,24,#333);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "infobutton",
                    "index": 5,
                    "onclick": function(){ var d=this.viewer.get('localData'); d&&(d=d.infoTextBox); if(!d){ var d=this.viewer.get('globalData'); d&&(d=d.infoTextBox); } if (!!d){this.viewer.action('toggleMessage',d);} },
                    "onscenechanged": function(){ var d=this.viewer.get('localData'); var g=this.viewer.get('globalData'); var o=d&&d.infoTextBox||g&&g.infoTextBox; this.setVisible(!!o); },
                    "priority": 3,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,0,0,64,64,5,2,24,24,#444);",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,0,0,64,64,6,3,24,24,#333);",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 7,
                    "priority": 0,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,128,64,64,64,5,2,24,24,#444);",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,128,64,64,64,6,3,24,24,#333);",
                    "type": 1,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 8,
                    "priority": 0,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,0,64,64,64,5,2,24,24,#444);",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,0,64,64,64,6,3,24,24,#333);",
                    "type": 2,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 9,
                    "priority": 0,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,192,64,64,64,5,2,24,24,#444)",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,192,64,64,64,6,3,24,24,#333);",
                    "type": 3,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 10,
                    "priority": 0,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,64,64,64,64,5,2,24,24,#444)",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,64,64,64,64,6,3,24,24,#333);",
                    "type": 4,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 11,
                    "priority": 2,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,192,128,64,64,5,2,24,24,#444)",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,192,128,64,64,6,3,24,24,#333);",
                    "type": 5,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 12,
                    "priority": 2,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,128,128,64,64,5,2,24,24,#444)",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,128,128,64,64,6,3,24,24,#333);",
                    "type": 6,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "playbutton",
                    "index": 13,
                    "onclick": function(){ if (this.viewer.isPlaying()) this.viewer.stopAutoPlay(); else this.viewer.startAutoPlay(); },
                    "priority": 1,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,64,0,64,64,5,2,24,24,#444)",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,64,0,64,64,6,3,24,24,#333)",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "disabledskin": "shadow(1,0,-1,rgba(255,255,255,0.3));comp(0.66);copy(defaultSkin,64,128,64,64,6,3,24,24,#333);",
                    "enabledskin": "shadow(1,0,-1,rgba(255,255,255,0.3));comp(1.0);copy(defaultSkin,64,128,64,64,5,2,24,24,#444);",
                    "id": "gyrobutton",
                    "index": 18,
                    "onclick": function(){ var enabled = this.viewer.enableGyroscope(!this.viewer.gyroscopeEnabled()); } ,
                    "priority": 3,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));comp(0.66);copy(defaultSkin,64,128,64,64,5,2,24,24,#444);",
                    "visible": false,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "fullscreenButton",
                    "index": 16,
                    "onclick": function(){ this.viewer.toggleFullscreen();  } ,
                    "oninit": function(){ if (!this.viewer.fullscreenSupported()) this.viewer.remove('fullscreenButton');  } ,
                    "priority": 3,
                    "skin": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,192,0,64,64,5,2,24,24,#444);",
                    "skinactive": "shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,192,0,64,64,6,3,24,24,#333);",
                    "xoff": 8,
                    "yoff": 0
                }
            ],
            "buttonheight": 28,
            "buttonstyle": "border: #666 solid 1px; box-shadow: inset 0 2px 3px rgba(255,255,255,0.4), 2px 4px 8px 0px rgba(0,0,0,0.8); border-radius: 5px; background: linear-gradient(#f4f0f2, #b0aa9b); transition: background 0.2s,box-shadow 0.2s;",
            "buttonstyleactive": "box-shadow: inset 0 2px 3px rgba(0,0,0,0.2), 1px 1px 3px 0px rgba(0,0,0,0.8); background: linear-gradient(#b0aa9b,#b8b4a3);",
            "buttonstylehover": "box-shadow: inset 0 2px 3px rgba(255,255,255,0.2), 1px 2px 6px 0px rgba(0,0,0,0.8); background: linear-gradient(#f4f0f2, #b0aa9b);",
            "buttonwidth": 34,
            "height": "48px",
            "hidestyle": "",
            "id": "toolbar",
            "oninit": function(){ this.allowClick = true; },
            "onresize": function() { var cmp = this.viewer.get('compass'); if (!!cmp && ('onresize' in cmp)) cmp.onresize(); },
            "spacing": 6,
            "style": "max-width: 100%;background: rgba(0,0,0,0.0); opacity: 1.0; transition: opacity 0.75s;",
            "visible": true,
            "width": "540px",
            "yoff": 10
        }
    ],
"contextmenu": {
        "id": "menu",
        "items": [
            {
                "id": "fullscreenItem",
                "onclick": function(){ this.viewer.toggleFullscreen(); },
                "oninit": function(){ this.caption = this.viewer.tr('Fullscreen'); if (!this.viewer.fullscreenSupported()) this.visible = false;  } 
            },
            {
                "caption": "-"
            },
            {
                "id": "normalView",
                "onclick": function(){  if (this.viewer.fisheyeDistortion()!=0.0){ this.viewer.action('leaveLittlePlanet'); } },
                "oninit": function(){  this.caption = this.viewer.tr('Normal View'); }
            },
            {
                "id": "littlePlanetView",
                "onclick": function(){ if (this.viewer.fisheyeDistortion()!=1.0){ this.viewer.action('enterLittlePlanet'); } },
                "oninit": function(){  this.caption = this.viewer.tr('LittlePlanet View'); }
            },
            {
                "caption": "-"
            },
            {
                "id": "gyroItem",
                "onclick": function(){  var gb = this.get('gyrobutton'); if (gb){ gb.onclick(); } else { this.viewer.enableGyroscope(!this.viewer.gyroscopeEnabled()); } },
                "oninit": function(){  this.caption = this.viewer.tr('Gyroscope Control'); }
            },
            {
                "caption": "-"
            },
            {
                "onclick": function(){ window.open('http://www.tshsoft.com','_blank'); },
                "oninit": function(){  this.caption = this.viewer.tr('About PanoramaStudio...'); }
            }
        ],
        "onshow": function(){ var view1 = this.getItem('normalView'); if (view1){ view1.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular()) ? true : false; } var view2 = this.getItem('littlePlanetView'); if (view2){ view2.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular())?true:false; } var gyro = this.getItem('gyroItem'); if (gyro){ gyro.visible = this.viewer.gyroAvailable?true:false; }  this.update(); },
        "style": "background-color: rgba(255,255,255,0.8); box-shadow: 4px 4px 4px rgba(0,0,0,0.5); border-radius: 3px;"
    },
"events": {
        "id": "mainEvents",
        "onexit": function(){ this.viewer.action('hideMessage');  this.viewer.gyroWasEnabled = this.viewer.gyroAvailable&&this.viewer.gyroscopeEnabled();},
        "ongyroscopeavailable": function(available){ this.viewer.gyroAvailable = available; var o = this.get('gyrobutton'); if(!!o){ o.setVisible(available&&this.viewer.panoType()==0); } } ,
        "ongyroscopetoggle": function(enabled){ this.viewer.action('updateGyroButton'); },
        "oninit": function(){ var g = this.viewer.gallery(); this.viewer.hasGallery = ((!!g) && g.length>1); this.viewer.checkForGyroscope(); },
        "onplay": function(){ var o = this.get('playbutton'); if (!!o){ o.sbackup = o.skin; o.sabackup = o.skinactive; o.skin = 'shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,128,0,64,64,5,2,24,24,#444)'; o.skinactive = 'shadow(1,0,-1,rgba(255,255,255,0.3));copy(defaultSkin,128,0,64,64,6,3,24,24,#333)'; o.updateSkins(); } } ,
        "onresize": function(){ this.viewer.action('resizeMap');  },
        "onscenechanged": function(){ var o = this.get('gyrobutton'); if(!!o){ o.setVisible(this.viewer.gyroAvailable&&this.viewer.panoType()==0); this.viewer.gyroAvailable&&this.viewer.panoType()==0&&this.viewer.gyroWasEnabled&&o.onclick(); } if (this.viewer.isVRModeEnabled()){this.viewer.enableGyroscope(!0);}},
        "onstartaudio": function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.playskin; o.skinactive = o.playskinactive; o.updateSkins(); }} } ,
        "onstop": function(){ var o = this.get('playbutton'); if (!!o){ o.skin = o.sbackup; o.skinactive = o.sabackup; o.updateSkins(); } } ,
        "onstopaudio": function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.pauseskin; o.skinactive = o.pauseskinactive; o.updateSkins(); }} } ,
        "onuseswebgl": function(available){ this.viewer.webglAvailable = available; if (available){ var vr = this.get('vrButton'); vr&&vr.setVisible(true); } } 
    },
"settings": {
        "safeareamargin": "-8 -8 -8 -8"
    },
"translate": {
        "de": {
            "About PanoramaStudio...": "&Uuml;ber PanoramaStudio...",
            "Fullscreen": "Vollbild",
            "Gyroscope Control": "Gyroskop-Steuerung",
            "LittlePlanet View": "LittlePlanet-Ansicht",
            "Normal View": "Normale Ansicht"
        }
    }
}
}