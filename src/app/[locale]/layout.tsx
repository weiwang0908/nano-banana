import { notFound } from 'next/navigation'
import { type Locale } from '@/lib/translations'

const locales: Locale[] = ['en', 'zh']

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return (
    <div>
      {children}
    </div>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
