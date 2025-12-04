import {
  Gamepad2,
  Users,
  Zap,
  Target,
  Shield,
  Rocket,
  Heart,
  Code,
} from "lucide-react";
import Heading from "../../Components/Heading/Heading";
import SubHeading from "../../Components/SubHeading/SubHeading";

export default function About() {
  const features = [
    {
      icon: Gamepad2,
      title: "Browse the Library",
      description:
        "Explore a curated collection of games across FPS, RPG, Battle Royale, Racing, Strategy, Casual, and more.",
    },
    {
      icon: Zap,
      title: "View Game Details",
      description:
        "Open rich detail pages with screenshots, descriptions, ratings, platforms, and official download links.",
    },
    {
      icon: Heart,
      title: "Create Your Wishlist",
      description:
        "Save games you're interested in and come back to them anytime.",
    },
    {
      icon: Rocket,
      title: "Stay Updated",
      description:
        "Discover newly added games and trending titles through our home page sections.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Player Discovery",
      description:
        "Help gamers quickly find games they'll love, across multiple genres and platforms.",
    },
    {
      icon: Users,
      title: "Support Developers",
      description:
        "Give indie developers a place to showcase their work alongside big titles.",
    },
    {
      icon: Shield,
      title: "Clean Experience",
      description:
        "Offer a focused experience where the only thing that matters is the game itself.",
    },
  ];

  const techStack = [
    {
      title: "React & Tailwind",
      description:
        "Modern web technologies for a responsive, dynamic experience",
    },
    {
      title: "Firebase Auth",
      description: "Secure authentication to protect user data and preferences",
    },
    {
      title: "Single-Page App",
      description: "Fast navigation with protected routes and dynamic titles",
    },
  ];

  return (
    <div className="min-h-screen bg-base-900">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-info/20 via-base-900 to-base-900 border-b border-base-700 rounded-t-lg">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="heading_container">
            <Heading icon={<Gamepad2 size={48} />}>About GameSpace</Heading>
            <SubHeading>
              GameSpace is a non-profit online game library built for players
              who love discovering both popular and indie titles in one vibrant,
              urban-themed space.
            </SubHeading>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Our Mission  */}
          <div>
            <h2 className="text-3xl md:text-5xl text-info font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              We created GameSpace to make gaming discovery simple, fair, and
              accessible for everyone.
            </p>
            <div className="space-y-4">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.title} className="flex gap-4">
                    {console.log(value)}
                    <div className="shrink-0">
                      <div className="badge badge-info gap-2">
                        <IconComponent size={16} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {value.description}
                      </h3>
                      <p className="text-gray-400">{value.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-base-800 border border-base-700 hover:border-info transition-all duration-300 rounded-xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <span className="text-info font-semibold">
                GameSpace is not a store.
              </span>{" "}
              We don't sell games — instead, we connect you to official download
              links and platforms so developers get the support they deserve.
            </p>
            <p className="text-gray-400">
              No intrusive ads, no endless pop-ups — just games, presented in a
              way that feels fresh and fun.
            </p>
          </div>
        </div>
      </div>

      {/* What You Can Do */}
      <div className="bg-base-800/50 border-y border-base-700 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-info font-bold mb-12 text-center">
            What You Can Do on GameSpace
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-base-900 border border-base-700 rounded-lg p-6 hover:border-info transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="bg-info/10 p-3 rounded-lg">
                        <IconComponent size={24} className="text-info" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* For Gamers & Developers */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* For gamers  */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 size={32} className="text-info" />
              <h2 className="text-3xl font-bold text-info">For Gamers</h2>
            </div>
            <p className="text-gray-300 mb-6">
              GameSpace is designed for players who want quick, clear
              information about games before they install.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-300">
                <span className="text-info">✓</span>
                <span>
                  Players who want quick, clear information about games
                </span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-info">✓</span>
                <span>
                  People who enjoy discovering new or underrated games
                </span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-info">✓</span>
                <span>
                  Gamers who prefer a modern, responsive UI on any device
                </span>
              </li>
            </ul>
          </div>
          {/* For developer  */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code size={32} className="text-info" />
              <h2 className="text-3xl font-bold text-info">For Developers</h2>
            </div>
            <p className="text-gray-300 mb-6">
              If you're a game developer, especially indie, GameSpace is the
              perfect place to showcase your work.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-300">
                <span className="text-info">✓</span>
                <span>Submit your game through our contact page</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-info">✓</span>
                <span>
                  Highlight game details clearly with cover art, genre,
                  platforms
                </span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-info">✓</span>
                <span>Focus on visibility and discovery for your work</span>
              </li>
            </ul>
            <p className="text-info text-sm mt-6 font-semibold">
              We believe great games deserve attention, no matter the budget or
              studio size.
            </p>
          </div>
        </div>
      </div>

      {/* How We Built It */}
      <div className="bg-base-800/50 border-y border-base-700 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-info font-bold mb-4">
              How We Built GameSpace
            </h2>
            <p className="text-gray-400 text-lg">
              Modern technology, thoughtful design, real product mentality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="bg-base-900 border border-base-700 rounded-lg p-6 text-center"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 mt-8 max-w-2xl mx-auto">
            While it's a non-commercial project, we treat it like a real
            product: with attention to user experience, accessibility, and
            performance.
          </p>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-info mb-8 text-center">
          Looking Ahead
        </h2>
        <div className="bg-linear-to-br from-info/20 via-base-900 to-base-900 border-b border-base-700 rounded-t-lg p-8">
          <p className="text-gray-300 mb-6">
            GameSpace will continue to grow with exciting new features:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <Rocket size={20} className="text-info shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Curated Collections
                </h3>
                <p className="text-gray-400 text-sm">
                  Best co-op games, low-end PC friendly, mobile-only, and more
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Zap size={20} className="text-info shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Better Discovery
                </h3>
                <p className="text-gray-400 text-sm">
                  Expanded search and filtering for easier game exploration
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users size={20} className="text-info shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Creator Tools</h3>
                <p className="text-gray-400 text-sm">
                  Additional tools to support game creators and communities
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Have ideas or want your game featured?
          </p>
          <a href="/contact" className="btn btn-info gap-2">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
