'use strict';

/*
 * github-action-test-02
 * (c) Copyright 2017-2022 Mauricio Lauffer
 * Licensed under the MIT license. See LICENSE file in the project root for full license information.
 */

sap.ui.define([
  'sap/ui/core/library',
  'sap/m/library'
], function() {
  /**
   * OpenUI5 library: openui5.tour - x8
   *
   * @namespace
   * @name openui5.tour
   * @author Mauricio Lauffer
   * @version 0.1.21
   * @public
   */
  return sap.ui.getCore().initLibrary({
    name: 'openui5.tour',
    dependencies: [
      'sap.ui.core',
      'sap.m'
    ],
    controls: [
      'openui5.tour.Tour',
      'openui5.tour.TourStep'
    ],
    noLibraryCSS: true,
    version: '0.1.21'
  });
});
