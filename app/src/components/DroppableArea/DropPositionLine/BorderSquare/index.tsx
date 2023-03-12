import React from 'react'

enum Position {
	LEFT = 'left',
	RIGHT = 'right',
}

interface Props {
	position: Position;
}

export const BorderSquare = ({position}: Props) => {
  return (
    <div className={`absolute bg-purple w-[4px] h-[4px] rotate-45 ${position===Position.LEFT ? 'left-[-2px]' : 'right-[-2px]'}`}/>
  )
}

BorderSquare.position = Position;
