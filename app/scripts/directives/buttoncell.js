"use strict";

angular.module("homeuiApp")
  .config(displayCellConfigProvider => {
    displayCellConfigProvider.addDisplayType("button", "button-cell", true);
  })
  .directive("buttonCell", function () {
    return {
      restrict: "EA",
      scope: false,
      require: "^cell",
      replace: true,
      template: "<button type='button' ng-click='cell.value = true' " +
        "ng-disabled='cell.readOnly' class='btn btn-primary cell cell-button'>{{ cell.name }}</button>"
    };
  });
