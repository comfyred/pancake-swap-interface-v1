import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://comfyswap.com',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'ComfyToken Website',
        href: 'https://comfytoken.com',
      },
      {
        label: 'BSCscan',
        href: 'https://bscscan.com/token/0xc737b44cb0aa18815a1f6918eb338dee7e7e6bd7',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/comfytoken',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/comfytokenchat',
      },
    ],
  },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Contact',
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //     {
  //       label: 'Merch',
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
]

export default config
