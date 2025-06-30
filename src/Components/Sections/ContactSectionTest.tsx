export function ContactSectionTest() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 section-spacing">
      <div className="c-space">
        <div className="text-center mb-12">
          <h2 className="text-heading mb-4 text-white">Contact Us - Test</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            This is a test contact section to check if the component renders.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
            <p className="text-white">Contact form will go here...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
