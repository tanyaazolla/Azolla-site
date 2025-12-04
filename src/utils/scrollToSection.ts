export const scrollToSection = (id: string) => {
  const nav = document.querySelector(`#${id}`);
  nav?.scrollIntoView({ behavior: 'smooth' });
};
