import classNames from 'classnames';
import React from 'react';
import {BorderSquare} from './BorderSquare';

enum Position {
	TOP = 'top',
	BOT = 'bot',
}

interface Props {
	position: Position;
}

export const DropPositionLine = ({position}: Props) => {
	return (
		<div
			className={classNames({
				'duration-150 transform-1 absolute flex items-center justify-between w-full h-[2px] bg-purple': true,
				'top-[-5px]': position === Position.TOP,
        'bottom-[-5px]': position === Position.BOT,
			})}
		>
			<BorderSquare position={BorderSquare.position.LEFT} />
			<BorderSquare position={BorderSquare.position.RIGHT} />
		</div>
	);
};

DropPositionLine.position = Position;
