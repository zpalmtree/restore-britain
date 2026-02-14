import PageHero from '@/components/sections/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How Restore Britain handles and protects your information."
        breadcrumbs={[{ label: 'Privacy Policy', href: '/privacy' }]}
      />

      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="heritage-card p-8 md:p-10 space-y-6">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-forest-dark">
              Data Handling Principles
            </h2>
            <p className="font-body text-charcoal leading-relaxed">
              We collect only the information needed to process membership,
              donations, enquiries, and campaign communication. Information is
              stored securely and handled in line with UK data protection law.
            </p>
            <p className="font-body text-charcoal leading-relaxed">
              We do not sell personal data. We may share required information
              with payment providers, legal authorities, or electoral regulators
              where this is required by law.
            </p>
            <p className="font-body text-charcoal leading-relaxed">
              You can request access, correction, or deletion of your personal
              information by contacting{' '}
              <a
                href="mailto:info@restorebritain.org.uk"
                className="text-burgundy hover:text-burgundy-dark underline"
              >
                info@restorebritain.org.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
