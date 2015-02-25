(function(){

    var module = angular.module("httpModule",[]);

    module.service("httpMonitor", ["$httpProvider", function($httpProvider){
        
        var openCalls = 0;
        var allCalls = 0;
        
        $httpProvider.interceptors.push(function() {
            return {
                'request': function(config) {
                    openCalls++;
                    allCalls++;
                    return config;
                },

                'response': function(response) {
                    openCalls--;
                    return response;
                }
            };
        });
    
    
    return {
        "openCalls": openCalls,
        "allCalls": allCalls    
    }
    
    }]);
})();