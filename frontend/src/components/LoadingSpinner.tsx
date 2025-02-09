const LoadingSpinner = () => {
  return (
    <div className="spinner-backdrop">
      <div className="flex flex-col items-center gap-4">
        <div className="cyber-spinner" />
        <div className="text-center">
          <h2 className="text-2xl font-bold gradient-text mb-2">
            Nikhil's Portfolio
          </h2>
          <p className="text-[var(--primary-color)] animate-pulse">
            Initializing Digital Interface...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 