export type Movie = {
    poster: string;
  };
  
  export const movies = [
    {poster: "/images/hero/1.jpeg"},
    {poster: "/images/hero/2.jpeg"},
    {poster: "/images/hero/3.jpg"},
    {poster: "/images/hero/4.jpg"},
    {poster: "/images/hero/5.jpg"},
    {poster: "/images/hero/10.jpg"},
    {poster: "/images/hero/7.jpeg" }
  ];
  
  export const randomMoviesSet1 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5));
  
  export const randomMoviesSet2 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);
  