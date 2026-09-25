'use client'

import { useMemo, useState } from 'react'
import {
  ArrowDownLeft,
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronDown,
  CreditCard,
  Home,
  Landmark,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  WalletCards,
  X,
} from 'lucide-react'

const transactions = [
  { merchant: 'Whole Foods Market', category: 'Groceries', date: 'Today, 10:42 AM', amount: '-$86.42', icon: 'W', tone: 'green' },
  { merchant: 'Acme Inc.', category: 'Salary', date: 'Yesterday, 9:00 AM', amount: '+$4,800.00', icon: 'A', tone: 'blue', income: true },
  { merchant: 'Netflix', category: 'Subscriptions', date: 'Sep 22, 8:16 PM', amount: '-$15.49', icon: 'N', tone: 'red' },
  { merchant: 'Shell Gas Station', category: 'Transport', date: 'Sep 21, 5:33 PM', amount: '-$54.20', icon: 'S', tone: 'orange' },
  { merchant: 'Blue Bottle Coffee', category: 'Dining', date: 'Sep 20, 8:45 AM', amount: '-$6.75', icon: 'B', tone: 'purple' },
]

const budgets = [
  { name: 'Housing', spent: 1840, limit: 2200, color: '#4f8cff' },
  { name: 'Food & dining', spent: 486, limit: 700, color: '#25c79a' },
  { name: 'Transport', spent: 214, limit: 350, color: '#f5a841' },
]

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [toast, setToast] = useState(false)

  const totalBudget = useMemo(() => budgets.reduce((sum, item) => sum + item.limit, 0), [])
  const totalSpent = useMemo(() => budgets.reduce((sum, item) => sum + item.spent, 0), [])

  function addTransaction() {
    setShowAdd(false)
    setToast(true)
    window.setTimeout(() => setToast(false), 2600)
  }

  return (
    <main className="finance-app">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand"><span className="brand-mark"><TrendingUp size={18} /></span><span>ledgerly</span></div>
        <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button>
        <p className="nav-label">Workspace</p>
        <nav className="nav-list" aria-label="Main navigation">
          {[['Overview', LayoutDashboard], ['Transactions', ArrowDownLeft], ['Budgets', Target], ['Accounts', Landmark], ['Insights', BarChart3]].map(([label, Icon]) => (
            <button key={label as string} className={`nav-item ${active === label ? 'active' : ''}`} onClick={() => { setActive(label as string); setMenuOpen(false) }}>
              <Icon size={18} strokeWidth={active === label ? 2.4 : 1.8} /><span>{label as string}</span>{label === 'Overview' && <span className="nav-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="upgrade-card"><Sparkles size={17} /><strong>Unlock more insights</strong><p>Get smarter with your money.</p><button>Explore Plus</button></div>
          <button className="nav-item"><Settings size={18} /><span>Settings</span></button>
          <div className="profile"><div className="avatar">JD</div><div><strong>Jordan Davis</strong><span>Personal account</span></div><ChevronDown size={15} /></div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button><div className="breadcrumb"><span>Workspace</span><span>/</span><strong>{active}</strong></div><div className="top-actions"><button className="icon-button" aria-label="Search"><Search size={18} /></button><button className="icon-button notification" aria-label="Notifications"><Bell size={18} /><i /></button><div className="mini-avatar">JD</div></div></header>
        <div className="page-wrap">
          <div className="welcome-row"><div><p className="eyebrow">Wednesday, September 25, 2026</p><h1>Good morning, Jordan<span className="title-dot">.</span></h1><p className="subtitle">Here&apos;s your financial picture at a glance.</p></div><button className="primary-button" onClick={() => setShowAdd(true)}><Plus size={17} /> Add transaction</button></div>

          <div className="stats-grid">
            <div className="stat-card balance-card"><div className="card-top"><span>Total balance</span><WalletCards size={17} /></div><div className="balance">$12,486<span>.32</span></div><div className="stat-trend positive"><ArrowUpRight size={14} /> 8.4% <span>vs. last month</span></div><div className="sparkline"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div></div>
            <div className="stat-card"><div className="card-top"><span>Income this month</span><span className="icon-pill income-pill"><ArrowDownLeft size={15} /></span></div><div className="stat-number">$4,800.00</div><div className="stat-trend positive"><ArrowUpRight size={14} /> 12.6% <span>vs. last month</span></div></div>
            <div className="stat-card"><div className="card-top"><span>Spending this month</span><span className="icon-pill expense-pill"><ArrowUpRight size={15} /></span></div><div className="stat-number">$2,940.68</div><div className="stat-trend negative"><ArrowUpRight size={14} /> 4.2% <span>vs. last month</span></div></div>
          </div>

          <div className="dashboard-grid"><section className="panel spending-panel"><div className="panel-heading"><div><h2>Spending overview</h2><p>Keep an eye on where your money goes.</p></div><button className="select-button">This month <ChevronDown size={14} /></button></div><div className="chart-area"><div className="chart-y"><span>$2k</span><span>$1.5k</span><span>$1k</span><span>$500</span><span>$0</span></div><div className="chart"><div className="grid-lines"><i /><i /><i /><i /><i /></div><svg viewBox="0 0 660 210" preserveAspectRatio="none" aria-label="Spending trend chart"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#4f8cff" stopOpacity=".27" /><stop offset="1" stopColor="#4f8cff" stopOpacity="0" /></linearGradient></defs><path d="M0,140 C38,120 48,130 78,115 S125,140 152,121 S195,74 225,95 S264,138 290,116 S330,124 360,93 S395,105 425,82 S465,53 488,75 S530,87 550,65 S600,70 660,24 L660,210 L0,210 Z" fill="url(#area)" /><path d="M0,140 C38,120 48,130 78,115 S125,140 152,121 S195,74 225,95 S264,138 290,116 S330,124 360,93 S395,105 425,82 S465,53 488,75 S530,87 550,65 S600,70 660,24" fill="none" stroke="#4f8cff" strokeWidth="3" strokeLinecap="round" /></svg><div className="chart-x"><span>Sep 1</span><span>Sep 7</span><span>Sep 14</span><span>Sep 21</span><span>Sep 25</span></div></div></div></section>
            <section className="panel budget-panel"><div className="panel-heading"><div><h2>Monthly budgets</h2><p>${(totalSpent).toLocaleString()} of ${(totalBudget).toLocaleString()} used</p></div><button className="more-button" aria-label="Budget options">•••</button></div><div className="budget-list">{budgets.map((budget) => <div className="budget-row" key={budget.name}><div className="budget-meta"><span className="budget-name"><i style={{ background: budget.color }} />{budget.name}</span><span>${budget.spent.toLocaleString()} <em>/ ${budget.limit.toLocaleString()}</em></span></div><div className="progress-track"><span style={{ width: `${(budget.spent / budget.limit) * 100}%`, background: budget.color }} /></div><p>{Math.round((budget.spent / budget.limit) * 100)}% used</p></div>)}</div><button className="outline-button" onClick={() => setActive('Budgets')}>View all budgets <ArrowUpRight size={14} /></button></section></div>

          <section className="panel transactions-panel"><div className="panel-heading"><div><h2>Recent transactions</h2><p>Your latest activity across all accounts.</p></div><button className="text-button" onClick={() => setActive('Transactions')}>View all <ArrowUpRight size={14} /></button></div><div className="table-wrap"><table><thead><tr><th>Transaction</th><th>Category</th><th>Date</th><th className="amount-head">Amount</th></tr></thead><tbody>{transactions.map((transaction) => <tr key={transaction.merchant}><td><div className="transaction-name"><span className={`merchant-icon ${transaction.tone}`}>{transaction.icon}</span><strong>{transaction.merchant}</strong></div></td><td><span className="category-chip">{transaction.category}</span></td><td className="date-cell">{transaction.date}</td><td className={`amount ${transaction.income ? 'income' : ''}`}>{transaction.amount}</td></tr>)}</tbody></table></div></section>
          <div className="footer-note"><span className="secure-dot" /> Your data is encrypted and secure <span>•</span> Last synced just now</div>
        </div>
      </section>

      {showAdd && <div className="modal-backdrop" onClick={() => setShowAdd(false)}><div className="modal" onClick={(event) => event.stopPropagation()}><div className="modal-header"><div><p className="eyebrow">New activity</p><h2>Add transaction</h2></div><button className="icon-button" onClick={() => setShowAdd(false)} aria-label="Close"><X size={18} /></button></div><label>Merchant<input placeholder="e.g. Coffee shop" /></label><div className="form-row"><label>Amount<input placeholder="$0.00" /></label><label>Type<select defaultValue="expense"><option value="expense">Expense</option><option value="income">Income</option></select></label></div><label>Category<select defaultValue="Dining"><option>Dining</option><option>Groceries</option><option>Transport</option><option>Housing</option><option>Other</option></select></label><button className="primary-button full-width" onClick={addTransaction}>Save transaction</button></div></div>}
      {toast && <div className="toast"><span>✓</span> Transaction saved successfully</div>}
    </main>
  )
}
