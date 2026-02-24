import { 
    CardDescription,
    CardHeader, 
    CardTitle, 
    Card as ShadcnCard 
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({image, href, alt, title, children}: {
    image?: string, 
    href: string,
    alt?: string, 
    title?: string, 
    children?: React.ReactNode}) {
    return (
        <ShadcnCard className='relative mx-auto w-full max-w-xs pt-5'>
            <Link href={href}>
                <Image
                    src={image || '/images/middelalderforum_2026_header_0.jpg'} 
                    alt={alt || 'An image.'}
                    width={300}
                    height={300}
                    className='relative z-20 h-35 object-cover brightness-100 dark:brightness-40'
                />
            </Link>
            <CardHeader>
                <CardTitle>
                    <Link href={href}>{title || ''}</Link>
                </CardTitle>
                <CardDescription>{children}</CardDescription>
            </CardHeader>
        </ShadcnCard>
    );
}

export function Cards({children}: {children: React.ReactNode}) {
    return (
        <div className='flex justify-center'>
            <div className={`
                shrink 
                mt-15 
                grid
                place-items-center
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                gap-8
            `}>
                {children}
            </div>
        </div>
    );
}