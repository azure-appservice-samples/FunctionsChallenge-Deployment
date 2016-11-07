module.exports = function (context, data) {
    context.log('Webhook was triggered!');

    context.res = {
      SubscriptionId: process.env.SubscriptionId
    };
    
    context.done();
}
