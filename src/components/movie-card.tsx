import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Badge } from './ui/badge';

interface MovieCardProps {
  movie: Movie;
  trending?: boolean;
}

export function MovieCard({ movie, trending = false }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className="group block relative">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/40">
        <CardContent className="p-0">
          <div className="aspect-[2/3] relative">
            <Image
              src={movie.posterUrl}
              alt={movie.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              data-ai-hint={movie.posterHint}
            />
             {trending && (
                <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">Trending</Badge>
             )}
          </div>
          <div className="p-3">
            <h3 className="font-bold text-base truncate group-hover:text-primary transition-colors">{movie.title}</h3>
            <p className="text-xs text-muted-foreground truncate">{movie.genre.join(', ')}</p>
            <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-muted-foreground">{movie.language}</p>
                <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{movie.rating.toFixed(1)}</span>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}