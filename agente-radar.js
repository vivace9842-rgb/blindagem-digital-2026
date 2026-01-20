const { chromium } = require('playwright');

// MFRGS INOVAÇÕES - Radar Diferenciado (Urgência + Acolhimento)
const SINAIS_SOCORRO = [
  'fui hackeado no whatsapp',
  'como recuperar instagram invadido',
  'perdi acesso ao meu banco',
  'segurança digital 2026'
];

async function iniciarSuperRadar() {
    console.log("🛡️ EMPATHIA™: Sentinela Diferenciado Iniciado...");
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    for (const termo of SINAIS_SOCORRO) {
        console.log(`🔍 Escutando a rede por: ${termo}`);
        // Busca focada em quem está pedindo ajuda
        await page.goto(`https://www.google.com/search?q=${encodeURIComponent(termo)}`);
        
        const leads = await page.$$eval('h3', nodes => nodes.map(n => n.innerText));
        console.log(`✅ ${leads.length} oportunidades de acolhimento encontradas.`);
    }

    await browser.close();
}

iniciarSuperRadar();
