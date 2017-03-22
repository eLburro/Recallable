Scorer = function (jsonTrials) {
    var activityScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var init = function (jsonTrials){
        createTrials(jsonTrials);
    };
    
    setScores = function (trial) {
        $.map(activityScores, function (n, i) {
            return (n + trial.getScores()[i]);
        });
    };
    
    getActivityScores = function () {
        return activityScores;
    };
    
    var createTrials = function (jsonTrials) {
        //TODO
        console.log(jsonTrials);
    };
    
    init(jsonTrials);
};
