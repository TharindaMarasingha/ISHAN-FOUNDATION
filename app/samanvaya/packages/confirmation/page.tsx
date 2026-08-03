import Link from "next/link";
import { Button } from "@/components/ui/Button";

type Props = {
  searchParams: Promise<{ orderId?: string }>
}

export default async function ConfirmationPage({ searchParams }: Props) {
  const { orderId } = await searchParams;

  return (
    <div className="min-h-screen pt-[120px] pb-24 bg-[#FCF6F0] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center bg-white p-12 rounded-3xl shadow-sm border border-black/5">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl text-deepAmber mb-4">
          Reservation Confirmed
        </h1>
        
        <p className="font-sans text-lg text-[#5a4a3a] mb-8">
          Thank you for reserving your spot for the Samanvaya retreat. We have received your payment securely.
        </p>
        
        {orderId && (
          <div className="bg-[#FCF6F0] p-4 rounded-xl inline-block mb-10 text-sm font-sans">
            <span className="text-burntOrange font-medium">Booking Reference:</span>{" "}
            <span className="font-mono text-deepAmber">{orderId}</span>
          </div>
        )}
        
        <div className="flex justify-center">
          <Button href="/" variant="primary" className="bg-mandarin text-peach hover:bg-burntOrange">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
