angular.module('colorSelectorModule', [])
    .directive('colorSelector', colorSelectorDirective)
    .controller('colorSelectorCtrl', colorSelectorCtrl);

  function colorSelectorDirective() {
    return {
      scope: {},
      replace: true,
      controller: 'colorSelectorCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'colorSelector.view.partial.html'
    };
  }

  function colorSelectorCtrl() {
    /* jshint validthis: true */
    var vm = this;
    vm.showSelector = false;
    vm.colorOptions = [{
      name: 'White',
      hex: '#FFFFFF'
    }, {
      name: 'Blue',
      hex: '#19aeff'
    }, {
      name: 'Green',
      hex: '#9ade00'
    }, {
      name: 'Teal',
      hex: '#00A0A0'
    }, {
      name: 'Yellow',
      hex: '#ffff3e'
    }, {
      name: 'Red',
      hex: '#ff4141'
    }, {
      name: 'Gray',
      hex: '#bdcdd4'
    }, {
      name: 'Orange',
      hex: '#ff9900'
    }, {
      name: 'Tan',
      hex: '#eccd84'
    }, {
      name: 'Magenta',
      hex: '#d76cff'
    }, {
      name: 'Aqua',
      hex: '#00dddd'
    }, {
      name: 'Baby-Blue',
      hex: '#AAeeee'
    }];
    vm.colorSelected = vm.colorOptions[0];
  }
  
  angular.module('colorSelectorDemo', ['colorSelectorModule']);
