import { FC, DOMAttributes } from 'react'
import { TButton } from './types'

import classNames from 'classnames'
import './Button.scss'

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
	className?: string
	isDisabled?: boolean
	typeButton?: TButton
	onClick?: (event: React.MouseEvent) => void
}

export const Button: FC<IButtonProps> = ({
	className,
	isDisabled,
	typeButton,
	onClick,
	children,
	...otherProps
}): JSX.Element => {
	return (
		<button
			className={classNames('Button', className, { Button__disabled: isDisabled })}
			{...otherProps}
			disabled={isDisabled}
			type='button'
			onClick={onClick}>
			<span>{children}</span>
		</button>
	)
}
