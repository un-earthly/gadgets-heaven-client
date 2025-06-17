import React from 'react';

type PageWrapperProps = {
    children: React.ReactNode;
    className?: string;
};

const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
    return (
        <main className={`min-h-screen relative overflow-x-hidden ${className}`}>
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#ff990010,transparent)]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#ffa50010,transparent)]" />
            </div>

            <div className="container mx-auto px-4 py-8">
                {children}
            </div>
        </main>
    );
};

export default PageWrapper; 