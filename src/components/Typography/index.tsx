export const H1 = ({ children }) => (
  <h1 className="text-6xl leading-none md:text-6xl font-bold tracking-tight">
    {children}
  </h1>
)

export const H2 = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-bold">{children}</h2>
)

export const H3 = ({ children }) => (
  <h3 className="text-4xl md:text-4xl font-bold">{children}</h3>
)
3
export const H4 = ({ children }) => (
  <h4 className="text-4xl md:text-3xl font-bold">{children}</h4>
)

export const H5 = ({ children }) => (
  <h5 className="text-4xl md:text-2xl font-bold">{children}</h5>
)
export const H6 = ({ children }) => (
  <h6 className="text-4xl md:text-xl font-bold">{children}</h6>
)

export const P = ({ children }) => <p className="md:text-lg">{children}</p>
