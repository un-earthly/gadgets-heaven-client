import React from 'react';

export default function TenantErrorPage({ error }: { error: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white p-6 font-sans">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-2xl text-center">
        <div className="w-16 h-16 bg-red-950/50 border border-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 text-3xl font-bold">
          !
        </div>
        <h1 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">
          Storefront Resolution Error
        </h1>
        <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
          {error || 'We could not resolve the branding for this storefront. Please verify the domain and try again.'}
        </p>
        <div className="pt-4 border-t border-zinc-800">
          <p className="text-zinc-600 text-xs">
            figcoms-ecom-engine • Multi-Tenant Router
          </p>
        </div>
      </div>
    </div>
  );
}
