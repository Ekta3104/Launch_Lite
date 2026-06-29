import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to <strong>Launchlite</strong> ("we", "us", or "our"). We are a digital agency
          providing website development, mobile app development, printing, and branding services,
          operating from Ahilyanagar, Maharashtra, India.
        </p>
        <p className="mt-3">
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website <strong>launchlite.in</strong> or contact us for our services.
          Please read this policy carefully. If you disagree with its terms, please discontinue use
          of our website.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>We may collect the following types of personal information:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Identity Data:</strong> First name, last name, business name.</li>
          <li><strong>Contact Data:</strong> Email address, phone number, WhatsApp number, billing or delivery address.</li>
          <li><strong>Project Data:</strong> Requirements, files, content, and preferences you share with us for project execution.</li>
          <li><strong>Technical Data:</strong> IP address, browser type and version, time zone, operating system, and browsing behaviour on our site.</li>
          <li><strong>Communication Data:</strong> Messages sent via our contact form, WhatsApp, or email.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Collect Your Data",
    content: (
      <>
        <p>We collect data through the following methods:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Contact Forms:</strong> When you submit our inquiry or contact form, your details are securely processed via Formspree.</li>
          <li><strong>WhatsApp & Email:</strong> When you reach out to us directly via WhatsApp or email.</li>
          <li><strong>Cookies & Analytics:</strong> When you browse our website, cookies may be used to collect technical and usage data to improve our website's performance.</li>
          <li><strong>Direct Interaction:</strong> When you provide information during a project consultation or onboarding call.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. How We Use Your Data",
    content: (
      <>
        <p>We use your personal data for the following purposes:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>To respond to your inquiries and provide our services.</li>
          <li>To create proposals, quotations, and service agreements.</li>
          <li>To deliver completed projects and send project-related updates.</li>
          <li>To process payments and maintain billing records.</li>
          <li>To improve our website and service quality.</li>
          <li>To comply with any applicable legal obligations.</li>
        </ul>
        <p className="mt-3">
          We will never sell your personal data to any third party.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies Policy",
    content: (
      <>
        <p>
          Our website may use cookies small text files placed on your device to improve your
          browsing experience. Cookies help us understand how visitors use our site, which pages are
          most visited, and how long they stay.
        </p>
        <p className="mt-3">
          You can choose to disable cookies through your browser settings at any time. However,
          disabling cookies may affect certain functionalities of our website. We do not use cookies
          to identify you personally or share data with advertisers.
        </p>
      </>
    ),
  },
  {
    title: "6. Third-Party Services",
    content: (
      <>
        <p>We use the following trusted third-party services to operate our website and business. Each has its own privacy policy:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Formspree:</strong> Processes form submissions from our contact form securely.</li>
          <li><strong>WhatsApp (Meta):</strong> Used for direct client communication.</li>
          <li><strong>Google Fonts:</strong> Delivers fonts to your browser when you visit our site.</li>
        </ul>
        <p className="mt-3">
          We do not share your personal information with any third parties beyond what is listed above, and only to the extent necessary to deliver our services.
        </p>
      </>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <p>
        We retain your personal data only for as long as is necessary to fulfil the purpose for which
        it was collected — typically the duration of a project plus up to 2 years for billing and
        legal records. Communications (emails and WhatsApp messages) may be retained for up to 3
        years for reference. You may request deletion of your data at any time by contacting us.
      </p>
    ),
  },
  {
    title: "8. Data Security",
    content: (
      <p>
        We take reasonable technical and organisational measures to protect your personal data from
        unauthorised access, misuse, loss, or disclosure. All form submissions are handled over
        encrypted HTTPS connections. However, no internet transmission is ever 100% secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "9. Your Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of any inaccurate data.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data where no legal obligation requires us to retain it.</li>
          <li><strong>Objection:</strong> Object to how we process your data in certain circumstances.</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us at <strong>{siteConfig.contact.email}</strong>.
        </p>
      </>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>
        Our website and services are not directed at individuals under the age of 13. We do not
        knowingly collect personal data from children. If you believe a child has provided us with
        personal information, please contact us immediately and we will take steps to delete it.
      </p>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or
        legal requirements. When we do, the "Last Updated" date at the top of this page will be
        revised. We encourage you to review this page periodically. Continued use of our website
        after any changes constitutes your acceptance of the updated policy.
      </p>
    ),
  },
  {
    title: "12. Contact Us",
    content: (
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy, please reach
        out to us:
        <br /><br />
        <strong>Email:</strong> {siteConfig.contact.email}<br />
        <strong>Phone:</strong> {siteConfig.contact.phoneDisplay}<br />
        <strong>Address:</strong> {siteConfig.contact.address}
      </p>
    ),
  },
];

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="font-inter text-body text-lg">
              Last updated: <strong>June 28, 2026</strong>
            </p>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="font-inter text-sm text-blue-800">
                Your privacy is very important to us. This document explains clearly how we collect,
                use, and protect your personal information when you use Launchlite's services.
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
