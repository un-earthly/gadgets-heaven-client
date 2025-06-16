import { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
    title: string
    description?: string
    icon?: LucideIcon
    gradient?: string
    className?: string
}

const SectionHeader = ({ title, description, icon: Icon, gradient, className = "" }: SectionHeaderProps) => {
    return (
        <div className={`flex items-center gap-4 mb-8 ${className}`}>
            {Icon && gradient && (
                <div className="relative h-12 w-12">
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradient} opacity-10`} />
                    <Icon className="h-12 w-12 text-orange-500/80 dark:text-orange-400/80 relative z-10" />
                </div>
            )}
            <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                {description && (
                    <p className="text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default SectionHeader 