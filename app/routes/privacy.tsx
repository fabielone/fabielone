
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to Fabiel.one. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at support@fabiel.one.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Personal Information: Name, email address, and contact information.</li>
            <li>Payment Data: Necessary data to process your payment if you make purchases.</li>
            <li>Usage Data: Information about how you use our website.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>To provide, operate, and maintain our website.</li>
            <li>To manage user accounts.</li>
            <li>To manage orders, payments, and other transactions.</li>
            <li>To send administrative information to you.</li>
            <li>To respond to user inquiries and offer support.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
          <p>
            We only share and disclose your information in the following situations:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Compliance with Laws: We may disclose your information where we are legally required to do so.</li>
            <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
          <p>
            Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Right to Access: You have the right to request copies of your personal data.</li>
            <li>Right to Rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
            <li>Right to Erasure: You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at support@fabiel.one or by post to:
          </p>
          <address className="mt-4">
            Fabiel.one<br />
            1234 Example Street<br />
            Tijuana, BC, Mexico
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
