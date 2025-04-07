import React from 'react';

const PoliticasDePrivacidade = () => {
  return (
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Política de Privacidade</h1>
      <p style={{ marginBottom: '1rem' }}>Data de Vigência: 01 de abril de 2025</p>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: '600' }}>1. Introdução</h3>
          <p>O PAi TEC (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;empresa&rdquo;) está comprometido com a proteção da sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais ao utilizar nosso aplicativo.</p>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: '600' }}>2. Informações que Coletamos</h3>
          <p>Informações Pessoais: Nome, dados de contato (se fornecidos).</p>
          <p>Dados de Uso: Endereço IP, tipo de dispositivo, interações com o aplicativo e registros de acesso.</p>
          <p>Dados de Câmera: Transmissões ao vivo e gravações de vídeo.</p>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: '600' }}>3. Como Usamos Suas Informações</h3>
          <p>Para fornecer e melhorar nossos serviços.</p>
          <p>Para reforçar a segurança e evitar acessos não autorizados.</p>
          <p>Para cumprir obrigações legais.</p>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: '600' }}>4. Compartilhamento e Segurança de Dados</h3>
          <p>Não vendemos ou compartilhamos seus dados com terceiros, exceto quando exigido por lei.</p>
          <p>Utilizamos criptografia e outras medidas de segurança para proteger suas informações.</p>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: '600' }}>5. Seus Direitos</h3>
          <p>Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais.</p>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: '600' }}>6. Alterações nesta Política</h3>
          <p>Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você a revise regularmente.</p>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: '600' }}>7. Contato</h3>
          <p>Para dúvidas relacionadas à privacidade, entre em contato pelo e-mail: globalmonitoramentointeligente@gmail.com.</p>
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

export default PoliticasDePrivacidade;