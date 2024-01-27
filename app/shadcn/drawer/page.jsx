"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"


const page = () => {
    function handleSubmit() {

        const postData = async () => {
            const data = {
                title: 'title',
                post: 'post',
            };

            const response = await fetch("/api/post", {
                method: "POST",
                body: JSON.stringify(data),
            });
            return response.json();
        };
        postData().then((data) => {
            alert(data.message);
        });
    }
    return (
        <Drawer>
            <DrawerTrigger>Open Drawer</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button onClick={() => handleSubmit()}>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default page