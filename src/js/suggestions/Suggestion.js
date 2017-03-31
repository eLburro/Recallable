Suggestion = function () {
    var SUGGESTIONS_FILE_PATH = 'res/activities_1.json';

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

        createSuggestionNode(suggestions[0]);
        createSuggestionNode(suggestions[1]);
        createSuggestionNode(suggestions[2]);

        attachEvents();
    };

    var attachEvents = function () {
        $('.info-box').on('click', function (e) {
            var id = $(this).attr('id');
            var descBox = $('#' + id + '-desc');
            $(this).toggleClass('open');
            descBox.toggle();
        });

        $('.info-heart').on('click', function (e) {
            e.stopPropagation();
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                $(this).attr('src', 'img/icons/heart_white_small.png');

            } else {
                $(this).addClass('selected');
                $(this).attr('src', 'img/icons/heart_red_small.png');
            }
        });
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
        infoNode.setAttribute('id', 'act-' + suggId);
        infoNode.innerHTML = suggName;
        containerNode.append(infoNode);

        var heart = document.createElement('img');
        heart.setAttribute('src', 'img/icons/heart_white_small.png');
        heart.setAttribute('class', 'info-heart');
        infoNode.append(heart);

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

        var descNode = document.createElement('div');
        descNode.setAttribute('class', 'info-desc');
        descNode.setAttribute('id', 'act-' + suggId + '-desc');
        container.append(descNode);

        var descTitleNode = document.createElement('h3');
        descTitleNode.setAttribute('class', 'info-desc-title');
        descTitleNode.innerHTML = 'Description';
        descNode.append(descTitleNode);

        var descTextNode = document.createElement('p');
        descTextNode.setAttribute('class', 'info-desc-text');
        descTextNode.innerHTML = suggDesc;
        descNode.append(descTextNode);

        var btn = document.createElement('button');
        btn.setAttribute('class', 'btn btn-danger book-btn');
        btn.innerHTML = 'Book it';
        descNode.append(btn);

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
