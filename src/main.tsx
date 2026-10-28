import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const cards = [
  ['Vendas hoje', 'MT 24.580', '+12,5%', 'green'],
  ['Encomendas', '48', '+8,2%', 'blue'],
  ['Produtos em stock', '1.284', '3 alertas', 'orange'],
  ['Clientes activos', '326', '+5,4%', 'purple'],
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">D</span><div><strong>Dr Gestor</strong><small>MZ</small></div></div>
        <nav><a className="active">Visão geral</a><a>Vendas</a><a>Produtos</a><a>Clientes</a><a>Agenda</a><a>Equipa</a></nav>
        <div className="sidebar-bottom"><a>Definições</a><div className="profile"><span className="avatar">AM</span><div><strong>Alberto Mateus</strong><small>Administrador</small></div><span>⋮</span></div></div>
      </aside>
      <main className="main-content">
        <header className="topbar"><div className="mobile-brand">Dr Gestor <span>MZ</span></div><div className="top-actions"><button className="icon-btn">⌕</button><button className="icon-btn notification">♢<i /></button><span className="date">28 Out, 2026</span></div></header>
        <section className="page-heading"><div><p className="eyebrow">QUARTA-FEIRA, 28 DE OUTUBRO</p><h1>Bom dia, Alberto</h1><p className="muted">Aqui está o resumo do seu negócio hoje.</p></div><button className="primary-btn">＋ Nova venda</button></section>
        <section className="stat-grid">{cards.map(([label, value, change, tone]) => <article className={`stat-card ${tone}`} key={label}><div className="stat-top"><span>{label}</span><span className="card-icon">{tone === 'green' ? '↗' : tone === 'blue' ? '▣' : tone === 'orange' ? '◈' : '♙'}</span></div><strong>{value}</strong><p><span className="change">{change}</span> <span className="muted">vs. mês anterior</span></p></article>)}</section>
        <section className="content-grid"><article className="panel chart-panel"><div className="panel-heading"><div><h2>Resumo de vendas</h2><p className="muted">Desempenho dos últimos 7 dias</p></div><button className="select-btn">Esta semana⌄</button></div><div className="chart"><div className="y-labels"><span>10k</span><span>7,5k</span><span>5k</span><span>2,5k</span><span>0</span></div><div className="chart-area"><div className="grid-lines"><i/><i/><i/><i/><i/></div><svg viewBox="0 0 600 220" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#22c55e" stopOpacity=".28"/><stop offset="1" stopColor="#22c55e" stopOpacity="0"/></linearGradient></defs><path d="M0,178 C55,165 65,130 110,142 S165,180 215,117 S265,120 315,105 S365,62 415,92 S465,127 510,66 S555,58 600,22 V220 H0Z" fill="url(#fill)"/><path d="M0,178 C55,165 65,130 110,142 S165,180 215,117 S265,120 315,105 S365,62 415,92 S465,127 510,66 S555,58 600,22" fill="none" stroke="#16a34a" strokeWidth="3"/></svg><div className="x-labels"><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span></div></div></div></article><article className="panel orders"><div className="panel-heading"><div><h2>Vendas recentes</h2><p className="muted">Últimas transações</p></div><button className="text-btn">Ver todas</button></div>{[['#ECFDF5','JM','João Mucavele','Hoje, 14:32','MT 2.450'],['#EFF6FF','AS','Ana Sitoe','Hoje, 13:18','MT 1.280'],['#FFF7ED','FC','Fátima Cossa','Hoje, 11:04','MT 890']].map(([bg, initials, name, time, amount]) => <div className="order" key={name}><span className="order-avatar" style={{background:bg}}>{initials}</span><div><strong>{name}</strong><small>{time}</small></div><b>{amount}</b></div>)}</article></section>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
