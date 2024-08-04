// components/ThemeToggle.tsx

const ThemeToggle = () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-primary-light dark:bg-primary-dark text-white rounded"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
