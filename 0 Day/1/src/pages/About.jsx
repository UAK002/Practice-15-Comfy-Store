const About = () => {
  return (
    <>
      {/* 
- About comp > G React fragment
- W React fragment > G div 5(F, F-w, S:G-x, I-c, J-c )class = flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center
- W div > h1 5( T-4, F-b, L-n, T-t, S-T-6)class= text-4xl font-bold leading-none tracking-tight sm:text-6xl > {We Love}
-W div.flex > div 3(S, B-P, S )class = stats, bg-primary, shadow
- W div.stats > div ( S )class = stat
- W div.stat > div 5(S-T, T-P-C, T-4, F-b, T-W)class = stat-title text-primary-content text4xl font-bold tracking-widest > {Comfy}
- W React fragment > p 5(M-6, T-L, L-8, M-W-2 M-A ) class= mt-6 text-lg leading-8 max-w-2xl mx-auto > {Lorem 40 }


*/}
      <div className="flex flex-wrap sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        tempora culpa officiis? Accusantium ab mollitia rem ad, perspiciatis
        quos illum maxime, eveniet corporis sunt, repellendus iusto ea facilis
        porro adipisci veritatis excepturi laboriosam vitae ex a accusamus
        minus! Eveniet, minima.
      </p>
    </>
  );
};
export default About;
