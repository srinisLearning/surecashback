import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <h3 className="flex justify-center text-green-600 text-2xl font-bold my-2 uppercase ">
        Privacy Policy
      </h3>
      <div className="max-w-4xl flex flex-col justify-center mx-auto p-6">
        <p className="text-justify">
        <h3 className="flex justify-center text-green-600 text-md font-bold my-2 uppercase italic">
        Keeping your privacy secure is our mission.
      </h3>
          At SURECASHBACK, accessible from https://www.surecashback.com one of
          our main priorities is the privacy of our visitors. This Privacy
          Policy document contains types of information that is collected and
          recorded by SURECASHBACK and how we use it.
        </p>
        <p className="text-justify">
          <h3 className="font-bold">Scope of the Policy This Privacy</h3>
          Policy applies to:
          <ul>
            <li>
              Information collected online through the SURECASHBACK website
              www.surecashback.com and platform.
            </li>
            <li>
              Information voluntarily provided to us by visitors and users. This
              policy does not cover data collected offline or through
              third-party platforms. By accessing or using our website, you
              consent to this Privacy Policy and agree to its terms.
            </li>
          </ul>
        </p>
        <p className="text-justify">
          <h3 className="font-bold">Information We Collect</h3>
          We collect information that is necessary to provide our services,
          improve your experience, and meet regulatory requirements.
          <ul>
            <li>
              1. Personal Information : <br />
              Basic Details: Name, date of birth, photo, address, phone/mobile
              number, and email. <br /> KYC Information: PAN card, Aadhaar
              (optional), and other regulatory documents. <br />
              Financial Data: Bank account details, transaction history, and
              communication regarding transactions.
              <br />
              Device Details: Device identifier, IP address, browser type,
              location, and cookies or similar technologies.
            </li>
            <li>
              2. Information Collected During Usage
              <br />
              We may collect data at various stages, including:
              <br />
              Registration: Information provided during account creation.
              <br />
              Transactions: Data related to the services you use on our
              platform.
              <br />
              File Uploads: Documents like profile photos and KYC materials.
            </li>
          </ul>
        </p>
        <p className="text-justify">
          <h3 className="font-bold">How we use your Information</h3>
          The information we collect is used for the following purposes:
          <br />
          To provide, operate, and maintain our website and services.
          <br /> To improve, personalize, and enhance user experiences. <br />
          To understand website usage and develop new features.
          <br /> To communicate updates, respond to inquiries, and send
          promotional materials.
          <br /> To detect and prevent fraudulent activities.
          <br /> We also use log files to analyze trends, administer the site,
          and gather demographic information.
          <br /> Log file data may include: IP addresses, browser types, ISPs,
          date/time stamps, referring/exit pages, and click data. <br />
          This information is not linked to personally identifiable details.
        </p>

        <p className="text-justify">
          <h3 className="font-bold"> Third-Party Partners</h3>
          We work with third-party advertising and API partners. These partners
          may use cookies, JavaScript, or web beacons to personalize your
          experience or measure the effectiveness of their campaigns. We do not
          control these cookies. Please refer to the privacy policies of our
          partners for detailed information:
        </p>

        <p className="text-justify">
          <h3 className="font-bold">Your Rights and Choices</h3>
          You have the following rights regarding your data: Access and Update:
          Review and update your personal information. Withdraw Consent: Revoke
          permissions granted for specific data use. Opt-Out: Disable cookies or
          unsubscribe from marketing communications. To exercise these rights,
          contact us at care@surecashback.com
        </p>
        <p className="text-justify">
          <h3 className="font-bold">Data Security</h3>
          We implement robust measures to secure your data, including
          encryption, secure servers, and access control policies. However, no
          method of transmission or storage is completely secure. Use our
          services at your discretion.
        </p>

        <p className="text-justify">
          <h3 className="font-bold"> Compliance</h3>
          Compliance with relevant data protection laws (e.g., GDPR, CCPA, or
          Indian IT Act etc)
        </p>
        <p className="text-justify">
          <h3 className="font-bold">Changes to this Privacy Policy</h3>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated Effective Date. <br /> <br /> For questions,
          concerns, or to exercise your rights, please contact us at
          care@surecashback.com
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
