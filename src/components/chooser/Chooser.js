Chooser = function () {
    var DIR_PREF_PATH = '../img/preferences/';
    var DIR_ICON_PATH = '../img/icons/';
    var MAX_IMG = 4;
    
    var mc;
    var el;
    var img;
    var currentImg = 1;

    var init = function () {
        el = document.getElementById('chooser');
        mc = new Hammer(el);

        attachEvents();
        renderNodes();
        displayImg(currentImg);
    };

    var attachEvents = function () {
        mc.on('swipeleft swiperight', function (ev) {
            showNext();
        });
    };

    var renderNodes = function () {
        el.innerHTML = '';
        var container = document.createElement('div');
        container.setAttribute('class', 'chooser-container');
        el.append(container);
        
        img = document.createElement('img');
        container.append(img);
        
        var footer = document.createElement('div');
        footer.setAttribute('class', 'chooser-footer');
        
        var btnNo = document.createElement('img');
        btnNo.setAttribute('class', 'img-btn');
        btnNo.setAttribute('src', DIR_ICON_PATH + 'cross_50x50.png');
        btnNo.onclick = function(ev) {
            showNext();
        };
        footer.append(btnNo);
        
        var btnYes = document.createElement('img');
        btnYes.setAttribute('class', 'img-btn');
        btnYes.setAttribute('src', DIR_ICON_PATH + 'heart_50x50.png');
        btnYes.onclick = function(ev) {
            showNext();
        };
        footer.append(btnYes);
        
        el.append(footer);
        
        var progressBarLeft = document.createElement('div');
        progressBarLeft.setAttribute('class', 'chooser-progress');
        progressBarLeft.setAttribute('style', 'left:0;');
        el.append(progressBarLeft);
        
        var progressBarRight = document.createElement('div');
        progressBarRight.setAttribute('class', 'chooser-progress');
        progressBarRight.setAttribute('style', 'right:0;');
        el.append(progressBarRight);
    };
    
    var displayImg = function (imgNr) {
        img.setAttribute('src', DIR_PREF_PATH + imgNr + '.png');
    };

    var showNext = function () {
        if (updateProgress()) {
            currentImg++;
            displayImg(currentImg);

        } else {
            // TODO: Done!! END process!!!
        }
    };

    var updateProgress = function () {
        if (MAX_IMG === currentImg) {
            return false;
        } else {
            var progress = 100 / MAX_IMG * currentImg;
            var bars = $('.chooser-progress');
            bars.each(function(){
               $(this).css('height', progress + '%');
            });

            return true;
        }
    };

    init();
};
