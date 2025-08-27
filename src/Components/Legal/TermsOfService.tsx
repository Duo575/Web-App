/**
 * Terms of Service Component
 * Purpose: Display comprehensive terms of service for Cosmobits
 * Dependencies: React, lucide-react
 * Features: Modal display, comprehensive legal terms, responsive design
 */

import React from "react";
import { Shield } from "lucide-react";

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 mobile:p-3 tablet:p-4"
      style={{ zIndex: 2147483647 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onWheel={(e) => {
        // Prevent backdrop from capturing wheel events
        e.stopPropagation();
      }}
    >
      <div
        className="bg-gray-900 rounded-xl mobile:rounded-2xl w-full max-w-[95vw] mobile:max-w-[90vw] tablet:max-w-4xl h-[90vh] flex flex-col border border-white/20 overflow-hidden relative"
        style={{ zIndex: 2147483647 }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => {
          // Allow wheel events to pass through to content
          e.stopPropagation();
        }}
      >
        {/* Modal Header */}
        <div className="flex items-center p-3 mobile:p-4 tablet:p-6 border-b border-white/20 flex-shrink-0">
          <div className="flex items-center gap-2 mobile:gap-3">
            <Shield className="text-blue-400" size={20} />
            <h3 className="text-base mobile:text-lg tablet:text-xl font-semibold text-white">
              Terms of Service
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div
          className="flex-1 overflow-y-auto p-3 mobile:p-4 tablet:p-6 modal-content"
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => {
            // Ensure wheel events are handled by this scrollable container
            e.stopPropagation();
          }}
          style={{
            scrollBehavior: "smooth",
            overscrollBehavior: "contain",
          }}
        >
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
            <div className="text-sm text-gray-400 mb-4">
              Last Updated: January 15, 2025
            </div>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                1. Agreement to Terms
              </h4>
              <p className="text-sm leading-relaxed">
                By accessing and using Cosmobits' website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                2. Services Description
              </h4>
              <p className="text-sm leading-relaxed mb-3">
                Cosmobits provides web development, design, and digital solution
                services including but not limited to:
              </p>
              <ul className="text-sm space-y-2 ml-4">
                <li>
                  • Custom website development using React, Node.js, and modern
                  technologies
                </li>
                <li>• UI/UX design and user experience optimization</li>
                <li>• Full-stack web application development</li>
                <li>• Website maintenance and support services</li>
                <li>• Digital consultation and technical advisory</li>
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                3. User Responsibilities
              </h4>
              <p className="text-sm leading-relaxed mb-3">
                When using our services, you agree to:
              </p>
              <ul className="text-sm space-y-2 ml-4">
                <li>• Provide accurate and complete information</li>
                <li>• Use our services for lawful purposes only</li>
                <li>• Respect intellectual property rights</li>
                <li>
                  • Not engage in any activity that could harm our systems or
                  other users
                </li>
                <li>• Maintain the confidentiality of any login credentials</li>
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                4. Payment Terms
              </h4>
              <p className="text-sm leading-relaxed mb-3">For paid services:</p>
              <ul className="text-sm space-y-2 ml-4">
                <li>
                  • Payment terms will be specified in individual project
                  agreements
                </li>
                <li>• All prices are subject to change with 30 days notice</li>
                <li>
                  • Refunds are handled on a case-by-case basis as per our
                  refund policy
                </li>
                <li>• Late payments may result in service suspension</li>
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                5. Intellectual Property
              </h4>
              <p className="text-sm leading-relaxed">
                All content, features, and functionality on our website are
                owned by Cosmobits and are protected by international copyright,
                trademark, and other intellectual property laws. Upon full
                payment for custom development work, clients receive ownership
                rights to their specific project deliverables, while Cosmobits
                retains rights to underlying frameworks, methodologies, and
                general knowledge.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                6. Limitation of Liability
              </h4>
              <p className="text-sm leading-relaxed">
                Cosmobits shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from your use of our services. Our
                total liability shall not exceed the amount paid by you for the
                specific service in question.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                7. Service Availability
              </h4>
              <p className="text-sm leading-relaxed">
                While we strive to maintain high availability, we do not
                guarantee that our services will be uninterrupted or error-free.
                We reserve the right to modify, suspend, or discontinue any
                aspect of our services at any time with reasonable notice.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                8. Privacy and Data Protection
              </h4>
              <p className="text-sm leading-relaxed">
                Your privacy is important to us. Our collection and use of
                personal information is governed by our Privacy Policy, which is
                incorporated into these Terms by reference. By using our
                services, you consent to the collection and use of information
                as outlined in our Privacy Policy.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                9. Termination
              </h4>
              <p className="text-sm leading-relaxed">
                Either party may terminate services with appropriate notice as
                specified in individual project agreements. Upon termination,
                your right to use our services will cease immediately, though
                certain provisions of these Terms will survive termination.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                10. Governing Law
              </h4>
              <p className="text-sm leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of India, without regard to its conflict of law
                provisions. Any disputes arising from these Terms or our
                services shall be subject to the exclusive jurisdiction of the
                courts in India.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                11. Changes to Terms
              </h4>
              <p className="text-sm leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify users of any material changes by posting the new Terms on
                this page and updating the "Last Updated" date. Your continued
                use of our services after such modifications constitutes
                acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">
                12. Contact Information
              </h4>
              <p className="text-sm leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us through our website's contact form or email us at
                legal@cosmobits.work.
              </p>
            </section>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className="p-3 mobile:p-4 tablet:p-6 border-t border-white/20 flex justify-end flex-shrink-0 relative"
          style={{ zIndex: 2147483647 }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="px-4 mobile:px-5 tablet:px-6 py-1.5 mobile:py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm mobile:text-base rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer select-none relative"
            style={{ zIndex: 2147483647 }}
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
