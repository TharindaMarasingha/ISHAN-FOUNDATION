export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-2 border-sacredGold/20 border-t-sacredGold rounded-full animate-spin"></div>
        <p className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-deepAmber animate-pulse">
          Loading
        </p>
      </div>
    </div>
  );
}
