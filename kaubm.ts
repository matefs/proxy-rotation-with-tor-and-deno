const url = "https://servicespub.prod.api.aws.grupokabum.com.br/ecommerce-rma/v1/genesys/conversation";

const formData = new FormData();
formData.append("customer_id", "ABC123XYZ789000000000000000000000");
formData.append("customer_session", "ef456gh789ij123kl456mn789op01234");
formData.append("store_code", "001");
formData.append("subject", "Suporte Tecnico");
formData.append("question_answer_id", "10");
formData.append("customer_cellphone", "11988887777");
formData.append("order_code", "00000001");
formData.append("is_question_answered", "false");
formData.append("customer_problem", "Gostaria de solicitar o reenvio da fatura referente ao meu último pedido, pois ainda não recebi o e-mail de confirmação do sistema.");

try {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "accept": "application/json, text/plain, */*",
      "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "origin": "https://www.kabum.com.br",
      "referer": "https://www.kabum.com.br/",
      "sec-ch-ua": '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"
    },
    body: formData
  });

  const status = response.status;
  const text = await response.text();

  console.log(`Status: ${status}`);
  console.log("Resposta:", text);

} catch (error) {
  console.error("Erro fatal:", error);
}
