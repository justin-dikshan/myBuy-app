import React from "react";
import Image from "next/image";

const SHOP_BY_BRANDS = [
  {
    productType: "Music",
    brands: [
      {
        brand: "JBL",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/11b3/c2e6/f545a3a466e1e1277bc9c557a60c6d4d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLiPZG4DCvbTUJFwLzXjkdPONsEh7PY0RJbNIynvl5EXOkDoPW-9Kvo0apVcEpSc8QZDvngwm-sPFitx2QhbOEWVFxvveK9-CWtdWaTe7dThQfZmzNP9rA01dsurBqiLFvlrNR4xiMh9~FwqF48fBpQOYVkBW2RRmdwBO3w8nm2PRHMCDsd5F1aEuBVw3~XdeO0veu8EhFpLRUhIFHlcQCq3rJVm~9j4t8VMgirZywK1mFoFR8GGSFhpKU72C28zJblscCp6yhfDu5LJaNtGPU7ZfwCbLhUHOpNi8bP8YlQMdR8rlMvsisKAW7O3pXykZpPS~suuRSuIBKJkfCrtuw__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/e0a7/3943/3ba7f72b7bb5f8896faab3c2b8bced41?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7a3PnHYZlV227ihsCO3yST6H8eMhGn7yc92vufbuopbhre~I-3rX~HiDHvKCSIPCk5vAVDzcH0EsHVzmWlnyKiSfYwq8grJxTjOM4r40VzmnsXzP2uBhbGwwnxN9PudG305pYRhcm8z~f5nkCuAMA7O6552~JqpUND1~BUAIYHw1Ep9g7CzBV6oUt7DrACqRFjhleCE6j8Q3paGWRMndA2mtwI7TEg1dBP4YobsGxlXPUe7RcnOZSEXzs1gzNllnjhaZcykMpYF-PXs7cv3Mp2HiPGAW7HdgO5i59EpDIBNu3nCsUm1siGWIN6qUVrrYIb6urRzvsWrtxKFMzwbeA__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/4638/8e49/ec8a1d8c4ceb66040b59eb9c4359fbed?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qe7IxmGYszNlM3xfjq79qQCYTENkwDpHj-WycyU6s8jRR-AcFieNDVbvWAdbjbCJ~BafPvH-PfNqTtdKJEoVJrBtaTVJy7qdE6E5vF0XQ~yaEzp0mj0f9n22HL~K1~R4fVSZhfYfrpbgapa9Z4JhELn54x6JL8okSKgSFNXn2zLfN9k-3mktpN9c~uUbJI9Npi3qDFrbHDyKy0dAgWMVkClPry-LeFOO8LNbUWfSlOA4G1cgSJ9NKlnJ78HN4pso7~nCAupg0QdvzYLZYhfLabbc2ET7qQ0oWICBSMG42Y5EDQAdfWOYwqBSN2qUfBrZz7tHOwRdrJFXFTPFadf98A__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/6f0f/8517/23f6943633da5f15674e78bd6b1de00f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LTKj16zwOwRmZ8lV3IDECqewCIf4HPmBzH4arOMQYiuzSTDdoRoUrvbyoJn4iHqxEGsDe7p8DFToHThwt4LORwvbL0ZT3wDe6Y4~bprZ4CNBeYsOAW05xK~SMKomSxhv1LvFH3XJp5erScVZBzCewAJkvxCYuUg6lltHF-Ev~8SUQ~SpJVeaOyFRRRv0bj-jRzz75QAsX-8hCsXklZHaVFBUR1HlYnJylTyD7LqckSUTKyqyYhArBbCbXh-OXvny4oD-3ilZDgK85pwKAgvfaW-huNbIauQXzCNVnO1kvZIrkf4JdI92T5ynoWMdQV0gkGTxSpcR~0-e1Hwy48HPYw__",
      },
    ],
  },
  {
    productType: "Storages",
    brands: [
      {
        brand: "JBL",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/11b3/c2e6/f545a3a466e1e1277bc9c557a60c6d4d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLiPZG4DCvbTUJFwLzXjkdPONsEh7PY0RJbNIynvl5EXOkDoPW-9Kvo0apVcEpSc8QZDvngwm-sPFitx2QhbOEWVFxvveK9-CWtdWaTe7dThQfZmzNP9rA01dsurBqiLFvlrNR4xiMh9~FwqF48fBpQOYVkBW2RRmdwBO3w8nm2PRHMCDsd5F1aEuBVw3~XdeO0veu8EhFpLRUhIFHlcQCq3rJVm~9j4t8VMgirZywK1mFoFR8GGSFhpKU72C28zJblscCp6yhfDu5LJaNtGPU7ZfwCbLhUHOpNi8bP8YlQMdR8rlMvsisKAW7O3pXykZpPS~suuRSuIBKJkfCrtuw__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/e0a7/3943/3ba7f72b7bb5f8896faab3c2b8bced41?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7a3PnHYZlV227ihsCO3yST6H8eMhGn7yc92vufbuopbhre~I-3rX~HiDHvKCSIPCk5vAVDzcH0EsHVzmWlnyKiSfYwq8grJxTjOM4r40VzmnsXzP2uBhbGwwnxN9PudG305pYRhcm8z~f5nkCuAMA7O6552~JqpUND1~BUAIYHw1Ep9g7CzBV6oUt7DrACqRFjhleCE6j8Q3paGWRMndA2mtwI7TEg1dBP4YobsGxlXPUe7RcnOZSEXzs1gzNllnjhaZcykMpYF-PXs7cv3Mp2HiPGAW7HdgO5i59EpDIBNu3nCsUm1siGWIN6qUVrrYIb6urRzvsWrtxKFMzwbeA__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/4638/8e49/ec8a1d8c4ceb66040b59eb9c4359fbed?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qe7IxmGYszNlM3xfjq79qQCYTENkwDpHj-WycyU6s8jRR-AcFieNDVbvWAdbjbCJ~BafPvH-PfNqTtdKJEoVJrBtaTVJy7qdE6E5vF0XQ~yaEzp0mj0f9n22HL~K1~R4fVSZhfYfrpbgapa9Z4JhELn54x6JL8okSKgSFNXn2zLfN9k-3mktpN9c~uUbJI9Npi3qDFrbHDyKy0dAgWMVkClPry-LeFOO8LNbUWfSlOA4G1cgSJ9NKlnJ78HN4pso7~nCAupg0QdvzYLZYhfLabbc2ET7qQ0oWICBSMG42Y5EDQAdfWOYwqBSN2qUfBrZz7tHOwRdrJFXFTPFadf98A__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/6f0f/8517/23f6943633da5f15674e78bd6b1de00f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LTKj16zwOwRmZ8lV3IDECqewCIf4HPmBzH4arOMQYiuzSTDdoRoUrvbyoJn4iHqxEGsDe7p8DFToHThwt4LORwvbL0ZT3wDe6Y4~bprZ4CNBeYsOAW05xK~SMKomSxhv1LvFH3XJp5erScVZBzCewAJkvxCYuUg6lltHF-Ev~8SUQ~SpJVeaOyFRRRv0bj-jRzz75QAsX-8hCsXklZHaVFBUR1HlYnJylTyD7LqckSUTKyqyYhArBbCbXh-OXvny4oD-3ilZDgK85pwKAgvfaW-huNbIauQXzCNVnO1kvZIrkf4JdI92T5ynoWMdQV0gkGTxSpcR~0-e1Hwy48HPYw__",
      },
    ],
  },
  {
    productType: "Laptops",
    brands: [
      {
        brand: "JBL",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/11b3/c2e6/f545a3a466e1e1277bc9c557a60c6d4d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLiPZG4DCvbTUJFwLzXjkdPONsEh7PY0RJbNIynvl5EXOkDoPW-9Kvo0apVcEpSc8QZDvngwm-sPFitx2QhbOEWVFxvveK9-CWtdWaTe7dThQfZmzNP9rA01dsurBqiLFvlrNR4xiMh9~FwqF48fBpQOYVkBW2RRmdwBO3w8nm2PRHMCDsd5F1aEuBVw3~XdeO0veu8EhFpLRUhIFHlcQCq3rJVm~9j4t8VMgirZywK1mFoFR8GGSFhpKU72C28zJblscCp6yhfDu5LJaNtGPU7ZfwCbLhUHOpNi8bP8YlQMdR8rlMvsisKAW7O3pXykZpPS~suuRSuIBKJkfCrtuw__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/e0a7/3943/3ba7f72b7bb5f8896faab3c2b8bced41?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7a3PnHYZlV227ihsCO3yST6H8eMhGn7yc92vufbuopbhre~I-3rX~HiDHvKCSIPCk5vAVDzcH0EsHVzmWlnyKiSfYwq8grJxTjOM4r40VzmnsXzP2uBhbGwwnxN9PudG305pYRhcm8z~f5nkCuAMA7O6552~JqpUND1~BUAIYHw1Ep9g7CzBV6oUt7DrACqRFjhleCE6j8Q3paGWRMndA2mtwI7TEg1dBP4YobsGxlXPUe7RcnOZSEXzs1gzNllnjhaZcykMpYF-PXs7cv3Mp2HiPGAW7HdgO5i59EpDIBNu3nCsUm1siGWIN6qUVrrYIb6urRzvsWrtxKFMzwbeA__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/4638/8e49/ec8a1d8c4ceb66040b59eb9c4359fbed?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qe7IxmGYszNlM3xfjq79qQCYTENkwDpHj-WycyU6s8jRR-AcFieNDVbvWAdbjbCJ~BafPvH-PfNqTtdKJEoVJrBtaTVJy7qdE6E5vF0XQ~yaEzp0mj0f9n22HL~K1~R4fVSZhfYfrpbgapa9Z4JhELn54x6JL8okSKgSFNXn2zLfN9k-3mktpN9c~uUbJI9Npi3qDFrbHDyKy0dAgWMVkClPry-LeFOO8LNbUWfSlOA4G1cgSJ9NKlnJ78HN4pso7~nCAupg0QdvzYLZYhfLabbc2ET7qQ0oWICBSMG42Y5EDQAdfWOYwqBSN2qUfBrZz7tHOwRdrJFXFTPFadf98A__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/6f0f/8517/23f6943633da5f15674e78bd6b1de00f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LTKj16zwOwRmZ8lV3IDECqewCIf4HPmBzH4arOMQYiuzSTDdoRoUrvbyoJn4iHqxEGsDe7p8DFToHThwt4LORwvbL0ZT3wDe6Y4~bprZ4CNBeYsOAW05xK~SMKomSxhv1LvFH3XJp5erScVZBzCewAJkvxCYuUg6lltHF-Ev~8SUQ~SpJVeaOyFRRRv0bj-jRzz75QAsX-8hCsXklZHaVFBUR1HlYnJylTyD7LqckSUTKyqyYhArBbCbXh-OXvny4oD-3ilZDgK85pwKAgvfaW-huNbIauQXzCNVnO1kvZIrkf4JdI92T5ynoWMdQV0gkGTxSpcR~0-e1Hwy48HPYw__",
      },
    ],
  },
  {
    productType: "Television",
    brands: [
      {
        brand: "JBL",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/11b3/c2e6/f545a3a466e1e1277bc9c557a60c6d4d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLiPZG4DCvbTUJFwLzXjkdPONsEh7PY0RJbNIynvl5EXOkDoPW-9Kvo0apVcEpSc8QZDvngwm-sPFitx2QhbOEWVFxvveK9-CWtdWaTe7dThQfZmzNP9rA01dsurBqiLFvlrNR4xiMh9~FwqF48fBpQOYVkBW2RRmdwBO3w8nm2PRHMCDsd5F1aEuBVw3~XdeO0veu8EhFpLRUhIFHlcQCq3rJVm~9j4t8VMgirZywK1mFoFR8GGSFhpKU72C28zJblscCp6yhfDu5LJaNtGPU7ZfwCbLhUHOpNi8bP8YlQMdR8rlMvsisKAW7O3pXykZpPS~suuRSuIBKJkfCrtuw__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/e0a7/3943/3ba7f72b7bb5f8896faab3c2b8bced41?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7a3PnHYZlV227ihsCO3yST6H8eMhGn7yc92vufbuopbhre~I-3rX~HiDHvKCSIPCk5vAVDzcH0EsHVzmWlnyKiSfYwq8grJxTjOM4r40VzmnsXzP2uBhbGwwnxN9PudG305pYRhcm8z~f5nkCuAMA7O6552~JqpUND1~BUAIYHw1Ep9g7CzBV6oUt7DrACqRFjhleCE6j8Q3paGWRMndA2mtwI7TEg1dBP4YobsGxlXPUe7RcnOZSEXzs1gzNllnjhaZcykMpYF-PXs7cv3Mp2HiPGAW7HdgO5i59EpDIBNu3nCsUm1siGWIN6qUVrrYIb6urRzvsWrtxKFMzwbeA__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/4638/8e49/ec8a1d8c4ceb66040b59eb9c4359fbed?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qe7IxmGYszNlM3xfjq79qQCYTENkwDpHj-WycyU6s8jRR-AcFieNDVbvWAdbjbCJ~BafPvH-PfNqTtdKJEoVJrBtaTVJy7qdE6E5vF0XQ~yaEzp0mj0f9n22HL~K1~R4fVSZhfYfrpbgapa9Z4JhELn54x6JL8okSKgSFNXn2zLfN9k-3mktpN9c~uUbJI9Npi3qDFrbHDyKy0dAgWMVkClPry-LeFOO8LNbUWfSlOA4G1cgSJ9NKlnJ78HN4pso7~nCAupg0QdvzYLZYhfLabbc2ET7qQ0oWICBSMG42Y5EDQAdfWOYwqBSN2qUfBrZz7tHOwRdrJFXFTPFadf98A__",
      },
      {
        brand: "",
        brandLogo:
          "https://s3-alpha-sig.figma.com/img/6f0f/8517/23f6943633da5f15674e78bd6b1de00f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LTKj16zwOwRmZ8lV3IDECqewCIf4HPmBzH4arOMQYiuzSTDdoRoUrvbyoJn4iHqxEGsDe7p8DFToHThwt4LORwvbL0ZT3wDe6Y4~bprZ4CNBeYsOAW05xK~SMKomSxhv1LvFH3XJp5erScVZBzCewAJkvxCYuUg6lltHF-Ev~8SUQ~SpJVeaOyFRRRv0bj-jRzz75QAsX-8hCsXklZHaVFBUR1HlYnJylTyD7LqckSUTKyqyYhArBbCbXh-OXvny4oD-3ilZDgK85pwKAgvfaW-huNbIauQXzCNVnO1kvZIrkf4JdI92T5ynoWMdQV0gkGTxSpcR~0-e1Hwy48HPYw__",
      },
    ],
  },
];

const ShopByBrand = () => {
  return (
    <div className="w-[80%] mx-auto mb-8">
      <h2 className="text-black text-[32px] text-center font-bold mb-4">
        Shop by Brands
      </h2>
      <div className="flex flex-wrap justify-center md:justify-between">
        {SHOP_BY_BRANDS.map((type, i) => {
          return (
            <div key={i} className="mb-4">
              <h4 className="text-center font-bold">{type.productType}</h4>
              <div className="bg-[#F7941E] h-[220px] w-[220px] p-[13px] mr-2 mb-2 rounded flex flex-wrap justify-between">
                {type.brands.map((brand, i) => {
                  return (
                    <div
                      className="w-[90px] h-[90px] mb-[15px] bg-white rounded flex pointer"
                      key={i}
                    >
                      <Image
                        src={brand.brandLogo}
                        alt={"brand"}
                        width={100}
                        height={100}
                        className="object-content mx-auto self-center p-2"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByBrand;
