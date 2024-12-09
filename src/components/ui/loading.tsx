export default function Loading() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-500/30 animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
      </div>
    )
  }