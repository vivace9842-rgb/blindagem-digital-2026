// Configurações de Automação MFRGS INOVAÇÕES
const SUPABASE_URL = 'https://ffcbblosqlbscygikvij.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Sua chave anon aqui

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Função "Erro Zero" para carregar produtos
async function fetchProducts() {
    try {
        const { data, error } = await _supabase.from('products').select('*');
        if (error) throw error;
        return data;
    } catch (err) {
        console.error("Falha na automação de busca:", err);
        return null;
    }
}

// Função para registrar interesse (Fábrica de Gratidão/Leads)
async function registerInterest(email) {
    const { data, error } = await _supabase
        .from('sales')
        .insert([{ customer_email: email, status: 'interested' }]);
    
    if (!error) alert("MFRGS: Recebemos seu interesse. Em breve você receberá um e-mail de acolhimento.");
}
