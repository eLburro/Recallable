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
    var activeZone;
    
    var init = function () {
        pin = document.getElementById('pin');
        dropZone = document.getElementById('drop-zone');
        
        renderBackground();
        attachEvents();
    };

    var renderBackground = function () {
        var newWidth = $(window).width();
        zoneBounds.w = newWidth - 52;
        zoneBounds.h = newWidth - 44;
        var newWidthStr = 'width:' + newWidth + 'px;';
        
        var img = document.createElement('img');
        img.setAttribute('style', newWidthStr);
        img.setAttribute('src', 'img/moodArea.png');
        dropZone.append(img);
    };

    var attachEvents = function () {
        pin.addEventListener('mousedown', function (e) {

            e.preventDefault();
            initX = pin.offsetLeft;
            initY = pin.offsetTop;
            firstX = e.pageX;
            firstY = e.pageY;

            pin.addEventListener('mousemove', dragIt, false);

            window.addEventListener('mouseup', function () {
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

            window.addEventListener('touchend', function (e) {
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

        if (newX >= zoneBounds.x && newX <= (zoneBounds.x + zoneBounds.w)) {
            pin.style.left = newX + 'px';
        }

        if (newY >= zoneBounds.y && newY <= (zoneBounds.y + zoneBounds.h)) {
            pin.style.top = newY + 'px';
        }
        
        setActiveZone(newDim);
    };
    
    var setActiveZone = function (pos) {
        // TODO: hard code some shit
  
        // Zone A
        if (pos.x >= 0 && pos.x <= 0 && pos.y >= 0 && pos.y <= 0) {
            
        } else if (false) {
            
        }
    };

    init();
};
