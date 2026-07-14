import React, { useState, useEffect } from 'react';

// Biblioteca interna de ícones SVG adaptada do seu HTML
const Icons = {
  Dashboard: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h7v7H4V4Z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M13 4h7v4h-7V4Z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M13 10h7v10h-7V10Z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M4 13h7v7H4v-7Z" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  Pedagogico: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L2 9l10 6 10-6-10-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M2 17l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 13l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Caret: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  RH: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  Admin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  Instrutor: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Marketing: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 17v-6M12 17V7M16 17v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Supervisao: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  Financeiro: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Config: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  )
};

export default function Dashboard({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [pageLabel, setPageLabel] = useState('Início');
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    if (window.confirm('Deseja sair?')) {
      onLogout();
    }
  };

  const navigateTo = (page, label) => {
    setCurrentPage(page);
    setPageLabel(label);
    setMenuOpen(false);
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(prev => (prev === menuName ? null : menuName));
  };

  return (
    <div className="wrap">
      <div className="overlay" onClick={() => setMenuOpen(false)}></div>

      <header className="topbar">
        <div className="top-left">
          <div className="brand">
            <div className="brand-icon"><Icons.Dashboard /></div>
            <span>Sistema IBRASE</span>
          </div>
          <button className="btn-menu" onClick={() => setMenuOpen(!menuOpen)} title="Menu">
            <Icons.Menu />
          </button>
        </div>
        <div className="top-center">
          <span className="pill">{pageLabel}</span>
        </div>
        <div className="top-right">
          <span>Olá, Usuário</span>
          <span className="role-badge">Master</span>
          <button className="top-btn" onClick={handleLogoutClick} title="Sair">✕</button>
        </div>
      </header>

      <div className="main">
        <aside className="sidebar">
          <div className="menu-item">
            <button 
              className={`m-btn ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={() => navigateTo('dashboard', 'Início')}
            >
              <span className="m-left">
                <span className="m-ico"><Icons.Dashboard /></span>
                <span>Início</span>
              </span>
            </button>
          </div>

          <div className={`menu-item ${openSubmenu === 'pedagogico' ? 'open' : ''}`}>
            <button className="m-btn" type="button" onClick={() => toggleSubmenu('pedagogico')}>
              <span className="m-left">
                <span className="m-ico"><Icons.Pedagogico /></span>
                <span>Pedagógico</span>
              </span>
              <span className="m-caret"><Icons.Caret /></span>
            </button>
            <div className="submenu">
              <button className={`s-btn ${currentPage === 'matriculas' ? 'active' : ''}`} onClick={() => navigateTo('matriculas', 'Matrículas')}>Matrículas</button>
              <button className={`s-btn ${currentPage === 'turmas' ? 'active' : ''}`} onClick={() => navigateTo('turmas', 'Turmas')}>Turmas</button>
              <button className={`s-btn ${currentPage === 'diarios' ? 'active' : ''}`} onClick={() => navigateTo('diarios', 'Diários')}>Diários</button>
              <button className={`s-btn ${currentPage === 'laudos' ? 'active' : ''}`} onClick={() => navigateTo('laudos', 'Laudos')}>Laudos</button>
              <button className={`s-btn ${currentPage === 'captacao-ped' ? 'active' : ''}`} onClick={() => navigateTo('captacao-ped', 'Relatório de captação')}>Relatório de captação</button>
              <button className={`s-btn ${currentPage === 'agenda-sup' ? 'active' : ''}`} onClick={() => navigateTo('agenda-sup', 'Agenda da supervisão')}>Agenda da supervisão</button>
            </div>
          </div>

          <div className={`menu-item ${openSubmenu === 'rh' ? 'open' : ''}`}>
            <button className="m-btn" type="button" onClick={() => toggleSubmenu('rh')}>
              <span className="m-left">
                <span className="m-ico"><Icons.RH /></span>
                <span>Recursos Humanos</span>
              </span>
              <span className="m-caret"><Icons.Caret /></span>
            </button>
            <div className="submenu">
              <button className={`s-btn ${currentPage === 'colaboradores' ? 'active' : ''}`} onClick={() => navigateTo('colaboradores', 'Colaboradores')}>Colaboradores</button>
              <button className={`s-btn ${currentPage === 'contratos' ? 'active' : ''}`} onClick={() => navigateTo('contratos', 'Dados contratuais')}>Dados contratuais</button>
              <button className={`s-btn ${currentPage === 'presenca' ? 'active' : ''}`} onClick={() => navigateTo('presenca', 'Controle Trimestral')}>Controle Trimestral</button>
              <button className={`s-btn ${currentPage === 'planejamento' ? 'active' : ''}`} onClick={() => navigateTo('planejamento', 'Planejamento')}>Planejamento</button>
              <button className={`s-btn ${currentPage === 'avisos-rh' ? 'active' : ''}`} onClick={() => navigateTo('avisos-rh', 'Avisos')}>Avisos</button>
            </div>
          </div>

          <div className={`menu-item ${openSubmenu === 'administrativo' ? 'open' : ''}`}>
            <button className="m-btn" type="button" onClick={() => toggleSubmenu('administrativo')}>
              <span className="m-left">
                <span className="m-ico"><Icons.Admin /></span>
                <span>Administrativo</span>
              </span>
              <span className="m-caret"><Icons.Caret /></span>
            </button>
            <div className="submenu">
              <button className={`s-btn ${currentPage === 'projetos' ? 'active' : ''}`} onClick={() => navigateTo('projetos', 'Projetos')}>Projetos</button>
              <button className={`s-btn ${currentPage === 'cidades' ? 'active' : ''}`} onClick={() => navigateTo('cidades', 'Cidades')}>Cidades</button>
              <button className={`s-btn ${currentPage === 'bairros' ? 'active' : ''}`} onClick={() => navigateTo('bairros', 'Bairros')}>Bairros</button>
              <button className={`s-btn ${currentPage === 'nucleos' ? 'active' : ''}`} onClick={() => navigateTo('nucleos', 'Núcleos')}>Núcleos</button>
              <button className={`s-btn ${currentPage === 'modalidades' ? 'active' : ''}`} onClick={() => navigateTo('modalidades', 'Modalidades')}>Modalidades</button>
            </div>
          </div>

          <div className={`menu-item ${openSubmenu === 'instrutor' ? 'open' : ''}`}>
            <button className="m-btn" type="button" onClick={() => toggleSubmenu('instrutor')}>
              <span className="m-left">
                <span className="m-ico"><Icons.Instrutor /></span>
                <span>Instrutor</span>
              </span>
              <span className="m-caret"><Icons.Caret /></span>
            </button>
            <div className="submenu">
              <button className={`s-btn ${currentPage === 'inst-turmas' ? 'active' : ''}`} onClick={() => navigateTo('inst-turmas', 'Turmas do Instrutor')}>Turmas</button>
              <button className={`s-btn ${currentPage === 'carga-horaria' ? 'active' : ''}`} onClick={() => navigateTo('carga-horaria', 'Carga horária')}>Carga horária</button>
              <button className={`s-btn ${currentPage === 'inst-nfs' ? 'active' : ''}`} onClick={() => navigateTo('inst-nfs', 'Avisos e NFs')}>Avisos e NFs</button>
              <button className={`s-btn ${currentPage === 'inst-midias' ? 'active' : ''}`} onClick={() => navigateTo('inst-midias', 'Envio de mídias')}>Envio de mídias</button>
            </div>
          </div>

          <div className={`menu-item ${openSubmenu === 'marketing' ? 'open' : ''}`}>
            <button className="m-btn" type="button" onClick={() => toggleSubmenu('marketing')}>
              <span className="m-left">
                <span className="m-ico"><Icons.Marketing /></span>
                <span>Marketing</span>
              </span>
              <span className="m-caret"><Icons.Caret /></span>
            </button>
            <div className="submenu">
              <button className={`s-btn ${currentPage === 'campanhas' ? 'active' : ''}`} onClick={() => navigateTo('campanhas', 'Campanhas')}>Campanhas</button>
              <button className={`s-btn ${currentPage === 'cronogramas' ? 'active' : ''}`} onClick={() => navigateTo('cronogramas', 'Cronogramas')}>Cronogramas</button>
              <button className={`s-btn ${currentPage === 'mkt-midias' ? 'active' : ''}`} onClick={() => navigateTo('mkt-midias', 'Mídias por núcleos')}>Mídias por núcleos</button>
            </div>
          </div>

          <div className={`menu-item ${openSubmenu === 'supervisao' ? 'open' : ''}`}>
            <button className="m-btn" type="button" onClick={() => toggleSubmenu('supervisao')}>
              <span className="m-left">
                <span className="m-ico"><Icons.Supervisao /></span>
                <span>Supervisão</span>
              </span>
              <span className="m-caret"><Icons.Caret /></span>
            </button>
            <div className="submenu">
              <button className={`s-btn ${currentPage === 'sup-matriculas' ? 'active' : ''}`} onClick={() => navigateTo('sup-matriculas', 'Matrículas - Supervisão')}>Matrículas</button>
              <button className={`s-btn ${currentPage === 'sup-favoritos' ? 'active' : ''}`} onClick={() => navigateTo('sup-favoritos', 'Relatórios de favoritos')}>Relatórios de favoritos</button>
              <button className={`s-btn ${currentPage === 'sup-obs' ? 'active' : ''}`} onClick={() => navigateTo('sup-obs', 'Observações do mês')}>Observações do mês</button>
            </div>
          </div>

          <div className={`menu-item ${openSubmenu === 'financeiro' ? 'open' : ''}`}>
            <button className="m-btn" type="button" onClick={() => toggleSubmenu('financeiro')}>
              <span className="m-left">
                <span className="m-ico"><Icons.Financeiro /></span>
                <span>Financeiro</span>
              </span>
              <span className="m-caret"><Icons.Caret /></span>
            </button>
            <div className="submenu">
              <button className={`s-btn ${currentPage === 'editais' ? 'active' : ''}`} onClick={() => navigateTo('editais', 'Editais de compras')}>Editais de compras</button>
              <button className={`s-btn ${currentPage === 'fornecedores' ? 'active' : ''}`} onClick={() => navigateTo('fornecedores', 'Fornecedores')}>Fornecedores</button>
            </div>
          </div>

          <div className={`menu-item ${openSubmenu === 'configuracoes' ? 'open' : ''}`}>
            <button className="m-btn" type="button" onClick={() => toggleSubmenu('configuracoes')}>
              <span className="m-left">
                <span className="m-ico"><Icons.Config /></span>
                <span>Configurações</span>
              </span>
              <span className="m-caret"><Icons.Caret /></span>
            </button>
            <div className="submenu">
              <button className={`s-btn ${currentPage === 'modelos-arquivos' ? 'active' : ''}`} onClick={() => navigateTo('modelos-arquivos', 'Modelo de Arquivos')}>Modelo de Arquivos</button>
            </div>
          </div>
        </aside>

        <main className="content">
          {currentPage === 'dashboard' && (
            <div>
              <div className="card">
                <div className="card-title">Dashboard</div>
                <div className="card-sub">Visão geral do sistema. Clique nos menus ao lado para navegar.</div>
                <div className="filters">
                  <div className="filter-field">
                    <label>Projeto</label>
                    <select>
                      <option>Todos</option><option>AGON</option><option>CRESP</option><option>EROS</option><option>PROMOV</option><option>STRATOS</option><option>TONUS</option>
                    </select>
                  </div>
                  <div className="filter-field"><label>Data inicial</label><input type="date" /></div>
                  <div className="filter-field"><label>Data final</label><input type="date" /></div>
                  <button className="btn primary">Aplicar</button>
                  <button className="btn">Últimos 30 dias</button>
                </div>
              </div>

              <div className="kpi-grid" style={{ marginTop: '14px' }}>
                <div className="card"><div className="kpi"><div className="kpi-label">Total de matrículas</div><div className="kpi-val">0</div><div className="kpi-mini">no período</div></div></div>
                <div className="card"><div className="kpi"><div className="kpi-label">Validadas</div><div className="kpi-val">0</div><div className="kpi-mini">status = validada</div></div></div>
                <div className="card"><div className="kpi"><div className="kpi-label">Pendentes</div><div className="kpi-val">0</div><div className="kpi-mini">status = pendente</div></div></div>
                <div className="card"><div className="kpi"><div className="kpi-label">Hoje</div><div className="kpi-val">0</div><div className="kpi-mini">criados hoje</div></div></div>
              </div>

              <div className="charts-grid">
                <div className="card"><div className="card-title">Status</div><div className="chart-box">📊 Gráfico de Status</div></div>
                <div className="card"><div className="card-title">Evolução diária</div><div class="chart-box">📈 Gráfico por dia</div></div>
                <div className="card"><div className="card-title">Por Modalidade</div><div className="chart-box">📊 Top 10 modalidades</div></div>
                <div className="card"><div className="card-title">Por Núcleo</div><div className="chart-box">📊 Top 12 núcleos</div></div>
              </div>
            </div>
          )}

          {currentPage === 'matriculas' && (
            <div>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <div className="card-title">Matrículas</div>
                    <div className="card-sub">Gerenciamento de matrículas dos beneficiários</div>
                  </div>
                  <button className="btn primary">+ Nova Matrícula</button>
                </div>
                <div className="filters">
                  <div className="filter-field">
                    <label>Status</label>
                    <select>
                      <option>Todos</option><option>Pendente</option><option>Validada</option><option>Suspensa</option><option>Cancelada</option>
                    </select>
                  </div>
                  <div className="filter-field"><label>Projeto</label><select><option>Todos</option></select></div>
                  <div className="filter-field"><label>Núcleo</label><select><option>Todos</option></select></div>
                  <div className="filter-field"><label>Buscar</label><input type="text" placeholder="Nome do beneficiário..." /></div>
                  <button className="btn primary">Filtrar</button>
                </div>
              </div>
              <div className="card" style={{ marginTop: '14px', overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr><th>Beneficiário</th><th>Núcleo</th><th>Modalidade</th><th>Projeto</th><th>Status</th><th>Data</th><th>Ações</th></tr>
                  </thead>
                  <tbody>
                    <tr><td colSpan="7" style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px' }}>Nenhuma matrícula encontrada. Conecte o webhook para carregar dados.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentPage === 'turmas' && (
            <div>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div><div className="card-title">Turmas</div><div className="card-sub">Gerenciamento de turmas por núcleo e modalidade</div></div>
                  <button className="btn primary">+ Nova Turma</button>
                </div>
              </div>
              <div className="card" style={{ marginTop: '14px', overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr><th>Nome</th><th>Núcleo</th><th>Modalidade</th><th>Instrutor</th><th>Dia</th><th>Horário</th><th>Ações</th></tr>
                  </thead>
                  <tbody>
                    <tr><td colSpan="7" style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px' }}>Nenhuma turma encontrada.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentPage === 'colaboradores' && (
            <div>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div><div className="card-title">Colaboradores</div><div className="card-sub">Dados pessoais dos colaboradores</div></div>
                  <button className="btn primary">+ Novo Colaborador</button>
                </div>
              </div>
              <div className="card" style={{ marginTop: '14px', overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr><th>Nome</th><th>CPF</th><th>Email</th><th>Telefone</th><th>Cargo</th><th>Status</th><th>Ações</th></tr>
                  </thead>
                  <tbody>
                    <tr><td colSpan="7" style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px' }}>Nenhum colaborador encontrado.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentPage === 'nucleos' && (
            <div>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div><div className="card-title">Núcleos</div><div className="card-sub">Locais onde acontecem as atividades</div></div>
                  <button className="btn primary">+ Novo Núcleo</button>
                </div>
              </div>
              <div className="card" style={{ marginTop: '14px', overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr><th>Nome</th><th>Cidade</th><th>Bairro</th><th>Projeto</th><th>Coordenador</th><th>Status</th><th>Ações</th></tr>
                  </thead>
                  <tbody>
                    <tr><td colSpan="7" style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px' }}>Nenhum núcleo encontrado.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {![ 'dashboard', 'matriculas', 'turmas', 'colaboradores', 'nucleos' ].includes(currentPage) && (
            <div className="card">
              <div className="card-title">{pageLabel}</div>
              <div className="card-sub">Em construção</div>
            </div>
          )}
        </main>
      </div>

      <footer className="footer">
        <span>IBRASE</span>
        <span style={{ fontSize: '11px', opacity: 0.7 }}>Sistema de Gestão</span>
      </footer>
    </div>
  );
}