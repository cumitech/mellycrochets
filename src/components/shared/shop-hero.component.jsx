const ShopHero = ({ title, description }) => {
  return (
    <div className="relative w-full bg-gray-100 py-20 px-6 text-center">
      <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-12 lg:p-16 animate-fade-in-up">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">{description}</p>
      </div>
    </div>
  );
};

export default ShopHero;
