export default function Footer() {
  const footerLinks = {
    Support: [
      { title: "Help Center", href: "#" },
      { title: "AirCover", href: "#" },
      { title: "Anti-discrimination", href: "#" },
      { title: "Disability support", href: "#" },
      { title: "Cancellation options", href: "#" },
      { title: "Report neighborhood concern", href: "#" },
    ],
    Hosting: [
      { title: "Airbnb your home", href: "#" },
      { title: "AirCover for Hosts", href: "#" },
      { title: "Hosting resources", href: "#" },
      { title: "Community forum", href: "#" },
      { title: "Hosting responsibly", href: "#" },
      { title: "Airbnb-friendly apartments", href: "#" },
      { title: "Join a free Hosting class", href: "#" },
      { title: "Find a co-host", href: "#" },
    ],
    Airbnb: [
      { title: "Newsroom", href: "#" },
      { title: "New features", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Investors", href: "#" },
      { title: "Gift cards", href: "#" },
      { title: "Airbnb.org emergency stays", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {category}
              </h2>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
