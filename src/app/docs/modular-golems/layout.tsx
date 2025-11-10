import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/icons/modulargolemsicon.png',
  },
};

export default function Layout({ children }: LayoutProps<'/docs/modular-golems'>) {
  return (
    <div style={{ fontFamily: 'BebasNeue, Inter, sans-serif' }}>
      {children}
    </div>
  );
}
