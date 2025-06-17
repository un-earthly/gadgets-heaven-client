import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const DimmedButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <Button
            variant="secondary"
            className={`flex-1 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 ${className}`}
        >
            {children}
        </Button>
    )
}

export const DimmedButtonWithArrow = ({ children }: { children: React.ReactNode }) => {
    return (
        <DimmedButton>
            {children}
            <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300" />
        </DimmedButton>
    )
}

export const DimmedButtonWithArrowLink = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button
            variant="outline"
            size="lg"
            className="bg-white/50 dark:bg-zinc-900/50 hover:bg-orange-50 dark:hover:bg-orange-950/50 text-orange-600 dark:text-orange-300 border-orange-200 dark:border-orange-700 hover:border-orange-300 dark:hover:border-orange-600 inline-flex items-center gap-2 transition-all duration-300"
        >
            {children}
        </Button>
    )
}


export default DimmedButton