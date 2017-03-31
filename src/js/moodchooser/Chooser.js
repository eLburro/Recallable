Chooser = function () {
    var pin;
    var dropZone;
    var initX;
    var initY;
    var firstX;
    var firstY;
    var zoneBounds = {
        'x': 2,
        'y': -6,
        'w': 0,
        'h': 0
    };

    var moodImg;
    var moodMap;
    var zoneText;
    var bar;

    var init = function () {
        pin = document.getElementById('pin');
        dropZone = document.getElementById('drop-zone');
        moodMap = document.getElementById('moodMap');
        moodImg = document.getElementById('moodImg');
        zoneText = document.getElementById('zone-text');
        bar = $('#bar img');

        var newWidth = $(window).width();
        zoneBounds.w = newWidth - 52;
        zoneBounds.h = newWidth - 44;

        attachEvents();
        displayOverlay();
    };

    var attachEvents = function () {
        pin.addEventListener('mousedown', function (e) {

            e.preventDefault();
            initX = pin.offsetLeft;
            initY = pin.offsetTop;
            firstX = e.pageX;
            firstY = e.pageY;

            pin.addEventListener('mousemove', dragIt, false);

            dropZone.addEventListener('mouseup', function () {
                pin.removeEventListener('mousemove', dragIt, false);
            }, false);

        }, false);

        pin.addEventListener('touchstart', function (e) {

            e.preventDefault();
            initX = pin.offsetLeft;
            initY = pin.offsetTop;
            var touch = e.touches;
            firstX = touch[0].pageX;
            firstY = touch[0].pageY;

            pin.addEventListener('touchmove', swipeIt, false);

            dropZone.addEventListener('touchend', function (e) {
                e.preventDefault();
                pin.removeEventListener('touchmove', swipeIt, false);
            }, false);

        }, false);
    };

    var dragIt = function (e) {
        var newDim = {
            'x': initX + e.pageX - firstX,
            'y': initY + e.pageY - firstY
        };
        moveIt(newDim);
    };

    var swipeIt = function (e) {
        var contact = e.touches;
        var newDim = {
            'x': initX + contact[0].pageX - firstX,
            'y': initY + contact[0].pageY - firstY
        };
        moveIt(newDim);
    };

    var moveIt = function (newDim) {
        var newX = newDim.x;
        var newY = newDim.y;
        var inBound = false;

        if (newX >= zoneBounds.x && newX <= (zoneBounds.x + zoneBounds.w)) {
            pin.style.left = newX + 'px';
            inBound = true;
        }

        if (newY >= zoneBounds.y && newY <= (zoneBounds.y + zoneBounds.h)) {
            pin.style.top = newY + 'px';
            inBound = true;
        }

        if (inBound) {
            setActiveZone(newDim);
        }
    };

    var setActiveZone = function (pos) {
        var startY = $(window).height() - $('#moodImg').height();
        var posX = pos.x + 25;
        var posY = 32 + startY + pos.y;
        pin.classList.add('drag-stop');
        var zone = document.elementFromPoint(posX, posY);
        pin.classList.remove('drag-stop');

        if (zone !== undefined && zone !== null) {
            var zoneId = zone.getAttribute('id');
            if (zoneId === 'A' || zoneId === 'B' || zoneId === 'C' ||
                    zoneId === 'D' || zoneId === 'E' || zoneId === 'F' ||
                    zoneId === 'moodImg') {

                if (zoneId === 'moodImg')
                    zoneId = 'none';
                moodImg.setAttribute('src', 'img/moods/' + zoneId + '.png');
                updateText(zoneId, posX, posY);
            }
        }
    };

    var updateText = function (zoneId, posX, posY) {
        // calculate the distance
        var a = 25 - posX;
        var b = 645 - posY;
        var c = parseInt(Math.sqrt(a * a + b * b) - 180);
        var distance = (c <= 0) ? 1 : c;
        distance = (distance >= 200) ? 100 : distance / 2;
        // this results in a distance between 0.5 and 100
                
        var section = 1;
        if (distance >= 33 && distance < 66) {
            section = 2;
        } else if (distance >= 66) {
            section = 3
        }

        switch (zoneId) {
            case 'A':
                zoneText.innerHTML = 'as usual';
                bar.attr('src', 'img/moods/bar/A1.png');
                break;
            case 'B':
                zoneText.innerHTML = 'sporty';
                bar.attr('src', 'img/moods/bar/B' + section + '.png');
                break;
            case 'C':
                zoneText.innerHTML = 'exciting';
                bar.attr('src', 'img/moods/bar/C' + section + '.png');
                break;
            case 'D':
                zoneText.innerHTML = 'refreshing';
                bar.attr('src', 'img/moods/bar/D' + section + '.png');
                break;
            case 'E':
                zoneText.innerHTML = 'cosy';
                bar.attr('src', 'img/moods/bar/E' + section + '.png');
                break;
            case 'F':
                zoneText.innerHTML = 'relaxing';
                bar.attr('src', 'img/moods/bar/F' + section + '.png');
                break;
        }
        if (zoneId !== 'none') {
            $('body').attr('class', 'zone-' + zoneId);
        }
    };

    var displayOverlay = function () {
        var toggle = false;
        var overlayImg = $('.overlay img');
        var overlay = $('.overlay');
        overlayImg.attr('src', 'img/overlays/overlay_chooser_1.png');
        overlay.show();
        
        overlay.on('click', function (e) {
            if (toggle) {
                $(this).hide();
                return;
            } else {
                overlayImg.attr('src', 'img/overlays/overlay_chooser_2.png');
                toggle = true;
            }
        });
    };

    init();
};