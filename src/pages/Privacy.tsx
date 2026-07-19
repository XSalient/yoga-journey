import React, { useEffect } from 'react';
import { Header, Footer } from '@/components/Layout';
import { setSEOMeta } from '@/lib/seo';

export const Privacy: React.FC = () => {
  useEffect(() => {
    setSEOMeta({
      title: 'Privacy Policy | Yoga Within',
      description: 'Yoga Within Privacy Policy. Learn how we collect, use, and protect your personal information when you plan your wellness and adventure journeys with us.',
      keywords: 'privacy policy, data protection, personal information, GDPR',
    });
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white py-16 sm:py-24">
        <div className="container-max max-w-4xl">
          <h1 className="text-h1 font-serif text-text-primary mb-2">Privacy Policy</h1>
          <p className="text-body text-text-muted mb-12">Last updated: July 2026</p>

          <div className="prose prose-lg max-w-none text-text-muted space-y-8">
            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">1. Introduction</h2>
              <p className="text-body">
                Yoga Within ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, and interact with us.
              </p>
              <p className="text-body">
                Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our services. By accessing and using Yoga Within, you signify that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">2. Information We Collect</h2>
              <h3 className="text-h4 font-semibold text-text-primary mb-3">Information You Provide Directly</h3>
              <p className="text-body">We collect information you voluntarily provide when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 my-4">
                <li>Complete our journey enquiry form</li>
                <li>Contact us via email or phone</li>
                <li>Sign up for our newsletter</li>
                <li>Book a journey with us</li>
                <li>Communicate with us about your travel preferences</li>
              </ul>
              <p className="text-body">This information may include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 my-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number / WhatsApp number</li>
                <li>Country of residence</li>
                <li>Travel preferences and interests</li>
                <li>Budget information</li>
                <li>Passport and visa information (when booking)</li>
                <li>Payment information</li>
                <li>Health or accessibility requirements</li>
              </ul>

              <h3 className="text-h4 font-semibold text-text-primary mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-body">When you visit our website, we may automatically collect certain information about your device and how you interact with our site:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 my-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-body">We use the information we collect for purposes including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 my-4">
                <li>Processing your journey enquiries and bookings</li>
                <li>Communicating with you about your journey</li>
                <li>Providing customer support and assistance</li>
                <li>Customizing your journey experience</li>
                <li>Sending promotional materials and updates (if you've opted in)</li>
                <li>Improving our website and services</li>
                <li>Ensuring compliance with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Fulfilling contracts and legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">4. How We Share Your Information</h2>
              <p className="text-body">We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 my-4">
                <li><strong>Service Providers:</strong> Partners who help us process payments, send emails, and provide customer support</li>
                <li><strong>Journey Partners:</strong> Accommodations, guides, and local partners necessary to deliver your journey</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
                <li><strong>Travel Insurers:</strong> If you purchase travel insurance through us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">5. Data Security</h2>
              <p className="text-body">
                We implement appropriate technical, administrative, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 my-4">
                <li>SSL encryption for all data transmissions</li>
                <li>Secure servers and regular security audits</li>
                <li>Limited access to personal information by authorized personnel only</li>
                <li>Regular updates to security systems</li>
              </ul>
              <p className="text-body">
                While we strive to protect your personal information, no system is completely secure. We cannot guarantee absolute security of any information you provide.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">6. Your Rights and Choices</h2>
              <h3 className="text-h4 font-semibold text-text-primary mb-3">Access and Control</h3>
              <p className="text-body">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 my-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request restriction of processing</li>
                <li>Request data portability</li>
              </ul>

              <h3 className="text-h4 font-semibold text-text-primary mb-3 mt-6">Unsubscribe</h3>
              <p className="text-body">
                If you wish to unsubscribe from our mailing list or opt-out of promotional communications, you can do so by clicking the "unsubscribe" link in any email we send, or by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">7. Cookies and Tracking</h2>
              <p className="text-body">
                Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.
              </p>
              <p className="text-body">
                You can control cookie preferences through your browser settings. However, disabling cookies may affect some functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">8. Children's Privacy</h2>
              <p className="text-body">
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">9. International Data Transfers</h2>
              <p className="text-body">
                Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By providing your information to us, you consent to such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">10. Third-Party Links</h2>
              <p className="text-body">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">11. Retention of Information</h2>
              <p className="text-body">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Once you are no longer a customer, we will retain your information only as required by law or for legitimate business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-body">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services following such changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">13. Contact Us</h2>
              <p className="text-body">
                If you have questions about this Privacy Policy, wish to exercise any of your rights, or have concerns about our privacy practices, please contact us:
              </p>
              <div className="bg-sage-50 rounded-lg p-6 mt-4 space-y-2">
                <p className="text-body">
                  <strong>Email:</strong> <a href="mailto:privacy@journeywithin.com" className="text-forest-600 hover:underline">privacy@journeywithin.com</a>
                </p>
                <p className="text-body">
                  <strong>Phone:</strong> <a href="tel:+918800000000" className="text-forest-600 hover:underline">+91 8800 000 000</a>
                </p>
                <p className="text-body">
                  <strong>WhatsApp:</strong> <a href="https://wa.me/918800000000" className="text-forest-600 hover:underline">+91 8800 000 000</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-h2 font-serif text-text-primary mb-4">14. Your Consent</h2>
              <p className="text-body">
                By using Yoga Within's website and services, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
