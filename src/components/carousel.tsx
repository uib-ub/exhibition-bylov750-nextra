import { 
    Carousel as ImportedCarousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Carousel({ images }: { images: {path: string, caption: string}[] }) {
    return (
        <div className="flex justify-center">
            <ImportedCarousel className="w-full m-5 rounded-md shadow p-6 max-w-48 sm:max-w-xl flex justify-center">
                <CarouselContent className="m-0">
                    {images.map(i => (
                        <CarouselItem key={i.path} className="p-0 grid grid-cols-1">
                            <Image 
                                src={i.path} 
                                alt={i.caption} 
                                width={500} 
                                height={500} 
                                className="mb-2"
                                style={{width: 'auto', height: 'auto'}}
                            />
                            <p className="text-center italic">{i.caption}</p>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </ImportedCarousel>
        </div>
    );
}