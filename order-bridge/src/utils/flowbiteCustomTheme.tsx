import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      inner:
        'h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-0 py-0 dark:bg-gray-800',
    },
  },
  button: {
    color: {
      primary: 'bg-app hover:bg-app-dark text-white',
      secondary:
        'bg-transparent hover:bg-app-bg-primary text-app border border-app',
      transparent:
        'bg-transparent hover:bg-gray-50 text-slate-primary border-gray-300 border',
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          primary:
            'border-gray-300 bg-gray-50 focus:border-app focus:outline-none focus:ring-app',
        },
      },
    },
  },
  textarea: {
    colors: {
      primary:
        'border-gray-300 bg-gray-50 focus:border-app focus:outline-none focus:ring-app',
    },
  },
  select: {
    field: {
      select: {
        colors: {
          primary:
            'border-gray-300 bg-gray-50 focus:border-app focus:outline-none focus:ring-app',
        },
      },
    },
  },
  checkbox: {
    root: {
      color: {
        primary:
          'text-app focus:ring-app dark:ring-offset-gray-800 dark:focus:ring-app',
      },
    },
  },
  breadcrumb: {
    item: {
      href: {
        off: 'flex items-center text-xs font-medium text-gray-500 dark:text-gray-400',
        on: 'flex items-center text-xs font-medium text-gray-700 hover:text-app',
      },
    },
  },
  table: {
    root: {
      base: 'w-full text-left text-sm text-gray-500 dark:text-gray-400',
      shadow:
        'absolute left-0 top-0 -z-10 h-full w-full rounded-t-lg bg-white drop-shadow-sm dark:bg-black',
      wrapper: 'relative',
    },
    body: {
      base: 'group/body',
      cell: {
        base: 'px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg',
      },
    },
  },
  radio: {
    root: {
      base: 'h-4 w-4 border border-gray-400 text-app focus:ring-2 focus:ring-app',
    },
  },
  tooltip: {
    arrow: {
      base: 'absolute z-10 h-2 w-2 rotate-45',
      style: {
        dark: 'bg-app',
        light: 'bg-white',
        auto: 'bg-white dark:bg-gray-700',
      },
      placement: '-4px',
    },
    base: 'absolute z-10 inline-block rounded-lg px-3 py-2 text-sm shadow-sm',
    hidden: 'invisible opacity-0',
    style: {
      dark: 'bg-app text-white',
      light: 'border border-gray-200 bg-white text-gray-900',
      auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
    },
    content: 'relative z-20',
  },
  toggleSwitch: {
    root: {
      base: 'group flex rounded-lg focus:outline-none',
      active: {
        on: 'cursor-pointer',
        off: 'cursor-not-allowed opacity-50',
      },
      label:
        'ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300',
    },
    toggle: {
      base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-4 group-focus:ring-app/25',
      checked: {
        on: 'after:translate-x-full after:border-white rtl:after:-translate-x-full',
        off: 'border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700',
        color: {
          blue: 'border-app bg-app',
        },
      },
      sizes: {
        sm: 'h-5 w-9 min-w-9 after:left-px after:top-px after:h-4 after:w-4 rtl:after:right-px',
        md: 'h-6 w-11 min-w-11 after:left-px after:top-px after:h-5 after:w-5 rtl:after:right-px',
        lg: 'h-7 w-14 min-w-14 after:left-1 after:top-0.5 after:h-6 after:w-6 rtl:after:right-1',
      },
    },
  },
  badge: {
    root: {
      base: 'flex flex-row w-auto  justify-center items-center gap-1',
      color: {
        primary: 'bg-app hover:bg-app-dark text-white',
        secondary:
          'bg-transparent hover:bg-app-bg-primary text-app border border-app',
      },
    },
  },

  datepicker: {
    root: {
      input: {
        field: {
          input: {
            sizes: {
              md: 'px-2 py-1 text-sm border-gray-300 bg-gray-50 focus:border-app focus:outline-none focus:ring-app',
            },
          },
        },
      },
    },
    popup: {
      root: {
        base: "absolute top-10 right-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
      },
      footer: {
        base: 'mt-2 flex space-x-2',
        button: {
          base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-2 focus:ring-app',
          today: 'bg-app text-white hover:bg-app-dark',
          clear:
            'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100',
        },
      },
    },
    views: {
      days: {
        header: {
          base: 'mb-1 grid grid-cols-7',
          title:
            'h-6 text-center text-sm font-medium leading-6 text-gray-500 ',
        },
        items: {
          base: 'grid w-64 grid-cols-7',
          item: {
            base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
            selected: 'bg-app text-white hover:bg-app-dark',
            disabled: 'text-gray-500',
          },
        },
      },
      months: {
        items: {
          base: 'grid w-64 grid-cols-4',
          item: {
            base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
            selected: 'bg-app text-white hover:bg-app-dark',
            disabled: 'text-gray-500',
          },
        },
      },
      years: {
        items: {
          base: 'grid w-64 grid-cols-4',
          item: {
            base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
            selected: 'bg-app text-white hover:bg-app-dark',
            disabled: 'text-gray-500',
          },
        },
      },
      decades: {
        items: {
          base: 'grid w-64 grid-cols-4',
          item: {
            base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
            selected: 'bg-app text-white hover:bg-app-dark',
            disabled: 'text-gray-500',
          },
        },
      },
    },
  },


};

export default customTheme;
