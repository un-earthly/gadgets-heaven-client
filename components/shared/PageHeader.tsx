import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
    badge?: string
    title: string
    description: string
}

const PageHeader = ({ badge, title, description }: PageHeaderProps) => {
    return (
        <div className="text-center space-y-4 mb-12">
            {badge && (
                <Badge
                    variant="secondary"
                    className="bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                >
                    {badge}
                </Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400">
                {title}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    )
}

export default PageHeader 