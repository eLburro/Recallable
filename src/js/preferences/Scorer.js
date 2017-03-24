Scorer = function () {
    var PREF_FILE_PATH = 'res/preferences.json';
    var activityScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var activityScoresTotal = [];
    var trials = [];

    var init = function (self) {
        loadTrials(self);
    };

    this.setScores = function (scores) {
        // TODO - not working as intended
        $.map(activityScores, function (n, i) {
            return (n + scores[i]);
        });
        console.log(scores);
        console.log(activityScores);
    };

    this.getActivityScores = function () {
        return activityScores;
    };

    var loadTrials = function (self) {
        $.getJSON(PREF_FILE_PATH, function (data) {
            activityScoresTotal = data.totals;
            trials = data.trials;
            var swiper = new Swiper(trials, self);
        });
    };

    init(this);
};
