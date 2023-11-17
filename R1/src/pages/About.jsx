const About = () => {
  return (
    <>
      <div className=" flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest  ">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        aspernatur consequatur ullam commodi animi nostrum impedit ut aliquam
        necessitatibus quisquam dolore quod quaerat, nesciunt corporis non nam
        quam quos, voluptate incidunt eveniet. Eos reprehenderit dignissimos
        illum harum ducimus fugit in?
      </p>
    </>
  );
};
export default About;

// - W React fragment > p 5(M-6, T-L, L-8, M-W-2 M-A ) class=  > {Lorem 40 }
