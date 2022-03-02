'use strict';

/*
 * ${copyright}
 */

sap.ui.define([
  'sap/ui/core/library',
  'sap/m/library'
], function() {
  /**
   * OpenUI5 library: openui5.tour - x4
   *
   * @namespace
   * @name openui5.tour
   * @author Mauricio Lauffer
   * @version ${version}
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
    version: '${version}'
  });
});
