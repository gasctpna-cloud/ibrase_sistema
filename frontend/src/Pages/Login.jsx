import React from 'react';

export default function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. INSIRA AQUI A SUA VALIDAÇÃO DE USUÁRIO E SENHA ATUAL
    
    // 2. Se a autenticação der certo, chame a função abaixo:
    onLogin(); 
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      {/* COLE AQUI TODO O SEU CONTEÚDO ATUAL DE TELA DE LOGIN (JSX/HTML) */}
      <h2>Login - Sistema IBRASE</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input type="email" placeholder="E-mail" required /><br/><br/>
        <input type="password" placeholder="Senha" required /><br/><br/>
        <button type="submit" className="btn primary">Entrar</button>
      </form>
    </div>
  );
}