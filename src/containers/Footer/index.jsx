import { FOOTER_INFO } from "~/constants";

const Footer = () => {
  const { content, socialLinks } = FOOTER_INFO;

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <p className="text-white text-center mb-4">{content}</p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-2xl"
            >
              {/* Render the icon using dangerouslySetInnerHTML */}
              <span dangerouslySetInnerHTML={{ __html: link.icon }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
