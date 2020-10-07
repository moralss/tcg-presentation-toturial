
// songDecoder("WUBWEWUBAREWUBAREWUBWUBTHEWUBCMAPIONSWUBMYWUBFRIENDWUB")
// WE ARE THE CHAMPIONS



const songDecoder = (sentence) => {
  return sentence.split("WUB")
    .filter(word => word.length !== 0).join(" ")
}


const songDecoder = (sentence) => {
  return sentence.replace(/WUB/gi, " ")
}



console.log(songDecoder("WUBWEWUBAREWUBAREWUBWUBTHEWUBCMAPIONSWUBMYWUBFRIENDWUB"))




