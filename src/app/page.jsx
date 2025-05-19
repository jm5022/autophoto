export default function Home() {
  return (
    <div 
      className="min-h-screen p-8"
      style={{
        backgroundImage: "url('https://i.imgur.com/W2Y2NEr.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-500 mb-6 text-center">
          Photography Package Price List
        </h1>
        <p className="text-yellow-300 text-lg mb-8 text-center">
          Driven by passion, focused on perfection - Showcase your vehicle with world-class automotive photography.
        </p>
        
        <ol className="list-decimal list-inside space-y-4 text-yellow-200">
          <li className="bg-yellow-500/10 p-3 rounded-lg text-center backdrop-blur-sm">
            Basic Package: $120<br />
            <span className="text-sm text-yellow-300/80">15-20 edited photos at 2-3 locations</span>
          </li>

          <li className="bg-yellow-500/10 p-3 rounded-lg text-center backdrop-blur-sm">
            Standard Package: $150<br />
            <span className="text-sm text-yellow-300/80">20-30 edited photos with at least 3 locations including a 30 second edited reel at each location</span>
          </li>

          <li className="bg-yellow-500/10 p-3 rounded-lg text-center backdrop-blur-sm">
            Premium Package: $250<br />
            <span className="text-sm text-yellow-300/80">
              20-30 edited photos with at least 3 locations including a 30 second edited reel at each location and roller footage in between locations
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}