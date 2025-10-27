// SynchMateApp.jsx
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, BarChart3, Users, Zap, Shield, Globe } from 'lucide-react';
import Header from "../Header";
import Footer from "../Footer";
import './synchmate.scss';

// === Backend wiring (edit these for your env) ===
const API_BASE =
  (typeof process !== 'undefined' && (process.env.NEXT_PUBLIC_API_BASE || process.env.REACT_APP_API_BASE)) ||
  'http://localhost:8080';

const API_KEY =
  (typeof process !== 'undefined' && (process.env.NEXT_PUBLIC_SYNCHMATE_KEY || process.env.REACT_APP_SYNCHMATE_KEY)) ||
  'synchmate_test_key_123'; // dev only; replace per-tenant in prod

// Main SynchMate Application (JSX)
export default function SynchMateApp() {
  const [activeView, setActiveView] = useState('demo');
  const [demoTenant] = useState('cmeu1j4rs0000ymf3wn3w5zgu');

  return (
    <div className="sm-app">
      <Header />
      <header className="sm-header">
        <div className="sm-header__inner">
          <div className="sm-brand">
            <div className="sm-brand__logo"><MessageCircle className="sm-icon" /></div>
            <h1 className="sm-brand__title">SynchMate</h1>
            <span className="sm-brand__tag">AI-Powered Chat Platform</span>
          </div>

          <nav className="sm-nav">
            <button
              onClick={() => setActiveView('demo')}
              className={`sm-nav__btn ${activeView === 'demo' ? 'is-active' : ''}`}
            >
              Live Demo
            </button>
            <button
              onClick={() => setActiveView('dashboard')}
              className={`sm-nav__btn ${activeView === 'dashboard' ? 'is-active' : ''}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveView('features')}
              className={`sm-nav__btn ${activeView === 'features' ? 'is-active' : ''}`}
            >
              Features
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="sm-main">
        {activeView === 'demo' && <LiveDemo />}
        {activeView === 'dashboard' && <AnalyticsDashboard />}
        {activeView === 'features' && <FeatureOverview />}
      </main>

      {/* Chat Widget */}
      {activeView === 'demo' && (
        <ChatWidget
          tenantId={demoTenant}
          appearance={{ primaryColor: '#3b82f6', position: 'bottom-right' }}
          behavior={{ proactiveMessage: '👋 Welcome to SynchMate! Try asking about our features or pricing.', proactiveDelay: 3000 }}
        />
      )}
    </div>
  );
}

// Demo View Component
function LiveDemo() {
  return (
    <div className="sm-section sm-section--space">
      {/* Hero */}
      <div className="sm-hero">
        <h2 className="sm-hero__title">Experience SynchMate in Action</h2>
        <p className="sm-hero__subtitle">See how our AI-powered chat widget transforms customer engagement. Try the chat widget in the bottom-right corner!</p>
      </div>

      {/* Demo Website Mockup */}
      <div className="sm-card sm-mock">
        <div className="sm-mock__topbar">
          <span className="sm-mock__dot sm-mock__dot--red" />
          <span className="sm-mock__dot sm-mock__dot--yellow" />
          <span className="sm-mock__dot sm-mock__dot--green" />
          <span className="sm-mock__url">https://demo-company.com</span>
        </div>
        <div className="sm-mock__body">
          <h1 className="sm-title">Demo Company</h1>
          <p className="sm-text sm-space-b">This is a sample business website with SynchMate's AI chat widget integrated. The widget provides instant, intelligent responses to visitor questions.</p>

          <div className="sm-grid sm-grid--2">
            <div>
              <h3 className="sm-subtitle">Try These Questions:</h3>
              <ul className="sm-list">
                <li>• "What are your pricing plans?"</li>
                <li>• "How does SynchMate work?"</li>
                <li>• "I need help with integration"</li>
                <li>• "Can I speak to a human agent?"</li>
              </ul>
            </div>
            <div>
              <h3 className="sm-subtitle">Widget Features:</h3>
              <ul className="sm-list">
                <li>• AI-powered responses using Vertex AI</li>
                <li>• Seamless handoff to human agents</li>
                <li>• Lead capture and analytics</li>
                <li>• Customizable appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Code */}
      <div className="sm-card sm-code">
        <h3 className="sm-subtitle sm-subtitle--light">Easy Integration</h3>
        <pre className="sm-pre">{`<!-- Add this to your website -->
<script src="https://widget.synchmate.ai/widget.js"></script>
<script>
  SynchMate.init({
    tenantId: 'your-tenant-id',
    appearance: { primaryColor: '#3b82f6', position: 'bottom-right' },
    behavior: { proactiveMessage: 'Need help? Chat with us!', proactiveDelay: 30000 }
  });
</script>`}</pre>
      </div>
    </div>
  );
}

// Dashboard View Component
function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  const [stats] = useState({ conversations: 1247, activeAgents: 5, responseTime: '2.3s', satisfaction: 94, conversationsToday: 67, handffsToday: 12, leadsCaptured: 89 });

  return (
    <div className="sm-section sm-section--space">
      <div className="sm-row sm-row--split">
        <h2 className="sm-title">Analytics Dashboard</h2>
        <select className="sm-select" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Stats */}
      <div className="sm-grid sm-grid--4">
        <StatCard title="Total Conversations" value={stats.conversations.toLocaleString()} change="+12%" icon={<MessageCircle />} color="blue" />
        <StatCard title="Active Agents" value={String(stats.activeAgents)} change="stable" icon={<Users />} color="green" />
        <StatCard title="Avg Response Time" value={stats.responseTime} change="-0.2s" icon={<Zap />} color="yellow" />
        <StatCard title="Satisfaction Rate" value={`${stats.satisfaction}%`} change="+2%" icon={<BarChart3 />} color="purple" />
      </div>

      <div className="sm-grid sm-grid--2 sm-space-t">
        {/* Recent Activity */}
        <div className="sm-card">
          <h3 className="sm-subtitle">Recent Activity</h3>
          <div className="sm-list-activity">
            {[
              { time: '2:34 PM', event: 'New conversation started', user: 'john@company.com' },
              { time: '2:31 PM', event: 'Agent handoff completed', user: 'sarah@startup.io' },
              { time: '2:28 PM', event: 'Lead captured', user: 'mike@enterprise.com' },
              { time: '2:25 PM', event: 'Conversation escalated', user: 'anna@business.org' },
            ].map((a, i) => (
              <div key={i} className="sm-activity">
                <div>
                  <p className="sm-activity__title">{a.event}</p>
                  <p className="sm-activity__meta">{a.user}</p>
                </div>
                <span className="sm-activity__time">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage by Plan */}
        <div className="sm-card">
          <h3 className="sm-subtitle">Usage Distribution</h3>
          <div className="sm-usage">
            {[
              { plan: 'Free', users: 234, percentage: 45 },
              { plan: 'Starter', users: 156, percentage: 30 },
              { plan: 'Growth', users: 89, percentage: 17 },
              { plan: 'Pro', users: 42, percentage: 8 },
            ].map((p, i) => (
              <div key={i} className="sm-usage__row">
                <div className="sm-usage__label">
                  <span className="sm-usage__plan">{p.plan}</span>
                  <span className="sm-usage__meta">{p.users} users</span>
                </div>
                <div className="sm-usage__bar">
                  <div className="sm-usage__fill" style={{ width: `${p.percentage}%` }} />
                  <span className="sm-usage__pct">{p.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Sessions */}
      <div className="sm-card sm-space-t">
        <div className="sm-card__header"><h3 className="sm-subtitle">Live Sessions</h3></div>
        <div className="sm-sessions">
          {[
            { id: 'sess_123', user: 'john@company.com', agent: 'Sarah Chen', duration: '5m 23s', status: 'active' },
            { id: 'sess_124', user: 'mike@startup.io', agent: 'AI Assistant', duration: '2m 45s', status: 'ai' },
            { id: 'sess_125', user: 'anna@business.org', agent: 'Mark Johnson', duration: '12m 07s', status: 'escalated' },
          ].map((s, i) => (
            <div key={i} className="sm-session">
              <span className={`sm-dot ${s.status === 'active' ? 'sm-dot--green' : s.status === 'ai' ? 'sm-dot--blue' : 'sm-dot--yellow'}`} />
              <div className="sm-session__info">
                <p className="sm-session__user">{s.user}</p>
                <p className="sm-session__meta">Session {s.id}</p>
              </div>
              <div className="sm-session__right">
                <p className="sm-session__agent">{s.agent}</p>
                <p className="sm-session__meta">{s.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Features View Component
function FeatureOverview() {
  return (
    <div className="sm-section sm-section--space">
      <div className="sm-hero sm-hero--tight">
        <h2 className="sm-hero__title">Complete Feature Overview</h2>
        <p className="sm-hero__subtitle">Everything you need for intelligent customer engagement</p>
      </div>

      <div className="sm-grid sm-grid--3">
        <FeatureCard icon={<Bot />} title="AI-Powered Responses" description="Advanced AI using Google's Vertex AI provides intelligent, contextual answers to customer questions in real-time." color="blue"/>
        <FeatureCard icon={<Users />} title="Seamless Agent Handoff" description="Automatic escalation to human agents when AI confidence is low or customers request human support." color="green"/>
        <FeatureCard icon={<BarChart3 />} title="Advanced Analytics" description="Comprehensive conversation analytics, usage tracking, and performance metrics with real-time monitoring." color="purple"/>
        <FeatureCard icon={<Zap />} title="Real-Time WebSocket" description="Instant messaging with typing indicators, presence detection, and live agent communication." color="yellow"/>
        <FeatureCard icon={<Shield />} title="Enterprise Security" description="Rate limiting, tenant isolation, comprehensive monitoring, and secure data handling." color="red"/>
        <FeatureCard icon={<Globe />} title="Easy Integration" description="Simple JavaScript widget that works on any website with customizable appearance and behavior." color="indigo"/>
      </div>

      {/* Architecture */}
      <div className="sm-card sm-space-t">
        <h3 className="sm-title sm-title--md">Technical Architecture</h3>
        <div className="sm-grid sm-grid--2">
          <div>
            <h4 className="sm-subtitle">Core Components</h4>
            <ul className="sm-list">
              <li>• <strong>Chat API:</strong> Enhanced REST API with comprehensive monitoring</li>
              <li>• <strong>WebSocket Server:</strong> Real-time bidirectional communication</li>
              <li>• <strong>Chat Widget:</strong> Customizable React component</li>
              <li>• <strong>Agent Dashboard:</strong> Live conversation management</li>
              <li>• <strong>Analytics Engine:</strong> Real-time metrics and insights</li>
            </ul>
          </div>
          <div>
            <h4 className="sm-subtitle">Key Services</h4>
            <ul className="sm-list">
              <li>• <strong>TenantService:</strong> Multi-tenant management and usage tracking</li>
              <li>• <strong>HandoffService:</strong> Intelligent escalation to human agents</li>
              <li>• <strong>LeadService:</strong> Proactive lead capture and management</li>
              <li>• <strong>AnalyticsService:</strong> Conversation metrics and insights</li>
              <li>• <strong>WebSocket Manager:</strong> Connection and session management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="sm-card sm-space-t">
        <h3 className="sm-title sm-title--md sm-align-center">Pricing Plans</h3>
        <div className="sm-grid sm-grid--4">
          {[
            { name: 'Free', price: '$0', conversations: '50/month', features: ['Basic AI responses', 'Website grounding', 'Email support'] },
            { name: 'Starter', price: '$19', conversations: '100/month', features: ['Enhanced AI', 'Basic analytics', 'Email support'] },
            { name: 'Growth', price: '$49', conversations: '5,000/month', features: ['Knowledge Box', 'Agent handoff', 'Advanced analytics'] },
            { name: 'Pro', price: '$129', conversations: 'Unlimited', features: ['White-label', 'API access', 'Custom integrations'] },
          ].map((plan, i) => (
            <div key={i} className="sm-price">
              <h4 className="sm-price__name">{plan.name}</h4>
              <div className="sm-price__value">{plan.price}</div>
              <div className="sm-price__cap">{plan.conversations}</div>
              <ul className="sm-list">
                {plan.features.map((f, j) => (<li key={j}>• {f}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Utility Components
function StatCard({ title, value, change, icon, color }) {
  return (
    <div className={`sm-stat sm-stat--${color}`}>
      <div>
        <p className="sm-label">{title}</p>
        <p className="sm-kpi">{value}</p>
        <p className="sm-delta">{change}</p>
      </div>
      <div className={`sm-stat__icon sm-stat__icon--${color}`}>{icon}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="sm-feature">
      <div className={`sm-feature__icon sm-feature__icon--${color}`}>{icon}</div>
      <h3 className="sm-subtitle">{title}</h3>
      <p className="sm-text">{description}</p>
    </div>
  );
}

function FeatureSection({ title, features }) {
  return (
    <div>
      <h3 className="sm-title sm-title--md">{title}</h3>
      <div className="sm-card">
        <ul className="sm-list">
          {features.map((f, i) => (
            <li key={i} className="sm-list__item"><span className="sm-bullet" />{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Chat Widget Component
function ChatWidget({ tenantId, appearance, behavior }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const [cfg, setCfg] = useState(null);                    // <- widget config
  const [suggestHtml, setSuggestHtml] = useState(null);    // <- searchSuggestionsHtml
  const messagesEndRef = useRef(null);
  const sessionRef = useRef('sess-' + Math.random().toString(36).slice(2));

  // Fetch widget config
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/widget/config?tenantId=${encodeURIComponent(tenantId)}`);
        const j = await r.json();
        setCfg(j);
      } catch (e) {
        console.error('widget/config failed', e);
      }
    })();
  }, [tenantId]);

  // Proactive bubble
  useEffect(() => {
    const t = setTimeout(() => setShowProactive(true), behavior?.proactiveDelay || 3000);
    return () => clearTimeout(t);
  }, [behavior?.proactiveDelay]);

  // autoscroll
  useEffect(() => {
    if (messagesEndRef.current && messagesEndRef.current.scrollIntoView) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    const userMessage = inputValue.trim();
    if (!userMessage) return;
    setInputValue('');
    setIsLoading(true);
    setSuggestHtml(null);

    // push user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: 'user', content: userMessage, timestamp: new Date() },
    ]);

    try {
      const resp = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(API_KEY ? { 'X-API-Key': API_KEY } : {}),
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: sessionRef.current,
          pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });

      const data = await resp.json();

      // Append assistant answer
      const answer = data?.answer || '(no answer)';
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          content: answer,
          timestamp: new Date(),
          citations: data?.citations || [],
        },
      ]);

      // Show Google Search chips if present
      if (data?.searchSuggestionsHtml) {
        setSuggestHtml(data.searchSuggestionsHtml);
      }
    } catch (e) {
      console.error('chat error', e);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          type: 'assistant',
          content: 'Sorry—something went wrong reaching the server.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    try {
      return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  // helper to render citations under assistant messages
  const Citations = ({ items }) => {
    if (!items || !items.length) return null;
    return (
      <div className="sm-citations">
        <div className="sm-citations__title">Sources</div>
        <ul className="sm-citations__list">
          {items.map((c, i) => (
            <li key={i} className="sm-citations__item">
              <a href={c.url} target="_blank" rel="noreferrer">
                {c.title || c.url}
              </a>
              {c.snippet ? <div className="sm-citations__snippet">{c.snippet}</div> : null}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const primary = appearance?.primaryColor || cfg?.theme?.primary || '#3b82f6';
  const position = appearance?.position || 'bottom-right';
  const welcome = cfg?.welcome || 'Hi! How can I help you today?';
  const proactiveText = behavior?.proactiveMessage || 'Need help? Chat with us!';

  return (
    <div className={`sm-widget sm-widget--${position}`} style={{ '--sm-primary': primary }}>
      {/* Proactive Message */}
      {showProactive && !isOpen && (
        <div className="sm-proactive">
          <button className="sm-proactive__close" onClick={() => setShowProactive(false)}><X size={14} /></button>
          <p className="sm-proactive__text">{proactiveText}</p>
          <button className="sm-link" onClick={() => setIsOpen(true)}>Start Chat</button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="sm-window">
          <div className="sm-window__header">
            <div className="sm-window__title"><span className="sm-window__avatar"><Bot size={16} /></span>
              <div>
                <div className="sm-window__name">AI Assistant</div>
                <div className="sm-window__status">Online</div>
              </div>
            </div>
            <button className="sm-window__x" onClick={() => setIsOpen(false)}><X size={16} /></button>
          </div>

          <div className="sm-window__messages">
            {/* Empty state */}
            {messages.length === 0 && (
              <div className="sm-empty">
                <div className="sm-empty__icon"><Bot size={22} /></div>
                <p className="sm-empty__text">{welcome}</p>
              </div>
            )}

            {/* Messages */}
            {messages.map((m) => (
              <div key={m.id} className={`sm-msg sm-msg--${m.type}`}>
                <div className="sm-msg__bubble">
                  <p>{m.content}</p>
                  {/* Citations under assistant bubbles */}
                  {m.type === 'assistant' && m.citations?.length ? <Citations items={m.citations} /> : null}
                </div>
                <p className="sm-msg__time">{formatTime(m.timestamp)}</p>
              </div>
            ))}

            {/* Typing */}
            {isLoading && (
              <div className="sm-msg sm-msg--assistant">
                <div className="sm-msg__bubble sm-typing">
                  <span className="sm-typing__dot" /><span className="sm-typing__dot" /><span className="sm-typing__dot" />
                </div>
              </div>
            )}

            {/* Google Search suggestion chips (HTML from backend) */}
            {suggestHtml && (
              <div className="sm-suggest" dangerouslySetInnerHTML={{ __html: suggestHtml }} />
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="sm-window__input">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
            />
            <button className="sm-send" onClick={sendMessage} disabled={!inputValue.trim() || isLoading}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Chat Bubble */}
      {!isOpen && (
        <button className="sm-bubble" onClick={() => setIsOpen(true)}>
          <MessageCircle size={22} />
        </button>
      )}
    </div>
  );
}
