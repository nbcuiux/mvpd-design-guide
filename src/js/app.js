//menuNormalize
//= source/normalizeMenu.js

//menuNormalize
normalizeMenu();
window.onload = function() {
    //normalizeMenu();

    if (document.getElementById('process')) {
        startCircle.start();
        var steps = initSteps();
        $('#process').click(function(e) {
            if (e.metaKey) {
                steps.forEach(function(step) {
                    step.start();
                });
            }
        });
    }
};
