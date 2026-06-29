import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing, browsing, or using the <strong>Launchlite</strong> website located at{" "}
        <strong>launchlite.in</strong>, or by engaging us for any service including website
        development, mobile app development, printing, or branding you confirm that you have read,
        understood, and agree to be bound by these Terms of Service. If you do not agree to these
        terms, you must not use our website or services.
      </p>
    ),
  },
  {
    title: "2. Our Services",
    content: (
      <>
        <p>Launchlite provides the following services to individuals and businesses:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Website Design & Development</li>
          <li>Mobile Application Development</li>
          <li>UI/UX Design</li>
          <li>Branding & Logo Design</li>
          <li>Digital Marketing</li>
          <li>Printing Services (Wedding Cards, Visiting Cards, Brochures, Flex, Posters, etc.)</li>
        </ul>
        <p className="mt-3">
          We reserve the right to modify, suspend, or discontinue any service at any time without
          prior notice. We will not be liable to you or any third party for any such modification or
          discontinuation.
        </p>
      </>
    ),
  },
  {
    title: "3. Client Responsibilities",
    content: (
      <>
        <p>To ensure smooth and timely project delivery, clients agree to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Provide all required content (text, images, logos, references) in a timely manner as agreed upon project start.</li>
          <li>Review and provide feedback or approvals within the timeframes agreed in the project scope.</li>
          <li>Ensure all content and materials provided do not infringe on any third-party copyright, trademark, or other intellectual property rights.</li>
          <li>Communicate changes to requirements clearly and in writing (via email or WhatsApp).</li>
        </ul>
        <p className="mt-3">
          Any delays caused by the client's failure to provide required materials or approvals on time
          may result in revised delivery timelines. Launchlite will not be held responsible for
          such delays.
        </p>
      </>
    ),
  },
  {
    title: "4. Payment Terms",
    content: (
      <>
        <ul className="list-disc pl-6 mt-1 space-y-2">
          <li><strong>Advance Payment:</strong> All projects require a minimum of <strong>50% advance payment</strong> before work commences.</li>
          <li><strong>Final Payment:</strong> The remaining balance is due before final delivery or website/app go-live.</li>
          <li><strong>Printing Orders:</strong> Printing services require <strong>100% advance payment</strong> before production begins.</li>
          <li><strong>Payment Methods:</strong> We accept bank transfer (NEFT/IMPS/UPI) and other methods as agreed upon.</li>
          <li><strong>GST:</strong> Applicable taxes (GST) will be added to the invoice as per Indian tax regulations, where applicable.</li>
        </ul>
        <p className="mt-4">
          Failure to make timely payments may result in suspension of work. Overdue invoices beyond
          30 days may attract a late fee.
        </p>
      </>
    ),
  },
  {
    title: "5. Revision Policy",
    content: (
      <>
        <ul className="list-disc pl-6 mt-1 space-y-2">
          <li>Each project includes up to <strong>3 rounds of revisions</strong> within the agreed project scope unless otherwise specified in writing.</li>
          <li>Revisions must be consolidated — please send all feedback in one message rather than multiple small requests.</li>
          <li>Revisions beyond the included rounds, or requests that fall outside the original agreed scope, will be quoted and billed separately.</li>
          <li>A &ldquo;revision&rdquo; means refining existing work. Completely new directions or concepts are considered a new project scope.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Project Cancellation & Refund Policy",
    content: (
      <>
        <ul className="list-disc pl-6 mt-1 space-y-2">
          <li><strong>Cancellation before work begins:</strong> Full advance refund, minus any administrative or consultation charges.</li>
          <li><strong>Cancellation after work has begun:</strong> The advance payment is non-refundable. A settlement invoice for work completed to date will be issued.</li>
          <li><strong>Cancellation after 50% project completion:</strong> Full project fee becomes payable, as resources have been significantly committed.</li>
          <li><strong>Printing orders:</strong> Once sent to print, orders cannot be cancelled or refunded. In case of a printing error on our part, we will reprint at no cost.</li>
        </ul>
        <p className="mt-4">
          Refund requests must be submitted in writing via email to{" "}
          <strong>{siteConfig.contact.email}</strong> and will be reviewed within 7 business days.
        </p>
      </>
    ),
  },
  {
    title: "7. Intellectual Property Rights",
    content: (
      <>
        <ul className="list-disc pl-6 mt-1 space-y-2">
          <li>All designs, code, graphics, and creative work produced by Launchlite remain our intellectual property until <strong>full and final payment</strong> is received.</li>
          <li>Upon receipt of full payment, copyright for the specific project deliverables transfers to the client.</li>
          <li>Launchlite retains the right to <strong>showcase all completed work</strong> in our portfolio, case studies, and on social media, unless the client explicitly requests confidentiality in writing before project commencement.</li>
          <li>Any third-party assets (stock images, fonts, plugins, libraries) used in a project are subject to their respective licenses. The client is responsible for understanding and complying with these licenses.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Post-Delivery & Maintenance",
    content: (
      <>
        <ul className="list-disc pl-6 mt-1 space-y-2">
          <li>Launchlite provides <strong>30 days of free bug-fix support</strong> after project delivery for issues directly related to our work.</li>
          <li>Bug fixes cover errors in functionality as delivered. Changes in scope, new features, or content updates after delivery are billable.</li>
          <li>For ongoing maintenance (hosting, updates, security patches, content changes), a separate maintenance agreement must be established.</li>
          <li>Launchlite is not responsible for issues arising from client modifications to the delivered project after handover.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by applicable law, Launchlite shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages — including but not limited
        to loss of profits, revenue, data, or business opportunities — arising out of or related to
        your use of our services, even if we have been advised of the possibility of such damages.
        Our total liability for any claim arising from our services shall not exceed the total amount
        paid by the client for that specific project.
      </p>
    ),
  },
  {
    title: "10. Confidentiality",
    content: (
      <p>
        Both parties agree to keep confidential any sensitive business information, project details,
        or proprietary data shared during the course of the engagement. Launchlite will not share
        your project information, business data, or content with any third party without your written
        consent, except where required by law or necessary to deliver the agreed services (e.g.,
        passing a logo file to a printer).
      </p>
    ),
  },
  {
    title: "11. Governing Law & Dispute Resolution",
    content: (
      <>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of{" "}
          <strong>Maharashtra, India</strong>. Any disputes arising out of or in connection with
          these terms shall first be attempted to be resolved amicably through direct communication.
        </p>
        <p className="mt-3">
          If a resolution cannot be reached within 30 days, the dispute shall be subject to the
          exclusive jurisdiction of the courts located in <strong>Ahilyanagar, Maharashtra, India</strong>.
        </p>
      </>
    ),
  },
  {
    title: "12. Changes to These Terms",
    content: (
      <p>
        We reserve the right to update or modify these Terms of Service at any time. Changes will be
        effective immediately upon posting to this page. The &ldquo;Last Updated&rdquo; date at the
        top of this page will reflect the most recent revision. It is your responsibility to review
        these terms periodically. Continued use of our services after any changes constitutes your
        acceptance of the revised terms.
      </p>
    ),
  },
  {
    title: "13. Contact Us",
    content: (
      <p>
        For any questions, clarifications, or concerns about these Terms of Service, please reach out
        to us:
        <br /><br />
        <strong>Email:</strong> {siteConfig.contact.email}<br />
        <strong>Phone / WhatsApp:</strong> {siteConfig.contact.phoneDisplay}<br />
        <strong>Address:</strong> {siteConfig.contact.address}
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold font-outfit rounded-full mb-4">
              Legal
            </span>
            <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-heading mb-4">
              Terms of Service
            </h1>
            <p className="font-inter text-body text-lg">
              Last updated: <strong>June 28, 2026</strong>
            </p>
            <div className="mt-6 p-4 bg-orange-50 border border-orange-100 rounded-xl">
              <p className="font-inter text-sm text-orange-900">
                Please read these terms carefully before engaging our services. By working with
                Launchlite, you agree to all terms outlined below. If you have any questions,
                feel free to contact us before proceeding.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="bg-white rounded-2xl border border-borderLight p-8 shadow-card"
              >
                <h2 className="font-outfit text-xl font-bold text-heading mb-4 pb-3 border-b border-borderLight">
                  {section.title}
                </h2>
                <div className="font-inter text-body leading-relaxed text-[15px]">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
