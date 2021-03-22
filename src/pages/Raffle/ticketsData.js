import commonIcon from '../../assets/tickets/common.svg';
import uncommonIcon from '../../assets/tickets/uncommon.svg';
import rareIcon from '../../assets/tickets/rare.svg';
import legendaryIcon from '../../assets/tickets/legendary.svg';
import mythicalIcon from '../../assets/tickets/mythical.svg';
import godlikeIcon from '../../assets/tickets/godlike.svg';

export const ticketsData = [
    {
        type: 'common', icon: commonIcon, items: 6000, supply: 0, price: 0.23, cost: 0.23, chance: 0,
        wearables: [
            { name: 'Vote Sign', amount: '1000' },
            { name: 'L2 Sign', amount: '1000' },
            { name: 'Fireball', amount: '1000' },
            { name: 'Elf Ears', amount: '1000' },
            { name: 'The Imperial Moustache', amount: '1000' },
            { name: 'Common Rofl', amount: '1000' }
        ]
    },
    {
        type: 'uncommon', icon: uncommonIcon, items: 3250, supply: 0, price: 0.91, cost: 0.91, chance: 0,
        wearables: [
            { name: 'Snapshot Shirt', amount: '500' },
            { name: 'Polygon Shirt', amount: '500' },
            { name: 'Dragon Horns', amount: '500' },
            { name: 'Gemstone Ring', amount: '500' },
            { name: 'Tiny Crown', amount: '500' },
            { name: 'Uncommon Rofl', amount: '500' },
            { name: 'Common Rofl', amount: '250' }
        ]
    },
    { type: 'rare', icon: rareIcon, items: 1625, supply: 0, price: 1.51, cost: 1.51, chance: 0 },
    { type: 'legendary', icon: legendaryIcon, items: 450, supply: 0, price: 7.18, cost: 7.18, chance: 0 },
    { type: 'mythical', icon: mythicalIcon, items: 175, supply: 0, price: 29.16, cost: 29.16, chance: 0 },
    { type: 'godlike', icon: godlikeIcon, items: 12, supply: 0, price: 115.24, cost: 115.24, chance: 0 }
];