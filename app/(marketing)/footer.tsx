import { Button } from "@/components/ui/button"
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/footer1.png"
                        alt="Budgeting"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Budgeting
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/footer2.png"
                        alt="Saving"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Saving
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/footer3.png"
                        alt="Investing"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Investing
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/footer4.png"
                        alt="Debt Management"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Debt Management
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/footer5.png"
                        alt="Retirement Planning"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Retirement Planning
                </Button>
                
            </div>
        </footer>
    )
}