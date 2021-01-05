export const Spacing = `
  --sp-1: 0.25rem;
  --sp-2: 0.5rem;
  --sp-3: 0.75rem;
  --sp-4: 1rem;
  --sp-5: 1.5rem;
  --sp-6: 2rem;
  --sp-7: 2.5rem;
  --sp-8: 3rem;
  --sp-9: 3.5rem;
  --sp-10: 4rem;
  --sp-11: 5rem;
  --sp-12: 6rem;
  --sp-13: 7rem;
  --sp-14: 8rem;
  --sp-15: 9rem;
  --sp-16: 10rem;
`;

export const ColorPalette = `
  /* Colors Palette */
  --clr-gray-50: #FAFAFA;
  --clr-gray-100: #F5F5F5;
  --clr-gray-200: #E5E5E5;
  --clr-gray-300: #D4D4D4;
  --clr-gray-400: #A3A3A3;
  --clr-gray-500: #737373;
  --clr-gray-600: #525252;
  --clr-gray-700: #404040;
  --clr-gray-800: #262626;
  --clr-gray-900: #171717;

  --clr-red-50: #FEF2F2;
  --clr-red-100: #FEE2E2;
  --clr-red-200: #FECACA;
  --clr-red-300: #FCA5A5;
  --clr-red-400: #F87171;
  --clr-red-500: #EF4444;
  --clr-red-600: #DC2626;
  --clr-red-700: #B91C1C;
  --clr-red-800: #991B1B;
  --clr-red-900: #7F1D1D;

  --clr-orange-50:  #f9f4e7;
  --clr-orange-100: #faedc7;
  --clr-orange-200: #f8e090;
  --clr-orange-300: #f4ca4d;
  --clr-orange-400: #f0a81c;
  --clr-orange-500: #ee830b;
  --clr-orange-600: #f97316;
  --clr-orange-700: #c3470c;
  --clr-orange-800: #a13913;
  --clr-orange-900: #852f14;

  --clr-amber-50:  #f9f4e4;
  --clr-amber-100: #faeebc;
  --clr-amber-200: #f6e47e;
  --clr-amber-300: #f2d13b;
  --clr-amber-400: #eab413;
  --clr-amber-500: #f59e0b;
  --clr-amber-600: #d66f05;
  --clr-amber-700: #b55308;
  --clr-amber-800: #95410f;
  --clr-amber-900: #7b3511;

  --clr-yellow-50:  #f9f6e6;
  --clr-yellow-100: #faf1c0;
  --clr-yellow-200: #f6e87e;
  --clr-yellow-300: #f0d63b;
  --clr-yellow-400: #eab308;
  --clr-yellow-500: #de9906;
  --clr-yellow-600: #ca7504;
  --clr-yellow-700: #a85908;
  --clr-yellow-800: #87450d;
  --clr-yellow-900: #6e380f;

  --clr-lime-50:  #fbfcf6;
  --clr-lime-100: #f9fbde;
  --clr-lime-200: #f0f599;
  --clr-lime-300: #e1ea4e;
  --clr-lime-400: #b7d316;
  --clr-lime-500: #7fb906;
  --clr-lime-600: #65a30d;
  --clr-lime-700: #427705;
  --clr-lime-800: #325709;
  --clr-lime-900: #26430a;

  --clr-green-50:  #edf9f6;
  --clr-green-100: #d8f8ed;
  --clr-green-200: #acf3d4;
  --clr-green-300: #6debb4;
  --clr-green-400: #23db83;
  --clr-green-500: #0ac755;
  --clr-green-600: #16a34a;
  --clr-green-700: #0f9038;
  --clr-green-800: #127035;
  --clr-green-900: #125a2e;

  --clr-emerald-50:  #eaf8f7;
  --clr-emerald-100: #cef7f0;
  --clr-emerald-200: #9cf2de;
  --clr-emerald-300: #5ceac8;
  --clr-emerald-400: #1adaa6;
  --clr-emerald-500: #07c57f;
  --clr-emerald-600: #07ac63;
  --clr-emerald-700: #059669;
  --clr-emerald-800: #107048;
  --clr-emerald-900: #105b3d;

  --clr-teal-50:  #ecf8f8;
  --clr-teal-100: #d0f7f3;
  --clr-teal-200: #9ff1e6;
  --clr-teal-300: #60e7d6;
  --clr-teal-400: #1ed6be;
  --clr-teal-500: #09be9f;
  --clr-teal-600: #0d9488;
  --clr-teal-700: #0e8569;
  --clr-teal-800: #116854;
  --clr-teal-900: #105445;

  --clr-cyan-50:  #f0f9fb;
  --clr-cyan-100: #d8f7f8;
  --clr-cyan-200: #aaeff1;
  --clr-cyan-300: #70e2eb;
  --clr-cyan-400: #2ccae1;
  --clr-cyan-500: #0fabd3;
  --clr-cyan-600: #0891b2;
  --clr-cyan-700: #116f97;
  --clr-cyan-800: #12556f;
  --clr-cyan-900: #114557;

  --clr-lightblue-50:  #f3fafc;
  --clr-lightblue-100: #dff8fb;
  --clr-lightblue-200: #b5ecf7;
  --clr-lightblue-300: #81dcf5;
  --clr-lightblue-400: #3fbcf2;
  --clr-lightblue-500: #0284c7;
  --clr-lightblue-600: #1273df;
  --clr-lightblue-700: #145bbc;
  --clr-lightblue-800: #14458a;
  --clr-lightblue-900: #113769;

  --clr-blue-50:  #f6fbfd;
  --clr-blue-100: #e7f7fd;
  --clr-blue-200: #c3e7fb;
  --clr-blue-300: #9cd0fb;
  --clr-blue-400: #65a5fa;
  --clr-blue-500: #2563eb;
  --clr-blue-600: #2353f4;
  --clr-blue-700: #1f41de;
  --clr-blue-800: #1932ac;
  --clr-blue-900: #152984;

  --clr-indigo-50:  #f5f8fc;
  --clr-indigo-100: #e9f1fc;
  --clr-indigo-200: #cfdafb;
  --clr-indigo-300: #b3befa;
  --clr-indigo-400: #9091fa;
  --clr-indigo-500: #6a63fa;
  --clr-indigo-600: #4f43f6;
  --clr-indigo-700: #3f35e4;
  --clr-indigo-800: #322bb9;
  --clr-indigo-900: #282492;

  --clr-violet-50:  #f7f5fa;
  --clr-violet-100: #f2e8fa;
  --clr-violet-200: #e7caf8;
  --clr-violet-300: #dda8f6;
  --clr-violet-400: #d679f5;
  --clr-violet-500: #d04ef4;
  --clr-violet-600: #b731ed;
  --clr-violet-700: #8d27d6;
  --clr-violet-800: #6b21aa;
  --clr-violet-900: #551d85;

  --clr-purple-50:  #f3f3f9;
  --clr-purple-100: #ece2fa;
  --clr-purple-200: #ddc2f9;
  --clr-purple-300: #cea3f9;
  --clr-purple-400: #c477f9;
  --clr-purple-500: #bb4cfa;
  --clr-purple-600: #9333ea;
  --clr-purple-700: #8227e8;
  --clr-purple-800: #6622c5;
  --clr-purple-900: #531fa1;

  --clr-fuchsia-50:  #fcf9f9;
  --clr-fuchsia-100: #fceff5;
  --clr-fuchsia-200: #f9d2eb;
  --clr-fuchsia-300: #f7acdd;
  --clr-fuchsia-400: #f874c4;
  --clr-fuchsia-500: #f848a6;
  --clr-fuchsia-600: #ee2c81;
  --clr-fuchsia-700: #ca2264;
  --clr-fuchsia-800: #9a1c4b;
  --clr-fuchsia-900: #77183a;

  --clr-pink-50:  #fdf9f8;
  --clr-pink-100: #fdeef3;
  --clr-pink-200: #fbcee7;
  --clr-pink-300: #fba4d3;
  --clr-pink-400: #fc6aaf;
  --clr-pink-500: #fc4089;
  --clr-pink-600: #f82562;
  --clr-pink-700: #e11d48;
  --clr-pink-800: #b4183d;
  --clr-pink-900: #8f1530;
`;
