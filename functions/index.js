'use strict';
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// Sends user feedback to Slack channel.
const rp = require('request-promise');
exports.feedbackToSlack = functions.database.ref('/feedback/{feedbackId}').onWrite(event => {
    const snapshot = event.data;
    const feedback = snapshot.val();

    const message = `*${feedback.userName}* (User ID: ${feedback.userId}, Application ID: ${feedback.applicationId}) 
submitted ${feedback.hasOwnProperty('isPositive') ? (feedback.isPositive ? '*positive*' : '*negative*') : 'new'} feedback: 
>${feedback.text}
and *${feedback.isEmailAllowed ? 'gave' : 'denied'} permission* to send reply to ${feedback.email}`;
    return rp({
        method: 'POST',
        uri: functions.config().slack.webhook_url,
        body: {
            text: message
        },
        json: true
    });
});
