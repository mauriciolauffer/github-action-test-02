//@ui5-bundle openui5/tour/library-preload.js
sap.ui.require.preload({
	"openui5/tour/Tour.js":function(){"use strict";
/*
 * github-action-test-02
 * (c) Copyright 2017-2022 Mauricio Lauffer
 * Licensed under the MIT license. See LICENSE file in the project root for full license information.
 */sap.ui.define(["sap/ui/core/Control"],function(t){const e=t.extend("openui5.tour.Tour",{metadata:{library:"openui5.tour",properties:{},defaultAggregation:"steps",aggregations:{steps:{type:"openui5.tour.TourStep",multiple:true,singularName:"step"}},events:{started:{parameters:{}},completed:{parameters:{}},nextStep:{parameters:{}},previousStep:{parameters:{}}}}});e.prototype.init=function(){this._currentStepIndex=0};e.prototype.start=function(){this._setFirstStep();this._setLastStep();this._setCurrentStepIndex(0);this._goToStep(this._getCurrentStepIndex());this.fireStarted()};e.prototype.complete=function(){this.getSteps()[this._getCurrentStepIndex()].close();this._setCurrentStepIndex(0);this.fireCompleted()};e.prototype.nextStep=function(){const t=this._getCurrentStepIndex()+1;this._goToStep(t);this.fireNextStep()};e.prototype.previousStep=function(){const t=this._getCurrentStepIndex()-1;this._goToStep(t);this.firePreviousStep()};e.prototype._getCurrentStepIndex=function(){return this._currentStepIndex};e.prototype._setCurrentStepIndex=function(t){this._currentStepIndex=t};e.prototype._isValidStepIndex=function(t){if(!this.getSteps()[t]){throw new Error("Tour does not contain step index #"+t)}return true};e.prototype._goToStep=function(t){if(this._isValidStepIndex(t)){this.getSteps()[this._getCurrentStepIndex()].close();this._setCurrentStepIndex(t);this.getSteps()[t].open()}};e.prototype._setFirstStep=function(){const t=0;if(this._isValidStepIndex(t)){this.getSteps()[t].setIsFirstStep(true)}};e.prototype._setLastStep=function(){const t=this.getSteps().length-1;if(this._isValidStepIndex(t)){this.getSteps()[t].setIsLastStep(true)}};return e});
},
	"openui5/tour/TourStep.js":function(){"use strict";
/*
 * github-action-test-02
 * (c) Copyright 2017-2022 Mauricio Lauffer
 * Licensed under the MIT license. See LICENSE file in the project root for full license information.
 */sap.ui.define(["sap/m/Button","sap/m/ButtonType","sap/m/PlacementType","sap/m/ResponsivePopover","sap/ui/core/Control"],function(t,e,o,i,n){const p=n.extend("openui5.tour.TourStep",{metadata:{library:"openui5.tour",properties:{title:{type:"string",group:"Appearance",defaultValue:""},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""},target:{type:"object",group:"Behavior",defaultValue:""},placement:{type:"sap.m.PlacementType",group:"Behavior",defaultValue:o.PreferredTopOrFlip}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:false},_popup:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}}}});p.prototype.init=function(){this.setIsFirstStep(false);this.setIsLastStep(false)};p.prototype.exit=function(){};p.prototype.open=function(){if(!this.getTarget()){throw new Error("The step you are trying to open has no target assigned.")}if(!this.getAggregation("_popup")){this.setAggregation("_popup",this._getPopup())}this.getTarget().getDomRef().scrollIntoView();this.getAggregation("_popup").openBy(this.getTarget())};p.prototype.close=function(){if(this.getAggregation("_popup")&&this.getAggregation("_popup").isOpen()){this.getAggregation("_popup").close()}};p.prototype.setIsFirstStep=function(t){this._isFirstStep=t};p.prototype.setIsLastStep=function(t){this._isLastStep=t};p.prototype._setFirstStep=function(t){t.getBeginButton().setEnabled(false)};p.prototype._setLastStep=function(t){this._setFinishButton(t)};p.prototype._getPopup=function(){if(this.getContent()){this.getContent().addStyleClass("sapUiSmallMargin")}const t=this._createPopup(this.getId(),this.getPlacement(),this.getTitle(),this.getIcon(),this.getContent());this._setPreviousButton(t);if(this._isFirstStep){this._setFirstStep(t)}if(this._isLastStep){this._setLastStep(t)}else{this._setNextButton(t)}return t};p.prototype._setFinishButton=function(t){const o=this._createFinishButton(t.getId(),this._finishStep.bind(this));t.setEndButton(o);o.setType(e.Emphasized)};p.prototype._setNextButton=function(t){const o=this._createNextButton(t.getId(),this._nextStep.bind(this));t.setEndButton(o);o.setType(e.Emphasized)};p.prototype._setPreviousButton=function(t){const e=this._createPreviousButton(t.getId(),this._previousStep.bind(this));t.setBeginButton(e)};p.prototype._createPopup=function(t,e,o,n,p){return new i(t+"-popover",{modal:true,placement:e,title:o,icon:n,content:p})};p.prototype._createFinishButton=function(e,o){return new t(e+"-finishButton",{icon:"sap-icon://accept",text:"Done",press:o})};p.prototype._createNextButton=function(e,o){return new t(e+"-nextButton",{icon:"sap-icon://open-command-field",text:"Next",press:o})};p.prototype._createPreviousButton=function(e,o){return new t(e+"-previousButton",{icon:"sap-icon://close-command-field",text:"Back",press:o})};p.prototype._nextStep=function(){this.getParent().nextStep()};p.prototype._previousStep=function(){this.getParent().previousStep()};p.prototype._finishStep=function(){this.getParent().complete()};return p});
},
	"openui5/tour/library.js":function(){"use strict";
/*
 * github-action-test-02
 * (c) Copyright 2017-2022 Mauricio Lauffer
 * Licensed under the MIT license. See LICENSE file in the project root for full license information.
 */sap.ui.define(["sap/ui/core/library","sap/m/library"],function(){return sap.ui.getCore().initLibrary({name:"openui5.tour",dependencies:["sap.ui.core","sap.m"],controls:["openui5.tour.Tour","openui5.tour.TourStep"],noLibraryCSS:true,version:"0.1.10"})});
},
	"openui5/tour/manifest.json":'{"sap.app":{"id":"openui5.tour","type":"library","applicationVersion":{"version":"0.1.10"},"title":"An OpenUI5 library to give a guided tour through your UI5 webapp."},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"dependencies":{"minUI5Version":"1.30.0","libs":{"sap.ui.core":{},"sap.m":{"lazy":true}}},"contentDensities":{"compact":true,"cozy":true}}}'
});
