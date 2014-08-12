genomiconsApp.directive('iconBox', function($interval) {
    return function(scope, element, attrs) {
        var ib1 = element.find('.ib1'),
            ib2 = element.find('.ib2'),
            ib3 = element.find('.ib3'),
            time,
            stopTime;
        
        time = $interval(function() {
            console.log('hey')
        }, 5000);
        
        element.on('$destroy', function() {
            $interval.cancel(time);
        });
    };
});