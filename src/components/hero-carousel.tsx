"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
import { Movie } from "@/lib/types";
import { Ticket } from "lucide-react";

interface HeroCarouselProps {
  movies: Movie[];
}

export function HeroCarousel({ movies }: HeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {movies.map((movie, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-full relative">
                <Image
                  src={movie.posterUrl}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={movie.posterHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter drop-shadow-lg">
                      {movie.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-foreground/80 drop-shadow-md hidden sm:block">
                      {movie.description}
                    </p>
                    <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-bold shadow-lg shadow-accent/20">
                      <Link href={`/movie/${movie.id}`}>
                        <Ticket className="mr-2 h-6 w-6" />
                        Book Tickets
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </section>
  )
}
