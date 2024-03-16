

function Banner() {
  return (
    <div className="my-9">
        <div className="hero rounded-3xl lg:h-[700px] h-auto" style={{backgroundImage: 'url(https://i.ibb.co/ZdBQG9H/ban.jpg)', }}>
            <div className="hero-overlay bg-opacity-40 py-52 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl space-y-10">
                  <h1 className="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                  <p className="mb-5 text-lg">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                  <div className="flex justify-center gap-6">
                    <button className="btn rounded-[50px] bg-[#0BE58A] text-[#150B2B] font-semibold text-xl  hover:bg-transparent border-transparent hover:text-white">Explore Now</button>
                    <button className="btn rounded-[50px] bg-transparent  font-semibold text-xl  text-white hover:bg-[#0BE58A]  hover:text-[#150B2B] hover:border-transparent">Our Feedback</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner