import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode(`gray.800`, `whiteAlpha.900`)(props),
        bg: mode(`#fafbfb`, `#20232a`)(props),
      },
    }),
  },
});
