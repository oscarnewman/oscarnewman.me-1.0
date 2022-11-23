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

export function VSpacer({ size }: Props) {
  return <div className={`h-${size}`} />
}

export function HSpacer({ size }: Props) {
  return <div className={`w-${size}`} />
}
