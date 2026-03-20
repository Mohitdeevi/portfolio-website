import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Pricing = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-2xl font-bold mb-4">$0</p>
            <p className="mb-4">Access to basic features and updates.</p>
            <Button>Choose Plan</Button>
          </Card>
          <Card className="text-center bg-primary text-white">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-2xl font-bold mb-4">$49</p>
            <p className="mb-4">Includes all features and priority support.</p>
            <Button variant="secondary">Choose Plan</Button>
          </Card>
          <Card className="text-center">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-2xl font-bold mb-4">$99</p>
            <p className="mb-4">Custom solutions for large organizations.</p>
            <Button>Choose Plan</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
