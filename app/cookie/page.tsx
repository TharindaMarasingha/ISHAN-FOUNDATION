import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | ISHAN Foundation',
  description: 'Cookie Policy for ISHAN Foundation',
}

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          <p className="text-[#33472C]/60 italic font-light">
            Last updated: <span className="bg-[#9FBB90]/30 text-[#33472C] px-2 py-0.5 rounded font-medium ml-2">[PLACEHOLDER — August 4, 2026]</span>
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6 text-[#33472C]/80 font-light leading-relaxed text-[15px] md:text-[16px]">
          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how ISHAN Foundation ("we," "us," or "our") uses cookies and similar technologies when you visit our website, ishanfoundation.lk (the "Site"). It explains what these technologies are, why we use them, and your rights to control our use of them. This policy should be read alongside our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">2. What Are Cookies</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">3. How We Use Cookies</h2>
            <p>
              We use cookies for several reasons. Some cookies are required for technical reasons in order for our Site to operate. Other cookies enable us to track and target the interests of our users to enhance the experience on our Site. Third parties may also serve cookies through our Site for advertising, analytics, and other purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">4. Types of Cookies We Use</h2>
            <ul className="list-none space-y-4">
              <li>
                <strong className="text-[#33472C] font-medium block mb-1">Essential / Strictly Necessary Cookies:</strong>
                These cookies are strictly necessary to provide you with services available through our Site and to use some of its features, such as access to secure areas or booking systems.
              </li>
              <li>
                <strong className="text-[#33472C] font-medium block mb-1">Analytics and Performance Cookies:</strong>
                These cookies collect information that is used in aggregate form to help us understand how our Site is being used or how effective our marketing campaigns are.
              </li>
              <li>
                <strong className="text-[#33472C] font-medium block mb-1">Functional Cookies:</strong>
                These cookies allow our Site to remember choices you make when you use the Site, such as remembering your language preferences. The purpose of these cookies is to provide you with a more personal experience.
              </li>
              <li>
                <strong className="text-[#33472C] font-medium block mb-1">Marketing and Advertising Cookies:</strong>
                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">5. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Site, deliver advertisements on and through the Site, and embed external content (such as videos or social media widgets). These third parties may include analytics providers, advertising networks, and social media platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">6. Managing Your Cookie Preferences</h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser.
            </p>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-[#33472C] pt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have questions about our use of cookies or other technologies, please contact us at <a href="mailto:info@ishanfoundation.lk" className="text-[#9FBB90] hover:text-[#33472C] transition-colors duration-300 font-medium">info@ishanfoundation.lk</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
