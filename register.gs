function sendReport(e) {
  var rs = '';

  var name = e.namedValues['お名前'];
  var email = e.namedValues['メールアドレス'];

  rs = "name: "+name+"\nemail: "+email;

  MailApp.sendEmail(email, "会員登録ありがとうございます。", rs);
}
