import React from 'react';
import Logo from '../../public/Logo_Light.png'
import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

const platformLinks = [
    {
        index: 1,
        href: '/',
        label: 'Plans & Pricing'
    },
    {
        index: 2,
        href: '/',
        label: 'Personal AI Manager'
    },
    {
        index: 3,
        href: '/',
        label: 'AI Business Writer'
    },
    {
        index: 4,
        href: '/',
        label: 'AI Data Processing'
    },
]

const companyLinks = [
    {
        index: 1,
        href: '/',
        label: 'Plans & Pricing'
    },
    {
        index: 2,
        href: '/',
        label: 'Personal AI Manager'
    },
    {
        index: 3,
        href: '/',
        label: 'AI Business Writer'
    },
    {
        index: 4,
        href: '/',
        label: 'AI Data Processing'
    },
]

const resourcesLinks = [
    {
        index: 1,
        href: '/',
        label: 'Plans & Pricing'
    },
    {
        index: 2,
        href: '/',
        label: 'Personal AI Manager'
    },
    {
        index: 3,
        href: '/',
        label: 'AI Business Writer'
    },
    {
        index: 4,
        href: '/',
        label: 'AI Data Processing'
    },
]

const legalLinks = [
    {
        index: 1,
        href: '/',
        label: 'Plans & Pricing'
    },
    {
        index: 2,
        href: '/',
        label: 'Personal AI Manager'
    },
    {
        index: 3,
        href: '/',
        label: 'AI Business Writer'
    },
    {
        index: 4,
        href: '/',
        label: 'AI Data Processing'
    },
]

export default function Footer() {
    return (
        <footer >
        </footer>
    );
}
