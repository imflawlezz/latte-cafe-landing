import React from "react";
import clsx from "clsx";

type MenuButtonProps = {
    label: string;
    isActive: boolean;
    onClick?: () => void;
    className?: string;
};

export const MenuButton: React.FC<MenuButtonProps> = ({ label, isActive, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                `text-[16px] font-inter border-2 border-[var(--button-primary)] py-4 transition-colors ${className}`,
                isActive ? "bg-[var(--button-primary)] text-white" : "text-[var(--button-primary)]"
            )}
        >
            {label}
        </button>
    );
};