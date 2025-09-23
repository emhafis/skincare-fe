const products = [
  {
    id: 1,
    name: "Gentle Cleansing Balm",
    price: 28000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJq6HQG8FKEB34AapF0j09FFecIGQWPV7mETbpbIvsFe-D349bxlh3Z4L6Dz7iLia41xwu_iLV2tedH_FiOUqobGgxV61GOZiELLCHNks8W1YdWgLBljKWiaw0f7LubTZKl97TlmCbfUIJuutDns-TYMrHZpUJ6q4ekVXjo8lqQWd6QPrp9HmfeV3ezTsZTDzODpmZ4nA03NertLkJYIpbZdQByzhwiZp-n7yaJxFmHx4GH0ljV3hBJx_BBLObx076vvtwgfJeqb0",
  },
  {
    id: 2,
    name: "Hydrating Facial Serum",
    price: 45000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKsN363etAYg8eQed6G_mLd0VJh3ILirpjqbxvvenUGKtNEoXFwaf6WAMch49_ERcAB1Ugv-rZo5uvtR4M2Z2iBheX-lv_AJDacSH6xaD8kvOtN6cXfbWndnGiWM_xdgheWlcqQT2Kq7pNEbtmg9h_PA9wGTDYIpdA-n_0OGe1TmbSLNsV1RGPW6uSASEEh7Hb6O7XeX3WbOC_4UaDEcCDic1NBbQTP3CJjOePFuZBGqggjvJ5V4E9EdgmRI4lkTDS9qDQNHMzMBE",
  },
  {
    id: 3,
    name: "Soothing Night Cream",
    price: 52000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7oM9aIZBVVniM5LD_Ky40QRgSXhE3FaUW2SLJpmtqMKL-7YTqvsPNJT1P1-9xGNugIzG1ohFN_gCSLVLvUKvR4dVmWO6vrvaX09KMvJblY7MbDH1sne4HuIffumGO-lQuN_pAZj265AMYnwD3hiCWDuN-iA6K--g2m2pj1aCQOEyz0mBlvZPwEjJ4YNMudc4b4GYVvXQt_aRCAIHftDqMf_QYPLpOue0z8wBBGzb0PWdvzrZ4Iu7ZWbPOSjC0BguXl7psj94xzM",
  },
  {
    id: 4,
    name: "Vitamin C Brightening Elixir",
    price: 60000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7oM9aIZBVVniM5LD_Ky40QRgSXhE3FaUW2SLJpmtqMKL-7YTqvsPNJT1P1-9xGNugIzG1ohFN_gCSLVLvUKvR4dVmWO6vrvaX09KMvJblY7MbDH1sne4HuIffumGO-lQuN_pAZj265AMYnwD3hiCWDuN-iA6K--g2m2pj1aCQOEyz0mBlvZPwEjJ4YNMudc4b4GYVvXQt_aRCAIHftDqMf_QYPLpOue0z8wBBGzb0PWdvzrZ4Iu7ZWbPOSjC0BguXl7psj94xzM",
  },
  {
    id: 5,
    name: "Gentle Cleansing Balm",
    price: 28000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJq6HQG8FKEB34AapF0j09FFecIGQWPV7mETbpbIvsFe-D349bxlh3Z4L6Dz7iLia41xwu_iLV2tedH_FiOUqobGgxV61GOZiELLCHNks8W1YdWgLBljKWiaw0f7LubTZKl97TlmCbfUIJuutDns-TYMrHZpUJ6q4ekVXjo8lqQWd6QPrp9HmfeV3ezTsZTDzODpmZ4nA03NertLkJYIpbZdQByzhwiZp-n7yaJxFmHx4GH0ljV3hBJx_BBLObx076vvtwgfJeqb0",
  },
  {
    id: 6,
    name: "Hydrating Facial Serum",
    price: 45000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKsN363etAYg8eQed6G_mLd0VJh3ILirpjqbxvvenUGKtNEoXFwaf6WAMch49_ERcAB1Ugv-rZo5uvtR4M2Z2iBheX-lv_AJDacSH6xaD8kvOtN6cXfbWndnGiWM_xdgheWlcqQT2Kq7pNEbtmg9h_PA9wGTDYIpdA-n_0OGe1TmbSLNsV1RGPW6uSASEEh7Hb6O7XeX3WbOC_4UaDEcCDic1NBbQTP3CJjOePFuZBGqggjvJ5V4E9EdgmRI4lkTDS9qDQNHMzMBE",
  },
  {
    id: 7,
    name: "Soothing Night Cream",
    price: 52000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7oM9aIZBVVniM5LD_Ky40QRgSXhE3FaUW2SLJpmtqMKL-7YTqvsPNJT1P1-9xGNugIzG1ohFN_gCSLVLvUKvR4dVmWO6vrvaX09KMvJblY7MbDH1sne4HuIffumGO-lQuN_pAZj265AMYnwD3hiCWDuN-iA6K--g2m2pj1aCQOEyz0mBlvZPwEjJ4YNMudc4b4GYVvXQt_aRCAIHftDqMf_QYPLpOue0z8wBBGzb0PWdvzrZ4Iu7ZWbPOSjC0BguXl7psj94xzM",
  },
  {
    id: 8,
    name: "Vitamin C Brightening Elixir",
    price: 60000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7oM9aIZBVVniM5LD_Ky40QRgSXhE3FaUW2SLJpmtqMKL-7YTqvsPNJT1P1-9xGNugIzG1ohFN_gCSLVLvUKvR4dVmWO6vrvaX09KMvJblY7MbDH1sne4HuIffumGO-lQuN_pAZj265AMYnwD3hiCWDuN-iA6K--g2m2pj1aCQOEyz0mBlvZPwEjJ4YNMudc4b4GYVvXQt_aRCAIHftDqMf_QYPLpOue0z8wBBGzb0PWdvzrZ4Iu7ZWbPOSjC0BguXl7psj94xzM",
  },
];

export default products;
