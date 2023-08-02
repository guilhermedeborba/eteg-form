export interface ColorSelectorProps {
  onChange: (color: ColorTypeEnum) => void
}

export enum ColorTypeEnum {
  Green = 'green',
  Blue = 'blue',
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Violet = 'violet',
}
