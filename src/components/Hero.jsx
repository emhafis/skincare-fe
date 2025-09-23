export default function Hero() {
  return (
    <section className="relative h-[85vh] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBcV_UiCfoaPX60HjO5DLmi4gbYz1yJeAbKGEyPiXeLtgj6QrME1cAopBGJxbGs3iepeCxMxqju4rcwHXm7L18ZoE5tYF9j3AyeGxrFTyJ-9-omg5YDjKBL1V_dY6V_blXdjRyM5dRrsmMmFkB6p7uFs-HV05MaWbl68jy2zms_QU0_HWWEVz_deiB6edFpDJ1uqD8cWEIExYk54PNeL8iY1iedXpx5_oNQpdKC3tmiXqhmwIapxW2KNNCVJzkMCMSO-GOOZUjI8w")',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Radiant Skin Starts Here</h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8">
          Discover our curated collection of skincare essentials designed to enhance your natural
          glow. Experience the difference with our gentle, effective formulas.
        </p>
        <button className="bg-primary text-white py-3 px-8 rounded-full text-lg font-bold hover:bg-opacity-80 transition-colors duration-300 transform hover:scale-105">
          Shop Now
        </button>
      </div>
    </section>
  );
}
