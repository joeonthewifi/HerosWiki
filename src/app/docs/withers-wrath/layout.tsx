import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/icons/witherswrathicon.png',
  },
};

export default function Layout({ children }: LayoutProps<'/docs/withers-wrath'>) {
  return (
    <div style={{ fontFamily: 'Upheavel, Inter, sans-serif' }}>
      {children}
    </div>
  );
}
