import React from 'react'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0fdfa', 
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          color: '#0f766e', 
          marginBottom: '1rem' 
        }}>
          Agenda
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#374151', 
          marginBottom: '2rem' 
        }}>
          AI Workflow Automation Platform
        </p>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#6b7280',
          lineHeight: '1.6'
        }}>
          Transform your business with AI agents that learn, adapt, and deliver exceptional results.
        </p>
        <button style={{
          backgroundColor: '#0f766e',
          color: 'white',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          border: 'none',
          borderRadius: '0.5rem',
          marginTop: '2rem',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
