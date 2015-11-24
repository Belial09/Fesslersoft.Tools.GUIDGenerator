angular.module("uuid",[]).factory("rfc4122",function(){function r(r){return Math.random()*r}return{v4:function(){var n,a="";for(n=0;36>n;n++)a+=14===n?"4":19===n?"89ab".charAt(r(4)):8===n||13===n||18===n||23===n?"-":"0123456789abcdef".charAt(r(16));return a}}});

var app = angular.module('uuidgeneratorapp',['uuid']);
app.controller('uuidgeneratorappController', [
    '$scope',
    function($scope) {
        $scope.inputValue = '';
        $scope.uuidOption="2";
        $scope.tempValue='';

        $scope.CreateUuid = function CreateUuid() {
            $scope.tempValue = $scope.CreateUuidInternal().v4();
            switch(parseInt($scope.uuidOption))
            {
                case 1:
                    $scope.Uuid = $scope.tempValue.replace(/-/g,"");
                    break;
                case 2:
                    $scope.Uuid = $scope.tempValue;
                    
                    break;
                case 3:
                    $scope.Uuid = "{" + $scope.tempValue + "}";
                    break;
                case 4:
                    $scope.Uuid = "(" + $scope.tempValue + ")";
                    break;
            }
        };
        
        $scope.uuidOptionSetter = function(uuidOption) {
            $scope.uuidOption = uuidOption;
        };
        
        $scope.CreateUuidInternal = function(){function r(r){return Math.random()*r}return{v4:function(){var n,a="";for(n=0;36>n;n++)a+=14===n?"4":19===n?"89ab".charAt(r(4)):8===n||13===n||18===n||23===n?"-":"0123456789abcdef".charAt(r(16));return a}}};
        
    }
]);

