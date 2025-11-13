interface ImageModalProps {
  image: string | null;
  driveLinks: Record<string, string>;
  onClose: () => void;
}

export default function ImageModal({ image, driveLinks, onClose }: ImageModalProps) {
  if (!image) return null;

  const driveUrl = driveLinks[image];

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <img
        src={image}
        alt="imagem grande"
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg cursor-pointer"
        onClick={() => {
          if (driveUrl) window.open(driveUrl, "_blank");
          onClose();
        }}
      />
      <button
        className="absolute top-5 right-5 text-white text-3xl"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
}
