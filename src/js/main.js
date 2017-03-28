$(function () {

    toggleFullScreen = function () {
        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
        } else {
            cancelFullScreen.call(doc);
        }
    };

    toggleFullScreen();

    getPrediction = function () {
        const API_KEY = '';
        const projectName = '';
        const projectId = '';
        const google = require('googleapis')

        google.auth.getApplicationDefault((err, authClient) => {
            if (err) {
                return;
            }

            if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                authClient = authClient.createScoped([
                    'https://www.googleapis.com/auth/devstorage.read_write',
                    'https://www.googleapis.com/auth/prediction'
                ]);
            }

            google.prediction('v1.6').trainedmodels.predict({
                auth,
                project: projectName,
                id: projectId,
                resource: {

                    input: {
                        csvInstance: ['some string goes here that you want to test against']
                    }
                }
            }, (err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log(res);
            });
        });
    };
});