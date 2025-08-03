import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center p-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 underline hover:text-blue-800">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
