import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      href: 'https://x.com/SoumadipMajila',
      label: 'Twitter',
      icon: <FaTwitter className="social-icon h-6 w-6 text-blue-500" />,
    },
    {
      href: 'https://www.linkedin.com/in/soumadip-majila-dgp/',
      label: 'LinkedIn',
      icon: <FaLinkedin className="social-icon h-6 w-6 text-sky-600" />,
    },
    {
      href: 'https://github.com/soumadip-dev',
      label: 'GitHub',
      icon: <FaGithub className="social-icon h-6 w-6 text-gray-900" />,
    },
    {
      href: 'https://www.instagram.com/',
      label: 'Instagram',
      icon: <FaInstagram className="social-icon h-6 w-6 text-pink-500" />,
    },
  ];

  return (
    <section className="contact-section bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="contact-heading text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Connect With Me
      </h2>
      <div className="social-links-container flex flex-wrap justify-center items-center gap-6">
        {socialLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50"
          >
            {link.icon}
            <span className="social-link-label text-lg font-medium text-gray-700">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
