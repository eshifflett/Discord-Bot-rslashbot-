//Required Discord API stuff
const Discord = require('discord.js');
const client = new Discord.Client();

//Prompt for user to inform that the bot is online
client.once('ready', () => {
    console.log('rslashbot is online! :)');
});

//Function that returns random int between 0 and max
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

//Processes any user input
client.on('message', message => {
    //These first two lines take the input string and split it into a char array
    var input = message.content;
    var chars = input.split('');

    //String that just contains a basic link to reddit
    var link = "https://www.reddit.com";
    //Fun messaged to go along with link
    var messages = ["Enjoy!\n", "You're welcome!\n", "Stay safe out there...\n", "Shouldn't you be doing homework?\n", 
                        "Don't be a lurker!\n", "Just stay away from the politics...\n"];

    //Checking for valid input and messaging reddit link if so
    if(chars[0] == '/' && chars[1] == 'r' && chars[2] == '/'){
        var out = messages[getRandomInt(6)] + link + input;
        message.reply(out);
    } else if (chars[0] == 'r' && chars[1] == '/') {
        var out = messages[getRandomInt(6)] + link + "/" + input;
        message.reply(out);
    }
});

client.login("Key removed");