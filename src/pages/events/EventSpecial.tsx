import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
// import GalleryImage from "./GalleryImage";
import { createPortal } from "react-dom";
import Gallery from "./Gallery";

const ImageModal = React.lazy(() => import("./ImageModal"));

interface EventoEspecialProps {
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  description: string;
  images: string[];
  highlights: string[];
}

// const highlightVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: 0.4 + i * 0.15, duration: 0.7 },
//   }),
// };

export default function EventoEspecial({
  title,
  subtitle,
  date,
  location,
  description,
  images,
  highlights,
}: EventoEspecialProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const driveLinks: Record<string, string> = {
    "/events/2024/mdimsp/capa.jpeg": "https://drive.google.com/file/d/1eTLMs3e4Qgp58iSll4Jy9PGgTcIcV1fN/view",
    "/events/2024/mdimsp/1.jpg" : "https://drive.google.com/file/d/19n_SlLTKsDm__P7QMeSbTIch6B-7kD3d/view",
    "/events/2024/mdimsp/2.jpg" : "https://drive.google.com/file/d/1S5pNQFFf9pub3B2H-1GV4WyDrgiMiEge/view",
    "/events/2024/mdimsp/3.jpg" : "https://drive.google.com/file/d/1GoIv8jHCG3SJ1Mctjy8m2ODC6JXoXjDx/view",
    "/events/2024/mdimsp/4.jpg" : "https://drive.google.com/file/d/1X9U7ythksIDuoxQjyBz2pIURh1yfJgWn/view",
    "/events/2024/mdimsp/5.jpg" : "https://drive.google.com/file/d/15O-DB-TG5ftJfQwFZc8fDb6kKSePx2er/view",
    "/events/2024/mdimsp/6.jpg" : "https://drive.google.com/file/d/1zXtiCHS8Eg0etjFOj0HtIxMSVypY_svf/view",
    "/events/2024/mdimsp/7.jpg" : "https://drive.google.com/file/d/1AIHret9VUOKW10O92t16lVpaWiZcLizr/view",
    "/events/2024/mdimsp/8.jpg" : "https://drive.google.com/file/d/1fUXv-jFJprUqXf71sCP4UgdmF6f2a9hE/view",
    "/events/2024/mdimsp/9.jpg" : "https://drive.google.com/file/d/1iq1PHzMpojMQhJL1kKIFOyxS1NwOa7C6/view",
    "/events/2024/mdimsp/10.jpg" : "https://drive.google.com/file/d/1Zh8dgtQ9EAJcOo71mJm8_e9h3YUZJXsi/view",
    "/events/2024/mdimsp/11.jpg" : "https://drive.google.com/file/d/12vpWnvVHMXur6rEB-CRgcOa9JJ1E9ryY/view",
    "/events/2024/mdimsp/12.jpg": "https://drive.google.com/file/d/19Ge6oYsGPrPhnnMlWMgeCjypMEHbNMSD/view",
    
    "/events/2025/DlAutonomous/capa.jpg": "https://drive.google.com/file/d/1ULsfDxVU1sMCg5b8cU4YgjMbzGWFQB0P/view",
    "/events/2025/DlAutonomous/dl2.jpg": "https://drive.google.com/file/d/1lFbvsfKGF9EWKKcQY6tmhOimu5Qm2A1o/view",
    "/events/2025/DlAutonomous/dl3.jpg": "https://drive.google.com/file/d/1M9OAoEKnfKdJj1R0PLHKce5fvNm_34yl/view",
    "/events/2025/DlAutonomous/dl4.jpg": "https://drive.google.com/file/d/1_tJ0BmjHFfaWtoe0RDrbBeEu4FHMys6t/view",
    "/events/2025/DlAutonomous/dl5.jpg": "https://drive.google.com/file/d/1eQDyDbeBwYgiChCHfYQEL9wo_U9vlGyq/view",
    "/events/2025/DlAutonomous/dl6.jpg": "https://drive.google.com/file/d/1ptim3L0yMmUILxsZVgF31m5KCyR2jHei/view",
    "/events/2025/DlAutonomous/dl7.jpg": "https://drive.google.com/file/d/1da8usgU4-BbiZ6ngju8oBgNB1RzHeCOa/view",
    "/events/2025/DlAutonomous/dl8.jpg": "https://drive.google.com/file/d/18DTC7HDmdeJQougW1JPrKBZYT9RX41ey/view",
    "/events/2025/DlAutonomous/dl9.jpg": "https://drive.google.com/file/d/1RS3_9TLtRBE1xfHdgBOHJBfHkwQnPgbS/view",
    "/events/2025/DlAutonomous/dl10.jpg": "https://drive.google.com/file/d/1zGkt82DVL32rKbRA2G4XOILpQSu99m0h/view",

    "/events/2025/MDIllm/capa.jpeg" : "https://drive.google.com/file/d/15_WoM3dRCpi_ft9QyS19xfJt3wYxgPzk/view",
    "/events/2025/MDIllm/mdi1.jpeg" : "https://drive.google.com/file/d/1KgwoxpEcFBh_-N86rBhCRgQfhqMg6JER/view",
    "/events/2025/MDIllm/mdi2.jpeg" : "https://drive.google.com/file/d/1qKn5s7EEniV_O3lbI1GCLu56cTfN4AJv/view",
    "/events/2025/MDIllm/mdi3.jpeg" : "https://drive.google.com/file/d/1zKxsh1PvW-ic-e8HKPxbS_j_OGRrRXWn/view",
    "/events/2025/MDIllm/mdi4.jpeg" : "https://drive.google.com/file/d/1scyjgI_iQlU7aFWGmE6Dflyz5IEBA-YQ/view",
    "/events/2025/MDIllm/mdi5.jpeg" : "https://drive.google.com/file/d/1giYQX1orrYt1ryQylHNH8sgdg9_WnrIR/view",

    // adicionar links para todas as imagens
  };

  return (
    <div className="min-h-screen  flex flex-col items-center">
      {images[0] && (
      <motion.div
        className="w-full h-56 sm:h-72 md:h-96 relative cursor-pointer"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onClick={() => setSelectedImage(images[0])} // abre o modal como as outras
      >
        <img
          src={images[0]}
          alt="Evento destaque"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00275cbb] to-transparent" />
      </motion.div>
    )}

      {/* Card */}
      <motion.div
        className="relative -mt-16 sm:-mt-24 md:-mt-32 z-10 w-full max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="backdrop-blur-xl bg-white/70 rounded-2xl shadow-2xl p-6 sm:p-10 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00275c] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg sm:text-xl text-blue-500 font-medium">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center text-blue-900 font-semibold text-base sm:text-lg mt-2">
            <span>📅 {date}</span>
            <span className="hidden sm:inline">|</span>
            <span>📍 {location}</span>
          </div>
          <p className="mt-2 sm:mt-4 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Gallery */}
      {images.length > 1 && (
        <Gallery images={images} onSelect={setSelectedImage} />
      )}

     
      {/* Modal */}
      {selectedImage &&
        createPortal(
          <ImageModal
            image={selectedImage}
            driveLinks={driveLinks}
            onClose={() => setSelectedImage(null)}
          />,
          document.body
        )}

      {/* Highlights */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-14 px-4 max-w-2xl w-full">
        {highlights.map((item, idx) => (
          <li
            key={idx}
            className="bg-white/80 rounded-xl shadow p-4 sm:p-5 text-[#00275c] font-semibold text-base sm:text-lg flex items-center gap-3 hover:bg-blue-50 transition"
          >
            <span className="text-blue-400 text-xl sm:text-2xl">★</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="h-10" />
    </div>
  );
}
