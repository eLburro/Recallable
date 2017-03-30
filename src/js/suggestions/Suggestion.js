Suggestion = function () {
    var SUGGESTIONS_FILE_PATH = 'res/activities.json';

    var container;
    var suggestions = [];

    var init = function (self) {
        container = document.getElementById('result-container');
        loadSuggestions(self);
    };

    var renderSuggestions = function () {
        // get 3 random suggestions
        // TODO: Create good examples for showcase!
        var sugg1 = parseInt(Math.random() * (suggestions.length - 1) + 1);
        var sugg2 = parseInt(Math.random() * (suggestions.length - 1) + 1);
        var sugg3 = parseInt(Math.random() * (suggestions.length - 1) + 1);
        createSuggestionNode(suggestions[sugg1]);
        createSuggestionNode(suggestions[sugg2]);
        createSuggestionNode(suggestions[sugg3]);
    };

    var createSuggestionNode = function (suggestion) {
        var suggId = suggestion.id;
        var suggName = suggestion.name;
        var suggDesc = suggestion.desc;
        var suggDuration = suggestion.duration;
        var suggWeather = suggestion.weather;
        var suggTags = (suggestion.tags === '') ? [] : suggestion.tags.split('|');

        var containerNode = document.createElement('div');
        containerNode.setAttribute('class', 'result-box');
        container.append(containerNode);

        var imgNode = document.createElement('img');
        imgNode.setAttribute('src', 'img/suggestions/' + suggId + '.png');
        imgNode.setAttribute('width', '100%');
        imgNode.setAttribute('alt', '');
        containerNode.append(imgNode);

        var infoNode = document.createElement('div');
        infoNode.setAttribute('class', 'info-box');
        infoNode.innerHTML = suggName;
        containerNode.append(infoNode);

        var tagsNode = document.createElement('ul');
        tagsNode.setAttribute('class', 'info-tags');
        infoNode.append(tagsNode);

        var tagWeather = document.createElement('li');
        tagWeather.innerHTML = getWeather(suggWeather);
        tagsNode.append(tagWeather);

        var tagDuration = document.createElement('li');
        tagDuration.innerHTML = getDuration(suggDuration);
        tagsNode.append(tagDuration);

        for (var i = 0; i < suggTags.length; i++) {
            var tag = document.createElement('li');
            tag.innerHTML = suggTags[i];
            tagsNode.append(tag);
        }
    };

    var getWeather = function (id) {
        if (id === 0) {
            return 'Indoor';
        } else {
            return 'Outdoor';
        }
    };

    var getDuration = function (id) {
        if (id === 0) {
            return '2h';
        } else if (id === 1) {
            return 'Half a Day';
        } else {
            return 'Full Day';
        }
    };

    var loadSuggestions = function (self) {
        $.getJSON(SUGGESTIONS_FILE_PATH, function (data) {
            suggestions = data.activities;
            renderSuggestions();
        });
    };

    init(this);
};
