import { Button } from './Button';
const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outline', 'ghost'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
        onClick: { action: 'clicked' },
    },
};
export default meta;
export const Primary = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};
export const Outline = {
    args: {
        variant: 'outline',
        children: 'Outline Button',
    },
};
export const Ghost = {
    args: {
        variant: 'ghost',
        children: 'Ghost Button',
    },
};
export const Small = {
    args: {
        size: 'sm',
        children: 'Small Button',
    },
};
export const Medium = {
    args: {
        size: 'md',
        children: 'Medium Button',
    },
};
export const Large = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
};
export const Disabled = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
};
