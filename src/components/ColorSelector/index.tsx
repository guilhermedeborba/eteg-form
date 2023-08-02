import { useEffect, useState } from 'react'
import { ColorTypeEnum, ColorSelectorProps } from './types'
import cx from 'classnames'

export default function ColorSelector({ onChange }: ColorSelectorProps) {
  const [color, setColor] = useState<ColorTypeEnum>()

  useEffect(() => {
    if (color) {
      onChange(color)
    }
  }, [color, onChange])

  return (
    <div className="flex w-full gap-2">
      {Object.values(ColorTypeEnum).map((colorType) => (
        <span
          className={cx('transition-all hover:scale-110 cursor-pointer rounded-md flex w-10 h-10', {
            'scale-110 border-2 border-gray-800': color === colorType,
          })}
          style={{ backgroundColor: colorType }}
          onClick={() => setColor(colorType)}
          key={colorType}
        />
      ))}
    </div>
  )
}
