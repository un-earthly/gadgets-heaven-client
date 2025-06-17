import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const HighlightButton = ({ children, isDisabled, size }: { children: React.ReactNode, isDisabled: boolean, size?: 'default' | 'sm' | 'lg' | 'icon' }) => {
    return (
        <Button
            type="submit"
            disabled={isDisabled}
            size={size || 'default'}
            className="bg-gradient-to-r from-orange-500 to-orange-600 
                                    dark:from-orange-600 dark:to-orange-700 
                                    hover:from-orange-600 hover:to-orange-700 
                                    dark:hover:from-orange-500 dark:hover:to-orange-600 
                                    text-white font-medium shadow-lg shadow-orange-500/25 
                                    dark:shadow-orange-900/30 transition-all duration-300 
                                    whitespace-nowrap"
        >
            {children}
        </Button>
    )
}

export const HighlightButtonWithArrow = ({ children, isDisabled, size }: { children: React.ReactNode, isDisabled: boolean, size?: 'default' | 'sm' | 'lg' | 'icon' }) => {
    return (
        <HighlightButton isDisabled={isDisabled} size={size}>
            {children}
        </HighlightButton>
    )
}

export const HighlightedOutlineButton = ({ children, isDisabled, size, onClick, arrowEnabled }: { children: React.ReactNode, isDisabled: boolean, size?: 'default' | 'sm' | 'lg' | 'icon', onClick?: () => void, arrowEnabled?: boolean }) => {
    return (
        <Button
            onClick={onClick}
            variant="outline"
            size={size || 'default'}
            disabled={isDisabled}
            className="border-orange-200 dark:border-orange-800 
                            hover:bg-orange-50 dark:hover:bg-orange-950/50 
                            hover:text-orange-600 dark:hover:text-orange-400 
                            text-orange-500 dark:text-orange-400"
        >
            {children}
            {arrowEnabled && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
    )
}
export default HighlightButton