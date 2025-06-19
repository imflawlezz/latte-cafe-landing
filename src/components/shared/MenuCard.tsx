import React from 'react';
import { Menu } from '@/types/menu';

interface MenuCardProps {
    menu: Menu;
    className?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ menu, className = '' }) => {
    return (
        <div className={`bg-white shadow-lg text-black overflow-hidden ${className}`}>
            <div className="py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-14 lg:px-8">
                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold tracking-wider mb-8 sm:mb-12 md:mb-14 lg:mb-16 font-mono">
                    LATTE CAFE
                </h1>

                {menu.categories.map((category, categoryIndex) => (
                    <div
                        key={category.name}
                        className={categoryIndex > 0 ? 'mt-8 sm:mt-10 md:mt-12 lg:mt-16' : ''}
                    >
                        <h2 className="text-center text-lg sm:text-xl md:text-xl lg:text-xl mb-3 sm:mb-4 md:mb-5 lg:mb-5 font-mono">
                            {category.name}
                        </h2>

                        <div className="space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-4">
                            {category.dishes.map((dish, dishIndex) => (
                                <div key={dishIndex} className="text-center px-2 sm:px-4 md:px-0">
                                    <h3 className="font-bold text-xs sm:text-sm md:text-sm lg:text-sm mb-0.5 sm:mb-1 md:mb-1 lg:mb-1">
                                        {dish.name}
                                    </h3>

                                    <p className="text-xs sm:text-sm md:text-sm lg:text-sm mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 leading-relaxed px-2 sm:px-4 md:px-8 lg:px-12">
                                        {dish.description}
                                    </p>

                                    <p className="text-xs sm:text-sm md:text-sm lg:text-sm italic">
                                        ${dish.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};