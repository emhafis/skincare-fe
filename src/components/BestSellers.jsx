const products = [
  {
    title: "Gentle Cleansing Balm",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJq6HQG8FKEB34AapF0j09FFecIGQWPV7mETbpbIvsFe-D349bxlh3Z4L6Dz7iLia41xwu_iLV2tedH_FiOUqobGgxV61GOZiELLCHNks8W1YdWgLBljKWiaw0f7LubTZKl97TlmCbfUIJuutDns-TYMrHZpUJ6q4ekVXjo8lqQWd6QPrp9HmfeV3ezTsZTDzODpmZ4nA03NertLkJYIpbZdQByzhwiZp-n7yaJxFmHx4GH0ljV3hBJx_BBLObx076vvtwgfJeqb0",
    desc: "Melt away makeup and impurities with our gentle cleansing balm, leaving your skin feeling soft and refreshed.",
  },
  {
    title: "Hydrating Facial Serum",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKsN363etAYg8eQed6G_mLd0VJh3ILirpjqbxvvenUGKtNEoXFwaf6WAMch49_ERcAB1Ugv-rZo5uvtR4M2Z2iBheX-lv_AJDacSH6xaD8kvOtN6cXfbWndnGiWM_xdgheWlcqQT2Kq7pNEbtmg9h_PA9wGTDYIpdA-n_0OGe1TmbSLNsV1RGPW6uSASEEh7Hb6O7XeX3WbOC_4UaDEcCDic1NBbQTP3CJjOePFuZBGqggjvJ5V4E9EdgmRI4lkTDS9qDQNHMzMBE",
    desc: "Boost your skin's hydration with our lightweight serum, packed with antioxidants and vitamins for a radiant complexion.",
  },
  {
    title: "Soothing Night Cream",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7oM9aIZBVVniM5LD_Ky40QRgSXhE3FaUW2SLJpmtqMKL-7YTqvsPNJT1P1-9xGNugIzG1ohFN_gCSLVLvUKvR4dVmWO6vrvaX09KMvJblY7MbDH1sne4HuIffumGO-lQuN_pAZj265AMYnwD3hiCWDuN-iA6K--g2m2pj1aCQOEyz0mBlvZPwEjJ4YNMudc4b4GYVvXQt_aRCAIHftDqMf_QYPLpOue0z8wBBGzb0PWdvzrZ4Iu7ZWbPOSjC0BguXl7psj94xzM",
    desc: "Wake up to smoother, more radiant skin with our nourishing night cream, formulated to repair and rejuvenate while you sleep.",
  },
];

export default function BestSellers() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-subtle-light dark:bg-subtle-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-content-light dark:text-content-dark">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
