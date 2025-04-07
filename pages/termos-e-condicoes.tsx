import React from 'react';

const TermosECondicoes = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Termos e Condições</h1>
      <p style={{ marginBottom: '1rem' }}>Data de Vigência: 01 de abril de 2025</p>
      <div style={{ marginBottom: '2rem' }}>
        <div>
          <h3 className="font-semibold">1. Aceitação dos Termos</h3>
          <p>Ao utilizar o PAi TEC, você concorda em cumprir estes Termos e Condições.</p>
        </div>
        <div>
          <h3 className="font-semibold">2. Uso do Aplicativo</h3>
          <p>É proibido o acesso, modificação ou interferência não autorizada nas transmissões de câmeras.</p>
        </div>
        <div>
          <h3 className="font-semibold">3. Responsabilidades do Usuário</h3>
          <p>Manter a segurança das suas credenciais de login.</p>
          <p>Não compartilhar ou utilizar indevidamente gravações obtidas pelo aplicativo.</p>
        </div>
        <div>
          <h3 className="font-semibold">4. Limitação de Responsabilidade</h3>
          <p>Não nos responsabilizamos por uso não autorizado, perda de dados ou falhas de segurança fora do nosso controle.</p>
        </div>
        <div>
          <h3 className="font-semibold">5. Rescisão</h3>
          <p>Podemos suspender ou encerrar o acesso ao PAi TEC caso você viole estes termos.</p>
        </div>
        <div>
          <h3 className="font-semibold">6. Alterações nos Termos</h3>
          <p>Reservamo-nos o direito de atualizar estes Termos e Condições a qualquer momento.</p>
        </div>
        <div>
          <h3 className="font-semibold">7. Contato</h3>
          <p>Para qualquer dúvida, entre em contato pelo e-mail: globalmonitoramentointeligente@gmail.com.</p>
        </div>
      </div>
      <button
    style={{ backgroundColor: '#3b82f6', color: 'white', padding: '10px 20px', borderRadius: '5px', transition: 'background-color 0.3s' }}
    onClick={() => window.location.href = '/'}
  >
    Voltar
  </button>
    </div>
  );
};

export default TermosECondicoes;