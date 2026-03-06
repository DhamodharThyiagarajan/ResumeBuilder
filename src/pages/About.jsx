import React from "react";

export default function About() {
  const shareLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "https://www.facebook.com/sharer/sharer.php?u=almabetter.com",
      color: "text-blue-600"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=almabetter.com",
      color: "text-blue-700"
    },
    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://wa.me/?text=Check%20out%20AlmaBetter%20Resume%20Builder%20-%20almabetter.com",
      color: "text-green-500"
    },
    {
      name: "Twitter",
      icon: "𝕏",
      url: "https://twitter.com/intent/tweet?url=almabetter.com&text=Build%20your%20professional%20resume%20with%20AlmaBetter",
      color: "text-gray-900"
    },
    {
      name: "Email",
      icon: "✉️",
      url: "mailto:?subject=AlmaBetter%20Resume%20Builder&body=Check%20out%20AlmaBetter%20Resume%20Builder%20-%20almabetter.com",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 md:py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Resume <br />
              <span className="text-indigo-600">Builder</span>
            </h1>
            <p className="text-gray-700 leading-relaxed italic text-sm md:text-base">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting; remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum.
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-6 md:mt-8">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Share with your friends</h3>
            <div className="flex gap-3 md:gap-4 flex-wrap">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className={`${link.color} text-xl md:text-2xl hover:opacity-70 transition-opacity`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3588/3588592.png"
            alt="Resume Builder Illustration"
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
