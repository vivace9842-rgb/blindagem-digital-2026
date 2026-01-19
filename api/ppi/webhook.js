// Motor de Automação MFRGS - Webhook
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, status, name } = req.body;

    // Se o status for 'paid' ou 'approved' (depende da plataforma)
    if (status === 'paid' || status === 'approved') {
      
      // Comando para o Supabase: Inserir venda confirmada
      const { data, error } = await supabase
        .from('sales')
        .insert([{ 
            customer_email: email, 
            customer_name: name, 
            status: 'venda_confirmada' 
        }]);

      if (!error) {
        // Aqui entra a automação de e-mail (futuro)
        return res.status(200).json({ message: 'Acesso Liberado!' });
      }
    }
    return res.status(400).json({ message: 'Pagamento não processado' });
  } else {
    res.status(405).send('Método não permitido');
  }
}
