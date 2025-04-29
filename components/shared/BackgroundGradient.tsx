export default function BackgroundGradient() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full">

            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />


            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-orange-200/20 via-transparent to-transparent dark:from-orange-900/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-orange-100/30 via-transparent to-transparent dark:from-orange-800/10 rounded-full blur-3xl" />


            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ff990020,transparent)]" />
                <div className="absolute inset-y-0 right-0 bg-[radial-gradient(circle_500px_at_80%_600px,#ffa50020,transparent)]" />
            </div>

            <div className="absolute inset-0 opacity-10 dark:opacity-5 mix-blend-multiply">
                <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff990030" />
                            <stop offset="50%" stopColor="#ffa50020" />
                            <stop offset="100%" stopColor="#ffb73030" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#meshGradient)" />
                </svg>
            </div>
        </div>
    );
}