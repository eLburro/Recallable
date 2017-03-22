Trial = function (params) {
    var id;
    var activityScore = [];
    var name = '';
    var description = '';

    var init = function (params) {
        id = params.id;
        name = params.name;
        activityScore = params.scores;
        description = params.description;
    };

    getId = function() {
        return id;
    };
    
    getName = function() {
        return name;
    };
    
    getDescription = function() {
        return description;
    };
    
    getScores = function() {
        return activityScore;
    };
    
    init(params);
};
