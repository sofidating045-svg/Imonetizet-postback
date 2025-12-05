exports.handler = async (event) => {
  const params = event.queryStringParameters;
index.html
postback.js
  const botToken = "8479557204:AAFl7evg5QA_0Q5vLxpyWU8KCJSxSfnAfug";
  const chatId = "-1003319175155";

  const campaign = params.campaign || "-";
  const subid = params.sub_id_1 || "-";
  const country = params.country || "-";
  const payout = params.payout || "-";
  const platform = params.platform || "-";
  const ip = params.ip || "-";

  const message =
    "🏢 : " + campaign + "\n" +
    "🦹 : " + subid + "\n" +
    "🌏 : " + country + "\n" +
    "💵 : " + payout + "\n" +
    "📱 : " + platform + "\n" +
    "📍 : https://scamalytics.com/ip/" + ip;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  const fetch = (await import("node-fetch")).default;
  await fetch(url);

  return {
    statusCode: 200,
    body: "OK"
  };
};
