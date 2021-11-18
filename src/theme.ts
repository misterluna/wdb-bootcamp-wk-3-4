import { extendTheme, Box } from '@chakra-ui/react';
import '@fontsource/rubik';

const overrides = {
  colors: {
    orange: {
      100: '#FF9249',
      200: '#FF8737',
      300: '#FF7C24',
      400: '#FF7112',
      500: '#FF6600',
      600: '#ED5F00',
      700: '#DB5700',
      800: '#C85000',
      900: '#B64900',
    },
    primary: {
      orange: 'orange.500',
      dark: '#2B2541',
      yellow: '#FED800',
      stone: '#F4F8FB',
      ice: '#F9FBFD',
      gray: '#7C788A',
      white: '#FFFFFF',
    },
    secondary: {
      orange: 'orange.500',
      dark: '#2b2541',
      meadow: '#7FB069',
      gold: '#F49D37',
      sand: '#E6AA68',
      lake: '#3F88C5',
      dorian: '#F5F5F5',
    },
  },
  fonts: {
    rubik: 'Rubik',
  },
  textStyles: {
    defaults: {
      lineHeight: '100%',
      fontFamily: 'rubik',
    },
    h1: {
      fontSize: '36px',
      fontWeight: '700',
    },
    h2: {
      fontSize: '30px',
      fontWeight: '700',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '700',
    },
    h4: {
      fontSize: '18px',
      fontWeight: '700',
    },
    h5: {
      fontSize: '16px',
      fontWeight: '700',
    },
    subtitle1: {
      fontSize: '22px',
      fontWeight: '700',
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: '700',
    },
    subtitle3: {
      fontSize: '16px',
      fontWeight: '700',
    },
    subtitle4: {
      fontSize: '14px',
      fontWeight: '700',
    },
    subtitle5: {
      fontSize: '12px',
      fontWeight: '500',
    },

    body1: {
      fontSize: '16px',
      fontWeight: '400',
    },
    body2: {
      fontSize: '14px',
      fontWeight: '400',
    },
    body3: {
      fontSize: '12px',
      fontWeight: '400',
    },
    body4: {
      fontSize: '10px',
      fontWeight: '400',
    },
    body5: {
      fontSize: '8px',
      fontWeight: '400',
    },
    section1: {
      textTransform: 'uppercase',
      fontSize: '12px',
      fontWeight: '400',
    },
    section2: {
      textTransform: 'uppercase',
      fontSize: '10px',
      fontWeight: '400',
    },
  },

  components: {
    Box: {
      baseStyle: {
        borderRadius: 'none',
      },
      variants: {
        milestoneCard: {
          bg: 'primary.orange',
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 'none',
      },
      sizes: {
        md: {
          w: '179px',
          h: '36px',
          fontSize: 'h5',
          borderRadius: '6px',
        },
        lg: {
          w: '224px',
          h: '36px',
          fontSize: 'h5',
          borderRadius: '6px',
        },
      },
      variants: {
        primary: {
          backgroundColor: 'orange.500',
          color: '#FFF',
        },
        hintIcon: {
          bg: 'orange.500',
          color: '#FFF',
          w: '48px',
          h: '48px',
          borderRadius: '48px',
          webkitBoxShadow: '1px 3px 5px rgba(148, 148, 148, 0.25)',
          boxShadow: '1px 3px 5px rgba(148, 148, 148, 0.25)',
        },
        tagXl: {
          w: '118px',
          h: '30px',
          borderRadius: '16px',
          backgroundColor: 'orange.500',
          color: 'white',
        },
        tagLg: {
          w: '108px',
          h: '28px',
          borderRadius: '16px',
          bg: 'white',
        },
        tagMdColor: {
          w: '98px',
          h: '30px',
          borderRadius: '16px',
          bg: 'orange.500',
          color: 'primary.white',
        },
        tagMd: {
          w: '98px',
          h: '30px',
          borderRadius: '16px',
          bg: 'white',
          color: 'primary.gray',
        },
        tagSmColor: {
          w: '82px',
          h: '26px',
          borderRadius: '16px',
          bg: 'orange.100',
          color: 'primary.white',
          fontSize: '14px',
        },
        tagSm: {
          w: '82px',
          h: '26px',
          borderRadius: '16px',
          bg: 'secondary.dorian',
          color: 'primary.dark',
          fontSize: '14px',
        },
        tagIcon: {
          w: '52px',
          h: '38px',
          borderRadius: '16px',
          bg: 'primary.white',
          color: 'primary.gray',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Inter',
        fontWeight: '600',
      },
      sizes: {
        small: {
          fontSize: '20px',
        },
        medium: { fontSize: '25px' },
        large: { fontSize: '30px' },
      },
    },
  },
};
const customTheme2 = extendTheme(overrides);

export default customTheme2;
