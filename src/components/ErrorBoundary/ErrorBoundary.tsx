import { Component, ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: '24px',
          fontFamily: 'monospace',
          background: '#fff1f2',
          minHeight: '100vh',
          color: '#991b1b'
        }}>
          <h2 style={{ marginBottom: '12px', fontSize: '18px' }}>
            Runtime Error — check this:
          </h2>
          <pre style={{
            background: '#fee2e2',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '13px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}>
            {this.state.error.message}
            {'\n\n'}
            {this.state.error.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
