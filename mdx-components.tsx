type MDXComponents = {
  [key: string]: React.ComponentType<any>
}

// This is the file Next.js looks for to provide components to MDX
export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }: { children: React.ReactNode }) => <h1 className='mt-2 scroll-m-20 text-4xl font-bold tracking-tight'>{children}</h1>,
    h2: ({ children }: { children: React.ReactNode }) => <h2 className='mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>{children}</h2>,
    h3: ({ children }: { children: React.ReactNode }) => <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>{children}</h3>,
    h4: ({ children }: { children: React.ReactNode }) => <h4 className='mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>{children}</h4>,
    p: ({ children }: { children: React.ReactNode }) => <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>,
    ul: ({ children }: { children: React.ReactNode }) => <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>{children}</ul>,
    code: ({ children }: { children: React.ReactNode }) => (
      <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>{children}</code>
    ),
    ...components,
  }
}
