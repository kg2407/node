const path = require("path")
function getMessages(req, res) {
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // )
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Elon Musk",
  })
}

function postMessage(req, res) {
  console.log("Updating Messages ...")
}

module.exports = {
  getMessages,
  postMessage,
}
