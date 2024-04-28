import { Button } from "@/components/ui/button"
import Image from 'next/image'

export const Footer = () => {
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/footer1.png" 
                        alt="Financial Planning" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Planning
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/footer2.png" 
                        alt="Financial Planning" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Planning
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/footer3.png" 
                        alt="Financial Planning" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Planning
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/footer4.png" 
                        alt="Financial Planning" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Planning
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/footer5.png" 
                        alt="Financial Planning" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-md"
                    />
                    Planning
                </Button>
            </div>
        </footer>
    )
}