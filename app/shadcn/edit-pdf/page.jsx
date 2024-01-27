"use client"

import { Button } from "@/components/ui/button"
import { DownloadIcon, FontBoldIcon, FontItalicIcon, Pencil1Icon, PinLeftIcon, PinRightIcon, UnderlineIcon } from "@radix-ui/react-icons"

export default function MenubarDemo() {

    return (
        <div className="w-full h-full"><div className="w-full flex items-end justify-end border border-slate-200 rounded">
            <Button variant="outline" size="sm"><PinLeftIcon className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm"><PinRightIcon className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm"><Pencil1Icon className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm"><DownloadIcon className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm"><FontBoldIcon className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm"><FontItalicIcon className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm"><UnderlineIcon className="h-4 w-4" /></Button>
        </div>
            <div className="w-full p-80  h-96 border border-slate-300 rounded"></div>
        </div>
    )
}
