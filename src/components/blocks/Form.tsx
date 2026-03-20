'use client'

import React, { useState } from 'react'

export const Form: React.FC<any> = ({ heading, subheading, buttonText }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      source: window.location.pathname,
    }

    try {
      const res = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 px-4 md:px-12 bg-bg text-fg border-b-2 border-fg">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-primary font-display">
            {heading || 'GET IN TOUCH'}
          </h2>
          {subheading && (
            <p className="mt-8 text-xl md:text-2xl font-mono uppercase tracking-widest opacity-80 max-w-lg">
              {subheading}
            </p>
          )}
        </div>
        
        <div className="card-brutal bg-bg/50">
          {status === 'success' ? (
            <div className="h-full min-h-[400px] flex flex-col justify-center items-center text-center">
              <h3 className="text-5xl font-display text-accent mb-4 uppercase">MESSAGE RECEIVED.</h3>
              <p className="font-mono text-lg uppercase">We will brutalize your inbox shortly.</p>
              <button onClick={() => setStatus('idle')} className="btn mt-8">
                SEND ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-sm uppercase tracking-widest font-bold">Name *</label>
                <input required type="text" id="name" name="name" className="bg-transparent border-2 border-fg p-4 text-fg outline-none focus:border-accent font-mono text-lg transition-colors placeholder:text-fg/30" placeholder="JOHN DOE" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-sm uppercase tracking-widest font-bold">Email *</label>
                <input required type="email" id="email" name="email" className="bg-transparent border-2 border-fg p-4 text-fg outline-none focus:border-accent font-mono text-lg transition-colors placeholder:text-fg/30" placeholder="JOHN@EXAMPLE.COM" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-mono text-sm uppercase tracking-widest font-bold">Service Interest</label>
                <select id="service" name="service" className="bg-transparent border-2 border-fg p-4 text-fg outline-none focus:border-accent font-mono text-lg transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-bg text-fg">GENERAL INQUIRY</option>
                  <option value="WEB DESIGN" className="bg-bg text-fg">WEB DESIGN</option>
                  <option value="BRANDING" className="bg-bg text-fg">BRANDING</option>
                  <option value="MARKETING" className="bg-bg text-fg">MARKETING</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-sm uppercase tracking-widest font-bold">Message *</label>
                <textarea required id="message" name="message" rows={4} className="bg-transparent border-2 border-fg p-4 text-fg outline-none focus:border-accent font-mono text-lg transition-colors resize-none placeholder:text-fg/30" placeholder="TELL US ABOUT YOUR PROJECT..."></textarea>
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border-2 border-red-500 text-red-500 font-mono text-sm uppercase font-bold">
                  ERROR SUBMITTING FORM. PLEASE TRY AGAIN.
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="btn mt-4 w-full disabled:opacity-50 disabled:cursor-not-allowed bg-fg! text-bg! hover:bg-accent! hover:text-bg! hover:border-accent!"
              >
                {status === 'submitting' ? 'SUBMITTING...' : (buttonText || 'SUBMIT MESSAGE')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
