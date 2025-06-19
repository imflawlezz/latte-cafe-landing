"use client";

import { useState } from "react";
import { MenuCard } from "@/components/shared/MenuCard";
import { foodMenu, drinksMenu, takeawayMenu } from "@/data/menus";
import { MenuButton } from "@/components/shared/MenuButton";

export const Menu = () => {
    const [activeKey, setActiveKey] = useState<"food" | "drinks" | "takeaway">("food");

    const menus = {
        food: foodMenu,
        drinks: drinksMenu,
        takeaway: takeawayMenu,
    };

    const labels: { key: keyof typeof menus; label: string }[] = [
        { key: "food", label: "Food Menu" },
        { key: "drinks", label: "Drinks Menu" },
        { key: "takeaway", label: "Takeaway Menu" },
    ];

    return (
        <section className="text-[var(--button-primary)] bg-[var(--section-light)] py-10 lg:py-28 px-8 md:px-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mx-auto">
                <div className="lg:max-w-lg w-full flex flex-col gap-12">
                    <div>
                        <h1 className="font-mono font-bold text-lg">Menu</h1>
                        <p className="text-3xl mt-4">
                            We change our menu every season. Here is what we are currently dishing up.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 md:gap-3 w-full">
                        {labels.map(({ key, label }) => (
                            <MenuButton
                                key={key}
                                label={label}
                                isActive={activeKey === key}
                                onClick={() => setActiveKey(key)}
                            />
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <MenuCard menu={menus[activeKey]} className="max-w-2xl mx-auto lg:mx-0" />
                </div>
            </div>
        </section>
    );
};
