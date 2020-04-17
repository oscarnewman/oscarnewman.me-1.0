interface Props {
  size?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 8
    | 10
    | 12
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 56
    | 64
}

export const VSpacer: React.SFC<Props> = ({ size }) => (
  <div className={`h-${size}`}></div>
)

export const HSpacer: React.SFC<Props> = ({ size }) => (
  <div className={`w-${size}`}></div>
)
