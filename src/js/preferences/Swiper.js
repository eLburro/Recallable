Swiper = function (trials, scorerObj) {
    var DIR_PREF_PATH = 'img/preferences/';
    var DIR_ICON_PATH = 'img/icons/';

    var mc;
    var el;
    var img;
    var imgText;
    var container;

    var scorerObj;

    var max_trials = 0;
    var currentTrialNr = 0;
    var currentTrial;
    var trialsArray = [];

    var init = function (trials, scorerObj) {
        el = document.getElementById('swiper');
        mc = new Hammer(el);

        this.scorerObj = scorerObj;
        trialsArray = trials;
        max_trials = trials.length;

        attachEvents();
        renderNodes();
        setCurrentTrial();
        displayImg();
        
        displayOverlay();
    };

    var attachEvents = function () {
        mc.on('swipeleft', function (ev) {
            swipeNo();
        });
        mc.on('swiperight', function (ev) {
            swipeYes();
        });
    };

    var setCurrentTrial = function () {
        currentTrial = trialsArray[currentTrialNr];
    };

    var renderNodes = function () {
        el.innerHTML = '';
        container = document.createElement('div');
        container.setAttribute('class', 'swiper-container');
        el.append(container);

        imgText = document.createElement('span');
        imgText.setAttribute('class', 'swiper-imgText');
        container.append(imgText);

        img = document.createElement('img');
        img.setAttribute('class', 'img-preference');
        container.append(img);
        
        var labelYes = document.createElement('div');
        labelYes.setAttribute('class', 'swiper-label swiper-label-yes');
        labelYes.innerHTML = 'YES';
        container.append(labelYes);
        
        var labelNo = document.createElement('div');
        labelNo.setAttribute('class', 'swiper-label swiper-label-no');
        labelNo.innerHTML = 'NO';
        container.append(labelNo);

        var footer = document.createElement('div');
        footer.setAttribute('class', 'swiper-footer');

        var btnNo = document.createElement('img');
        btnNo.setAttribute('class', 'img-btn');
        btnNo.setAttribute('src', DIR_ICON_PATH + 'cross_50x50.png');
        btnNo.onclick = function (ev) {
            swipeNo();
        };
        footer.append(btnNo);

        var btnYes = document.createElement('img');
        btnYes.setAttribute('class', 'img-btn');
        btnYes.setAttribute('src', DIR_ICON_PATH + 'heart_50x50.png');
        btnYes.onclick = function (ev) {
            swipeYes();
        };
        footer.append(btnYes);

        el.append(footer);

        var progressBarLeft = document.createElement('div');
        progressBarLeft.setAttribute('class', 'swiper-progress');
        progressBarLeft.setAttribute('style', 'left:0;');
        el.append(progressBarLeft);

        var progressBarRight = document.createElement('div');
        progressBarRight.setAttribute('class', 'swiper-progress');
        progressBarRight.setAttribute('style', 'right:0;');
        el.append(progressBarRight);
    };

    var displayImg = function () {
        var trialId = currentTrial.id;
        var trialDesc = currentTrial.desc;
        imgText.innerHTML = trialDesc;
        img.setAttribute('src', DIR_PREF_PATH + trialId + '.jpg');
    };

    var showNext = function () {
        scorerObj.setScores(currentTrial.scores);
        
        // remove classes
        container.classList.remove('flash-green');
        container.classList.remove('flash-red');

        if (updateProgress()) {
            currentTrialNr++;
            setCurrentTrial();
            displayImg();

        } else {
            // TODO: Done!! END process!!! and send scores to machine learning
            el.innerHTML = 'DONE!';
            mc.off('swipeleft swiperight');
            console.log('Done!');
            console.log(scorerObj.getActivityScores());
        }
    };

    var updateProgress = function () {
        if (max_trials === (currentTrialNr + 1)) {
            return false;
        } else {
            var progress = 100 / max_trials * (currentTrialNr + 1);
            var bars = $('.swiper-progress');
            bars.each(function () {
                $(this).css('height', progress + '%');
            });

            return true;
        }
    };

    var swipeYes = function () {
        container.classList.add('flash-green');
        var label = $('.swiper-label-yes');
        label.show({'duration':100, 'easing': 'linear'});
        
        setTimeout(function() {
            label.hide();
            showNext();
        }, 1000);
    };

    var swipeNo = function () {
        container.classList.add('flash-red');
        var label = $('.swiper-label-no');
        label.show({'duration':100, 'easing': 'linear'});
        
        setTimeout(function() {
            label.hide();
            showNext();
        }, 1000);
    };
    
    var displayOverlay = function () {
        var overlayImg = $('.overlay img');
        var overlay = $('.overlay');
        overlayImg.attr('src', 'img/overlays/overlay_preference.png');
        overlay.show();
        
        overlay.on('click', function (e) {
            $(this).hide();
        });
    };

    init(trials, scorerObj);
};
