const About = () => {
  return (
    <>
      <div className="flex flex-wrap sm:gap-x-6 items-center justify-center">
        {/* 
- About comp > G React fragment
- W React fragment > G div 5(F, F-w, S:G-x, I-c, J-c )class = flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center
- W div > h1 5( T-4, F-b, L-n, T-t, S-T-6)class= text-4xl font-bold leading-none tracking-tight sm:text-6xl > {We Love}
-W div.flex > div 3(S, B-P, S )class = stats, bg-primary, shadow
- W div.stats > div ( S )class = stat
- W div.stat > div 5(S-T, T-P-C, T-4, F-b, T-W)class = stat-title text-primary-content text4xl font-bold tracking-widest > {Comfy}
- W React fragment > p 5(M-6, T-L, L-8, M-W-2 M-A ) class= mt-6 text-lg leading-8 max-w-2xl mx-auto > {Lorem 40 }

*/}
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg max-w-2xl mx-auto leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio odit
        cumque aperiam officiis et ad, excepturi vel ipsam sint, sequi in velit
        eligendi consequatur dicta minima recusandae modi illo consequuntur
        natus facilis ducimus. Minus libero illum minima adipisci eius.
      </p>
    </>
  );
};
export default About;
