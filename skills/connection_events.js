module.exports = function(controller) {

  controller.on('hello', function(bot, message) {

    // a new session with an unknown user has begun
    //bot.reply(message, 'Hello! I am a Botkit bot! Please configure me to do something useful.');
    controller.studio.run(bot, 'hello', message.user, message.channel);
  });

  controller.on('welcome_back', function(bot, message) {

    // a known user has started a new, fresh session
    //bot.reply(message, 'Hello again. I still need to be configured.');
    controller.studio.run(bot, 'welcome_back', message.user, message.channel);

  });

  controller.on('reconnect', function(bot, message) {

    // the connection between the client and server experienced a disconnect/reconnect
    //bot.reply(message, 'Some sub-space interference just caused our connection to be interrupted. But I am back now.');

  });


}
