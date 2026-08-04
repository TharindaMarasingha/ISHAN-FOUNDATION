import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | ISHAN Foundation',
  description: 'Terms of Use for ISHAN Foundation',
}

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 md:px-12 font-sans">
      <div className="max-w-[760px] mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-[#9FBB90] hover:text-[#33472C] text-xs uppercase tracking-widest font-semibold transition-colors duration-300 mb-12"
        >
          ← Back to Home
        </Link>
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-[#33472C] mb-4">
            Terms of Use
          </h1>
          <p className="text-[#33472C]/60 italic font-light">
            Last updated: <span className="bg-[#9FBB90]/30 text-[#33472C] px-2 py-0.5 rounded font-medium ml-2">[PLACEHOLDER — August 4, 2026]</span>
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6 text-[#33472C]/80 font-light leading-relaxed text-[15px] md:text-[16px]">
          <p>
            These Terms of Use ("Terms") govern your access to and use of ishanfoundation.lk (the "Site"), operated by ISHAN Foundation ("ISHAN," "we," "us," or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
          </p>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              Using the Site constitutes acceptance of these Terms and our Privacy Policy. We may update these Terms from time to time, and continued use of the Site after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">2. Use of the Site</h2>
            <p>
              The Site and its content are provided for general informational purposes about ISHAN Foundation, its programmes, initiatives, and ecosystem. You agree to use the Site only for lawful purposes and in a manner consistent with its intended use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">3. Intellectual Property</h2>
            <p>
              All content on the Site — including text, graphics, logos, images, and design elements — is the property of ISHAN Foundation or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any Site content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">4. User Submissions</h2>
            <p>
              Where the Site allows you to submit information (such as through contact forms, inquiry forms, or programme registrations), you agree that the information you provide is accurate and that you have the right to share it with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">5. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites or services that are not owned or controlled by ISHAN Foundation. We are not responsible for the content, privacy practices, or terms of any third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p>
              The Site is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee that the Site will be uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, ISHAN Foundation shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">8. Programme and Event Participation</h2>
            <p>
              Participation in any ISHAN programmes, retreats, or immersive experiences referenced on the Site is subject to separate terms, conditions, and agreements provided at the time of registration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">9. Changes to These Terms</h2>
            <p>
              We may revise these Terms at any time. Updates will be posted on this page with a revised "Last updated" date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at <a href="mailto:info@ishanfoundation.lk" className="text-[#9FBB90] hover:text-[#33472C] transition-colors duration-300 font-medium">info@ishanfoundation.lk</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
