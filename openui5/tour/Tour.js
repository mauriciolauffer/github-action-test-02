/*
 * openui5-tour
 * (c) Copyright 2017-2021 Mauricio Lauffer
 * Licensed under the MIT license. See LICENSE file in the project root for full license information.
 */
sap.ui.define(["sap/ui/core/Control"],function(t){"use strict";const e=t.extend("openui5.tour.Tour",{metadata:{library:"openui5.tour",properties:{},defaultAggregation:"steps",aggregations:{steps:{type:"openui5.tour.TourStep",multiple:true,singularName:"step"}},events:{started:{parameters:{}},completed:{parameters:{}},nextStep:{parameters:{}},previousStep:{parameters:{}}}}});e.prototype.init=function(){this._currentStepIndex=0};e.prototype.start=function(){this._setFirstStep();this._setLastStep();this._setCurrentStepIndex(0);this._goToStep(this._getCurrentStepIndex());this.fireStarted()};e.prototype.complete=function(){this.getSteps()[this._getCurrentStepIndex()].close();this._setCurrentStepIndex(0);this.fireCompleted()};e.prototype.nextStep=function(){const t=this._getCurrentStepIndex()+1;this._goToStep(t);this.fireNextStep()};e.prototype.previousStep=function(){const t=this._getCurrentStepIndex()-1;this._goToStep(t);this.firePreviousStep()};e.prototype._getCurrentStepIndex=function(){return this._currentStepIndex};e.prototype._setCurrentStepIndex=function(t){this._currentStepIndex=t};e.prototype._isValidStepIndex=function(t){if(!this.getSteps()[t]){throw new Error("Tour does not contain step index #"+t)}return true};e.prototype._goToStep=function(t){if(this._isValidStepIndex(t)){this.getSteps()[this._getCurrentStepIndex()].close();this._setCurrentStepIndex(t);this.getSteps()[t].open()}};e.prototype._setFirstStep=function(){const t=0;if(this._isValidStepIndex(t)){this.getSteps()[t].setIsFirstStep(true)}};e.prototype._setLastStep=function(){const t=this.getSteps().length-1;if(this._isValidStepIndex(t)){this.getSteps()[t].setIsLastStep(true)}};return e});