export function WhatsAppButton() {
  const phoneNumber = "923141305785"; // +92 314 1305785 (no + or spaces for wa.me)
  const message = "Hi! I came across your website and I'm interested in discussing a project. Could we talk?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 active:scale-95 sm:h-16 sm:w-16"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />

      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 sm:h-8 sm:w-8 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 0C7.163 0 0 7.163 0 16.004c0 2.822.738 5.588 2.14 8.02L0 32l8.16-2.114a15.93 15.93 0 0 0 7.844 2.06h.007c8.841 0 16.004-7.163 16.004-16.004C31.995 7.163 24.845 0 16.004 0zm0 29.06a12.98 12.98 0 0 1-6.62-1.815l-.475-.283-4.844 1.256 1.293-4.723-.31-.485a12.98 12.98 0 0 1-1.994-6.986C3.054 8.812 8.812 3.054 16.004 3.054c3.475 0 6.74 1.354 9.19 3.808a12.9 12.9 0 0 1 3.802 9.148c0 7.192-5.758 12.95-12.992 12.95zm7.11-9.708c-.39-.195-2.3-1.135-2.657-1.264-.357-.13-.617-.195-.877.195-.26.39-1.006 1.264-1.234 1.524-.228.26-.455.293-.845.098-.39-.195-1.646-.607-3.135-1.937-1.16-1.035-1.943-2.312-2.171-2.702-.228-.39-.024-.6.171-.795.176-.175.39-.455.585-.683.195-.228.26-.39.39-.65.13-.26.065-.487-.033-.683-.098-.195-.877-2.115-1.202-2.897-.317-.762-.638-.658-.877-.67-.228-.01-.487-.012-.747-.012s-.683.098-1.04.487c-.357.39-1.362 1.33-1.362 3.246 0 1.916 1.394 3.766 1.589 4.026.195.26 2.744 4.19 6.646 5.876.929.401 1.653.64 2.218.819.932.297 1.78.255 2.45.155.747-.112 2.3-.94 2.625-1.848.325-.909.325-1.687.228-1.849-.098-.163-.358-.26-.748-.455z" />
      </svg>
    </a>
  );
}