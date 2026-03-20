import { Card } from '../ui/Card';
import { Avatar } from '../ui/Avatar';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="flex items-center mb-4">
              <Avatar src="/avatar1.jpg" alt="User 1" size="small" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">User 1</h3>
                <p className="text-sm text-gray-500">CEO, Company</p>
              </div>
            </div>
            <p>"This portfolio is amazing! It showcases all the skills and projects beautifully."</p>
          </Card>
          <Card>
            <div className="flex items-center mb-4">
              <Avatar src="/avatar2.jpg" alt="User 2" size="small" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">User 2</h3>
                <p className="text-sm text-gray-500">CTO, Another Company</p>
              </div>
            </div>
            <p>"A perfect blend of design and functionality. Highly recommend!"</p>
          </Card>
          <Card>
            <div className="flex items-center mb-4">
              <Avatar src="/avatar3.jpg" alt="User 3" size="small" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">User 3</h3>
                <p className="text-sm text-gray-500">Developer, Tech Corp</p>
              </div>
            </div>
            <p>"The best portfolio I've seen. It's clean, modern, and easy to navigate."</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
