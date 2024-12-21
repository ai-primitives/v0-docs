import { cn } from '@/lib/utils'

export function TypographyH1({ children, className }: { children: React.ReactNode; className?: string; props?: React.HTMLAttributes<HTMLHeadingElement> }) {
  return <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>{children}</h1>
}

export function TypographyH2({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}>{children}</h2>
}

export function TypographyH3({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>{children}</h3>
}

export function TypographyH4({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>{children}</h4>
}

export function TypographyP({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>{children}</p>
}

export function TypographyBlockquote({ children, className }: { children: React.ReactNode; className?: string }) {
  return <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>{children}</blockquote>
}

export function TypographyTable({ data, className }: { data: Record<string, React.ReactNode>[]; className?: string }) {
  return (
    <div className={cn('my-6 w-full overflow-y-auto', className)}>
      <table className='w-full'>
        <thead>
          <tr className='m-0 border-t p-0 even:bg-muted'>
            <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>{data[0][0]}</th>
            <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>{data[0][1]}</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, index) => (
            <tr key={index} className='m-0 border-t p-0 even:bg-muted'>
              <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>{row[0]}</td>
              <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function TypographyList({ items, className }: { items: React.ReactNode[]; className?: string }) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export function TypographyInlineCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return <code className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}>{children}</code>
}

export function TypographyLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-xl text-muted-foreground', className)}>{children}</p>
}

export function TypographyLarge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('text-lg font-semibold', className)}>{children}</div>
}

export function TypographySmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return <small className={cn('text-sm font-medium leading-none', className)}>{children}</small>
}

export function TypographyMuted({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
}
