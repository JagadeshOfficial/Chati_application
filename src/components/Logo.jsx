// Logo.js
import { ChatTeardrop } from "@phosphor-icons/react";

export default function Logo() {
    return (
        <div className="flex flex-row items-center space-x-2">
            <ChatTeardrop size={32} weight="bold" />
            <div className="text-2xl font-medium text-black dark:text-white">
                Chati
            </div>
        </div>
    );
}