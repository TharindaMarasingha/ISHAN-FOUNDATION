-- Create the bookings table
CREATE TABLE public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    package_name TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    participants INTEGER NOT NULL DEFAULT 1,
    amount_paid NUMERIC(10, 2) NOT NULL,
    paypal_order_id TEXT NOT NULL UNIQUE,
    payment_status TEXT NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role full access (which is default, but good to be explicit)
-- And prevent anonymous read/write
CREATE POLICY "Service role has full access to bookings" ON public.bookings
    FOR ALL
    USING (auth.jwt() ->> 'role' = 'service_role');
