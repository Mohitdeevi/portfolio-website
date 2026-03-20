import { Button } from '../ui/Button';

export const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="mb-8">Contact me today to discuss your needs and how I can help.</p>
        <Button variant="secondary">Get in Touch</Button>
      </div>
    </section>
  );
};
