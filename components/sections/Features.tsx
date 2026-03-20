import { Card } from '../ui/Card';

export const Features = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>Optimized for all devices, ensuring a seamless experience.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Modern Technologies</h3>
            <p>Built with the latest tools and frameworks for performance.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p>Easily adaptable to fit your personal style and needs.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
