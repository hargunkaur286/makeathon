import { Button } from "@/components/ui/button"

const ButtonPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>
                Primary
            </Button>
            <Button variant="primary">
                Primary Button
            </Button>
            <Button variant="primaryOutline">
                Primary Outline
            </Button>
            <Button variant="secondary">
                Secondary Button
            </Button>
            <Button variant="secondaryOutline">
                Secondary Outline Button
            </Button>
            <Button variant="danger">
                Danger Button
            </Button>
            <Button variant="dangerOutline">
                Danger Outline Button
            </Button>
            <Button variant="super">
                Super Button
            </Button>
            <Button variant="superOutline">
                Super Outline Button
            </Button>
            <Button variant="ghost">
                Ghost Button
            </Button>
            <Button variant="sidebar">
                Sidebar Button
            </Button>
            <Button variant="sidebarOutline">
                Sidebar Outline Button
            </Button>
        </div>
    )
}

export default ButtonPage;