import { useEffect, useState } from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonProps {
	height?: string
	className?: string
	classNameImg?: string
	src: string
}

export const Skeleton = ({
	classNameImg,
	className,
	height = '100px',
	src,
}: SkeletonProps) => {
	const [loadImg, setLoadImg] = useState(true)
	const onLoadImg = () => {
		setLoadImg(false)
	}

	useEffect(() => {
		setLoadImg(true)
	}, [src])

	return (
		<>
			<img
				style={loadImg ? { height: '0',width:'0' } : {}}
				onLoad={onLoadImg}
				className={[styles.img, classNameImg].join(' ')}
				src={src}
				loading={'lazy'}
				alt='logo'
			/>
			{loadImg && (
				<div
					className={[styles.skeleton, className].join(' ')}
					style={{ height: height }}
				/>
			)}
		</>
	)
}
