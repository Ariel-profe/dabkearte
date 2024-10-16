export type Movie = {
    poster: string;
  };
  
  export const movies = [
    {poster: "/images/hero/1.jpeg"},
    {poster: "/images/hero/2.jpeg"},
    {poster: "/images/hero/3.jpg"},
    {poster: "/images/hero/4.jpg"},
    {poster: "/images/hero/5.jpg"},
    {poster: "/images/hero/6.jpg"},
    {poster: "/images/hero/7.jpeg" },
    {poster: "/images/hero/8.jpg" },
    {poster: "/images/hero/9.jpg" },
    {poster: "/images/hero/10.jpg" },
    {poster: "/images/hero/11.jpeg" },
    {poster: "/images/hero/12.jpeg" },
    {poster: "/images/hero/13.jpg" },
    {poster: "/images/hero/14.jpg" },
    {poster: "/images/hero/15.jpg" },
    {poster: "/images/hero/16.jpeg" },
    {poster: "/images/hero/17.jpeg" },
    {poster: "/images/hero/18.jpeg" },
    {poster: "/images/hero/19.jpeg" },
    {poster: "/images/hero/20.jpeg" },
    {poster: "/images/hero/21.jpeg" },
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
  