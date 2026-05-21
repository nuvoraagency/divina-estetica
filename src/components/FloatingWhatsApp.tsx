export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/59892807070"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-divina-dark text-divina-cream rounded-full shadow-2xl hover:bg-divina-softGold hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.031 0C5.385 0 .003 5.383.003 12.03c0 2.126.554 4.195 1.606 6.012L0 24l6.113-1.605c1.761.964 3.75 1.47 5.918 1.47 6.645 0 12.028-5.383 12.028-12.029C24.06 5.384 18.677 0 12.031 0zm.006 21.84c-1.802 0-3.565-.484-5.112-1.4l-.367-.218-3.799.997 1.015-3.704-.24-.381c-1.004-1.597-1.534-3.45-1.534-5.378 0-5.529 4.498-10.026 10.035-10.026 5.534 0 10.032 4.497 10.032 10.026 0 5.528-4.498 10.025-10.03 10.025zm5.503-7.518c-.302-.15-1.785-.88-2.062-.982-.276-.1-.478-.15-.678.151-.201.302-.78 .982-.955 1.183-.176.202-.352.227-.654.076-2.004-.988-3.355-2.223-4.14-3.564-.175-.3-.018-.462.132-.612.135-.135.302-.352.453-.528.15-.176.201-.302.302-.503.1-.202.05-.378-.025-.529-.075-.151-.678-1.636-.93-2.24-.243-.588-.49-.508-.678-.517-.176-.008-.378-.01-.578-.01-.201 0-.528.075-.805.377-.276.302-1.055 1.032-1.055 2.516 0 1.485 1.08 2.92 1.232 3.121.15.201 2.128 3.25 5.155 4.556.721.311 1.282.497 1.721.635.723.23 1.382.197 1.902.119.58-.088 1.785-.73 2.036-1.434.252-.705.252-1.309.176-1.434-.075-.126-.276-.201-.578-.352z" clipRule="evenodd" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-divina-white text-divina-dark text-xs px-3 py-1.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-sm border border-divina-nude">
        Agendá por WhatsApp
      </span>
    </a>
  );
}
