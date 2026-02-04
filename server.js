const http = require("http");

const html = `<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ERP Império</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 24px; }
    .box { max-width: 720px; margin: 0 auto; border: 1px solid #ddd; border-radius: 12px; padding: 20px; }
    h1 { margin: 0 0 8px; }
    .ok { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #e8fff0; border: 1px solid #b7f0c8; }
    .muted { color: #666; }
    code { background: #f6f6f6; padding: 2px 6px; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="box">
    <h1>ERP Império</h1>
    <div class="ok">✅ Publicado na Vercel</div>
    <p class="muted">Este é o “site base” só para tirar o erro 404. No próximo passo, eu coloco as telas (Login, Clientes, Produtos, Pedidos e Financeiro) aqui.</p>
    <p><b>Próximo passo:</b> eu vou te mandar os arquivos do ERP (prontos) e você vai colar do mesmo jeito.</p>
    <p class="muted">Dica: se você abriu e está vendo isso, a hospedagem já está funcionando.</p>
  </div>
</body>
</html>`;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}).listen(process.env.PORT || 3000);
