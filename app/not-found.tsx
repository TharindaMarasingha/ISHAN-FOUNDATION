import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-peach flex flex-col items-center justify-center px-6 text-center">
      <span className="font-display italic text-2xl text-sacredGold mb-6">404</span>
      <h1 className="font-display font-light text-5xl md:text-7xl text-deepAmber mb-8">
        Page Not Found
      </h1>
      <p className="font-sans font-light text-deepAmber max-w-md mb-12">
        The path you are seeking does not exist or has been moved.
      </p>
      <Button href="/" variant="primary">
        Back to Home
      </Button>
    </div>
  );
}
