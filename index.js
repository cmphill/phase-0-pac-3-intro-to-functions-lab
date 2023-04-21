function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(conversation) {
    
    const capitals = (conversation === conversation.toUpperCase()); 
    
    
    let response;
    
    if (conversation === "Let's have dinner together!") {
        response = "I would love to!"
    } else if (capitals === false) {
        response = "I can't hear you!"
    } else if (capitals === true) {
        response = "YES INDEED!"
    } else {
        response = "nothing worked"
    } 
      return response
      console.log(response)
    }
    