let handler = function (m) {
  // this.sendContact(m.chat, '51996897568', 'MERRY', m)
  this.sendContact(m.chat, '524444066685', 'LEONEL🐰', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
